import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  // useEffect(() => {
  //   // Initialize a new Lenis instance for smooth scrolling
  //   const lenis = new Lenis();

  //   // Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
  //   lenis.on("scroll", ScrollTrigger.update);

  //   // Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
  //   // This ensures Lenis's smooth scroll animation updates on each GSAP tick
  //   gsap.ticker.add((time) => {
  //     lenis.raf(time * 1000); // Convert time from seconds to milliseconds
  //   });

  //   // Disable lag smoothing in GSAP to prevent any delay in scroll animations
  //   gsap.ticker.lagSmoothing(0);
  // }, []);

  const containerRef = useRef(null);

  const helloRef = useRef(null);
  const helloVanishRef = useRef(null);

  const nameSectionRef = useRef(null);
  const nameOverlayRef = useRef(null);
  const nameTextRef = useRef(null);

  const finalRef = useRef(null);

  useGSAP(() => {
    gsap.set(nameTextRef.current, { opacity: 0 });
    gsap.set(nameOverlayRef.current, { x: "-30%" });
    gsap.set(helloVanishRef.current, { x: "-100%" });
    gsap.set(finalRef.current, { autoAlpha: 0 ,  y: -200,});
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 30%",
        end: "+=1000",
        scrub: true,
        pin: true,
        pinSpacing: true,
        markers: true,
      },
    });

    //name overlay
    ScrollTrigger.create({
      trigger: containerRef.current,
      onEnter: () => {
        gsap.to(
          nameOverlayRef.current,
          {
            x: "110%",
            duration: 3,
            ease: "power3",
          },
          "+=0.1"
        );
      },
    });

    //name text
    ScrollTrigger.create({
      trigger: containerRef.current,
      onEnter: () => {
        gsap.to(nameTextRef.current, {
          opacity: 1,
          duration: 1,
          ease: "power3",
        });
      },
    });

    //Cover Hello
    tl.to(
      helloVanishRef.current,
      {
        x: "0%",
        duration: 0.4,
        ease: "none",
      },
      "+=0.2"
    );

    //Move and shrink name to top
    tl.to(
      nameTextRef.current,
      {
        scale: 0.45,
        transformOrigin: "left top",
      },
      "a"
    );

    tl.to(
      nameTextRef.current,
      {
        y: "-35vh", // move up to top area
        duration: 1,
        ease: "power2.inOut",
      },
      "a"
    );

    //Show final text
    tl.to(
      finalRef.current,
      {
        autoAlpha: 2,
        duration: 1,
        ease: "power1.inOut",
      },
    );
  });
  return (
    <div
      ref={containerRef}
      className=" flex flex-col justify-center ml-14 h-screen relative top-40 perspective-distant"
    >
      <p
        ref={helloRef}
        className="relative w-fit font-integral-extra-bold text-6xl sm:text-7xl mt-6 "
      >
        Hello,
        <div
          ref={helloVanishRef}
          className="bg-white w-[110%] h-[120%] absolute top-0 -left-2 -skew-x-12"
        ></div>
      </p>

      <p
        ref={nameTextRef}
        className="font-integral-extra-bold text-4xl sm:text-7xl mt-6 w-fit relative"
      >
        I'm{" "}
        <span className=" bg-black text-[#D7FF00] px-5 pb-4 pt-0 inline-block ">
          Harry,
        </span>
        <div
          ref={nameOverlayRef}
          className="bg-white w-[110%] h-full absolute top-0 -right-45 -skew-x-12 "
        ></div>
      </p>

      <div
        ref={finalRef}
        className="font-integral-extra-bold text-4xl sm:text-7xl mt-6 text-center"
      >
        <p>A FullStack </p>
        <p>Developer, Designer</p> <p> and an Artist</p>
      </div>
    </div>
  );
};

export default Home;
