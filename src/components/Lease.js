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
import { Formik } from "formik";
import * as Yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import firebase from "firebase";
import axios from "axios";

const Lease = () => {
  const allData = [
    {
      img: "https://cdn.urw.com/-/media/Corporate~o~Sites/Unibail-Rodamco-Corporate/Images/Homepage/BUSINESS/Leasing-Opportunities/United-State/SectionPicture-Long-term-inline-spaces.ashx?la=en&revision=01f27ce9-42d4-4613-b0f7-d79a3b71b5f2",
      heading: "Store Leasing",
      content:
        "Give your burgeoning brand room to grow in a permanent inline unit.",
      extendedText:
        "With a fixed location, these stores offer you a chance to develop your brand's identity and cultivate a loyal following that knows where to find you time and time again.",
    },

    // {
    //   img: "https://cdn.urw.com/-/media/Corporate~o~Sites/Unibail-Rodamco-Corporate/Images/Homepage/BUSINESS/Leasing-Opportunities/United-State/SectionPicture-Short-term-inline-spaces.ashx?la=en&revision=f20a59a8-b9a2-448d-b283-4cf1c09d1702",
    //   heading: "Short Term Leasing",
    //   content: "A temporary inline unit gives you the visibility and credibility of a fixed store and the flexibility of a short-term lease—perfect if you're testing a concept in a new market, seeking maximum exposure via a product showroom, or if yours is a seasonal brand.",
    //   extendedText: "",
    // }
    // ,

    {
      img: "https://cdn.urw.com/-/media/Corporate~o~Sites/Unibail-Rodamco-Corporate/Images/Homepage/BUSINESS/Leasing-Opportunities/United-State/SectionPicture-Pop-up.ashx?la=en&revision=4da52c29-aed4-4315-aa42-6848e9ccd887",
      heading: "Pop-up",
      content:
        "If you really want to make your business pop, a pop-up can bring a zing to any brand.",
      extendedText:
        "Whether you're an established brick-and-mortar, brand-new to the retail world, or you've mastered the digital realm with an e-commerce site, you can target a new market, grow your shopper base, and strengthen your customer loyalty by opening a pop-up. This temporary retail concept is transforming the traditional rules of retail and redefining how shoppers interact with brands—don't miss out.",
    },

    {
      img: "https://cdn.urw.com/-/media/Corporate~o~Sites/Unibail-Rodamco-Corporate/Images/Homepage/BUSINESS/Leasing-Opportunities/United-State/SectionPicture-Retail-merchandising-units.ashx?la=en&revision=571544c9-1bab-40cf-8d64-dfaf541945ea",
      heading: "Seasonal and Flea Markets",
      content:
        "Introduce your brand to thousands of the world's most discerning shoppers with a URW-owned unit that integrates organically with the center's design.",
      extendedText:
        "With turnkey production, carts are the easiest way to sell your product and test one of our markets.",
    },

    {
      img: "https://cdn.urw.com/-/media/Corporate~o~Sites/Unibail-Rodamco-Corporate/Images/Homepage/BUSINESS/Leasing-Opportunities/United-State/SectionPicture-Kiosk-Leasing.ashx?la=en&revision=e85413be-163d-48dc-b4a1-6795069c7e27",
      heading: "Kiosks",
      content:
        "Located in high-traffic areas with 360-degree visibility, our relatively small-footprint kiosks pack a huge sales-potential punch.",
      extendedText:
        "Work with our team of skilled experts to achieve the best design for your brand.",
    },

    // {
    //   img:,
    //   heading:,
    //   content:,
    //   extendedText:,
    // },
    //
    // {
    //   img:,
    //   heading:,
    //   content:,
    //   extendedText:,
    // }
  ];
  const [showExtended, setshowExtended] = useState([]);
  const handleExtension = (id) => {
    console.log("yaaho");
    if (showExtended.includes(id)) {
      let tempId = showExtended.indexOf(id);
      showExtended.splice(tempId);
      setshowExtended([...showExtended]);
    } else {
      setshowExtended([...showExtended, id]);
    }
    console.log("updted state is", showExtended);
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "First name must be 2 char long")
      .max(100, "First name cannot be longer than 100 chars")
      .required("First name is required"),

    lastName: Yup.string(),

    emailID: Yup.string()
      .email("Add a valid email")
      .max(50, "Email must be less than 50 chars")
      .required("Email is required"),

    phoneNo: Yup.string().required("Phone number is required"),

    leaseOption: Yup.string().required("Lease option is required"),

    companyName: Yup.string().required("Company name is required"),

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
                    fontSize: "4em",
                    letterSpacing: "-1px",
                    marginBottom: "40px",
                  }}
                >
                  <span style={{ color: "#F04937" }}>RETAIL SOLUTIONS </span>{" "}
                  <br />
                  <span style={{ color: "#01ABE6 " }}>
                    FOR EVERY BRAND
                  </span>{" "}
                  <br />
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
                <p className="leasetext mt-3 mb-4">
                  The Grand Venice offers flexible, scalable retail solutions
                  that let you showcase your brand at its best, create
                  meaningful shopping experiences, and, of course, maximize your
                  sales.
                </p>
                <Button
                  variant="danger"
                  className="mb-5"
                  onClick={() => {
                    scrollToContact.current.scrollIntoView({
                      behaviour: "smooth",
                    });
                  }}
                  onClick={() => {
                    scrollToContact.current.scrollIntoView({
                      behaviour: "smooth",
                    });
                  }}
                >
                  <b>CONTACT US</b>
                </Button>
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

                <Col className="p-4" xs={12} sm={6} md={6}>
                  <h4 className="mb-4" style={{ fontWeight: 550 }}>
                    {item?.heading}
                  </h4>
                  <p className="content">{item?.content}</p>

                  <Button
                    variant="dark"
                    className="plus"
                    onClick={() => handleExtension(index)}
                  >
                    <FontAwesomeIcon icon={faPlus} />
                  </Button>
                </Col>
              </Row>

              {showExtended?.includes(index) && (
                <Container className=" d-flex justify-content-center">
                  <Row className="mb-5 bg-white extendclass">
                    <Col lg={12} xs={12} className="p-4 px-5 text-center r">
                      <p>{item?.extendedText}</p>
                      <p>Find out more about our Leasing opportunities</p>
                      <Button
                        variant="dark"
                        className="mb-5"
                        onClick={() => {
                          scrollToContact.current.scrollIntoView({
                            behaviour: "smooth",
                          });
                        }}
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
        ref={scrollToContact}
      >
        <Row>
          <Col className="text-center p-5">
            <h5>
              <b>GET IN TOUCH</b>
            </h5>
            <p className="mb-1">
              <i>
                Tell us about you and find out more about our Leasing
                opportunities
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
                leaseOption: "not-mentioned",
                message: "",
              }}
              validationSchema={validationSchema}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                firebase
                  .firestore()
                  .collection("contact")
                  .add({
                    ...values,
                    type: 2,
                    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                  })
                  .then((response) => {
                    axios.post(
                      "https://us-central1-the-mall-site.cloudfunctions.net/sendEmail",
                      {
                        to: "info@veniceindia.com",
                        subject: `[Lease] ${values.firstName} ${values.lastName}`,
                        html_content: `<html><h3>User details</h3><p><b>Name: </b>${values.firstName} ${values.lastName}</p><p><b>Email address: </b>${values.emailID}</p><p><b>Phone number: </b>${values.phoneNo}</p><p><b>Company name: </b>${values.companyName}</p><p><b>Lease option: </b>${values.leaseOption}</p><p><b>Message: </b>${values.message}</p></html>`,
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
                  <Form.Group className="mb-3" controlId="formBasicLeaseOption">
                    <Form.Label>
                      Leasing Duration <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Select
                      type="text"
                      name="leaseOption"
                      value={values.leaseOption}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        errors.leaseOption && touched.leaseOption
                          ? "is-invalid"
                          : null
                      }
                    >
                      <option selected value="not-mentioned">Requirement Type</option>
                      <option value="Less than store-leading">
                        Store Leasing
                      </option>
                      <option value="More than pop-up">Pop-up</option>
                      <option value="More than seasonal-flea-markets">
                        Seasonal and Flea Markets
                      </option>
                      <option value="More than kiosks">Kiosks</option>
                    </Form.Select>
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
                    variant="dark"
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

export default Lease;
