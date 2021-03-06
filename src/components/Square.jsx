import React from 'react';

export default function Square(props) {
  return (
    <button 
      className={`square${props.highlight ? ' highlighted' : ''}`}
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
}
