import React, { useState, useEffect, lazy, Suspense, useMemo } from "react";
import "../App.css";
import firebase from "firebase";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import TopRibbon from "./includes/TopRibbon";
import TopNavbar from "./includes/Navbar";
import SubscribeSection from "./includes/SubscribeSection";
import Footer from "./includes/Footer";
import Feedback from "./includes/Feedback";
import { BrowserRouter as Router, Switch, Route, useParams } from "react-router-dom";

export default function BrandPage() {
  const [brandInfo, setbrandInfo] = useState({});
  const { brandname } = useParams();
  const [brandsnapshot, brandloading, branderror] = useCollection(
    firebase.firestore().collection('store').where("slug", "==", brandname)
  );

  useEffect(() => {
    setbrandInfo(brandsnapshot?.docs[0]?.data());
  }, [brandloading]);

  return (
    <>
      <TopRibbon />
      <TopNavbar />
      <div
        className="container-fluid"
        style={{
          fontFamily:
            "Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif",

        }}
      >   <div className="container">
          <div className="row py-5">
            <div className="col-md-3">
              <img className="border" src={brandInfo?.image_url} />
            </div>
            <div className="col-md-6">
              <div>
                <h1><b>{brandInfo?.name}</b></h1>
              </div>

              <div>
                <p>Built on a passion for competition and a sporting lifestyle,
                  adidas offers premium sport apparel, footwear and accessories to
                  elevate your performance and fit your style.</p>
              </div>

              {/* <div className="row">
                <div className="col-md-4">
                  <b>STORE HOURS</b><br />
                  Monday to Thursday 11AM - 8PM<br />
                  Friday to Saturday 10AM - 9PM<br />
                  Sunday 11AM - 7PM<br />
                </div>

                <div className="col-md-4">
                  <b>BEST ENTRANCE</b><br />
                  Dining Pavilion Entrance<br /><br />

                  <b>LOCATION IN MALL</b><br />
                  Located near the Dining Pavilion wing, next to Intimissimi & Calzedonia<br />
                </div>

                <div className="col-md-4">
                  <b>TRAVEL HERE</b><br />
                  Driving Directions<br />
                  Ride Here With Uber<br /><br />
                  <b>MORE INFO</b><br />
                  {brandInfo?.contact_detail}<br />
                  View Map<br />
                  Other Locations<br />
                </div>

              </div> */}
            </div>
          </div>
        </div>
      </div>
      <SubscribeSection />
      <Footer />
    </>
  );
}
