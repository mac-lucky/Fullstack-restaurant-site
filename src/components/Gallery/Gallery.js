import React, { Component } from "react";
import "./Gallery.css";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import one from "./images/one.jpg";
import two from "./images/two.jpg";
import three from "./images/three.jpg";
import four from "./images/four.jpg";
import five from "./images/five.jpg";
import six from "./images/six.jpg";

const Gallery = () => { 
    return (
      <>
        <div class="separator">GALERIA DAŃ</div>
        <LazyLoadComponent>
        <MDBContainer fluid className="bot">
          <MDBRow className="no-gutters">
            <MDBCol md="4" className="gallerygrid"><img  src={one}></img></MDBCol>
            <MDBCol md="4" className="gallerygrid"><img  src={two}></img></MDBCol>
            <MDBCol md="4" className="gallerygrid"><img  src={three}></img></MDBCol>
          </MDBRow>
          <MDBRow className="no-gutters">
            <MDBCol md="4" className="gallerygrid"><img  src={four}></img></MDBCol>
            <MDBCol md="4" className="gallerygrid"><img  src={five}></img></MDBCol>
            <MDBCol md="4" className="gallerygrid"><img  src={six}></img></MDBCol>
          </MDBRow>
        </MDBContainer>
        </LazyLoadComponent>
      </>
    );
  }

export default Gallery;
