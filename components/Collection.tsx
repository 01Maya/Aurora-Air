'use client';

import { useState, useEffect, useRef } from 'react';

export default function Collection() {
  const [selectedColor, setSelectedColor] = useState('purple');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const colors = [
    { name: 'purple', image: '/purple.png', label: 'Lavender' },
    { name: 'black', image: '/black.png', label: 'Midnight' },
    { name: 'white', image: '/white.png', label: 'Pearl' },
    { name: 'pink', image: '/pink.png', label: 'Blush' },
  ];

  const colorGradients = {
    purple: 'from-purple-300 to-purple-500',
    black:  'from-purple-300 to-purple-500',
    white:  'from-purple-300 to-purple-500',
    pink:  'from-purple-300 to-purple-500',
  };

  const colorSwatches = {
    purple: 'linear-gradient(135deg, #d8b4fe 0%, #c084fc 100%)',
    black: 'linear-gradient(135deg, #2d3748 0%, #1a202c 100%)',
    white: 'linear-gradient(135deg, #ffffff 0%, #f3f4f6 100%)',
    pink: 'linear-gradient(135deg, #fbcfe8 0%, #f472b6 100%)',
  };

  return (
    <section
      id="collection"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-16 md:py-20 relative"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8 order-2 md:order-1">
            <div className="space-y-4">
              <p 
                className={`text-sm font-bold text-purple-600 tracking-wider transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                }`}
                style={{ transitionDelay: '0.1s' }}
              >
                OUR COLLECTION
              </p>
              <h2 
                className={`text-4xl sm:text-5xl font-bold text-gray-900 leading-tight transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                }`}
                style={{ transitionDelay: '0.2s' }}
              >
                Pure Sound.
                <br />
                <span className="bg-gradient-to-r from-purple-600 to-purple-500 bg-clip-text text-transparent">Beautifully Crafted.</span>
              </h2>
            </div>

            <p 
              className={`text-gray-600 text-base sm:text-lg leading-relaxed transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
              style={{ transitionDelay: '0.3s' }}
            >
              Choose your style. Express your vibe.
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>Made to move with you.
            </p>

            <div 
              className={`space-y-4 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
              style={{ transitionDelay: '0.4s' }}
            >
              <p className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-600 to-purple-500 bg-clip-text text-transparent">$129.00</p>
              <p className="text-sm font-semibold text-gray-900">Color: {colors.find(c => c.name === selectedColor)?.label || 'Lavender'}</p>

              {/* Color Selector */}
              <div className="flex gap-3">
                {colors.map((color, idx) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`w-8 h-8 rounded-full transition-all duration-200 hover:scale-110 active:scale-95 ${
                      selectedColor === color.name
                        ? `ring-2 ring-offset-2 ring-purple-600 scale-110 shadow-lg shadow-purple-500/50`
                        : `hover:shadow-md cursor-pointer transform`
                    } ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}
                    title={color.label}
                    style={{ 
                      background: colorSwatches[color.name as keyof typeof colorSwatches],
                    }}
                  />
                ))}
              </div>
            </div>

            <button 
              className={`w-full sm:w-auto bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-3.5 rounded-full font-semibold transition-all duration-500 transform hover:scale-105 active:scale-95 inline-flex items-center justify-center gap-2 group relative overflow-hidden shadow-lg hover:shadow-purple-500/50 hover:shadow-xl ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '0.6s' }}
            >
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              <span className="relative z-10">Add to Cart</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-purple-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>

          {/* Right Content - Product Showcase */}
          <div className="relative space-y-6 md:space-y-8 order-1 md:order-2">
            {/* Main Product */}
            <div 
              className={`relative h-64 sm:h-80 md:h-96 flex items-center justify-center group transition-all duration-1000 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
              }`}
              style={{ transitionDelay: '0.2s' }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-100/50 to-purple-50/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500 group-hover:scale-110" />
              <div 
                className={`w-56 h-44 sm:w-72 sm:h-56 md:w-80 md:h-64 bg-gradient-to-br ${colorGradients[selectedColor as keyof typeof colorGradients] || colorGradients.purple} rounded-3xl shadow-2xl flex items-center justify-center transform transition-all duration-200 ease-out hover:scale-105 active:scale-95 hover:shadow-2xl hover:shadow-purple-500/40 group relative overflow-hidden`}
              >
                <img 
                  src={colors.find(c => c.name === selectedColor)?.image || colors[0].image}
                  alt={colors.find(c => c.name === selectedColor)?.label || 'Purple Earbuds'}
                  className="w-full h-full object-contain group-hover:scale-110 transition-all duration-500 ease-out"
                />
                <div className="absolute inset-0 rounded-3xl border-2 border-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>

            {/* Color Variants */}
            <div className="grid grid-cols-4 gap-2 sm:gap-3">
              {colors.map((color, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedColor(color.name)}
                  className={`p-1.5 sm:p-2 rounded-xl border-2 transition-all duration-200 transform hover:scale-105 active:scale-95 cursor-pointer group relative ${
                    selectedColor === color.name
                      ? 'border-purple-600 bg-purple-50 shadow-lg shadow-purple-500/30 scale-105'
                      : 'border-gray-200 hover:border-purple-400 hover:shadow-md'
                  } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                >
                  <div className={`w-full aspect-square bg-gradient-to-br ${colorGradients[color.name as keyof typeof colorGradients]} rounded-lg flex items-center justify-center relative overflow-hidden`}>
                    <img 
                      src={color.image}
                      alt={color.label}
                      className="w-full h-full object-contain group-hover:scale-110 transition-all duration-300"
                    />
                    <div className="absolute inset-0 rounded-lg border border-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <p className="text-xs font-semibold text-gray-600 mt-1.5 sm:mt-2 text-center">{color.label}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
