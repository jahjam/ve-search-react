import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import * as Styled from './styles';

import Header from './components/Header/Header';
import Search from './pages/Search/Search';
import Result from './pages/Result/Result';
import Account from './pages/Account/Account';
import MyRecipes from './pages/MyRecipes';
import MyBookmarks from './pages/MyBookmarks';
import AddRecipe from './pages/AddRecipe/AddRecipe';
import SignUp from './pages/SignUp/SignUp';
import ResetPassword from './pages/ResetPassword/ResetPassword';
import NewPassword from './pages/NewPassword/NewPassword';
import NotFound from './pages/NotFound/NotFound';

function App() {
  const location = useLocation();

  return (
    <>
      <Header />

      <Styled.SearchStyles>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname.split('/')[1]}>
            <Route path="/" element={<Navigate replace to="/search" />} />
            <Route path="/search" element={<Search />}>
              <Route path=":resultId" element={<Result />} />
            </Route>
            <Route path="/me" element={<Account />}>
              <Route path="my-recipes" element={<MyRecipes />} />
              <Route path="my-bookmarks" element={<MyBookmarks />} />
              <Route path="add-a-recipe" element={<AddRecipe />} />
            </Route>
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/new-password/:resetId" element={<NewPassword />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </Styled.SearchStyles>
    </>
  );
}

export default App;
