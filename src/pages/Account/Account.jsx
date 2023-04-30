import { useContext } from 'react';
import AuthContext from '../../store/auth-context';
import { useNavigate, Outlet, useLocation } from 'react-router-dom';
import { API } from '../../config';

import useRequest from '../../hooks/use-request';
import { generateFramerElipsis } from '../../helpers/generateFramerElipsis';

import * as Styled from './styles';

import NameSection from './NameSection';
import AvatarSection from './AvatarSection';
import DetailsSection from './DetailsSection';
import EditSection from './EditSection';

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
    if (e.key !== 'Enter' && e.nativeEvent.type !== 'click') return;

    const reciever = data => {
      if (data.status === 'success') {
        authCtx.setIsLoggedInHandler(false);
        authCtx.setUserDetailsHandler(null);
      }
    };

    sendRequest(
      {
        url: API + '/api/v1/users/logout',
      },
      reciever
    );

    navigate('/');
  };

  // Check if user is signed in
  // TODO CHANGE THIS...
  if (Object.keys(userDetails).length === 0)
    return <span style={{ fontSize: '20px' }}>Please sign in.</span>;

  // Loading
  if (dataIsLoading)
    return <span>{generateFramerElipsis({ gap: '0.2rem' })}</span>;

  // Result
  if (!dataIsLoading)
    return (
      <>
        <Styled.AccountContainer
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Styled.AccountGrid>
            <NameSection userDetails={userDetails} />

            <AvatarSection userDetails={userDetails} />

            <DetailsSection />

            <EditSection
              userDetails={userDetails}
              logoutHandler={logoutHandler}
            />

            <Styled.AddSection>
              <span
                onClick={logoutHandler}
                tabIndex="0"
                onKeyDown={logoutHandler}
              >
                Logout
              </span>
              <Styled.AddBtn
                location={location}
                onClick={addRecipeHandler}
                icon={true}
                btnSize="large"
              >
                <Styled.AddIcon />
                <span>Add a recipe</span>
              </Styled.AddBtn>
            </Styled.AddSection>
          </Styled.AccountGrid>
        </Styled.AccountContainer>

        <Outlet />
      </>
    );
};

export default Account;
