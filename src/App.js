import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import MainPage from "./pages/MainPage";
import OrderPage from "./pages/OrderPage";

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <Switch>
              <Route exact path="/" component={MainPage} />
              <Route exact path="/register" component={RegisterPage} />
              <Route exact path="/order" component={OrderPage} />
            </Switch>
        </BrowserRouter>
    );
  }
}

export default App;
