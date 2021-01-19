import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Login from "../components/Login/Login";

const LoginPage = (props) => {
  return (
    <>
      <Navbar transparent={false} scrolling={false} />
      <Login />
    </>
  );
};

export default LoginPage;
