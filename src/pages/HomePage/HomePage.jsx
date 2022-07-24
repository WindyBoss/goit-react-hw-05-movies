import React from 'react';
import PropTypes from 'prop-types';

import { fetchTrendingMovies } from 'service/ApiService';
import { withApiState } from 'service/stateMachine';

import SectionContainer from 'components/SectionContainer';
import MovieList from 'components/MovieList';
import Pending from 'components/Pending';
import ErrorHandler from 'components/ErrorHandler';

import { useFetch } from 'hooks/useFetch';

function HomePage({ apiState }) {
  const state = useFetch({ apiState: apiState, fetchAPI: fetchTrendingMovies });

  return (
    <SectionContainer>
      {apiState.isSuccess() && (
        <>
          <h1>Movies in trends today</h1>
          <MovieList movies={state} />
        </>
      )}
      {apiState.isPending() && <Pending />}
      {apiState.isError() && (
        <ErrorHandler
          errorMessage="Oops, something went wrong, try please later"
          toastErrorMessage="Oops, something went wrong, try please later"
        />
      )}
    </SectionContainer>
  );
}

HomePage.propTypes = {
  apiState: PropTypes.object,
};

export default withApiState(HomePage);
