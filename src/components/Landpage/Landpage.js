import "./Landpage.css";
import React, { Component } from "react";
import { MDBContainer, MDBBtn } from "mdbreact";
import { Element } from "react-scroll";

const Landpage = () => {
  return (
    <>
      <Element id="example-destination" name="example-destination">
        <div id="home" className="LandpageImg">
          <div className="nf">
            <h1>Pierogarnia na Basztowej</h1>
            <hr className="hr-light wow fadeInLeft" />
            <p>Zapraszamy do naszej pierogarni, gdzie liczy się jakość</p>
            <MDBBtn
              href="/order"
              className="w-50"
              size="lg"
              outline
              color="white"
            >
              Złóż zamówienie
            </MDBBtn>
          </div>
        </div>
      </Element>
    </>
  );
};

export default Landpage;
