import React from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import About from "./components/About";
import Stats from "./components/Stats";
import Target from "./components/Target";
import Programs from "./components/Programs";
import Facilities from "./components/Facilities";

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
    </div>
  )
};

export default App;