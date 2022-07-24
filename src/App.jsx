import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import AppBar from 'components/AppBar';

import Pending from 'components/Pending';
import { ReactLazy } from 'helpers/ReactLazy';

const HomePage = ReactLazy('HomePage');
const MoviesPage = ReactLazy('MoviesPage');
const MovieDetailPage = ReactLazy('MovieDetailPage');
const MovieReviews = ReactLazy('MovieReviews');
const MovieActors = ReactLazy('MovieActors');
const NoFoundRoute = React.lazy(() => import('./components/NoFoundRoute'));

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<Pending />}>
          <Routes>
            <Route path="/goit-react-hw-05-movies/" element={<AppBar />}>
              <Route index element={<HomePage />} />
              <Route path="/goit-react-hw-05-movies/movies" element={<MoviesPage />} />
              <Route path="/goit-react-hw-05-movies/movies/:movieId" element={<MovieDetailPage />}>
                <Route path="actors" element={<MovieActors />} />
                <Route path="reviews" element={<MovieReviews />} />
              </Route>
              <Route path="*" element={<NoFoundRoute/>} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
};
