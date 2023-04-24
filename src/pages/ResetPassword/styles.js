import styled from 'styled-components';
import { motion } from 'framer-motion';

import Button from '../../components/temporaries/Button/Button';
import { FlexColumn } from '../../styled-utils/mixins';
import { breakpoint } from '../../styled-utils/breakpoints';

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

  @media (${breakpoint('maxBreakThree')}) {
    width: 40rem;

    h1 {
      font-size: 3.4rem;
    }

    p {
      font-size: 1.4rem;
      width: 30rem;
    }
  }

  @media (${breakpoint('maxBreakFour')}) {
    width: 30rem;

    h1 {
      font-size: 3rem;
    }

    p {
      font-size: 1.2rem;
      width: 20rem;
    }
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

  @media (${breakpoint('maxBreakThree')}) {
    input {
      width: 20rem;
    }
  }

  @media (${breakpoint('maxBreakFour')}) {
    label {
      font-size: 1.4rem;
    }

    span:nth-child(2) {
      font-size: 0.8rem;
    }

    span:nth-child(1) {
      font-size: 1.8rem;
    }

    input {
      width: 18rem;
    }
  }
`;

export const FormBtn = styled(Button)`
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
