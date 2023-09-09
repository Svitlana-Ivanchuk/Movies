import { useEffect, useRef, useState } from 'react';
import { Link, useParams, Outlet, useLocation } from 'react-router-dom';
import toast from 'react-hot-toast';
import { MovieDetails } from 'components/MovieDetails/MovieDetails';
import { fetchMovieById } from 'components/API';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const location = useLocation();
  //делаем реф для возврата на предыдущую страницу для вложеных компонентов
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');

  const [loading, setLoading] = useState(false);
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    async function getMovieDetails() {
      try {
        setLoading(true);
        const movieQuery = await fetchMovieById(movieId);
        setMovieDetails(movieQuery);
        toast.success('Successfully created!');
      } catch (error) {
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
      <Link to={backLinkLocationRef.current}>Go Back</Link>

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
