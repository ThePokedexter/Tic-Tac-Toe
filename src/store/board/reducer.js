import Immutable from 'seamless-immutable';
import * as types from './actionTypes';

const initialState = Immutable({
  history: [{
    squares: Array(9).fill(null),
    column: null,
    row: null,
    winningCombo: null
  }],
  xIsNext: true,
  stepNumber: 0,
  sortMovesAsc: true
});

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    default:
      return state;
  }
}

// selectors

export function getCurrentBoard(state) {
  let history = state.board.history;
  return history[history.length - 1];
}
