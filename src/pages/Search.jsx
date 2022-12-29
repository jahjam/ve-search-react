import { useRef, useState } from 'react';
import { Outlet } from 'react-router-dom';

import {
  SearchStyles,
  SearchInputStyles,
  ButtonStyles,
} from '../styled/styledPages/styledSearch';

import Title from '../comps/Title';
import Results from '../comps/Results';

const Search = () => {
  const inputEl = useRef();
  const [searchInput, setSearchInput] = useState(null);

  const searchInputHandler = e => {
    e.preventDefault();
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
      <form onSubmit={searchInputHandler}>
        <SearchInputStyles>
          <input ref={inputEl} type="text" />
          <ButtonStyles type="submit" btnSize="medium">
            Search
          </ButtonStyles>
        </SearchInputStyles>
      </form>

      {searchInput && <Results inputResult={searchInput} />}

      <Outlet />
    </SearchStyles>
  );
};

export default Search;
