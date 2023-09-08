export const MovieDetails = ({ movie }) => {
  console.log(movie);
  return (
    <div>
      <h1>{movie.title}</h1>
      <img
        src={`http://image.tmdb.org/t/p/w300${movie.poster_path}`}
        alt={movie.title}
      />
      <div>
        <h2>Overview</h2>
        <p>{movie.overview}</p>
      </div>
      <div>
        <h2>Genres</h2>
        <ul>
          {movie.genres.map(elem => (
            <li key={elem.id}>{elem.name} </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
