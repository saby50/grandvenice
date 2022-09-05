import React, { useState, useRef } from "react";
import {
  Navbar, Nav, Container, Carousel, Row, Col, Button,
  Form,
} from "react-bootstrap";
import "../App.css";
//import {ImCross} from "react-icons/im";
import TopRibbon from "./includes/TopRibbon";
import TopNavbar from "./includes/Navbar";
import SubscribeSection from "./includes/SubscribeSection";
import Footer from "./includes/Footer";
import Feedback from "./includes/Feedback";

const Reward = () => {

  return (
    <>
      <TopRibbon />
      <TopNavbar />
      <div
        className="container-fluid py-5"
        style={{
          fontFamily:
            "Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif",
          backgroundColor: "#edf4ef",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
      >
        <div className="container">
          <div className="row ">
            <div className="col-md-6">
              <div>
                <h1
                  className="mt-md-5 mt-0"
                  style={{
                    fontWeight: "800",
                    lineHeight: "0.9",
                    fontSize: "4em",
                    letterSpacing: "-1px",
                    marginBottom: "40px",
                  }}
                >
                  <span style={{ color: "#F04937" }}>DEALS. EVENTS.</span> <br />
                  <span style={{ color: "#01ABE6 " }}>
                    EXCLUSIVE OFFERS.
                  </span>{" "}
                  <br />
                  <span style={{ color: "#F4763B", fontWeight: "400", fontSize: "0.8em" }}>
                    THE MALL INSIDER PASS
                  </span>
                </h1>
              </div>
            </div>
            <div className="col-md-6">
              <img
                src="https://assets.codepen.io/1729459/themall-img-01.png"
                width="100%"
              />
            </div>

          </div>
        </div>
      </div>
      <Container fluid className="p-0">
        <Container className="p-5">
          <div className="row bg-dark mt-5">
            <div className="col-md-4">
              <img src="https://assets.codepen.io/1729459/242148388_251575193543927_2178058260388874105_n.jpg" width="100%" />
            </div>
            <div className="col-md-8 d-flex align-items-center p-5">
              <span>
                <h3 className="font-weight-bold text-light mb-3">LATEST OFFER</h3>
                <p className="lead text-light">A mesmerizing gondola ride that captures the essence of Venice awaits you. We’re eagerly waiting to safely host you and your loved ones and provide you with an irreplaceable experience. And that’s not all! </p>
                <p className="lead text-light">Our gondola rides now have an offer: Against purchases amounting to INR 4000 at your favourite stores, get a complimentary gondola ride.</p>
              </span>
            </div>
          </div>
          <Row className="my-5 ">
            <Col className="">
              <Container className="bg-white p-5">
                <Row className="text-center">
                  <Col>
                    <h2>HOW IT WORKS</h2>
                  </Col>
                </Row>

                <Row className="mt-5 text-center">
                  <Col xs={12} sm={4} md={4} lg={4} className="d-flex justify-content-center">
                    <div>
                      <div className="roundreward d-flex  align-items-center justify-content-center mx-auto">
                        <h1 className="fw-bold display-2">1</h1>
                      </div><br />
                      <p className="fw-light">
                        Shop for Rs. 4,000 or more.
                      </p>
                    </div>
                  </Col>

                  <Col xs={12} sm={4} md={4} lg={4} className="d-flex justify-content-center">
                    <div>
                      <div className="roundreward d-flex  align-items-center justify-content-center mx-auto">
                        <h1 className="fw-bold display-2">2</h1>
                      </div><br />
                      <p className="fw-light">
                        Visit the conceirge desk at The Grand Venice Mall.
                      </p>
                    </div>
                  </Col>

                  <Col xs={12} sm={4} md={4} lg={4} className="d-flex justify-content-center">
                    <div>
                      <div className="roundreward d-flex  align-items-center justify-content-center mx-auto">
                        <h1 className="fw-bold display-2">3</h1>
                      </div><br />
                      <p className="fw-light">
                        Collect your ticket for a complimentary Gondola ride.
                      </p>
                    </div>
                  </Col>
                </Row>


                {/* <Row className="text-center mt-5">
                  <p className="fw-light">No Fees • No Stored Credit Card Information • Bank-Level Security with Data Encryption</p>
                </Row> */}
              </Container>
            </Col>
          </Row>


          {/* <Row>
            <Col className=" d-flex justify-content-center">
              <div>
                <Button variant="dark" style={{ borderRadius: 0, width: "250px" }}>
                  JOIN NOW
                </Button>
                <br />
                <br />
                <br />
                <p className="fw-light">If you are already a member, <u className="fw-normal">sign in here</u>.</p>
              </div>
            </Col>
          </Row> */}

        </Container>

        {/* <Row className=" my-5">
          <h3 className="text-center">STATUS BENEFITS</h3>
        </Row> */}

        {/* <Container style={{ background: "#edf4ef" }} className="text-light">
          <Row>
            <Col xs={12} sm={4} md={4} lg={4} style={{ background: "#e01c21" }} className="p-3">
              <div className="d-flex justify-content-center pb-4 pt-4">
                <img src="https://www.westfield.com/-/media/8422E87610014097B676085B4052D04B.ashx" />
              </div>
              <div className="text-center pb-2 pt-0">
                <h2>RED</h2>
                <small>(Earned immediately upon signing up)</small>
              </div>
              <ul>
                <li>1 point for every $1 you spend at Westfield Century City using your registered credit card</li><br />
                <li>$25 back for every 1,000 points earned (credit will appear on your credit card statement within 3-5 business days of your next in-center purchase)</li><br />
                <li>Birthday Reward</li>
              </ul>

            </Col>

            <Col xs={12} sm={4} md={4} lg={4} style={{ background: "#b78330" }} className="p-3">
              <div className="d-flex justify-content-center pb-4 pt-4">
                <img src="https://www.westfield.com/-/media/62290A52999D4BD2ADA636C6BAF2056E.ashx" />
              </div>
              <div className="text-center pb-2 pt-0">
                <h2>GOLD</h2>
                <small>(Earned upon spending $10,000 annually)</small>
              </div>
              <ul>
                <li>Get all RED member perks plus:4 complimentary valet passes</li><br />
                <li>VIP access to events and offers</li><br />
                <li>Anniversary gift</li>
              </ul>
            </Col>

            <Col xs={12} sm={4} md={4} lg={4} style={{ background: "#3c414c" }} className="p-3">
              <div className="d-flex justify-content-center pb-4 pt-4">
                <img src="https://www.westfield.com/-/media/6524CBF39D9B41B887EB6D1A4C9FFF4C.ashx" />
              </div>
              <div className="text-center pb-2 pt-0">
                <h2>PLATINUM</h2>
                <small>(Earned upon spending $25,000 annually)</small>
              </div>
              <ul className="pb-5">
                <li>All GOLD member perks plus:1 complimentary valet parking pass per week for one year</li><br />
                <li>Dedicated Concierge</li><br />
                <li>Exclusive event invitations and offers</li>
                <li>A VIP experience at Westfield Century City</li>
              </ul>
            </Col>
          </Row>

          <Row>
            <Col className="text-center text-black py-5 fw-light">
              <h2>Anything else you’d like to know?</h2>
              <Button variant="dark" style={{ borderRadius: 0, width: "250px" }} className="mt-4">
                FAQ
              </Button>
              <br />

              <br />
              <p className="fw-light">All your questions answered.</p>

            </Col>
          </Row>
        </Container> */}


      </Container>
      <SubscribeSection />
      <Footer />
    </>
  );
}

export default Reward;
