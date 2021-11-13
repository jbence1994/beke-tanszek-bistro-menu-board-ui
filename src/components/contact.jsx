import React, { Component } from "react";

class Contact extends Component {
  state = {
    info: [
      "Üzemeltető:",
      "Béke Tanszék Vendéglátó Bt.",
      "6722 Szeged, Boldogasszony sugárút 11.",
      "Tel.: +36 70 389 21 23",
    ],
  };

  render() {
    const { info } = this.state;

    return (
      <div className="text-center mb-5">
        {info.map((row) => (
          <h3>{row}</h3>
        ))}
      </div>
    );
  }
}

export default Contact;
