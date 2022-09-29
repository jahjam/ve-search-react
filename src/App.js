import { Route, Routes, Navigate } from 'react-router-dom';
import styled from 'styled-components';
import { FlexColumn } from './helpers/mixins';

import Header from './comps/Header';
import Search from './pages/Search';
import Result from './pages/Result';
import Account from './pages/Account';

const SearchStyles = styled.main`
  padding: 2rem;

  ${FlexColumn()}
`;

function App() {
  return (
    <>
      <Header />

      <SearchStyles>
        <Routes>
          <Route path="/" element={<Navigate replace to="/search" />} />
          <Route path="/search" element={<Search />}>
            <Route path=":resultId" element={<Result />} />
          </Route>
          <Route path="/me" element={<Account />} />
        </Routes>
      </SearchStyles>
    </>
  );
}

export default App;
