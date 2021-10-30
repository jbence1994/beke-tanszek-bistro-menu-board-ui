import React, { Component } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import Menu from "./pages/menu";
import Admin from "./pages/admin";

import "./App.css";

class App extends Component {
  state = {
    routes: {
      menu: "/",
      admin: "/admin",
    },
  };
  render() {
    const { routes } = this.state;

    return (
      <BrowserRouter>
        <main className="container-fluid">
          <Switch>
            <Route exact path={routes.menu} component={Menu} />
            <Route exact path={routes.admin} component={Admin} />
            <Redirect to="/" />
          </Switch>
        </main>
      </BrowserRouter>
    );
  }
}

export default App;
