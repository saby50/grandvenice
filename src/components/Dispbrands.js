import React, { memo, useState, useEffect } from "react";
import firebase from "firebase";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

function Dispbrands(props) {
  //display category
  const [categorySnapshot, categoryloading, categoryerror] = useCollection(firebase.firestore().collection('storeCategory'));

  const { searchItem } = props;
  const [searchCategory, setsearchCategory] = useState("");
  const [dispData, setdispData] = useState([]);
  const [storeSnapshot, loadingStore, errorStore] = useCollection(
    firebase.firestore().collection('store')
  );

  const temp = [];
  storeSnapshot?.docs?.forEach((doc) => {
    temp.push({ ...doc?.data(), id: doc?.id });
  });

  let matches = [];
  if (searchItem.length > 0) {
    matches = [];
    // const clearState = () => {
    //   setsearchCategory("");
    // };
    matches = temp.filter(item => {
      const regex = new RegExp(`${searchItem}`, "gi");
      return item.name.match(regex)
    })
  } else if (searchCategory.length > 0) {
    matches = []
    matches = temp.filter(item => {
      return item?.category?.includes(searchCategory);
    })
  }

  useEffect(() => {
    if (searchItem.length > 0) {
      setdispData(matches);
      matches = []
      setsearchCategory("");
    } else if (searchCategory.length > 0) {
      setdispData(matches);
      matches = []
    }
    else {
      setdispData(temp);
    }
  }, [storeSnapshot, searchItem, searchCategory]);


  return (
    <>
      <div className="row searchsuggest mt-2">
        {/*category mappped here*/}
        <div className="col-md-10 offset-md-1 text-center ">
          
          {categorySnapshot?.docs?.map((single, e) => (
            <div className="btn btn-light m-1 " style={{ backgroundColor: "#ffffff" }}
              onClick={() => setsearchCategory(single?.data()?.value)}
            >
              <span className="small">{single?.data()?.label}</span>
            </div>
          ))}
        </div>

      </div>
      <div className="row my-4">
        {loadingStore && <div class="d-flex justify-content-center">
          <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>}
        {dispData.map((store) => (
          <div className="col-md-3">
            <div className="" style={{ textDecoration: "none", color: "inherit" }}>
              <div className="card  text-center mb-5 ">
                <div style={{ height: "250px" }}>
                  <img className="card-img-top p-5" src={store?.image_url} style={{paddingTop: "auto"}} />
                </div>
                <h4 className="card-title" style={{ fontWeight: "600" }}>{store?.name}</h4>

                <div className="card-body">
                  <div className="card-text">{store.timing}</div>
                  <span style={{ color: "rgba(0,0,0,0.5)" }}>{store?.contact_detail}</span>
                </div>
              </div>
            </div>
          </div>

        ))}
      </div>
    </>
  );
}

export default connect(
  (state) => ({
    searchItem: state.searchItem
  }))
  (memo(Dispbrands));
