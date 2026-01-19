import React from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import About from "./components/About";
import Stats from "./components/Stats";

function App () {
  return (
    <div className="min-h-screen">
      <Header />
      <Banner />
      <About />
      <Stats />
    </div>
  )
};

export default App;