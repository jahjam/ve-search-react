import { Route, Routes, Navigate } from 'react-router-dom';

import Header from './comps/Header';
import Search from './pages/Search';
import Result from './pages/Result';

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Navigate replace to="/search" />} />
        <Route path="/search" element={<Search />}>
          <Route path=":resultId" element={<Result />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
