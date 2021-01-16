import React from "react";
import "./Order.css";
import OrderCard from "./OrderCard";
import OrderBasket from "./OrderBasket";
import OrderTopImg from "../../images/ordertop.jpg";
import logo from "../../images/logo.png";
import MediaQuery from "react-responsive";

const Order = () => {
  return (
    <>
      <div className="OrderPage">
        <div className="OrderLeft">
          <div style={{ position: "relative", left: "0", top: "0" }}>
            <img className="OrderTopImg" src={OrderTopImg}></img>
            <img className="OrderLogo" src={logo}></img>
          </div>
          <div className="OrderCardContainer">
            <OrderCard
              meal={"Pierogi Ruskie"}
              ingredients={"ser, ziemniaki"}
              price={"25,00 zł"}
              quantity={"8 szt"}
            />
            <OrderCard
              meal={"Pierogi Ruskie"}
              ingredients={"ser, ziemniaki"}
              price={"25,00 zł"}
              quantity={"8 szt"}
            />
            <OrderCard
              meal={"Pierogi Ruskie"}
              ingredients={"ser, ziemniaki"}
              price={"25,00 zł"}
              quantity={"8 szt"}
            />
            <OrderCard
              meal={"Pierogi Ruskie"}
              ingredients={"ser, ziemniaki"}
              price={"25,00 zł"}
              quantity={"8 szt"}
            />
            <OrderCard
              meal={"Pierogi Ruskie"}
              ingredients={"ser, ziemniaki"}
              price={"25,00 zł"}
              quantity={"8 szt"}
            />
          </div>
        </div>
        <div className="OrderRight">
          <div>
            <MediaQuery minDeviceWidth={575}>
              <OrderBasket />
            </MediaQuery>
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
