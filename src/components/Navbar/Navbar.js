import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBIcon,
  MDBBtn,
} from "mdbreact";
import "./Navbar.css";
import ikonka from "../../images/ikonkapiera.png";
import { NavHashLink as NavLink } from "react-router-hash-link";
import MediaQuery from "react-responsive";
import LoginModal from "../Login/LoginModal";

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      modal: false,
    };
  }

  toggleModal = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <>
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
              <MediaQuery minDeviceWidth={575}>
                <MDBNavItem className="padright">
                  <MDBDropdown>
                    <MDBDropdownToggle nav caret>
                      <MDBIcon icon="user" />
                    </MDBDropdownToggle>
                    <MDBDropdownMenu>
                      <MDBNavLink className="dropdown-item" to="/myorders">
                        <span style={{ color: "black" }}>Moje zamówienia</span>
                      </MDBNavLink>
                      <MDBNavItem>
                        <a
                          className="dropdown-item nav-link"
                          onClick={this.toggleModal}
                          style={{ color: "black" }}
                        >
                          Zaloguj
                        </a>
                      </MDBNavItem>
                      <MDBNavLink className="dropdown-item" to="/register">
                        <span style={{ color: "black" }}>Zarejestruj</span>
                      </MDBNavLink>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavItem>
              </MediaQuery>
              <MediaQuery maxDeviceWidth={575}>
                <MDBNavItem>
                  <hr className="hr-light wow fadeInLeft" />
                </MDBNavItem>
                <MDBNavItem>
                  <NavLink
                    to="/register"
                    activeClassName="navbarActivated"
                    className="nav-link"
                  >
                    Zarejestruj
                  </NavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <a className="nav-link" onClick={this.toggleModal}>
                    Zaloguj
                  </a>
                </MDBNavItem>
                <MDBNavItem>
                  <NavLink
                    to="/myorders"
                    activeClassName="navbarActivated"
                    className="nav-link"
                  >
                    Moje zamówienia
                  </NavLink>
                </MDBNavItem>
              </MediaQuery>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
        <LoginModal modal={this.state.modal} toggleModal={this.toggleModal} />
      </>
    );
  }
}

export default Navbar;
