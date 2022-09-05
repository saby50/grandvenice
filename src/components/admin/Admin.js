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
const StoreUpdate = lazy(() => import("./StoreUpdate"));
const AddCat = lazy(() => import("./Addcategory"));
const Members = lazy(() => import("./Members"));
const StoreManage = lazy(() => import("./StoreManage"));


const AdminPanel = () => {

  // store and members switch configs
  const [currentBar, setcurrentBar] = useState("store");

  const DisplayComp = () => {
      if(currentBar === "store"){
        return <StoreManage />
      }
      else if(currentBar === "members"){
        return <Members />
      }
      else{
        return ""
      }
  }

return(
  <>
  <Container>
        <Row >
          <Col className="d-flex justify-content-center">
              <h4 className={"fw-bold " + (currentBar === "store"? "currentbar": "" )} onClick={() => setcurrentBar("store")}>STORE</h4>
          </Col>

          <Col className="d-flex justify-content-center fw-bold">
            <h4 className={"fw-bold " + (currentBar === "members"? "currentbar": "" )} onClick={() => setcurrentBar("members")}>MEMBERS</h4>
          </Col>
        </Row>
    </Container>

    <Suspense fallback="loading">
      <DisplayComp />
    </Suspense>

  </>
  );
}
export default AdminPanel;
