import React from "react";
import "App.css";

//Import Components
import Nav from "./components/Nav";

const App = () => (
  <div>
    <Nav />
    <h1 className="wow">Hello React!!!!!</h1>
    <img src={thumb} alt="" />
  </div>
);

export default App;
