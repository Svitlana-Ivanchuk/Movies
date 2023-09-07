import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '1320f3c051750b6d0d91045644dc09ed';

export const fetchTrendingMovies = async () => {
  const response = await axios.get(`/trending/movie/week?api_key=${API_KEY}`);
  return response.data;
};

export const fetchMovieById = async movieId => {
  const response = await axios.get(`/movie/${movieId}?api_key=${API_KEY}`);
  return response.data;
};
