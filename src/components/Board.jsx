import React from 'react';
import Square from './Square';

const boardSize = 3;

export default class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square 
        key={i}
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    return (
      <div>
        {Array(boardSize).fill(null).map((item, row) => 
          <div key={row} className="board-row">
            {Array(boardSize).fill(null).map((i, column) => this.renderSquare(row * boardSize + column))}
          </div>
        )}
      </div>
    );
  }
}