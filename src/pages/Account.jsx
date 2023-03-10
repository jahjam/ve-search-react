import { useContext } from 'react';
import AuthContext from '../store/auth-context';
import { useNavigate, Outlet, useLocation } from 'react-router-dom';

import useRequest from '../hooks/use-request';
import { generateFramerElipsis } from '../helpers/generateFramerElipsis';

import {
  AccountContainerStyled,
  AccountGrid,
  AddSection,
  AddIconStyles,
  AddBtn,
} from '../styled/styledPages/StyledAccount';

import NameSection from '../comps/accountPageComps/NameSection';
import AvatarSection from '../comps/accountPageComps/AvatarSection';
import DetailsSection from '../comps/accountPageComps/DetailsSection';
import EditSection from '../comps/accountPageComps/EditSection';

const Account = () => {
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);

  const location = useLocation();

  const { sendRequest } = useRequest();

  const { dataIsLoading, userDetails } = authCtx;

  const addRecipeHandler = () => {
    navigate('/me/add-a-recipe');
  };

  const logoutHandler = e => {
    e.preventDefault();

    const reciever = data => {
      if (data.status === 'success') {
        authCtx.setIsLoggedInHandler(false);
        authCtx.setUserDetailsHandler(null);
      }
    };

    sendRequest(
      {
        url: '/api/v1/users/logout',
      },
      reciever
    );

    navigate('/');
  };

  // Check if user is signed in
  if (Object.keys(userDetails).length === 0)
    return <span style={{ fontSize: '20px' }}>Please sign in.</span>;

  // Loading
  if (dataIsLoading)
    return <span>{generateFramerElipsis({ gap: '0.2rem' })}</span>;

  // Result
  if (!dataIsLoading)
    return (
      <>
        <AccountContainerStyled
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <AccountGrid>
            <NameSection userDetails={userDetails} />

            <AvatarSection userDetails={userDetails} />

            <DetailsSection />

            <EditSection
              userDetails={userDetails}
              logoutHandler={logoutHandler}
            />

            <AddSection>
              <span onClick={logoutHandler}>Logout</span>
              <AddBtn
                location={location}
                onClick={addRecipeHandler}
                icon={true}
                btnSize="large"
              >
                <AddIconStyles />
                <span>Add a recipe</span>
              </AddBtn>
            </AddSection>
          </AccountGrid>
        </AccountContainerStyled>

        <Outlet />
      </>
    );
};

export default Account;
