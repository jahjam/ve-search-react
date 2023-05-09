import { useEffect, useState } from 'react';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import * as Styled from './styles';

import Header from './feature/Header/Header';
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

const Modal = ({ handleModelClick }) => {
  const handleClick = e => {
    if (e.key !== 'Enter' && e.nativeEvent.type !== 'click') return;

    handleModelClick(true);
  };

  return (
    <Styled.Modal
      transition={{ duration: 1 }}
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
      }}
    >
      <Styled.InnerModal
        transition={{ duration: 1 }}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
        }}
      >
        <Styled.XMarkIcon
          onClick={handleClick}
          onKeyDown={handleClick}
          tabIndex="0"
        />
        <h3>Welcome to VESearch!</h3>

        <p>
          This is just a quick message to let you know that VESearch is
          currently just a prototype. There are only two (test) recipe available
          at the moment, which is found by searching for <code>burger</code> or{' '}
          <code>noodles</code>. There will be more recipes added soon - or, you
          could make an account and add one yourself, the app is fully
          functional to a MVP standard!
        </p>
        <p>
          When creating an account, please remember this app isn't fully quality
          checked, and so we cannot be liable for any database issues,
          especially in regard to any recipes you create - please don't make
          this the place you store your only copy of your most tastiest recipe
          ever!
        </p>
        <p>
          Thanks for using VESearch, and please come back in the future, there
          will likely be many new, tasty features!
        </p>
      </Styled.InnerModal>
    </Styled.Modal>
  );
};

function App() {
  const [hideModal, setHideModal] = useState(true);

  const handleModelClick = () => {
    setHideModal(true);
  };

  useEffect(() => {
    setTimeout(() => {
      setHideModal(false);
    }, 2000);
  }, []);

  const location = useLocation();

  return (
    <>
      {!hideModal && <Modal handleModelClick={handleModelClick} />}
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
