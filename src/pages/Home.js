import React from "react";
import PhotoList from "../components/lists/PhotoList";
import GetPhotosButton from "../components/buttons/GetPhotosButton";

const Home = () => {
  return (
    <div>
      <div className="main-title-container">
        <h3>React Dev Test</h3>
        <GetPhotosButton />
      </div>
      <PhotoList />
    </div>
  );
};

export default Home;
