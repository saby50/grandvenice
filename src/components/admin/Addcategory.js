import React, {useState, useEffect} from "react";
import {Modal, Form, Button} from "react-bootstrap";
import firebase from "firebase";
import { useCollection,useDocument } from "react-firebase-hooks/firestore";


const AddCat = (props) => {

    const {setCat, showCat} = props;
    const [categorySnapshot,categoryloading, categoryerror] = useCollection(firebase.firestore().collection('storeCategory'));

    const [newCategory,setnewCategory] = useState("");

    // add category to state;
    const addToState = (e) => {
      setnewCategory(
          e.target.value
      )
    }

    //Add category to db function
    const addCategory = (category,e) => {
        e.preventDefault();

      firebase.firestore().collection('storeCategory').add({
        label:   category,
        id: category,
        value: category.toLowerCase()
      })
      .then((h) => alert("category added success"))
      .catch((e) => console.log(e))
      .finally(() => setnewCategory(""))

    }

    //remove category from db function
    const delCategory = (takeID) => {
      firebase.firestore().collection('storeCategory').doc(takeID).delete()
      .then((h) => alert("category deleted success"))
      .catch((e) => console.log(e))

    }


    return(
      <>
      <Modal show={showCat} onHide={() => setCat(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Store Update</Modal.Title>
      </Modal.Header>
      <Modal.Body>

      <Form  onSubmit = {(e) => addCategory(newCategory,e)}>

          <Form.Group>
              <Form.Label>Add category</Form.Label>
              <Form.Control type="text" name="store_category" onChange={addToState}/>
          </Form.Group>
          <br />
          <Button variant="primary"  type="submit">Upload</Button>
      </Form>

        {categoryloading && <div class="d-flex justify-content-center">
                            <div class="spinner-border" role="status">
                              <span class="sr-only">Loading...</span>
                            </div>
                          </div>}
      <div className="d-flex flex-column">
            {categorySnapshot?.docs?.map((single,e) => (
                <div className=" my-1 d-flex justify-content-between">
                    {single?.data()?.label}
                    <Button onClick={() => delCategory(single?.id) } variant="danger" size="sm">DELETE</Button>
                </div>

            ))}
      </div>

      </Modal.Body>
    </Modal>

      </>

    );


}

export default AddCat;
