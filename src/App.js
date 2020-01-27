import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { MagicButton } from "standard-wow-components";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>World's most Amazing app</p>
        <MagicButton>With the world's most Amazing button</MagicButton>
      </header>
    </div>
  );
}

export default App;
