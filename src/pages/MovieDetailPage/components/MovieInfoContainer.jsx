import PropTypes from 'prop-types';

import { RatioContainer } from './RatioContainer';
import { InfoContainer } from '../styles/MovieDetailPage.styled';

export const MovieInfoContainer = ({
  movie,
  onToggle,
  showRatio,
  anchorEl,
}) => {
  return (
    <InfoContainer>
      <h2>{movie.original_title}</h2>
      <RatioContainer
        onToggle={onToggle}
        movie={movie}
        anchorEl={anchorEl}
        showRatio={showRatio}
      />
      <h3>Overview</h3>
      <p>{movie.overview}</p>
      <h3>Genres</h3>
      <ol>
        {movie.genres.map(genre => (
          <li key={genre.id}>
            <p>{genre.name}</p>
          </li>
        ))}
      </ol>
    </InfoContainer>
  );
};

MovieInfoContainer.propTypes = {
  movie: PropTypes.object.isRequired,
  onToggle: PropTypes.func.isRequired,
  showRatio: PropTypes.bool.isRequired,
  anchorEl: PropTypes.any,
};