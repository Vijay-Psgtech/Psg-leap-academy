import React from "react";
import { motion } from "framer-motion";

const programsData = [
  {
    title: "NEET / JEE 2-Year Integrated Program",
    category: "2-Year Integrated",
    price: "₹2.0 – 2.5L / year",
    duration: "Grade 11–12",
    mode: "Classroom + Online",
    features: "Complete syllabus coverage with advanced test series",
  },
  {
    title: "1-Year Crash Course",
    category: "Intensive",
    price: "₹75K – 1L",
    duration: "6–8 Months",
    mode: "Intensive Classroom",
    features: "Fast-track syllabus with daily practice & revision",
  },
  {
    title: "Foundation Program (Class 9 & 10)",
    category: "Foundation",
    price: "₹50K – 75K",
    duration: "2 Years",
    mode: "Weekend Batches",
    features: "Strong conceptual base for early aspirants",
  },
  {
    title: "Test & Mentoring Series",
    category: "Flexible",
    price: "Custom",
    duration: "Flexible",
    mode: "Online + In-person",
    features: "AI-based analytics & personal mentoring",
  },
];

const Programs = () => {
  return (
    <section
      id="programs"
      className="py-20 bg-gradient-to-br from-white via-emerald-50 to-white"
      role="region"
      aria-label="Our coaching programs"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2
            className="text-sm uppercase tracking-[0.3em] mb-3 text-gray-500"
            style={{
              fontFamily: "'Raleway', sans-serif",
              fontWeight: 600,
            }}
          >
            Program Offerings
          </h2>

          <p
            className="text-3xl md:text-4xl font-semibold"
            style={{
              fontFamily: "'Poppins', sans-serif",
              color: "#37423b",
            }}
          >
            Comprehensive Coaching Programs
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Left Image */}
          <motion.div
            className="relative rounded-3xl overflow-hidden"
            style={{
              boxShadow:
                "0 20px 50px rgba(95, 207, 128, 0.2), 0 0 40px rgba(95, 207, 128, 0.1)",
            }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.img
              src="src/assets/img/course-1.jpg"
              alt="Programs"
              className="w-full h-full object-cover"
              initial={{ scale: 1.05 }}
              whileHover={{ scale: 1.15 }}
              transition={{ duration: 0.6 }}
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"
              initial={{ opacity: 0.3 }}
              whileHover={{ opacity: 0.5 }}
            />
          </motion.div>

          {/* Programs Cards */}
          <div className="grid sm:grid-cols-2 gap-8">
            {programsData.map((course, idx) => (
              <motion.div
                key={idx}
                className="rounded-2xl shadow-lg p-6 card-hover relative overflow-hidden group"
                style={{
                  background: "linear-gradient(135deg, #ffffff, #f8fbf9)",
                  border: "1px solid rgba(95, 207, 128, 0.2)",
                }}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={{ opacity: 0 }}
                />
                <div className="relative z-10">
                  {/* Badge & Price */}
                  <div className="flex justify-between items-center mb-4">
                    <span
                      className="px-4 py-1.5 rounded-full text-xs font-semibold uppercase"
                      style={{ background: "#5fcf80", color: "#ffffff" }}
                    >
                      {course.category}
                    </span>
                    <span
                      className="font-bold text-sm drop-shadow-lg"
                      style={{ color: "#5fcf80" }}
                    >
                      {course.price}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className="text-lg font-bold mb-3 drop-shadow-lg"
                    style={{
                      fontFamily: "'Raleway', sans-serif",
                      color: "#37423b",
                    }}
                  >
                    {course.title}
                  </h3>

                  {/* Details */}
                  <p className="text-sm mb-2 text-[#444]">
                    <strong>Duration:</strong> {course.duration}
                  </p>
                  <p className="text-sm mb-3 text-[#444]">
                    <strong>Mode:</strong> {course.mode}
                  </p>

                  <p className="text-sm text-black/70 leading-relaxed">
                    <strong>Key Features:</strong> {course.features}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
