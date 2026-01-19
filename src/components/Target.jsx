import React from "react";
import useScrollAnimation from "../hooks/useScrollAnimation";
import { GraduationCap, Heart, RefreshCcw } from "lucide-react";
import SectionTitle from "./SectionTitle";

const Target = () => {
  const { isVisible, ref } = useScrollAnimation();
  const targets = [
    {
      icon: GraduationCap,
      title: "Classes 11 & 12",
      desc: "Students aspiring for NEET/JEE examinations",
      color: "text-blue-500",
      bg: "bg-blue-50",
    },
    {
      icon: RefreshCcw,
      title: "Drop-Year Students",
      desc: "Students seeking focused coaching",
      color: "text-pink-600",
      bg: "bg-pink-50",
    },
    {
      icon: Heart,
      title: "Parents",
      desc: "Seeking reliable and disciplined coaching environment",
      color: "text-yellow-500",
      bg: "bg-yellow-50",
    },
  ];
  return (
    <section id="target" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionTitle subtitle="Target Audience" title="Who We Serve" />
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {targets.map((t, i) => {
            const Icon = t.icon;
            return (
              <div
                key={i}
                className={`bg-white border-2 border-gray-200 p-8 rounded-xl text-center hover:border-emerald-500 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div
                  className={`${t.bg} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-500`}
                >
                  <Icon className={`w-10 h-10 ${t.color}`} />
                </div>
                <h4 className="text-xl font-bold mb-3">{t.title}</h4>
                <p className="text-gray-600">{t.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Target;
