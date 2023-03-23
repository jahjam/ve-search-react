import { useRef, useState } from 'react';
import useRequest from '../hooks/use-request';
import validator from 'validator';
import { API } from '../config';

import {
  ResetPassContainer,
  ResetForm,
  FormBtnStyles,
  InputContainer,
  ErrorMsg,
  SuccessMsg,
} from '../styled/styledPages/styledResetPassword';

const ResetPassword = () => {
  const email = useRef();

  const [emailError, setEmailError] = useState(null);
  const [emailSuccess, setEmailSuccess] = useState(null);

  const { isLoading, isError, errorMsg, sendRequest } = useRequest();

  const submitHandler = e => {
    e.preventDefault();

    if (!validator.isEmail(email.current.value)) {
      setEmailError('Please enter a valid email address.');
      return;
    }

    setEmailError(null);

    const reciever = data => {
      setEmailSuccess(data.message);
    };

    sendRequest(
      {
        url: API + '/api/v1/users/forgotPassword',
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          email: email.current.value,
        }),
      },
      reciever
    );
  };

  return (
    <ResetPassContainer
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1>Reset Password</h1>

      <p>
        If you've forgotten your password, please enter your email below and a
        password reset link will be sent for you to reset it.
      </p>

      <ResetForm onSubmit={submitHandler}>
        <InputContainer>
          {errorMsg?.match(/\((.*?)\)/g)?.includes('(Email error)') ? (
            <label style={{ color: '#e31212' }}>Email:</label>
          ) : (
            <label>Email:</label>
          )}
          <input ref={email}></input>
        </InputContainer>

        {(emailError || isError) && (
          <ErrorMsg>
            Error: {emailError} {errorMsg?.replaceAll(/ *\([^)]*\) */g, ' ')}
          </ErrorMsg>
        )}

        {emailSuccess && <SuccessMsg>Great! {emailSuccess}!</SuccessMsg>}

        <FormBtnStyles btnSize="large" type="submit">
          {isLoading ? 'Sending email...' : 'Reset password!'}
        </FormBtnStyles>
      </ResetForm>
    </ResetPassContainer>
  );
};

export default ResetPassword;
