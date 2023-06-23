import { useState, useEffect } from 'react';
import { Outlet, Link, useParams } from 'react-router-dom';
import { detailsMovies } from '../Api/JsonthemoviedbApi';
// import Loader from '../components/Loader/Loader';

const MovieDetails = () => {
  const { id } = useParams();
  const [movies, setMovies] = useState([]);
  const [isError, setIsError] = useState(false);
  // const [isLoaderVisible, setIsLoaderVisible] = useState(false);

  useEffect(() => {
    getMove();
  }, [id]);

  const getMove = async () => {
    try {
      // setIsLoaderVisible(true);
      const data = await detailsMovies(id);
      const movies = data;
      setMovies(movies);
    } catch (error) {
      setIsError(true);
      console.error(error);
    } finally {
      // setIsLoaderVisible(false);
    }
  };

  console.log(movies);

  const { genres } = movies;
  console.log(movies.backdrop_path);
  return (
    <main>
      <button>Go back</button>
      <div>
        <h2>{movies.title}</h2>
        <p>{`User Score: ${movies.vote_average}`}</p>
        <h4>Overview</h4>
        <p>{movies.overview}</p>
        <h3>Genres</h3>
        {/* {genres.map(({ name }) => (
          <div>{name}</div>
        ))} */}
        <img src={movies.backdrop_path} alt="" />
      </div>
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
