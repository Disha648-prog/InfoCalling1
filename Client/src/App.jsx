import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Professionals from "./components/Professionals";
import CombinedFooter from "./components/CombinedFooter";
import Logo from "./components/Logo";

const App = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <Professionals />
      <Logo/>
      <CombinedFooter />
    </>
  );
};

export default App;
