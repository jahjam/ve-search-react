import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import useRequest from '../../hooks/use-request';

const ResultsBox = styled(motion.div)`
  height: 18rem;
  min-width: 12.5rem;
  max-width: 12.5rem;
  padding: 2rem;
  padding-top: 2rem;

  opacity: 0;

  border: 0.2rem solid black;
  background-color: #a4d2ac;
  cursor: pointer;

  &:hover {
    background-color: #58b15a;
  }
`;

const ResultStyled = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  position: relative;

  & span:nth-child(2) {
    height: 10%;

    text-align: center;
    line-height: 1.7rem;
    font-size: 1.2rem;
  }

  & span:nth-child(3) {
    text-align: center;
    margin-top: -0.6rem;
    font-size: 1.2rem;
    font-weight: 700;
  }

  & span:nth-child(4) {
    text-align: center;
    margin-top: -0.8rem;
    font-size: 1.2rem;
  }
`;

const ImgContainerStyled = styled.div`
  height: 6rem;
  width: 6rem;
  border: 0.2rem solid black;
  border-radius: 50%;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;

  & img {
    height: 120%;
    width: 120%;
  }
`;

const ResultCard = props => {
  const resultBoxWidth = useRef();

  const onClickHandler = () => {
    props.getResult(props.id);
  };

  const PADDING_SIZE = 40;
  useEffect(() => {
    props.setScrollWidth(
      props.sliderEl.current.scrollWidth - props.sliderEl.current.offsetWidth,
      +resultBoxWidth.current.getBoundingClientRect().width + PADDING_SIZE
    );
  }, [props]);

  const { sendRequest } = useRequest();
  const [recipeRating, setRecipeRating] = useState(null);

  useEffect(() => {
    const receiver = data => {
      setRecipeRating(data.data.ratings[0].avgRatings);
    };

    sendRequest(
      { url: `/api/v1/reviews/ratingsAverage/${props.id}` },
      receiver
    );
  }, [sendRequest, props.id]);

  return (
    <ResultsBox
      onClick={onClickHandler}
      animate={{ opacity: 1 }}
      ref={resultBoxWidth}
    >
      <ResultStyled>
        <ImgContainerStyled>
          <img src={`/public/img/recipes/${props.image}`} alt="food" />
        </ImgContainerStyled>
        <span>{props.title}</span>
        <span>{props.author}</span>
        <span>{recipeRating ? `Rating: ${recipeRating}` : ''}</span>
      </ResultStyled>
    </ResultsBox>
  );
};

export default ResultCard;
