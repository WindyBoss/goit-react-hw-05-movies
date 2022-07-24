import PropTypes from 'prop-types';

import { fetchMovie } from 'service/ApiService';
import { withApiState } from 'service/stateMachine';

import { useFetchParams } from 'hooks/useFetchParams';

import Pending from 'components/Pending';
import SectionContainer from 'components/SectionContainer';
import ErrorHandler from 'components/ErrorHandler';
import { MovieDetails } from './components/MovieDetails';

function MovieDetailPage({ apiState }) {
  const state = useFetchParams({
    init: null,
    apiState: apiState,
    fetchAPI: fetchMovie,
  });

  return (
    <>
      {apiState.isPending() && (
        <SectionContainer>
          <Pending />
        </SectionContainer>
      )}
      {apiState.isSuccess() && <MovieDetails movie={state} />}
      {apiState.isError() && (
        <SectionContainer>
          <p>Oops, something went wrong, try please later</p>
          <ErrorHandler
            errorMessage="Oops, there is no information about reviews, try please later"
            toastErrorMessage="Oops, something went wrong, try please later"
          />
        </SectionContainer>
      )}
    </>
  );
}

MovieDetailPage.propTypes = {
  apiState: PropTypes.object,
};

export default withApiState(MovieDetailPage);
