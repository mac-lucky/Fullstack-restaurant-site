import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardHeader,
  MDBCardFooter,
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
          <MDBContainer>
            <MDBCard style={{ width: "22rem", marginTop: "1rem" }}>
              <MDBCardHeader color="primary-color" tag="h3">
                Featured
              </MDBCardHeader>
              <MDBCardBody>
                <MDBCardTitle>Special title treatment</MDBCardTitle>
                <MDBCardText>
                  With supporting text below as a natural lead-in to additional
                  content.
                </MDBCardText>
                <MDBBtn color="primary">go somewhere</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBContainer>
        </div>
      </div>
    </>
  );
};

export default Order;
