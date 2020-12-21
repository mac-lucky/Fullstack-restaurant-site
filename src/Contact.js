import React, { Component } from "react";
import "./Contact.css";
import { MDBContainer, MDBIcon, MDBIframe } from "mdbreact";
var API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

class Actual extends Component {
  render() {
    return (
      <>
        <div id="contact" className="contactwidth">
          <div className="separator">Kontakt</div>
          <div className="contactflex">
            <div className="contacttext">
              <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, eaque! Assumenda veritatis dolorum labore iure. Saepe temporibus nesciunt perspiciatis, maxime neque ipsum! Aliquid ratione eum facilis, provident aspernatur non dolorem!</h2>
            </div>
            <div className="contactmap">
              <iframe
              allowFullScreen
              frameBorder="0"
              width="500"
              height="500"    
                src={
                  "https://www.google.com/maps/embed/v1/place?q=place_id:ChIJV2D1S05UDkcRElH7UhwdNm8&key=" +
                  API_KEY
                }
              ></iframe>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Actual;
