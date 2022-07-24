import axios from 'axios';

const API_KEY = 'ddd72ffccd1b0460d4d5bf775327139b';

const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchMovie = async movieId => {
  const { data } = await axios
    .get(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`)
    .catch(error => errorHandler());
  return data;
};

export const fetchTrendingMovies = async () => {
  const { data } = await axios
    .get(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`)
    .catch(error => errorHandler());
  return data;
};

export const fetchMovieByQuery = async (query = '') => {
  const { data } = await axios
    .get(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`)
    .catch(error => errorHandler());
  return data;
};

export const fetchReviews = async movieId => {
  const { data } = await axios
    .get(
      `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
    )
    .catch(error => errorHandler());
  return data;
};

export const fetchActors = async movieId => {
  const { data } = await axios
    .get(
      `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US&page=1`
    )
    .catch(error => errorHandler());
  return data;
};

const errorHandler = () => {
  throw new Error();
};
