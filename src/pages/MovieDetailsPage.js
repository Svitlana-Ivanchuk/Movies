import { useEffect, useState } from 'react';
import { fetchMovieById } from 'components/API';
import { Link, useParams, Outlet } from 'react-router-dom';
import toast from 'react-hot-toast';
import { MovieDetails } from 'components/MovieDetails/MovieDetails';
//import { Cast } from 'components/Cast/Cast';
import { Reviews } from 'components/Reviews/Reviews';

const MovieDetailsPage = () => {
  const { movieId } = useParams();

  const [loading, setLoading] = useState(false);
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    async function getMovieDetails() {
      try {
        setLoading(true);
        const movieQuery = await fetchMovieById(movieId);
        console.log(movieQuery);
        setMovieDetails(movieQuery);
        toast.success('Successfully created!');
      } catch (error) {
        console.log('error');
        toast.error('This is an error!');
      } finally {
        setLoading(false);
      }
    }

    getMovieDetails();
  }, [movieId]);

  if (!movieDetails) {
    return;
  }

  return (
    <div>
      <Link to="/">Go Back</Link>

      {loading ? (
        <div>LOADING...</div>
      ) : (
        <div>
          <MovieDetails movie={movieDetails} />
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
