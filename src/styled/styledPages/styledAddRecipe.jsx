import styled from 'styled-components';
import { motion } from 'framer-motion';

import { ReactComponent as Upload } from '../../imgs/svg/upload.svg';
import Button from '../../comps/temps/Button';
import { Flex, FlexColumn } from '../../helpers/mixins';

export const ContainerStyled = styled(motion.section)`
  margin-top: 2rem;
  margin-bottom: 4rem;
  width: 80rem;
  height: auto;
  padding: 2rem;
  border: 0.2rem solid black;

  ${FlexColumn()}
  gap: 2rem;

  & h1 {
    font-family: goodlife-serif, sans-serif;
    font-size: 3rem;
  }

  & h2 {
    font-family: goodlife-brush, sans-serif;
    font-size: 3rem;
  }
`;

export const RecipeForm = styled.form`
  width: 80%;

  ${FlexColumn()}
  gap: 2rem;

  & label {
    font-size: 1.8rem;
  }

  & input {
    height: 3rem;
    width: 70%;
    border: var(--main-border);

    font-family: inherit !important;

    font-size: 1.6rem;

    padding: 2rem;
  }
`;

export const RecipeMainInfo = styled.div`
  width: 100%;
  ${Flex('flex-start')}
  gap: 2rem;

  & div {
    width: 100%;
    ${FlexColumn()}

    &:nth-child(2) {
      width: 80%;
    }

    & label {
      align-self: flex-start;
    }

    & input {
      width: 100%;
    }

    & span {
      align-self: flex-start;
      margin-top: -0.6rem;
    }
  }
`;

export const NameLabel = styled.label`
  margin-bottom: 1.1rem;
`;

export const ContentEditable = styled.div`
  width: 100%;

  position: relative;

  & span {
    border: var(--main-border);
    display: block;
    width: 100%;
    overflow: hidden;
    resize: both;
    min-height: 10rem;
    line-height: 2rem;

    font-size: 1.6rem;

    padding: 1.4rem;
  }

  & p {
    font-size: 2rem;

    cursor: pointer;

    position: absolute;
    top: 0rem;
    right: 0rem;
  }
`;

export const RecipeNumberInfo = styled.div`
  ${Flex('flex-start')}
  gap: 4rem;
  width: 100%;

  & div {
    width: 100%;
    ${FlexColumn()};

    & label {
      font-size: 1.8rem;
    }

    & input {
      width: 100%;
    }

    & span {
      margin-top: -0.6rem;
    }
  }
`;

export const ServingsLabel = styled.label`
  margin-bottom: 1.1rem;
`;

export const DietTags = styled.div`
  width: 100%;

  & input {
    width: 100%;
  }
`;

export const Radio = styled.div`
  width: 100%;
  align-self: flex-start;
  ${Flex('flex-start', 'flex-start')}

  & input {
    width: 10%;

    cursor: pointer;
  }
`;

export const NoochContainer = styled.div`
  width: 100%;
  ${Flex()}
  gap: 2rem;

  & div {
    width: 100%;
    margin-bottom: 2rem;

    & div {
      ${Flex()}
      gap: 0.6rem;
    }
  }
`;

export const NoochItemContainer = styled.div`
  height: 10rem;
  border: var(--main-border);
  padding: 1rem;

  ${Flex()}

  & div {
    margin-bottom: 0;
    ${FlexColumn()}

    & label {
      font-size: 1.6rem;
    }

    & input {
      padding: 2rem;
      width: 100%;
      height: 100;
      font-size: 1.4rem;

      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
    }
  }
`;

export const TitleWithBtn = styled.div`
  ${Flex()}
  gap: 2rem;
`;

export const IngredientInputContainer = styled.div`
  width: 100%;
  padding: 2rem;
  border: var(--main-border);

  ${FlexColumn()}

  position: relative;

  & span {
    font-size: 3rem;

    cursor: pointer;

    position: absolute;
    top: 0.5rem;
    right: 2rem;
  }
`;

export const MethodsNotProvided = styled.div`
  ${FlexColumn()}
  gap: 1rem;

  & span {
    margin-top: -1rem;
  }
`;

export const UploadIconStyles = styled(Upload)`
  height: 2rem;
`;

export const UploadForm = styled.div`
  font-size: 1.4rem;
  background-color: var(--main-theme-color);

  & label {
    border: var(--main-border);
    display: inline-block;
    padding: 0.6rem 1.2rem;
    cursor: pointer;

    ${Flex()}
    gap: 1rem;
  }

  & input {
    display: none;
  }

  &:hover {
    background-color: #58b15a;
  }
`;

export const ButtonStyles = styled(Button)`
  background-color: var(--main-theme-color);
`;

export const ImageUploadTag = styled.span`
  font-size: 1.4rem;
`;

export const ErrorMsg = styled.h3`
  font-size: 1.4rem;
  color: #e31212;
`;
