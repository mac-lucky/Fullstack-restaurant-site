import React from "react";
import {
  MDBRow,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
  MDBIcon,
} from "mdbreact";
import "./Opinions.css";
import one from "./images/1.png";
import two from "./images/2.png";
import three from "./images/3.png";


const Opinions = () => {
  return (
    <>
      <div id="opinions" className="separator">
        Opinie klientów
      </div>
      <MDBRow className="opinionsrow">
        <MDBCol md="4">
          <MDBCard className="opinionstext">
            <MDBCardImage src={one} waves zoom />
            <MDBCardBody className="cardheight">
              <MDBCardTitle>TheGlunek</MDBCardTitle>
              <MDBCardText>
                Chyba najlepsze pierogi na Podzamczu jezeli nie w mieście.
                Polecam z mięsem oraz szpinakowe. Wada. Często brakuje jak
                przychodzisz o 15.00 🤣🤣🤣
              </MDBCardText>
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
        <MDBCol md="4">
          <MDBCard className="opinionstext">
            <MDBCardImage src={two} waves zoom />
            <MDBCardBody className="cardheight">
              <MDBCardTitle>Stanisław</MDBCardTitle>
              <MDBCardText>
                Bardzo swojsko i pyszne z mięsem oraz na ostro ai barszcz w
                kubku pyszny
              </MDBCardText>
              <div className="stars">
                <MDBIcon icon="star" size="lg" />
                <MDBIcon icon="star" size="lg" />
                <MDBIcon icon="star" size="lg" />
                <MDBIcon icon="star" size="lg" />
                <MDBIcon icon="star-half-alt" size="lg" />
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="4">
          <MDBCard className="opinionstext">
            <MDBCardImage src={three} waves zoom />
            <MDBCardBody className="cardheight">
              <MDBCardTitle>Bartek Kosinski</MDBCardTitle>
              <MDBCardText>
                Bardzo dobra jakość pierogów, niezmienna od wielu lat! Duże
                porcje wszystko bardzo smaczne.
              </MDBCardText>
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
      </MDBRow>
    </>
  );
};

export default Opinions;
