import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import { fetchSearchMovie } from 'components/API';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { Loader } from 'components/Loader/Loader';
import {
  ListStyle,
  ItemStyle,
  TitleStyle,
} from '../components/TrendingMovies/TrendingMovies.styled';
import noimage from '../components/Images/noimage.png';

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
        <Loader />
      ) : (
        <section>
          {queryMovie && (
            <ListStyle>
              {queryMovie.map(movie => (
                <ItemStyle key={movie.id}>
                  <Link to={`${movie.id}`} state={{ from: location }}>
                    <TitleStyle>{movie.title}</TitleStyle>
                    <img
                      src={
                        movie.poster_path
                          ? `http://image.tmdb.org/t/p/w300${movie.poster_path}`
                          : `${noimage}`
                      }
                      alt={movie.title}
                    />
                  </Link>
                </ItemStyle>
              ))}
            </ListStyle>
          )}
        </section>
      )}
    </>
  );
};

export default MoviesPage;
