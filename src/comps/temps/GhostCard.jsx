import styled from 'styled-components';
import { motion } from 'framer-motion';

const ResultsBox = styled(motion.div)`
  height: 18rem;
  min-width: 12.5rem;
  max-width: 12.5rem;
  padding: 2rem;
  padding-top: 2rem;

  border: 0.2rem solid black;
  background-color: #e3e3e3;
  opacity: 0.6;
  cursor: pointer;
`;

const ResultStyled = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  position: relative;

  & div:nth-child(2) {
    height: 10%;

    text-align: center;
    line-height: 1.7rem;
    font-size: 1.2rem;
  }

  & div:nth-child(3) {
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

  background-color: var(--main-light-color);

  & div {
    height: 120%;
    width: 120%;
    display: flex;
    align-items: center;
  }
`;

const GhostCard = () => {
  return (
    <ResultsBox
      animate={{ opacity: 0.2 }}
      transition={{ repeatType: 'mirror', repeat: Infinity, duration: 0.8 }}
    >
      <ResultStyled>
        <ImgContainerStyled>
          <div></div>
        </ImgContainerStyled>
        <div>Loading Recipe...</div>
        <div></div>
      </ResultStyled>
    </ResultsBox>
  );
};

export default GhostCard;
