import PropTypes from 'prop-types';

import { fetchReviews } from 'service/ApiService';
import { withApiState } from 'service/stateMachine';
import { useFetchParams } from 'hooks/useFetchParams';

import Pending from 'components/Pending';
import SectionContainer from 'components/SectionContainer';
import ErrorHandler from 'components/ErrorHandler';
import { MovieReviewList } from './components/MovieReviewList';

function MovieReviews({ apiState }) {
  const state = useFetchParams({
    init: {},
    apiState: apiState,
    fetchAPI: fetchReviews,
  });

  return (
    <SectionContainer isEmpty={state?.results?.length > 0 ? false : true}>
      {apiState.isSuccess() && <MovieReviewList reviews={state.results} />}
      {apiState.isPending() && <Pending />}
      {apiState.isError() &&          <ErrorHandler
            errorMessage="Oops, something went wrong, try please later"
            toastErrorMessage="Oops, something went wrong, try please later"
          />}
      {apiState.isIdle() && <div>There is no Information</div>}
    </SectionContainer>
  );
}

MovieReviews.propTypes = {
  apiState: PropTypes.object,
};

export default withApiState(MovieReviews);
