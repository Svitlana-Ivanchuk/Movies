import { useEffect, useState } from 'react';
import { Link, useParams, Outlet } from 'react-router-dom';
import toast from 'react-hot-toast';
import { fetchMovieById } from 'components/API';
import { MovieDetails } from 'components/MovieDetails/MovieDetails';
import { Cast } from 'components/Cast/Cast';
import { Reviews } from 'components/Reviews/Reviews';

const MovieDetailsPage = () => {
  const [loading, setLoading] = useState(false);

  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});

  useEffect(() => {
    setLoading(true);
    async function getMovieDetails() {
      try {
        const moviesItem = await fetchMovieById(movieId);
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

  //if (!movieDetails) {
  //  return setLoading(true);
  //}

  console.log(movieDetails);

  return (
    <div>
      <Link to="/">Go Back</Link>

      {loading ? <div>LOADING...</div> : <MovieDetails movie={movieDetails} />}

      <ul>
        <li>
          <Link to="cast">
            <Cast />
          </Link>
        </li>
        <li>
          <Link to="reviews">
            <Reviews />
          </Link>
        </li>
      </ul>

      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
