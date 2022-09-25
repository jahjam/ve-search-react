import styled from 'styled-components';
import { Flex, FlexColumn } from '../helpers/mixins';
import Button from './temps/Button';
import { ReactComponent as TitleIcon } from '../imgs/svg/title-icon.svg';
import { useState } from 'react';
import { motion } from 'framer-motion';

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
`;

const LoginFormStyles = styled(motion.form)`
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

const HeaderSignupBtnStyles = styled(Button)`
  padding: 0.3rem;

  background-color: transparent;

  &:hover {
    background-color: var(--main-light-color);
  }
`;

const Header = () => {
  const [toLogin, setToLogin] = useState(false);

  const toLoginHandler = () => {
    setToLogin(true);
  };

  return (
    <HeaderStyled
      transition={{ duration: 0.6 }}
      initial={{ translateY: -80, opacity: 0 }}
      animate={{ opacity: 1, translateY: 0, height: toLogin ? 120 : 80 }}
    >
      <HeaderIconStyles />

      <div>
        {!toLogin ? (
          <SigninSignupContainer>
            <HeaderLoginBtnStyles
              onClick={toLoginHandler}
              type="submit"
              btnSize="medium"
            >
              Sign in
            </HeaderLoginBtnStyles>

            <HeaderSignupBtnStyles btnSize="medium">
              Sign up
            </HeaderSignupBtnStyles>
          </SigninSignupContainer>
        ) : (
          <LoginFormStyles animate={{ opacity: toLogin ? 1 : 0 }}>
            <input placeholder="username" />
            <input placeholder="password" />
            <div>
              <HeaderLoginBtnStyles type="submit" btnSize="medium">
                Sign in
              </HeaderLoginBtnStyles>
              <a href="/">Sign up</a>
              <a href="/">Forgot username or password?</a>
            </div>
          </LoginFormStyles>
        )}
        {/* <ProfileStyles>
          <div></div>
          <p>elijam</p>
        </ProfileStyles> */}
      </div>
    </HeaderStyled>
  );
};

export default Header;
