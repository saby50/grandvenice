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
    firebase.firestore().collection("store").where("category", "array-contains", "women")
  );

  console.log("dining array show", diningsnapshot?.docs[0]?.data());

  return (
    <>
      <TopRibbon />
      <TopNavbar />
      <div
        className="container-fluid py-5"
        style={{
          fontFamily:
            "Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif",
          backgroundColor: "#C2DEE2",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
      >
        <div className="container">
          <div className="row ">
            <div className="col-md-6 ">
              <div>
                <h1
                  className="mt-md-5 mt-0"
                  style={{
                    fontWeight: "800",
                    lineHeight: "0.9",
                    fontSize: "3em",
                    letterSpacing: "-1px",
                    marginBottom: "40px",

                  }}
                >
                  <span style={{ color: "#F04937" }}>AWAKEN THE</span> <br />
                  <span style={{ color: "#F4763B" }}>
                  FASHIONISTA
                  </span>{" "}
                  <br />
                  <span style={{ color: "#01ABE6", fontWeight: "400" }}>
                  IN YOU
                  </span>
                </h1>
              </div>
            </div>
            <div className="col-md-6">
              <img
                src="https://assets.codepen.io/1729459/grandvenice-207611612.png"
                width="100%"
              />
            </div>

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

          <div className="row my-5 d-flex justify-content-center">
            <div className="col-md-4 d-flex justify-content-center my-3">
              <div className="">
                <img src={item?.data()?.image_url} height="auto" width="150px" />
              </div>
            </div>
            <div className="col-md-4 my-3 ">
              <h3>{item?.data()?.name}</h3>

              {parse(item?.data()?.description ?? "")}
              {/* <div className="row d-flex">
                  <div className="col-md-4"  style={{width: "120px"}}>
                    <button className="btn btn-light" style={{width: "100px", height:"100px"}}>Menu</button>
                  </div>
                  <div className="col-md-4" style={{width: "120px"}}>
                    <button className="btn btn-light"  style={{width: "100px", height:"100px"}}>Menu</button>
                  </div>
                  <div className="col-md-4">
                    <button className="btn btn-light" style={{width: "100px", height:"100px"}}>Menu</button>
                  </div>
              </div> */}

            </div>

          </div>
        ))
        }
      </div>

      <SubscribeSection />
      <Footer />
    </>
  );
}
export default memo(Dining);
