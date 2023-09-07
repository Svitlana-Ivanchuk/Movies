import { Link } from 'react-router-dom';

export const TrendingMovies = ({ moviesList }) => {
  return (
    <>
      <ul>
        {moviesList.map(movie => (
          <Link key={movie.id} to={`movies/${movie.id}`}>
            <li>{movie.title}</li>
          </Link>
        ))}
      </ul>
    </>
  );
};
