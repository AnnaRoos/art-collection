import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Navbar.module.css';

const Navbar = () => {
return (
  <nav className={styles.navbar}>
    <ul>
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
    </ul>
  </nav>
);
}

export default Navbar;