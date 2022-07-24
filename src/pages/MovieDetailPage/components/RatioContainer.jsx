import ReactStars from 'react-rating-stars-component';
import PropTypes from 'prop-types';

import { RatioHover } from './RatioHover';

export const RatioContainer = ({ onToggle, movie, anchorEl, showRatio }) => {
  return (
    <>
      <div
        aria-owns="mouse-over-popover"
        aria-haspopup="true"
        onMouseEnter={onToggle}
        onMouseLeave={onToggle}
        sx={{ position: 'relative' }}
      >
        <ReactStars
          count={5}
          size={24}
          value={movie.vote_average / 2}
          activeColor="#ffd700"
          isHalf={true}
          edit={false}
        />
      </div>

      <RatioHover
        anchorEl={anchorEl}
        showRatio={showRatio}
        ratio={movie.vote_average}
      />
    </>
  );
};

RatioContainer.propTypes = {
  movie: PropTypes.object.isRequired,
  onToggle: PropTypes.func.isRequired,
  showRatio: PropTypes.bool.isRequired,
  anchorEl: PropTypes.any,
};
