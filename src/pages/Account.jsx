import styled from 'styled-components';
import { FlexColumn, Flex } from '../helpers/mixins';
import { useContext, useState, useRef } from 'react';
import AuthContext from '../store/auth-context';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, Outlet, useLocation } from 'react-router-dom';

import useRequest from '../hooks/use-request';
import { generateFramerElipsis } from '../helpers/generateFramerElipsis';
import { ReactComponent as IngIcon } from '../imgs/svg/title-icon.svg';
import { ReactComponent as Bookmark } from '../imgs/svg/bookmark.svg';
import { ReactComponent as AddIcon } from '../imgs/svg/add.svg';
import { ReactComponent as Upload } from '../imgs/svg/upload.svg';
import Button from '../comps/temps/Button';

const AccountContainerStyled = styled(motion.section)`
  margin-top: 2rem;
  width: auto;
  height: auto;
  padding: 1.6rem;
  padding-bottom: 3rem;
  border: 0.2rem solid black;
`;

const AccountGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas:
    'name name add'
    'deets edit avatar'
    'deets edit avatar'
    'deets edit avatar';
  row-gap: 4rem;
`;

const Name = styled.div`
  grid-area: name;
  height: auto;
  width: 100%;

  ${FlexColumn()}

  & h1 {
    font-size: 4rem;
    font-family: goodlife-serif, sans-serif;
  }

  & span {
    font-size: 1.4rem;
  }
`;

const Avatar = styled.div`
  grid-area: avatar;
  height: auto;
  width: 100%;

  ${FlexColumn('center', 'flex-start')}
  gap: 2rem;

  & div {
    width: 12rem;
    height: 12rem;
    background-color: black;
    border-radius: 50%;
    border: var(--main-border);

    overflow: hidden;

    & img {
      width: 100%;
      height: 100%;
    }
  }

  & span {
    font-size: 1.6rem;

    text-decoration: underline;

    cursor: pointer;

    &:hover,
    &:active {
      text-decoration: none;
    }
  }
`;

const Details = styled.div`
  grid-area: deets;
  height: auto;
  width: 100%;

  ${FlexColumn('center', 'flex-start')}

  & ul {
    list-style: none;

    ${FlexColumn('flex-start')}
    gap: 2rem;

    & li:nth-child(1) {
      background-color: ${props => {
        if (props.location.pathname === '/me/my-recipes') return '#58b15a';
      }};
    }

    & li:nth-child(1) {
      background-color: ${props => {
        if (props.location.pathname === '/me/saved-recipes') return '#58b15a';
      }};
    }

    & li {
      ${Flex()}
      gap: 1rem;
      padding: 2rem;
      width: 100%;

      border: var(--main-border);

      background-color: var(--main-theme-color);

      cursor: pointer;

      &:hover {
        background-color: #58b15a;
      }

      & :first-child {
        height: 2rem;
      }

      & span {
        margin-top: 0.35rem;
        font-size: 1.4rem;
      }
    }
  }
`;

const Edit = styled.div`
  grid-area: edit;
  height: auto;
  width: 30rem;

  ${FlexColumn('center', 'flex-start')}

  & ul {
    padding: 0 2rem;
    width: 100%;
    list-style: none;

    & li {
      margin-top: -2rem;
      width: 100%;
      padding: 2rem 0;

      ${FlexColumn()}
      align-items: flex-start;
      gap: 1rem;

      & div {
        width: 100%;
        display: flex;
        justify-content: space-between;

        & h2 {
          font-size: 1.6rem;
        }

        & span {
          font-size: 1.6rem;
          text-decoration: underline;

          cursor: pointer;

          &:hover {
            text-decoration: none;
          }
        }
      }

      & form {
        width: 100%;
        ${Flex('center', 'space-between')}

        & input {
          border: var(--main-border);
          padding: 1rem;
          height: 3rem;
          width: 18rem;
        }

        & button {
          background-color: var(--main-theme-color);
        }
      }

      & span {
        font-size: 1.6rem;
      }
    }
  }
`;

const Add = styled.div`
  grid-area: add;

  height: 100%;
  width: 100%;

  ${FlexColumn()}
  gap: 2rem;

  & span:first-child {
    font-size: 1.8rem;
    text-decoration: underline;

    cursor: pointer;

    &:hover {
      text-decoration: none;
    }
  }
`;

const AddIconStyles = styled(AddIcon)`
  height: 2rem;
`;

const AddBtn = styled(Button)`
  ${Flex()}
  gap: 1rem;

  background-color: var(--main-theme-color);

  background-color: ${props => {
    if (props.location.pathname === '/me/add-a-recipe') return '#58b15a';
  }};

  cursor: pointer;

  &:hover {
    background-color: #58b15a;
  }

  & span {
    margin-top: 0.2rem;
  }
`;

const EditPassDiv = styled(motion.div)`
  ${FlexColumn('center', 'flex-start')}
  gap: 1rem;

  & span {
    text-decoration: none !important;
    font-size: 1.2rem !important;
  }
`;

const Password = styled.span`
  font-size: 1.6rem !important;
`;

const UploadIconStyles = styled(Upload)`
  height: 2rem;
`;

const UploadForm = styled(motion.form)`
  font-size: 1.4rem;
  background-color: var(--main-theme-color);

  & label {
    border: var(--main-border);
    display: inline-block;
    padding: 0.6rem 1.2rem;
    cursor: pointer;

    ${Flex()}
    gap: 1rem;
  }

  & input {
    display: none;
  }

  &:hover {
    background-color: #58b15a;
  }
`;

const Account = () => {
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);
  const [editEmail, setEditEmail] = useState(false);
  const [editPass, setEditPass] = useState(false);
  const [editAvatar, setEditAvatar] = useState(false);
  const email = useRef();
  const emailForPassword = useRef();
  const [passResetMsg, setPassResetMsg] = useState(null);

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

  if (dataIsLoading)
    return <span>{generateFramerElipsis({ gap: '0.2rem' })}</span>;

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
              <span>Member since {userDetails.user?.joinDate || '...'}</span>
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

              <AnimatePresence>
                {editAvatar && (
                  <UploadForm
                    initial={{ y: -40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <label>
                      <UploadIconStyles />
                      <input type="file" placeholder="Enter new email" />
                      Upload
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
                <li>
                  <Bookmark />
                  <span>My saved recipes</span>
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
