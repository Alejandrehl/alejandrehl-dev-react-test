import React from "react";
import "./styles.css";
import PhotoState from "./context/photo/PhotoState";
import Home from "./pages/Home";

const App = () => {
  return (
    <PhotoState>
      <Home />
    </PhotoState>
  );
};

export default App;
