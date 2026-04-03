"use client";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Statement from "./components/Statement";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-orange-500 selection:text-white flex flex-col">
      <Navbar />
      <Hero />
      <div id="about"><About /></div>
      <div id="experience"><Experience /></div>
      <div id="projects"><Projects /></div>
      <Statement />
      <div id="contact"><Contact /></div>
      <Footer />
    </div>
  );
}
