import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Navbar.module.css';

const Navbar = ({ loggedIn }) => {
  let links = (
    <li>
      <NavLink to="/login">LOG IN</NavLink>
    </li>
  );

  if (loggedIn) {
    links = (
      <>
        <li>
          <NavLink to="/gallery" activeClassName={styles.active}>
            GALLERY
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin" activeClassName={styles.active}>
            ADMIN
          </NavLink>
        </li>
      </>
    );
  }

  return (
    <nav className={styles.navbar}>
      <ul>{links}</ul>
    </nav>
  );
};

export default Navbar;
