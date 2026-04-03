"use client";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

/* ─── Experience Data ─── */
const EXPERIENCES = [
  {
    date: "January 2025",
    role: "Sponsorship Core Member",
    org: "Student Council, VIT",
    orgLogo: "/Brands/CouncilCore/sclogo.jpeg",
    description:
      "Initiated the sponsorship strategy, securing foundational brand partnerships to drive engagement and funding for council-led college events.",
    logos: [
      { src: "/Brands/CouncilCore/d4d.jpeg", alt: "D4D" },
      { src: "/Brands/CouncilCore/gelassimo.jpeg", alt: "Gelassimo" },
      { src: "/Brands/CouncilCore/insurrance.jpeg", alt: "Insurance Partner" },
      { src: "/Brands/CouncilCore/waffle.jpeg", alt: "Waffle Partner" },
    ],
  },
  {
    date: "July 2025",
    role: "Sponsorship Secretary",
    org: "Student Council, VIT",
    orgLogo: "/Brands/Secreatory/sclogo - Copy.jpeg",
    description:
      "Spearheaded full-scale sponsorship campaigns across multi-day flagship events, negotiating deliverables and managing end-to-end brand integration.",
    logos: [
      { src: "/Brands/Secreatory/amzon.jpeg", alt: "Amazon" },
      { src: "/Brands/Secreatory/ktm.jpeg", alt: "KTM" },
      { src: "/Brands/Secreatory/royalenfield.jpeg", alt: "Royal Enfield" },
      { src: "/Brands/Secreatory/bombayshaving.jpeg", alt: "Bombay Shaving" },
      { src: "/Brands/Secreatory/mtvbeats.jpeg", alt: "MTV Beats" },
      { src: "/Brands/Secreatory/clud9.jpeg", alt: "Cloud9" },
      { src: "/Brands/Secreatory/fewik.jpeg", alt: "Fevicol" },
      { src: "/Brands/Secreatory/tribevibe.jpeg", alt: "TribeVibe" },
    ],
  },
  {
    date: "September 2025",
    role: "CSI Sponsorship Head",
    org: "Computer Society of India, VIT",
    orgLogo: "/Brands/CSI/CsiLogo.webp",
    description:
      "Directed tech-centric sponsorship acquisitions for CSI's premier events, securing strategic partnerships with leading industry innovators.",
    logos: [
      { src: "/Brands/CSI/Foodie.jpeg", alt: "Foodie" },
      { src: "/Brands/CSI/hp.jpeg", alt: "HP" },
      { src: "/Brands/CSI/marks.jpeg", alt: "Marks" },
      { src: "/Brands/CSI/thejuicefarm.jpeg", alt: "The Juice Farm" },
    ],
  },
  {
    date: "January 2026",
    role: "Under25 Festival Director",
    org: "Under25 Summit",
    orgLogo: "/Brands/U25/U25Logo.jpeg",
    description:
      "Engineered comprehensive sponsorship and brand experience strategies for one of India's most prominent youth festivals, enhancing overall market presence.",
    logos: [{ src: "/u25.jpeg", alt: "Under25 Summit" }],
  },
  {
    date: "March 2026",
    role: "TEDx Sponsorship Lead",
    org: "TEDxVIT",
    orgLogo: "/Brands/Tedx/TEDxVITlogo.png",
    description:
      "Orchestrated premium brand collaborations for TEDxVIT, negotiating marketing deliverables and ensuring robust sponsor visibility aligned with global TEDx standards.",
    logos: [
      { src: "/Brands/Tedx/FoodieTribe.jpeg", alt: "FoodieTribe" },
      { src: "/Brands/Tedx/For white background .png", alt: "Sponsor Logo" },
      { src: "/Brands/Tedx/MYOP LOGO BLACK PNG.png", alt: "MYOP" },
      { src: "/Brands/Tedx/Rolls.jpeg", alt: "Rolls" },
      { src: "/Brands/Tedx/fashnectic.jpeg", alt: "Fashnectic" },
      { src: "/Brands/Tedx/moza.jpeg", alt: "Moza" },
    ],
  },
];

/* ─────────────────────────────────────────────
   Pinned Journey Sub-Component
   This is the part that gets pinned during scroll.
   Skills lives OUTSIDE so it doesn't inflate pin height.
   ───────────────────────────────────────────── */
