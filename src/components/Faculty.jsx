import React from "react";
import useScrollAnimation from "../hooks/useScrollAnimation";
import SectionTitle from "./SectionTitle";
import { Users, UserCheck, HeartHandshake, Briefcase } from "lucide-react";

const Faculty = () => {
  const { isVisible, ref } = useScrollAnimation();

  const facultyData = [
    {
      icon: Users,
      title: "Core Faculty",
      desc: "Experts in Physics, Chemistry, Biology, and Mathematics specializing in NEET & JEE preparation.",
      color: "text-[#0D5BA9]",
      bg: "bg-blue-50",
    },
    {
      icon: UserCheck,
      title: "Mentors",
      desc: "Dedicated personal tutors for each student group — ensuring close academic tracking and guidance.",
      color: "text-[#B18141]",
      bg: "bg-yellow-50",
    },
    {
      icon: HeartHandshake,
      title: "Counsellors",
      desc: "Provide both academic and emotional support, fostering student confidence and well-being.",
      color: "text-pink-600",
      bg: "bg-pink-50",
    },
    {
      icon: Briefcase,
      title: "Admin & Support Staff",
      desc: "Efficient management of IT systems, facilities, and operations to maintain seamless learning support.",
      color: "text-green-600",
      bg: "bg-green-50",
    },
  ];
  return (
    <section
      id="faculty"
      className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50"
    >
      <div className="max-w-full mx-auto px-6 md:px-12">
        <SectionTitle subtitle="Faculty & Staffing" title="Our Expert Team" />
        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {facultyData.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`group relative bg-white border border-gray-200 rounded-2xl p-8 text-center 
                           shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#0D5BA9] overflow-hidden
                           ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/*Icon*/}
                <div
                  className={`mx-auto mb-6 ${item.bg} w-20 h-20 rounded-full flex items-center justify-center transition-transform duration-500 group-hover:scale-110`}
                >
                  <Icon className={`w-10 h-10 ${item.color}`} />
                </div>
                {/* Content */}
                <h3 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-[#0D5BA9] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faculty;
