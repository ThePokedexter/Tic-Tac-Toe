import Immutable from 'seamless-immutable';
import * as types from './actionTypes';
import {calculateWinner, calculateWinningCombo} from '../../helpers/calculate-winner';

const initialState = Immutable({
  history: [{
    squares: Array(9).fill(null),
    column: null,
    row: null,
    winningCombo: null
  }],
  xIsNext: true,
  stepNumber: 0,
  sortMovesAsc: true,
});

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case types.BOARD_NEW_MOVE:
      const history = state.history.slice(0, state.stepNumber + 1);
      const current = history[history.length - 1];
      const squares = current.squares.slice();
      const i = action.position;

      if (calculateWinner(squares) || squares[i]) {
        break;
      }

      squares[i] = state.xIsNext ? 'X' : 'O';

      return state.merge({
        history: history.concat([{
          squares: squares,
          column: (i % 3) + 1,
          row: Math.floor(i/3) + 1,
          winningCombo: calculateWinningCombo(squares)
        }]),
        stepNumber: history.length,
        xIsNext: !this.state.xIsNext
      });
      
    default:
      return state;
  }
}

// selectors

export function getCurrentBoard(state) {
  let history = state.board.history;
  return history[history.length - 1];
}
