import PropTypes from 'prop-types';

import { Review, ReviewsContainer } from '../styles/MovieReviews.styled';

export const MovieReviewList = ({ reviews }) => {
  return (
    <ReviewsContainer>
      <h4>Review Number: {reviews.length}</h4>
      {reviews.length > 0 ? (
        reviews.map(review => (
          <Review key={review.id}>
            <h3>{review.author}</h3>
            <p>{review.content}</p>
          </Review>
        ))
      ) : (
        <div>There is no Information</div>
      )}
    </ReviewsContainer>
  );
};

MovieReviewList.propTypes = {
  reviews: PropTypes.array,
};
