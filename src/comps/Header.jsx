import { useState, useRef, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import useRequest from '../hooks/use-request';
import AuthContext from '../store/auth-context';
import { generateFramerElipsis } from '../helpers/generateFramerElipsis';

import {
  HeaderStyled,
  ProfileStyles,
  HeaderIconStyles,
  LoginFormStyles,
  SigninSignupContainer,
  HeaderLoginFormBtnStyles,
  HeaderLoginBtnStyles,
  HeaderSignupBtnStyles,
  Alert,
  LoggingInOnLoad,
} from '../styled/styledComps/styledHeader';

const Header = () => {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();
  const email = useRef();
  const password = useRef();
  const [toLogin, setToLogin] = useState(false);

  const location = useLocation();

  const { isLoading: authCtxLoading, userDetails } = authCtx;

  const { isLoading, isError, errorMsg, resetError, sendRequest } =
    useRequest();

  const toLoginHandler = () => {
    setToLogin(true);
  };

  const returnHomeHandler = () => {
    navigate('/');
  };

  const onLoginSubmitHandler = e => {
    e.preventDefault();

    const reciever = data => {
      authCtx.setIsLoggedInHandler(true);
      authCtx.setUserDetailsHandler(data);
      setToLogin(false);
    };

    sendRequest(
      {
        url: '/api/v1/users/login',
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          email: email.current.value,
          password: password.current.value,
        }),
      },
      reciever
    );
  };

  const toAccountPageHandler = () => {
    navigate('/me');
  };

  const tryAgainHandler = () => {
    if (isError) resetError(false);
  };

  const signUpHandler = () => {
    navigate('/sign-up');
  };

  const resetPasswordHandler = () => {
    navigate('/reset-password');
  };

  return (
    <HeaderStyled
      transition={{ duration: 1 }}
      initial={{ translateY: -80, opacity: 0 }}
      animate={{
        opacity: 1,
        translateY: 0,
        height: toLogin || authCtx.isLoggedIn ? 120 : 80,
      }}
      onClick={tryAgainHandler}
    >
      <HeaderIconStyles tabIndex="0" onClick={returnHomeHandler} />

      <Alert
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          y: isError ? 0 : -80,
          x: '-50%',
          backgroundColor: isError ? '#e31212' : '#f0f8ff',
        }}
      >
        <h2>{errorMsg}</h2>
      </Alert>

      <div>
        {authCtxLoading && !toLogin && (
          <LoggingInOnLoad>
            {generateFramerElipsis({
              gap: '0.2rem',
            })}
          </LoggingInOnLoad>
        )}

        {!toLogin && !authCtx.isLoggedIn && !authCtxLoading && (
          <SigninSignupContainer>
            <HeaderLoginBtnStyles onClick={toLoginHandler} btnSize="medium">
              Login
            </HeaderLoginBtnStyles>

            <HeaderSignupBtnStyles onClick={signUpHandler} btnSize="medium">
              Sign up
            </HeaderSignupBtnStyles>
          </SigninSignupContainer>
        )}

        {toLogin && !authCtx.isLoggedIn && (
          <LoginFormStyles>
            <form
              animate={{ opacity: toLogin ? 1 : 0 }}
              onSubmit={onLoginSubmitHandler}
            >
              <input ref={email} type="text" placeholder="email" />
              <input ref={password} type="password" placeholder="password" />
              <div>
                <HeaderLoginFormBtnStyles
                  display="flex"
                  type="submit"
                  btnSize="medium"
                  icon={true}
                >
                  {isLoading
                    ? generateFramerElipsis({
                        flexDirection: 'row',
                        marginTop: '-0.6rem',
                      })
                    : 'Login'}
                </HeaderLoginFormBtnStyles>
                <span onClick={signUpHandler}>Sign up</span>
                <span onClick={resetPasswordHandler}>Forgot password?</span>
              </div>
            </form>
          </LoginFormStyles>
        )}

        {authCtx.isLoggedIn && (
          <ProfileStyles location={location} onClick={toAccountPageHandler}>
            <div>
              <img
                src={`/public/img/users/${userDetails.user.photo}`}
                alt="avatar"
              />
            </div>
            <p>{userDetails.user.username}</p>
          </ProfileStyles>
        )}
      </div>
    </HeaderStyled>
  );
};

export default Header;
