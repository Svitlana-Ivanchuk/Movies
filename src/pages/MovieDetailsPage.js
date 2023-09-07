import { useEffect, useState } from 'react';
import { Link, useParams, Outlet } from 'react-router-dom';
import toast from 'react-hot-toast';
import { MovieDetails } from 'components/MovieDetails/MovieDetails';
import { fetchMovieById } from 'components/API';
import { Cast } from 'components/Cast/Cast';

const MovieDetailsPage = () => {
  const [loading, setLoading] = useState(false);

  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    async function getMovieDetails() {
      try {
        setLoading(true);

        const moviesItem = await fetchMovieById(movieId);
        console.log(moviesItem);
        setMovieDetails(moviesItem);
        toast.success('Successfully created!');
      } catch (error) {
        toast.error('This is an error!');
      } finally {
        setLoading(false);
      }
    }
    getMovieDetails();
  }, [movieId]);

  //if (!movie) {
  //  return setLoading(true);
  //}

  console.log(movieDetails);

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
          <Link to="cast">
            <Cast />
          </Link>
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
