import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
  MDBIcon,
} from "mdbreact";
import "./Opinions.css";

const OpinionsCard = (props) => {
  return (
    <>
      <MDBCol md="4" style={{ paddingTop: "2rem" }}>
        <MDBCard className="opinionstext">
          <MDBCardImage src={props.avatar} waves zoom />
          <MDBCardBody className="cardheight">
            <MDBCardTitle>{props.name}</MDBCardTitle>
            <MDBCardText>{props.text}</MDBCardText>
            <div className="stars">
              <MDBIcon icon="star" size="lg" />
              <MDBIcon icon="star" size="lg" />
              <MDBIcon icon="star" size="lg" />
              <MDBIcon icon="star" size="lg" />
              <MDBIcon icon="star" size="lg" />
            </div>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </>
  );
};

export default OpinionsCard;
