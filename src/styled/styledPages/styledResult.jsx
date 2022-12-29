import styled from 'styled-components';
import { motion } from 'framer-motion';

import Button from '../../comps/temps/Button';
import { FlexColumn } from '../../helpers/mixins';
import { ReactComponent as LeftArrow } from '../../imgs/svg/left-arrow-servings.svg';
import { ReactComponent as RightArrow } from '../../imgs/svg/right-arrow-servings.svg';

export const Container = styled(motion.section)`
  ${FlexColumn()}
  gap: 3rem;

  margin-bottom: 4rem;
`;

export const RecipeListingSection = styled(motion.section)`
  margin-top: 2rem;
  width: 100rem;
  padding: 1.6rem;
  border: 0.2rem solid black;
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
  }
`;

export const RecipeImageBox = styled.div`
  height: 40rem;
  width: 40rem;
  overflow: hidden;

  border: var(--main-border);

  grid-area: photo;

  display: flex;
  align-items: center;
  justify-content: center;

  & img {
    height: 40rem;
  }
`;

export const RecipeServingsBox = styled.div`
  grid-column: 2/3;

  display: flex;
  align-items: center;
  gap: 1rem;

  & span {
    font-size: 1.8rem;
  }
`;

export const ServingsBtn = styled(Button)`
  height: 4rem;
  width: 8rem;

  background-color: var(--main-theme-color);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ArrowLeftIconStyles = styled(LeftArrow)`
  height: 20px;
  width: 20px;
`;

export const ArrowRightIconStyles = styled(RightArrow)`
  height: 20px;
  width: 20px;
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
        & p:nth-child(2) {
          font-size: 1.6rem;
          font-weight: bold;
        }
        & p:nth-child(3) {
          height: 100%;
          width: 100%;
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
`;

export const NoNutritionInfo = styled.span`
  grid-area: nooch;

  font-size: 1.6rem;
`;

export const IngredientBox = styled.div`
  width: 100%;
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
`;

export const Kcal = styled.span`
  font-size: 1rem;
`;

export const MethodsSection = styled.section`
  width: 80%;

  ${FlexColumn()}
  gap: 2rem;

  & h2 {
    font-family: goodlife-serif, sans-serif;
    font-size: 3rem;
  }
`;

export const CommentsSection = styled.section`
  width: 80%;
  ${FlexColumn()}
  gap: 2rem;

  & h2 {
    font-size: 2rem;
  }
`;

export const CommentBox = styled(motion.div)`
  width: 60%;
  padding: 3rem;
  border: var(--main-border);

  ${FlexColumn()}
  gap: 1rem;

  & h3 {
    font-size: 1.6rem;
  }

  & form {
    width: 100%;

    ${FlexColumn()}
    gap: 1rem;

    & input {
      width: 50%;
      border: var(--main-border);
      padding: 1rem;
    }
  }
`;

export const CommentSpan = styled.span`
  border: var(--main-border);
  display: block;
  width: 100%;
  overflow: hidden;
  resize: both;
  min-height: 8rem;
  line-height: 2rem;

  font-size: 1.6rem;

  padding: 1.4rem;
`;

export const LeaveCommentSpan = styled(motion.span)`
  font-size: 1.6rem;
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    text-decoration: none;
  }
`;

export const CommentSubmitBtn = styled(Button)`
  background-color: var(--main-theme-color);
`;
