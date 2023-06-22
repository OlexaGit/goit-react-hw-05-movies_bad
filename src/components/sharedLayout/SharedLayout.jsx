import { NavLink, Outlet } from 'react-router-dom';
import css from './SharedLayout.module.css';

const SharedLayout = () => {
  const handleActiveStyle = ({ isActive }) => {
    return { color: isActive ? 'red' : 'black' };
  };
  return (
    <container className={css.container}>
      <header className={css.header}>
        <nav className={css.nav}>
          <NavLink to="/" className={css.link} style={handleActiveStyle}>
            Home
          </NavLink>
          <NavLink to="/movies" className={css.link} style={handleActiveStyle}>
            Movies
          </NavLink>
        </nav>
      </header>
      <Outlet />
    </container>
  );
};
export default SharedLayout;
