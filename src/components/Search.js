import React,{memo, useState, lazy, Suspense} from "react";
import {connect} from "react-redux";
import {setSearchItem} from "../store/actions/actions";
const Dispbrands = lazy(() => import("./Dispbrands"));


function Search(props) {
  const {searchItem,setSearchItem} = props;
  const handleChange = (e) => {
    // console.log("search result value",e.target.value);
    setSearchItem(e.target.value);
  }

  return(
    <>
      <input
      type="text"
      className="form-control mr-sm-2 mb-md-0 mb-2 searchbar"
      id="searchbar"
      placeholder="Search a store"
      onChange = {(e) => handleChange(e)}
      value = {searchItem}
    />
  </>
);
}

export default connect(
  (state) => ({
    searchItem: state.searchItem,

  }),
  { setSearchItem })
  (memo(Search));
