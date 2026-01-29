import React, { lazy, Suspense } from "react";

import Header from "./layout/Header";
import Footer from "./layout/Footer";
import ScrollToTop from "./layout/ScrollToTop";
import Loader from "./layout/Loader";

const Hero = lazy(() => import("./sections/Hero"));
const About = lazy(() => import("./sections/About"));
const Stats = lazy(() => import("./sections/Stats"));
const Target = lazy(() => import("./sections/Target"));
const Programs = lazy(() => import("./sections/Programs"));
const Facilities = lazy(() => import("./sections/Facilities"));
const Technology = lazy(() => import("./sections/Technology"));
const Faculty = lazy(() => import("./sections/Faculty"));
const Pricing = lazy(() => import("./sections/Pricing"));
const Marketing = lazy(() => import("./sections/Marketing"));
const Finanicals = lazy(() => import("./sections/Finanicals"));
const Success = lazy(() => import("./sections/Success"));
const Conslusion = lazy(() => import("./sections/Conslusion"));

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
      <Suspense fallback={<Loader />}>
        <Header scrollToSection={scrollToSection} />
        <Hero scrollToSection={scrollToSection} />
        <About />
        <Stats />
        <Target />
        <Programs />
        <Facilities />
        <Technology />
        <Faculty />
        <Pricing />
        <Marketing />
        <Finanicals />
        <Success />
        <Conslusion />
        <Footer scrollToSection={scrollToSection} />
        <ScrollToTop />
      </Suspense>
    </div>
  );
}
