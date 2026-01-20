import React from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import About from "./components/About";
import Stats from "./components/Stats";
import Target from "./components/Target";
import Programs from "./components/Programs";
import Facilities from "./components/Facilities";
import Technology from "./components/Technology";
import Faculty from "./components/Faculty";
import FinancialModel from "./components/Financial";
import MarketingOutreach from "./components/Marketing";

function App () {
  return (
    <div className="min-h-screen">
      <Header />
      <Banner />
      <About />
      <Stats />
      <Target />
      <Programs />
      <Facilities />
      <Faculty />
      <Technology />
      <FinancialModel />
      <MarketingOutreach />
    </div>
  )
};

export default App;