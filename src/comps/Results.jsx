import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import useRequest from '../hooks/use-request';
import { motion } from 'framer-motion';

import {
  ResultsStyles,
  RecipeResults,
  RecipeContainer,
  ResultsBtnStyles,
} from '../styled/styledComps/styledResults';

import { ReactComponent as RightArrow } from '../imgs/svg/right-arrow.svg';
import { ReactComponent as LeftArrow } from '../imgs/svg/left-arrow.svg';
import ResultsCard from '../comps/temps/ResultsCard';
import GhostCard from '../comps/temps/GhostCard';

const Results = props => {
  const navigate = useNavigate();
  const [results, setResults] = useState(null);

  const inputResult = props.inputResult;
  const { isLoading, isError, errorMsg, sendRequest } = useRequest();

  useEffect(() => {
    const receiver = data => {
      setResults(data);
    };

    sendRequest({ url: `/api/v1/recipes?name=${inputResult}` }, receiver);
  }, [inputResult, sendRequest]);

  // retrieve data for calculating dom elements widths
  const slider = useRef();
  const recipeResults = useRef();
  const [sliderWidth, setSliderWidth] = useState(0);
  const [resultBoxWidth, setResultBoxWidth] = useState(0);

  const scrollWidthHandler = (scrollWidth, resultBoxWidth) => {
    setSliderWidth(scrollWidth);
    setResultBoxWidth(resultBoxWidth);
  };

  const [curSlide, setCurSlide] = useState({ current: 0 });
  const NUM_OF_CARDS_PER_VIEW = 4;

  // reset cards to beginning on new search
  useEffect(() => {
    setCurSlide({ current: 0 });
  }, [inputResult]);

  const rightArrowHandler = () => {
    if (!results) return;

    if (
      curSlide.current + NUM_OF_CARDS_PER_VIEW <
      results.data.recipes.length
    ) {
      setCurSlide(prevState => {
        return { current: prevState.current + 1 };
      });
    }
  };

  const leftArrowHandler = () => {
    if (!results) return;

    if (curSlide.current > 0) {
      setCurSlide(prevState => {
        return { current: prevState.current - 1 };
      });
    }
  };

  const getResultHandler = id => {
    navigate(`/search/${id}`);
  };

  return (
    <ResultsStyles
      animate={{ opacity: 1 }}
      transition={{ type: 'spring', duration: 0.2 }}
    >
      <ResultsBtnStyles onClick={leftArrowHandler} btnSize="large">
        <LeftArrow />
      </ResultsBtnStyles>
      <RecipeResults ref={recipeResults}>
        <RecipeContainer
          animate={{ x: -curSlide.current * (resultBoxWidth - 20) }}
          ref={slider}
          drag="x"
          dragConstraints={{ left: -sliderWidth, right: 0 }}
          whileTap={{ cursor: 'grabbing' }}
        >
          {isLoading &&
            [
              <GhostCard key="1" />,
              <GhostCard key="2" />,
              <GhostCard key="3" />,
              <GhostCard key="4" />,
              <GhostCard key="5" />,
            ].map(card => card)}
          {results &&
            results.data.recipes.map(recipe => (
              <ResultsCard
                key={recipe.id}
                id={recipe.id}
                title={recipe.name}
                image={recipe.coverImage}
                author={recipe.author.username}
                setScrollWidth={scrollWidthHandler}
                sliderEl={slider}
                getResult={getResultHandler}
              />
            ))}

          {isError && (
            <motion.p
              initial={{ opacity: 0, color: 'red' }}
              animate={{ opacity: 1 }}
              key="1"
            >
              {errorMsg}
            </motion.p>
          )}

          {results && results.data.recipes.length === 0 && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} key="1">
              Sorry, no recipes found! <br /> Please try another...
            </motion.p>
          )}
        </RecipeContainer>
      </RecipeResults>
      <ResultsBtnStyles onClick={rightArrowHandler} btnSize="large">
        <RightArrow />
      </ResultsBtnStyles>
    </ResultsStyles>
  );
};

export default Results;
