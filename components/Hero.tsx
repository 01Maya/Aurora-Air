'use client';

import { useEffect, useRef, useState } from 'react';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 relative overflow-hidden"
    >
      {/* Background overlay with reduced opacity */}
      <div className="absolute inset-0 bg-white/85 backdrop-blur-sm" />
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-6 md:space-y-8 order-2 md:order-1">
          {/* Badge */}
          <div 
            className={`inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-3 py-1.5 rounded-full text-xs font-semibold hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-500 transform hover:scale-105 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            }`}
            style={{ transitionDelay: '0.1s' }}
          >
            <span className="w-2 h-2 bg-purple-600 rounded-full animate-pulse" />
            New Launch
          </div>

          {/* Heading */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              <span 
                className={`block transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: '0.2s' }}
              >
                Feel Every
              </span>
              <span 
                className={`block bg-gradient-to-r from-purple-600 to-purple-500 bg-clip-text text-transparent transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: '0.4s' }}
              >
                Beat.
              </span>
            </h1>
          </div>

          {/* Description */}
          <p 
            className={`text-gray-600 text-base sm:text-lg leading-relaxed max-w-md transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.3s' }}
          >
            Immersive sound. Powerful performance.
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>Designed for your everyday flow.
          </p>

          {/* CTA Buttons */}
          <div 
            className={`flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.4s' }}
          >
            <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-3.5 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 group relative overflow-hidden shadow-lg hover:shadow-purple-500/50 hover:shadow-xl cursor-pointer">
              <span className="relative z-10 flex items-center gap-2">
                Shop Now
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-purple-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-8 py-3.5 rounded-full font-semibold border-2 border-gray-200 hover:border-purple-600 hover:bg-purple-50 transition-all duration-300 transform hover:scale-105 active:scale-95 hover:shadow-lg hover:shadow-purple-500/20 cursor-pointer">
              Learn More
            </button>
          </div>

          {/* Features Row */}
          <div 
            className={`grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-6 sm:pt-8 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.5s' }}
          >
            {[
              { icon: '🔊', label: 'Active Noise\nCancellation', delay: 0 },
              { icon: '🔋', label: '20hrs Battery\nLife', delay: 0.05 },
              { icon: '⚡', label: 'Fast\nCharging', delay: 0.1 },
              { icon: '📡', label: 'Bluetooth\n5.3', delay: 0.15 },
            ].map((feature, idx) => (
              <div
                key={idx}
                className={`space-y-2 p-3 rounded-xl hover:bg-purple-50/80 transition-all duration-300 transform hover:scale-105 hover:shadow-md cursor-pointer group ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${0.6 + feature.delay}s` }}
              >
                <div className="text-3xl sm:text-4xl group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                <p className="font-semibold text-xs text-gray-900 leading-tight whitespace-pre-line">{feature.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Content - Product Image */}
        <div 
          className={`relative h-80 sm:h-[30rem] md:h-full min-h-80 sm:min-h-[30rem] md:min-h-[34rem] flex items-center justify-center order-1 md:order-2 transition-all duration-1000 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}
          style={{ transitionDelay: '0.3s' }}
        >
          {/* Animated glow effect */}
          <div 
            className="absolute inset-0 bg-gradient-to-br from-purple-200/40 via-purple-100/20 to-transparent rounded-full blur-3xl"
            style={{ animation: 'pulse 4s ease-in-out infinite' }}
          />

          {/* Wave ripple animations */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div 
              className="absolute w-20 h-20 sm:w-28 sm:h-28 border-2 border-purple-300/40 rounded-full"
              style={{ animation: 'waveRipple1 2s ease-out infinite' }}
            />
            <div 
              className="absolute w-20 h-20 sm:w-28 sm:h-28 border-2 border-purple-200/30 rounded-full"
              style={{ animation: 'waveRipple2 2s ease-out 0.4s infinite' }}
            />
            <div 
              className="absolute w-20 h-20 sm:w-28 sm:h-28 border-2 border-purple-100/20 rounded-full"
              style={{ animation: 'waveRipple3 2s ease-out 0.8s infinite' }}
            />
          </div>

          {/* Product - Purple Earbuds */}
          <div 
            className="relative z-10 group cursor-pointer"
            style={{ animation: 'float 4s ease-in-out infinite' }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-300/30 to-purple-200/30 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300 group-hover:scale-110" />
            <div className="w-72 h-72 sm:w-80 sm:h-80 md:w-[28rem] md:h-[28rem] bg-gradient-to-br from-purple-200 to-purple-300 rounded-3xl shadow-2xl flex items-center justify-center transform transition-all duration-500 group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-purple-500/40 relative overflow-hidden">
              <img 
                src="/hero f.png" 
                alt="Purple Earbuds" 
                className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 rounded-3xl border-2 border-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>

          {/* Accent dots */}
          <div 
            className={`absolute top-10 right-10 z-20 w-2 h-2 sm:w-3 sm:h-3 bg-purple-400 rounded-full transition-all duration-700 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ animation: 'pulse 2s ease-in-out infinite', transitionDelay: '0.6s' }}
          />
          <div 
            className={`absolute bottom-12 left-12 z-20 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-300 rounded-full transition-all duration-700 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ animation: 'pulse 2s ease-in-out 0.5s infinite', transitionDelay: '0.8s' }}
          />
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }

        @keyframes waveRipple1 {
          0% { width: 40px; height: 40px; opacity: 1; }
          100% { width: 150px; height: 150px; opacity: 0; }
        }

        @keyframes waveRipple2 {
          0% { width: 40px; height: 40px; opacity: 1; }
          100% { width: 180px; height: 180px; opacity: 0; }
        }

        @keyframes waveRipple3 {
          0% { width: 40px; height: 40px; opacity: 1; }
          100% { width: 210px; height: 210px; opacity: 0; }
        }

        @media (min-width: 640px) {
          @keyframes waveRipple1 {
            0% { width: 60px; height: 60px; opacity: 1; }
            100% { width: 200px; height: 200px; opacity: 0; }
          }

          @keyframes waveRipple2 {
            0% { width: 60px; height: 60px; opacity: 1; }
            100% { width: 240px; height: 240px; opacity: 0; }
          }

          @keyframes waveRipple3 {
            0% { width: 60px; height: 60px; opacity: 1; }
            100% { width: 280px; height: 280px; opacity: 0; }
          }
        }
      `}</style>
    </section>
  );
}
