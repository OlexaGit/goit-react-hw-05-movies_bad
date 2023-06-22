import { Link, Outlet } from 'react-router-dom';
import css from './SharedLayout.module.css';

const SharedLayout = () => {
  const isActive = () => {
    active ? css.isActive : css.link;
  };
  return (
    <container className={css.container}>
      <header className={css.header}>
        <nav className={css.nav}>
          <NavLink to="/" className={isActive}>
            Home
          </NavLink>
          <NavLink to="/movies" className={isActive}>
            Movies
          </NavLink>
        </nav>
      </header>
      <Outlet />
    </container>
  );
};
export default SharedLayout;
