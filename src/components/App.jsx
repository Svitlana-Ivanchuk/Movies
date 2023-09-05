import { Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import HomePage from 'pages/HomePage';
import MoviesPage from 'pages/MoviesPage';
import Header from './Header/Header';
import MovieDetailsPage from 'pages/MovieDetailsPage';
export const App = () => {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />}>
          <Route path="movies/:movieId/cast" element={<div>Cast</div>} />
          <Route path="movies/:movieId/reviews" element={<div>Reviews</div>} />
        </Route>
        <Route path="movies/:movieId" element={<MovieDetailsPage />} />
      </Routes>
      <GlobalStyle />
    </>
  );
};
