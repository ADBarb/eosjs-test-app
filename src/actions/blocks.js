/** 
 * Action file for block related calls 
 */
import * as ActionTypes from './ActionTypes';
const { JsonRpc } = require('eosjs');
const fetch = require('node-fetch');
const rpc = new JsonRpc("https://api.eosnewyork.io", { fetch });

export const loadingBlocks = isLoading => ({
  type: ActionTypes.LOADING_BLOCKS,
  payload: { isLoading },
});
export const blocks = blocks => ({
  type: ActionTypes.BLOCKS_FETCHED,
  payload: { blocks },
});

/** 
 * Get info, then get header block, use that to loop through prev blocks and get their info
 * get_info Source: https://developers.eos.io/eosio-nodeos/reference#get_info 
 */
export const fetchBlocks = (num = 10) => (dispatch) => {
  const blockList = [];
  dispatch(loadingBlocks(true));
  rpc.get_info().then((res) => {
    let id = res.head_block_id;
    let result = Promise.resolve();
    for (let i = 0; i < num; i++) {
      // eslint-disable-next-line
      result = result.then(() => {
        return rpc.get_block(id).then((res) => {
          blockList.push(res);
          id = res.previous;
          if (blockList.length === num) {
            dispatch(blocks(blockList));
            dispatch(loadingBlocks(false));
            return;
          }
        });
      })
    }
  }).catch((error) => {
    console.log('Error in get_info: ', error);
    dispatch(loadingBlocks(false));
  });
}
