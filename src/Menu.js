import "./Menu.css";
import React from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";

const Menu = () => {
  return (
    <div className="menu" id="menu">
      <div className="separator">MENU</div>
      <MDBTable>
        <MDBTableHead color="primary-color" textWhite>
          <tr>
            <th className="text-center font">Pierogi</th>
          </tr>
        </MDBTableHead>
      </MDBTable>
      <MDBTable striped bordered>
        <MDBTableHead color="info-color" textWhite>
          <tr>
            <th className="first">Nazwa</th>
            <th className="second">Składniki</th>
            <th className="third">Ilość</th>
            <th className="fourth">Cena</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          <tr>
            <td>Pierogi Ruskie</td>
            <td>ser, ziemniaki</td>
            <td>8 szt</td>
            <td>12,80 zł</td>
          </tr>
          <tr>
            <td>Pierogi Babuni</td>
            <td>ser, boczek, ziemniaki</td>
            <td>8 szt</td>
            <td>14,00 zł</td>
          </tr>
          <tr>
            <td>Pierogi Zbójnickie</td>
            <td>ziemniaki, kiełbasa, papryka</td>
            <td>8 szt</td>
            <td>14,00 zł</td>
          </tr>
          <tr>
            <td>Pierogi Wiejskie</td>
            <td>kasza gryczana</td>
            <td>8 szt</td>
            <td>13,20 zł</td>
          </tr>
          <tr>
            <td>Pierogi z mięsem</td>
            <td>mięso z łopatki wiprzowej</td>
            <td>8 szt</td>
            <td>14,00 zł</td>
          </tr>
          <tr>
            <td>Pierogi kapusta - mięso</td>
            <td>kapusta, mięso</td>
            <td>8 szt</td>
            <td>14,00 zł</td>
          </tr>
          <tr>
            <td>Pierogi kapusta - pieczarka</td>
            <td>kapusta, pieczarka</td>
            <td>8 szt</td>
            <td>14,00 zł</td>
          </tr>
          <tr>
            <td>Pierogi szpinak - ser</td>
            <td>szpinak, ser biały, czosnek</td>
            <td>8 szt</td>
            <td>14,00 zł</td>
          </tr>
          <tr>
            <td>Pierogi z truskawkami</td>
            <td>truskawki</td>
            <td>8 szt</td>
            <td>13,60 zł</td>
          </tr>
          <tr>
            <td>Pierogi z serem na słodko</td>
            <td>ser biały</td>
            <td>8 szt</td>
            <td>13,60 zł</td>
          </tr>
          <tr>
            <td>Pierogi z serem żółtym i pieczarkami</td>
            <td>pieczarki, ser żółty</td>
            <td>8 szt</td>
            <td>14,40 zł</td>
          </tr>
          <tr>
            <td>Krokiet z kapustą</td>
            <td>kapusta, pieczarka</td>
            <td>1 szt</td>
            <td>5,50 zł</td>
          </tr>
          <tr>
            <td>Krokiet z mięsem</td>
            <td>kapusta, mięso</td>
            <td>1 szt</td>
            <td>5,50 zł</td>
          </tr>
        </MDBTableBody>
      </MDBTable>
      <MDBTable>
        <MDBTableHead color="primary-color" textWhite>
          <tr>
            <th className="text-center font">Zupa - codziennie inna </th>
          </tr>
        </MDBTableHead>
      </MDBTable>
      <MDBTable striped bordered>
        <MDBTableHead color="info-color" textWhite>
          <tr>
            <th className="first">Nazwa</th>
            <th className="second">Składniki</th>
            <th className="third">Ilość</th>
            <th className="fourth">Cena</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          <tr>
            <td>Żurek</td>
            <td>
              zakwas żytni, marchew, pietruszka, seler, por, przyprawy,
              ziemniaki, kiełbasa, jajka
            </td>
            <td>450 ml</td>
            <td>5,00 zł</td>
          </tr>
          <tr>
            <td>Kapuśniak</td>
            <td>
              kapusta kiszona, ziemniaki, przyprawy, marchew, pietruszka, seler,
              por, liść laurowy, czosnek
            </td>
            <td>450 ml</td>
            <td>5,00 zł</td>
          </tr>
          <tr>
            <td>Pomidorowa</td>
            <td>
              marchew, pietruszka, seler, por, makaron, pomidory, przyprawy
            </td>
            <td>450 ml</td>
            <td>5,00 zł</td>
          </tr>
          <tr>
            <td>Ogórkowa</td>
            <td>
              ziemniaki, ogórki, kiszone, marchew, pietruszka, seler, por, liść
              laurowy, przyprawy, śmietana
            </td>
            <td>450 ml</td>
            <td>5,00 zł</td>
          </tr>
          <tr>
            <td>Barszcz Czerwony</td>
            <td>
              buraki czerwone, ziemniaki, cebula, marchew, pietruszka, seler,
              por, liść laurowy, przyprawy, czosnek
            </td>
            <td>450 ml</td>
            <td>5,00 zł</td>
          </tr>
          <tr>
            <td>Barszcz Ukraiński</td>
            <td>
              buraki, pietruszka, seler, por, marchew, przyprawy, liść laurowy,
              czosnek
            </td>
            <td>450 ml</td>
            <td>5,00 zł</td>
          </tr>
          <tr>
            <td>Pieczarkowa</td>
            <td>
              ziemniaki, pieczarka, seler, por, marchew, przyprawy, śmietana
            </td>
            <td>450 ml</td>
            <td>5,00 zł</td>
          </tr>
          <tr>
            <td>Fasolowa</td>
            <td>
              fasola, marchew, pietruszka, seler, por, liść laurowy, czosnek,
              przyprawy
            </td>
            <td>450 ml</td>
            <td>5,00 zł</td>
          </tr>
          <tr>
            <td>Grochowa</td>
            <td>
              groch, ziemniaki, marchew, pietruszka, seler, por, liść laurowy,
              czosnek, przyprawy
            </td>
            <td>450 ml</td>
            <td>5,00 zł</td>
          </tr>
        </MDBTableBody>
      </MDBTable>
      <MDBTable>
        <MDBTableHead color="primary-color" textWhite>
          <tr>
            <th className="text-center font">Napoje</th>
          </tr>
        </MDBTableHead>
      </MDBTable>
      <MDBTable striped bordered>
        <MDBTableHead color="info-color" textWhite>
          <tr>
            <th className="second">Nazwa</th>
            <th className="first">Ilość</th>
            <th className="first">Cena</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          <tr>
            <td>7 UP</td>
            <td>0.33l / 0.5l</td>
            <td>5,00 zł</td>
          </tr>
          <tr>
            <td>Lipton IceTea</td>
            <td>0.33l / 0.5l</td>
            <td>5,00 zł</td>
          </tr>
          <tr>
            <td>Lipton RedTea</td>
            <td>0.33l / 0.5l</td>
            <td>5,00 zł</td>
          </tr>
          <tr>
            <td>Lipton GreenTea</td>
            <td>0.33l / 0.5l</td>
            <td>5,00 zł</td>
          </tr>
          <tr>
            <td>Mountain Dew</td>
            <td>0.33l / 0.5l</td>
            <td>5,00 zł</td>
          </tr>
          <tr>
            <td>Pepsi</td>
            <td>0.33l / 0.5l</td>
            <td>5,00 zł</td>
          </tr>
          <tr>
            <td>Pepsi light</td>
            <td>0.33l / 0.5l</td>
            <td>5,00 zł</td>
          </tr>
          <tr>
            <td>Pepsi MAX</td>
            <td>0.33l / 0.5l</td>
            <td>5,00 zł</td>
          </tr>
          <tr>
            <td>Mirinda</td>
            <td>0.33l / 0.5l</td>
            <td>5,00 zł</td>
          </tr>
          <tr>
            <td>Kompot</td>
            <td>0.33l / 0.5l</td>
            <td>2,50 zł</td>
          </tr>
          <tr>
            <td>Maślanka</td>
            <td>0.33l / 0.5l</td>
            <td>2,50 zł</td>
          </tr>
        </MDBTableBody>
      </MDBTable>
      <MDBTable>
        <MDBTableHead color="primary-color" textWhite>
          <tr>
            <th className="text-center font">Dodatki</th>
          </tr>
        </MDBTableHead>
      </MDBTable>
      <MDBTable striped bordered>
        <MDBTableHead color="info-color" textWhite>
          <tr>
            <th className="second">Nazwa</th>
            <th className="first">Ilość</th>
            <th className="first">Cena</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          <tr>
            <td>Pojemnik dodarkowy</td>
            <td>1 szt</td>
            <td>1,00 zł</td>
          </tr>
          <tr>
            <td>Cebulka +</td>
            <td>25ml</td>
            <td>1,00 zł</td>
          </tr>
          <tr>
            <td>Śmietanka +</td>
            <td>50ml</td>
            <td>1,00 zł</td>
          </tr>
        </MDBTableBody>
      </MDBTable>
      </div>
  );
};

export default Menu;
