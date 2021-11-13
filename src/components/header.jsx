import React, { Component } from "react";

import getCurrentDate from "../services/dateService";

class Header extends Component {
  render() {
    return (
      <header className="col-12">
        <h1 className="text-center mt-5">Napi menü {getCurrentDate()}</h1>
        <h1 className="text-center mb-5">
          Az allergén összetevőkről kérdezze munkatársunkat!
        </h1>
      </header>
    );
  }
}

export default Header;
