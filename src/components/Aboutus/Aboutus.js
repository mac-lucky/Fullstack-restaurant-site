import React from "react";
import "./Aboutus.css";
import onas from "../../images/onas.png";


const Aboutus = () => { 
    return (
        <div id="aboutus" className="width">
          <div className="separator">O NAS</div>
          <div className="flex">
            <img src={onas}></img>
            <div className="text">
              <h2>Domowa kuchnia i niepowtarzalny smak</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates pariatur magnam numquam. Provident nobis
                reprehenderit saepe corporis repellendus soluta molestiae
                aperiam aut itaque iste, cupiditate, dolores ad ratione
                blanditiis commodi.
              </p>
            </div>
          </div>
        </div>
    );
}

export default Aboutus;
