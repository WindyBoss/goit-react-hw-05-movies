import { NavLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import { ListEl } from './MovieList.styled';

export default function MovieList({ movies }) {
  const location = useLocation();
  return (
    <ol>
      {movies.map(movie => (
        <ListEl key={movie.id}>
          <NavLink
            to={
              location.pathname.length < 2
                ? `movies/${movie.id}`
                : `${movie.id}`
            }
            state={location}
          >
            {movie.original_title}
          </NavLink>
        </ListEl>
      ))}
    </ol>
  );
};

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
}
