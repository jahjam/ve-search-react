import { useContext, useState, useRef } from 'react';
import AuthContext from '../store/auth-context';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, Outlet, useLocation } from 'react-router-dom';
import { format } from 'date-fns';

import useRequest from '../hooks/use-request';
import { generateFramerElipsis } from '../helpers/generateFramerElipsis';
import { ReactComponent as IngIcon } from '../imgs/svg/title-icon.svg';
import { ReactComponent as Bookmark } from '../imgs/svg/bookmark.svg';

import {
  AccountContainerStyled,
  AccountGrid,
  Name,
  Avatar,
  Details,
  Edit,
  Add,
  AddIconStyles,
  AddBtn,
  EditPassDiv,
  Password,
  UploadIconStyles,
  UploadForm,
  AvatarUploadTag,
} from '../styled/styledPages/StyledAccount';

import Button from '../comps/temps/Button';

const Account = () => {
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);
  const [editEmail, setEditEmail] = useState(false);
  const [editPass, setEditPass] = useState(false);
  const [editAvatar, setEditAvatar] = useState(false);
  const email = useRef();
  const emailForPassword = useRef();
  const [passResetMsg, setPassResetMsg] = useState(null);
  const [avatar, setAvatar] = useState(null);

  console.log(authCtx.userDetails);

  const location = useLocation();

  const { isLoading: resetRequestIsLoading, sendRequest } = useRequest();

  const { dataIsLoading, userDetails } = authCtx;

  const editEmailHandler = () => {
    setEditEmail(!editEmail);
  };

  const editPassHandler = () => {
    setEditPass(!editPass);
    setPassResetMsg(null);
  };

  const editAvatarHandler = () => {
    setEditAvatar(!editAvatar);
  };

  const myRecipesHandler = () => {
    navigate('/me/my-recipes');
  };

  const myBookmarksHandler = () => {
    navigate('/me/my-bookmarks');
  };

  const changeEmailHandler = e => {
    const reciever = data => {
      authCtx.setUserDetailsHandler(data);
    };

    sendRequest(
      {
        url: '/api/v1/users/me',
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

  const passwordResetHandler = () => {
    const reciever = data => {
      setPassResetMsg(data.message);

      setTimeout(() => {
        setPassResetMsg(null);
      }, 6000);
    };

    sendRequest(
      {
        url: '/api/v1/users/forgotPassword',
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

  const addRecipeHandler = () => {
    navigate('/me/add-a-recipe');
  };

  const logoutHandler = e => {
    e.preventDefault();

    const reciever = data => {
      if (data.status === 'success') {
        authCtx.setIsLoggedInHandler(false);
        authCtx.setUserDetailsHandler(null);
      }
    };

    sendRequest(
      {
        url: '/api/v1/users/logout',
      },
      reciever
    );

    navigate('/');
  };

  const avatarChangeHandler = e => {
    setAvatar(e.target.files[0]);
  };

  const avatarUploadHandler = e => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('photo', avatar);

    const reciever = data => {
      if (data.status === 'success') {
        authCtx.setUserDetailsHandler(data);
      }
    };

    sendRequest(
      {
        url: '/api/v1/users/me',
        method: 'PATCH',
        body: formData,
      },
      reciever
    );
  };

  // Check if user is signed in
  if (Object.keys(userDetails).length === 0)
    return <span style={{ fontSize: '20px' }}>Please sign in.</span>;

  // Loading
  if (dataIsLoading)
    return <span>{generateFramerElipsis({ gap: '0.2rem' })}</span>;

  // Result
  if (!dataIsLoading)
    return (
      <>
        <AccountContainerStyled
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <AccountGrid>
            <Name>
              <h1>Hi, {userDetails.user?.username}!</h1>
              <span>
                Member since{' '}
                {(userDetails.user?.joinDate &&
                  format(new Date(userDetails.user?.joinDate), 'dd/MM/yyyy')) ||
                  '...'}
              </span>
            </Name>

            <Avatar>
              <div>
                {userDetails.user && (
                  <img
                    src={`/public/img/users/${userDetails.user.photo}`}
                    alt="avatar"
                  />
                )}
              </div>
              <span onClick={editAvatarHandler}>Edit avatar</span>

              {avatar && (
                <>
                  <AvatarUploadTag>Avatar image: {avatar.name}</AvatarUploadTag>

                  <UploadForm
                    initial={{ y: -40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={avatarUploadHandler}
                  >
                    <label>
                      <UploadIconStyles />
                      <input type="submit" />
                      Upload
                    </label>
                  </UploadForm>
                </>
              )}

              <AnimatePresence>
                {editAvatar && !avatar && (
                  <UploadForm
                    initial={{ y: -40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <label>
                      <UploadIconStyles />
                      <input onChange={avatarChangeHandler} type="file" />
                      Add image
                    </label>
                  </UploadForm>
                )}
              </AnimatePresence>
            </Avatar>

            <Details location={location}>
              <ul>
                <li onClick={myRecipesHandler}>
                  <IngIcon />
                  <span>My recipes</span>
                </li>
                <li onClick={myBookmarksHandler}>
                  <Bookmark />
                  <span>My bookmarks</span>
                </li>
              </ul>
            </Details>

            <Edit>
              <ul>
                <li>
                  <div>
                    <h2>Email</h2>
                    <span onClick={editEmailHandler}>Edit</span>
                  </div>
                  <span>{userDetails.user?.email}</span>

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
                  <Password>
                    &#9632;&#9632;&#9632;&#9632;&#9632;&#9632;&#9632;&#9632;&#9632;&#9632;
                  </Password>

                  <AnimatePresence>
                    {editPass && (
                      <EditPassDiv
                        initial={{ y: -40, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <span>
                          A password reset link will be sent to the email you
                          enter below:
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
                      </EditPassDiv>
                    )}
                    {resetRequestIsLoading && <span>Sending...</span>}
                    {passResetMsg && <span>{passResetMsg}</span>}
                  </AnimatePresence>
                </li>
              </ul>
            </Edit>

            <Add>
              <span onClick={logoutHandler}>Logout</span>
              <AddBtn
                location={location}
                onClick={addRecipeHandler}
                icon={true}
                btnSize="large"
              >
                <AddIconStyles />
                <span>Add a recipe</span>
              </AddBtn>
            </Add>
          </AccountGrid>
        </AccountContainerStyled>

        <Outlet />
      </>
    );
};

export default Account;
