import React, { useState, useRef } from "react";
import {
  Navbar,
  Nav,
  Container,
  Carousel,
  Row,
  Col,
  Button,
  Form,
} from "react-bootstrap";
import "../App.css";
//import {ImCross} from "react-icons/im";
import TopRibbon from "./includes/TopRibbon";
import TopNavbar from "./includes/Navbar";
import SubscribeSection from "./includes/SubscribeSection";
import Footer from "./includes/Footer";
import Feedback from "./includes/Feedback";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Formik } from "formik";
import * as Yup from "yup";
import firebase from "firebase";
import axios from "axios";

const Venture = () => {
  const [showExtended, setshowExtended] = useState([]);
  const handleExtension = (id) => {
    if (showExtended.includes(id)) {
      let tempId = showExtended.indexOf(id);
      showExtended.splice(tempId);
      setshowExtended([...showExtended]);
    } else {
      setshowExtended([...showExtended, id]);
    }
    console.log("updted state is", showExtended);
  };

  // const scrollToContact = useRef();
  const allData = [
    {
      img: "https://assets.codepen.io/1729459/atrium-1.png",
      heading: "Mall Displays, Mall Branding and Digital Branding",
      content:
        "Our state-of-the-art DOOH network and prime event spaces create immersive brand experiences at point-of-purchase.",
      extendedText:
        "We target your creative to reach your audience across digital screens located at prime locations across the mall. We also offer prime on-site locations for brands to design unforgettable one-to-one consumer interactions.",
    },

    {
      img: "https://cdn.urw.com/-/media/Corporate~o~Sites/Unibail-Rodamco-Corporate/Images/Homepage/BUSINESS/Brand-Experiences/Brand-Ventures/SectionPicture-Event-and-Entertainment.ashx?la=en&revision=930f07fa-dfa8-45d3-8e0d-59ce58211702",
      heading: "Retail Merchandising and Promotional Activities",
      content: "The ideal setting for unforgettable experiences.",
      extendedText:
        "Our extraordinary, world-class venue in Greater Noida are the perfect setting to create ground-breaking experiences for your brand. Our cutting-edge technology and dedicated events team will ensure production runs smoothly and engages your audience during the event and beyond.",
    },
  ];

  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "*Name must be 2 char long")
      .max(100, "*name cannot be longer than 100 chars")
      .required("*name is required"),

    lastName: Yup.string(),

    emailID: Yup.string()
      .email("*must be a valid email")
      .max(50, "*email must be less than 50 chars")
      .required("*Email is required"),

    phoneNo: Yup.string().required("*phone Number is required"),

    companyName: Yup.string().required("*Company name is required"),

    message: Yup.string(),
  });

  const scrollToContact = useRef();

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
                  className="mt-md-5 mt-0"
                  style={{
                    fontWeight: "800",
                    lineHeight: "0.9",
                    fontSize: "3em",
                    letterSpacing: "-1px",
                    marginBottom: "40px",
                  }}
                >
                  <span style={{ color: "#F04937" }}>ADVERTISE</span> <br />
                  <span style={{ color: "#01ABE6 " }}>YOUR BRAND</span> <br />
                  <span
                    style={{
                      color: "#F4763B",
                      fontWeight: "400",
                      fontSize: "0.8em",
                    }}
                  >
                    IN THE GRAND VENICE
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
      <Container fluid style={{ background: "#e8e8e8" }}>
        <Container className="py-5 px-0">
          {allData?.map((item, index) => (
            <>
              <Row className="mb-5 bg-white leaseimp mx-auto">
                <Col className="px-0 " xs={12} sm={6} md={6}>
                  <img src={item?.img} className="w-100" />
                </Col>

                <Col className="p-4 bg-light" xs={12} sm={6} md={6}>
                  <h4 className="mb-3" style={{ fontWeight: 550 }}>
                    {item?.heading}
                  </h4>
                  <p className="content">{item?.content}</p>

                  <Button
                    variant="dark"
                    className="plus"
                    onClick={() => handleExtension(index)}
                  >
                    <FontAwesomeIcon icon={faPlus} />{" "}
                  </Button>
                </Col>
              </Row>

              {showExtended?.includes(index) && (
                <Container className=" d-flex justify-content-center">
                  <Row className="mb-5 bg-white extendclass">
                    <Col lg={12} xs={12} className="p-4 px-5 text-center r">
                      <p>{item?.extendedText}</p>
                      <p>Find out more about our advertising opportunities</p>
                      <Button
                        variant="dark"
                        size="md"
                        href="#scrolltocontact"
                        className="mb-5"
                      >
                        <b>CONTACT US</b>
                      </Button>
                    </Col>
                  </Row>
                </Container>
              )}
            </>
          ))}
        </Container>
      </Container>
      <Container
        fluid
        style={{ backgroundColor: "#C2DEE2" }}
        className="bg-white pt-5"
        id="scrolltocontact"
        ref={scrollToContact}
      >
        <Row>
          <Col className="text-center p-5">
            <h5>
              <b>GET IN TOUCH</b>
            </h5>
            <p className="mb-1">
              <i>
                Tell us about you and find out more about advertising
                opportunities.
              </i>
            </p>
            <p className="small text-muted">
              Fields marked with (<span className="text-danger">*</span>) are
              mandatory fields.
            </p>
          </Col>
        </Row>

        <Row className=" d-flex justify-content-center">
          <Col className="" xs={12} sm={10} md={11} lg={6}>
            <Formik
              initialValues={{
                firstName: "",
                lastName: "",
                emailID: "",
                phoneNo: "",
                companyName: "",
                message: "",
              }}
              validationSchema={validationSchema}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                firebase
                  .firestore()
                  .collection("contact")
                  .add({
                    ...values,
                    type: 1,
                    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                  })
                  .then((response) => {
                    axios.post(
                      "https://us-central1-the-mall-site.cloudfunctions.net/sendEmail",
                      {
                        to: "info@veniceindia.com",
                        subject: `[Get in touch] ${values.firstName} ${values.lastName}`,
                        html_content: `<html><h3>User details</h3><p><b>Name: </b>${values.firstName} ${values.lastName}</p><p><b>Email address: </b>${values.emailID}</p><p><b>Phone number: </b>${values.phoneNo}</p><p><b>Company name: </b>${values.companyName}</p><p><b>Message: </b>${values.message}</p></html>`,
                        bcc: "me@iarani.com",
                      }
                    );
                  })
                  .catch((e) => console.log("error", e))
                  .finally(() => {
                    alert(`Request successfully sent!`);
                  });

                setSubmitting(true);
                resetForm();
                setSubmitting(false);
              }}
            >
              {({
                values,
                handleChange,
                handleSubmit,
                errors,
                touched,
                handleBlur,
                isValid,
                dirty,
                isSubmitting,
              }) => (
                <Form onSubmit={handleSubmit} className="mb-5">
                  <Form.Group className="mb-3" controlId="formBasicFirstName">
                    <Form.Label>
                      First name <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="firstName"
                      value={values.firstName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        errors.firstName && touched.firstName
                          ? "is-invalid"
                          : null
                      }
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.firstName}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicLastName">
                    <Form.Label>
                      Last name <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="lastName"
                      value={values.lastName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        errors.lastName && touched.lastName
                          ? "is-invalid"
                          : null
                      }
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.lastName}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>
                      Email address <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      type="email"
                      name="emailID"
                      value={values.emailID}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        errors.emailID && touched.emailID ? "is-invalid" : null
                      }
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.emailID}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPhone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                      type="text"
                      name="phoneNo"
                      value={values.phoneNo}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        errors.phoneNo && touched.phoneNo ? `is-invalid` : null
                      }
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.phoneNo}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicCompany">
                    <Form.Label>
                      Company <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="companyName"
                      value={values.companyName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        errors.companyName && touched.companyName
                          ? "is-invalid"
                          : null
                      }
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.companyName}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicmessage">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      style={{ height: "250px" }}
                      name="message"
                      value={values.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        errors.message && touched.message
                          ? "is invalid"
                          : "null"
                      }
                    />
                  </Form.Group>
                  <Button
                    variant="primary"
                    type="submit"
                    className={"p-3" + dirty && isValid ? "" : "disabled-btn"}
                    disabled={!dirty && !isValid}
                  >
                    SUBMIT
                  </Button>
                </Form>
              )}
            </Formik>
          </Col>
        </Row>
      </Container>
      <SubscribeSection />
      <Footer />
    </>
  );
};

export default Venture;
