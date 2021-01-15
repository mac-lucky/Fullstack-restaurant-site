import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Register from "./pages/Register/Register";
import MainPage from "./pages/MainPage";
import Navbar from "./components/Navbar/Navbar";

const Layout = ({children}) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
    </div>
  );
};


class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Layout>
            <Switch>
              <Route exact={true} path="/" component={MainPage} />
              <Route exact={true} path="/register" component={Register} />
            </Switch>
          </Layout>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
