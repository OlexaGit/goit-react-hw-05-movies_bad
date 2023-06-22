import { useState, useEffect } from 'react';
import { Outlet, Link, useParams } from 'react-router-dom';
import { detailsMovies } from '../components/Api/JsonthemoviedbApi';

const MovieDetails = () => {
  const { id } = useParams();
  const [movies, setMovies] = useState([]);
  // const [isError, setIsError] = useState(false);
  // const [isLoaderVisible, setIsLoaderVisible] = useState(false);

  useEffect(() => {
    getMove();
  }, [id]);

  const getMove = async id => {
    try {
      // setIsLoaderVisible(true);
      const data = await detailsMovies(id);
      const movies = data;
      setMovies(movies);
    } catch (error) {
      // setIsError(true);
      console.error(error);
    } finally {
      // setIsLoaderVisible(false);
    }
  };
  // getMove();
  // console.log(data);

  return (
    <main>
      <button>Go back</button>
      <div>detelies</div>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </main>
  );
};
export default MovieDetails;
