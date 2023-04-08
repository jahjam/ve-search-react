import { useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useRequest from '../../hooks/use-request';
import { API } from '../../config';

import * as Styled from './styles';

const NewPassword = () => {
  const password = useRef();
  const passwordConfirm = useRef();
  const params = useParams();
  const navigate = useNavigate();

  const { isLoading, sendRequest } = useRequest();

  const onSubmit = e => {
    e.preventDefault();

    const reciever = () => {
      navigate('/');
    };

    sendRequest(
      {
        url: API + `/api/v1/users/resetPassword/${params.resetId}`,
        method: 'PATCH',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          password: password.current.value,
          passwordConfirmation: passwordConfirm.current.value,
        }),
      },
      reciever
    );
  };

  return (
    <Styled.Container
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Styled.Header>Enter new password.</Styled.Header>

      <p>Please enter your new password and confirm it below.</p>

      <Styled.Form onSubmit={onSubmit}>
        <input type="password" ref={password} placeholder="New Password" />
        <input
          type="password"
          ref={passwordConfirm}
          placeholder="Confirm password"
        />
        <Styled.FormBtn btnSize="large" type="submit">
          {isLoading ? 'Resetting...' : 'Reset password!'}
        </Styled.FormBtn>
      </Styled.Form>
    </Styled.Container>
  );
};

export default NewPassword;
