import React, { Component } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import Admin from "./pages/admin";
import Menu from "./pages/menu";

import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <main className="container-fluid">
          <Switch>
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/" component={Menu} />
            <Redirect to="/" />
          </Switch>
        </main>
      </BrowserRouter>
    );
  }
}

export default App;
