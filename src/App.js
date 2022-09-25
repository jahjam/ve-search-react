import { useState } from 'react';

import styled from 'styled-components';
import { FlexColumn } from './helpers/mixins';

import Header from './comps/Header';
import Title from './comps/Title';
import Search from './comps/Search';
import Results from './comps/Results';
import Result from './comps/Result';

const AppStyles = styled.main`
  margin: 4rem;

  ${FlexColumn()};
  gap: 4rem;
`;

function App() {
  const [searchInput, setSearchInput] = useState(null);

  const searchInputHandler = input => {
    setSearchInput(input);
  };

  return (
    <>
      <Header />
      <Title />
      <Search searchInput={searchInputHandler} />
      <AppStyles>
        {searchInput && <Results inputResult={searchInput} />}
        <Result />
      </AppStyles>
    </>
  );
}

export default App;
