import React, { useState, useEffect, lazy, Suspense, useMemo, memo } from "react";
import { Navbar, Nav, Container, Carousel, DropdownButton, Dropdown } from "react-bootstrap";
import "../App.css";
import firebase from "firebase";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
//import {ImCross} from "react-icons/im";
import TopRibbon from "./includes/TopRibbon";
import TopNavbar from "./includes/Navbar";
import SubscribeSection from "./includes/SubscribeSection";
import Footer from "./includes/Footer";
import Feedback from "./includes/Feedback";
const Search = lazy(() => import("./Search"));
const Dispbrands = lazy(() => import("./Dispbrands"));

const Stores = () => {

  const [floor, setFloor] = useState("");

  return (
    <>
      <TopRibbon />
      <TopNavbar />

      <div
        className="container-fluid"
        style={{
          fontFamily:
            "Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif",
          backgroundColor: "#f2f2f2"
        }}
      >   <div className="container">
          <div className="row py-5 d-flex flex-column">
            <div>
              <h3 style={{ fontWeight: 740 }} className="d-flex justify-content-center">Store Directory</h3>
            </div>

            <form>
              <div className="searchcontainer row  w-100 d-flex justify-content-center mt-3 ">
                <div className="col-md-7  px-2">
                  <Suspense fallback={<div>Loading.... </div>}>
                    <Search />
                  </Suspense>
                </div>

                {/* <div className="col-md-2  px-2">
                    <select className="form-select form-select-sm py-3 border-0" aria-label="Default select example" 
                    onChange={(e) => setFloor(e.target.value)}>
                    <option value="ground_floor" selected>Ground Floor</option>
                      <option value="first_floor" selected>First Floor</option>
                      <option value="second_floor">Second Floor</option>
                      <option value="third_floor">Third Floor</option>
                    </select>
                  </div> */}
                {/* <div className="searchsorticon col-md-1  px-0">
                    </div> */}

                {/* <div className="searchsorticon col-md-1   px-0">
                    <select class="form-select" aria-label="Default select example" id="searchsorticon">
                      <option selected>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    </div> */}
              </div>
            </form>
            <Suspense fallback={<div>Loading ...  </div>}>
              <Dispbrands floor={floor} />
            </Suspense>

          </div>
        </div>
      </div>

      <SubscribeSection />
      <Footer />
    </>
  );
}
export default Stores;
