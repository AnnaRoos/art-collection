import React from 'react';

import ListItem from '../ListItem/ListItem';

import styles from './List.module.css';

const List = (props) => {
  let list = <h2>No artwork added yet.</h2>

  if (props.list.length > 0) {
    list = props.list.map((item) => {
      return <ListItem item={item} key={item.id} id={item.id}></ListItem>
    });
  }


  let content = list;

/*   if (props.error) {
    content = <button onClick={props.onFetch}>Try again</button>;
  } */

  if (props.isLoading) {
    content = <p>Loading...</p>
  }

  return (
    <div className={styles.listContainer}>
      <h2>List of artworks</h2>
      <ul className={styles.list}>{content}</ul>
    </div>
  );
};

export default List;
