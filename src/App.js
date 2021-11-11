import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import Admin from "./pages/admin";
import Menu from "./pages/menu";

import "./App.css";

const App = () => {
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
};

export default App;
