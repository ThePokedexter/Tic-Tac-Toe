import * as types from './actionTypes';

export function getCurrentSquares() {
  return ({ type: types.BOARD_GET_SQUARES });
}