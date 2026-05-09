'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

const testimonials = [
  {
    name: 'Ananya R.',
    rating: 5,
    text: 'The sound quality is next level. Noise cancellation is amazing!',
    avatar: '👩',
  },
  {
    name: 'Rohit M.',
    rating: 5,
    text: 'Super comfortable and the battery lasts all day. Totally worth it!',
    avatar: '👨',
  },
  {
    name: 'Kavya S.',
    rating: 5,
    text: 'Sleek design, premium feel, and great performance. Highly recommend!',
    avatar: '👩',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

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

  return (
    <section
      id="reviews"
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
            WHAT OUR CUSTOMERS SAY
          </p>
          <h2 
            className={`text-4xl sm:text-5xl font-bold text-gray-900 leading-tight transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.2s' }}
          >
            <span className="bg-gradient-to-r from-purple-600 to-purple-500 bg-clip-text text-transparent">Loved by Thousands</span>
          </h2>
        </div>

        {/* Testimonials Carousel */}
        <div 
          className={`max-w-3xl mx-auto transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '0.3s' }}
        >
          <div className="relative">
            {/* Slide Container */}
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-700 ease-out"
                style={{ transform: `translateX(-${current * 100}%)` }}
              >
                {testimonials.map((testimonial, idx) => (
                  <div
                    key={idx}
                    className="min-w-full px-2 sm:px-4"
                  >
                    <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 sm:p-12 text-center border-2 border-gray-100 shadow-xl hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 hover:border-purple-400 transform hover:scale-[1.02]">
                      <div className="text-5xl sm:text-6xl mb-4 sm:mb-6 inline-block transform transition-transform duration-300 hover:scale-125 hover:rotate-12">{testimonial.avatar}</div>
                      <h4 className="font-bold text-gray-900 text-lg sm:text-xl mb-3 transition-all duration-300">{testimonial.name}</h4>

                      {/* Stars */}
                      <div className="flex justify-center gap-1 mb-4 sm:mb-6">
                        {Array(testimonial.rating)
                          .fill(0)
                          .map((_, i) => (
                            <span
                              key={i}
                              className="text-yellow-400 text-xl sm:text-2xl transition-all duration-300 hover:scale-125 hover:rotate-12 inline-block"
                            >
                              ⭐
                            </span>
                          ))}
                      </div>

                      <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-medium transition-colors duration-300 hover:text-gray-700">
                        &ldquo;{testimonial.text}&rdquo;
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 md:translate-x-0 z-10 bg-gradient-to-r from-purple-600 to-purple-700 text-white p-2.5 sm:p-3 rounded-full hover:bg-purple-800 transition-all duration-300 hover:scale-110 active:scale-95 shadow-lg hover:shadow-purple-500/40 group"
              aria-label="Previous testimonial"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 md:translate-x-0 z-10 bg-gradient-to-r from-purple-600 to-purple-700 text-white p-2.5 sm:p-3 rounded-full hover:bg-purple-800 transition-all duration-300 hover:scale-110 active:scale-95 shadow-lg hover:shadow-purple-500/40 group"
              aria-label="Next testimonial"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 sm:gap-3 mt-8 sm:mt-12">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`rounded-full transition-all duration-500 transform hover:scale-125 ${
                  idx === current
                    ? 'w-8 sm:w-10 h-2.5 sm:h-3 bg-gradient-to-r from-purple-600 to-purple-500 shadow-lg'
                    : 'w-2.5 sm:w-3 h-2.5 sm:h-3 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
