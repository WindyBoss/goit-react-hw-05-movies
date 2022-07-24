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

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<Pending />}>
          <Routes>
            <Route path="/" element={<AppBar />}>
              <Route index path="" element={<HomePage />} />
              <Route path="movies" element={<MoviesPage />} />
              <Route path="movies/:movieId" element={<MovieDetailPage />}>
                <Route path="actors" element={<MovieActors />} />
                <Route path="reviews" element={<MovieReviews />} />
              </Route>
              <Route path="*" element={<div>nothing found</div>} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
};
