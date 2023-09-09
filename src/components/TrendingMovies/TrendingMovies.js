import { Link, useLocation } from 'react-router-dom';

export const TrendingMovies = ({ moviesList }) => {
  const location = useLocation();
  return (
    <>
      <ul>
        {moviesList.map(movie => (
          <li key={movie.id}>
            <Link to={`movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
