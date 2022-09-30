import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { FlexColumn } from './helpers/mixins';
import { AnimatePresence } from 'framer-motion';

import Header from './comps/Header';
import Search from './pages/Search';
import Result from './pages/Result';
import Account from './pages/Account';

const SearchStyles = styled.main`
  padding: 2rem;

  ${FlexColumn()}
`;

function App() {
  const location = useLocation();

  return (
    <>
      <Header />

      <SearchStyles>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname.split('/')[1]}>
            <Route path="/" element={<Navigate replace to="/search" />} />
            <Route path="/search" element={<Search />}>
              <Route path=":resultId" element={<Result />} />
            </Route>
            <Route path="/me" element={<Account />} />
          </Routes>
        </AnimatePresence>
      </SearchStyles>
    </>
  );
}

export default App;
