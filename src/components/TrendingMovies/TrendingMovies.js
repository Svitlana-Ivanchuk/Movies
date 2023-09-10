import { Link, useLocation } from 'react-router-dom';
import { ListStyle, ItemStyle, TitleStyle } from './TrendingMovies.styled';

export const TrendingMovies = ({ moviesList }) => {
  const location = useLocation();
  return (
    <section>
      <ListStyle>
        {moviesList.map(movie => (
          <ItemStyle key={movie.id}>
            <Link to={`movies/${movie.id}`} state={{ from: location }}>
              <TitleStyle>{movie.title}</TitleStyle>
              <img
                src={`http://image.tmdb.org/t/p/w300${movie.poster_path}`}
                alt={movie.title}
              />
            </Link>
          </ItemStyle>
        ))}
      </ListStyle>
    </section>
  );
};
