import React, { useState } from "react";
import { Navbar, Nav, Container, Carousel, Spinner } from "react-bootstrap";
import "../App.css";
import TopRibbon from "./includes/TopRibbon";
import TopNavbar from "./includes/Navbar";
import SubscribeSection from "./includes/SubscribeSection";
import Footer from "./includes/Footer";
import Feedback from "./includes/Feedback";
import firebase from "firebase";
import axios from "axios";

//import {ImCross} from "react-icons/im";

export default function Contact() {
  const [contactDetails, setContactDetails] = useState({});
  const [errorMessage, setErrorMessage] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleInputOnChange = (e) => {
    setContactDetails((prev) => {
      let newContactDetails = { ...prev };
      newContactDetails[e.target.name] = e.target.value;
      return newContactDetails;
    });

    setErrorMessage(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    const { username, email, phone, message } = contactDetails;

    if (username != "" && email != "" && phone != "") {
      firebase
        .firestore()
        .collection("contact")
        .add({
          ...contactDetails,
          type: 0,
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        })
        .then((response) => {
          axios.post(
            "https://us-central1-the-mall-site.cloudfunctions.net/sendEmail",
            {
              to: "info@veniceindia.com",
              subject: `[Contact us] ${username}`,
              html_content: `<html><h3>User details</h3><p><b>Name: </b>${username}</p><p><b>Email address: </b>${email}</p><p><b>Phone number: </b>${phone}</p><p><b>Message: </b>${message}</p></html>`,
              bcc: "me@iarani.com",
            }
          );
        })
        .catch((e) => console.log("error", e))
        .finally(() => {
          setContactDetails({
            username: "",
            email: "",
            phone: "",
            message: "",
          });
          setErrorMessage(false);
          setSubmitting(false);
          alert(`Request successfully sent!`);
        });
    } else {
      setErrorMessage(true);
      setSubmitting(false);
      return;
    }
  };

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
            <div className="col-md-8 ">
              <div>
                <h1
                  className="mt-md-5 mt-0 ml-auto"
                  style={{
                    fontWeight: "900",
                    lineHeight: "0.9",
                    fontSize: "4em",
                    letterSpacing: "-1px",
                    marginBottom: "40px",
                  }}
                >
                  <span style={{ color: "#F04937" }}>CONNECT</span> <br />
                  <span style={{ color: "#01ABE6", fontWeight: "400" }}>
                    WITH US
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
          <span style={{ fontWeight: "700" }}>Feedback</span>
        </button>
      </div>

      <div
        className="container-fluid mt-5 mb-4"
        style={{
          fontFamily:
            "Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif",
        }}
      >
        <div className="row">
          <div className="col-md-6 d-flex justify-content-end">
            <div className="d-flex flex-column">
              <h4 className="mb-5" style={{ fontWeight: 700 }}>
                MAIN OFFICE
              </h4>
              <div className="mb-5">
                <h4 style={{ fontWeight: 700 }}>Address Name</h4>
                <p>
                  Bhasin Infotech And Structure Private Limited
                  <br />
                  Plot No SH3, Site IV, Near Pari Chowk, Block B, Industrial
                  Area,
                  <br />
                  Surajpur Site 4, Greater Noida, Uttar Pradesh 201308
                </p>
              </div>
              <div className="mb-5">
                <h4 style={{ fontWeight: 700 }}>Customer Care</h4>
                <p>
                  EMAIL : info@veniceindia.com
                  <br />
                  PHONE : +91 88606-66666
                </p>
                <br />
              </div>
              
              
            </div>
          </div>
          <div className="col-md-6  d-flex justify-content-center">
            <div>
              <h4 style={{ fontWeight: 700 }}>CONTACT US</h4>
              <p className="small text-muted">
                Fields marked with (<span className="text-danger">*</span>) are
                mandatory fields.
              </p>
              <form onSubmit={handleSubmit}>
                <div class="form-group mt-5 mb-2">
                  <label for="exampleInputEmail1 ">
                    Name <span className="text-danger">*</span>
                  </label>
                  <input
                    name="username"
                    onChange={handleInputOnChange}
                    value={contactDetails?.username}
                    type="text"
                    class="form-control form-control-lg mt-3"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    required
                  />
                </div>
                <div class="form-group mb-2">
                  <label for="exampleInputPassword1">
                    Email <span className="text-danger">*</span>
                  </label>
                  <input
                    name="email"
                    onChange={handleInputOnChange}
                    value={contactDetails?.email}
                    type="email"
                    class="form-control form-control-lg mt-3"
                    id="exampleInputPassword1"
                    required
                  />
                </div>

                <div class="form-group mb-2">
                  <label for="exampleItPassword2">
                    Phone <span className="text-danger">*</span>
                  </label>
                  <input
                    name="phone"
                    onChange={handleInputOnChange}
                    value={contactDetails?.phone}
                    type="text"
                    class="form-control form-control-lg mt-3"
                    id="phone"
                    required
                  />
                </div>

                <div class="form-group mb-3">
                  <label for="exampleInpu">Message</label>
                  <textarea
                    name="message"
                    onChange={handleInputOnChange}
                    value={contactDetails?.message}
                    class="form-control form-control-lg mt-3"
                    id="message"
                  ></textarea>
                </div>

                {errorMessage && (
                  <p className="small text-danger">
                    Please fill all the mandatory fields
                  </p>
                )}

                <button
                  type="submit"
                  class="btn btn-warning w-100"
                  disabled={submitting}
                >
                  {submitting && <Spinner size="sm" animation="border" />}{" "}
                  SUBMIT
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <SubscribeSection />
      <Footer />
    </>
  );
}
