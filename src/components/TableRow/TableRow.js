import React from 'react';

const TableRow = props => {

  return (
    <tr>
      <td>{props.item.title}</td>
      <td>{props.item.artist}</td>
      <td>{props.item.year}</td>
      <td>{props.item.yearPurchased}</td>
      <td>{props.item.price}</td>
      <td>{props.item.type}</td>
      <td>{props.item.material}</td>
      <td>{props.item.height}</td>
      <td>{props.item.width}</td>
      <td>{props.item.depth}</td>
    </tr>
  );
}

export default TableRow;