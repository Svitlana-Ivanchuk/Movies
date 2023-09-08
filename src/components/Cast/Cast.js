import { fetchCast } from 'components/API';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';

export const Cast = () => {
  const { movieId } = useParams;
  const [cast, setCast] = useState(null);

  useEffect(() => {
    async function getCasts() {
      try {
        const castValue = await fetchCast(movieId);
        console.log(castValue);
        setCast(castValue);
        toast.success('Successfully created!');
      } catch (error) {
        toast.error('This is an error!');
      }
    }
    getCasts();
  }, [movieId]);

  console.log(cast);

  return console.log(cast);
};
