"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function Hero() {
  const containerRef = useRef(null);
  const imageWrapperRef = useRef(null);
  const heroImageOneRef = useRef(null);
  const heroImageTwoRef = useRef(null);

  useGSAP(
    () => {
      // Load animation
      gsap.from(containerRef.current, {
        y: 50,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.2
      });

      const wrapper = imageWrapperRef.current;
      const heroImageOne = heroImageOneRef.current;
      const heroImageTwo = heroImageTwoRef.current;

      if (!wrapper || !heroImageOne || !heroImageTwo) return;

      gsap.set(heroImageOne, { opacity: 1, scale: 1 });
      gsap.set(heroImageTwo, { opacity: 0, scale: 1.05 });

      const handleMouseEnter = () => {
        gsap.to(heroImageOne, {
          opacity: 0,
          scale: 1.06,
          duration: 0.55,
          ease: "power2.out",
          overwrite: "auto",
        });

        gsap.to(heroImageTwo, {
          opacity: 1,
          scale: 1,
          duration: 0.55,
          ease: "power2.out",
          overwrite: "auto",
        });
      };

      const handleMouseLeave = () => {
        gsap.to(heroImageOne, {
          opacity: 1,
          scale: 1,
          duration: 0.55,
          ease: "power2.out",
          overwrite: "auto",
        });

        gsap.to(heroImageTwo, {
          opacity: 0,
          scale: 1.05,
          duration: 0.55,
          ease: "power2.out",
          overwrite: "auto",
        });
      };

      wrapper.addEventListener("mouseenter", handleMouseEnter);
      wrapper.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        wrapper.removeEventListener("mouseenter", handleMouseEnter);
        wrapper.removeEventListener("mouseleave", handleMouseLeave);
      };
    },
    { scope: containerRef }
  );

  return (
    <>
      {/* Hero Section */}
      <main ref={containerRef} className="flex-1 w-full max-w-[1440px] mx-auto px-6 md:px-12 py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative overflow-hidden">
        
        {/* Abstract doodle background elements */}
        <div className="absolute top-20 right-10 opacity-20 pointer-events-none hidden lg:block">
           <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 50 Q 30 10, 50 50 T 90 50" stroke="black" strokeWidth="4" strokeLinecap="round" fill="none"/>
           </svg>
        </div>

        {/* Left Column - Typography & CTA */}
        <div className="lg:col-span-5 flex flex-col items-start justify-center z-10 relative">
          <div className="inline-block bg-orange-500 text-white font-black px-4 py-1.5 uppercase tracking-widest text-xs mb-8 -rotate-2 shadow-[2px_2px_0_#000]">
            Available for Work
          </div>
          
          <h1 className="text-[4rem] sm:text-[5rem] md:text-[6rem] lg:text-[5.5rem] xl:text-[6.5rem] font-black leading-[0.85] tracking-tighter mb-8 uppercase text-black drop-shadow-sm">
            Code the <br/>
            Future. <br/>
            <span className="text-orange-500 relative inline-block mt-2">
              Build the <br className="xl:hidden"/> Brand.
              <svg className="absolute -bottom-2 left-0 w-full h-4 md:h-5 text-black" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path d="M0,10 Q50,20 100,5" stroke="currentColor" strokeWidth="4" fill="none" />
              </svg>
            </span>
          </h1>
          
          <p className="text-lg md:text-xl font-bold text-gray-700 mb-10 max-w-md border-l-4 border-orange-500 pl-5">
           I build brands that don’t just exist  they dominate. By blending strategic sponsorships, data-driven marketing, and full stack development, I create digital ecosystems that attract attention, drive engagement, and convert at scale.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
            <a href="#projects" className="bg-black text-white px-8 py-4 font-black uppercase text-sm border-4 border-black hover:bg-orange-500 hover:text-black hover:-translate-y-1 hover:shadow-[6px_6px_0_#000] transition-all shadow-[4px_4px_0_#ea580c] text-center inline-block">
              View Projects
            </a>
            <a href="#about" className="bg-white text-black px-8 py-4 font-black uppercase text-sm border-4 border-black hover:bg-black hover:text-white transition-all text-center inline-block">
              Read My Story
            </a>
          </div>
        </div>

        {/* Right Column - Image & Doodles */}
        <div className="lg:col-span-7 relative flex justify-center items-center mt-10 lg:mt-0 lg:ml-10">
          <div className="relative w-full max-w-[500px] lg:max-w-none aspect-[4/5] 2xl:aspect-square group z-10">
            {/* The offset background block */}
            <div className="absolute inset-0 bg-orange-500 translate-x-4 translate-y-4 md:translate-x-6 md:translate-y-6 border-4 border-black transition-transform group-hover:translate-x-8 group-hover:translate-y-8"></div>
            
            <div
              ref={imageWrapperRef}
              className="relative w-full h-full border-4 border-black bg-white overflow-hidden z-10"
            >
              <Image
                ref={heroImageOneRef}
                src="/Hero1.png"
                alt="Creative Portfolio Hero Image 1"
                fill
                className="object-contain object-center"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              <Image
                ref={heroImageTwoRef}
                src="/Hero2.png"
                alt="Creative Portfolio Hero Image 2"
                fill
                className="object-contain object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            
            {/* Floating badges */}
            <div className="absolute -bottom-5 -left-5 bg-white border-4 border-black px-6 py-3 z-20 flex items-center justify-center -rotate-6 shadow-[4px_4px_0_#ea580c] hover:rotate-0 transition-transform cursor-default">
              <span className="font-black uppercase text-xl tracking-wider text-black">Design</span>
            </div>
            
            <div className="absolute -top-5 -right-5 bg-black border-4 border-black px-5 py-2 z-20 flex items-center justify-center rotate-6 shadow-[-4px_4px_0_#ea580c] hover:-rotate-3 transition-transform cursor-default">
              <span className="font-black uppercase text-lg tracking-widest text-white">Focus</span>
            </div>

            {/* Hand-drawn star doodle */}
            <div className="absolute top-1/4 -left-12 z-20 hidden md:block animate-pulse">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 0L24 16L40 20L24 24L20 40L16 24L0 20L16 16L20 0Z" fill="#ea580c" />
                <path d="M20 0L24 16L40 20L24 24L20 40L16 24L0 20L16 16L20 0Z" stroke="black" strokeWidth="3" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>

      </main>

      {/* Marquee Banner */}
      <div className="w-full bg-orange-500 border-y-4 border-black py-3 sm:py-4 overflow-hidden flex relative z-10 mt-auto">
        <div className="whitespace-nowrap animate-marquee flex items-center text-black font-black uppercase text-xl sm:text-2xl tracking-widest">
            <span className="mx-4">Brand Strategy</span>
            <span className="mx-4 text-white">✦</span>
            <span className="mx-4">Full Stack Development</span>
            <span className="mx-4 text-white">✦</span>
            <span className="mx-4">Sponsorship Management</span>
            <span className="mx-4 text-white">✦</span>
            <span className="mx-4">Data Structures</span>
            <span className="mx-4 text-white">✦</span>
            <span className="mx-4">Problem Solving</span>
            <span className="mx-4 text-white">✦</span>
            {/* Duplicate for seamless infinite scrolling */}
            <span className="mx-4">Brand Strategy</span>
            <span className="mx-4 text-white">✦</span>
            <span className="mx-4">Full Stack Development</span>
            <span className="mx-4 text-white">✦</span>
            <span className="mx-4">Sponsorship Management</span>
            <span className="mx-4 text-white">✦</span>
            <span className="mx-4">Data Structures</span>
            <span className="mx-4 text-white">✦</span>
            <span className="mx-4">Problem Solving</span>
            <span className="mx-4 text-white">✦</span>
        </div>
      </div>
    </>
  );
}
