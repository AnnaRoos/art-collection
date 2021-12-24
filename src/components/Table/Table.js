import React from 'react';

import TableRow from '../TableRow/TableRow';

import styles from './Table.module.css';

const Table = ({ list, error, isLoading }) => {
  let table = <p>No artwork added yet.</p>;
  if (list.length > 0) {
    const newList = list.map((item) => {
      return <TableRow item={item} key={item.id} id={item.id}></TableRow>;
    });

    table = (
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Artist</th>
            <th>Year</th>
            <th>Purchased</th>
            <th>Price(SEK)</th>
            <th>Type</th>
            <th>Material</th>
            <th>Height</th>
            <th>Width</th>
            <th>Depth</th>
          </tr>
        </thead>
        <tbody>{newList}</tbody>
      </table>
    );
  }

  let content = table;

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <div className={styles.list}>
      <h2>List of artworks</h2>
      {content}
    </div>
  );
};

export default Table;
