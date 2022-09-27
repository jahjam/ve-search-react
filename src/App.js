import { Route, Routes, Navigate } from 'react-router-dom';
import styled from 'styled-components';

import Header from './comps/Header';
import Search from './pages/Search';
import Result from './pages/Result';

const SearchStyles = styled.main`
  padding: 2rem;
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
        </Routes>
      </SearchStyles>
    </>
  );
}

export default App;
