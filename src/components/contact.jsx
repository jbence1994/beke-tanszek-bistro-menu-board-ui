import React, { Component } from "react";

class Contact extends Component {
  state = {
    companyInfo: {
      name: "Béke Tanszék Vendéglátó Bt.",
      address: "6722 Szeged, Boldogasszony sugárút 11.",
      phone: "+36-70/778-7150",
      fax: "+36-62/424-177",
    },
  };

  render() {
    const { companyInfo } = this.state;
    const { name, address, phone, fax } = companyInfo;

    return (
      <div className="text-center">
        <h3>Üzemeltető:</h3>
        <h3>{name}</h3>
        <h3>{address}</h3>
        <h3>Tel.: {phone}</h3>
        <h3>Fax: {fax}</h3>
      </div>
    );
  }
}

export default Contact;
