import styled from 'styled-components';
import { Flex } from '../../../helpers/mixins';

import { breakpoint } from '../../breakpoints';

export const RecipeCardStyles = styled.div`
  width: 30rem;
  height: auto;
  border: var(--main-border);

  cursor: pointer;

  & div:nth-child(1) {
    margin: 1rem;
    height: 10rem;
    padding: 0.4rem;
    width: auto;

    background-color: var(--main-theme-color);

    ${Flex()}
    gap: 0.6rem;

    &:hover {
      background-color: #58b15a;
    }

    & p {
      width: 16rem;
    }

    & div:nth-child(1) {
      height: 7rem;
      width: 7rem;

      background-color: black;

      border: var(--main-border);

      overflow: hidden;

      & img {
        height: 7rem;
        width: 7rem;
      }
    }
  }

  @media (${breakpoint('maxBreakOne')}) {
    width: 25.5rem;

    & div:nth-child(1) {
      & h2 {
        font-size: 1.2rem;
      }

      & p {
        width: 12rem;
      }

      & div:nth-child(1) {
        height: 7rem;
        width: 7rem;
      }
    }
  }

  @media (${breakpoint('maxBreakTwo')}) {
    width: 24rem;

    & div:nth-child(1) {
      & h2 {
        font-size: 1.2rem;
      }

      & p {
        width: 10rem;
      }

      & div:nth-child(1) {
        height: 7rem;
        width: 7rem;
      }
    }
  }
`;
