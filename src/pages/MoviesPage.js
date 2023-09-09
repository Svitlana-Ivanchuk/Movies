import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import { fetchSearchMovie } from 'components/API';
import { SearchForm } from 'components/SearchForm/SearchForm';

const MoviesPage = () => {
  const [loading, setLoading] = useState(false);
  const [queryMovie, setQueryMovie] = useState(null);
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const location = useLocation();

  useEffect(() => {
    if (query === '') {
      return;
    }

    async function getQueryMovie() {
      try {
        setLoading(true);
        const newQuery = await fetchSearchMovie(query);
        setQueryMovie(newQuery);
      } catch (error) {
        toast.error('This is an error!');
      } finally {
        setLoading(false);
      }
    }

    getQueryMovie();
  }, [query]);

  return (
    <>
      <SearchForm></SearchForm>
      {loading ? (
        <div>LOADING...</div>
      ) : (
        <div>
          {queryMovie && (
            <ul>
              {queryMovie.map(movie => (
                <li key={movie.id}>
                  <Link to={`${movie.id}`} state={{ from: location }}>
                    {movie.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </>
  );
};

export default MoviesPage;