function ExperienceJourney() {
  const pinRef = useRef(null);
  const progressRef = useRef(null);
  const contentRefs = useRef([]);
  const logoGridRefs = useRef([]);
  const dotRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useGSAP(
    () => {
      const totalSteps = EXPERIENCES.length;

      ScrollTrigger.create({
        trigger: pinRef.current,
        start: "top top",
        /* each step gets a full viewport of scroll distance */
        end: () => `+=${window.innerHeight * totalSteps}`,
        pin: true,
        pinSpacing: true,
        scrub: 0.5,
        anticipatePin: 1,
        onUpdate: (self) => {
          const raw = self.progress * totalSteps;
          const idx = Math.min(Math.floor(raw), totalSteps - 1);
          setActiveIndex(idx);

          if (progressRef.current) {
            gsap.set(progressRef.current, { scaleY: self.progress });
          }
        },
      });
    },
    { scope: pinRef }
  );

  /* ── Animate on activeIndex change ── */
  useEffect(() => {
    contentRefs.current.forEach((el, i) => {
      if (!el) return;
      if (i === activeIndex) {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
          pointerEvents: "auto",
        });
      } else {
        gsap.to(el, {
          opacity: 0,
          y: i < activeIndex ? -24 : 24,
          duration: 0.35,
          ease: "power2.in",
          pointerEvents: "none",
        });
      }
    });

    logoGridRefs.current.forEach((el, i) => {
      if (!el) return;
      if (i === activeIndex) {
        gsap.to(el, { opacity: 1, duration: 0.5, ease: "power2.out" });
        const logos = el.querySelectorAll(".logo-item");
        gsap.fromTo(
          logos,
          { opacity: 0, scale: 0.92, y: 12 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.45,
            stagger: 0.06,
            ease: "power2.out",
            delay: 0.12,
          }
        );
      } else {
        gsap.to(el, { opacity: 0, duration: 0.3, ease: "power2.in" });
      }
    });

    dotRefs.current.forEach((el, i) => {
      if (!el) return;
      if (i === activeIndex) {
        gsap.to(el, {
          scale: 1.6,
          backgroundColor: "#ea580c",
          borderColor: "#ea580c",
          duration: 0.35,
          ease: "power2.out",
        });
      } else if (i < activeIndex) {
        gsap.to(el, {
          scale: 1,
          backgroundColor: "#000",
          borderColor: "#000",
          duration: 0.3,
        });
      } else {
        gsap.to(el, {
          scale: 1,
          backgroundColor: "#fff",
          borderColor: "#d4d4d8",
          duration: 0.3,
        });
      }
    });
  }, [activeIndex]);

  return (
    <div
      ref={pinRef}
      className="w-full bg-white"
      style={{ height: "100vh", overflow: "hidden" }}
    >
      {/* Header */}
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 pt-16 pb-4 md:pt-20 md:pb-6">
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-orange-500 mb-2 block">
          Professional Journey
        </span>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter text-black leading-[0.9]">
          Experience
        </h2>
        <div className="w-20 h-1 bg-orange-500 mt-5" />
      </div>

      {/* Content Area */}
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 relative h-[calc(100vh-200px)]">
          {/* LEFT: Timeline + Role Content */}
          <div className="lg:col-span-5 relative flex h-full">
            {/* Timeline track */}
            <div className="hidden lg:flex flex-col items-center mr-10 relative py-4"
              style={{ height: "100%" }}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-full bg-zinc-200" />
              <div
                ref={progressRef}
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-full bg-black origin-top"
                style={{ transform: "scaleY(0)" }}
              />
              {EXPERIENCES.map((_, i) => (
                <div
                  key={i}
                  ref={(el) => (dotRefs.current[i] = el)}
                  className="w-3 h-3 rounded-full border-2 border-zinc-300 bg-white z-10 shrink-0 transition-shadow"
                  style={{ marginTop: i === 0 ? 0 : "auto" }}
                />
              ))}
            </div>

            {/* Mobile step indicator */}
            <div className="lg:hidden flex gap-2 mb-4">
              {EXPERIENCES.map((_, i) => (
                <div
                  key={i}
                  className="h-1 flex-1 rounded-full transition-colors duration-300"
                  style={{
                    backgroundColor:
                      i <= activeIndex ? "#ea580c" : "#e4e4e7",
                  }}
                />
              ))}
            </div>

            {/* Role cards stacked */}
            <div className="relative flex-1 w-full h-full">
              {EXPERIENCES.map((exp, i) => (
                <div
                  key={i}
                  ref={(el) => (contentRefs.current[i] = el)}
                  className="absolute top-0 left-0 w-full h-full pt-2 md:pt-8 overflow-y-auto no-scrollbar pb-10"
                  style={{
                    opacity: i === 0 ? 1 : 0,
                    pointerEvents: i === 0 ? "auto" : "none",
                  }}
                >
                  <span className="text-[10px] font-bold tracking-[0.35em] uppercase text-zinc-400 mb-3 block mt-2">
                    Step {String(i + 1).padStart(2, "0")} /{" "}
                    {String(EXPERIENCES.length).padStart(2, "0")}
                  </span>

                  {exp.orgLogo && (
                    <div className="mb-4 inline-block bg-white p-2 border border-zinc-200 rounded-xl shadow-sm">
                      <Image
                        src={exp.orgLogo}
                        alt={exp.org}
                        width={180}
                        height={180}
                        className="object-contain rounded-lg"
                        loading="lazy"
                      />
                    </div>
                  )}

                  <span className="text-xs font-bold uppercase tracking-[0.25em] text-orange-500 mb-4 block">
                    {exp.date}
                  </span>

                  <h3 className="text-3xl md:text-4xl lg:text-[2.75rem] font-black text-black tracking-tight leading-[1.1] mb-2">
                    {exp.role}
                  </h3>

                  <p className="text-lg md:text-xl font-semibold text-zinc-500 mb-5">
                    {exp.org}
                  </p>

                  <div className="w-12 h-[2px] bg-zinc-300 mb-5" />

                  <p className="text-base md:text-lg font-medium text-zinc-600 leading-relaxed max-w-md">
                    {exp.description}
                  </p>

                 

                  {/* Mobile logo grid */}
                  <div className="lg:hidden mt-8">
                    <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-zinc-400 mb-4 block">
                      Brand Partnerships
                    </span>
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                      {exp.logos.map((logo, li) => (
                        <div
                          key={li}
                          className="aspect-square bg-zinc-50 border border-zinc-200 rounded-lg flex items-center justify-center p-3 hover:border-orange-500 transition-colors"
                        >
                          <Image
                            src={logo.src}
                            alt={logo.alt}
                            width={80}
                            height={80}
                            className="object-contain  hover:grayscale-0 transition-all duration-300 hover:scale-105"
                            loading="lazy"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Logo Display */}
          <div className="hidden lg:flex lg:col-span-7 items-center justify-center relative pl-12">
            <div className="w-full relative">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-zinc-400 mb-6 block">
                Brand Partnerships
              </span>

              <div className="relative min-h-[350px] flex items-start">
                {EXPERIENCES.map((exp, i) => (
                  <div
                    key={i}
                    ref={(el) => (logoGridRefs.current[i] = el)}
                    className="absolute top-0 left-0 w-full h-full flex items-start pt-4"
                    style={{ opacity: i === 0 ? 1 : 0 }}
                  >
                    <div
                      className={`grid gap-4 w-full ${
                        exp.logos.length <= 4
                          ? "grid-cols-2 md:grid-cols-4"
                          : "grid-cols-3 md:grid-cols-4"
                      }`}
                    >
                      {exp.logos.map((logo, li) => (
                        <div
                          key={li}
                          className="logo-item aspect-square bg-zinc-50 border border-zinc-200 rounded-xl flex items-center justify-center p-4 md:p-5 hover:border-zinc-400 hover:shadow-md transition-all duration-300 group"
                        >
                          <Image
                            src={logo.src}
                            alt={logo.alt}
                            width={120}
                            height={120}
                            className="object-contain w-full h-full group-hover:scale-105 transition-all duration-300"
                            loading="lazy"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Skills Sub-Component (NOT pinned)
   ───────────────────────────────────────────── */
function Skills() {
  const skillsRef = useRef(null);

  useGSAP(() => {
    gsap.from(skillsRef.current, {
      y: 50,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: skillsRef.current,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    });
  });

  return (
    <div ref={skillsRef} className="w-full border-t border-zinc-200 bg-zinc-50">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-20 lg:py-28">
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-orange-500 mb-3 block">
          Toolkit
        </span>
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-black mb-12">
          Skills & Tech
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Languages */}
          <div className="bg-white border border-zinc-200 rounded-2xl p-6 md:p-8 hover:border-zinc-400 transition-colors">
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-zinc-400 mb-5 pb-4 border-b border-zinc-100">
              Languages
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {["Python", "Java", "C", "HTML", "CSS", "JavaScript"].map(
                (skill) => (
                  <span
                    key={skill}
                    className="bg-black text-white px-4 py-2 rounded-md font-bold text-sm tracking-wide hover:bg-orange-500 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Technical */}
          <div className="bg-white border border-zinc-200 rounded-2xl p-6 md:p-8 hover:border-zinc-400 transition-colors">
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-zinc-400 mb-5 pb-4 border-b border-zinc-100">
              Technical
            </h3>
            <div className="flex flex-col gap-2.5">
              {[
                "Data Structures & Algorithms",
                "Competitive Programming",
                "Full Stack Development",
                "Data Analysis",
              ].map((skill) => (
                <span
                  key={skill}
                  className="bg-zinc-50 text-black px-4 py-3 border border-zinc-200 rounded-md font-bold text-sm hover:border-orange-500 hover:text-orange-500 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="bg-black border border-zinc-800 rounded-2xl p-6 md:p-8 relative">
            <div className="absolute -top-3 right-6 bg-orange-500 text-white font-bold uppercase text-[10px] tracking-[0.2em] px-3 py-1 rounded-full">
              Key Focus
            </div>
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-zinc-500 mb-5 pb-4 border-b border-zinc-800">
              Soft Skills
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {[
                "Leadership",
                "Communication",
                "Negotiation",
                "Teamwork",
                "Collaboration",
                "Problem-Solving",
              ].map((skill) => (
                <span
                  key={skill}
                  className="bg-zinc-900 text-white px-4 py-2 border border-zinc-700 rounded-md font-bold text-sm hover:bg-orange-500 hover:border-orange-500 hover:text-black transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Main Export — Journey (pinned) + Skills (normal)
   ───────────────────────────────────────────── */
export default function Experience() {
  return (
    <>
      <ExperienceJourney />
      <Skills />
    </>
  );
}
