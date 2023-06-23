import { useState, useEffect } from 'react';
import { Outlet, Link, useParams } from 'react-router-dom';
import { detailsMovies } from '../Api/JsonthemoviedbApi';
import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const { id } = useParams();
  const [movies, setMovies] = useState([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    getMove();
  }, [id]);

  const getMove = async () => {
    try {
      const data = await detailsMovies(id);
      const movies = data;
      setMovies(movies);
    } catch (error) {
      setIsError(true);
      console.error(error);
    } finally {
    }
  };

  console.log(movies);
  const { genres } = movies;

  return (
    <main>
      <button>Go back</button>
      <div className={css.details}>
        <img
          src={`https://image.tmdb.org/t/p/w400${movies.backdrop_path}`}
          alt=""
        />
        <div>
          <h2>{movies.title}</h2>
          <p>{`User Score: ${movies.vote_average}`}</p>
          <h4>Overview</h4>
          <p>{movies.overview}</p>
          <h3>Genres</h3>
          {/* {genres.map(({ name }) => (
          <div>{name}</div>
        ))} */}
        </div>
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
