import React, { useState, useEffect } from 'react';
import useRequest from '../hooks/use-request';
import { API } from '../config';

const AuthContext = React.createContext({
  isLoggedIn: false,
  userDetails: {},
  setIsLoggedIn: () => {},
  setLoginDetailsHandler: () => {},
  isLoading: false,
});

export const AuthContextProvider = props => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userDetails, setUserDetails] = useState({});

  const { isLoading, sendRequest } = useRequest();

  useEffect(() => {
    const reciever = data => {
      data && setIsLoggedIn(true);
      data &&
        setUserDetails(prevState => {
          return { ...prevState, user: data.data.user };
        });
    };

    sendRequest({ url: `${API}/api/v1/users/whoami` }, reciever);
  }, [sendRequest]);

  const setIsLoggedInHandler = bool => {
    setIsLoggedIn(bool);
  };

  const setUserDetailsHandler = data => {
    if (data === null) {
      setUserDetails({});
      return;
    }

    setUserDetails(prevState => {
      return { ...prevState, user: data.data.user };
    });
  };

  const contextValue = {
    isLoggedIn,
    userDetails,
    isLoading,
    setUserDetailsHandler,
    setIsLoggedInHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
