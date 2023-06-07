import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import css from './Navigation.module.css';

const Navigation = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return (
    <nav className={css.Navigation}>
      <ul className={css.NavigationList}>
        {!isLoggedIn ? (
          <>
            <li className={css.NavigationItem}>
              <NavLink to="/login" className="Link">
                Log In
              </NavLink>
            </li>
            <li>
              <NavLink to="/register" className="Link">
                Register
              </NavLink>
            </li>
          </>
        ) : (
          <NavLink to="/contacts" className="Link">
            Contacts
          </NavLink>
        )}
        <li></li>
      </ul>
    </nav>
  );
};

export default Navigation;
