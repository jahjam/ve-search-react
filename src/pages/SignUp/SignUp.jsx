import { useRef, useState, useContext } from 'react';
import useRequest from '../../hooks/use-request';
import validator from 'validator';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../store/auth-context';
import { API } from '../../config';

import * as Styled from './styles';

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
    <Styled.SignUpContainer
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1>Sign Up</h1>

      <p>
        Sign up to VEsearch to store your own recipes as well as add to the ever
        growing list of original vegan recipes for everyone to find and enjoy!
      </p>

      <Styled.SignUpForm onSubmit={submitHandler}>
        <Styled.InputContainer>
          {errorMsg?.match(/\((.*?)\)/g)?.includes('(Username error)') ? (
            <label htmlFor="username" style={{ color: '#e31212' }}>
              Display name:
            </label>
          ) : (
            <label htmlFor="username">Display name:</label>
          )}
          <span>(This is the name that will appear on all your recipes!)</span>
          <input name="username" ref={username}></input>
        </Styled.InputContainer>

        <Styled.InputContainer>
          {errorMsg?.match(/\((.*?)\)/g)?.includes('(Email error)') ? (
            <label htmlFor="email" style={{ color: '#e31212' }}>
              Email:
            </label>
          ) : (
            <label htmlFor="email">Email:</label>
          )}
          <input name="email" ref={email}></input>
        </Styled.InputContainer>

        <Styled.InputContainer>
          {errorMsg
            ?.match(/\((.*?)\)/g)
            ?.includes('(Password error)' || '(Password match error)') ? (
            <label htmlFor="password" style={{ color: '#e31212' }}>
              Password:
            </label>
          ) : (
            <label htmlFor="password">Password:</label>
          )}
          <input name="password" type="password" ref={password}></input>
        </Styled.InputContainer>

        <Styled.InputContainer>
          {errorMsg
            ?.match(/\((.*?)\)/g)
            ?.includes(
              '(Password confirmation error)' || '(Password match error)'
            ) ? (
            <label htmlFor="passwordConfirm" style={{ color: '#e31212' }}>
              Confirm password:
            </label>
          ) : (
            <label htmlFor="passwordConfirm">Confirm password:</label>
          )}
          <input
            name="passwordConfirm"
            type="password"
            ref={passwordConfirm}
          ></input>
        </Styled.InputContainer>

        {isError && (
          <Styled.ErrorMsg>
            Error: {emailError} {errorMsg?.replaceAll(/ *\([^)]*\) */g, ' ')}.
          </Styled.ErrorMsg>
        )}

        <Styled.FormBtn btnSize="large" type="submit">
          {isLoading ? 'Signing up...' : 'Sign up!'}
        </Styled.FormBtn>
      </Styled.SignUpForm>
    </Styled.SignUpContainer>
  );
};

export default SignUp;
