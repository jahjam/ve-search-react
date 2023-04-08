import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ReactComponent as LeftArrow } from '../../../imgs/svg/left-arrow-servings.svg';
import { ReactComponent as RightArrow } from '../../../imgs/svg/right-arrow-servings.svg';
import { breakpoint } from '../../../styled-utils/breakpoints';

export const RecipeListingSection = styled.div`
  margin-top: 2rem;
  width: 100rem;
  padding: 1.6rem;
  border: 0.2rem solid black;

  @media (${breakpoint('maxBreakOne')}) {
    width: 80rem;
  }

  @media (${breakpoint('maxBreakTwo')}) {
    width: 64rem;
  }

  @media (${breakpoint('maxBreakThree')}) {
    width: 38rem;
  }

  @media (${breakpoint('maxBreakFour')}) {
    width: 30rem;
  }
`;

export const RecipeListingContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    'header header'
    'photo ing'
    'nooch ing'
    'nooch button';
  justify-items: center;
  row-gap: 2rem;

  & h2 {
    grid-area: header;
    font-family: goodlife-serif, sans-serif;
    font-weight: 700;
    font-size: 3rem;

    display: flex;
  }

  @media (${breakpoint('maxBreakOne')}) {
    & h2 {
      font-size: 2.8rem;
    }
  }

  @media (${breakpoint('maxBreakTwo')}) {
    & h2 {
      font-size: 2.6rem;
    }
  }

  @media (${breakpoint('maxBreakThree')}) {
    grid-template-columns: 1fr;
    grid-template-areas:
      'header'
      'photo'
      'ing'
      'button'
      'nooch';
  }

  @media (${breakpoint('maxBreakFour')}) {
    & h2 {
      font-size: 2rem;
    }
  }
`;

export const RecipeImageBox = styled.div`
  height: 40rem;
  width: 40rem;
  overflow: hidden;

  grid-area: photo;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #e3e3e3;

  @media (${breakpoint('maxBreakOne')}) {
    height: 30rem;
    width: 30rem;

    & img {
      height: 30rem;
    }
  }

  @media (${breakpoint('maxBreakTwo')}) {
    height: 28rem;
    width: 28rem;

    & img {
      height: 28rem;
    }
  }

  @media (${breakpoint('maxBreakFour')}) {
    height: 23rem;
    width: 23rem;
  }
`;

export const RecipeServingsBox = styled.div`
  grid-area: button;

  display: flex;
  align-items: center;
  gap: 1rem;

  & span {
    font-size: 1.8rem;
    display: flex;
  }

  @media (${breakpoint('maxBreakOne')}) {
    & span {
      font-size: 1.6rem;
    }
  }

  @media (${breakpoint('maxBreakTwo')}) {
    & span {
      font-size: 1.4rem;
    }
  }

  @media (${breakpoint('maxBreakFour')}) {
    & span {
      font-size: 1.2rem;
    }
  }
`;

export const ServingsBtn = styled.div`
  height: 4rem;
  width: 8rem;

  background-color: #e3e3e3;

  border: var(--main-border);

  display: flex;
  align-items: center;
  justify-content: center;

  @media (${breakpoint('maxBreakOne')}) {
    height: 3rem;
    width: 7rem;
  }

  @media (${breakpoint('maxBreakTwo')}) {
    height: 2.8rem;
    width: 6.8rem;
  }

  @media (${breakpoint('maxBreakFour')}) {
    height: 2.4rem;
    width: 6rem;
  }
