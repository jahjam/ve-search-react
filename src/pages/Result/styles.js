import styled from 'styled-components';
import { motion } from 'framer-motion';

import Button from '../../components/Button/Button';
import { FlexColumn, Flex } from '../../styled-utils/mixins';
import { ReactComponent as LeftArrow } from '../../imgs/svg/left-arrow-servings.svg';
import { ReactComponent as RightArrow } from '../../imgs/svg/right-arrow-servings.svg';
import { ReactComponent as Bookmark } from '../../imgs/svg/bookmark.svg';
import { ReactComponent as BookmarkSolid } from '../../imgs/svg/bookmark-solid.svg';
import { breakpoint } from '../../styled-utils/breakpoints';
import { ReactComponent as XMarkIcon } from '../../imgs/svg/x-mark.svg';

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

  @media (${breakpoint('maxBreakThree')}) {
    grid-template-columns: 1fr;
    grid-template-areas:
      'header'
      'photo'
      'ing'
      'button'
      'nooch';
  }
`;

export const StyledHeaderSection = styled.div`
  grid-area: header;

  ${Flex()}
  gap: 2rem;

  & h2 {
    font-family: goodlife-serif, sans-serif;
    font-weight: 700;
    font-size: 3rem;
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

  @media (${breakpoint('maxBreakFour')}) {
    ${FlexColumn()}
    gap: 1rem;
    & h2 {
      font-size: 2rem;
    }
  }
`;

export const BookmarkButton = styled(Button)`
  height: 40px;
  width: 40px;
  background-color: var(--main-theme-color);
  border: var(--main-border);

  ${Flex()}

  cursor: pointer;

  @media (${breakpoint('maxBreakOne')}) {
    height: 35px;
    width: 35px;
  }

  @media (${breakpoint('maxBreakTwo')}) {
    height: 32px;
    width: 32px;
  }

  @media (${breakpoint('maxBreakFour')}) {
    height: 30px;
    width: 30px;
  }
`;

export const BookmarkIcon = styled(Bookmark)`
  height: 20px;
  width: 20px;

  @media (${breakpoint('maxBreakOne')}) {
    height: 15px;
    width: 15px;
  }

  @media (${breakpoint('maxBreakTwo')}) {
    height: 14px;
    width: 14px;
  }

  @media (${breakpoint('maxBreakFour')}) {
    height: 12px;
    width: 12px;
  }
`;

export const BookmarkSolidIcon = styled(BookmarkSolid)`
  height: 20px;
  width: 20px;

  @media (${breakpoint('maxBreakOne')}) {
    height: 15px;
    width: 15px;
  }

  @media (${breakpoint('maxBreakTwo')}) {
    height: 14px;
    width: 14px;
  }

  @media (${breakpoint('maxBreakFour')}) {
    height: 12px;
    width: 12px;
  }
`;

export const StyledRecipeImageSection = styled.div`
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

export const StyledRecipeServingsSection = styled.div`
  grid-area: button;

  display: flex;
  align-items: center;
  gap: 1rem;

  & span {
    font-size: 1.8rem;
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

export const ServingsBtn = styled(Button)`
  height: 4rem;
  width: 8rem;

  background-color: var(--main-theme-color);

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

export const StyledNutritionalSection = styled.div`
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

export const NoNutritionInfo = styled.span`
  grid-area: nooch;

  font-size: 1.6rem;

  @media (${breakpoint('maxBreakOne')}) {
    font-size: 1.4rem;
  }

  @media (${breakpoint('maxBreakTwo')}) {
    font-size: 1.2rem;
  }
`;

export const StyledIngredientSection = styled.div`
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

export const Kcal = styled.span`
  font-size: 1rem;

  @media (${breakpoint('maxBreakOne')}) {
    font-size: 0.8rem;
  }
`;

export const MethodsSection = styled.section`
  width: 80%;

  ${FlexColumn()}
  gap: 2rem;

  & h2 {
    font-family: goodlife-serif, sans-serif;
    font-size: 3rem;
  }

  @media (${breakpoint('maxBreakOne')}) {
    & h2 {
      font-size: 2.5rem;
    }
  }

  @media (${breakpoint('maxBreakTwo')}) {
    & h2 {
      font-size: 2.2rem;
    }
  }

  @media (${breakpoint('maxBreakFour')}) {
    & h2 {
      font-size: 2rem;
    }
  }
`;

export const StyledCommentsSection = styled.section`
  width: 80%;
  ${FlexColumn()}
  gap: 2rem;

  & h2 {
    font-size: 2rem;
  }

  @media (${breakpoint('maxBreakOne')}) {
    & h2 {
      font-size: 1.8rem;
    }
  }

  @media (${breakpoint('maxBreakFour')}) {
    & h2 {
      font-size: 1.6rem;
    }
  }
`;

export const XIcon = styled(XMarkIcon)`
  height: 2rem;
  width: 2rem;

  align-self: flex-end;
`;

export const ErrorMessage = styled.span`
  color: red;
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

      font-family: inherit;
    }
  }

  @media (${breakpoint('maxBreakOne')}) {
    width: 50%;

    & h3 {
      font-size: 1.4rem;
    }

    & form {
      & label {
        font-size: 1.2rem;
      }
    }
  }

  @media (${breakpoint('maxBreakThree')}) {
    width: 25rem;

    & h3 {
      font-size: 1.2rem;
    }

    & form {
      & label {
        font-size: 1.2rem;
      }

      & input {
        width: 5rem;
        height: 4rem;
        border: var(--main-border);
        padding: 1rem;
        font-size: 1.2rem;
      }
    }
  }

  @media (${breakpoint('maxBreakFour')}) {
    width: 25rem;

    & h3 {
      font-size: 1.2rem;
    }

    & form {
      & label {
        font-size: 1.2rem;
      }
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

  @media (${breakpoint('maxBreakOne')}) {
    font-size: 1.4rem;
  }

  @media (${breakpoint('maxBreakFour')}) {
    font-size: 1.2rem;
  }
`;

export const LeaveCommentSpan = styled(motion.span)`
  font-size: 1.6rem;
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    text-decoration: none;
  }

  @media (${breakpoint('maxBreakOne')}) {
    font-size: 1.4rem;
  }
`;

export const CommentSubmitBtn = styled(Button)`
  background-color: var(--main-theme-color);

  @media (${breakpoint('maxBreakFour')}) {
    margin-top: 1rem;
    width: 10rem;
    height: 3rem;

    & span {
      font-size: 1.2rem;
    }
  }
`;

export const SourceLinkSection = styled.section`
  width: 80%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
`;

export const SourceLinkTitle = styled.h2`
  font-family: goodlife-serif, sans-serif;
  font-weight: 700;
  font-size: 3rem;
  text-align: center;

  @media (${breakpoint('maxBreakOne')}) {
    font-size: 2.5rem;
  }

  @media (${breakpoint('maxBreakFour')}) {
    font-size: 2rem;
  }
`;

export const SourceLinkDesc = styled.span`
  font-size: 1.8rem;
  width: 80%;
  text-align: center;

  @media (${breakpoint('maxBreakOne')}) {
    font-size: 1.4rem;
  }

  @media (${breakpoint('maxBreakFour')}) {
    font-size: 1.2rem;
  }
`;

export const SourceRecipeCompany = styled.span`
  font-weight: 700;
  font-size: 1.8rem;

  @media (${breakpoint('maxBreakOne')}) {
    font-size: 1.4rem;
  }

  @media (${breakpoint('maxBreakFour')}) {
    font-size: 1.2rem;
  }
`;

export const SourceLinkButton = styled(Button)`
  height: 6rem;
  width: 12rem;
  font-family: inherit;
  font-size: 2rem;
  line-height: 6rem;

  background-color: var(--main-theme-color);

  @media (${breakpoint('maxBreakOne')}) {
    height: 4.5rem;
    width: 10.5rem;

    & span {
      font-size: 1.6rem;
    }

    line-height: 4.7rem;
  }

  @media (${breakpoint('maxBreakFour')}) {
    height: 4rem;
    width: 10rem;

    & span {
      font-size: 1.4rem;
    }

    line-height: 4rem;
  }
`;
