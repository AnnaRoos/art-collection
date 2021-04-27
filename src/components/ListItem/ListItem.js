import React from 'react';

import styles from './ListItem.module.css';

const ListItem = props => {

  return (
    <li className={styles.listItem}>
      <p>
        <b>Title:</b> {props.item.title}
      </p>
      <p>
        <b>Artist:</b> {props.item.artist}
      </p>
      <p>
        <b>Year:</b> {props.item.year}
      </p>
      <p>
        <b>Year purchased:</b> {props.item.yearPurchased}
      </p>
      <p>
        <b>Price(SEK):</b> {props.item.price}
      </p>
      <p>
        <b>Type</b>: {props.item.type}
      </p>
      <p>
        <b>Material:</b> {props.item.material}
      </p>
      <p>
        <b>Height:</b> {props.item.height}
      </p>
      <p>
        <b>Width:</b> {props.item.width}
      </p>
      <p>
        <b>Depth:</b> {props.item.depth}
      </p>
    </li>
  );
}

export default ListItem;