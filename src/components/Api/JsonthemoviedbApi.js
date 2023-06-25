import axios from 'axios';

const myApiKey = 'e4e77b2d83733ec5f4ee2698cbe57afc';

export const getMovies = async () => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${myApiKey}`
  );
  return data;
};

const searchMovies = async query => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${myApiKey}&query=${query}`
  );
  return data;
};

export const detailsMovies = async id => {
  console.log(id);
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${myApiKey}`
  );
  return data;
};

export const castMovies = async id => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${myApiKey}`
  );
  return data;
};

const reviewsMovies = async query => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/movie_id/reviews?api_key=${myApiKey}`
  );
  return data;
};

// 'https://api.themoviedb.org/3/movie/movie_id',
// 'https://api.themoviedb.org/3/movie/movie_id/credits';
// 'https://api.themoviedb.org/3/movie/movie_id/reviews';
//api.themoviedb.org/3/search/movie?api_key=###&query=transformers
// const options = {
//   method: 'GET',
//   url: 'https://api.themoviedb.org/3/authentication',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer e4e77b2d83733ec5f4ee2698cbe57afc',
//   },
// };

// axios
//   .request(options)
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });

// const myApiKey = 'e4e77b2d83733ec5f4ee2698cbe57afc';

// export default getMovies, detailsMovies;
