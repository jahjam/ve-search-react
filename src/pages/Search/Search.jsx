import { useRef, useState } from 'react';
import { Outlet } from 'react-router-dom';

import * as Styled from './styles';

import Title from '../../components/Title/Title';
import Results from '../../components/Results/Results';

const Search = () => {
  const inputEl = useRef();
  const [searchInput, setSearchInput] = useState(null);

  const searchInputHandler = e => {
    e.preventDefault();
    setSearchInput(inputEl.current.value);

    inputEl.current.value = '';
  };

  return (
    <Styled.Search
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Title />
      <form onSubmit={searchInputHandler}>
        <Styled.SearchInput>
          <input ref={inputEl} type="text" />
          <Styled.Button type="submit" btnSize="medium">
            Search
          </Styled.Button>
        </Styled.SearchInput>
      </form>

      {searchInput && <Results inputResult={searchInput} />}

      <Outlet />
    </Styled.Search>
  );
};

export default Search;
