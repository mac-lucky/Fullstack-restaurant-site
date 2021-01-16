import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBIcon,
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
} from "mdbreact";

const OrderCard = (props) => {
  return (
    <>
      <MDBContainer>
        <MDBCard style={{ width: "100%", marginTop: "1rem" }}>
          <MDBCardBody className="OrderCardBody">
            <div className="OrderCardText">
              <MDBCardTitle>{props.meal} [{props.quantity}]</MDBCardTitle>
              <MDBCardText>{props.ingredients}</MDBCardText>
            </div>
            <div className="OrderCardWrap">
              <div className="OrderCardPrice">
                <span>{props.price}</span>
              </div>
              <div className="OrderCardButton">
                <MDBBtn color="danger">
                  <MDBIcon size="lg" icon="plus" />
                </MDBBtn>
              </div>
            </div>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </>
  );
};

export default OrderCard;
