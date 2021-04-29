import React from 'react';

import TableRow from '../TableRow/TableRow';

import styles from './Table.module.css';

const Table = (props) => {
  let table = <p>No artwork added yet.</p>;
  if (props.list.length > 0) {
    const list = props.list.map((item) => {
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
        <tbody>{list}</tbody>
      </table>
    );
  }

  let content = table;

  if (props.error) {
    content = <p>{props.error}</p>;
  }

  if (props.isLoading) {
    content = <p>Loading...</p>
  }

  return (
    <div className={styles.list}>
      <h2>List of artworks</h2>
      {content}
    </div>
  );
};

export default Table;
