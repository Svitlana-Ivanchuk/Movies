export const MovieDetails = ({
  movie: { title, poster_path, overview, genres },
}) => {
  return (
    <div>
      <h1>{title}</h1>
      <img src={`http://image.tmdb.org/t/p/w300${poster_path}`} alt={title} />
      <div>
        <h2>Overview</h2>
        <p>{overview}</p>
      </div>
      <div>
        <h2>Genres</h2>
        <ul>
          {genres.map(elem => (
            <li key={elem.id}>{elem.name} </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
