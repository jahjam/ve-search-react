import { useState, useCallback } from 'react';

const useRequest = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  const sendRequest = useCallback(async (requestConfig, fn) => {
    setIsLoading(true);
    setIsError(false);
    try {
      const res = await fetch(requestConfig.url, {
        method: requestConfig.method || 'GET',
        headers: requestConfig.headers || {},
        credentials: 'include',
        body: requestConfig.body || null,
      });
      if (!res.ok) {
        const error = await res.json();

        setIsLoading(false);
        throw error;
      }

      let data;

      if (res.status !== 204) {
        data = await res.json();
      }

      fn(data);
    } catch (err) {
      setIsError(true);
      setErrorMsg(err.message);
    }

    setIsLoading(false);
  }, []);

  const resetError = () => {
    setIsError(false);
  };

  return {
    isLoading,
    isError,
    errorMsg,
    resetError,
    sendRequest,
  };
};

export default useRequest;
