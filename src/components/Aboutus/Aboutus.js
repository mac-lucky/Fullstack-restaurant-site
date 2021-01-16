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
            W naszej resturacji dbamy o każdy szczegół, wszystkie dania
            przygotowane są z wysokiej jakośći półproduktów, które pochodzą z
            polski. Nasze potrawy przpyrawiamy i przygotowujemy według domowych
            przepisów, dlatego smakują, tak jak w domu. Cieszymy się wysoką
            opinią klientów, a każdego z Was staramy się obsłużyć na najwyższym
            poziomie. 
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
