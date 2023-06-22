import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Loader from '../components/Loader/Loader';
import getMovies from '../components/Api/JsonthemoviedbApi';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoaderVisible, setIsLoaderVisible] = useState(false);

  useEffect(() => {
    getMove();
  }, []);

  const getMove = async () => {
    try {
      setIsLoaderVisible(true);
      const data = await getMovies();
      const movies = data.results;
      setMovies(movies);
    } catch (error) {
      setIsError(true);
      console.error(error);
    } finally {
      setIsLoaderVisible(false);
    }
  };
  console.log(movies);
  return (
    <main>
      <h1> Trending today</h1>
      {isLoaderVisible && <Loader />}
    </main>
  );
};
export default Home;
