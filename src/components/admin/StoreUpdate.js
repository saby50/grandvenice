import React, { memo, useState, useEffect } from "react";
import firebase from "firebase";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import TopRibbon from "../includes/TopRibbon";
import TopNavbar from "../includes/Navbar";
import SubscribeSection from "../includes/SubscribeSection";
import Footer from "../includes/Footer";
import Feedback from "../includes/Feedback";
import { Form, FormControl, Button, Modal } from "react-bootstrap";

const StoreUpdate = (props) => {

  const { sdata, openHandle, closeHandle, show } = props;
  //category snapShot
  const [categorySnapshot, categoryloading, categoryerror] = useCollection(firebase.firestore().collection('storeCategory'));

  const [storeData, setStoreData] = useState({ ...sdata });
  const [imgupload, setimgupload] = useState(false);

  useEffect(() => {
    setStoreData({ ...sdata });

  }, [sdata])

  const SaveFormDatatoState = (e) => {

    switch (e.target.name) {

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
        setimgupload(true);
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
        console.log("target value initial ", e);
        let newArr = [...storeData?.category];
        if (e.target.checked) {
          setStoreData({
            ...storeData,
            category: [...newArr, e.target.value],
          });
        }
        else {
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


  const SaveStatetoDB = (data, e) => {
    e.preventDefault();
    if (imgupload) {
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
              firebase.firestore().collection("store").doc(storeData?.id).update({
                ...storeData,
                image_url: fireBaseUrl,
              })
            }).then((bruh) => alert("store updated success"))
            .catch((error) => { console.error(error); })
            .finally((result) => setStoreData({ category: [] }))
        })
    }
    else {
      firebase.firestore().collection("store").doc(storeData?.id).update({
        ...storeData,
      })
        .then((bruh) => alert("store updated success"))
        .catch((error) => { console.error(error); })
        .finally((result) => setStoreData({})
        )

    }
    //   const uploadTask = firebase.storage().ref(`${data?.name}/`).child(data?.image_url?.name).put(data?.image_url);
    //
    //   uploadTask.on('state_changed',
    // (snapShot) => {
    //   //takes a snap shot of the process as it is happening
    // }, (err) => {
    //   //catches the errors
    //   console.log(err)
    // }, () => {
    //   // gets the functions from storage refences the image storage in firebase by the children
    //   // gets the download url then sets the image from firebase as the value for the imgUrl key:
    //   firebase.storage().ref(`${data?.name}/`).child(data?.image_url?.name).getDownloadURL()
    //    .then(fireBaseUrl => {
    //      firebase.firestore().collection("store").doc(storeData?.id).update({
    //        ...storeData,
    //        image_url: fireBaseUrl,
    //      })
    //    }).then((bruh) => alert("store updated success"))
    //     .catch((error) => {console.error(error);})
    //     .finally((result) => setStoreData({category:[]}))
    // })
  }


  return (
    <>
      <Modal show={show} onHide={closeHandle}>
        <Modal.Header closeButton>
          <Modal.Title>Store Update</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Form onSubmit={(e) => SaveStatetoDB(storeData, e)}>
            <Form.Group>
              <Form.Label>Store Image/Logo</Form.Label>
              <Form.Control type="file" onChange={SaveFormDatatoState} name="store_img" />
            </Form.Group>

            <Form.Group>
              <Form.Label>Store Name</Form.Label>
              <Form.Control type="text" onChange={SaveFormDatatoState} name="store_name" value={storeData?.name} />
            </Form.Group>

            <Form.Group>
              <Form.Label>Store Timing</Form.Label>
              <Form.Control type="text" onChange={SaveFormDatatoState} name="store_timing" placeholder="Open 11am  -  8pm"
                value={storeData?.timing} />
            </Form.Group>

            <Form.Group>
              <Form.Label>Store Description </Form.Label>
              <Form.Control as="textarea" onChange={SaveFormDatatoState} name="store_desc" value={storeData?.description} />
            </Form.Group>

            <Form.Group>
              <Form.Label>Store Contact Number</Form.Label>
              <Form.Control type="text" onChange={SaveFormDatatoState} name="store_num" value={storeData?.contact_detail} />
            </Form.Group>

            <Form.Group>
              <Form.Label>Store Category</Form.Label><br />
              {/*<Form.Check inline  onChange={SaveFormDatatoState} checked={storeData?.category?.includes("entertainment")} label ="Entertainment" name="store_category" id="1" value="entertainment" />*/}
              {categorySnapshot?.docs?.map((item) => (
                <Form.Check inline onChange={SaveFormDatatoState} checked={storeData?.category?.includes(item?.data()?.value)}
                  label={item?.data().label} name="store_category" id={item?.data().id} value={item?.data().value} />

              ))}

            </Form.Group>
            <div className="custom-select">
              <select class="form-select-sm"
                aria-label="Default select example"
                onChange={SaveFormDatatoState}
                name="floor_option" value={storeData?.floor_option}>
                <option value="ground_floor" >Ground Floor</option>
                <option value="first_floor" >First Floor</option>
                <option value="second_floor">Second Floor</option>
                <option value="third_floor">Third Floor</option>
              </select>
            </div>
            <br />
            <Button variant="primary" type="submit" onClick={closeHandle}>Upload</Button>
          </Form>

        </Modal.Body>

      </Modal>
    </>
  );
}
export default StoreUpdate;
