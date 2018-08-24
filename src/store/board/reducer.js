import Immutable from 'seamless-immutable';
import * as types from './actionTypes';

const initialState = Immutable({
  squares: Array(9).fill(null)
});

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    default:
      return state;
  }
}

// selectors

export function getSquares(state) {
  return state.board.squares;
}
