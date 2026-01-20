import React from "react";
import useScrollAnimation from "../hooks/useScrollAnimation";
import SectionTitle from "./SectionTitle";

const Programs = () => {
  const { isVisible, ref } = useScrollAnimation();
  const courses = [
    {
      img: "https://images.unsplash.com/photo-1532619187608-e5375cab36aa?w=600",
      cat: "2-Year Integrated",
      price: "₹2.0-2.5L/yr",
      title: "NEET / JEE 2-Year Integrated Program",
      dur: "11–12",
      mode: "Classroom + Online",
      features:
        "Comprehensive coverage of Physics, Chemistry, Biology/Maths + Test Series",
    },
    {
      img: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600",
      cat: "Intensive",
      price: "₹75K-1L",
      title: "1-Year Crash Course",
      dur: "6–8 mo",
      mode: "Intensive Classroom",
      features: "Fast-track syllabus completion + Daily practice papers",
    },
    {
      img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600",
      cat: "Foundation",
      price: "₹50K-75K",
      title: "Foundation Program (Class 9 & 10)",
      dur: "2 yrs",
      mode: "Weekend Batche",
      features: "Strengthening fundamentals for early starters",
    },
    {
      img: "https://images.unsplash.com/photo-1532619187608-e5375cab36aa?w=600",
      cat: "Flexible",
      price: "Custom",
      title: "Test & Mentoring Series",
      dur: "Flexible",
      mode: "Online + In-person",
      features: "AI-based test analytics + individual mentoring",
    },
  ];
  return (
    <section
      id="programs"
      className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50"
    >
      <div className="max-w-full mx-auto px-6 md:px-12">
        {/* Section Title */}
        <SectionTitle
          subtitle="Program Offerings"
          title="Comprehensive Coaching Programs"
        />

        {/* Program Grid */}
        <div
          ref={ref}
          className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4"
        >
          {courses.map((c, i) => (
            <div
              key={i}
              className={`relative group rounded-2xl bg-white shadow-md hover:shadow-2xl 
                      transition-all duration-500 overflow-hidden transform 
                      hover:-translate-y-2 border border-gray-100
                      ${isVisible ? "opacity-100" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Image Section */}
              <div className="relative overflow-hidden h-52 sm:h-56 md:h-60">
                <img
                  src={c.img}
                  alt={c.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />

                {/* Category Tag */}
                <div className="absolute top-4 left-4 bg-[#0D5BA9] text-white text-xs sm:text-sm px-3 py-1 rounded-full shadow-md">
                  {c.cat}
                </div>

                {/* Price Tag */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-[#0D5BA9] text-sm font-semibold px-3 py-1 rounded-full shadow">
                  {c.price}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-800 group-hover:text-[#0D5BA9] transition-colors">
                  {c.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  <span className="font-semibold">Duration:</span> {c.dur}{" "}
                  &nbsp;|&nbsp;
                  <span className="font-semibold">Mode:</span> {c.mode}
                </p>

                {/* Features */}
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  <span className="font-semibold text-[#0D5BA9]">
                    Key Features:
                  </span>{" "}
                  {c.features}
                </p>
              </div>

              {/* Decorative Glow on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0D5BA9]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500 rounded-2xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
