import React, { useEffect, useState } from "react";
import {
  Menu,
  X,
  ChevronUp,
  GraduationCap,
  RefreshCw,
  Heart,
  Monitor,
  Beaker,
  Laptop,
  TrendingUp,
  Book,
  Coffee,
  Cpu,
  HelpCircle,
  Smartphone,
  Atom,
  Droplet,
  Flower2,
  Calculator,
  Users,
  Award,
  Building,
  Globe,
  Newspaper,
  Trophy,
} from "lucide-react";
import { motion } from "framer-motion";

const navItems = [
  "Home",
  "About",
  "Target",
  "Programs",
  "Facilities",
  "Technology",
  "Faculty",
  "Pricing",
  "Outreach",
  "Financials",
  "Success",
];

export default function PSGLeapAcademy() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setShowScrollTop(window.scrollY > 400);

      const sections = navItems.map((item) => item.toLowerCase());
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (anchor) => {
    setIsMenuOpen(false);
    const element = document.getElementById(anchor);
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const AnimatedNumber = ({ value }) => {
    const [count, setCount] = useState(0);
    return (
      <motion.span
        className="text-5xl font-bold text-[#5fcf80]"
        initial={{ count: 0 }}
        animate={{ count: value }}
        transition={{ duration: 2, ease: "easeOut" }}
        onUpdate={(latest) => setCount(Math.floor(latest.count))}
      >{count}</motion.span>
    );
  };

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

      {/* Header */}
      <motion.header
        className="fixed top-0 w-full z-60 glassmorphism"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100, damping: 15 }}
        role="banner"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center gap-6 h-21 ">
            {/* LOGO */}
            <motion.div
              className="flex items-center space-x-3 cursor-pointer"
              onClick={() => scrollToSection("home")}
              whileHover={{ scale: 1.03 }}
            >
              <motion.img
                src="logo.png"
                alt="PSG LEAP Logo"
                className="h-14 w-7xl object-contain"
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>

            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex items-center space-x-8" aria-label="Main navigation">
              {navItems.map((item, idx) => {
                const isActive = activeSection === item.toLowerCase();
                return (
                  <motion.button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="nav-button text-sm font-medium"
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    style={{ color: isActive ? "#5fcf80" : "#272828" }}
                    whileHover={{ color: "#5fcf80" }}
                    aria-current={isActive ? "page" : undefined}
                    aria-label={`Navigate to ${item} section`}
                  >
                    {item}

                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute left-0 -bottom-2 w-full h-0.5 rounded-full"
                        style={{ background: "#5fcf80" }}
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 30,
                        }}
                      />
                    )}
                  </motion.button>
                );
              })}
            </nav>

            {/* CTA */}
            <motion.button
              onClick={() => scrollToSection("programs")}
              className="hidden lg:inline-flex justify-items-end px-8 py-3 rounded-full text-sm font-semibold btn-accent icon-button"
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              aria-label="Enroll in a program"
            >
              Enroll Now
            </motion.button>

            {/* MOBILE MENU */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden"
              style={{ color: "#272828" }}
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          id="mobile-menu"
          className="fixed inset-0 glassmorphism-dark z-40 lg:hidden pt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          role="navigation"
          aria-label="Mobile navigation menu"
        >
          <nav className="flex flex-col items-center space-y-4 py-8 nav-font" aria-label="Mobile menu options">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-lg font-medium px-6 py-3 nav-button"
                style={{ color: "#d6e6e6" }}
                aria-label={`Navigate to ${item} section`}
              >
                {item}
              </button>
            ))}
          </nav>
        </motion.div>
      )}

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        role="region"
        aria-label="Home section with call to action"
      >
        {/* Background Image */}
        <motion.img
          src="src/assets/img/hero-bg.jpg"
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ scale: 1.15 }}
          animate={{ scale: 1.05 }}
          transition={{ duration: 8, ease: "easeOut" }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-br from-white-500/75 via-white-700/70 to-slate-900/85"></div>

        {/* Content */}
        <motion.div
          className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-20 sm:py-32 text-center text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="rounded-3xl p-6 sm:p-8 md:p-12"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8, type: "spring", stiffness: 60 }}
          >
            {/* Heading */}
            <motion.h2
              className="text-4xl md:text-6xl font-extrabold tracking-wide"
              style={{ fontFamily: "'Raleway', sans-serif" }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <span className="text-white drop-shadow-2xl">
                Learn. Empower. Aspire.
              </span>

              <motion.span
                className="block mt-4 bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #10b981, #34d399, #a7f3d0)",
                  letterSpacing: "3px",
                }}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                Progress.
              </motion.span>
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              className="text-lg md:text-2xl mb-10 text-white/90 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              A Premier Coaching Centre for <br />
              <span className="font-semibold text-emerald-200">
                NEET & JEE Aspirants
              </span>
            </motion.p>

            {/* CTA */}
            <motion.button
              onClick={() => scrollToSection("programs")}
              className="px-10 py-4 rounded-full font-semibold text-lg bg-white text-emerald-600 relative overflow-hidden group icon-button"
              whileHover={{
                scale: 1.08,
                boxShadow: "0 20px 50px rgba(16,185,129,0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              aria-label="Explore coaching programs offered"
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-emerald-600 -z-10"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="group-hover:text-white transition-colors duration-300"
              >
                Explore Programs
              </motion.span>
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="relative bg-white py-20 fade-in" role="region" aria-label="About PSG LEAP Academy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            {/* IMAGE BLOCK */}
            <motion.div
              className="relative rounded-2xl flex items-center justify-center h-80 sm:h-96 overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #e8f5e9, #f9f9f9)",
                boxShadow: "0 20px 50px rgba(95, 207, 128, 0.15), inset 0 1px 1px rgba(255,255,255,0.8)",
              }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <motion.img
                src="src/assets/img/about.jpg"
                alt="About PSG LEAP Academy"
                className="w-full h-full object-cover rounded-2xl"
                initial={{ scale: 1.05 }}
                whileHover={{ scale: 1.15 }}
                transition={{ duration: 0.6 }}
              />
              <motion.div 
                className="absolute inset-0 bg-black/5 rounded-2xl"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />
            </motion.div>

            {/* CONTENT BLOCK */}
            <div>
              <h3
                className="text-3xl md:text-4xl font-extrabold mb-6 tracking-wide"
                style={{
                  fontFamily: "'Raleway', sans-serif",
                  color: "#2f3e34",
                }}
              >
                Introduction
                <span className="block text-lg font-medium text-emerald-600 mt-2">
                  PSG LEAP Academy
                </span>
              </h3>

              <p
                className="mb-8 text-base leading-relaxed italic"
                style={{ color: "#4a4a4a" }}
              >
                PSG LEAP Academy is envisioned as a state-of-the-art coaching
                centre under PSG Institutions / PSG Public Schools, dedicated to
                preparing students for India's most competitive examinations —{" "}
                <strong>NEET (Medical)</strong> and{" "}
                <strong>JEE (Engineering)</strong>. The Academy integrates
                rigorous academic training, personalized mentoring, and advanced
                learning technologies to empower students to Aspire their career
                aspirations.
              </p>

              <h4
                className="text-xl font-bold mb-5"
                style={{
                  fontFamily: "'Raleway', sans-serif",
                  color: "#2f3e34",
                }}
              >
                Why PSG LEAP Academy?
              </h4>

              <ul className="space-y-4 mb-8">
                {[
                  "Legacy of PSG Institutions – credibility and trust in education for a century",
                  "Expert Faculty – subject specialists with proven track record in NEET & JEE coaching",
                  "Blended Learning Model – classroom + digital resources + AI-based test analytics",
                  "Individual Mentoring – personal progress tracking, doubt-clearing, and counselling",
                  "Holistic Development – stress management, time management, and career guidance",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span
                      className="mr-4 mt-1 text-lg font-bold"
                      style={{ color: "#34d399" }}
                    >
                      ✓
                    </span>
                    <span style={{ color: "#444444" }}>{item}</span>
                  </li>
                ))}
              </ul>

              {/* VISION & MISSION */}
              <div
                className="space-y-4 border-l-4 pl-6"
                style={{ borderColor: "#5fcf80" }}
              >
                <p style={{ color: "#444444" }}>
                  <strong style={{ color: "#2f3e34" }}>Vision:</strong> To
                  become the leading destination in South India for holistic and
                  result-oriented coaching for NEET & JEE.
                </p>
                <p style={{ color: "#444444" }}>
                  <strong style={{ color: "#2f3e34" }}>Mission:</strong> To
                  provide conceptual clarity, consistent practice, and emotional
                  resilience to students through an integrated academic
                  ecosystem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#f9f9f9] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.15 },
              },
            }}
          >
            {[
              { value: 250, label: "Target Students by Year 3" },
              { value: 4, label: "Expert Faculty Members" },
              { value: 4, label: "Comprehensive Programs" },
              { value: 100, label: "Top 100 State Ranks" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                className="text-center p-8 bg-white rounded-2xl card-hover"
                style={{
                  background: "linear-gradient(135deg, #ffffff, #f8fbf9)",
                  border: "1px solid rgba(95, 207, 128, 0.2)",
                }}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ y: -6 }}
              >
                <AnimatedNumber value={stat.value} />

                <div
                  className="text-sm md:text-base font-semibold mt-3"
                  style={{
                    color: "rgba(68, 68, 68, 0.75)",
                    fontFamily: "'Raleway', sans-serif",
                  }}
                >
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Target Audience */}
      <section id="target" className="bg-white py-16" role="region" aria-label="Target audience for our programs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-sm uppercase tracking-widest mb-2 section-title-line"
              style={{
                color: "#666666",
                fontFamily: "'Raleway', sans-serif",
                fontWeight: 500,
              }}
            >
              Target Audience
            </h2>
            <p
              className="text-4xl font-bold"
              style={{
                fontFamily: "'Poppins', sans-serif",
                color: "#37423b",
                textTransform: "uppercase",
              }}
            >
              Who We Serve
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: GraduationCap,
                title: "Classes 11 & 12 Students",
                desc: "Students aspiring for NEET/JEE examinations",
              },
              {
                icon: RefreshCw,
                title: "Drop-Year Students",
                desc: "Students seeking focused coaching",
              },
              {
                icon: Heart,
                title: "Parents",
                desc: "Seeking reliable and disciplined coaching environment",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="rounded-2xl p-8 text-center card-hover"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.9), rgba(248,251,249,0.8))",
                  border: "1px solid rgba(95, 207, 128, 0.3)",
                  backdropFilter: "blur(10px)",
                }}
                whileHover={{ y: -8 }}
              >
                <item.icon
                  className="h-12 w-12 mx-auto mb-6"
                  style={{ color: "#5fcf80" }}
                />
                <h4
                  className="font-bold text-xl mb-3"
                  style={{
                    fontFamily: "'Raleway', sans-serif",
                    color: "#37423b",
                  }}
                >
                  {item.title}
                </h4>
                <p style={{ color: "rgba(68, 68, 68, 0.7)" }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 bg-[#f9f9f9]" role="region" aria-label="Our coaching programs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2
              className="text-sm uppercase tracking-[0.3em] mb-3"
              style={{
                color: "#666666",
                fontFamily: "'Raleway', sans-serif",
              }}
            >
              Program Offerings
            </h2>

            <p
              className="text-3xl md:text-4xl font-extrabold"
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
                boxShadow: "0 20px 50px rgba(95, 207, 128, 0.2), 0 0 40px rgba(95, 207, 128, 0.1)",
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
              {[
                {
                  title: "NEET / JEE 2-Year Integrated Program",
                  category: "2-Year Integrated",
                  price: "₹2.0 – 2.5L / year",
                  duration: "Grade 11–12",
                  mode: "Classroom + Online",
                  features:
                    "Complete syllabus coverage with advanced test series",
                },
                {
                  title: "1-Year Crash Course",
                  category: "Intensive",
                  price: "₹75K – 1L",
                  duration: "6–8 Months",
                  mode: "Intensive Classroom",
                  features:
                    "Fast-track syllabus with daily practice & revision",
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
              ].map((course, idx) => (
                <motion.div
                  key={idx}
                  className="rounded-2xl p-6 card-hover relative overflow-hidden group"
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
                      className="font-bold text-sm"
                      style={{ color: "#5fcf80" }}
                    >
                      {course.price}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className="text-lg font-bold mb-3"
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

      {/* Facilities */}
      <section id="facilities" className="bg-white py-20 overflow-hidden" role="region" aria-label="Our facilities and infrastructure">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2
              className="text-sm uppercase tracking-[0.3em] mb-3"
              style={{
                color: "#666666",
                fontFamily: "'Raleway', sans-serif",
              }}
            >
              Infrastructure & Facilities
            </h2>

            <p
              className="text-3xl md:text-4xl font-extrabold"
              style={{
                fontFamily: "'Poppins', sans-serif",
                color: "#37423b",
              }}
            >
              World-Class Learning Environment
            </p>
          </div>

          {/* Facilities Grid */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 gap-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } },
            }}
          >
            {[
              {
                icon: Monitor,
                title: "Smart Classrooms",
                desc: "Digital boards & lecture capture",
                color: "#5fcf80",
              },
              {
                icon: Beaker,
                title: "Well-equipped Labs",
                desc: "Practical reinforcement",
                color: "#ff7a18",
              },
              {
                icon: Laptop,
                title: "Learning Management System",
                desc: "Recorded lectures, notes, tests",
                color: "#4f46e5",
              },
              {
                icon: TrendingUp,
                title: "Assessment Dashboard",
                desc: "Parent logins to monitor progress",
                color: "#06b6d4",
              },
              {
                icon: Book,
                title: "Library & Study Zones",
                desc: "Extended hours for self-study",
                color: "#a855f7",
              },
              {
                icon: Coffee,
                title: "Cafeteria & Wellness",
                desc: "Student well-being support",
                color: "#f97316",
              },
            ].map((facility, idx) => (
              <motion.div
                key={idx}
                className="text-center p-8 rounded-2xl card-hover"
                style={{
                  background: "linear-gradient(135deg, #f9f9f9, #f5f5f5)",
                  border: "1px solid rgba(95, 207, 128, 0.15)",
                }}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <motion.div
                  className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full"
                  style={{ 
                    background: `linear-gradient(135deg, ${facility.color}30, ${facility.color}10)`,
                    boxShadow: `0 10px 30px ${facility.color}20`,
                  }}
                  whileHover={{ scale: 1.15, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <facility.icon
                      className="w-8 h-8"
                      style={{ color: facility.color }}
                    />
                  </motion.div>
                </motion.div>

                <h3
                  className="font-bold text-lg mb-2"
                  style={{
                    fontFamily: "'Raleway', sans-serif",
                    color: "#37423b",
                  }}
                >
                  {facility.title}
                </h3>

                <p className="text-sm text-black/70 leading-relaxed">
                  {facility.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technology */}
      <section id="technology" className="py-20 bg-[#f9f9f9] overflow-hidden" role="region" aria-label="Technology and digital tools">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2
              className="text-sm uppercase tracking-[0.3em] mb-3"
              style={{
                color: "#666666",
                fontFamily: "'Raleway', sans-serif",
              }}
            >
              Technology Integration
            </h2>

            <p
              className="text-3xl md:text-4xl font-extrabold"
              style={{
                fontFamily: "'Poppins', sans-serif",
                color: "#37423b",
              }}
            >
              Advanced Learning Technologies
            </p>
          </div>

          {/* Technology Cards */}
          <motion.div
            className="grid md:grid-cols-3 gap-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } },
            }}
          >
            {[
              {
                icon: Cpu,
                title: "AI-Driven Test Analysis",
                desc: "Adaptive AI-driven performance mapping & insights",
                color: "#22c55e",
              },
              {
                icon: HelpCircle,
                title: "Question Banks",
                desc: "NTA-aligned online question banks & practice sets",
                color: "#6366f1",
              },
              {
                icon: Smartphone,
                title: "Mobile Application",
                desc: "Attendance, assignments & progress reports in one app",
                color: "#f97316",
              },
            ].map((tech, idx) => (
              <motion.div
                key={idx}
                className="rounded-2xl p-10 text-center card-hover"
                style={{
                  background: "linear-gradient(135deg, #ffffff, #f8fbf9)",
                  border: "1px solid rgba(95, 207, 128, 0.2)",
                }}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ y: -8, scale: 1.03 }}
              >
                {/* Icon */}
                <motion.div
                  className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full"
                  style={{ 
                    background: `linear-gradient(135deg, ${tech.color}30, ${tech.color}10)`,
                    boxShadow: `0 10px 30px ${tech.color}20`,
                  }}
                  whileHover={{ scale: 1.2, rotate: -10 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <motion.div
                    whileHover={{ rotate: -360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <tech.icon
                      className="w-8 h-8"
                      style={{ color: tech.color }}
                    />
                  </motion.div>
                </motion.div>

                {/* Title */}
                <h4
                  className="font-bold text-lg mb-3"
                  style={{
                    fontFamily: "'Raleway', sans-serif",
                    color: "#37423b",
                  }}
                >
                  {tech.title}
                </h4>

                {/* Description */}
                <p className="text-sm text-black/70 leading-relaxed">
                  {tech.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Faculty */}
      <section id="faculty" className="bg-white py-20 overflow-hidden" role="region" aria-label="Faculty and support staff">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2
              className="text-sm uppercase tracking-[0.3em] mb-3"
              style={{
                color: "#666666",
                fontFamily: "'Raleway', sans-serif",
              }}
            >
              Faculty & Staffing
            </h2>

            <p
              className="text-3xl md:text-4xl font-extrabold"
              style={{
                fontFamily: "'Poppins', sans-serif",
                color: "#37423b",
              }}
            >
              Our Expert Team
            </p>
          </div>

          {/* Core Faculty */}
          <h4
            className="text-center text-2xl font-bold mb-10"
            style={{ fontFamily: "'Raleway', sans-serif", color: "#37423b" }}
          >
            Core Faculty (NEET / JEE Focus)
          </h4>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } },
            }}
          >
            {[
              {
                icon: Atom,
                title: "Physics",
                color: "#3b82f6",
              },
              {
                icon: Droplet,
                title: "Chemistry",
                color: "#22c55e",
              },
              {
                icon: Flower2,
                title: "Biology",
                color: "#ec4899",
              },
              {
                icon: Calculator,
                title: "Mathematics",
                color: "#f97316",
              },
            ].map((subject, idx) => (
              <motion.div
                key={idx}
                className="rounded-2xl p-8 text-center card-hover"
                style={{
                  background: "linear-gradient(135deg, #f9f9f9, #f5f5f5)",
                  border: "1px solid rgba(95, 207, 128, 0.15)",
                }}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ y: -8, scale: 1.03 }}
              >
                {/* Icon Ring */}
                <motion.div
                  className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full"
                  style={{ 
                    background: `linear-gradient(135deg, ${subject.color}30, ${subject.color}10)`,
                    boxShadow: `0 10px 30px ${subject.color}20`,
                  }}
                  whileHover={{ scale: 1.2, rotate: 15 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <subject.icon
                      className="w-8 h-8"
                      style={{ color: subject.color }}
                    />
                  </motion.div>
                </motion.div>

                <h4
                  className="font-bold text-lg mb-2"
                  style={{
                    fontFamily: "'Raleway', sans-serif",
                    color: "#37423b",
                  }}
                >
                  {subject.title}
                </h4>

                <p className="text-sm text-black/70">Expert faculty member</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Support Staff */}
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } },
            }}
          >
            {[
              {
                icon: Users,
                title: "Mentors",
                desc: "Personal tutors assigned to small student groups",
                color: "#6366f1",
              },
              {
                icon: Heart,
                title: "Counsellors",
                desc: "Academic & emotional guidance",
                color: "#ef4444",
              },
              {
                icon: Award,
                title: "Admin & Support Staff",
                desc: "IT, facilities & operations",
                color: "#14b8a6",
              },
            ].map((staff, idx) => (
              <motion.div
                key={idx}
                className="rounded-2xl p-8 text-center card-hover"
                style={{
                  background: "linear-gradient(135deg, #ffffff, #f8fbf9)",
                  border: "1px solid rgba(95, 207, 128, 0.2)",
                }}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ y: -8, scale: 1.03 }}
              >
                <motion.div
                  className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full"
                  style={{ 
                    background: `linear-gradient(135deg, ${staff.color}30, ${staff.color}10)`,
                    boxShadow: `0 10px 30px ${staff.color}20`,
                  }}
                  whileHover={{ scale: 1.15, rotate: -10 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <staff.icon
                      className="w-8 h-8"
                      style={{ color: staff.color }}
                    />
                  </motion.div>
                </motion.div>

                <h4
                  className="font-bold text-lg mb-3"
                  style={{
                    fontFamily: "'Raleway', sans-serif",
                    color: "#37423b",
                  }}
                >
                  {staff.title}
                </h4>

                <p className="text-sm text-black/70 leading-relaxed">
                  {staff.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-[#f9f9f9] overflow-hidden" role="region" aria-label="Pricing and course packages">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2
              className="text-sm uppercase tracking-[0.3em] mb-3"
              style={{
                color: "#666666",
                fontFamily: "'Raleway', sans-serif",
              }}
            >
              Pricing
            </h2>

            <p
              className="text-3xl md:text-4xl font-extrabold"
              style={{
                fontFamily: "'Poppins', sans-serif",
                color: "#37423b",
              }}
            >
              Projected Fee Range
            </p>
          </div>

          {/* Pricing Cards */}
          <motion.div
            className="grid md:grid-cols-3 gap-10 mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } },
            }}
          >
            {[
              {
                title: "Foundation",
                price: "50,000 – 75,000",
                features: [
                  "Classes 9 & 10",
                  "Weekend Batches",
                  "Fundamental Strengthening",
                  "Early Career Preparation",
                ],
                featured: false,
              },
              {
                title: "2-Year Integrated",
                price: "2.0 – 2.5 Lakhs",
                features: [
                  "Comprehensive Syllabus",
                  "Regular Test Series",
                  "Individual Mentoring",
                  "AI-Based Analytics",
                  "Study Materials",
                ],
                featured: true,
              },
              {
                title: "Crash Course",
                price: "75,000 – 1,00,000",
                features: [
                  "Intensive Coaching",
                  "Fast-Track Syllabus",
                  "Daily Practice Papers",
                  "Drop-Year Students",
                ],
                featured: false,
              },
            ].map((plan, idx) => (
              <motion.div
                key={idx}
                className={`relative rounded-2xl p-10 text-center card-hover
            ${plan.featured ? "border-4" : "border"}`}
                style={{
                  background: plan.featured
                    ? "linear-gradient(135deg, #ffffff, #f0fdf4)"
                    : "linear-gradient(135deg, #ffffff, #f8fbf9)",
                  borderColor: plan.featured
                    ? "#5fcf80"
                    : "rgba(95, 207, 128, 0.2)",
                }}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ y: -10, scale: plan.featured ? 1.05 : 1.03 }}
              >
                {/* Featured Badge */}
                {plan.featured && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#5fcf80] text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg">
                    Most Popular
                  </span>
                )}

                <h3
                  className="text-2xl font-bold mb-4"
                  style={{
                    fontFamily: "'Raleway', sans-serif",
                    color: "#37423b",
                  }}
                >
                  {plan.title}
                </h3>

                <div className="mb-8">
                  <span className="text-3xl font-extrabold text-[#5fcf80]">
                    ₹{plan.price}
                  </span>
                  <span className="text-sm text-black/60"> / year</span>
                </div>

                <ul className="space-y-3 text-left">
                  {plan.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-start">
                      <span className="mr-3 mt-1 text-[#5fcf80] font-bold">
                        ✓
                      </span>
                      <span className="text-sm text-[#444]">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom Info Cards */}
          <motion.div
            className="grid md:grid-cols-2 gap-10"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="rounded-2xl p-8 card-hover"
              style={{
                background: "linear-gradient(135deg, #ffffff, #f8fbf9)",
                border: "1px solid rgba(95, 207, 128, 0.2)",
              }}
            >
              <h4
                className="text-xl font-bold mb-4"
                style={{
                  fontFamily: "'Raleway', sans-serif",
                  color: "#37423b",
                }}
              >
                Revenue Streams
              </h4>
              <ul className="space-y-2 text-sm text-[#444]">
                <li>• Course Fees (NEET/JEE long-term, crash, foundation)</li>
                <li>• Test Series subscriptions</li>
                <li>• Online-only programs</li>
              </ul>
            </motion.div>

            <motion.div
              className="rounded-2xl p-8 card-hover"
              style={{
                background: "linear-gradient(135deg, #ffffff, #f8fbf9)",
                border: "1px solid rgba(95, 207, 128, 0.2)",
              }}
            >
              <h4
                className="text-xl font-bold mb-4"
                style={{
                  fontFamily: "'Raleway', sans-serif",
                  color: "#37423b",
                }}
              >
                Initial Investment Areas
              </h4>
              <ul className="space-y-2 text-sm text-[#444]">
                <li>• Infrastructure (classrooms, labs, LMS)</li>
                <li>• Faculty recruitment & training</li>
                <li>• Marketing & branding</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Marketing */}
      <section id="outreach" className="bg-white py-20 overflow-hidden" role="region" aria-label="Marketing and outreach initiatives">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2
              className="text-sm uppercase tracking-[0.3em] mb-3"
              style={{
                color: "#666666",
                fontFamily: "'Raleway', sans-serif",
              }}
            >
              Marketing & Outreach
            </h2>

            <p
              className="text-3xl md:text-4xl font-extrabold"
              style={{
                fontFamily: "'Poppins', sans-serif",
                color: "#37423b",
              }}
            >
              How We Connect With Students
            </p>
          </div>

          {/* Outreach Cards */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } },
            }}
          >
            {[
              {
                icon: Building,
                title: "School Tie-ups",
                desc: "Feeder schools for strong talent pipeline",
                color: "#22c55e",
              },
              {
                icon: Globe,
                title: "Digital Campaigns",
                desc: "Targeted ads via Google, Instagram & YouTube",
                color: "#3b82f6",
              },
              {
                icon: Newspaper,
                title: "Print Media",
                desc: "Local & regional newspaper features",
                color: "#a855f7",
              },
              {
                icon: Trophy,
                title: "Scholarship Tests",
                desc: "Talent hunts to attract meritorious students",
                color: "#f59e0b",
              },
            ].map((marketing, idx) => (
              <motion.div
                key={idx}
                className="rounded-2xl p-8 text-center card-hover"
                style={{
                  background: "linear-gradient(135deg, #f9f9f9, #f5f5f5)",
                  border: "1px solid rgba(95, 207, 128, 0.15)",
                }}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ y: -8, scale: 1.03 }}
              >
                {/* Icon Ring */}
                <motion.div
                  className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full"
                  style={{ 
                    background: `linear-gradient(135deg, ${marketing.color}30, ${marketing.color}10)`,
                    boxShadow: `0 10px 30px ${marketing.color}20`,
                  }}
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <marketing.icon
                      className="w-8 h-8"
                      style={{ color: marketing.color }}
                    />
                  </motion.div>
                </motion.div>

                <h5
                  className="font-bold text-lg mb-3"
                  style={{
                    fontFamily: "'Raleway', sans-serif",
                    color: "#37423b",
                  }}
                >
                  {marketing.title}
                </h5>

                <p className="text-sm text-black/70 leading-relaxed">
                  {marketing.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Financials */}
      <section
        id="financials"
        className="py-20 overflow-hidden"
        style={{ background: "#f9f9f9" }}
        role="region"
        aria-label="Financial performance and budgets"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2
              className="text-sm uppercase tracking-[0.3em] mb-3"
              style={{
                color: "#666666",
                fontFamily: "'Raleway', sans-serif",
              }}
            >
              Financial Statement
            </h2>

            <p
              className="text-3xl md:text-4xl font-extrabold"
              style={{
                fontFamily: "'Poppins', sans-serif",
                color: "#37423b",
              }}
            >
              Inflow & Outflow – First Year
            </p>
          </div>

          {/* Content */}
          <motion.div
            className="grid md:grid-cols-2 gap-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.2 } },
            }}
          >
            {/* Expenditure */}
            <motion.div
              className="bg-white rounded-2xl shadow-lg p-6"
              variants={{
                hidden: { opacity: 0, x: -40 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <h4
                className="text-xl font-bold mb-6"
                style={{
                  fontFamily: "'Raleway', sans-serif",
                  color: "#37423b",
                }}
              >
                Expenditure
              </h4>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead style={{ background: "rgba(95, 207, 128, 0.15)" }}>
                    <tr>
                      <th className="px-4 py-3 text-left">Category</th>
                      <th className="px-4 py-3 text-right">Amount (₹L)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="px-4 py-3">
                        <p className="font-semibold">Faculty (4)</p>
                        <p className="text-xs text-black/60">
                          Math, Physics, Chemistry, Biology
                        </p>
                        <p className="text-xs text-black/50">
                          ₹24–30L per annum each
                        </p>
                      </td>
                      <td className="px-4 py-3 text-right font-semibold">
                        96 – 120
                      </td>
                    </tr>

                    <tr className="border-b">
                      <td className="px-4 py-3">
                        <p className="font-semibold">Office Staff (1)</p>
                        <p className="text-xs text-black/60">
                          Administrative support
                        </p>
                      </td>
                      <td className="px-4 py-3 text-right font-semibold">
                        4 – 4.5
                      </td>
                    </tr>

                    <tr className="border-b">
                      <td className="px-4 py-3">
                        <p className="font-semibold">Infrastructure</p>
                        <p className="text-xs text-black/60">
                          Website, AI tools, servers
                        </p>
                      </td>
                      <td className="px-4 py-3 text-right font-semibold">
                        10 – 20
                      </td>
                    </tr>

                    <tr style={{ background: "rgba(255, 193, 7, 0.15)" }}>
                      <td className="px-4 py-4 font-bold">
                        Total Financial Commitment
                      </td>
                      <td className="px-4 py-4 text-right font-bold text-lg">
                        ₹125 Lakhs
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/* Income */}
            <motion.div
              className="bg-white rounded-2xl shadow-lg p-6"
              variants={{
                hidden: { opacity: 0, x: 40 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <h4
                className="text-xl font-bold mb-6"
                style={{
                  fontFamily: "'Raleway', sans-serif",
                  color: "#37423b",
                }}
              >
                Income – First Year
              </h4>

              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm">
                  <thead style={{ background: "rgba(95, 207, 128, 0.15)" }}>
                    <tr>
                      <th className="px-4 py-3 text-left">Program</th>
                      <th className="px-4 py-3 text-center">Students</th>
                      <th className="px-4 py-3 text-right">Total (₹L)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="px-4 py-3">2-Year Integrated</td>
                      <td className="px-4 py-3 text-center">30</td>
                      <td className="px-4 py-3 text-right font-semibold">
                        60.0
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-3">1-Year Crash Course</td>
                      <td className="px-4 py-3 text-center">25</td>
                      <td className="px-4 py-3 text-right font-semibold">
                        18.75
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-3">Foundation Program</td>
                      <td className="px-4 py-3 text-center">30</td>
                      <td className="px-4 py-3 text-right font-semibold">
                        15.0
                      </td>
                    </tr>

                    <tr style={{ background: "rgba(95, 207, 128, 0.2)" }}>
                      <td className="px-4 py-4 font-bold">Total Revenue</td>
                      <td className="px-4 py-4 text-center font-bold">85</td>
                      <td className="px-4 py-4 text-right font-bold text-lg">
                        ₹93.75 Lakhs
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Deficit Highlight */}
              <div
                className="rounded-xl p-5"
                style={{
                  background: "rgba(244, 67, 54, 0.12)",
                  borderLeft: "5px solid #f44336",
                }}
              >
                <h5 className="font-bold text-lg mb-2">
                  First Year Deficit: ₹31.25 Lakhs
                </h5>
                <p className="text-sm text-black/70 leading-relaxed">
                  From Year 2 onwards, a projected 10–20% annual growth in
                  revenue and optimized expenditure will progressively bridge
                  the deficit.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Success Metrics */}
      <section id="success" className="bg-white py-20 overflow-hidden" role="region" aria-label="Success metrics and three-year goals">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2
              className="text-sm uppercase tracking-[0.3em] mb-3 section-title-line"
              style={{
                color: "rgba(68, 68, 68, 0.5)",
                fontFamily: "'Raleway', sans-serif",
              }}
            >
              Success Metrics
            </h2>

            <p
              className="text-3xl md:text-4xl font-extrabold"
              style={{
                fontFamily: "'Poppins', sans-serif",
                color: "#37423b",
              }}
            >
              Our Three-Year Goals
            </p>
          </div>

          {/* Goals */}
          <motion.div
            className="grid md:grid-cols-3 gap-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.25 } },
            }}
          >
            {[
              {
                icon: Trophy,
                title: "Top 100 Ranks",
                desc: "Within the first three years, Aspire Top 100 state-level ranks in NEET & JEE examinations.",
                accent: "#ffeb3b",
                bg: "rgba(255, 235, 59, 0.15)",
              },
              {
                icon: Users,
                title: "250+ Students",
                desc: "Scale admissions to 250+ students annually by Year 3 with consistent academic outcomes.",
                accent: "#4caf50",
                bg: "rgba(76, 175, 80, 0.15)",
              },
              {
                icon: Award,
                title: "Leading Centre",
                desc: "Establish PSG LEAP as one of the most trusted and high-performing coaching centres in Tamil Nadu.",
                accent: "#5fcf80",
                bg: "rgba(95, 207, 128, 0.15)",
              },
            ].map((goal, idx) => (
              <motion.div
                key={idx}
                className="rounded-2xl p-8 text-center card-hover"
                style={{
                  background: goal.bg,
                  border: `2px solid ${goal.accent}`,
                  boxShadow: `0 15px 40px ${goal.accent}20`,
                }}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <motion.div
                  className="mx-auto mb-6 flex items-center justify-center rounded-full"
                  style={{
                    width: 80,
                    height: 80,
                    background: `linear-gradient(135deg, white, ${goal.accent}10)`,
                    boxShadow: `0px 10px 30px ${goal.accent}25`,
                    border: `2px solid ${goal.accent}30`,
                  }}
                  whileHover={{ scale: 1.15, rotate: 360 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <goal.icon
                    className="h-10 w-10"
                    style={{ color: goal.accent }}
                  />
                </motion.div>

                <h3
                  className="font-bold text-xl mb-3"
                  style={{
                    fontFamily: "'Raleway', sans-serif",
                    color: "#37423b",
                  }}
                >
                  {goal.title}
                </h3>

                <p className="text-sm leading-relaxed text-black/70">
                  {goal.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="py-20" style={{ background: "#f9f9f9" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Title */}
            <h2
              className="text-3xl md:text-4xl font-extrabold mb-8"
              style={{
                fontFamily: "'Raleway', sans-serif",
                color: "#37423b",
              }}
            >
              Conclusion
            </h2>

            {/* Description */}
            <p
              className="text-lg md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed"
              style={{ color: "#444444" }}
            >
              PSG LEAP Academy will be more than a coaching centre — it will be
              a launch pad for future doctors and engineers, grounded in PSG’s
              tradition of Empowerlence, discipline, and innovation.
            </p>

            {/* Quote */}
            <motion.div
              className="my-12"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3
                className="text-2xl md:text-3xl font-bold"
                style={{
                  color: "#5fcf80",
                  fontFamily: "'Raleway', sans-serif",
                }}
              >
                “PSG LEAP Academy – Learn. Empower. Aspire. Progress.”
              </h3>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-14 text-white" style={{ background: "#060606" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid md:grid-cols-4 gap-10"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Brand */}
            <motion.div
              className="md:col-span-2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 mb-5">
                <motion.div
                  whileHover={{ rotate: -8, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <GraduationCap
                    className="h-9 w-9"
                    style={{ color: "#5fcf80" }}
                  />
                </motion.div>

                <h3
                  className="text-2xl font-bold tracking-wide"
                  style={{ fontFamily: "'Raleway', sans-serif" }}
                >
                  PSG LEAP Academy
                </h3>
              </div>

              <p
                className="mb-4 text-sm leading-relaxed"
                style={{ color: "rgba(255,255,255,0.7)" }}
              >
                A Unit of PSG Institutions, Coimbatore, Tamil Nadu
              </p>

              <p className="text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
                <strong>Email:</strong> info@psgleap.edu.in
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4
                className="font-bold mb-5"
                style={{ fontFamily: "'Raleway', sans-serif" }}
              >
                Quick Links
              </h4>

              <ul className="space-y-3 text-sm">
                {["Home", "About", "Programs", "Pricing", "Financials"].map(
                  (item, idx) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.25 + idx * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <button
                        onClick={() => scrollToSection(item.toLowerCase())}
                        className="transition-all duration-300 hover:text-white hover:translate-x-1"
                        style={{ color: "rgba(255,255,255,0.7)" }}
                      >
                        {item}
                      </button>
                    </motion.li>
                  ),
                )}
              </ul>
            </motion.div>

            {/* Programs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4
                className="font-bold mb-5"
                style={{ fontFamily: "'Raleway', sans-serif" }}
              >
                Programs
              </h4>

              <ul
                className="space-y-3 text-sm"
                style={{ color: "rgba(255,255,255,0.7)" }}
              >
                {[
                  "NEET Coaching",
                  "JEE Coaching",
                  "Foundation Program",
                  "Crash Course",
                  "Test Series",
                ].map((program, idx) => (
                  <motion.li
                    key={program}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.35 + idx * 0.05 }}
                    viewport={{ once: true }}
                    className="hover:text-white transition-colors duration-300"
                  >
                    {program}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Bottom Bar */}
          <motion.div
            className="mt-12 pt-8 text-center"
            style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
              © {new Date().getFullYear()} PSG LEAP Academy. All Rights
              Reserved.
            </p>

            <motion.p
              className="text-xs mt-2 tracking-wider"
              style={{ color: "rgba(255,255,255,0.5)" }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
            >
              Learn. Empower. Aspire. Progress.
            </motion.p>
          </motion.div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 rounded-full text-white transition-all duration-400"
          style={{ background: "#5fcf80", width: "44px", height: "44px" }}
          onMouseEnter={(e) =>
            (e.target.style.background = "rgba(95, 207, 128, 0.8)")
          }
          onMouseLeave={(e) => (e.target.style.background = "#5fcf80")}
        >
          <ChevronUp className="h-6 w-6" />
        </button>
      )}
    </div>
  );
}