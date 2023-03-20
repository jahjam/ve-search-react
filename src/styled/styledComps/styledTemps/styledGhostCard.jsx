import styled from 'styled-components';
import { motion } from 'framer-motion';
import { breakpoint } from '../../breakpoints';
import { Flex } from '../../../helpers/mixins';

export const ResultsBox = styled(motion.div)`
  height: 18rem;
  min-width: 12.5rem;
  max-width: 12.5rem;
  padding: 2rem;
  padding-top: 2rem;

  border: 0.2rem solid black;
  background-color: #e3e3e3;
  opacity: 0.6;
  cursor: pointer;

  @media (${breakpoint('maxBreakTwo')}) {
    min-width: 8.4rem;
    max-width: 8.4rem;
  }

  @media (${breakpoint('maxBreakThree')}) {
    height: 14rem;

    min-width: 6.5rem;
    max-width: 6.5rem;
  }

  @media (${breakpoint('maxBreakFour')}) {
    height: 12rem;
    min-width: 5.9rem;
    max-width: 5.9rem;
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

  & div:nth-child(2) {
    height: 10%;

    text-align: center;
    line-height: 1.7rem;
    font-size: 1.2rem;

    @media (${breakpoint('maxBreakOne')}) {
      font-size: 1.2rem;
    }

    @media (${breakpoint('maxBreakTwo')}) {
      font-size: 1.1rem;
    }

    @media (${breakpoint('maxBreakThree')}) {
      font-size: 1rem;
    }

    @media (${breakpoint('maxBreakFour')}) {
      font-size: 0.8rem;
      line-height: 1.2rem;
    }
  }

  & div:nth-child(3) {
    text-align: center;
    margin-top: -0.6rem;
    font-size: 1.2rem;
    font-weight: 700;

    @media (${breakpoint('maxBreakOne')}) {
      font-size: 1rem;
    }

    @media (${breakpoint('maxBreakFour')}) {
      font-size: 0.8rem;
    }
  }
`;

export const ImgContainerStyled = styled.div`
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

  @media (${breakpoint('maxBreakOne')}) {
    height: 5.5rem;
    width: 5.5rem;
  }

  @media (${breakpoint('maxBreakTwo')}) {
    height: 5rem;
    width: 5rem;
  }

  @media (${breakpoint('maxBreakThree')}) {
    height: 4rem;
    width: 4rem;
  }

  @media (${breakpoint('maxBreakFour')}) {
    height: 4rem;
    width: 4rem;
  }
`;
