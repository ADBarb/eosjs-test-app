/** 
 * Action file for block related calls 
 */
import * as ActionTypes from './ActionTypes';

export const loadingBlocks = isLoading => ({
  type: ActionTypes.LOADING_BLOCKS,
  payload: { isLoading },
});
export const blocks = blocks => ({
  type: ActionTypes.BLOCKS_FETCHED,
  payload: { blocks },
});

export const fetchBlocks = (options = {}) => (dispatch) => {
  dispatch(loadingBlocks(true));
  dispatch(loadingBlocks(false));
};
