'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Collection', href: '#collection' },
  { name: 'Features', href: '#features' },
  { name: 'Offers', href: '#offers' },
  { name: 'Reviews', href: '#reviews' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20);

    // Detect active section
    const sections = navLinks.map((link) => link.href.replace('#', ''));
    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveSection(section);
          break;
        }
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.getElementById(href.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-out ${
        isScrolled ? 'bg-white/90 backdrop-blur-lg shadow-lg' : 'bg-white/40 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        {/* Logo */}
        <Link 
          href="#home" 
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center gap-2 group relative z-10 transition-all duration-300 hover:scale-110"
        >
          <div className="w-7 h-7 bg-gradient-to-br from-purple-400 to-purple-600 rounded flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-500 group-hover:shadow-lg group-hover:shadow-purple-500/40">
            <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15h4v-2h-4v2zm0-4h4V7h-4v6z" />
            </svg>
          </div>
          <span className="font-bold text-gray-900 tracking-tight group-hover:text-purple-600 transition-colors duration-300">Aurora</span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link, idx) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={idx}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-sm font-medium px-3 lg:px-4 py-2 rounded-full transition-all duration-500 ease-out relative group overflow-hidden ${
                  isActive
                    ? 'text-white bg-gradient-to-r from-purple-600 to-purple-700 shadow-lg shadow-purple-500/40'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <span className="relative z-10 flex items-center gap-1">
                  {isActive && <span className="inline-block w-1.5 h-1.5 bg-white rounded-full animate-pulse" />}
                  {link.name}
                </span>
                {!isActive && (
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-purple-500 group-hover:w-full transition-all duration-500" />
                )}
              </a>
            );
          })}
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button 
            className="hidden sm:flex p-2.5 hover:bg-purple-100 rounded-lg transition-all duration-300 transform hover:scale-110 hover:shadow-md group relative overflow-hidden"
            aria-label="Shopping cart"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400/0 to-purple-400/0 group-hover:from-purple-400/10 group-hover:to-purple-300/5 transition-all duration-300 rounded-lg" />
            <svg className="w-5 h-5 text-gray-700 relative z-10 group-hover:text-purple-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </button>
          
          <button className="hidden md:block bg-gradient-to-r from-purple-600 to-purple-700 text-white px-5 lg:px-6 py-2.5 rounded-full font-semibold hover:shadow-xl hover:shadow-purple-500/50 transition-all duration-500 transform hover:scale-110 active:scale-95 text-sm relative overflow-hidden group">
            <span className="relative z-10 flex items-center gap-2 transition-all duration-300 group-hover:translate-x-1">
              Buy Now
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-purple-800 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2.5 hover:bg-purple-100 rounded-lg transition-all duration-300 transform hover:scale-110 group relative overflow-hidden"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400/0 to-purple-400/0 group-hover:from-purple-400/10 group-hover:to-purple-300/5 transition-all duration-300 rounded-lg" />
            <div className="relative z-10 flex flex-col gap-1.5 w-5 h-5 justify-center">
              <span className={`block w-full h-0.5 bg-gray-700 rounded transition-all duration-300 origin-center ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-full h-0.5 bg-gray-700 rounded transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0 scale-0' : ''}`} />
              <span className={`block w-full h-0.5 bg-gray-700 rounded transition-all duration-300 origin-center ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden fixed inset-x-0 top-[56px] left-0 right-0 bg-gradient-to-b from-purple-100 to-purple-50 shadow-lg ${
          isMobileMenuOpen ? 'block' : 'hidden'
        }`}
        style={{
          maxHeight: isMobileMenuOpen ? 'calc(100vh - 56px)' : '0',
          overflow: 'auto',
          transition: 'max-height 0.3s ease-out',
          zIndex: 40,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 space-y-2">
          {navLinks.map((link, idx) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={idx}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-lg'
                    : 'text-gray-700 hover:bg-purple-200/50'
                }`}
              >
                <span className="flex items-center gap-3">
                  {isActive && <span className="inline-block w-2 h-2 bg-white rounded-full" />}
                  {link.name}
                </span>
              </a>
            );
          })}

          {/* Mobile Buy Now Button */}
          <button 
            className="w-full mt-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Buy Now
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}
