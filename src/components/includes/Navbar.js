import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { memo } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const TopNavbar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/home">
            <div className="d-flex align-items-center">
              <span
                className="me-3"
                style={{ fontSize: "11px", fontWeight: "bold" }}
              >
                {" "}
                <FontAwesomeIcon icon={faHome} />
              </span>
              <span>
                THE <strong>GRAND VENICE MALL</strong>
              </span>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav
              className="me-auto"
              style={{ fontSize: "11px", fontWeight: "bold" }}
            >
              <Nav.Link className="me-3">
                <Link
                  to="/"
                  style={{ color: "inherit", textDecoration: "inherit" }}
                ></Link>
              </Nav.Link>
            </Nav>
            <Nav style={{ fontSize: "11px", fontWeight: "bold" }}>
              <Nav.Link className="me-3">
                <Link
                  to="/dining"
                  style={{ color: "inherit", textDecoration: "inherit" }}
                >
                  DINING
                </Link>
              </Nav.Link>

              <Nav.Link className="me-3">
                <Link
                  to="/stores"
                  style={{ color: "inherit", textDecoration: "inherit" }}
                >
                  STORES
                </Link>
              </Nav.Link>

              {/* <Nav.Link className="me-3" >
                  <Link to ="/family" style={{color: "inherit", textDecoration: "inherit"}}>FAMILY</Link>
              </Nav.Link> */}

              <Nav.Link className="me-3">
                <Link
                  to="/hours"
                  style={{ color: "inherit", textDecoration: "inherit" }}
                >
                  HOURS
                </Link>
              </Nav.Link>

              <Nav.Link className="me-3">
                <Link
                  to="/about"
                  style={{ color: "inherit", textDecoration: "inherit" }}
                >
                  ABOUT
                </Link>
              </Nav.Link>
              <Nav.Link className="me-3">
                <Link
                  to="/lease"
                  style={{ color: "inherit", textDecoration: "inherit" }}
                >
                  LEASING
                </Link>
              </Nav.Link>

              <Nav.Link className="me-3">
                <Link
                  to="/contact"
                  style={{ color: "inherit", textDecoration: "inherit" }}
                >
                  CONTACT
                </Link>
              </Nav.Link>

              {/* <Nav.Link className="me-3">
                  <Link to ="/reward" style={{color: "inherit", textDecoration: "inherit"}}>REWARDS</Link>
              </Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default memo(TopNavbar);
