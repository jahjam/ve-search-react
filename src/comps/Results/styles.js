import styled from 'styled-components';
import { motion } from 'framer-motion';

import Button from '../temps/Button/Button';
import { Flex } from '../../styled-utils/mixins';
import { breakpoint } from '../../styled-utils/breakpoints';

export const Results = styled(motion.section)`
  height: auto;
  transition: all 1s;
  opacity: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  @media (${breakpoint('maxBreakThree')}) {
    gap: 1rem;
  }
`;

export const RecipeResults = styled.div`
  padding: 2rem;
  width: 60rem;
  height: auto;

  overflow: hidden;
  border: 0.2rem solid black;

  @media (${breakpoint('maxBreakOne')}) {
    width: 50rem;
  }

  @media (${breakpoint('maxBreakTwo')}) {
    width: 43.8rem;
  }

  @media (${breakpoint('maxBreakThree')}) {
    padding: 1rem 1rem;
    width: 31.5rem;
  }

  @media (${breakpoint('maxBreakFour')}) {
    padding: 0.5rem 0.5rem;
    width: 20rem;
  }
`;

export const RecipeContainer = styled(motion.div)`
  height: auto;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 2rem;

  & p {
    margin: auto;
    text-align: center;
    font-size: 1.4rem;
  }

  @media (${breakpoint('maxBreakThree')}) {
    gap: 1rem;
  }

  @media (${breakpoint('maxBreakFour')}) {
    gap: 0.5rem;
  }
`;

export const ResultsBtn = styled(Button)`
  height: 20rem;
  min-width: 8rem;
  max-width: 8rem;
  cursor: pointer;

  ${Flex()}
  background-color: var(--main-theme-color);

  & :first-child {
    height: 20px;
    width: 20px;
    line-height: 100%;
  }

  @media (${breakpoint('maxBreakOne')}) {
    height: 16rem;
  }

  @media (${breakpoint('maxBreakTwo')}) {
    min-width: 6rem;
    max-width: 6rem;
  }

  @media (${breakpoint('maxBreakThree')}) {
    height: 10rem;
    min-width: 4rem;
    max-width: 4rem;
  }

  @media (${breakpoint('maxBreakFour')}) {
    height: 10rem;
    min-width: 3rem;
    max-width: 3rem;
  }
`;
