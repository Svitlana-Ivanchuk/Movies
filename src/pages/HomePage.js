import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from 'components/API';

import { TrendingMovies } from 'components/TrendingMovies/TrendingMovies';

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

  return (
    <div>
      <h1>Trending Today</h1>
      {loading ? (
        <div>LOADING...</div>
      ) : (
        <div>
          {trendingMoviesList && (
            <TrendingMovies moviesList={trendingMoviesList} />
          )}
        </div>
      )}
    </div>
  );
};

export default HomePage;
