import React from "react";
import TopRibbon from "./includes/TopRibbon";
import TopNavbar from "./includes/Navbar";
import SubscribeSection from "./includes/SubscribeSection";
import Footer from "./includes/Footer";
import Feedback from "./includes/Feedback";
//import {ImCross} from "react-icons/im";

export default function Hours() {
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
                    fontSize: "4em",
                    letterSpacing: "-1px",
                    marginBottom: "40px",

                  }}
                >
                  <span style={{ color: "#F04937" }}>FLEXIBLE</span> <br />
                  <span style={{ color: "#F4763B" }}>
                    OPERATING
                  </span>{" "}
                  <br />
                  <span style={{ color: "#01ABE6", fontWeight: "400" }}>
                    HOURS
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

      <Feedback />

      {/* <div
        className="container d-flex justify-content-center"
        style={{
          fontFamily:
            "Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif",
        }}
      >
        <div className="tablehours">
          <table className="table">

            <tbody>
              <tr>
                <th className="py-4" colSpan="3">UPCOMING HOURS</th>
              </tr>

              <tr>
                <td>Tuesday 7/21</td>
                <td>Open 11 AM - 8 PM</td>
                <td><img src="data:image/jpeg;base64,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" /></td>

              </tr>
              <tr>

                <td>Wednesday 7/22</td>
                <td>Open 11 AM - 8 PM</td>
                <td><img src="https://atlas-content-cdn.pixelsquid.com/assets_v2/215/2155264124710294988/jpeg-600/G03.jpg?modifiedAt=1" /></td>

              </tr>
              <tr>

                <td>Thursday 7/23</td>
                <td>Open 11 AM - 8 PM</td>
                <td><img src="data:image/jpeg;base64,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" /></td>
              </tr>
              <tr>

                <td>Friday 7/24 </td>
                <td>Open 10 AM - 9 PM</td>
                <td><img src="https://atlas-content-cdn.pixelsquid.com/assets_v2/215/2155264124710294988/jpeg-600/G03.jpg?modifiedAt=1" /></td>
              </tr>
              <tr>

                <td>Saturday 7/25</td>
                <td> Open 10 AM - 9 PM</td>
                <td><img src="data:image/jpeg;base64,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" /></td>
              </tr>
              <tr>

                <td>Sunday 7/26</td>
                <td>Open 11 AM - 8 PM</td>
                <td><img src="https://atlas-content-cdn.pixelsquid.com/assets_v2/215/2155264124710294988/jpeg-600/G03.jpg?modifiedAt=1" /></td>
              </tr>
              <tr>

                <td>Monday 7/27 </td>
                <td>Open 11 AM - 8 PM</td>
                <td><img src="data:image/jpeg;base64,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" /></td>
              </tr>




            </tbody>
          </table>
        </div>


      </div> */}

      <div
        className="container d-flex justify-content-center"
        style={{
          fontFamily:
            "Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif",
        }}
      >
        <div className="tablehours">
          <table className="table my-5">

            <tbody>
              <tr>
                <th className="py-4">REGULAR HOURS</th>
                <th className="py-4"></th>

              </tr>

              <tr>
                <td>Monday</td>
                <td>Open 11 AM - 9:30 PM</td>
              </tr>
              <tr>
                <td>Tuesday</td>
                <td>Open 11 AM - 9:30 PM</td>
              </tr>
              <tr>
                <td>Wednesday</td>
                <td>Open 11 AM - 9:30 PM</td>
              </tr>
              <tr>
                <td>Thursday</td>
                <td>Open 11 AM - 9:30 PM</td>
              </tr>
              <tr>
                <td>Friday</td>
                <td>Open 11 AM - 9:30 PM</td>
              </tr>
              <tr>
                <td>Saturday</td>
                <td>Open 11 AM - 9:30 PM</td>
              </tr>
              <tr>
                <td>Sunday</td>
                <td>Open 11 AM - 9:30 PM</td>
              </tr>




            </tbody>
          </table>
        </div>


      </div>
      <SubscribeSection />
      <Footer />
    </>
  );
}
