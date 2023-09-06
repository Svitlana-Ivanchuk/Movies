import { Link } from 'react-router-dom';

export const TrendingMovies = ({ moviesList }) => {
  return (
    <>
      <ul>
        {moviesList.map(movie => (
          <li key={movie.id}>
            <Link to="/movies/:movieId">{movie.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
