import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Target", id: "target" },
  { label: "Programs", id: "programs" },
  { label: "Facilities", id: "facilities" },
  { label: "Technology", id: "technology" },
  { label: "Faculty", id: "faculty" },
  { label: "Pricing", id: "pricing" },
  { label: "Outreach", id: "outreach" },
  { label: "Financials", id: "financials" },
  { label: "Success", id: "success" },
];

const Header = ({ scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);

      const sections = navItems.map((item) => item.id);
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActive(sections[i]);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (id, label) => {
    setActive(label);
    setIsMenuOpen(false);
    scrollToSection(id);
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 w-full z-60 glassmorphism ${
          scrolled
            ? "bg-white/80 backdrop-blur-md shadow-lg"
            : "bg-transparent backdrop-blur-none"
        }`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.6,
          type: "spring",
          stiffness: 100,
          damping: 15,
        }}
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
            <nav
              className="hidden lg:flex items-center space-x-8"
              aria-label="Main navigation"
            >
              {navItems.map((item, idx) => {
                const isActive = active === item.id;
                return (
                  <motion.button
                    key={idx}
                    onClick={() => handleClick(item.id, item.label)}
                    className="nav-button text-sm font-medium"
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    style={{ color: isActive ? "#004AAD" : "#272828" }}
                    whileHover={{ color: "#004AAD" }}
                    aria-current={isActive ? "page" : undefined}
                    aria-label={`Navigate to ${item.label} section`}
                  >
                    {item.label}

                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute left-0 -bottom-2 w-full h-0.5 rounded-full"
                        style={{ background: "#004AAD" }}
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
              className="hidden lg:inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full 
             text-sm font-semibold text-white bg-gradient-to-r from-emerald-500 to-emerald-600 
             shadow-lg shadow-emerald-200/30 transition-all duration-300"
              whileHover={{
                scale: 1.08,
                y: -2,
                boxShadow: "0 10px 25px rgba(16, 185, 129, 0.4)",
              }}
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
              aria-label={
                isMenuOpen ? "Close navigation menu" : "Open navigation menu"
              }
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
          <nav
            className="flex flex-col items-center space-y-4 py-8 nav-font"
            aria-label="Mobile menu options"
          >
            {navItems.map((item, i) => (
              <button
                key={i}
                onClick={() => handleClick(item.id, item.label)}
                className="text-lg font-medium px-6 py-3 nav-button"
                style={{ color: "#d6e6e6" }}
                aria-label={`Navigate to ${item.label} section`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </motion.div>
      )}
    </>
  );
};

export default Header;
