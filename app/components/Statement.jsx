"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Statement() {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from(containerRef.current, {
      y: 50,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%",
        toggleActions: "play none none reverse"
      }
    });
  });

  return (
      <section ref={containerRef} className="w-full min-h-screen flex items-center justify-center bg-white relative z-10 px-6 md:px-12 py-20 overflow-hidden border-t-4 border-black">
        {/* Subtle Background Doodles */}
        <div className="absolute top-20 left-20 opacity-20 hidden md:block">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 0 V40 M0 20 H40" stroke="black" strokeWidth="3" />
          </svg>
        </div>
        <div className="absolute bottom-32 right-20 opacity-20 hidden md:block">
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="30" cy="30" r="28" stroke="black" strokeWidth="3" strokeDasharray="8 8" />
          </svg>
        </div>
        <div className="absolute top-1/3 right-10 opacity-20 hidden lg:block text-orange-500">
          <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M10 25 L40 25 M25 10 L25 40 M15 15 L35 35 M15 35 L35 15" stroke="currentColor" strokeWidth="3" />
          </svg>
        </div>

        <div className="max-w-[1200px] mx-auto text-center flex flex-col items-center justify-center relative">
          <h2 className="text-[3.5rem] sm:text-[5rem] md:text-[7rem] lg:text-[8.5rem] font-black uppercase tracking-tighter leading-[0.85] text-black mb-8 md:mb-12 transition-all hover:scale-[1.02] duration-700">
            I Build <br />
            <span className="text-orange-500 relative inline-block">
              Ideas
              {/* Scribble Underline */}
              <svg className="absolute -bottom-4 md:-bottom-8 left-0 w-full h-8 md:h-12 text-black opacity-90" viewBox="0 0 200 40" preserveAspectRatio="none">
                <path d="M5 25 Q 50 0, 100 20 T 195 15" stroke="currentColor" strokeWidth="6" strokeLinecap="round" fill="none" />
              </svg>
            </span> <br />
            Into <br />
            <span className="text-orange-500">Impactful</span> <br />
            Experiences
          </h2>
          
          <p className="text-lg md:text-2xl lg:text-3xl font-bold text-gray-500 max-w-4xl leading-relaxed tracking-wide mt-6 md:mt-12 px-4 shadow-sm">
            Computer Engineering student, strategist, and sponsorship leader driven by a vision to align technical problem-solving with high-impact brand partnerships and marketing initiatives.
          </p>
        </div>
      </section>
  );
}
