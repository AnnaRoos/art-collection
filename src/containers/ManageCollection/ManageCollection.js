import { useEffect, useState } from 'react';

import Form from '../../components/Form/Form';
import Table from '../../components/Table/Table';

import useHttp from '../../hooks/useHttp';

import styles from './ManageCollection.module.css';

const ManageCollection = () => {
  const [list, setList] = useState([]);

  const {
    isLoading: listIsLoading,
    error: listError,
    sendRequest: getListRequest,
  } = useHttp();

  useEffect(() => {
    const transformList = (data) => {
      const loadedList = [];
      for (let key in data) {
        loadedList.push({ id: key, ...data[key] });
      }
      setList(loadedList);
    };

    getListRequest(
      {
        url:
          'https://art-collection-ba95c-default-rtdb.europe-west1.firebasedatabase.app/artwork.json',
      },
      transformList
    );
  }, [getListRequest]);

  const addItemToList = (item) => {
    setList((prevList) => prevList.concat(item));
  };

  return (
    <div className={styles.container}>
      <Form addItemToList={addItemToList} />
      <Table isLoading={listIsLoading} list={list} error={listError} />
    </div>
  );
};

export default ManageCollection;
