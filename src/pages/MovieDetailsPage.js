import { useEffect, useRef, useState } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import toast from 'react-hot-toast';
import { Suspense } from 'react';
import { MovieDetails } from 'components/MovieDetails/MovieDetails';
import { fetchMovieById } from 'components/API';
import { Loader } from 'components/Loader/Loader';
import {
  InformListStyle,
  StyledLink,
  MoviedetailStyle,
} from './MovieDetailsPage.styled';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const location = useLocation();
  //делаем реф для возврата на предыдущую страницу для вложеных компонентов
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

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

  //щоб не було помилки з null
  if (!movieDetails) {
    return;
  }

  return (
    <section>
      <StyledLink to={backLinkLocationRef.current}>Go Back</StyledLink>

      {loading ? (
        <Loader />
      ) : (
        <MoviedetailStyle>
          <MovieDetails movie={movieDetails} />
        </MoviedetailStyle>
      )}

      <h2>Additional information</h2>
      <InformListStyle>
        <StyledLink to="cast">Cast</StyledLink>
        <StyledLink to="reviews">Reviews</StyledLink>
      </InformListStyle>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </section>
  );
};

export default MovieDetailsPage;
