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

const OrderBasket = () => {
  return (
    <>
      <MDBCard style={{ marginTop: "0.5rem", height: "100vh" }}>
        <MDBCardHeader
          className="text-center"
          color="orange"
          tag="h3"
        >
          Kasa
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
    </>
  );
};

export default OrderBasket;
