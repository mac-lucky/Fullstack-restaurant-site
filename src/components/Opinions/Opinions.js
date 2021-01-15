import React from "react";
import { MDBRow } from "mdbreact";
import "./Opinions.css";
import OpinionsCard from "./OpinionsCard";
import one from "../../images/1.png";
import two from "../../images/2.png";
import three from "../../images/3.png";

const Opinions = () => {
  return (
    <>
      <div id="opinions" className="separator">
        Opinie klientów
      </div>
      <MDBRow className="opinionsrow">
        <OpinionsCard
          name={"TheGlunek"}
          text={
            "Chyba najlepsze pierogi na Podzamczu jezeli nie w mieście. Polecam z mięsem oraz szpinakowe. Wada. Często brakuje jak przychodzisz o 15.00 🤣🤣🤣"
          }
          avatar={one}
        />
        <OpinionsCard
          name={"Stanisław"}
          text={
            "Bardzo swojsko i pyszne z mięsem oraz na ostro ai barszcz w kubku pyszny"
          }
          avatar={two}
        />
        <OpinionsCard
          name={"Bartek Kosinski"}
          text={
            "Bardzo dobra jakość pierogów, niezmienna od wielu lat! Duże porcje wszystko bardzo smaczne."
          }
          avatar={three}
        />
      </MDBRow>
    </>
  );
};

export default Opinions;
