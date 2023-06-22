import { Route, Routes } from 'react-router-dom';
import SharedLayout from './sharedLayout/SharedLayout';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import NotFound from './notFound/NotFound';
import Cast from './cast/Cast';
import MovieDetails from './movieDetails/MovieDetails';
import Reviews from './reviews/Reviews';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
      </Route>
      <Route path="movies/:id" element={<MovieDetails />}>
        <Route path="cast" element={<Cast />} />
        <Route path="id" element={<Reviews />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
