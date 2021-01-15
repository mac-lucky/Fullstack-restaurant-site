import "./Separator.css";
import React, { Component } from "react";
import { MDBContainer, MDBIcon } from "mdbreact";

const Separator = () => { 
    return (
      <>
        <MDBContainer fluid className="space">
          <MDBIcon className="icon" icon="quote-left" />
          <h1>Można nie jeść w ogóle, ale nie można jeść źle.</h1>
          <MDBIcon className="icon down" icon="quote-right" />
        </MDBContainer>
      </>
    );
  }

export default Separator;
