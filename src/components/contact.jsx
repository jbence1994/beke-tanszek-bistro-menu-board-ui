import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <div className="text-center mb-5">
        <h4>Üzemeltető:</h4>
        <h4>Béke Tanszék Vendéglátó Bt.</h4>
        <h4>6722 Szeged, Boldogasszony sugárút 11.</h4>
        {/* TODO: Fix to the correct phone number. */}
        <h4>Tel.: +36-70/778-7150</h4>
      </div>
    );
  }
}

export default Contact;
