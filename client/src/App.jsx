import React, { useEffect, useRef } from "react";
import NavBar from "./components/NavBar";
import Home from "./sections/Home";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

import Lenis from "lenis";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useRefs } from "./context/RfsContext";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
const App = () => {
  // const dummy = useRef(null);

  const {
    cssRef,
    expressRef,
    figmaRef,
    fireRef,
    gitRef,
    githubRef,
    htmlRef,
    ideaRef,
    javaRef,
    jsRef,
    mongoRef,
    sqlRef,
    nodeRef,
    postmanRef,
    tailwindRef,
    viteRef,
    vscodeRef,
    webstromRef,
    titleRef,
    reactRef,
    navRef,
    skillsContainerRef,
    wrapperRef,
    projectContainerRef,
  } = useRefs();

  //aRAY
  const iconArrayLeft = [
    webstromRef,
    figmaRef,
    nodeRef,
    postmanRef,
    tailwindRef,
    reactRef,
  ];

  const iconArrayRight = [
    githubRef,
    expressRef,
    gitRef,
    cssRef,
    sqlRef,
    viteRef,
  ];

  const iconArrayBottom = [
    fireRef,
    ideaRef,
    vscodeRef,
    jsRef,
    htmlRef,
    javaRef,
    mongoRef,
  ];

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

  useGSAP(() => {
    //Initial set values
    gsap.set(navRef.current, { autoAlpha: 0 });
    gsap.set(titleRef.current, { autoAlpha: 0, z: -1000 });

    let mm = gsap.matchMedia();

    mm.add(
      {
        isMobile: "(max-width: 639px)",
        isDesktop: "(min-width: 640px)",
      },
      (context) => {
        let { isMobile, isDesktop } = context.conditions;

        //  pre Animation
        let preTl = gsap.timeline({
          scrollTrigger: {
            trigger: skillsContainerRef.current,
            start: "top 90%",
            end: "bottom bottom",
            scrub: true,
            markers: true,
            anticipatePin: 1.5,
            toggleActions: "play pause play pause",
          },
        });

        preTl.to(
          titleRef.current,
          {
            autoAlpha: 1,
            z: 0,
            duration: 1,
            ease: "power1.inOut",
          },
          "<0.2"
        );

        //Desktop Animation
        if (isDesktop) {
          let masterTl = gsap.timeline({
            scrollTrigger: {
              trigger: wrapperRef.current,
              start: "top top",
              end: "+=400%",
              pin: true,
              scrub: true,
            },
          });

          iconArrayRight.forEach((ref) => {
            masterTl.fromTo(
              ref.current,
              {
                x: 200,
                y: 400,
                rotate: 90,
                autoAlpha: 0,
              },
              {
                autoAlpha: 1,
                x: 0,
                y: 0,
                rotate: -360,
                ease: "power3.inOut",
                duration: isMobile ? 0.1 : 0.7,
              },
              "<"
            );
          });

          iconArrayLeft.forEach((ref) => {
            masterTl.fromTo(
              ref.current,
              {
                x: -200,
                y: 400,
                rotate: -90,
                autoAlpha: 0,
              },
              {
                autoAlpha: 1,
                x: 0,
                y: 0,
                rotate: 360,
                ease: "power3.inOut",
                duration: isMobile ? 0.1 : 0.7,
              },
              "<"
            );
          });

          iconArrayBottom.forEach((ref) => {
            masterTl.fromTo(
              ref.current,
              {
                y: 400,
                rotate: -90,
                autoAlpha: 0,
              },
              {
                autoAlpha: 1,
                x: 0,
                y: 0,
                rotate: 360,
                ease: "power3.inOut",
                duration: isMobile ? 0.1 : 0.7,
              },
              "<"
            );
          });

          masterTl.to(
            navRef.current,
            {
              autoAlpha: 1,
              duration: 0.4,
            },
            "<0.2"
          );

          if (isDesktop) {
            masterTl.to(
              skillsContainerRef.current,
              {
                scale: 0.9,
                duration: 0.5,
              },
              "b"
            );

            masterTl.to(
              projectContainerRef.current,
              {
                yPercent: -100,
                duration: 0.7,
              },
              "b"
            );
          }
        } else {
          let masterTl = gsap.timeline({
            scrollTrigger: {
              trigger: skillsContainerRef.current,
              start: "top top",
              end: () => `+=800`,
              pin:skillsContainerRef.current,
              // pin: projectContainerRef.current,
              scrub: true,
              invalidateOnRefresh: true,
              pinSpacing: true,
              markers: true,
            },
          });

          iconArrayRight.forEach((ref) => {
            masterTl.fromTo(
              ref.current,
              {
                x: 200,
                y: 400,
                rotate: 90,
                autoAlpha: 0,
              },
              {
                autoAlpha: 1,
                x: 0,
                y: 0,
                rotate: -360,
                ease: "power3.inOut",
                duration: 0.9,
              },
              "<"
            );
          });

          iconArrayLeft.forEach((ref) => {
            masterTl.fromTo(
              ref.current,
              {
                x: -200,
                y: 400,
                rotate: -90,
                autoAlpha: 0,
              },
              {
                autoAlpha: 1,
                x: 0,
                y: 0,
                rotate: 360,
                ease: "power3.inOut",
                duration: 0.9,
              },
              "<"
            );
          });

          iconArrayBottom.forEach((ref) => {
            masterTl.fromTo(
              ref.current,
              {
                y: 400,
                rotate: -90,
                autoAlpha: 0,
              },
              {
                autoAlpha: 1,
                x: 0,
                y: 0,
                rotate: 360,
                ease: "power3.inOut",
                duration: 0.9,
              },
              "<"
            );
          });

          masterTl.to(
            navRef.current,
            {
              autoAlpha: 1,
              duration: 0.4,
            },
            "<0.2"
          );
        }

        return () => {
          preTl.kill();
          // masterTl.kill();
          ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
      }
    );

    window.addEventListener("load", () => {
      ScrollTrigger.refresh();
    });
  }, []);

  return (
    <div>
      <NavBar />
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <div ref={wrapperRef} id="wrapper">
        <section id="skills" className="min-h-screen relative" ref={skillsContainerRef}>
          <Skills />
        </section>
        <section
          ref={projectContainerRef}
          id="projects"
          className=" w-full relative  sm:absolute "
        >
          <Projects />
        </section>
      </div>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
