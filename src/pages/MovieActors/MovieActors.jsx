import PropTypes from 'prop-types';

import SectionContainer from 'components/SectionContainer';
import Pending from 'components/Pending';
import { MovieActorsList } from './components/MovieActorsList';
import ErrorHandler from 'components/ErrorHandler';

import { useFetchParams } from 'hooks/useFetchParams';

import { fetchActors } from 'service/ApiService';
import { withApiState } from 'service/stateMachine';

function MovieActors({ apiState }) {
  const state = useFetchParams({
    init: [],
    apiState: apiState,
    fetchAPI: fetchActors,
  });
  return (
    <SectionContainer isEmpty={state?.cast?.length > 0 ? false : true}>
      {apiState.isSuccess() && <MovieActorsList actors={state.cast} />}
      {apiState.isPending() && <Pending />}
      {apiState.isError() && (
        <ErrorHandler
          errorMessage="Oops, there is no information about actors, try please later"
          toastErrorMessage="Oops, something went wrong, try please later"
        />
      )}
      {apiState.isIdle() && <div>No information</div>}
    </SectionContainer>
  );
}

MovieActors.propTypes = {
  apiState: PropTypes.object,
};

export default withApiState(MovieActors);
