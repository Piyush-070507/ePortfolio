"use client";
import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Projects() {
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
      <section ref={containerRef} className="w-full max-w-[1440px] mx-auto px-6 md:px-12 py-20 lg:py-32 bg-white relative z-10 border-t-4 border-black box-border">
        {/* Section Heading */}
        <div className="mb-16 md:mb-24 relative w-max mx-auto md:mx-0">
          <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter text-black relative z-10">
            Projects
          </h2>
          <div className="absolute -bottom-2 md:-bottom-4 -right-8 w-[120%] h-4 bg-orange-500 -z-10 rotate-1"></div>
          {/* Subtle doodle arrow */}
          <div className="absolute -top-10 -right-20 hidden md:block text-orange-500">
             <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 50 Q 30 10 50 50" stroke="currentColor" strokeWidth="4" strokeLinecap="round" fill="none"/>
                <path d="M35 40 L 50 50 L 55 35" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
             </svg>
          </div>
        </div>

        {/* Featured Work Label */}
        <div className="absolute top-12 md:top-24 right-6 md:right-12 bg-black text-white px-4 py-2 font-black uppercase text-xs tracking-widest shadow-[4px_4px_0_#ea580c] -rotate-3 z-20 hidden md:block">
          Featured Work
        </div>

        {/* Grid Layout for Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 relative">
          {/* Scribble background overlay */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[120%] pointer-events-none opacity-5 flex items-center justify-center -z-10 overflow-hidden">
             <svg width="600" height="400" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M-50 200 Q 150 -100 300 200 T 650 200" stroke="black" strokeWidth="10" strokeLinecap="round" fill="none"/>
             </svg>
          </div>

          {/* Project 1: Sikkim Tourism Website */}
          <div className="group relative bg-white border-4 border-black rounded-[2rem] p-6 lg:p-8 shadow-[8px_8px_0_#000] hover:shadow-[12px_12px_0_#ea580c] hover:-translate-y-2 transition-all duration-300 flex flex-col h-full z-10">
            {/* Image Section Mockup (Placeholder block for now) */}
            <div className="w-full aspect-[16/9] bg-zinc-100 rounded-[1rem] border-4 border-black mb-8 overflow-hidden relative">
               <Image
                 src="/sikkim.png"
                 alt="Sikkim Tourism Website"
                 fill
                 className="object-cover object-center grayscale-[60%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out z-0"
                 sizes="(max-width: 768px) 100vw, 50vw"
               />
               <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10"></div>
            </div>

            <div className="flex-grow flex flex-col justify-start">
              <h3 className="text-2xl md:text-3xl font-black uppercase text-black leading-tight mb-4 tracking-tight group-hover:text-orange-500 transition-colors">
                Sikkim Tourism Website
              </h3>
              <p className="inline-block bg-orange-500/10 text-orange-500 px-3 py-1 font-bold text-xs uppercase tracking-widest border border-orange-500 rounded-full mb-6 w-max shadow-sm">
                Smart India Hackathon (SIH)
              </p>
              
              <p className="text-lg font-bold text-gray-700 mb-6 border-l-4 border-orange-500 pl-4 leading-relaxed">
                Engineered a comprehensive, highly responsive tourism platform to digitally promote the cultural heritage, destinations, and attractions of Sikkim.
              </p>
              
              <ul className="flex flex-col gap-3 mb-8">
                <li className="flex items-start gap-3 text-base font-bold text-gray-600">
                  <span className="text-orange-500 mt-0.5">■</span>
                  Developed a scalable full-stack web application with an optimized user interface
                </li>
                <li className="flex items-start gap-3 text-base font-bold text-gray-600">
                  <span className="text-orange-500 mt-0.5">■</span>
                  Recognized and selected at the competitive college-level Smart India Hackathon (SIH)
                </li>
                <li className="flex items-start gap-3 text-base font-bold text-gray-600">
                  <span className="text-orange-500 mt-0.5">■</span>
                  Prioritized intuitive navigation, dynamic content rendering, and robust performance
                </li>
              </ul>
            </div>

            <div className="mt-auto">
               <a 
                 href="https://sikkim-tourism-seven.vercel.app/" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="inline-flex items-center justify-center w-full md:w-auto bg-transparent text-black border-4 border-black px-8 py-4 font-black uppercase tracking-widest hover:bg-black hover:text-orange-500 transition-colors shadow-[4px_4px_0_#000] hover:-translate-y-1"
               >
                 View Project →
               </a>
            </div>
          </div>

          {/* Project 2: HostelPe */}
          <div className="group relative bg-white border-4 border-black rounded-[2rem] p-6 lg:p-8 shadow-[8px_8px_0_#000] hover:shadow-[12px_12px_0_#ea580c] hover:-translate-y-2 transition-all duration-300 flex flex-col h-full z-10 lg:mt-12">
            {/* Doodle floating star */}
            <div className="absolute -top-8 -right-8 text-orange-500 opacity-60 animate-bounce hidden lg:block">
              <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25 0L30 18L50 25L30 32L25 50L20 32L0 25L20 18L25 0Z" fill="currentColor"/>
              </svg>
            </div>

            {/* Image Section Mockup */}
            <div className="w-full aspect-[16/9] bg-zinc-100 rounded-[1rem] border-4 border-black mb-8 overflow-hidden relative">
               <Image
                 src="/hostelpe.png"
                 alt="HostelPe Platform"
                 fill
                 className="object-cover object-center grayscale-[60%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out z-0"
                 sizes="(max-width: 768px) 100vw, 50vw"
               />
               <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10"></div>
            </div>

            <div className="flex-grow flex flex-col justify-start">
              <h3 className="text-2xl md:text-3xl font-black uppercase text-black leading-tight mb-4 tracking-tight group-hover:text-orange-500 transition-colors">
                HostelPe
              </h3>
              <p className="inline-block bg-orange-500/10 text-orange-500 px-3 py-1 font-bold text-xs uppercase tracking-widest border border-orange-500 rounded-full mb-6 w-max shadow-sm">
                Student Accommodation
              </p>
              
              <p className="text-lg font-bold text-gray-700 mb-6 border-l-4 border-orange-500 pl-4 leading-relaxed">
                Architected a dynamic web-based platform designed to streamline the discovery and leasing of hostels and rental rooms for students and working professionals.
              </p>
              
              <ul className="flex flex-col gap-3 mb-8">
                <li className="flex items-start gap-3 text-base font-bold text-gray-600">
                  <span className="text-orange-500 mt-0.5">■</span>
                  Implemented core search and filtering algorithms to enhance accommodation discovery
                </li>
                <li className="flex items-start gap-3 text-base font-bold text-gray-600">
                  <span className="text-orange-500 mt-0.5">■</span>
                  Targeted user-centric design to accommodate fluid market demands
                </li>
                <li className="flex items-start gap-3 text-base font-bold text-gray-600">
                  <span className="text-orange-500 mt-0.5">■</span>
                  Reduced friction in the rental process through scalable technical architecture
                </li>
              </ul>
            </div>

            <div className="mt-auto">
               <a 
                 href="https://hostelpe.in/add-room" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="inline-flex items-center justify-center w-full md:w-auto bg-transparent text-black border-4 border-black px-8 py-4 font-black uppercase tracking-widest hover:bg-black hover:text-orange-500 transition-colors shadow-[4px_4px_0_#000] hover:-translate-y-1"
               >
                 View Project →
               </a>
            </div>
          </div>

        </div>
      </section>
  );
}
