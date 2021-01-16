import React, { Component } from "react";
import Navbar from "../components/Navbar/Navbar";
import Register from "../components/Register/Register";

const RegisterPage = (props) => {
  return (
    <>
      <Navbar transparent={false} scrolling={false} />
      <Register />
    </>
  );
};

export default RegisterPage;
