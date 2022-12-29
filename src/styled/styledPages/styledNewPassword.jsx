import styled from 'styled-components';
import { motion } from 'framer-motion';

import Button from '../../comps/temps/Button';
import { FlexColumn } from '../../helpers/mixins';

export const Container = styled(motion.section)`
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
    text-align: center;
    font-size: 1.8rem;
    width: 40rem;
    line-height: 2.6rem;
    color: grey;
  }
`;

export const Header = styled.h2`
  font-size: 2rem;
`;

export const FormStyles = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2rem;

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
