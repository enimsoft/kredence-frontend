import React from "react";
import { Button, Navbar, Nav, Form, NavDropdown } from "react-bootstrap";
import styles from "./Header.module.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

function Header() {
  return (
    <Navbar
      style={{ boxShadow: "0px 6px 20px 0px rgba(0,0,0,0.10)", position:'sticky',top:'0', backgroundColor:'#ffffff', width: '100%', zIndex:'1'}}
      expand="lg"
    >
      <Navbar.Brand as={Link} to="/" href="#home">
        <img
          src={require("../../assets/logo.png")}
          className={styles.navlogo}
          alt=""
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link className={styles.navitems} as={Link} to="/" href="#home">
            Home
          </Nav.Link>
          <NavDropdown
            title={
              <span className={styles.navitems}>Products</span>
          }
            style={{color:'#358ED3'}}
            id="nav-dropdown"
          >
            <NavDropdown.Item href="#action/3.1" className={styles.navitems}>Honeywell</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2" className={styles.navitems}>CPC</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3" className={styles.navitems}>Elementum</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3" className={styles.navitems}>Altapure</NavDropdown.Item>
            {/* <NavDropdown.Divider /> */}
          </NavDropdown>
          <Nav.Link className={styles.navitems} href="#link">
            Quality Assurance
          </Nav.Link>
          <NavDropdown
             title={
              <span className={styles.navitems}>Downloads</span>
          }
            className={styles.navitems}
            id="nav-dropdown"
          >
            <NavDropdown.Item as={Link} to="/coa" className={styles.navitems}>COAs</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/msds" className={styles.navitems}>MSDS</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/trumpcard" className={styles.navitems}>Trump Card</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link
            className={styles.navitems}
            as={Link}
            to="/contactus"
            href="#link"
          >
            Contact Us
          </Nav.Link>
        </Nav>
        <Form inline>
          <input type="text" placeholder="Search" className={styles.search} />
        </Form>
        {/* <hr style={{ color: "#2699FB", margin: "0px" }} /> */}
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
