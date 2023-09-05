import { fetchTrendingMovies } from 'components/API';
import { useEffect, useState } from 'react';

const HomePage = () => {
  const [trendingMoviesList, setTrendingMoviesList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getTrendingMovies() {
      try {
        setLoading(true);
        const trendingMoviesList = await fetchTrendingMovies();

        setTrendingMoviesList(trendingMoviesList);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    getTrendingMovies();
  }, []);

  const moviesList = trendingMoviesList.results;

  return (
    <div>
      <h1>Trending Today</h1>
      {loading ? (
        <div>LOADING...</div>
      ) : (
        <div>
          {moviesList && (
            <ul>
              {moviesList.map(movie => (
                <li key={movie.id}>
                  <>{movie.title}</>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default HomePage;

//{
//  books && (

//  );
//}
