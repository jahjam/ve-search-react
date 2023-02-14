import { useRef } from 'react';
import { useParams } from 'react-router-dom';
import useRequest from '../hooks/use-request';

import {
  Container,
  Header,
  FormStyles,
  FormBtnStyles,
} from '../styled/styledPages/styledNewPassword';

const NewPassword = () => {
  const password = useRef();
  const passwordConfirm = useRef();
  const params = useParams();

  const { isLoading, isError, errorMsg, sendRequest } = useRequest();

  const onSubmit = e => {
    e.preventDefault();

    const reciever = data => {
      return 0;
    };

    sendRequest(
      {
        url: `/api/v1/users/resetPassword/${params.resetId}`,
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
    <Container
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Header>Enter new password.</Header>

      <p>Please enter your new password and confirm it below.</p>

      <FormStyles onSubmit={onSubmit}>
        <input type="password" ref={password} placeholder="New Password" />
        <input
          type="password"
          ref={passwordConfirm}
          placeholder="Confirm password"
        />
        <FormBtnStyles btnSize="large" type="submit">
          Submit
        </FormBtnStyles>
      </FormStyles>
    </Container>
  );
};

export default NewPassword;
