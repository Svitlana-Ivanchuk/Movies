import { fetchReviews } from 'components/API';
import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useParams } from 'react-router-dom';

export const Reviews = () => {
  const { movieId } = useParams();
  const [review, setReview] = useState(null);

  useEffect(() => {
    async function getReviews() {
      try {
        const reviewValue = await fetchReviews(movieId);
        setReview(reviewValue);
        toast.success('Successfully created!');
      } catch (error) {
        toast.error('This is an error!');
      }
    }
    getReviews();
  }, [movieId]);

  if (!review) {
    return;
  }

  return (
    <div>
      <ul>
        {review &&
          (review.length === 0 ? (
            <h2>Sorry, we don't have any reviews for this movie.</h2>
          ) : (
            review.map(elem => (
              <li key={elem.id}>
                <h2>{elem.author}</h2>
                <p>{elem.content}</p>
              </li>
            ))
          ))}
      </ul>
    </div>
  );
};
