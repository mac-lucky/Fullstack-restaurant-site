import "./Awards.css";
import React, { Component } from "react";
import { MDBContainer, MDBIcon } from "mdbreact";

const Awards = () => { 
    return (
      <>
        <MDBContainer id="awards" fluid className="awards">
          <h1>Klienci, którzy nam zaufali</h1>
          <div className="winnumbers">
            <div>
              <h2>+300</h2>
              <p>wysokich opinii</p>
            </div>
            <div>
              <h2>+80</h2>
              <p>zamówień dzienne</p>
            </div>
            <div>
              <h2>+30</h2>
              <p>powracających klientów</p>
            </div>
            <div>
              <h2>+800</h2>
              <p>litrów wypitego kompotu</p>
            </div>
          </div>
        </MDBContainer>
      </>
    );
  }

export default Awards;
