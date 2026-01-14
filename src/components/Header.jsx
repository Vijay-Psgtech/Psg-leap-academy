import React,{ useState, useEffect } from 'react'

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Home', 'About', 'Target', 'Programs', 'Facilities', 'Technology', 'Faculty', 'Pricing', 'Outreach', 'Financials', 'Success'];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${isScrolled ? 'bg-white shadow-lg' : 'bg-white'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <a href="#hero" className="text-xl lg:text-2xl font-bold tracking-wider uppercase text-emerald-500">PSG LEAP ACADEMY</a>
          <nav className="hidden xl:flex items-center space-x-8">
            {navItems.map((item, i) => (
              <a key={i} href={`#${item.toLowerCase()}`} className="text-gray-800 hover:text-emerald-500 transition-colors text-md font-medium">{item}</a>
            ))}
          </nav>
          <a href="#programs" className="hidden xl:block bg-emerald-500 text-white px-6 py-2 rounded-full hover:bg-emerald-600 text-sm">Enroll</a>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="xl:hidden text-3xl">☰</button>
        </div>
        {isMobileMenuOpen && (
          <div className="xl:hidden bg-white border-t py-4">
            {navItems.map((item, i) => (
              <a key={i} href={`#${item.toLowerCase()}`} onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-gray-800 hover:text-emerald-500">{item}</a>
            ))}
          </div>
        )}
      </div>
    </header>

  )
}

export default Header