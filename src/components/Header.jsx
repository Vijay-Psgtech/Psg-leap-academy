import React,{ useState, useEffect } from 'react'

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, section) => {
    e.preventDefault();
    const element = document.getElementById(section.toLowerCase());
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = ['Home', 'About', 'Target', 'Programs', 'Facilities', 'Technology', 'Faculty', 'Pricing', 'Outreach', 'Financials', 'Success'];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white shadow-lg py-3' : 'bg-white/95 backdrop-blur-sm py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="text-xl lg:text-2xl font-bold tracking-wider uppercase text-[#0D5BA9] transition-all hover:scale-105">PSG LEAP ACADEMY</a>
          <nav className="hidden xl:flex items-center space-x-8">
            {navItems.map((item, i) => (
              <a key={i} href={`#${item.toLowerCase()}`} onClick={(e) => scrollToSection(e, item)} className="text-gray-800 hover:text-[#0D5BA9] transition-all duration-300 text-md font-medium relative group">
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0D5BA9] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>
          <a href="#programs" onClick={(e) => scrollToSection(e, 'programs')} className="hidden xl:block bg-[#0D5BA9]/70 text-white px-6 py-2 rounded-full hover:bg-[#0D5BA9] hover:shadow-lg transition-all duration-300 text-sm transform hover:scale-105">Enroll</a>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="xl:hidden text-3xl transition-transform duration-300 hover:scale-110">{isMobileMenuOpen ? '✕' : '☰'}</button>
        </div>
        <div className={`xl:hidden overflow-hidden transition-all duration-500 ${isMobileMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
          <div className="bg-white border-t py-4 space-y-2">
            {navItems.map((item, i) => (
              <a key={i} href={`#${item.toLowerCase()}`} onClick={(e) => scrollToSection(e, item)} className="block py-2 text-gray-800 hover:text-[#0D5BA9] hover:translate-x-2 transition-all duration-300">{item}</a>
            ))}
          </div>
        </div>
      </div>
    </header>

  )
}

export default Header