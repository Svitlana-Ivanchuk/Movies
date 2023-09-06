import { Routes, Route } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import MoviesPage from 'pages/MoviesPage';
import MovieDetailsPage from 'pages/MovieDetailsPage';
import { SharedLayout } from './SharedLayout';
import Header from './Header/Header';

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="movies/:movieId/cast" element={<div>Cast</div>} />
            <Route
              path="movies/:movieId/reviews"
              element={<div>Reviews</div>}
            />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
