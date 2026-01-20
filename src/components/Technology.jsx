import React from "react";
import useScrollAnimation from "../hooks/useScrollAnimation";
import SectionTitle from "./SectionTitle";
import { BarChart3, HelpCircle, Smartphone } from "lucide-react";

const Technology = () => {
  const { isVisible, ref } = useScrollAnimation();

  const tech = [
    {
      icon: BarChart3,
      title: "AI Test Analysis",
      color: "text-blue-500",
      bg: "bg-blue-50",
      desc: "Adaptive AI-driven test analysis for performance mapping.",
    },
    {
      icon: HelpCircle,
      title: "Question Banks",
      color: "text-pink-600",
      bg: "bg-pink-50",
      desc: "Comprehensive question banks for all subjects.",
    },
    {
      icon: Smartphone,
      title: "Mobile App",
      color: "text-yellow-500",
      bg: "bg-yellow-50",
      desc: "Access learning materials anytime, anywhere.",
    },
  ];
  return (
    <section
      id="technology"
      className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionTitle subtitle="Technology" title="Advanced Learning Tech" />
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tech.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`group relative bg-white border border-gray-200 rounded-2xl p-8 text-center 
                             shadow-md hover:shadow-2xl transition-all duration-500 
                        hover:-translate-y-2 hover:border-[#0D5BA9] overflow-hidden
                        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Decorative Gradient Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0D5BA9]/5 via-transparent to-[#F9C400]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl"></div>
                <div
                  className={`relative z-10 ${item.bg} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 
                          shadow-inner shadow-gray-200 group-hover:scale-110 transition-transform duration-500`}
                >
                  <Icon
                    className={`w-10 h-10 ${item.color} transition-transform duration-500 group-hover:rotate-6`}
                  />
                </div>
                <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Technology;
