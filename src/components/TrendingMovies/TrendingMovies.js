import { Link, useLocation } from 'react-router-dom';
import {
  ListStyle,
  ItemStyle,
  TitleStyle,
  ThumbStyle,
} from './TrendingMovies.styled';

export const TrendingMovies = ({ moviesList }) => {
  const location = useLocation();
  return (
    <section>
      <ListStyle>
        {moviesList.map(movie => (
          <ItemStyle key={movie.id}>
            <Link to={`movies/${movie.id}`} state={{ from: location }}>
              <TitleStyle>{movie.title}</TitleStyle>
              <ThumbStyle>
                <img
                  src={`http://image.tmdb.org/t/p/w300${movie.poster_path}`}
                  alt={movie.title}
                />
              </ThumbStyle>
            </Link>
          </ItemStyle>
        ))}
      </ListStyle>
    </section>
  );
};
