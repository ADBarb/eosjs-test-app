/*
 * Test file for src/reducers/blocks.js
 */
import * as ActionTypes from '../../actions/ActionTypes';
import * as reducers from '../../reducers/blocks';
import { testBlockData } from '../../fixtures/blocks';

describe('Reducers file: Blocks ', () => {
  describe('Reducer: blocks', () => {
    it('should handle BLOCKS_FETCHED', () => {
      expect(reducers.blocks([], {
        type: ActionTypes.BLOCKS_FETCHED,
        payload: { blocks: testBlockData }
      })).toEqual(testBlockData);
    });

    it('should handle when type is empty', () => {
      expect(reducers.blocks(undefined, {
        type: '',
      })).toEqual([]);
    });
  });

  describe('Reducer: isLoadingBlocks', () => {
    it('should handle when type is empty', () => {
      expect(reducers.isLoadingBlocks(false, {
        type: ActionTypes.LOADING_BLOCKS,
        payload: { isLoading: true },
      })).toEqual(true);
    });

    it('should handle when type is empty', () => {
      expect(reducers.isLoadingBlocks(undefined, {
        type: '',
      })).toEqual(false);
    });
  });
});
