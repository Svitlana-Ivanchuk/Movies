import { fetchCast } from 'components/API';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Cast = () => {
  const { movieId } = useParams;
  const [cast, setCast] = useState(null);

  useEffect(() => {
    async function getCasts() {
      const castValue = await fetchCast(movieId);
      console.log(castValue);
      setCast(castValue);
    }
    getCasts();
  }, [movieId]);
  console.log(cast);
  return <div>Cast</div>;
};
