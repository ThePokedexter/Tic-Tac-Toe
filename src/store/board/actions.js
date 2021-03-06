import * as types from './actionTypes';
import * as boardSelectors from '../board/reducer';

export function newMove(i) {
  return({ type: types.BOARD_NEW_MOVE, position: i });
}

export function jumpTo(step) {
  return({ type: types.BOARD_JUMP_TO, step: step });
}