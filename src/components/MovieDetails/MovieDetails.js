import {
  MovieDetailStyle,
  MovieCardStyle,
  GenresStyle,
} from './MovieDetails.styled';

export const MovieDetails = ({
  movie: { title, poster_path, overview, genres, release_date, vote_average },
}) => {
  return (
    <MovieDetailStyle>
      <img src={`http://image.tmdb.org/t/p/w300${poster_path}`} alt={title} />
      <MovieCardStyle>
        <h1>{title}</h1>
        <h2>Vote average</h2>
        <p>{vote_average}</p>
        <h2>Overview</h2>
        <p>{overview}</p>
        <h2>Genres</h2>
        <GenresStyle>
          {genres.map(elem => (
            <li key={elem.id}>{elem.name} </li>
          ))}
        </GenresStyle>

        <h2>Release date</h2>
        <p>{release_date}</p>
      </MovieCardStyle>
    </MovieDetailStyle>
  );
};
