import React, { Component } from "react";
import "./Contact.css";
import { MDBCard, MDBIcon, MDBBtn } from "mdbreact";
var API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

const Contact = () => { 
    return (
        <div id="contact" className="contactwidth">
          <div className="separator">Kontakt</div>
          <div className="contactflex">
            <div className="contacttext">
              <div className="contacticon">
                <a href="tel:74 300 02 20">
                  <MDBBtn className="btn-circle" size="lg" color="blue">
                    <MDBIcon icon="phone" size="2x" />
                  </MDBBtn>
                </a>
                <p>74 300 02 20</p>
              </div>

              <div className="contacticon">
                <a target="_blank" href="https://goo.gl/maps/5bm8uvW5rcUeZNhX8">
                  <MDBBtn className="btn-circle" size="lg" color="blue">
                    <MDBIcon icon="map-marker-alt" size="2x" />
                  </MDBBtn>
                </a>
                <p>
                  Basztowa 59A, 58-316
                  <br />
                  Wałbrzych
                </p>
              </div>
              <div className="contacticon">
                <a target="_blank" href="https://goo.gl/maps/5bm8uvW5rcUeZNhX8">
                  <MDBBtn className="btn-circle" size="lg" color="blue">
                    <MDBIcon icon="envelope" size="2x" />
                  </MDBBtn>
                </a>
                <p>Prosimy o wysyłanie wiadomości przez Google Maps</p>
              </div>
            </div>
            <div className="contactmap">
              <iframe
                allowFullScreen
                frameBorder="0"
                width="100%"
                height="100%"
                src={
                  "https://www.google.com/maps/embed/v1/place?q=place_id:ChIJV2D1S05UDkcRElH7UhwdNm8&key=" +
                  API_KEY
                }
              ></iframe>
            </div>
          </div>
        </div>
    );
  }

export default Contact;
