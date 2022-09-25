import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

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
`;

const ImgContainerStyled = styled.div`
  height: 6rem;
  width: 6rem;
  border: 0.2rem solid black;
  border-radius: 50%;
  overflow: hidden;

  & img {
    height: 120%;
    width: 120%;
    display: flex;
    align-items: center;
  }
`;

const ResultCard = props => {
  const resultBoxWidth = useRef();

  const PADDING_SIZE = 40;
  useEffect(() => {
    props.setScrollWidth(
      props.sliderEl.current.scrollWidth - props.sliderEl.current.offsetWidth,
      +resultBoxWidth.current.getBoundingClientRect().width + PADDING_SIZE
    );
  }, [props]);

  return (
    <ResultsBox animate={{ opacity: 1 }} ref={resultBoxWidth}>
      <ResultStyled>
        <ImgContainerStyled>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Japanese_SilkyTofu_%28Kinugoshi_Tofu%29.JPG/2560px-Japanese_SilkyTofu_%28Kinugoshi_Tofu%29.JPG"
            alt="food"
          />
        </ImgContainerStyled>
        <span>{props.title}</span>
        <span>{props.author}</span>
      </ResultStyled>
    </ResultsBox>
  );
};

export default ResultCard;
