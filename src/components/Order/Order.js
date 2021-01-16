import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardHeader,
  MDBBtn,
  MDBContainer,
} from "mdbreact";
import "./Order.css";
import OrderTopImg from "../../images/ordertop.jpg";

const Order = () => {
  return (
    <>
      <div className="OrderPage">
        <div className="OrderLeft">
          <img src={OrderTopImg}></img>
        </div>
        <div className="OrderRight">
          <div>
            <MDBCard style={{ marginTop: "0.5rem", height: "100vh" }}>
              <MDBCardHeader className="text-center" color="orange lighten-3" tag="h3">
                KOSZYK
              </MDBCardHeader>
              <MDBCardBody className="text-justify">
                <MDBCardTitle>Special title treatment</MDBCardTitle>
                <MDBCardText>
                  With supporting text below as a natural lead-in to additional
                  content.
                </MDBCardText>
                <MDBBtn color="primary">go somewhere</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
