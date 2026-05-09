'use client';

import { useState, useEffect, useRef } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail('');
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-16 md:py-20 relative"
    >
      <div className="max-w-4xl mx-auto w-full">
        {/* Centered Content Container */}
        <div className="flex flex-col items-center text-center">
          {/* Icon */}
          <div 
            className={`w-14 h-14 md:w-16 md:h-16 bg-purple-100 rounded-2xl flex items-center justify-center text-2xl md:text-3xl mb-6 md:mb-8 transform transition-all duration-700 hover:scale-110 hover:rotate-12 hover:shadow-lg cursor-pointer ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            }`}
            style={{ transitionDelay: '0.1s' }}
          >
            <svg className="w-7 h-7 md:w-8 md:h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>

          {/* Heading */}
          <h2 
            className={`text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-4 md:mb-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.2s' }}
          >
            Stay in the{' '}
            <span className="bg-gradient-to-r from-purple-600 to-purple-500 bg-clip-text text-transparent">
              Loop
            </span>
          </h2>

          {/* Description */}
          <p 
            className={`text-base sm:text-lg text-gray-600 leading-relaxed font-medium max-w-md mb-8 md:mb-10 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.3s' }}
          >
            Subscribe to get the latest updates, exclusive offers, and product announcements.
          </p>

          {/* Form */}
          <form 
            onSubmit={handleSubmit} 
            className={`w-full max-w-md transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.4s' }}
          >
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-0 sm:bg-white sm:rounded-full sm:border-2 sm:border-gray-200 sm:p-1.5 sm:focus-within:border-purple-500 sm:transition-all sm:duration-300 sm:shadow-lg sm:shadow-purple-500/5 sm:hover:shadow-purple-500/10">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-5 py-3.5 sm:py-3 rounded-full sm:rounded-full border-2 sm:border-0 border-gray-200 focus:border-purple-500 sm:focus:border-0 focus:outline-none bg-white text-gray-900 placeholder:text-gray-400 font-medium sm:flex-1 transition-all duration-300"
              />
              <button
                type="submit"
                disabled={submitted}
                className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-3.5 sm:py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/40 transition-all duration-300 transform hover:scale-105 active:scale-95 relative overflow-hidden group disabled:opacity-80 disabled:cursor-not-allowed whitespace-nowrap"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {submitted ? (
                    <>
                      <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Subscribed!
                    </>
                  ) : (
                    <>
                      Subscribe
                      <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </>
                  )}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-purple-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
              </button>
            </div>

            {submitted && (
              <p className="text-green-600 text-sm mt-4 font-medium animate-fadeIn">
                Thanks for subscribing! Check your email for exclusive offers.
              </p>
            )}
          </form>

          {/* Quick Links */}
          <div 
            className={`mt-10 md:mt-12 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.5s' }}
          >
            <p className="text-gray-700 font-semibold mb-4 text-sm">Why Us?</p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { name: 'Features', href: '#features' },
                { name: 'Offers', href: '#offers' },
                { name: 'Reviews', href: '#reviews' },
              ].map((link, idx) => (
                <a 
                  key={idx}
                  href={link.href} 
                  className="text-purple-600 hover:text-purple-700 text-sm font-medium px-4 py-2 rounded-full bg-purple-50 hover:bg-purple-100 transition-all duration-300 transform hover:scale-105 hover:shadow-md"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
