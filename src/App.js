import React, { Component } from "react";
import Navbar from "./Navbar";
import Landpage from "./Landpage";
import "./App.css";
import Aboutus from "./Aboutus";
import Separator from "./Separator";
import Menu from "./Menu";
import Opinions from "./Opinions";


class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Landpage />
        <Aboutus />
        <Separator />
        <Menu />
        <Opinions />
      </>
    );
  }
}

export default App;
