"use client";
import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function About() {
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
    <section ref={containerRef} className="w-full max-w-[1440px] mx-auto px-6 md:px-12 py-20 lg:py-32 bg-white relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

        {/* Left Column - Profile Placeholder */}
        <div className="lg:col-span-5 relative group">
          {/* Hand-drawn scribble decoration */}
          <div className="absolute -top-10 -left-10 z-0 opacity-80 pointer-events-none hidden md:block">
            <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10,60 C30,10 90,10 110,60 C90,110 30,110 10,60 Z" stroke="#ea580c" strokeWidth="4" strokeDasharray="10 5" fill="none" />
            </svg>
          </div>

          <div className="relative w-full aspect-[4/5] bg-zinc-100 rounded-[2rem] border-4 border-black overflow-hidden z-10 shadow-[8px_8px_0_#000] rotate-[-2deg] transition-all duration-500 hover:rotate-0 hover:shadow-[12px_12px_0_#ea580c] group-hover:rotate-0 group-hover:shadow-[12px_12px_0_#ea580c]">
            <Image
              src="/aboutus.jpeg"
              alt="Piyush Gupta Profile"
              fill
              className="object-cover object-center grayscale-[20%] hover:grayscale-0 group-hover:grayscale-0 transition-all duration-500 z-0"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Subtle texture overlay for premium feel */}
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
          </div>

          {/* Orange Accent Doodle */}
          <div className="absolute -bottom-6 -right-6 z-20 hidden md:block animate-pulse">
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="30" cy="30" r="28" stroke="#ea580c" strokeWidth="4" strokeLinecap="round" strokeDasharray="5 15" />
              <circle cx="30" cy="30" r="15" fill="#ea580c" />
            </svg>
          </div>
        </div>

        {/* Right Column - Content */}
        <div className="lg:col-span-7 flex flex-col justify-center relative">
          <div className="relative mb-6 block w-max">
            <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter text-black inline-block relative z-10">
              About Me
            </h2>
            {/* Doodle highlight behind heading */}
            <div className="absolute -bottom-2 -left-2 w-[110%] h-[40%] bg-orange-500 -z-10 -rotate-2"></div>
            {/* Pointing Arrow Doodle */}
            <div className="absolute -right-16 top-0 text-orange-500 hidden sm:block">
              <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 25 C 20 10, 40 10, 45 25" stroke="currentColor" strokeWidth="4" strokeLinecap="round" fill="none" />
                <path d="M35 15 L 45 25 L 35 35" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            </div>
          </div>

          <h3 className="text-3xl md:text-4xl font-black uppercase text-black mb-3 tracking-tight">PIYUSH GUPTA</h3>
          <p className="text-[1.05rem] md:text-xl font-black text-orange-500 mb-8 border-b-4 border-black pb-4 inline-block tracking-wide uppercase">
            B.Tech Computer Engineering Student | Sponsorship Strategist | Full Stack Developer
          </p>

          <p className="text-lg md:text-[1.15rem] font-bold text-gray-700 mb-10 leading-relaxed border-l-4 border-orange-500 pl-6 relative">
            A results-driven Computer Engineering student combining a strong technical foundation with extensive expertise in marketing, branding, and sponsorship strategy. I specialize in negotiating high-impact brand partnerships, orchestrating large-scale events, and developing scalable full stack solutions. My unique skill set allows me to bridge the gap between complex technical execution and strategic business growth, delivering memorable outcomes for both teams and stakeholders.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="bg-white border-4 border-black rounded-[1rem] p-5 shadow-[4px_4px_0_#000] hover:shadow-[4px_4px_0_#ea580c] hover:-translate-y-1 transition-all group flex flex-col justify-center">
              <span className="text-[0.65rem] font-black text-gray-500 uppercase tracking-widest mb-2 group-hover:text-orange-500 transition-colors">Academic</span>
              <span className="text-xl font-black text-black">CGPA: 9.6/10</span>
            </div>

            <div className="bg-white border-4 border-black rounded-[1rem] p-5 shadow-[4px_4px_0_#000] hover:shadow-[4px_4px_0_#ea580c] hover:-translate-y-1 transition-all group flex flex-col justify-center">
              <span className="text-[0.65rem] font-black text-gray-500 uppercase tracking-widest mb-2 group-hover:text-orange-500 transition-colors">Location</span>
              <span className="text-xl font-black text-black">Mumbai</span>
            </div>

            <div className="bg-white border-4 border-black rounded-[1rem] p-5 shadow-[4px_4px_0_#000] hover:shadow-[4px_4px_0_#ea580c] hover:-translate-y-1 transition-all group flex flex-col justify-center">
              <span className="text-[0.65rem] font-black text-gray-500 uppercase tracking-widest mb-2 group-hover:text-orange-500 transition-colors">Brands worked with</span>
              <span className="text-md sm:text-lg font-black text-black leading-tight">KTM, Amazon Prime, Suzuki</span>
            </div>

            <div className="bg-white border-4 border-black rounded-[1rem] p-5 shadow-[4px_4px_0_#000] hover:shadow-[4px_4px_0_#ea580c] hover:-translate-y-1 transition-all group flex flex-col justify-center">
              <span className="text-[0.65rem] font-black text-gray-500 uppercase tracking-widest mb-2 group-hover:text-orange-500 transition-colors">Organizations</span>
              <span className="text-md sm:text-lg font-black text-black leading-tight">TEDxVIT, CSI, Student Council</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
