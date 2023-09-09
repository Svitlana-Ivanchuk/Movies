import { Link, useLocation } from 'react-router-dom';
import { ListStyle, ItemStyle } from './TrendingMovies.styled';

export const TrendingMovies = ({ moviesList }) => {
  const location = useLocation();
  return (
    <>
      <ListStyle>
        {moviesList.map(movie => (
          <ItemStyle key={movie.id}>
            <Link to={`movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </Link>
          </ItemStyle>
        ))}
      </ListStyle>
    </>
  );
};
