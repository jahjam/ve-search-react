import { useState, useRef, useContext, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import useRequest from '../../hooks/use-request';
import AuthContext from '../../store/auth-context';
import { generateFramerElipsis } from '../../helpers/generateFramerElipsis';
import { API } from '../../config';

import * as Styled from './styles';

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
        url: `${API}/api/v1/users/login`,
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

  const signUpHandler = e => {
    if (e.key !== 'Enter' && e.nativeEvent.type !== 'click') return;

    navigate('/sign-up');
  };

  const resetPasswordHandler = e => {
    if (e.key !== 'Enter' && e.nativeEvent.type !== 'click') return;

    navigate('/reset-password');
  };

  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(max-width: 640px)');

    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    media.addEventListener('change', () => {
      setMatches(media.matches);
    });
  }, [matches]);

  const mobileToLogin = toLogin && 280;
  const mobileIsLoggedIn = authCtx.isLoggedIn && 140;

  console.log(mobileToLogin, mobileIsLoggedIn);

  const headerAnimationStyles = matches
    ? {
        opacity: 1,
        translateY: 0,
        height: mobileToLogin || mobileIsLoggedIn,
      }
    : {
        opacity: 1,
        translateY: 0,
        height: toLogin || authCtx.isLoggedIn ? 120 : 80,
      };

  return (
    <Styled.Header
      transition={{ duration: 1 }}
      initial={{ translateY: -80, opacity: 0 }}
      animate={headerAnimationStyles}
      onClick={tryAgainHandler}
    >
      <Styled.HeaderIcon
        tabIndex="0"
        onClick={returnHomeHandler}
        onKeyPress={returnHomeHandler}
      />

      <Styled.Alert
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          y: isError ? 0 : -80,
          x: '-50%',
          backgroundColor: isError ? '#e31212' : '#f0f8ff',
        }}
      >
        <h2>{errorMsg}</h2>
      </Styled.Alert>

      <div>
        {authCtxLoading && !toLogin && authCtx.isLoggedIn && (
          <Styled.LoggingInOnLoad>
            {generateFramerElipsis({
              gap: '0.2rem',
            })}
          </Styled.LoggingInOnLoad>
        )}

        {!toLogin && !authCtx.isLoggedIn && (
          <Styled.SigninSignupContainer>
            <Styled.HeaderLoginBtn onClick={toLoginHandler} btnSize="medium">
              Login
            </Styled.HeaderLoginBtn>

            <Styled.HeaderSignupBtn onClick={signUpHandler} btnSize="medium">
              Sign up
            </Styled.HeaderSignupBtn>
          </Styled.SigninSignupContainer>
        )}

        {toLogin && !authCtx.isLoggedIn && (
          <Styled.LoginForm>
            <form
              animate={{ opacity: toLogin ? 1 : 0 }}
              onSubmit={onLoginSubmitHandler}
            >
              <input ref={email} type="text" placeholder="email" />
              <input ref={password} type="password" placeholder="password" />
              <div>
                <Styled.HeaderLoginFormBtn
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
                </Styled.HeaderLoginFormBtn>
                <span
                  tabIndex="0"
                  onKeyDown={signUpHandler}
                  onClick={signUpHandler}
                >
                  Sign up
                </span>
                <span
                  tabIndex="0"
                  onKeyDown={resetPasswordHandler}
                  onClick={resetPasswordHandler}
                >
                  Forgot password?
                </span>
              </div>
            </form>
          </Styled.LoginForm>
        )}

        {authCtx.isLoggedIn && (
          <Styled.Profile location={location} onClick={toAccountPageHandler}>
            <div>
              <img
                src={`${API}/public/img/users/${userDetails.user.photo}`}
                alt="avatar"
              />
            </div>
            <p>{userDetails.user.username}</p>
          </Styled.Profile>
        )}
      </div>
    </Styled.Header>
  );
};

export default Header;
