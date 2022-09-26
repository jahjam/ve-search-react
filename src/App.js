import { useState } from 'react';
import { Route, Routes, Outlet } from 'react-router-dom';

import styled from 'styled-components';
import { FlexColumn } from './helpers/mixins';

import Header from './comps/Header';
import Title from './comps/Title';
import Search from './pages/Search';
import Result from './pages/Result';

const AppStyles = styled.main`
  margin: 4rem;

  ${FlexColumn()};
  gap: 2rem;
`;

function App() {
  return (
    <>
      <Header />
      <AppStyles>
        <Title />
        <Search />
        <Routes>
          <Route path="/" element={<Outlet />} />
          <Route path="/:resultId" element={<Result />} />
        </Routes>
      </AppStyles>
    </>
  );
}

export default App;
