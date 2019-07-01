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

/** 
 * get_info API call
 * Source: https://developers.eos.io/eosio-nodeos/reference#get_info
 */
export const getInfo = () => (dispatch) => {
  let data = null;
  const xhr = new XMLHttpRequest();
  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
      console.log('response', this.responseText);
    }
  });

  xhr.open("POST", "https://api.eosnewyork.io/v1/chain/get_info");
  xhr.setRequestHeader("accept", "application/json");
  xhr.send(data);
};

export const getBlock = (id) => (dispatch) => {
  let data = null;
  const xhr = new XMLHttpRequest();

  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
      console.log(this.responseText);
    }
  });

  xhr.open("POST", "http://localhost:8080/v1/chain/get_block");
  xhr.setRequestHeader("accept", "application/json");
  xhr.setRequestHeader("content-type", "application/json");

  xhr.send(data);
};
