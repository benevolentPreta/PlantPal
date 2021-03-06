import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import styles from "../styles/navbar.css";
import { LinkContainer } from "react-router-bootstrap";

class MyNav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const styles = {
      fontSize: "1.5rem",
      fontFamily: "Ubuntu, sans-serif",
      fontWeight: "1000",
      color: "white",
      backgroundColor: "#22b550",
    };
    const stylesLogo = {
      fontSize: "1.8rem",
      color: "white",
      backgroundColor: "#22b550",
    };

    if (
      this.props.location.pathname === "/" ||
      this.props.location.pathname === "/register"
    ) {
      return <div></div>;
    } else {
      return (
        <Navbar collapseOnSelect expand="lg" variant="light" style={styles}>
          <LinkContainer style={stylesLogo} to={`/home`}>
            <Navbar.Brand style={styles} href={`/home`}>
              PlantPal
            </Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            style={{ color: "white" }}
          >
            <Nav className="ml-auto">
              <LinkContainer style={styles} to={`/home`}>
                <NavItem eventKey={1}>Home</NavItem>
              </LinkContainer>
              <LinkContainer style={styles} to={`/gardens`}>
                <NavItem eventKey={2}>Gardens</NavItem>
              </LinkContainer>
              {/* <LinkContainer style={styles} to={`/profile`}>
                <NavItem eventKey={3}>Profile</NavItem>
              </LinkContainer> */}
              {/* <LinkContainer style={styles} to={`/`}> */}
              <NavItem onClick={this.props.logout} eventKey={3}>
                Logout
              </NavItem>
              {/* </LinkContainer> */}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      );
    }
  }
}

export default withRouter(MyNav);
