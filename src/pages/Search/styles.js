import styled from 'styled-components';
import { motion } from 'framer-motion';

import ButtonTemp from '../../comps/temps/Button/Button';
import { Flex, FlexColumn } from '../../styled-utils/mixins';
import { breakpoint } from '../../styled-utils/breakpoints';

export const Search = styled(motion.section)`
  margin-top: -2rem;
  width: 100%;

  ${FlexColumn()}
  gap: 3rem;
`;

export const SearchInput = styled.div`
  width: 100%;

  ${Flex()}
  gap: 1rem;

  margin-top: -1rem;

  & input {
    padding: 1rem;
    height: 4rem;
    border: none;
    border: 0.2rem solid black;
    background-color: var(--main-light-color);

    font-family: inherit;
  }

  @media (${breakpoint('maxBreakTwo')}) {
    & input {
      height: 3.6rem;
    }
  }

  @media (${breakpoint('maxBreakThree')}) {
    & input {
      width: 16rem;
      height: 3rem;
    }
  }

  @media (${breakpoint('maxBreakFour')}) {
    margin-top: -2rem;
    & input {
      width: 14rem;
      height: 2.8rem;
      font-size: 1rem;
    }
  }
`;

export const Button = styled(ButtonTemp)`
  height: 4rem;
  width: 8rem;
  border: none;
  border: 0.2rem solid black;
  background-color: #a4d2ac;

  cursor: pointer;

  line-height: 4rem;

  @media (${breakpoint('maxBreakTwo')}) {
    height: 3.6rem;
    width: 7rem;

    & span {
      margin-top: -0.2rem !important;
      font-size: 1.4rem;
    }
  }

  @media (${breakpoint('maxBreakThree')}) {
    height: 3rem;
    width: 7rem;

    & span {
      margin-top: -0.5rem !important;
      font-size: 1.2rem;
    }
  }

  @media (${breakpoint('maxBreakFour')}) {
    height: 2.8rem;
    width: 6rem;

    & span {
      margin-top: -0.7rem !important;
      font-size: 1rem;
    }
  }
`;
