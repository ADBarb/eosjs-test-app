/**
 * Reducer file for EOS blocks
 */
import * as ActionType from '../actions/ActionTypes';

export const blocks = (state = [], action) => {
  switch (action.type) {
    case ActionType.BLOCKS_FETCHED: {
      return action.payload.blocks;
    }
    default:
      return state;
   };
};

export const isLoadingBlocks = (state = false, action) => {
  if (action.type === ActionType.LOADING_BLOCKS) {
    return action.payload.isLoading;
  }
  return state;
}
