import React, { Component } from "react";
import Landpage from "../components/Landpage/Landpage";
import Aboutus from "../components/Aboutus/Aboutus";
import Separator from "../components/Separator/Separator";
import Menu from "../components/Menu/Menu";
import Opinions from "../components/Opinions/Opinions";
import Awards from "../components/Awards/Awards";
import Actual from "../components/Actual/Actual";
import Contact from "../components/Contact/Contact";



const MainPage = () => {
    return (
      <>
        <Landpage />
        <Actual />
        <Aboutus />
        <Separator />
        <Menu />
        <Awards />
        <Opinions />
        <Contact />
      </>
    );
}

export default MainPage;
