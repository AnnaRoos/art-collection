import React from 'react';
import { NavLink } from 'react-router-dom';

import Navbar from '../Navbar/Navbar';

import styles from './Header.module.css';

const Header = ({ loggedIn }) => {
  return (
    <header className={styles.header}>
      <h1>
        <NavLink to="/">ART COLLECTION</NavLink>
      </h1>
      <Navbar loggedIn={loggedIn} />
    </header>
  );
};

export default Header;
