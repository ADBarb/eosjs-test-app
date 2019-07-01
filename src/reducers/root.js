/**
 * Root reducer file
 */
import { combineReducers } from 'redux';
import {
  blocks,
  isLoadingBlocks,
} from './blocks';

const blockReducers = combineReducers({
  blocks,
  isLoadingBlocks,
});

export default combineReducers({
  block: blockReducers,
});
