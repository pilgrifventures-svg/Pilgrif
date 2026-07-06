import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SpiderManHero from "./components/SpiderManHero";
import OurClients from "./components/OurClients";
import ReferenceSection from "./components/ReferenceSection";
import MeetTheTeam from "./components/MeetTheTeam";
import ReferenceDetailsSection from "./components/ReferenceDetailsSection";
import DeadpoolPosterSection from "./components/DeadpoolPosterSection";
import FloatingRedPlaceholder from "./components/FloatingRedPlaceholder";
import WhiteStage from "./components/WhiteStage";
import Footer from "./components/Footer";

function App() {
  const Home = () => (
    <>
      <SpiderManHero />
      <OurClients />
      <ReferenceSection />
      <MeetTheTeam />
      <WhiteStage>
        <FloatingRedPlaceholder />
        <ReferenceDetailsSection />
        <DeadpoolPosterSection />
      </WhiteStage>
      <Footer />
    </>
  );

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;