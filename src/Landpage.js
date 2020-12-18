import "./Landpage.css";
import React, { Component } from "react";
import { MDBContainer, MDBBtn } from "mdbreact";

class Landpage extends Component {
  render() {
    return (
      <>
        <MDBContainer id="home" fluid className="LandpageImg">
          <div className="nf">
            <h1>Pierogarnia na Basztowej</h1>
            <hr class="hr-light"></hr>
            <p>
              Zapraszamy do naszej pierogarnii, gdzie każdy pieróg ma znaczenie
            </p>
            <MDBBtn
              href="#order"
              className="w-50"
              block
              size="lg"
              outline
              rounded
              color="white"
            >
              Złóż zamówienie
            </MDBBtn>
          </div>
        </MDBContainer>
      </>
    );
  }
}

export default Landpage;
