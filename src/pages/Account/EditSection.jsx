import { AnimatePresence, motion } from 'framer-motion';
import { useState, useRef, useContext } from 'react';
import { API } from '../../config';

import useRequest from '../../hooks/use-request';

import * as Styled from './styles';
import Button from '../../comps/temps/Button/Button';
import AuthContext from '../../store/auth-context';

const EditSection = props => {
  const authCtx = useContext(AuthContext);
  const [editEmail, setEditEmail] = useState(false);
  const email = useRef();
  const [editPass, setEditPass] = useState(false);
  const [passResetMsg, setPassResetMsg] = useState(null);
  const emailForPassword = useRef();

  const { isLoading: resetRequestIsLoading, sendRequest } = useRequest();

  const editEmailHandler = () => {
    setEditEmail(!editEmail);
  };

  const changeEmailHandler = e => {
    const reciever = data => {
      authCtx.setUserDetailsHandler(data);
    };

    sendRequest(
      {
        url: API + '/api/v1/users/me',
        method: 'PATCH',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          email: email.current.value,
        }),
      },
      reciever
    );

    email.current.value = '';
    setEditEmail(!editEmail);
  };

  const editPassHandler = () => {
    setEditPass(!editPass);
    setPassResetMsg(null);
  };

  const passwordResetHandler = () => {
    const reciever = data => {
      setPassResetMsg(data.message);

      setTimeout(() => {
        setPassResetMsg(null);
      }, 6000);
    };

    sendRequest(
      {
        url: API + '/api/v1/users/forgotPassword',
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          email: emailForPassword.current.value,
        }),
      },
      reciever
    );

    setEditPass(!editPass);
  };

  const handleLogout = e => {
    props.logoutHandler(e);
  };

  const {
    isLoading: deletingAccountIsLoading,
    sendRequest: sendDeleteRequest,
  } = useRequest();

  const deleteAccHandler = e => {
    e.preventDefault();

    const reciever = data => {
      console.log(data);
      handleLogout(e);
    };

    sendDeleteRequest(
      {
        url: API + '/api/v1/users/me',
        method: 'DELETE',
      },
      reciever
    );
  };

  return (
    <Styled.Edit>
      <ul>
        <li>
          <div>
            <h2>Email</h2>
            <span onClick={editEmailHandler}>Edit</span>
          </div>
          <span>{props.userDetails.user?.email}</span>

          <AnimatePresence>
            {editEmail && (
              <motion.form
                initial={{ y: -40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <input ref={email} placeholder="Enter new email" />
                <Button
                  display="flex"
                  btnSize="small"
                  onClick={changeEmailHandler}
                >
                  Update
                </Button>
              </motion.form>
            )}
          </AnimatePresence>
        </li>
        <li>
          <div>
            <h2>Password</h2>
            <span onClick={editPassHandler}>Edit</span>
          </div>
          <Styled.Password>
            &#9632;&#9632;&#9632;&#9632;&#9632;&#9632;&#9632;&#9632;&#9632;&#9632;
          </Styled.Password>

          <AnimatePresence>
            {editPass && (
              <Styled.EditPassDiv
                initial={{ y: -40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <span>
                  A password reset link will be sent to the email you enter
                  below:
                </span>
                <form>
                  <input ref={emailForPassword} placeholder="Email" />
                  <Button
                    display="flex"
                    btnSize="small"
                    onClick={passwordResetHandler}
                  >
                    Send
                  </Button>
                </form>
              </Styled.EditPassDiv>
            )}
            {resetRequestIsLoading && <span>Sending...</span>}
            {passResetMsg && <span>{passResetMsg}</span>}
          </AnimatePresence>
        </li>
        <li>
          <div>
            <h2>Delete Account:</h2>
            {deletingAccountIsLoading ? (
              <Styled.DeleteAccSpan>Deleting...</Styled.DeleteAccSpan>
            ) : (
              <Styled.DeleteAccSpan onClick={deleteAccHandler}>
                Delete
              </Styled.DeleteAccSpan>
            )}
          </div>
        </li>
      </ul>
    </Styled.Edit>
  );
};

export default EditSection;
