import React from 'react';
import { useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import SectionContainer from 'components/SectionContainer';
import MovieList from 'components/MovieList';
import { MovieForm } from './components/MovieForm';
import Pending from 'components/Pending';

import { useFetchSearchQuery } from 'hooks/useFetchSearchQuery';

import { withApiState } from 'service/stateMachine';
import { fetchMovieByQuery } from 'service/ApiService';

import ErrorHandler from 'components/ErrorHandler';

function MoviesPage({ apiState }) {
  const paramName = 'query';

  const state = useFetchSearchQuery({
    init: [],
    apiState: apiState,
    fetchAPI: fetchMovieByQuery,
    paramName: paramName,
  });

  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <>
      <SectionContainer>
        <MovieForm onSubmit={setSearchParams} paramName={paramName} />
      </SectionContainer>

      <SectionContainer isEmpty={state.length > 0 ? false : true}>
        {apiState.isSuccess() && 
        <MovieList movies={state} />
        }
        {apiState.isPending() && <Pending />}
        {apiState.isError() && (
          <ErrorHandler
            errorMessage={`Sorry, we cannot find the movie with search ${searchParams.get(
              paramName
            )}`}
            toastErrorMessage="Text, please valid Keyword"
          />
        )}
        {apiState.isIdle() && <p>Find a Movie</p>}
      </SectionContainer>
    </>
  );
}

MoviesPage.propTypes = {
  apiState: PropTypes.object,
};

export default withApiState(MoviesPage);
