import React from "react";
import { Navbar, Nav, Container, Carousel } from "react-bootstrap";
import "../App.css";
//import {ImCross} from "react-icons/im";
import TopRibbon from "./includes/TopRibbon";
import TopNavbar from "./includes/Navbar";
import SubscribeSection from "./includes/SubscribeSection";
import Footer from "./includes/Footer";
import Feedback from "./includes/Feedback";

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
          <div className="row ">
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
                  <span style={{ color: "#F4763B" }}>IT'LL BE OUR</span> <br />
                  <span style={{ color: "#01ABE6" }}>
                    PLEASURE
                  </span>{" "}
                  <br />
                  <span style={{ color: "#F04937", fontWeight: "800" }}>
                    TO HOST YOU
                  </span>
                </h1>

              </div>
            </div>
            <div className="col-md-4">
              <img
                src="https://assets.codepen.io/1729459/themall-img-03.png"
                width="100%"
              />
            </div>

          </div>
        </div>
      </div>

      <div className="feedback">
        <button type="submit" className="btn btn-danger w-35">
          <span style={{ fontWeight: "700" }}
          >Feedback</span>
        </button>
      </div>

      <div className="container-fluid py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p>
                The Grand Venice Mall is conveniently located at the junction of the Noida-Greater Noida Expressway and the Trans Yamuna Expressway in the National Capital Region.


              </p>
              <p>
                Spread across 1.3 Million sqft, this destination mall offers you a perfect combination of shopping, dining, leisure and entertainment experiences.
                With approximately 3,00,000 Sqft dedicated to experiential entertainment the mall seeks to provide something for every age group and every member of the family
                <ul>
                  <li>Experiential Play Areas For Children</li>
                  <li>Spa And Personal Shopping</li>
                  <li>Gaming Zone with Indoor Golf, Snow Park Or Similar Activities</li>
                  <li>Galleries For Curated Experiences</li>
                  <li>5 Screen Multiplex</li>
                  <li> Multiple dining options</li>
                </ul>
              </p>
              <p>
                With 100% Vaccinated team, Delos certification and following all Covid protocols, The Grand Venice Mall is ready to welcome  you. Other amenities include a lost & found service, digital wayfinding,  ATM, Emergency Response Team, First Aid equipped with an AED Machine,  Complimentary WIFI , valet parking, concierge services, wheelchairs, baby care facilities, and comprehensive security.
              </p>
            </div>
            <div className="col-md-6">
              {/* <iframe src="https://www.youtube.com/embed/yCEKoHTJUmE" className="w-100" height="360" frameborder="0"></iframe> */}
              <img src="https://assets.codepen.io/1729459/Screenshot+2021-09-27+at+12.59.50+PM_1.png" width="100%" />
              <p className="small">&nbsp; *New architectural transformation coming soon</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h5>ADDRESS</h5>
              <p className="mb-5">
                Plot No SH3, Site IV, near Pari Chowk,<br />
                Greater Noida, Uttar Pradesh 201308
              </p>

              <h5 >CONTACT</h5>
              <p>
                EMAIL: info@veniceindia.com<br />
                PHONE: +91 88606-66666
              </p>
            </div>
            <div className="col-md-6">
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14031.586216057935!2d77.5263114!3d28.4525346!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf4077203c436ddc2!2sThe%20Grand%20Venice%20Mall!5e0!3m2!1sen!2sin!4v1629197669472!5m2!1sen!2sin"
                width="600" height="350" style={{ border: 0 }} allowfullscreen="" loading="lazy"></iframe>
            </div>
          </div>
        </div>
      </div>
      <SubscribeSection />
      <Footer />
    </>
  );
}
