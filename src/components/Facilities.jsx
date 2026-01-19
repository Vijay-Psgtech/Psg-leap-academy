import React from "react";
import useScrollAnimation from "../hooks/useScrollAnimation";
import SectionTitle from "./SectionTitle";
import {
  MonitorSmartphone,
  FlaskConical,
  Laptop2,
  BarChart3,
  BookOpen,
  Coffee,
} from "lucide-react";

const Facilities = () => {
  const { isVisible, ref } = useScrollAnimation();

  const fac = [
    {
      icon: MonitorSmartphone,
      title: "Smart Classrooms",
      color: "text-yellow-500",
      bg: "bg-yellow-50",
      desc: "Digital boards & lecture capture",
    },
    {
      icon: FlaskConical,
      title: "Well-equipped Labs",
      color: "text-blue-500",
      bg: "bg-blue-50",
      desc: "Practical reinforcement",
    },
    {
      icon: Laptop2,
      title: "LMS",
      color: "text-pink-600",
      bg: "bg-pink-50",
      desc: "Recorded lectures, notes, tests",
    },
    {
      icon: BarChart3,
      title: "Assessment Dashboard",
      color: "text-purple-500",
      bg: "bg-purple-50",
      desc: "Parent logins to monitor progress",
    },
    {
      icon: BookOpen,
      title: "Library & Study Zones",
      color: "text-sky-500",
      bg: "bg-sky-50",
      desc: "Extended hours for self-study",
    },
    {
      icon: Coffee,
      title: "Cafeteria & Wellness",
      color: "text-orange-500",
      bg: "bg-orange-50",
      desc: "Student well-being support",
    },
  ];
  return (
    <section id="facilities" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Title */}
        <SectionTitle
          subtitle="Infrastructure & Facilities"
          title="World-Class Learning Environment"
        />

        {/* Facilities Grid */}
        <div
          ref={ref}
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {fac.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={i}
                className={`group relative bg-white border border-gray-200 rounded-2xl p-8 text-center 
                        shadow-md hover:shadow-2xl transition-all duration-500 
                        hover:-translate-y-2 hover:border-[#0D5BA9] overflow-hidden
                        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Decorative Gradient Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0D5BA9]/5 via-transparent to-[#F9C400]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl"></div>

                {/* Icon */}
                <div
                  className={`relative z-10 ${f.bg} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 
                          shadow-inner shadow-gray-200 group-hover:scale-110 transition-transform duration-500`}
                >
                  <Icon
                    className={`w-10 h-10 ${f.color} transition-transform duration-500 group-hover:rotate-6`}
                  />
                </div>

                {/* Title */}
                <h3 className="relative z-10 text-lg font-bold text-gray-800 mb-2 group-hover:text-[#0D5BA9] transition-colors">
                  {f.title}
                </h3>

                {/* Description */}
                <p className="relative z-10 text-gray-600 leading-relaxed text-sm md:text-base px-2">
                  {f.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Infrastructural Info */}
        <div className="mt-16 bg-white border-l-4 border-[#0D5BA9] rounded-xl shadow-lg p-8 text-gray-700 text-sm md:text-base leading-relaxed hover:shadow-xl transition-shadow duration-500">
          <p>
            <strong className="text-[#0D5BA9]">
              Infrastructural Requirement:
            </strong>{" "}
            Our existing classrooms are equipped with state-of-the-art
            technology, enabling their immediate utilization. However, we aim to
            develop an interactive website and AI-driven learning & assessment
            tools, requiring an estimated investment of{" "}
            <span className="font-semibold text-[#0D5BA9]">
              ₹10 to ₹20 lakhs
            </span>{" "}
            including server infrastructure.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Facilities;