`;

export const NutritionInfo = styled.div`
  grid-area: nooch;

  & div {
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & h3 {
      font-family: goodlife-serif, sans-serif;
      font-weight: 700;
      font-size: 2rem;
    }

    & h4 {
      font-family: inherit;
      font-size: 1rem;
    }

    & ul {
      list-style: none;

      display: flex;
      gap: 1.2rem;

      & li {
        height: 10rem;
        width: 6.4rem;
        padding: 0.4rem;
        border: 0.15rem solid black;
        text-align: center;
        overflow: hidden;

        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.4rem;

        & p:nth-child(1) {
          font-size: 1.2rem;
          text-decoration: underline;
        }
        & div:nth-child(2) {
          font-size: 1.6rem;
          font-weight: bold;
        }
        & div:nth-child(3) {
          height: 100%;
          width: 100%;
          margin-top: 1rem;
          padding: 1rem;
          border: 0.2rem solid black;
          border-radius: 50%;
          background-color: black;
          color: white;
          font-size: 1.6rem;

          display: flex;
          justify-content: center;
        }
      }
    }
  }

  @media (${breakpoint('maxBreakOne')}) {
    & div {
      gap: 0.4rem;

      & h3 {
        font-size: 1.8rem;
      }
      & h4 {
        font-size: 0.8rem;
      }

      & ul {
        & li {
          height: 8rem;
          width: 5rem;
          padding: 0.2rem;

          & p:nth-child(1) {
            font-size: 0.8rem;
          }

          & p:nth-child(2) {
            font-size: 1.2rem;
          }

          & p:nth-child(3) {
            font-size: 1.2rem;
          }
        }
      }
    }
  }

  @media (${breakpoint('maxBreakTwo')}) {
    & div {
      gap: 0.4rem;

      & h3 {
        font-size: 1.6rem;
      }
      & h4 {
        font-size: 0.8rem;
      }

      & ul {
        & li {
          height: 7rem;
          width: 4.2rem;
          padding: 0.2rem;

          & p:nth-child(1) {
            font-size: 0.8rem;
          }

          & p:nth-child(2) {
            font-size: 1rem;
          }

          & p:nth-child(3) {
            font-size: 1.2rem;
            padding: 0.5rem;
          }
        }
      }
    }
  }
`;

export const IngredientBox = styled.div`
  align-items: center;

  grid-area: ing;

  & h2 {
    grid-area: header;
    font-family: goodlife-serif, sans-serif;
    font-weight: 700;
    font-size: 3rem;

    text-align: center;
    align-self: center;
    grid-column: 1/3;
  }

  & ul {
    margin-top: 2rem;
    list-style: none;

    & li {
      display: flex;

      padding: 1rem;

      & span {
        font-size: 1.8rem;

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;

        & p {
          padding-top: 0.5rem;
        }
      }
    }
  }

  @media (${breakpoint('maxBreakOne')}) {
    & h2 {
      font-size: 2.5rem;
    }

    & ul {
      & li {
        & span {
          font-size: 1.6rem;
        }
      }
    }
  }

  @media (${breakpoint('maxBreakTwo')}) {
    & h2 {
      font-size: 2.2rem;
    }

    & ul {
      & li {
        & span {
          font-size: 1.4rem;
        }
      }
    }
  }

  @media (${breakpoint('maxBreakFour')}) {
    & h2 {
      font-size: 2rem;
    }

    & ul {
      & li {
        & span {
          font-size: 1.2rem;
        }
      }
    }
  }
`;

export const ArrowLeftIcon = styled(LeftArrow)`
  height: 20px;
  width: 20px;

  @media (${breakpoint('maxBreakOne')}) {
    height: 15px;
    width: 15px;
  }

  @media (${breakpoint('maxBreakFour')}) {
    height: 12px;
    width: 12px;
  }
`;

export const ArrowRightIcon = styled(RightArrow)`
  height: 20px;
  width: 20px;

  @media (${breakpoint('maxBreakOne')}) {
    height: 15px;
    width: 15px;
  }

  @media (${breakpoint('maxBreakFour')}) {
    height: 12px;
    width: 12px;
  }
`;

export const MotionLinearGradientGreen = styled(motion.div)`
  height: 80rem;
  width: 80rem;
  background: linear-gradient(silver, var(--main-theme-color));
  opacity: 0.6;
  filter: blur(3rem);
`;
