import React, { useEffect } from "react";
import NavBar from "./components/NavBar";
import Home from "./sections/Home/Home";
import About from "./sections/About/About";
import Skills from "./sections/Skills/Skills";
import Projects from "./sections/Projects/Projects";
import Contact from "./sections/Contact/Contact";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const App = () => {
  useEffect(() => {
    // Initialize a new Lenis instance for smooth scrolling
    const lenis = new Lenis();

    // Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
    lenis.on("scroll", ScrollTrigger.update);

    // Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
    // This ensures Lenis's smooth scroll animation updates on each GSAP tick
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000); // Convert time from seconds to milliseconds
    });

    // Disable lag smoothing in GSAP to prevent any delay in scroll animations
    gsap.ticker.lagSmoothing(0);
  }, []);
  return (
    <div>
      <NavBar />
      <section id="home" className="h-screen">
        <Home />
      </section>
      <section id="about" className="h-screen">
        <About />
      </section>
      <section id="skills" className="h-screen">
        <Skills />
      </section>
      <section id="projects" className="h-screen">
        <Projects />
      </section>
      <section id="contact" className="h-screen">
        <Contact />
      </section>
    </div>
  );
};

export default App;
