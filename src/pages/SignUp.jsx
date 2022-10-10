import styled from 'styled-components';
import { useRef, useState, useContext } from 'react';
import { FlexColumn } from '../helpers/mixins';
import Button from '../comps/temps/Button';
import useRequest from '../hooks/use-request';
import validator from 'validator';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import AuthContext from '../store/auth-context';

const SignUpContainer = styled(motion.section)`
  margin-top: 2rem;
  width: 50rem;
  padding: 4rem;
  ${FlexColumn()}
  gap: 2rem;
  border: var(--main-border);

  h1 {
    font-family: goodlife-brush, sans-serif;
    font-size: 4rem;
  }

  p {
    font-size: 1.8rem;
    width: 40rem;
    line-height: 2.6rem;
    color: grey;
  }
`;

const SignUpForm = styled.form`
  ${FlexColumn()}
  gap: 2rem;

  label {
    font-size: 1.6rem;
  }

  input {
    padding: 1rem;
    height: 4rem;
    width: 30rem;
    border: none;
    border: 0.2rem solid black;
    background-color: var(--main-light-color);

    font-family: inherit;
  }
`;

const FormBtnStyles = styled(Button)`
  background-color: var(--main-theme-color);
`;

const InputContainer = styled.div`
  ${FlexColumn()}
`;

const ErrorMsg = styled.h3`
  font-size: 1.4rem;
  color: #e31212;
`;

const SignUp = () => {
  const navigation = useNavigate();
  const authCtx = useContext(AuthContext);

  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordConfirm = useRef();

  const [emailError, setEmailError] = useState(null);

  const { isLoading, isError, errorMsg, sendRequest } = useRequest();

  const submitHandler = e => {
    e.preventDefault();

    if (!validator.isEmail(email.current.value)) {
      setEmailError('Please enter a valid email address.');
      return;
    }

    const reciever = data => {
      authCtx.setIsLoggedInHandler();
      authCtx.setUserDetailsHandler(data);
    };

    sendRequest(
      {
        url: '/api/v1/users/signup',
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          username: username.current.value,
          email: email.current.value,
          password: password.current.value,
          passwordConfirmation: passwordConfirm.current.value,
        }),
      },
      reciever
    );

    navigation('/');
  };

  return (
    <SignUpContainer
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1>Sign Up</h1>

      <p>
        Sign up to VEsearch to store your own recipes as well as add to the ever
        growing list of original vegan recipes for everyone to find and enjoy!
      </p>

      <SignUpForm onSubmit={submitHandler}>
        <InputContainer>
          {errorMsg?.match(/\((.*?)\)/g)?.includes('(Username error)') ? (
            <label style={{ color: '#e31212' }}>Display name:</label>
          ) : (
            <label>Display name:</label>
          )}
          <span>(This is the name that will appear on all your recipes!)</span>
          <input ref={username}></input>
        </InputContainer>

        <InputContainer>
          {errorMsg?.match(/\((.*?)\)/g)?.includes('(Email error)') ? (
            <label style={{ color: '#e31212' }}>Email:</label>
          ) : (
            <label>Email:</label>
          )}
          <input ref={email}></input>
        </InputContainer>

        <InputContainer>
          {errorMsg
            ?.match(/\((.*?)\)/g)
            ?.includes('(Password error)' || '(Password match error)') ? (
            <label style={{ color: '#e31212' }}>Password:</label>
          ) : (
            <label>Password:</label>
          )}
          <input ref={password}></input>
        </InputContainer>

        <InputContainer>
          {errorMsg
            ?.match(/\((.*?)\)/g)
            ?.includes(
              '(Password confirmation error)' || '(Password match error)'
            ) ? (
            <label style={{ color: '#e31212' }}>Confirm password:</label>
          ) : (
            <label>Confirm password:</label>
          )}
          <input ref={passwordConfirm}></input>
        </InputContainer>

        {isError && (
          <ErrorMsg>
            Error: {emailError} {errorMsg?.replaceAll(/ *\([^)]*\) */g, ' ')}.
          </ErrorMsg>
        )}

        <FormBtnStyles btnSize="large" type="submit">
          {isLoading ? 'Signing up...' : 'Sign up!'}
        </FormBtnStyles>
      </SignUpForm>
    </SignUpContainer>
  );
};

export default SignUp;
