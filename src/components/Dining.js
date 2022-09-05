import { Navbar, Nav, Container, Carousel } from "react-bootstrap";
import "../App.css";
import TopRibbon from "./includes/TopRibbon";
import TopNavbar from "./includes/Navbar";
import SubscribeSection from "./includes/SubscribeSection";
import Footer from "./includes/Footer";
import Feedback from "./includes/Feedback";
import React, { memo, useState, useEffect } from "react";
import firebase from "firebase";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

const Dining = () => {

  const [diningsnapshot, dineloading, dineerror] = useCollection(
    firebase.firestore().collection("store").where("category", "array-contains", "dining")
  );

  console.log("dining array show", diningsnapshot?.docs[0]?.data());

  return (
    <>
      <TopRibbon />
      <TopNavbar />
      <div className="container-fluid">
        <div className="row" >
          <div className="col-md-12 dinnerimg text-center ">
            <h1 style={{
                    fontWeight: "800",
                    lineHeight: "0.9",
                    fontSize: "3em",
                    letterSpacing: "-1px",
                    marginBottom: "40px",
                  }}>AWAKEN THE <br /><strong>CONNOISSEUR</strong> IN YOU</h1>
            <a href="https://home.dishco.com/grandvenicemall/?accountid=33730#/" target="_blank" className="btn btn-md btn-danger">
                    ORDER FOOD AS YOU SHOP
                  </a>
          </div>
        </div>
      </div>

      <div
        className="container-fluid"
        style={{
          fontFamily:
            "Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif",
        }}
      >
      </div>
      <div
        className="container py-5 d-flex flex-column"
        style={{}}
      >
        {/* <div className="d-flex justify-content-center">
          <button className="btn btn-light py-3">
            <span>DOWNLOAD DINING GUIDE</span>
          </button>
        </div> */}
        {dineloading && <div class="d-flex justify-content-center mt-3">
          <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>}
        {diningsnapshot?.docs?.map((item) => (

          <dv className="row my-5 d-flex justify-content-center">
            <div className="col-md-4 d-flex justify-content-center my-3">
              <div className="">
                <img src={item?.data()?.image_url} height="auto" width="150px" />
              </div>
            </div>
            <div className="col-md-4 my-3 ">
              <h3>{item?.data()?.name}</h3>

              {parse(item?.data()?.description ?? "")}

            </div>

          </dv>
        ))
        }
      </div>

      <SubscribeSection />
      <Footer />
    </>
  );
}
export default memo(Dining);
