import { useState } from 'react';

import Form from '../../components/Form/Form';

import styles from './ManageCollection.module.css';

const ManageCollection = () => {
  return (
    <div className={styles.container}> 
      <Form />
    </div>

  );
}

export default ManageCollection;