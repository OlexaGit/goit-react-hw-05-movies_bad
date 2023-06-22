import { Outlet, Link } from 'react-router-dom';

const MovieDetails = () => {
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
