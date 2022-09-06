import React from "react";
import { Navbar, Nav, Container, Carousel } from "react-bootstrap";
import "../App.css";
//import {ImCross} from "react-icons/im";
import TopRibbon from "./includes/TopRibbon";
import TopNavbar from "./includes/Navbar";
import SubscribeSection from "./includes/SubscribeSection";
import Footer from "./includes/Footer";
import Feedback from "./includes/Feedback";
import background from "./images/tinsels.png";
import birthrightVideo from "./images/birt.gif";
import cinepolisReopening from "./images/cinepolis-reopening.jpg"
import HomePageCarousel from "./HomePageCarousel";

export default function Home() {
  return (
    <>

      <TopRibbon />
      <TopNavbar />

      
      <HomePageCarousel />

      {/* Original Bar */}
      {/* <div
        className="container-fluid py-5"
        style={{
          fontFamily:
            "Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif",
           backgroundColor: "#C2DEE2",
          //backgroundColor: "#333333",
          //backgroundImage: `url(${background})`,
          backgroundPosition: "top left",
          backgroundRepeat: "repeat-x"
        }}
      >
        <div className="container">
          <div className="row ">
            <div className="col-md-6">
              <div>
                <h1
                  className="mt-md-5"
                  style={{
                    fontWeight: "800",
                    lineHeight: "0.9",
                    fontSize: "4em",
                    letterSpacing: "-1px",
                    marginBottom: "40px"
                  }}
                >
                  <span style={{ color: "#F04937" }}>BACK TOGETHER</span> <br />
                  <span style={{ color: "#F4763B" }}>
                    SAFER AND BETTER
                  </span>{" "}
                  <br />
                </h1>
                
                <p
                  style={{
                    fontSize: "1rem",
                    lineHeight: "2",
                    marginBottom: "40px",
                    fontWeight: "600",
                  }}
                >
                  <a href="/stores" className="text-dark">
                    CHECK OUT THE STORES
                  </a>
                  <br />
                  <a href="https://home.dishco.com/grandvenicemall/?accountid=33730#/" target="_blank" className="text-dark">
                    ORDER FOOD AS YOU SHOP
                  </a><sup className="text-danger"> NEW</sup>
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <img
                //src="https://assets.codepen.io/1729459/grandvenice-207611612.png"
                src="https://assets.codepen.io/1729459/themall-img-04.png"
                width="100%"
              />
            </div>

          </div>
        </div>
      </div> */}

      {/* <div className="feedback">
        <button type="submit" className="btn btn-danger w-35">
          <span style={{ fontWeight: "700" }}
          >Feedback</span>
        </button>
      </div> */}

      <div
        className="container-fluid"
        style={{
          fontFamily:
            "Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif",
        }}
      >
        <div className="container">
          <div className="row py-5">
            <div className="col-md-12 text-center">
              <div style={{ marginBottom: "60px" }}>
                <Carousel className="logo-carousel" variant="dark" controls={true} indicators={false}>
                  <Carousel.Item>
                    <div className="row">
                      <div className="col-md-2 col-4 mb-3">
                        <img
                          className="d-block w-100 p-3"
                          src="https://assets.codepen.io/1729459/hm.jpg"
                          alt="First slide"
                        />
                      </div>
                      <div className="col-md-2  col-4 mb-3">
                        <img
                          className="d-block w-100 p-3"
                          src="https://assets.codepen.io/1729459/max.jpg"
                          alt="First slide"
                        />
                      </div>
                      <div className="col-md-2  col-4 mb-3">
                        <img
                          className="d-block w-100 p-3"
                          src="https://assets.codepen.io/1729459/bata.jpg"
                          alt="First slide"
                        />
                      </div>
                      <div className="col-md-2  col-4 mb-3">
                        <img
                          className="d-block w-100 p-3"
                          src="https://assets.codepen.io/1729459/levis.jpg"
                          alt="First slide"
                        />
                      </div>
                      <div className="col-md-2  col-4 mb-3">
                        <img
                          className="d-block w-100 p-3"
                          src="https://assets.codepen.io/1729459/lifestyle.jpg"
                          alt="First slide"
                        />
                      </div>
                      <div className="col-md-2  col-4 mb-3">
                        <img
                          className="d-block w-100 p-3"
                          src="https://assets.codepen.io/1729459/bk.jpg"
                          alt="First slide"
                        />
                      </div>
                    </div>

                    <Carousel.Caption></Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <div className="row">
                      <div className="col-md-2  col-4 mb-3">
                        <img
                          className="d-block w-100 p-3"
                          src="https://assets.codepen.io/1729459/sketchers.jpg"
                          alt="First slide"
                        />
                      </div>
                      <div className="col-md-2  col-4 mb-3">
                        <img
                          className="d-block w-100 p-3"
                          src="https://assets.codepen.io/1729459/haldiram.jpg"
                          alt="First slide"
                        />
                      </div>
                      <div className="col-md-2 col-4 mb-3">
                        <img
                          className="d-block w-100 p-3"
                          src="https://assets.codepen.io/1729459/puma.jpg"
                          alt="First slide"
                        />
                      </div>
                      <div className="col-md-2 col-4 mb-3">
                        <img
                          className="d-block w-100 p-3"
                          src="https://assets.codepen.io/1729459/bata.jpg"
                          alt="First slide"
                        />
                      </div>
                      <div className="col-md-2 col-4 mb-3">
                        <img
                          className="d-block w-100 p-3"
                          src="https://assets.codepen.io/1729459/cinepolis.jpg"
                          alt="First slide"
                        />
                      </div>
                      <div className="col-md-2 col-4 mb-3">
                        <img
                          className="d-block w-100 p-3"
                          src="https://assets.codepen.io/1729459/invent.jpg"
                          alt="First slide"
                        />
                      </div>
                    </div>

                    <Carousel.Caption></Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
              </div>
              <h2
                style={{
                  fontWeight: "700",
                  lineHeight: "0.9",
                  fontSize: "2.5em",
                  letterSpacing: "-1px",
                  marginBottom: "10px",
                }}
              >
                Find it. Love it.
              </h2>
              <p className="mb-5">
                Discover fashion, delicious food, beauty &amp; entertainment.
              </p>
            </div>
            <div className="col-md-12 mb-3">
              <div
                className="p-5"
                style={{
                  backgroundImage:
                    "url(https://assets.codepen.io/1729459/dreamstimetiff_207530354.jpg)",
                  backgroundSize: "contain",
                  backgroundPosition: "bottom right",
                  backgroundRepeat: "no-repeat",
                  backgroundColor: "#F2F2F2",
                }}
              >
                <div
                  className="mt-md-5 mt-0"
                  style={{ maxWidth: "300px", marginBottom: "160px" }}
                >
                  <h3
                    style={{
                      fontWeight: "700",
                      lineHeight: "1",
                      fontSize: "2.5em",
                      letterSpacing: "-1px",
                      marginBottom: "10px",
                    }}
                  >
                    Discover latests <br />
                    fashion trends.
                  </h3>
                  <p style={{ lineHeight: "1.1" }}>
                    Shop at H&amp;M, Max and more.
                  </p>
                  <p
                    style={{
                      fontSize: "1rem",
                      lineHeight: "2",
                      marginBottom: "40px",
                      fontWeight: "600",
                    }}
                  >
                    <a href="/fashion" className="text-dark">
                      FASHION BRANDS AT GRAND VENICE
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <div
                className="p-5"
                style={{
                  backgroundImage:
                    "url(https://assets.codepen.io/1729459/coffee.jpg)",
                  backgroundSize: "contain",
                  backgroundPosition: "bottom right",
                  backgroundRepeat: "no-repeat",
                  backgroundColor: "#EDDCCA",
                }}
              >
                <div
                  className="mt-md-5 mt-0"
                  style={{ maxWidth: "300px", marginBottom: "80px" }}
                >
                  <h3
                    style={{
                      fontWeight: "700",
                      lineHeight: "1",
                      fontSize: "2em",
                      letterSpacing: "-1px",
                      marginBottom: "10px",
                    }}
                  >
                    Coffee dates with your loved ones
                  </h3>
                  <p style={{ lineHeight: "1.1" }}>
                    Catch up for a coffee at The Densi Bakery and more.
                  </p>
                  <p
                    style={{
                      fontSize: "1rem",
                      lineHeight: "2",
                      marginBottom: "40px",
                      fontWeight: "600",
                    }}
                  >
                    <a href="/cafe" className="text-dark">
                      CAFES AT GRAND VENICE
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div
                className="p-5"
                style={{
                  backgroundImage:
                    "url(https://assets.codepen.io/1729459/food.jpg)",
                  backgroundSize: "contain",
                  backgroundPosition: "bottom right",
                  backgroundRepeat: "no-repeat",
                  backgroundColor: "#C8DAE6",
                }}
              >
                <div
                  className="mt-md-5 mt-0"
                  style={{ maxWidth: "300px", marginBottom: "80px" }}
                >
                  <h3
                    style={{
                      fontWeight: "700",
                      lineHeight: "1",
                      fontSize: "2em",
                      letterSpacing: "-1px",
                      marginBottom: "10px",
                    }}
                  >
                    Discover the world on your plate
                  </h3>
                  <p style={{ lineHeight: "1.1" }}>
                    Dine at Karim’s, Wow Momo’s, Burger King, Dominos and more…
                  </p>
                  <p
                    style={{
                      fontSize: "1rem",
                      lineHeight: "2",
                      marginBottom: "40px",
                      fontWeight: "600",
                    }}
                  >
                    <a href="/dining" className="text-dark">
                      DINING AT GRAND VENICE
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container-fluid py-5"
        style={{ backgroundColor: "#F2F2F2" }}
      >
        <div className="container">
          <div className="row  justify-content-center">
            <div className="col-md-6 text-center">
              <h2
                style={{
                  fontWeight: "700",
                  lineHeight: "0.9",
                  fontSize: "2.5em",
                  letterSpacing: "-1px",
                  marginBottom: "10px",
                }}
              >
                Facilities to make your shopping safe and comfortable.
              </h2>
              <p className="mb-5">
                Grand Venice Mall has earned the #WELLHealthSafety Rating, an evidence-based, third-party verified rating that signifies the measures we’ve taken to support the health and safety of our staff, visitors and stakeholders.
              </p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-2 text-center  mb-3">
              <div><img src="https://www.nicepng.com/png/detail/126-1261973_lostfound-lost-and-found-icon-png.png" height="60" /></div>
              <div className="mt-3 mb-md-5" style={{}}>
                <h3
                  style={{
                    fontWeight: "700",
                    lineHeight: "1",
                    fontSize: "1.2em",
                    letterSpacing: "-1px",
                    marginBottom: "10px",
                  }}
                >
                  Lost &amp; Found
                </h3>
                {/* <p style={{ lineHeight: "1.1" }}>
                  Relive the magic of live music with an enchanting experience filled with symphonies of live piano music.
                </p> */}
              </div>
            </div>
            <div className="col-md-2 text-center  mb-3">
              <div><img src="https://www.nicepng.com/png/full/87-874388_mauritius-road-signs-stop-give-way-sign.png" height="60" /></div>
              <div className="mt-3 mb-md-5" style={{}}>
                <h5
                  style={{
                    fontWeight: "700",
                    lineHeight: "1",
                    fontSize: "1.2em",
                    letterSpacing: "-1px",
                    marginBottom: "10px",
                  }}
                >
                  Digital wayfinding
                </h5>
                {/* <p style={{ lineHeight: "1.1" }}>
                  Experience romance the Venetian way with a romantic Gondola
                  ride. Take your partner on a truly special ride.
                </p> */}
              </div>
            </div>
            <div className="col-md-2 text-center  mb-3">
              <div><img src="https://cdn0.iconfinder.com/data/icons/shopping-icons-rounded/110/Atm-512.png" height="60" /></div>
              <div className="mt-3 mb-md-5" style={{}}>
                <h5
                  style={{
                    fontWeight: "700",
                    lineHeight: "1",
                    fontSize: "1.2em",
                    letterSpacing: "-1px",
                    marginBottom: "10px",
                  }}
                >
                  ATM
                </h5>
                {/* <p style={{ lineHeight: "1.1" }}>
                  Unleash the adventurer inside you. Soar into the air and
                  experience an adventure like never before.
                </p> */}
              </div>
            </div>
            <div className="col-md-2 text-center  mb-3">
              <div><img src="https://icons-for-free.com/iconfiles/png/512/alert+emergency+light+icon-1320190827716489882.png" height="60" /></div>
              <div className="mt-3 mb-md-5" style={{}}>
                <h5
                  style={{
                    fontWeight: "700",
                    lineHeight: "1",
                    fontSize: "1.2em",
                    letterSpacing: "-1px",
                    marginBottom: "10px",
                  }}
                >
                  Emergency Response Team
                </h5>
                {/* <p style={{ lineHeight: "1.1" }}>
                  Unleash the adventurer inside you. Soar into the air and
                  experience an adventure like never before.
                </p> */}
              </div>
            </div>
            <div className="col-md-2 text-center  mb-3">
              <div><img src="https://www.clipartmax.com/png/middle/22-227185_our-school-first-aid-symbol-png.png" height="60" /></div>
              <div className="mt-3 mb-md-5" style={{}}>
                <h5
                  style={{
                    fontWeight: "700",
                    lineHeight: "1",
                    fontSize: "1.2em",
                    letterSpacing: "-1px",
                    marginBottom: "10px",
                  }}
                >
                  First Aid equipped with an AED Machine
                </h5>
                {/* <p style={{ lineHeight: "1.1" }}>
                  Unleash the adventurer inside you. Soar into the air and
                  experience an adventure like never before.
                </p> */}
              </div>
            </div>
            <div className="col-md-2 text-center  mb-3">
              <div><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/WIFI_icon.svg/2048px-WIFI_icon.svg.png" height="60" /></div>
              <div className="mt-3 mb-md-5" style={{}}>
                <h5
                  style={{
                    fontWeight: "700",
                    lineHeight: "1",
                    fontSize: "1.2em",
                    letterSpacing: "-1px",
                    marginBottom: "10px",
                  }}
                >
                  Complimentary WIFI
                </h5>
                {/* <p style={{ lineHeight: "1.1" }}>
                  Unleash the adventurer inside you. Soar into the air and
                  experience an adventure like never before.
                </p> */}
              </div>
            </div>
            <div className="col-md-2 text-center  mb-3">
              <div><img src="https://library.kissclipart.com/20181210/xjq/kissclipart-parking-lot-clipart-car-park-parking-clip-art-55e56a2a5123e167.jpg" height="60" /></div>
              <div className="mt-3 mb-md-5" style={{}}>
                <h5
                  style={{
                    fontWeight: "700",
                    lineHeight: "1",
                    fontSize: "1.2em",
                    letterSpacing: "-1px",
                    marginBottom: "10px",
                  }}
                >
                  Valet Parking
                </h5>
                {/* <p style={{ lineHeight: "1.1" }}>
                  Unleash the adventurer inside you. Soar into the air and
                  experience an adventure like never before.
                </p> */}
              </div>
            </div>
            <div className="col-md-2 text-center  mb-3">
              <div><img src="https://www.pngmart.com/files/9/YouTube-Bell-Icon-Transparent-PNG.png" height="60" /></div>
              <div className="mt-3 mb-md-5" style={{}}>
                <h5
                  style={{
                    fontWeight: "700",
                    lineHeight: "1",
                    fontSize: "1.2em",
                    letterSpacing: "-1px",
                    marginBottom: "10px",
                  }}
                >
                  Concierge services
                </h5>
                {/* <p style={{ lineHeight: "1.1" }}>
                  Unleash the adventurer inside you. Soar into the air and
                  experience an adventure like never before.
                </p> */}
              </div>
            </div>
            <div className="col-md-2 text-center  mb-3">
              <div><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/MUTCD_D9-6.svg/1200px-MUTCD_D9-6.svg.png" height="60" /></div>
              <div className="mt-3 mb-md-5" style={{}}>
                <h5
                  style={{
                    fontWeight: "700",
                    lineHeight: "1",
                    fontSize: "1.2em",
                    letterSpacing: "-1px",
                    marginBottom: "10px",
                  }}
                >
                  Wheelchairs
                </h5>
                {/* <p style={{ lineHeight: "1.1" }}>
                  Unleash the adventurer inside you. Soar into the air and
                  experience an adventure like never before.
                </p> */}
              </div>
            </div>
            <div className="col-md-2 text-center  mb-3">
              <div><img src="https://i.pinimg.com/originals/67/17/4c/67174c2cb0e92a309158a69047a072a2.png" height="60" /></div>
              <div className="mt-3 mb-md-5" style={{}}>
                <h5
                  style={{
                    fontWeight: "700",
                    lineHeight: "1",
                    fontSize: "1.2em",
                    letterSpacing: "-1px",
                    marginBottom: "10px",
                  }}
                >
                  Baby care
                </h5>
                {/* <p style={{ lineHeight: "1.1" }}>
                  Unleash the adventurer inside you. Soar into the air and
                  experience an adventure like never before.
                </p> */}
              </div>
            </div>
            <div className="col-md-2 text-center  mb-3">
              <div><img src="https://cdn1.iconfinder.com/data/icons/internet-technology-and-security-1/128/1-512.png" height="60" /></div>
              <div className="mt-3 mb-md-5" style={{}}>
                <h5
                  style={{
                    fontWeight: "700",
                    lineHeight: "1",
                    fontSize: "1.2em",
                    letterSpacing: "-1px",
                    marginBottom: "10px",
                  }}
                >
                  Comprehensive security
                </h5>
                {/* <p style={{ lineHeight: "1.1" }}>
                  Unleash the adventurer inside you. Soar into the air and
                  experience an adventure like never before.
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container-fluid py-5"

      >
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2
                style={{
                  fontWeight: "700",
                  lineHeight: "0.9",
                  fontSize: "2.5em",
                  letterSpacing: "-1px",
                  marginBottom: "10px",
                }}
              >
                More to discover.
              </h2>
              <p className="mb-5">
                Discover fashion, delicious food, beauty &amp; entertainment.
              </p>
            </div>
            <div className="col-md-4  mb-3">
              <div
                className="p-5"
                style={{
                  backgroundImage:
                    "url(https://assets.codepen.io/1729459/blog_DukeEllington2.jpg)",
                  backgroundSize: "cover",
                  backgroundPosition: "center right",
                  backgroundRepeat: "no-repeat",
                  backgroundColor: "#C8DAE6",
                  height: "250px",
                }}
              ></div>
              <div className="mt-3" style={{}}>
                <h3
                  style={{
                    fontWeight: "700",
                    lineHeight: "1",
                    fontSize: "1.5em",
                    letterSpacing: "-1px",
                    marginBottom: "10px",
                  }}
                >
                  Grand Piano
                </h3>
                <p style={{ lineHeight: "1.1" }}>
                  Relive the magic of live music with an enchanting experience filled with symphonies of live piano music.
                </p>
              </div>
            </div>
            <div className="col-md-4  mb-3">
              <div
                className="p-5"
                style={{
                  backgroundImage:
                    "url(https://assets.codepen.io/1729459/gondola.jpg)",
                  backgroundSize: "cover",
                  backgroundPosition: "bottom right",
                  backgroundRepeat: "no-repeat",
                  backgroundColor: "#C8DAE6",
                  height: "250px",
                }}
              ></div>
              <div className="mt-3" style={{}}>
                <h3
                  style={{
                    fontWeight: "700",
                    lineHeight: "1",
                    fontSize: "1.5em",
                    letterSpacing: "-1px",
                    marginBottom: "10px",
                  }}
                >
                  Gondola Rides
                </h3>
                <p style={{ lineHeight: "1.1" }}>
                  Experience romance the Venetian way with a romantic Gondola
                  ride. Take your partner on a truly special ride.
                </p>
              </div>
            </div>
            <div className="col-md-4  mb-3">
              <div
                className="p-5"
                style={{
                  backgroundImage:
                    "url(https://assets.codepen.io/1729459/masti.jpg)",
                  backgroundSize: "cover",
                  backgroundPosition: "center right",
                  backgroundRepeat: "no-repeat",
                  backgroundColor: "#C8DAE6",
                  height: "250px",
                }}
              ></div>
              <div className="mt-3" style={{}}>
                <h3
                  style={{
                    fontWeight: "700",
                    lineHeight: "1",
                    fontSize: "1.5em",
                    letterSpacing: "-1px",
                    marginBottom: "10px",
                  }}
                >
                  Mastiii Zone
                </h3>
                <p style={{ lineHeight: "1.1" }}>
                  Unleash the adventurer inside you. Soar into the air and
                  experience an adventure like never before.
                </p>
              </div>
            </div>
            {/* <div className="col-md-3  mb-3">
              <div
                className="p-5"
                style={{
                  backgroundImage: "url(https://assets.codepen.io/1729459/WhatsApp-Video-2022-06-04-at-10.12.22-AM.gif)",
                  backgroundSize: "contain",
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  backgroundColor: "#C8DAE6",
                  height: "250px",
                }}
              ></div>
              <div className="mt-3" style={{}}>
                <h3
                  style={{
                    fontWeight: "700",
                    lineHeight: "1",
                    fontSize: "1.5em",
                    letterSpacing: "-1px",
                    marginBottom: "10px",
                  }}
                >
                  Birthright
                </h3>
                <p style={{ lineHeight: "1.1" }}>
                  On this World Environment Day, Birthright invites everyone to come play with us and take back gifts of nature absolutely free.
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <SubscribeSection />
      <Footer />
    </>
  );
}
