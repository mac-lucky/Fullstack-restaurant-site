import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBLink,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBFormInline,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBIcon,
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";
import "./Navbar.css";
import ikonka from "../../images/ikonkapiera.png";
import { NavHashLink as NavLink } from "react-router-hash-link";

class Navbar extends Component {
  state = {
    isOpen: false,
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render(props) {
    return (
      <MDBNavbar
        fixed="top"
        scrolling={this.props.scrolling}
        color="bg-dark"
        transparent={this.props.transparent}
        dark
        expand="md"
      >
        <MDBNavbarBrand>
          <img src={ikonka} className="padleft iconsize white-text"></img>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem>
              <NavLink
                to="/#home"
                activeClassName="navbarActivated"
                className="nav-link"
              >
                Home
              </NavLink>
            </MDBNavItem>
            <MDBNavItem>
              <NavLink
                to="/#actual"
                activeClassName="navbarActivated"
                className="nav-link"
              >
                Aktualne informacje
              </NavLink>
            </MDBNavItem>
            <MDBNavItem>
              <NavLink
                to="/#aboutus"
                activeClassName="navbarActivated"
                className="nav-link"
              >
                O nas
              </NavLink>
            </MDBNavItem>
            <MDBNavItem>
              <NavLink
                to="/#menu"
                activeClassName="navbarActivated"
                className="nav-link"
              >
                Menu
              </NavLink>
            </MDBNavItem>
            <MDBNavItem>
              <NavLink
                to="/#opinions"
                activeClassName="navbarActivated"
                className="nav-link"
              >
                Opinie
              </NavLink>
            </MDBNavItem>
            <MDBNavItem>
              <NavLink
                to="/#contact"
                activeClassName="navbarActivated"
                className="nav-link"
              >
                Kontakt
              </NavLink>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem className="padright">
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <MDBIcon icon="user" />
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBNavLink className="dropdown-item" to="/myorders">
                    <span style={{ color: "black" }}>Moje zamówienia</span>
                  </MDBNavLink>
                  <MDBNavLink className="dropdown-item" to="/login">
                    <span style={{ color: "black" }}>Zaloguj</span>
                  </MDBNavLink>
                  <MDBNavLink className="dropdown-item" to="/register">
                    <span style={{ color: "black" }}>Zarejestruj</span>
                  </MDBNavLink>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default Navbar;
