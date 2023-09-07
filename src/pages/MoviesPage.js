import { fetchSearchMovie } from 'components/API';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';

const MoviesPage = () => {
  const [query, setQuery] = useState('');
  const { newMovie } = useParams();
  console.log(newMovie);
  useEffect(() => {
    async function getMovieQuery() {
      try {
        const movieQuery = await fetchSearchMovie(newMovie);
        console.log(movieQuery);
      } catch (error) {
        toast.error('This is an error!');
      }
    }

    getMovieQuery();
  }, [newMovie]);

  const handleQueryChange = evt => {
    console.log(evt.currentTarget.value);
    setQuery(evt.currentTarget.value.toLowerCase());
  };

  return (
    <>
      <input
        type="text"
        name="query"
        value={query.title}
        placeholder="Input name movie"
        onChange={handleQueryChange}
      />
      <button type="submit">Search</button>
    </>
  );
};

export default MoviesPage;
