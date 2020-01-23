import "./App.css";

import React, { Component } from "react";
import ClickCounter from "./Component/ClickCounter";
import HoverCounter from "./Component/HoverCounter";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ClickCounter name="Sumit" />
        <HoverCounter />
      </div>
    );
  }
}

export default App;
