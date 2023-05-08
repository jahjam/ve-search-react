import { useParams } from 'react-router-dom';
import useRequest from '../../hooks/use-request';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { API } from '../../config';

import * as Styled from './styles';

import LinkSection from './LinkSection';
import GhostResult from '../../components/GhostResult/GhostResult';
import MethodCard from '../../components/MethodCard/MethodCard';
import RecipeImageBox from './RecipeImageSection';
import HeaderContainer from './HeaderSection';
import RecipeServingsBox from './RecipeServingsSection';
import NutritionalInfo from './NutritionalSection';
import IngredientBox from './IngredientSection';
import CommentsSection from './CommentsSection';

const Result = () => {
  const params = useParams();

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

    sendRequest({ url: API + `/api/v1/recipes/${params.resultId}` }, receiver);
  }, [params.resultId, sendRequest]);

  const setServingHandler = serving => {
    setServing(serving);
  };

  const setIngsHandler = ings => {
    setIngs(ings);
  };

  return (
    <Styled.Container>
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
        <Styled.RecipeListingSection
          animate={{ opacity: 1 }}
          transition={{ type: 'spring', duration: 0.2 }}
        >
          <Styled.RecipeListingContainer>
            <RecipeImageBox coverImage={result.data.recipe.coverImage} />

            <HeaderContainer
              name={result.data.recipe.name}
              recipe={result.data.recipe}
            />

            <RecipeServingsBox
              serving={serving}
              setServingHandler={setServingHandler}
              ings={ings}
              setIngsHandler={setIngsHandler}
            />

            {result.data.recipe.nutritionProvided ? (
              <NutritionalInfo nutrition={result.data.recipe.nutrition} />
            ) : (
              <Styled.NoNutritionInfo>
                No nutritional information provided for this recipe.
              </Styled.NoNutritionInfo>
            )}

            <IngredientBox ings={ings} />
          </Styled.RecipeListingContainer>
        </Styled.RecipeListingSection>
      )}

      {result && result.data.recipe.methodsProvided && (
        <Styled.MethodsSection>
          <h2>Methods</h2>

          {result.data.recipe.methods.map(method => (
            <MethodCard key={method.id} id={method.id} method={method.method} />
          ))}
        </Styled.MethodsSection>
      )}

      {result && !result.data.recipe.methodsProvided && (
        <LinkSection
          publisher={result.data.recipe.author.username}
          url={result.data.recipe.methodsAlternative}
        />
      )}

      {!isError && <CommentsSection />}
    </Styled.Container>
  );
};

export default Result;
