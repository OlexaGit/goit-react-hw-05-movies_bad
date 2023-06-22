import { Outlet, Link } from 'react-router-dom';

const Movies = () => {
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
export default Movies;
