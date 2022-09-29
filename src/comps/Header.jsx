import styled from 'styled-components';
import { Flex, FlexColumn } from '../helpers/mixins';
import Button from './temps/Button';
import { ReactComponent as TitleIcon } from '../imgs/svg/title-icon.svg';
import { useState, useEffect, useRef, useContext } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import useRequest from '../hooks/use-request';
import AuthContext from '../store/auth-context';

const HeaderStyled = styled(motion.header)`
  width: 100%;
  height: 8rem;
  padding: 4rem 8%;

  background-color: var(--main-theme-color);

  ${Flex('center', 'space-between')};

  & h1 {
    font-family: goodlife-brush, sans-serif;
    font-size: 4rem;
  }
`;

const ProfileStyles = styled.div`
  padding: 0.8rem 2.2rem;
  border: var(--main-border);

  cursor: pointer;

  ${Flex('center', 'flex-end')};
  gap: 1rem;

  & div {
    background-color: blue;
    height: 4rem;
    width: 4rem;
    border-radius: 50%;

    border: var(--main-border);
  }

  & p {
    font-size: 2rem;
  }
`;

const HeaderIconStyles = styled(TitleIcon)`
  height: 40px;
  width: 40px;
  color: var(--main-light-color);

  cursor: pointer;
`;

const LoginFormStyles = styled.div`
  & form {
    display: flex;
    align-items: center;
    gap: 2rem;

    & input {
      padding: 1rem;
      height: 4rem;
      border: none;
      border: 0.2rem solid black;
      background-color: var(--main-light-color);

      font-family: inherit;
    }

    & div {
      ${FlexColumn}
      gap: 0.5rem;

      & a {
        color: var(--main-dark-color);
        font-size: 1rem;

        align-self: center;

        &:hover,
        &:active {
          color: var(--main-light-color);
        }
      }

      & a {
      }
    }
  }
`;

const SigninSignupContainer = styled.div`
  ${Flex}
  gap: 2rem;
`;

const HeaderLoginBtnStyles = styled(Button)`
  padding: 0.3rem;
  align-self: center;

  background-color: transparent;

  &:hover {
    background-color: var(--main-light-color);
  }
`;

const HeaderLoginFormBtnStyles = styled(Button)`
  padding: 0.3rem;
  align-self: center;

  background-color: transparent;

  &:hover {
    background-color: var(--main-light-color);
  }
`;

const HeaderSignupBtnStyles = styled(Button)`
  padding: 0.3rem;

  background-color: transparent;

  &:hover {
    background-color: var(--main-light-color);
  }
`;

const Header = () => {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();
  const email = useRef();
  const password = useRef();
  const [toLogin, setToLogin] = useState(false);
  const [loginDetails, setLoginDetails] = useState({});

  const { isLoading, isError, errorMsg, sendRequest } = useRequest();

  useEffect(() => {
    if (Object.keys(loginDetails).length === 0) return;

    const reciever = data => {
      data && authCtx.setIsLoggedInHandler(true);
      data && setToLogin(false);
    };

    sendRequest(
      {
        url: '/api/v1/users/login',
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: {
          email: loginDetails.email,
          password: loginDetails.password,
        },
      },
      reciever
    );
  }, [
    authCtx,
    loginDetails.password,
    loginDetails.email,
    sendRequest,
    loginDetails,
  ]);

  const toLoginHandler = () => {
    setToLogin(true);
  };

  const returnHomeHandler = () => {
    navigate('/');
  };

  const onLoginSubmitHandler = e => {
    e.preventDefault();

    setLoginDetails({
      email: email.current.value,
      password: password.current.value,
    });
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
    >
      <HeaderIconStyles onClick={returnHomeHandler} />

      <div>
        {!toLogin && !authCtx.isLoggedIn && (
          <SigninSignupContainer>
            <HeaderLoginBtnStyles onClick={toLoginHandler} btnSize="medium">
              Sign in
            </HeaderLoginBtnStyles>

            <HeaderSignupBtnStyles btnSize="medium">
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
              <input ref={email} placeholder="email" />
              <input ref={password} placeholder="password" />
              <div>
                <HeaderLoginFormBtnStyles type="submit" btnSize="medium">
                  Sign in
                </HeaderLoginFormBtnStyles>
                <a href="/">Sign up</a>
                <a href="/">Forgot username or password?</a>
              </div>
            </form>
          </LoginFormStyles>
        )}

        {authCtx.isLoggedIn && (
          <ProfileStyles>
            <div></div>
            <p>Hi, elijam!</p>
          </ProfileStyles>
        )}
      </div>
    </HeaderStyled>
  );
};

export default Header;
