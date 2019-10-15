// src/App.js
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Travel from "./Travel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My Travels</h1>
        </header>
        <Travel
          destination="Madeira"
          country="Portugal"
          distance="1000km"
          image="http://www.dorisol.com/media/grupo-dorisol-bannermadeira-destination-dorisol-hotels-ponta-sao-lourenco-nature1.jpg"
        />
        <Travel
          destination="Hawaii"
          country="USA"
          distance="12000km"
          image="https://www.visittheusa.com/sites/default/files/styles/hero_m_1300x700/public/images/hero_media_image/2018-11/b311c1481829913164f33a353de10a66.jpeg?itok=xml68TAM"
        />
      </div>
    );
  }
}

export default App;


 