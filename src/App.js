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

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Landpage />
        <Aboutus />
        <Separator />
        <Menu />
        <Awards />
        <Gallery />
      </>
    );
  }
}

export default App;
