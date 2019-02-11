import React from 'react';
import './square.css';

const Square = ({value, squareClick}) => (
  <button className="square" onClick={() => squareClick(value)}>
    {value}
  </button>
);

export default Square;