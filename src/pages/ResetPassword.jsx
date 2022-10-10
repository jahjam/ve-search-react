import styled from 'styled-components';
import { useRef, useState } from 'react';
import { FlexColumn } from '../helpers/mixins';
import Button from '../comps/temps/Button';
import useRequest from '../hooks/use-request';
import validator from 'validator';
import { motion } from 'framer-motion';

const ResetPassContainer = styled(motion.section)`
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

const ResetForm = styled.form`
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

const SuccessMsg = styled.h3`
  font-size: 1.4rem;
  color: var(--main-theme-color);
`;

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
        url: '/api/v1/users/forgotPassword',
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
