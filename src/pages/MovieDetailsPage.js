import { useEffect, useState } from 'react';
import { Link, useParams, Outlet } from 'react-router-dom';
import toast from 'react-hot-toast';
//import { MovieDetails } from 'components/MovieDetails/MovieDetails';
import { fetchMovieById } from 'components/API';

const MovieDetailsPage = () => {
  const [loading, setLoading] = useState(false);

  const { movieId } = useParams();
  const [movie, setMovie] = useState();

  useEffect(() => {
    async function getMovieDetails() {
      try {
        setLoading(true);

        const moviesItem = await fetchMovieById(movieId);
        console.log(moviesItem);
        setMovie(moviesItem);
        toast.success('Successfully created!');
      } catch (error) {
        toast.error('This is an error!');
      } finally {
        setLoading(false);
      }
    }
    getMovieDetails();
  }, [movieId]);

  if (!movie) {
    return setLoading(true);
  }

  console.log(movie);

  const { title, overview, genres, poster_path } = movie;
  return (
    <div>
      <Link to="/">Go Back</Link>
      {loading ? (
        <div>LOADING...</div>
      ) : (
        <div>
          <h1>{title}</h1>
          <image
            src={
              poster_path ? (
                `http://image.tmdb.org/t/p/w500${poster_path}`
              ) : (
                <p>No Image</p>
              )
            }
            alt={title}
          />
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
      )}
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
