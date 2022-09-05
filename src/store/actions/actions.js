import {SET_SEARCHITEM} from "./actionTypes";

export const setSearchItem = (value) => {
  return {
    type: SET_SEARCHITEM,
    payload:{
        searchItem: value,
    }
  };
};
