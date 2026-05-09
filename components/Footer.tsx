'use client';

import { useEffect, useRef, useState } from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <footer 
      ref={footerRef}
      className="bg-gradient-to-br from-purple-900 via-purple-950 to-purple-950 text-white pt-16 sm:pt-20 pb-8 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-purple-700/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-purple-600/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mb-12">
          {/* Brand */}
          <div 
            className={`col-span-2 md:col-span-1 space-y-4 group transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.1s' }}
          >
            <div className="flex items-center gap-2 group-hover:scale-105 transition-transform duration-300 cursor-pointer w-fit">
              <div className="w-7 h-7 bg-gradient-to-br from-purple-300 to-purple-500 rounded flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15h4v-2h-4v2zm0-4h4V7h-4v6z" />
                </svg>
              </div>
              <span className="font-bold text-lg">Aurora</span>
            </div>
            <p className="text-purple-200 text-sm leading-relaxed font-medium">
              Elevating everyday sound with style.
            </p>
          </div>

          {/* Shop */}
          <div 
            className={`space-y-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.2s' }}
          >
            <h4 className="font-bold text-white text-base sm:text-lg">Shop</h4>
            <ul className="space-y-2 sm:space-y-3 text-sm text-purple-200">
              {['All Products', 'Best Sellers', 'New Arrivals'].map((item, idx) => (
                <li key={idx}>
                  <a href="#" className="hover:text-white transition-all duration-300 inline-flex items-center gap-2 group/link">
                    <span className="opacity-0 group-hover/link:opacity-100 transition-opacity duration-300 -ml-4 group-hover/link:ml-0">→</span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div 
            className={`space-y-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.3s' }}
          >
            <h4 className="font-bold text-white text-base sm:text-lg">Company</h4>
            <ul className="space-y-2 sm:space-y-3 text-sm text-purple-200">
              {['About Us', 'Careers', 'Blog', 'Press'].map((item, idx) => (
                <li key={idx}>
                  <a href="#" className="hover:text-white transition-all duration-300 inline-flex items-center gap-2 group/link">
                    <span className="opacity-0 group-hover/link:opacity-100 transition-opacity duration-300 -ml-4 group-hover/link:ml-0">→</span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div 
            className={`space-y-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.4s' }}
          >
            <h4 className="font-bold text-white text-base sm:text-lg">Support</h4>
            <ul className="space-y-2 sm:space-y-3 text-sm text-purple-200">
              {['FAQs', 'Shipping & Delivery', 'Returns'].map((item, idx) => (
                <li key={idx}>
                  <a href="#" className="hover:text-white transition-all duration-300 inline-flex items-center gap-2 group/link">
                    <span className="opacity-0 group-hover/link:opacity-100 transition-opacity duration-300 -ml-4 group-hover/link:ml-0">→</span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-purple-800 pt-8 pb-4">
          {/* Social Links */}
          <div 
            className={`flex justify-center gap-3 sm:gap-4 mb-8 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.5s' }}
          >
            {[
              { name: 'Facebook', icon: 'M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z' },
              { name: 'Twitter', icon: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z' },
              { name: 'Instagram', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z' },
              { name: 'YouTube', icon: 'M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' },
            ].map((social, idx) => (
              <a
                key={idx}
                href="#"
                className="w-10 h-10 rounded-full bg-purple-800/50 hover:bg-purple-700 flex items-center justify-center transition-all duration-300 hover:scale-110 transform hover:-translate-y-1 group relative overflow-hidden"
                aria-label={social.name}
              >
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d={social.icon} />
                </svg>
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div 
            className={`text-center space-y-3 text-sm text-purple-300 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.6s' }}
          >
            <p className="font-medium">© {currentYear} Aurora. All rights reserved.</p>
            <div className="flex justify-center gap-4 text-xs">
              <a href="#" className="hover:text-white transition-colors duration-300 hover:underline">
                Privacy Policy
              </a>
              <span className="text-purple-500">•</span>
              <a href="#" className="hover:text-white transition-colors duration-300 hover:underline">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
