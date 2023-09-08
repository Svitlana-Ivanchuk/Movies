import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { fetchCast } from 'components/API';
import noimage from '../Images/noimage.png';

export const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    async function getCasts() {
      try {
        const castValue = await fetchCast(movieId);

        setCast(castValue);
        toast.success('Successfully created!');
      } catch (error) {
        toast.error('This is an error!');
      }
    }
    getCasts();
  }, [movieId]);

  if (!cast) {
    return;
  }

  console.log(cast);

  return (
    <div>
      <ul>
        {cast.map(elem => (
          <li key={elem.id}>
            <img
              src={
                elem.profile_path
                  ? `http://image.tmdb.org/t/p/w300${elem.profile_path}`
                  : `${noimage}`
              }
              alt={elem.name}
            />
            <h2>{elem.name}</h2>
            <h3>{elem.character}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
};
