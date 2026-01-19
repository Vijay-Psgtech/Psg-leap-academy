import React from "react";
import useScrollAnimation from "../hooks/useScrollAnimation";

const SectionTitle = ({ subtitle, title }) => {
  const { isVisible, ref } = useScrollAnimation();
  return (
    <div
      ref={ref}
      className={`text-start mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      <div className="flex items-center justify-start mb-2">
        <span className="text-md uppercase tracking-widest text-gray-500">
          {subtitle}
        </span>
        <div
          className={`w-32 h-px bg-[#0D5BA9] ml-3 transition-all duration-700 delay-200 ${isVisible ? "scale-x-100" : "scale-x-0"}`}
        ></div>
      </div>
      <h2 className="text-4xl font-bold text-gray-800 uppercase">{title}</h2>
    </div>
  );
};

export default SectionTitle;
