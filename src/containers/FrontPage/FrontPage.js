import React from 'react';

import Header from '../../components/Header/Header';

import styles from './FrontPage.module.css';

const FrontPage = () => {
  return (
    <div className={styles.container}>
      <Header loggedIn={false}/>
      Pictures of different artworks
    </div>
  );
};

export default FrontPage;
