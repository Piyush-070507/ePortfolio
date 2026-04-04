"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Footer() {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from(containerRef.current, {
      y: 50,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 95%",
        toggleActions: "play none none reverse"
      }
    });
  });

  return (
      <footer ref={containerRef} className="w-full bg-black text-white py-16 md:py-24 border-t-8 border-orange-500 relative z-10 mt-auto overflow-hidden">
        
        {/* Background Doodle scribble */}
        <div className="absolute top-10 left-10 opacity-10 pointer-events-none hidden md:block">
          <svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 75 Q 40 10, 75 75 T 140 75" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none"/>
            <path d="M30 120 Q 60 50, 90 120 T 130 50" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none"/>
          </svg>
        </div>

        <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col items-center text-center relative z-10">
          
          {/* Section 1: Name and Tagline */}
          <div className="mb-12 relative">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-widest mb-4">Piyush Gupta</h2>
            <p className="text-orange-500 font-bold tracking-wide uppercase text-sm md:text-base border-b-2 border-orange-500/30 pb-2 inline-block">
              "Bridging Technology and Strategic Growth"
            </p>
            {/* Doodle Star */}
            <div className="absolute -top-6 -right-10 text-orange-500 opacity-50 animate-pulse">
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 0L18 11L29 15L18 19L15 30L12 19L1 15L12 11L15 0Z" fill="currentColor"/>
              </svg>
            </div>
          </div>

          {/* Section 2: Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-8 md:gap-12 font-bold uppercase tracking-widest text-sm mb-12">
            <a href="#about" className="relative group hover:text-orange-500 transition-colors">
              About
              <span className="absolute -bottom-2 left-0 w-0 h-1 bg-orange-500 transition-all group-hover:w-full"></span>
            </a>
            <a href="#experience" className="relative group hover:text-orange-500 transition-colors">
              Experience
              <span className="absolute -bottom-2 left-0 w-0 h-1 bg-orange-500 transition-all group-hover:w-full"></span>
            </a>
            <a href="#projects" className="relative group hover:text-orange-500 transition-colors">
              Projects
              <span className="absolute -bottom-2 left-0 w-0 h-1 bg-orange-500 transition-all group-hover:w-full"></span>
            </a>
            <a href="#contact" className="relative group hover:text-orange-500 transition-colors">
              Contact
              <span className="absolute -bottom-2 left-0 w-0 h-1 bg-orange-500 transition-all group-hover:w-full"></span>
            </a>
          </nav>

          {/* Section 3: Social Icons */}
          <div className="flex gap-6 mb-16">
            <a href="https://linkedin.com/in/piyush-gupta-407779351" target="_blank" rel="noopener noreferrer" className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 hover:text-black transition-all hover:-translate-y-1">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="https://github.com/Piyush-070507" target="_blank" rel="noopener noreferrer" className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 hover:text-black transition-all hover:-translate-y-1">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.5 0-.24-.01-1.04-.01-1.89-2.78.62-3.37-1.2-3.37-1.2-.45-1.18-1.11-1.5-1.11-1.5-.9-.64.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.88 1.54 2.32 1.1 2.88.84.09-.66.35-1.1.63-1.36-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05A9.33 9.33 0 0 1 12 6.84c.85 0 1.7.12 2.5.35 1.9-1.32 2.74-1.05 2.74-1.05.55 1.4.21 2.45.1 2.71.64.72 1.02 1.63 1.02 2.75 0 3.95-2.34 4.82-4.57 5.08.36.31.68.92.68 1.86 0 1.34-.01 2.41-.01 2.74 0 .27.18.6.69.5A10.25 10.25 0 0 0 22 12.23C22 6.58 17.52 2 12 2z"/></svg>
            </a>
            <a href="mailto:2015piyushgu@gmail.com" className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 hover:text-black transition-all hover:-translate-y-1">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            </a>
          </div>

          <div className="w-full h-[1px] bg-white/20 mb-8 relative">
            {/* Back to Top Button */}
            <a href="#" style={{ scrollBehavior: 'smooth' }} onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="absolute left-1/2 -translate-x-1/2 -top-5 bg-black border-2 border-white px-6 py-2 uppercase font-black text-xs tracking-widest hover:text-orange-500 hover:border-orange-500 transition-colors group flex items-center gap-2">
              Back to Top
              <span className="group-hover:-translate-y-1 transition-transform">↑</span>
              {/* Doodle Arrow */}
              <div className="absolute -right-10 top-2 opacity-0 group-hover:opacity-100 transition-opacity text-orange-500">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 20 Q 20 10 15 5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10 10 L 15 5 L 20 10" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </a>
          </div>

          <p className="font-bold uppercase tracking-widest text-xs text-zinc-500">
            &copy; 2026 Piyush Gupta. All Rights Reserved.
          </p>
        </div>
      </footer>
  );
}
