"use client";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { submitContact } from "../actions/contact";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Contact() {
  const containerRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

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

  async function handleAction(formData) {
    setIsSubmitting(true);
    setStatus(null);
    const result = await submitContact(formData);
    setStatus(result);
    setIsSubmitting(false);
  }

  return (
      <section ref={containerRef} className="w-full max-w-[1440px] mx-auto px-6 md:px-12 py-20 lg:py-32 bg-white relative z-10 border-t-4 border-black">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Contact Details */}
          <div className="flex flex-col justify-center relative z-20">
            {/* Doodle Label */}
            <div className="absolute -top-10 -left-6 transform -rotate-12 bg-orange-500 text-white font-black px-4 py-1.5 uppercase text-xs shadow-[2px_2px_0_#000]">
              Say Hello
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-black mb-6 relative inline-block w-max">
              Let's <br className="hidden md:block"/> Connect
              {/* Doodle highlight */}
              <svg className="absolute -bottom-2 right-0 w-2/3 h-4 text-orange-500 -z-10" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path d="M0,15 Q50,5 100,10" stroke="currentColor" strokeWidth="6" strokeLinecap="round" fill="none" />
              </svg>
            </h2>

            <p className="text-lg md:text-xl font-bold text-gray-700 mb-10 max-w-md">
              Seeking to align technical execution with strategic marketing? Let's collaborate to build something impactful.
            </p>

            <div className="flex flex-col gap-6 font-bold text-lg">
              <a href="tel:+919702045886" className="flex items-center gap-4 hover:text-orange-500 transition-colors w-max group">
                <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center group-hover:bg-orange-500 transition-colors shadow-[3px_3px_0_#ea580c] group-hover:shadow-[3px_3px_0_#000]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <span>9702045886</span>
              </a>
              
              <a href="mailto:2015piyushgu@gmail.com" className="flex items-center gap-4 hover:text-orange-500 transition-colors w-max group">
                <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center group-hover:bg-orange-500 transition-colors shadow-[3px_3px_0_#ea580c] group-hover:shadow-[3px_3px_0_#000]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </div>
                <span>2015piyushgu@gmail.com</span>
              </a>

              <div className="flex items-center gap-4 w-max group cursor-default">
                <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center group-hover:bg-orange-500 transition-colors shadow-[3px_3px_0_#ea580c] group-hover:shadow-[3px_3px_0_#000]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>
                <span>Mumbai, India</span>
              </div>
            </div>

            {/* Doodle Arrow pointing to Form */}
            <div className="absolute right-0 top-1/2 hidden lg:block text-orange-500 opacity-80">
              <svg width="100" height="60" viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 30 Q 50 -10, 90 30" stroke="currentColor" strokeWidth="4" strokeLinecap="round" fill="none" strokeDasharray="8 6"/>
                <path d="M80 20 L 93 33 L 75 40" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="relative w-full z-10 mt-10 lg:mt-0">
             {/* Offset highlight block */}
            <div className="absolute inset-0 bg-orange-500 border-4 border-black translate-x-3 translate-y-3 md:translate-x-5 md:translate-y-5 rounded-2xl z-0 transition-transform hover:translate-x-6 hover:translate-y-6"></div>
            
            <form action={handleAction} suppressHydrationWarning className="relative bg-white border-4 border-black p-8 md:p-10 rounded-2xl z-10 shadow-[6px_6px_0_#000] flex flex-col gap-8">
              
              {status && (
                <div className={`p-4 font-bold border-2 border-black ${status.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {status.message}
                </div>
              )}

              <div className="absolute -top-4 -right-4 bg-black text-white font-black px-4 py-1 uppercase text-sm rotate-6 shadow-[2px_2px_0_#ea580c]">
                Let's Talk
              </div>

              <div className="relative z-0">
                <input 
                  type="text" 
                  name="name"
                  id="name" 
                  placeholder=" " 
                  className="block w-full px-0 py-3 text-lg font-bold text-black bg-transparent border-0 border-b-4 border-black appearance-none focus:outline-none focus:ring-0 focus:border-orange-500 peer transition-colors"
                  required
                />
                <label 
                  htmlFor="name" 
                  className="absolute text-lg font-bold text-gray-500 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8 uppercase tracking-widest"
                >
                  Name
                </label>
              </div>

              <div className="relative z-0">
                <input 
                  type="email" 
                  name="email"
                  id="email" 
                  placeholder=" " 
                  className="block w-full px-0 py-3 text-lg font-bold text-black bg-transparent border-0 border-b-4 border-black appearance-none focus:outline-none focus:ring-0 focus:border-orange-500 peer transition-colors"
                  required
                />
                <label 
                  htmlFor="email" 
                  className="absolute text-lg font-bold text-gray-500 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8 uppercase tracking-widest"
                >
                  Email
                </label>
              </div>

              <div className="relative z-0">
                <textarea 
                  name="message"
                  id="message" 
                  rows="4"
                  placeholder=" " 
                  className="block w-full px-0 py-3 text-lg font-bold text-black bg-transparent border-0 border-b-4 border-black appearance-none focus:outline-none focus:ring-0 focus:border-orange-500 peer transition-colors resize-none"
                  required
                ></textarea>
                <label 
                  htmlFor="message" 
                  className="absolute text-lg font-bold text-gray-500 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8 uppercase tracking-widest"
                >
                  Message
                </label>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="mt-4 w-full bg-black text-white py-4 font-black text-xl uppercase tracking-widest border-4 border-black hover:bg-orange-500 hover:text-black hover:-translate-y-1 hover:shadow-[4px_4px_0_#000] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>

            {/* Doodle Scribble near form */}
            <div className="absolute -bottom-10 -left-10 z-20 opacity-30 pointer-events-none hidden md:block">
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 20 Q 30 10, 50 30 T 70 70" stroke="black" strokeWidth="4" strokeLinecap="round" fill="none"/>
                <path d="M20 70 Q 40 80, 60 60 T 40 20" stroke="black" strokeWidth="4" strokeLinecap="round" fill="none"/>
              </svg>
            </div>
          </div>
        </div>
      </section>
  );
}
