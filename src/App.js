import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Register from "./Register";
import MainPage from "./MainPage";

class MainPage extends Component {
  render() {
    return (
      <>
        <Switch>
          <BrowserRouter>
            <Redirect exact from="" to="/" />
            <Route path="/">
              <MainPage />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
          </BrowserRouter>
        </Switch>
      </>
    );
  }
}

export default MainPage;
