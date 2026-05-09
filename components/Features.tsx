'use client';

import { useEffect, useRef, useState } from 'react';

const features = [
  {
    icon: '🔊',
    title: 'Active Noise Cancellation',
    description: 'Block distractions and stay in your zone.',
  },
  {
    icon: '🔋',
    title: '20 Hour Battery Life',
    description: 'All-day playtime with the charging case.',
  },
  {
    icon: '⚡',
    title: 'Fast Charging',
    description: '30 mins charging = 2 hours playtime.',
  },
  {
    icon: '📱',
    title: 'Bluetooth 5.3 Connectivity',
    description: 'Seamless connection, stable and fast.',
  },
  {
    icon: '👆',
    title: 'Touch Controls',
    description: 'Easy control with a simple tap.',
  },
  {
    icon: '💧',
    title: 'IPX4 Water Resistant',
    description: 'Sweat and splash resistant design.',
  },
];

export default function Features() {
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
      id="features"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-16 md:py-20 relative"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="text-center space-y-4 sm:space-y-6 mb-12 md:mb-20">
          <p 
            className={`text-sm font-bold text-purple-600 tracking-wider uppercase transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.1s' }}
          >
            FEATURES
          </p>
          <h2 
            className={`text-4xl sm:text-5xl font-bold text-gray-900 leading-tight transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.2s' }}
          >
            Everything You Need.
            <br />
            <span className="bg-gradient-to-r from-purple-600 to-purple-500 bg-clip-text text-transparent">More You&apos;ll Love.</span>
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`group transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${0.3 + idx * 0.08}s` }}
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 h-full border-2 border-gray-100 transition-all duration-500 transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 hover:border-purple-400 hover:bg-gradient-to-br hover:from-purple-50 hover:to-white cursor-pointer group/card relative overflow-hidden">
                {/* Animated background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-purple-500/0 group-hover/card:from-purple-400/10 group-hover/card:to-purple-300/5 transition-all duration-500 rounded-2xl pointer-events-none" />
                
                <div className="relative z-10 space-y-3 sm:space-y-4">
                  <div className="text-4xl sm:text-5xl group-hover/card:text-5xl sm:group-hover/card:text-6xl transition-all duration-300 transform group-hover/card:scale-110 group-hover/card:-rotate-12 origin-left">
                    {feature.icon}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 transition-all duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed group-hover/card:text-gray-700 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>

                {/* Border animation */}
                <div className="absolute top-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-transparent group-hover/card:w-full transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
