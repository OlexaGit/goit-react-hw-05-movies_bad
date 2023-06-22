import axios from 'axios';

const search = 'transformers';
const myApiKey = 'e4e77b2d83733ec5f4ee2698cbe57afc';
const imageType = 'photo';
const orientation = 'horizontal';

// const getMovies = async (search = '', page = 1) => {
//   const { data } = await axios.get(
//     `https://pixabay.com/api/?q=${search}&page=${page}&key=${myApiKey}&image_type=${imageType}&orientation=${orientation}&per_page=${per_page}`
//   );
//   return data;
// };

const getMovies = async () => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${myApiKey}`
  );
  return data;
};

const searchMovies = async query => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${myApiKey}&query=${query}`
  );
  return data;
};

const detailsMovies = async query => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/movie_id?api_key=${myApiKey}`
  );
  return data;
};

const castMovies = async query => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/movie_id/credits?api_key=${myApiKey}`
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

export default getMovies;
