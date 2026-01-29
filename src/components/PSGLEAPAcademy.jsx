import React from "react";

import Header from "./sections/Header";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Stats from "./sections/Stats";
import Target from "./sections/Target";
import Programs from "./sections/Programs";
import Facilities from "./sections/Facilities";
import Technology from "./sections/Technology";

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    const offset = 80;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
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

      <Hero scrollToSection={scrollToSection} />
      <About />
      <Stats />
      <Target />
      <Programs />
      <Facilities />
      <Technology />
    </div>
  );
}
