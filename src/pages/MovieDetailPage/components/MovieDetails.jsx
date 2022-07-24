import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import PropTypes from 'prop-types';

import SectionContainer from 'components/SectionContainer';
import {
  Navigation,
  StyledNavLink,
  MovieContainer,
} from '../styles/MovieDetailPage.styled';

import { MovieInfoContainer } from './MovieInfoContainer';

export const MovieDetails = ({ movie }) => {
  const [showRatio, setShowRatio] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const toggleShowRatio = e => {
    setAnchorEl(e.currentTarget);
    setShowRatio(prevState => !prevState);
  };

  return (
    <>
      <SectionContainer>
        <MovieContainer>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            width="280px"
            alt={movie.original_title}
          />
          <MovieInfoContainer
            movie={movie}
            onToggle={toggleShowRatio}
            showRatio={showRatio}
            anchorEl={anchorEl}
          />
        </MovieContainer>
      </SectionContainer>
      <SectionContainer>
        <h3>Additional Information</h3>
        <Navigation>
          <StyledNavLink to="actors">Actors</StyledNavLink>
          <StyledNavLink to="reviews">Reviews</StyledNavLink>
        </Navigation>
      </SectionContainer>
      <Outlet />
    </>
  );
};

MovieDetails.propTypes = {
  movie: PropTypes.object.isRequired,
};
