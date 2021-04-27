import React from 'react';

import TableRow from '../TableRow/TableRow';

import styles from './Table.module.css';

const Table = props => {
  let list;
  if (props.list.length > 0) {
      list = props.list.map((item) => {
        return <TableRow item={item} key={item.id} id={item.id}></TableRow>;
      });
    }
  
  return (
    <div>
      <h2>List of artworks</h2>
      <table className={styles.table}>
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
        {list}
      </table>
    </div>
  );
}

export default Table;