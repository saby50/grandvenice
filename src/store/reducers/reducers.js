import * as actionTypes from "../actions/actionTypes";


const initState = {
  searchItem: "",

}

const reducer = (state = initState,action) => {
  switch (action.type){
      case actionTypes.SET_SEARCHITEM:
        return{
          ...state,
          searchItem: action.payload.searchItem
        }
  }
  return state
}


export default reducer;
