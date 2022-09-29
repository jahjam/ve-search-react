import React, { useState, useEffect } from 'react';
import useRequest from '../hooks/use-request';

const AuthContext = React.createContext({
  isLoggedIn: false,
  userDetails: {},
  setIsLoggedIn: () => {},
});

export const AuthContextProvider = props => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userDetails, setUserDetails] = useState({});

  const { sendRequest } = useRequest();

  useEffect(() => {
    const reciever = data => {
      data && setIsLoggedIn(true);
      data &&
        setUserDetails(prevState => {
          return { ...prevState, data };
        });
    };

    sendRequest({ url: '/api/v1/users/whoami' }, reciever);
  }, [sendRequest]);

  const setIsLoggedInHandler = () => {
    setIsLoggedIn(true);
  };

  const contextValue = {
    isLoggedIn,
    userDetails,
    setIsLoggedInHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
