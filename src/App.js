import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import { SearchStyles } from './styled/styledPages/styledApp';

import Header from './comps/Header';
import Search from './pages/Search';
import Result from './pages/Result';
import Account from './pages/Account';
import MyRecipes from './pages/MyRecipes';
import MyBookmarks from './pages/MyBookmarks';
import AddRecipe from './pages/AddRecipe';
import SignUp from './pages/SignUp';
import ResetPassword from './pages/ResetPassword';
import NewPassword from './pages/NewPassword';

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
            <Route path="/me" element={<Account />}>
              <Route path="my-recipes" element={<MyRecipes />} />
              <Route path="my-bookmarks" element={<MyBookmarks />} />
              <Route path="add-a-recipe" element={<AddRecipe />} />
            </Route>
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/new-password/:resetId" element={<NewPassword />} />
          </Routes>
        </AnimatePresence>
      </SearchStyles>
    </>
  );
}

export default App;
