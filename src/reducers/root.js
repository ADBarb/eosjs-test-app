/**
 * Root reducer file
 */
import { combineReducers } from 'redux';
import {
  blocks,
  isLoadingBlocks,
} from './blocks';

export default combineReducers({
  blocks,
  isLoadingBlocks,
});
