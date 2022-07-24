import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import toast from 'react-hot-toast';

export const useFetchSearchQuery = ({
  init,
  apiState,
  fetchAPI,
  paramName,
}) => {
  const [state, setState] = useState(init);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const query = searchParams.get(paramName);


    if (!query) {
      return;
    };

    apiState.pending();
    fetchAPI(query)
      .then(data => {
        if (data?.results?.length === 0) {
          throw Error();
        }
        setState(data.results);
        apiState.success();
      })
      .catch(error => {
        apiState.error();
      });
  }, [apiState, fetchAPI, paramName, searchParams]);

  return state;
};
