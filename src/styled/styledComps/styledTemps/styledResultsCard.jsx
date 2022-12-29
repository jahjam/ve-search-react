import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ResultsBox = styled(motion.div)`
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

export const ResultStyled = styled.div`
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

export const ImgContainerStyled = styled.div`
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
