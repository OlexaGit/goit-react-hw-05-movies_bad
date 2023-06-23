import { useState, useEffect } from 'react';
import { Outlet, Link, useParams } from 'react-router-dom';
import { detailsMovies } from '../Api/JsonthemoviedbApi';

const Cast = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <section>
      <h2>component Cast</h2>
    </section>
  );
};
export default Cast;
// castMovies;
