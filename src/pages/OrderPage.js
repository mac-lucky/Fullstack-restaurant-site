import React, { Component } from "react";
import Navbar from "../components/Navbar/Navbar";
import Order from "../components/Order/Order";

const OrderPage = (props) => {
  return (
    <>
      <Navbar transparent={false} scrolling={false}/>
      <Order />
    </>
  );
};

export default OrderPage;
