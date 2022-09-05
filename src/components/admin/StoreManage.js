import React,{memo, useState, useEffect,lazy, Suspense} from "react";
import firebase from "firebase";
import { useCollection,useDocument } from "react-firebase-hooks/firestore";
import {connect} from "react-redux";
import {Link} from 'react-router-dom';
import TopRibbon from "../includes/TopRibbon";
import TopNavbar from "../includes/Navbar";
import SubscribeSection from "../includes/SubscribeSection";
import Footer from "../includes/Footer";
import Feedback from "../includes/Feedback";
import {Form,FormControl, Button, Modal, Container, Row, Col} from "react-bootstrap";
import {Formik} from "formik";
import * as Yup from 'yup';
const StoreUpdate = lazy(() => import("./StoreUpdate"));
const AddCat = lazy(() => import("./Addcategory"));


const StoreManage = () => {
  //load category
  const [categorySnapshot,categoryloading, categoryerror] = useCollection(firebase.firestore().collection('storeCategory'));

  //load stores
  const [storeSnapshot,storeLoading,error] = useCollection(firebase.firestore().collection("store"))

  //save store data from form
  const [storeData,setStoreData] = useState({category: []});

//functions for store update modal

  const [updateStore, setupdateStore] = useState({});
  const [show, setShow] = useState(false);

  const openHandle = () => {
    setShow(true);

  }

  const closeHandle = () => {
    setShow(false);

  }

//functions for store category add Modal
  const [showupdateCat, setShowupdateCat] = useState(false);




  const deleteItem = (storeId,url) => {
     let imageRef = firebase.storage().refFromURL(url);
      imageRef.delete().then(() => {
          console.log("Deleted")
      }).catch(err => console.log(err))
    firebase.firestore().collection('store').doc(storeId).delete();
  }


  const SaveFormDatatoState = (e) => {
    switch(e.target.name){
          case "store_name":
            setStoreData({
              ...storeData,
              name: e.target.value,
            });
            break;

            case "floor_option":
              setStoreData({
                ...storeData,
                [e.target.name]: e.target.value,
              });
            break;

          case "store_img":
          setStoreData({
            ...storeData,
            image_url: e.target.files[0],
          });
          break;

          case "store_num":
          setStoreData({
            ...storeData,
            contact_detail: e.target.value,
          });
          break;

          case "store_timing":
          setStoreData({
            ...storeData,
            timing: e.target.value,
          });
          break;

          case "store_desc":
          setStoreData({
            ...storeData,
            description: e.target.value,
          });
          break;

          case "store_category":
          let newArr = [...storeData?.category];
          if(e.target.checked){
          setStoreData({
            ...storeData,
            category: [...newArr,e.target.value],
          });
        }
        else{
          var index = newArr.indexOf(e.target.value);
          console.log(index);
          newArr.splice(index, 1);
          setStoreData({
            ...storeData,
            category: [...newArr],
          });
        }
          break;

          default:
            break;
    }
  }


  const SaveStatetoDB = (data,e) => {
    e.preventDefault();
        const uploadTask = firebase.storage().ref(`${data?.name}/`).child(data?.image_url?.name).put(data?.image_url);

        uploadTask.on('state_changed',
      (snapShot) => {
        //takes a snap shot of the process as it is happening
      }, (err) => {
        //catches the errors
        console.log(err)
      }, () => {
        // gets the functions from storage refences the image storage in firebase by the children
        // gets the download url then sets the image from firebase as the value for the imgUrl key:
        firebase.storage().ref(`${data?.name}/`).child(data?.image_url?.name).getDownloadURL()
         .then(fireBaseUrl => {
           firebase.firestore().collection("store").add({
             ...storeData,
             image_url: fireBaseUrl,
           })
         }).then((bruh) => alert("store added success"))
          .catch((error) => {console.error(error);})
          .finally((result) => setStoreData({category:[]}))
      })
  }

const validationSchema = Yup.object().shape({
  store_img: Yup.mixed()
  .required("Image is required"),
  store_name: Yup.string()
  .required("Name is required"),
  store_timing: Yup.string()
  .required("Timing is required"),
  store_desc:Yup.string(),
  store_num: Yup.string(),
  store_category: Yup.array()
  .required("Please select a category"),
  floor_option: Yup.string(),


})

  return (
    <>
      <div
        className="container-fluid py-5"
        style={{
          fontFamily:
            "Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
      >
        <div className="container">

        <Button variant="info" className="text-white fw-bold" onClick={() => setShowupdateCat(true)}>ADD CATEGORY</Button>

          <AddCat setCat = {setShowupdateCat} showCat = {showupdateCat} />
          <div className="row ">
              <h1>Store Upload Form</h1>
              <Formik initialValues={{
                store_img: "",
                store_name: "",
                store_timing: "",
                store_desc: '',
                store_num: "",
                store_category: '',
                floor_option: ""
              }} validationSchema={validationSchema} onSubmit={(values,{resetForm,setSubmitting} ) => {
                  setSubmitting(true);
                  resetForm();
                  setSubmitting(false);
              }}>
              {({
                values,
                errors,
                touched,
                isValid,
                dirty,
                handleChange,
                handleBlur,
                isSubmitting
              }) => (
              <Form onSubmit={(e) => SaveStatetoDB(storeData,e)}>
                  <Form.Group>
                      <Form.Label>Store Image/Logo</Form.Label>
                      <Form.Control type="file" onBlur={handleBlur} onChange={(e) => {SaveFormDatatoState(e);handleChange(e) }} name="store_img" value={values.store_img}
                      className={errors.store_img && touched.store_img ? "is-invalid" : null}/>
                      <Form.Control.Feedback type="invalid">
                        {errors.store_img}
                      </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group>
                      <Form.Label>Store Name</Form.Label>
                      <Form.Control type="text" onBlur={handleBlur} onChange={(e) => {SaveFormDatatoState(e);handleChange(e) }} name="store_name" value={values.store_name}
                        className={errors.store_name && touched.store_name ? "is-invalid" : null}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.store_name}
                      </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group>
                      <Form.Label>Store Timing</Form.Label>
                      <Form.Control type="text" onBlur={handleBlur} onChange={(e) => {SaveFormDatatoState(e);handleChange(e) }} name="store_timing" placeholder="Open 11am  -  8pm"
                      value={values.store_timing}
                      className={errors.store_timing && touched.store_timing ? "is-invalid" : null}/>

                      <Form.Control.Feedback type="invalid">
                        {errors.store_timing}
                      </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group>
                      <Form.Label>Store Description </Form.Label>
                      <Form.Control as="textarea" onBlur={handleBlur} onChange={(e) => {SaveFormDatatoState(e);handleChange(e) }} name="store_desc" value={values.store_desc}
                      className={errors.store_desc && touched.store_desc ? "is-invalid" : null}/>

                      <Form.Control.Feedback type="invalid">
                        {errors.store_desc}
                      </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group>
                      <Form.Label>Store Contact Number</Form.Label>
                      <Form.Control type="text" onBlur={handleBlur}  onChange={(e) => {SaveFormDatatoState(e);handleChange(e) }} name="store_num" value={values.store_num}
                      className={errors.store_num && touched.store_num ? "is-invalid" : null}/>

                      <Form.Control.Feedback type="invalid">
                        {errors.store_num}
                      </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group>
                      <Form.Label>Store Category</Form.Label><br />
                      {categorySnapshot?.docs?.map((item) => (
                        <Form.Check inline onBlur={handleBlur} onChange={(e) => {SaveFormDatatoState(e);handleChange(e) }}
                         label ={item?.data().label} name="store_category" id={item?.data().id} value={item?.data().value}

                         className={errors.store_category && touched.store_category ? "is-invalid" : null}/>

                      ))}

                      {/*
                      // <Form.Check inline  onChange={SaveFormDatatoState} label ="Entertainment" name="store_category" id="1" value="entertainment" />
                      // <Form.Check inline  onChange={SaveFormDatatoState} label ="Dining" name="store_category" id="2" value="dining" />
                      // <Form.Check inline  onChange={SaveFormDatatoState} label ="Women" name="store_category" id="3" value="women" />
                      // <Form.Check inline  onChange={SaveFormDatatoState} label ="Men" name="store_category" id="4" value="men" />
                      */}

                      <Form.Control.Feedback type="invalid">
                        {errors.store_category}
                      </Form.Control.Feedback>

                  </Form.Group>
                  <select class="form-select-sm my-3" aria-label="Default select example" onChange={(e) => {SaveFormDatatoState(e);handleChange(e) }} name="floor_option">
                  <option value="ground_floor" selected>Ground Floor</option>
                    <option value="first_floor" selected>First Floor</option>
                    <option value="second_floor">Second Floor</option>
                    <option value="third_floor">Third Floor</option>
                  </select>

                  <br />
                  <Button variant="primary"  type="submit" className={dirty && isValid ?"": 'disabled-btn'}
                  disabled={!(dirty && isValid)}
                  >Upload</Button>
              </Form>
            )}
              </Formik>
          </div>
          <div className="row my-4">
          {storeLoading && <div class="d-flex justify-content-center">
                              <div class="spinner-border" role="status">
                                <span class="sr-only"></span>
                              </div>
                            </div>}
            {storeSnapshot?.docs?.map((store) => (
                <div className="col-md-3">
                  <div className="card  text-center mb-5 ">
                    <div>
                      <img className="card-img-top p-5"  src={store?.data()?.image_url} />
                    </div>
                    <h4 className="card-title" style={{fontWeight: "600"}}>{store?.data()?.name}</h4>

                    <div className="card-body">
                      <div className="card-text">{store?.data()?.timing}</div>
                      <span style={{color: "rgba(0,0,0,0.5)"}}>{store?.data()?.contact_detail}</span>
                    </div>
                    <div className="card-footer text-muted d-flex justify-content-between">

                        <Button variant="success" onClick={() => {setupdateStore({...store?.data(), id: store?.id}); setShow(true) }}>
                          EDIT</Button>

                        <Button variant="danger" onClick={e =>
                            window.confirm("Are you sure you wish to delete this item?") &&
                            deleteItem(store?.id, store?.data()?.image_url)
                        }>DELETE</Button>

                    </div>
                  </div>

                </div>

              ))}
          </div>

        </div>
        </div>
        <Suspense fallback = {<div>Loading.... </div>}>
              <StoreUpdate sdata = {updateStore} openHandle = {openHandle} closeHandle = {closeHandle} show = {show}  />
        </Suspense>

    </>
  );
}
export default StoreManage;
