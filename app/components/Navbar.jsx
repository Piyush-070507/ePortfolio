"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function Navbar() {
  const navRef = useRef(null);
  const audioRef = useRef(null);

  useGSAP(() => {
    gsap.from(navRef.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });
  });

  const handleLogoClick = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio("/OnTop.mp3");
    }
    
    if (audioRef.current.paused) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };

  return (
      <nav ref={navRef} className="w-full px-6 md:px-12 py-6 flex justify-between items-center border-b-4 border-black bg-white z-20">
        <div 
          onClick={handleLogoClick} 
          className="font-black text-2xl tracking-tighter uppercase relative cursor-pointer hover:scale-105 transition-transform"
        >
          Piyush<span className="text-orange-500">07</span>
        </div>
        <div className="gap-8 font-bold text-sm tracking-widest uppercase hidden md:flex">
          <a href="#about" className="hover:text-orange-500 hover:-translate-y-0.5 transition-all">About</a>
          <a href="#experience" className="hover:text-orange-500 hover:-translate-y-0.5 transition-all">Experience</a>
          <a href="#projects" className="hover:text-orange-500 hover:-translate-y-0.5 transition-all">Work</a>
          <a href="#contact" className="hover:text-orange-500 hover:-translate-y-0.5 transition-all">Contact</a>
        </div>
        <a href="#contact" className="bg-black text-white px-6 py-2.5 font-bold uppercase text-sm hover:bg-orange-500 hover:scale-105 transition-all shadow-[4px_4px_0_#ea580c] inline-block">
          Let's Talk
        </a>
      </nav>
  );
}
