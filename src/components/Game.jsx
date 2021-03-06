import React from 'react';
import Board from './Board';
import {calculateWinner, calculateWinningCombo} from '../helpers/calculate-winner';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
        column: null,
        row: null,
        winningCombo: null
      }],
      stepNumber: 0,
      xIsNext: true,
      sortMovesAsc: true
    }
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squares: squares,
        column: (i % 3) + 1,
        row: Math.floor(i/3) + 1,
        winningCombo: calculateWinningCombo(squares)
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);
    const isDraw = !winner && current.squares.find((i) => i == null) === undefined;

    const sortMoves = <button onClick={() => this.setState({sortMovesAsc: !this.state.sortMovesAsc})}>
        {this.state.sortMovesAsc ? "Sort moves descending" : "Sort moves ascending"}
      </button>;

    let moves = history.map((step, move) => {
      const desc = move ?
        `Go to move # ${move} (${step.column}, ${step.row})`:
        'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>
            {move === this.state.stepNumber ? <strong>{desc}</strong> : desc}
          </button>
        </li>
      );
    });

    if (!this.state.sortMovesAsc) {
      moves = moves.reverse();
    }

    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else if (isDraw) {
      status = "It's a Draw!";
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }
    return (
      <div className="game">
        <div className="game-board">
          <Board 
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
            winningCombo={current.winningCombo}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <div>{sortMoves}</div>
          <ol reversed={!this.state.sortMovesAsc}>{moves}</ol>
        </div>
      </div>
    );
  }
}
