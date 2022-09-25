import { useRef } from 'react';

import styled from 'styled-components';
import { motion } from 'framer-motion';
import Button from './temps/Button';

const SearchStyles = styled(motion.section)`
  width: 100%;

  opacity: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  & input {
    padding: 1rem;
    height: 4rem;
    border: none;
    border: 0.2rem solid black;
    background-color: var(--main-light-color);

    font-family: inherit;
  }
`;

const ButtonStyles = styled(Button)`
  height: 4rem;
  width: 8rem;
  border: none;
  border: 0.2rem solid black;
  background-color: #a4d2ac;

  cursor: pointer;

  line-height: 4rem;
`;

const Search = props => {
  const inputEl = useRef();

  const searchInputHandler = e => {
    props.searchInput(inputEl.current.value);

    inputEl.current.value = '';
  };

  return (
    <SearchStyles
      animate={{ opacity: 1 }}
      transition={{ type: 'spring', duration: 6 }}
    >
      <input ref={inputEl} type="text" />
      <ButtonStyles onClick={searchInputHandler} btnSize="medium">
        Search
      </ButtonStyles>
    </SearchStyles>
  );
};

export default Search;
