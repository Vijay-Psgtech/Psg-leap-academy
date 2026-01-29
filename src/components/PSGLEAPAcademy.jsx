import React from "react";

import Header from "./sections/Header";
import Hero from "./sections/Hero";
import About from "./sections/About";

const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

export default function PSGLEAPAcademy() {
  return (
    <div
      className="min-h-screen bg-white"
      style={{
        fontFamily: "'Open Sans', system-ui, -apple-system, sans-serif",
        color: "#444444",
      }}
      role="application"
      aria-label="PSG LEAP Academy Website"
    >
      {/* Skip to Main Content Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-0 focus:left-0 focus:z-999 focus:p-4 focus:bg-[#5fcf80] focus:text-white focus:rounded-md"
      >
        Skip to main content
      </a>
      <Header scrollToSection={scrollToSection} />
      <main id="main-content" tabIndex="-1">
        <Hero scrollToSection={scrollToSection} />
        <About />
      </main>
    </div>
  );
}
