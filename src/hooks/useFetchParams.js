import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const useFetchParams = ({ init, apiState, fetchAPI }) => {
  const [state, setState] = useState(init);
  const params = useParams();

  useEffect(() => {
    apiState.pending();
    fetchAPI(params.movieId)
      .then(data => {
        setState(data);
        apiState.success();
      })
      .catch(error => apiState.error());
  }, [apiState, fetchAPI, params]);

  return state;
};
