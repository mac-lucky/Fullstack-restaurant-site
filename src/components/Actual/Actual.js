import React, { Component } from "react";
import "./Actual.css";

const Actual = () => { 
    return (
      <>
        <div id="actual" className="actualwidth">
          <div className="separator">Aktualne informacje</div>
          <div className="actualflex">
            <div className="actualtext">
              <h2>Zamówienia na święta</h2>
              <p>
                Prosimy o wcześniejszy kontakt pod numerem telefonu <a href="tel:74 300 02 20"><b>74 300 02 20</b></a> z powodu dużej
                ilości zamówień na święta.
              </p>
            </div>
            <div className="actualtext">
              <h2>Covid-19</h2>
              <p>
                Informujemy, że z powodu ograniczeń możliwy jest tylko odbiór zamówień, nie ma możliwosci spożycia posiłku na miejscu.
                +
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }

export default Actual;
