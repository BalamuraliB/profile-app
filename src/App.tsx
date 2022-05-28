import React from "react";
import "./App.css";
import HeaderSection from "./profile/HeaderSection/HeaderSection";
import AboutMe from "./profile/MainInfo/AboutMe";
import MainInfo from "./profile/MainInfo/MainInfo";
import SocialContainer from "./profile/Social/SocialContainer";

function App() {
  return (
    <div className="App">
      <HeaderSection />
      <MainInfo />
      <SocialContainer />
    </div>
  );
}

export default App;
