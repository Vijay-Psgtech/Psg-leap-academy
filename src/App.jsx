import React from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import About from "./components/About";
import Stats from "./components/Stats";
import Target from "./components/Target";

function App () {
  return (
    <div className="min-h-screen">
      <Header />
      <Banner />
      <About />
      <Stats />
      <Target />
    </div>
  )
};

export default App;