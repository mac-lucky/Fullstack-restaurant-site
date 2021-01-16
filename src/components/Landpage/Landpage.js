import "./Landpage.css";
import React from "react";
import { MDBLink, MDBBtn } from "mdbreact";


const Landpage = () => {
  return (
    <>
      <div id="home" className="LandpageImg">
        <div className="nf">
          <h1>Pierogarnia na Basztowej</h1>
          <hr className="hr-light wow fadeInLeft" />
          <p>Zapraszamy do naszej pierogarni, gdzie liczy się jakość</p>
          <MDBLink to="/order">
            <MDBBtn size="lg" outline color="white">
              Złóż zamówienie
            </MDBBtn>
          </MDBLink>
        </div>
      </div>
    </>
  );
};

export default Landpage;
