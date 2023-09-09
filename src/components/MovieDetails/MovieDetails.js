import { MovieDetailStyle, MovieCardStyle } from './MovieDetails.styled';

export const MovieDetails = ({
  movie: { title, poster_path, overview, genres },
}) => {
  return (
    <MovieDetailStyle>
      <img src={`http://image.tmdb.org/t/p/w300${poster_path}`} alt={title} />
      <MovieCardStyle>
        <h1>{title}</h1>
        <h2>Overview</h2>
        <p>{overview}</p>
        <h2>Genres</h2>
        <ul>
          {genres.map(elem => (
            <li key={elem.id}>{elem.name} </li>
          ))}
        </ul>
      </MovieCardStyle>
    </MovieDetailStyle>
  );
};
