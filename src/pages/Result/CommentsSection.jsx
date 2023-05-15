import { useParams } from 'react-router-dom';
import useRequest from '../../hooks/use-request';
import { useState, useEffect, useMemo, useContext, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import Pagination from '../../components/Pagination/Pagination';
import { API } from '../../config';

import * as Styled from './styles';

import AuthContext from '../../store/auth-context';
import ReviewCard from '../../components/ReviewCard/ReviewCard';
import GhostReview from '../../components/GhostReview/GhostReview';

const PAGE_SIZE = 4;

const CommentsSection = () => {
  const params = useParams();
  const authCtx = useContext(AuthContext);

  const [reviews, setReviews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [comment, setComment] = useState({ comment: '' });
  const [leaveComment, setleaveComment] = useState(false);
  const rating = useRef();

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PAGE_SIZE;
    const lastPageIndex = firstPageIndex + PAGE_SIZE;
    reviews.sort((a, b) => new Date(b.date) - new Date(a.date));
    return reviews?.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, reviews]);

  const { isLoading, sendRequest, isError, errorMsg } = useRequest();

  const handleXClick = () => {
    setleaveComment(!leaveComment);
  };

  const handleCommentDelete = id => {
    const newReviews = reviews?.filter(review => review._id !== id);
    setReviews(newReviews);
  };

  useEffect(() => {
    const receiver = data => {
      setReviews(data.data.reviews);
    };

    sendRequest(
      { url: API + `/api/v1/recipes/${params.resultId}/reviews` },
      receiver
    );
  }, [params.resultId, sendRequest, authCtx.isLoggedIn]);

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
        date: data.data.review.date,
        _id: data.data.review._id,
      };

      setReviews(prevState => [...prevState, review]);
      setleaveComment(!leaveComment);
    };

    sendRequest(
      {
        url: `${API}/api/v1/recipes/${params.resultId}/reviews`,
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          rating: +rating.current.value,
          comment: comment.comment,
        }),
      },
      receiver
    );
  };

  return (
    <Styled.StyledCommentsSection>
      <h2>Comments</h2>

      <AnimatePresence>
        {!leaveComment && authCtx.isLoggedIn && (
          <Styled.LeaveCommentSpan
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={leaveCommentHandler}
          >
            Leave a comment
          </Styled.LeaveCommentSpan>
        )}

        {leaveComment && authCtx.isLoggedIn && (
          <Styled.CommentBox
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Styled.XIcon onClick={handleXClick} />
            <h3>Leave a comment and rating.</h3>

            <form onSubmit={submitHandler}>
              <label htmlFor="rating">Rating:</label>
              <input ref={rating} name="rating" type="number"></input>

              <label>Comment:</label>
              <Styled.CommentSpan
                value={comment.comment}
                onInput={e => commentChangeHandler(e)}
                role="textbox"
                id="description"
                contentEditable
              ></Styled.CommentSpan>

              {isError && <Styled.ErrorMessage>{errorMsg}</Styled.ErrorMessage>}

              <Styled.CommentSubmitBtn type="submit" btnSize="medium">
                Submit
              </Styled.CommentSubmitBtn>
            </form>
          </Styled.CommentBox>
        )}
      </AnimatePresence>

      {isLoading &&
        currentTableData.map((_review, i) => <GhostReview key={i} />)}

      {!authCtx.isLoggedIn ? (
        <h3>You must be logged in to view or leave a comment!</h3>
      ) : (
        currentTableData.map(review => (
          <ReviewCard
            key={review._id}
            review_id={review._id}
            rating={review.rating}
            comment={review.comment}
            date={review.date}
            author={review.author.username}
            author_id={review.author._id}
            img={review.author.photo}
            handleCommentDelete={handleCommentDelete}
          />
        ))
      )}

      <Pagination
        currentPage={currentPage}
        totalCount={reviews.length}
        pageSize={PAGE_SIZE}
        onPageChange={page => setCurrentPage(page)}
      />
    </Styled.StyledCommentsSection>
  );
};

export default CommentsSection;
