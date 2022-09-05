import React, { memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const TopRibbon = () => {
  return (
    <>
      <div
        className="container-fluid py-5"
        style={{ backgroundColor: "white" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <p
                style={{
                  fontSize: "1.5rem",
                  lineHeight: "1",
                  fontWeight: "700",
                }}
              >
                <span style={{ color: "#707070" }}> DEALS. EVENTS.</span>
                <br /> EXCLUSIVE OFFERS!{" "}
              </p>

              <p
                classname="mb-3 d-block"
                style={{ fontSize: "0.9rem", lineHeight: "1.2" }}
              >
                Become a Mall Insider today and get the first one to receive
                latest updates on deals, events and exclusive offers.
              </p>
              <p className="small">
                © 2021 The Grand Venice Mall, Venture of Bhasin Infotech &
                Infrastructure Private Limited
              </p>
            </div>
            <div className="col-md-8">
              <div className="d-flex justify-content-between pb-4 border-bottom">
                <div className="">
                  <a
                    className="text-decoration-none me-3 text-dark d-none d-md-inline"
                    href="https://www.facebook.com/GrandVenice" target="_blank" rel="noopener noreferrer"
                  >
                    <small>
                      <FontAwesomeIcon icon={faFacebookF} />
                    </small>
                  </a>
                  <a
                    className="text-decoration-none m-3 text-dark d-none d-md-inline"
                    href="https://www.instagram.com/grandvenicemall/" target="_blank" rel="noopener noreferrer"
                  >
                    <small>
                      <FontAwesomeIcon icon={faInstagram} />
                    </small>
                  </a>
                  <a
                    className="text-decoration-none m-3 text-dark d-none d-md-inline"
                    href="https://twitter.com/grandvenicemall" target="_blank" rel="noopener noreferrer"
                  >
                    <small>
                      <FontAwesomeIcon icon={faTwitter} />
                    </small>
                  </a>
                  <a
                    className="text-decoration-none m-3 text-dark d-none d-md-inline"
                    href="https://www.linkedin.com/company/28705772/" target="_blank" rel="noopener noreferrer"
                  >
                    <small>
                      <FontAwesomeIcon icon={faLinkedin} />
                    </small>
                  </a>
                </div>
                <div className="">
                  <a
                    className="text-decoration-none m-3 text-dark d-none d-md-inline"
                    href="/stores"
                  >
                    <small>STORES</small>
                  </a>
                </div>
              </div>
              <div className="row py-3 justify-content-between">
                <div className="col-md-2 col-6 small">
                  <a href="/about" className="d-block mb-2 text-dark text-decoration-none">ABOUT</a>
                </div>
                <div className="col-md-2 col-6 small">
                  <a href="/venture" className="d-block mb-2 text-dark text-decoration-none">ADVERTISING</a>
                </div>
                <div className="col-md-2 col-6 small">
                  <a href="/lease" className="d-block mb-2 text-dark text-decoration-none">LEASING</a>
                </div>
                <div className="col-md-2 col-6 small">
                  <a href="/reward" className="d-block mb-2 text-dark text-decoration-none">INSIDER PASS</a>
                </div>
                <div className="col-md-4 col-6 small">
                  <a href="/certifications" className="d-block mb-2 text-dark text-decoration-none">CERTIFICATES AND AWARDS</a>
                </div>
              </div>
              {/* <div className="row py-3">
                <div className="col-md-3 col-6 small">
                  <span className="d-block mb-2">
                    <strong>Learn More</strong>
                  </span>
                  <span className="d-block mb-2">Gondola Ride</span>
                  <span className="d-block mb-2">Food</span>
                  <span className="d-block mb-2">Stores</span>
                  <span className="d-block mb-2">Contact us</span>
                </div>
                <div className="col-md-3 col-6 small">
                  <span className="d-block mb-2">
                    <strong>Masti Zone</strong>
                  </span>
                  <span className="d-block mb-2">Zipline</span>
                  <span className="d-block mb-2">Trampoline Park</span>
                  <span className="d-block mb-2">The House of Dead</span>
                  <span className="d-block mb-2">7D Theatre</span>
                  <span className="d-block mb-2">Snow Mastiii</span>
                </div>
                <div className="col-md-3 col-6 small">
                  <span className="d-block mb-2">
                    <strong>GV Packs</strong>
                  </span>
                  <span className="d-block mb-2">Couple Pack</span>
                  <span className="d-block mb-2">Family Pack</span>
                  <span className="d-block mb-2">School Pack</span>
                  <span className="d-block mb-2">Celebration Pack</span>
                </div>
                <div className="col-md-3 col-6 small">
                  <span className="d-block mb-2">
                    <strong>For Business</strong>
                  </span>
                  <span className="d-block mb-2">Advertising</span>
                  <span className="d-block mb-2">Leasing</span>
                  <span className="d-block mb-2">Property Services</span>
                  <span className="d-block mb-2">Retailer Marketing</span>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default memo(TopRibbon);
