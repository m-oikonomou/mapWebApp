import React from "react";
import "App.css";

//Import Components
import Nav from "./components/Nav";
import Map from "./components/Map";

const App = () => (
  <div className="map">
    <Nav />
    <h1 className="wow"></h1>
    <Map />
  </div>
);

 export default App;
