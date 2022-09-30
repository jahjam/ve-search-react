import { useRef, useState } from 'react';
import { Outlet } from 'react-router-dom';

import styled from 'styled-components';
import { Flex, FlexColumn } from '../helpers/mixins';
import { motion } from 'framer-motion';

import Button from '../comps/temps/Button';
import Title from '../comps/Title';
import Results from '../comps/Results';

const SearchStyles = styled(motion.section)`
  margin-top: -2rem;
  width: 100%;

  ${FlexColumn()}
  gap: 3rem;
`;

const SearchInputStyles = styled.div`
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

const Search = () => {
  const inputEl = useRef();
  const [searchInput, setSearchInput] = useState(null);

  const searchInputHandler = () => {
    setSearchInput(inputEl.current.value);

    inputEl.current.value = '';
  };

  return (
    <SearchStyles
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Title />
      <SearchInputStyles>
        <input ref={inputEl} type="text" />
        <ButtonStyles onClick={searchInputHandler} btnSize="medium">
          Search
        </ButtonStyles>
      </SearchInputStyles>

      {searchInput && <Results inputResult={searchInput} />}

      <Outlet />
    </SearchStyles>
  );
};

export default Search;
