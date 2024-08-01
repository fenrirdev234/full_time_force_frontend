import { useEffect, useState } from "react";

const useFetch = (url, options) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url, options);
        if (response.ok) {
          const json = await response.json();

          setData(json);
        } else {
          throw new Error(response.statusText);
        }
      } catch (error) {
        const typedError = error;
        setHasError(true);
        setErrorMessage(typedError.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [url, options]);

  return { data, isLoading, hasError, errorMessage };
};
/* const response =  {
      headers: data === undefined ? {} : { "Content-Type": "application/json" },
      body: JSON.stringify(data === undefined ? {} : data),
      method: method,
    }; */

export default useFetch;
