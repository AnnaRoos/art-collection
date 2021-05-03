import React from 'react';

import Header from '../../components/Header/Header';

import styles from './ViewCollection.module.css';

const ViewCollection = () => {
  return (
    <div className={styles.container}>
      <Header loggedIn={true} />
      GALLERY
    </div>
  );
}

export default ViewCollection;