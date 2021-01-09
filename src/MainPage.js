import React, { Component } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Landpage from "./Landpage";
import Aboutus from "./Aboutus";
import Separator from "./Separator";
import Menu from "./Menu";
import Opinions from "./Opinions";
import Gallery from "./Gallery";
import Awards from "./Awards";
import Actual from "./Actual";
import Contact from "./Contact";
import { BrowserRouter} from "react-router-dom";
import Register from "./Register";


class MainPage extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Landpage />
        <Actual />
        <Aboutus />
        <Separator />
        <Menu />
        <Awards />
        <Opinions />
        <Contact />
        <Register />
      </>
    );
  }
}

export default MainPage;
