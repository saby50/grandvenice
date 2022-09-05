import React from "react";
import { Navbar, Nav, Container, Carousel } from "react-bootstrap";
import "../App.css";
//import {ImCross} from "react-icons/im";
import TopRibbon from "./includes/TopRibbon";
import TopNavbar from "./includes/Navbar";
import SubscribeSection from "./includes/SubscribeSection";
import Footer from "./includes/Footer";
import WELL from "./images/WELL.png";

export default function About() {
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
          <div className="row align-items-center">
            <div className="col-md-6">
              <div>
                <h1
                  className="mt-md-8 mt-0"
                  style={{
                    fontWeight: "800",
                    lineHeight: "0.9",
                    fontSize: "4em",
                    letterSpacing: "-1px",
                    marginBottom: "40px",
                  }}
                >
                  <span style={{ color: "#F4763B" }}>CERTIFICATES </span> <br />
                  <span style={{ color: "#01ABE6" }}>AND AWARDS</span> <br />
                </h1>
              </div>
            </div>
            <div className="col-md-4">
              <img src={WELL} width="100%" />
            </div>
          </div>
        </div>
      </div>

      <SubscribeSection />
      <Footer />
    </>
  );
}
