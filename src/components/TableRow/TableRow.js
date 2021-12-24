import React from 'react';

const TableRow = ({ item }) => {
  return (
    <tr>
      <td>{item.title}</td>
      <td>{item.artist}</td>
      <td>{item.year}</td>
      <td>{item.yearPurchased}</td>
      <td>{item.price}</td>
      <td>{item.type}</td>
      <td>{item.material}</td>
      <td>{item.height}</td>
      <td>{item.width}</td>
      <td>{item.depth}</td>
    </tr>
  );
};

export default TableRow;
