import styled from 'styled-components';
import { motion } from 'framer-motion';

import Button from '../../comps/temps/Button';
import { FlexColumn } from '../../helpers/mixins';

export const ResetPassContainer = styled(motion.section)`
  margin-top: 2rem;
  width: 50rem;
  padding: 4rem;
  ${FlexColumn()}
  gap: 2rem;
  border: var(--main-border);

  h1 {
    font-family: goodlife-brush, sans-serif;
    font-size: 4rem;
  }

  p {
    font-size: 1.8rem;
    width: 40rem;
    line-height: 2.6rem;
    color: grey;
  }
`;

export const ResetForm = styled.form`
  ${FlexColumn()}
  gap: 2rem;

  label {
    font-size: 1.6rem;
  }

  input {
    padding: 1rem;
    height: 4rem;
    width: 30rem;
    border: none;
    border: 0.2rem solid black;
    background-color: var(--main-light-color);

    font-family: inherit;
  }
`;

export const FormBtnStyles = styled(Button)`
  background-color: var(--main-theme-color);
`;

export const InputContainer = styled.div`
  ${FlexColumn()}
`;

export const ErrorMsg = styled.h3`
  font-size: 1.4rem;
  color: #e31212;
`;

export const SuccessMsg = styled.h3`
  font-size: 1.4rem;
  color: var(--main-theme-color);
`;
