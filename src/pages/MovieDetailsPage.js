import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { MovieDetails } from 'components/MovieDetails/MovieDetails';
import { fetchMovieById } from 'components/API';

const MovieDetailsPage = () => {
  const [loading, setLoading] = useState(false);

  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  console.log(useParams());
  useEffect(() => {
    async function getMovieDetails(movieId) {
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

  return (
    <div>
      <Link to="/">Go Back</Link>
      {loading ? (
        <div>LOADING...</div>
      ) : (
        <div>
          <MovieDetails movie={movie} />
        </div>
      )}
    </div>
  );
};

export default MovieDetailsPage;
