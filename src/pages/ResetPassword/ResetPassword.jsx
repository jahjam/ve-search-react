import { useRef, useState } from 'react';
import useRequest from '../../hooks/use-request';
import validator from 'validator';
import { API } from '../../config';

import * as Styled from './styles';

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
    <Styled.ResetPassContainer
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1>Reset Password</h1>

      <p>
        If you've forgotten your password, please enter your email below and a
        password reset link will be sent for you to reset it.
      </p>

      <Styled.ResetForm onSubmit={submitHandler}>
        <Styled.InputContainer>
          {errorMsg?.match(/\((.*?)\)/g)?.includes('(Email error)') ? (
            <label htmlFor="email" style={{ color: '#e31212' }}>
              Email:
            </label>
          ) : (
            <label>Email:</label>
          )}
          <input name="email" ref={email}></input>
        </Styled.InputContainer>

        {(emailError || isError) && (
          <Styled.ErrorMsg>
            Error: {emailError} {errorMsg?.replaceAll(/ *\([^)]*\) */g, ' ')}
          </Styled.ErrorMsg>
        )}

        {emailSuccess && (
          <Styled.SuccessMsg>Great! {emailSuccess}!</Styled.SuccessMsg>
        )}

        <Styled.FormBtn btnSize="large" type="submit">
          {isLoading ? 'Sending email...' : 'Reset password!'}
        </Styled.FormBtn>
      </Styled.ResetForm>
    </Styled.ResetPassContainer>
  );
};

export default ResetPassword;
