import { useState, useContext } from 'react';
import { AnimatePresence } from 'framer-motion';
import { API } from '../../config';

import useRequest from '../../hooks/use-request';
import AuthContext from '../../store/auth-context';
import {
  Avatar,
  AvatarUploadTag,
  UploadForm,
  UploadIconStyles,
} from '../../styled/styledPages/StyledAccount';

const AvatarSection = props => {
  const [editAvatar, setEditAvatar] = useState(false);
  const [avatar, setAvatar] = useState(null);
  const authCtx = useContext(AuthContext);

  const { sendRequest } = useRequest();

  const editAvatarHandler = () => {
    setEditAvatar(!editAvatar);
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
        url: API + '/api/v1/users/me',
        method: 'PATCH',
        body: formData,
      },
      reciever
    );
  };

  return (
    <Avatar>
      <div>
        {props.userDetails.user && (
          <img
            src={`${API}/public/img/users/${props.userDetails.user.photo}`}
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
  );
};

export default AvatarSection;
