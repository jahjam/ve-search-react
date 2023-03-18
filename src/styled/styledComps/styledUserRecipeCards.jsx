import styled from 'styled-components';
import { motion } from 'framer-motion';

import { Flex, FlexColumn } from '../../helpers/mixins';

import { breakpoint } from '../breakpoints';

export const ContainerStyled = styled(motion.section)`
  margin-top: 2rem;
  width: 100rem;
  height: auto;
  padding: 2rem;
  border: 0.2rem solid black;

  ${FlexColumn()}
  gap: 2rem;

  @media (${breakpoint('maxBreakOne')}) {
    width: 86rem;
  }

  @media (${breakpoint('maxBreakTwo')}) {
    width: 74rem;
  }

  @media (${breakpoint('maxBreakThree')}) {
    width: 30rem;
  }
`;

export const Results = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  align-items: center;
  row-gap: 2rem;
  column-gap: 1rem;

  @media (${breakpoint('maxBreakThree')}) {
    grid-template-columns: 1fr;
  }
`;

export const SearchBar = styled.div`
  align-self: flex-end;

  ${Flex()}
  gap: 1.4rem;

  & label {
    font-size: 1.6rem;
  }

  & input {
    font-family: inherit;
    padding: 1rem;
    border: var(--main-border);
  }

  @media (${breakpoint('maxBreakOne')}) {
    & label {
      font-size: 1.4rem;
    }

    & input {
      width: 15rem;
      height: 4rem;
    }
  }

  @media (${breakpoint('maxBreakTwo')}) {
    & label {
      font-size: 1.4rem;
    }

    & input {
      width: 14rem;
      height: 3.8rem;
    }
  }
`;

export const NoRecipesMsg = styled.span`
  grid-column: 1/4;

  font-size: 2rem;

  @media (${breakpoint('maxBreakOne')}) {
    font-size: 1.8rem;
  }

  @media (${breakpoint('maxBreakTwo')}) {
    font-size: 1.6rem;
  }
`;
