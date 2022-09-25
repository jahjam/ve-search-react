import { useState, useCallback } from 'react';

const useRequest = url => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  const sendRequest = useCallback(
    async (fn, requestConfig = {}) => {
      setIsLoading(true);
      setIsError(false);
      try {
        const res = await fetch(url, {
          method: requestConfig.method || 'GET',
          headers: requestConfig.headers || {},
          body: JSON.stringify(requestConfig.body) || null,
        });

        if (!res.ok) {
          throw new Error('Something went wrong. Please try again later!');
        }

        const data = await res.json();

        fn(data);
      } catch (err) {
        setIsError(true);
        setErrorMsg(err.message);
      }
      setIsLoading(false);
    },
    [url]
  );

  return {
    isLoading,
    isError,
    errorMsg,
    sendRequest,
  };
};

export default useRequest;
