import { Link } from 'react-router-dom';

export const TrendingMovies = ({ moviesList }) => {
  console.log(moviesList);
  return (
    <>
      <ul>
        {moviesList.map(movie => (
          <li key={movie.id}>
            <Link to={`movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
