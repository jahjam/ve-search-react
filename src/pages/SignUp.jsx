import { useRef, useState, useContext } from 'react';
import useRequest from '../hooks/use-request';
import validator from 'validator';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../store/auth-context';
import { API } from '../config';

import {
  SignUpContainer,
  SignUpForm,
  FormBtnStyles,
  InputContainer,
  ErrorMsg,
} from '../styled/styledPages/styledSignUp';

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
        url: API + '/api/v1/users/signup',
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
          <input type="password" ref={password}></input>
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
          <input type="password" ref={passwordConfirm}></input>
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
