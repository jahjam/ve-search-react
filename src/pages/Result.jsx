import { useParams } from 'react-router-dom';
import useRequest from '../hooks/use-request';
import { useState, useEffect, useMemo, useContext, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Pagination from '../comps/temps/Pagination';

import {
  Container,
  RecipeListingSection,
  RecipeListingContainer,
  RecipeImageBox,
  RecipeServingsBox,
  ServingsBtn,
  ArrowLeftIconStyles,
  ArrowRightIconStyles,
  NutritionInfo,
  NoNutritionInfo,
  IngredientBox,
  Kcal,
  MethodsSection,
  CommentsSection,
  CommentBox,
  CommentSpan,
  LeaveCommentSpan,
  CommentSubmitBtn,
} from '../styled/styledPages/styledResult';

import AuthContext from '../store/auth-context';
import Ingredient from '../comps/Ingredient';
import LinkSection from '../comps/LinkSection';
import GhostResult from '../comps/temps/GhostResult';
import MethodCard from '../comps/temps/MethodCard';
import ReviewCard from '../comps/temps/ReviewCard';
import GhostReview from '../comps/temps/GhostReview';

const PAGE_SIZE = 8;

const DAILY_KCALS = 2500;
const DAILY_CARBS = 325;
const DAILY_FAT = 97;
const DAILY_SATURATES = 30;
const DAILY_SALT = 6;

const Result = () => {
  const params = useParams();
  const authCtx = useContext(AuthContext);

  const [result, setResult] = useState(null);
  const [ings, setIngs] = useState([]);
  const [serving, setServing] = useState(null);

  const { isLoading, isError, errorMsg, sendRequest } = useRequest();

  useEffect(() => {
    const receiver = data => {
      setResult(data);
      setIngs(data.data.recipe.ingredients);
      setServing(data.data.recipe.servings);
    };

    sendRequest({ url: `/api/v1/recipes/${params.resultId}` }, receiver);
  }, [params.resultId, sendRequest]);

  // seperate ingedients to calculate servings...
  const servingsIncreaseHandler = () => {
    const newServing = serving + 1;

    const newIngs = ings.map(ing => {
      const newIng = {
        _id: ing._id,
        amount: (ing.amount * newServing) / serving,
        measurement: ing.measurement,
        name: ing.name,
      };

      return newIng;
    });

    setServing(newServing);
    setIngs(newIngs);
  };

  const servingsDecreaseHandler = () => {
    if (serving === 1) return;

    const newServing = serving - 1;

    const newIngs = ings.map(ing => {
      const newIng = {
        _id: ing._id,
        amount: (ing.amount * newServing) / serving,
        measurement: ing.measurement,
        name: ing.name,
      };

      return newIng;
    });

    setServing(newServing);
    setIngs(newIngs);
  };

  const calculateNutritionalPercs = (amount, base) => {
    return (amount / base) * 100;
  };

  const [reviews, setReviews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [comment, setComment] = useState({ comment: '' });
  const [leaveComment, setleaveComment] = useState(false);
  const rating = useRef();

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PAGE_SIZE;
    const lastPageIndex = firstPageIndex + PAGE_SIZE;
    return reviews?.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, reviews]);

  const { isLoading: commentsLoading, sendRequest: commentsRequest } =
    useRequest();

  useEffect(() => {
    const receiver = data => {
      setReviews(data.data.reviews);
    };

    commentsRequest(
      { url: `/api/v1/recipes/${params.resultId}/reviews` },
      receiver
    );
  }, [params.resultId, commentsRequest, authCtx.isLoggedIn]);

  const commentChangeHandler = e => {
    setComment(prevState => ({
      ...prevState,
      comment: e.target.innerHTML,
    }));
  };

  const leaveCommentHandler = () => {
    setleaveComment(!leaveComment);
  };

  const submitHandler = e => {
    e.preventDefault();

    const receiver = data => {
      const review = {
        comment: data.data.review.comment,
        rating: data.data.review.rating,
        author: { username: data.data.user.username },
        _id: data.data.review._id,
      };

      setReviews(prevState => [...prevState, review]);
    };

    commentsRequest(
      {
        url: `/api/v1/recipes/${params.resultId}/reviews`,
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          rating: +rating.current.value,
          comment: comment.comment,
        }),
      },
      receiver
    );

    setleaveComment(!leaveComment);
  };

  return (
    <Container>
      {isLoading && (
        <GhostResult
          initial={{ opacity: 0.8 }}
          animate={{ opacity: 1 }}
          transition={{ repeatType: 'mirror', repeat: Infinity, duration: 0.8 }}
        />
      )}

      {isError && (
        <motion.p
          initial={{ opacity: 0, fontSize: '1.4rem', color: 'red' }}
          animate={{ opacity: 1 }}
          key="1"
        >
          {errorMsg}
        </motion.p>
      )}

      {result && (
        <RecipeListingSection
          animate={{ opacity: 1 }}
          transition={{ type: 'spring', duration: 0.2 }}
        >
          <RecipeListingContainer>
            <RecipeImageBox>
              <img
                src={`/public/img/recipes/${result.data.recipe.coverImage}`}
                alt="Food"
              />
            </RecipeImageBox>

            <h2>{result.data.recipe.name}</h2>

            <RecipeServingsBox>
              <ServingsBtn
                onClick={servingsDecreaseHandler}
                btnSize="small"
                icon={true}
              >
                <ArrowLeftIconStyles />
              </ServingsBtn>
              <span>{serving} Servings</span>
              <ServingsBtn
                onClick={servingsIncreaseHandler}
                btnSize="small"
                icon={true}
              >
                <ArrowRightIconStyles />
              </ServingsBtn>
            </RecipeServingsBox>

            {result.data.recipe.nutritionProvided && (
              <NutritionInfo>
                <div>
                  <h3>Nutritional Facts</h3>
                  <h4>(Estimated per serving)</h4>
                  <ul>
                    <li>
                      <p>Energy</p>
                      <p>
                        {result.data.recipe.nutrition.kcal.amount}
                        <Kcal>kcal</Kcal>
                      </p>
                      <p>
                        {calculateNutritionalPercs(
                          result.data.recipe.nutrition.kcal.amount,
                          DAILY_KCALS
                        ).toFixed()}
                        %
                      </p>
                    </li>
                    <li>
                      <p>Carb</p>
                      <p>
                        {result.data.recipe.nutrition.carbs.amount}
                        {result.data.recipe.nutrition.carbs.measurement}
                      </p>
                      <p>
                        {calculateNutritionalPercs(
                          result.data.recipe.nutrition.carbs.amount,
                          DAILY_CARBS
                        ).toFixed()}
                        %
                      </p>
                    </li>
                    <li>
                      <p>Fat</p>
                      <p>
                        {result.data.recipe.nutrition.fat.amount}
                        {result.data.recipe.nutrition.fat.measurement}
                      </p>
                      <p>
                        {calculateNutritionalPercs(
                          result.data.recipe.nutrition.fat.amount,
                          DAILY_FAT
                        ).toFixed()}
                        %
                      </p>
                    </li>
                    <li>
                      <p>Saturates</p>
                      <p>
                        {result.data.recipe.nutrition.saturates.amount}
                        {result.data.recipe.nutrition.saturates.measurement}
                      </p>
                      <p>
                        {calculateNutritionalPercs(
                          result.data.recipe.nutrition.saturates.amount,
                          DAILY_SATURATES
                        ).toFixed()}
                        %
                      </p>
                    </li>
                    <li>
                      <p>Salt</p>
                      <p>
                        {result.data.recipe.nutrition.salt.amount}
                        {result.data.recipe.nutrition.salt.measurement}
                      </p>
                      <p>
                        {calculateNutritionalPercs(
                          result.data.recipe.nutrition.salt.amount,
                          DAILY_SALT
                        ).toFixed()}
                        %
                      </p>
                    </li>
                  </ul>
                </div>
              </NutritionInfo>
            )}

            {!result.data.recipe.nutritionProvided && (
              <NoNutritionInfo>
                No nutritional information provided for this recipe.
              </NoNutritionInfo>
            )}

            <IngredientBox>
              <h2>Ingredients</h2>

              <ul>
                {ings.map(ingredient => (
                  <Ingredient
                    key={ingredient._id}
                    amount={ingredient.amount}
                    measurement={ingredient.measurement}
                    name={ingredient.name}
                  />
                ))}
              </ul>
            </IngredientBox>
          </RecipeListingContainer>
        </RecipeListingSection>
      )}

      {result && result.data.recipe.methodsProvided && (
        <MethodsSection>
          <h2>Methods</h2>

          {result.data.recipe.methods.map(method => (
            <MethodCard key={method.id} id={method.id} method={method.method} />
          ))}
        </MethodsSection>
      )}

      {result && !result.data.recipe.methodsProvided && (
        <LinkSection
          publisher={result.data.recipe.author.username}
          url={result.data.recipe.methodsAlternative}
        />
      )}

      <CommentsSection>
        <h2>Comments</h2>

        <AnimatePresence>
          {!leaveComment && authCtx.isLoggedIn && (
            <LeaveCommentSpan
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={leaveCommentHandler}
            >
              Leave a comment
            </LeaveCommentSpan>
          )}

          {leaveComment && authCtx.isLoggedIn && (
            <CommentBox
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <h3>Leave a comment and rating.</h3>

              <form onSubmit={submitHandler}>
                <label htmlFor="rating">Rating:</label>
                <input ref={rating} name="rating" type="number"></input>

                <label>Comment:</label>
                <CommentSpan
                  value={comment.comment}
                  onInput={e => commentChangeHandler(e)}
                  role="textbox"
                  id="description"
                  contentEditable
                ></CommentSpan>

                <CommentSubmitBtn type="submit" btnSize="medium">
                  Submit
                </CommentSubmitBtn>
              </form>
            </CommentBox>
          )}
        </AnimatePresence>

        {commentsLoading &&
          currentTableData.map((review, i) => <GhostReview key={i} />)}

        {!authCtx.isLoggedIn ? (
          <h3>You must be logged in to view or leave a comment!</h3>
        ) : (
          currentTableData
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .map(review => (
              <ReviewCard
                key={review._id}
                rating={review.rating}
                comment={review.comment}
                date={review.date}
                author={review.author.username}
              />
            ))
        )}

        <Pagination
          currentPage={currentPage}
          totalCount={reviews.length}
          pageSize={PAGE_SIZE}
          onPageChange={page => setCurrentPage(page)}
        />
      </CommentsSection>
    </Container>
  );
};

export default Result;
