'use client';

import { useEffect, useRef, useState } from 'react';

export default function Offers() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="offers"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-16 md:py-20 relative"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Title */}
        <div className="mb-12 md:mb-16 space-y-4 text-center">
          <h2 
            className={`text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.05s' }}
          >
            Why Choose Us
          </h2>
          <p 
            className={`text-gray-600 text-base sm:text-lg max-w-2xl mx-auto transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.1s' }}
          >
            Premium quality, unbeatable prices, and world-class customer experience.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {/* Card 1 - 30% OFF - Large */}
          <div 
            className={`sm:col-span-2 sm:row-span-2 group relative rounded-3xl overflow-hidden transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.1s' }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-purple-600 to-purple-700" />
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute top-0 right-0 w-48 sm:w-96 h-48 sm:h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:blur-2xl transition-all duration-500" />
            
            <div className="relative p-8 sm:p-12 h-full min-h-[280px] sm:min-h-[400px] flex flex-col justify-between text-white z-10 group-hover:scale-[1.02] transition-transform duration-300 origin-center">
              <div className="space-y-4 sm:space-y-6">
                <p className="text-sm font-semibold opacity-90 animate-pulse">Limited Time Offer</p>
                <h3 
                  className={`text-5xl sm:text-6xl md:text-7xl font-bold transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: '0.2s' }}
                >
                  30% OFF
                </h3>
                <p className="text-base sm:text-lg opacity-90 font-medium">On All Earbuds</p>
              </div>
              <button className="bg-white text-purple-600 px-6 py-3 rounded-full font-bold hover:bg-purple-50 transition-all duration-300 text-sm w-fit group/btn hover:shadow-xl transform hover:scale-110 active:scale-95">
                Shop Now
              </button>
            </div>
          </div>

          {/* Card 2 - Warranty */}
          <div 
            className={`group transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.2s' }}
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 h-full border-2 border-gray-100 hover:border-purple-400 hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:bg-gradient-to-br hover:from-purple-50 hover:to-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-purple-200/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500" />
              <div className="relative">
                <p className="text-3xl sm:text-4xl mb-3 group-hover:scale-125 transition-transform duration-300 transform group-hover:-rotate-12">🛡️</p>
                <h4 className="font-bold text-gray-900 mb-2 text-base sm:text-lg">2 Year Warranty</h4>
                <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">Full coverage included</p>
              </div>
            </div>
          </div>

          {/* Card 3 - New Colors */}
          <div 
            className={`group transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.3s' }}
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 h-full border-2 border-gray-100 hover:border-purple-400 hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:bg-gradient-to-br hover:from-purple-50 hover:to-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-purple-200/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500" />
              <div className="relative">
                <p className="text-3xl sm:text-4xl mb-3 group-hover:scale-125 transition-transform duration-300 transform group-hover:rotate-12">🎨</p>
                <h4 className="font-bold text-gray-900 mb-2 text-base sm:text-lg">New Colors Available</h4>
                <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">Explore new pastel editions.</p>
              </div>
            </div>
          </div>

          {/* Card 4 - Student Discount */}
          <div 
            className={`group transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.4s' }}
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 h-full border-2 border-gray-100 hover:border-purple-400 hover:shadow-xl transition-all duration-500 transform hover:scale-105 active:scale-95 hover:bg-gradient-to-br hover:from-purple-50 hover:to-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-purple-200/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500" />
              <div className="relative">
                <p className="text-3xl sm:text-4xl mb-3 group-hover:scale-125 transition-transform duration-300 transform group-hover:rotate-12">🎓</p>
                <h4 className="font-bold text-gray-900 mb-2 text-base sm:text-lg">Student Discount</h4>
                <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">Extra 10% off</p>
              </div>
            </div>
          </div>

          {/* Card 6 - Premium Materials */}
          <div 
            className={`group transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.6s' }}
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 h-full border-2 border-gray-100 hover:border-purple-400 hover:shadow-xl transition-all duration-500 transform hover:scale-105 active:scale-95 hover:bg-gradient-to-br hover:from-purple-50 hover:to-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-purple-200/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500" />
              <div className="relative">
                <p className="text-3xl sm:text-4xl mb-3 group-hover:scale-125 transition-transform duration-300 transform group-hover:-rotate-12">✨</p>
                <h4 className="font-bold text-gray-900 mb-2 text-base sm:text-lg">Premium Quality</h4>
                <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">Built to last years</p>
              </div>
            </div>
          </div>

          {/* Card 7 - Fast Shipping */}
          <div 
            className={`group transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.65s' }}
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 h-full border-2 border-gray-100 hover:border-purple-400 hover:shadow-xl transition-all duration-500 transform hover:scale-105 active:scale-95 hover:bg-gradient-to-br hover:from-purple-50 hover:to-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-purple-200/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500" />
              <div className="relative">
                <p className="text-3xl sm:text-4xl mb-3 group-hover:scale-125 transition-transform duration-300 transform group-hover:rotate-12">🚀</p>
                <h4 className="font-bold text-gray-900 mb-2 text-base sm:text-lg">Fast Shipping</h4>
                <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">Delivered in 2-3 days</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
