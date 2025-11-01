import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const containerRef = useRef(null);

  const helloRef = useRef(null);

  const nameTextRef = useRef(null);

  const finalRef = useRef(null);

  useGSAP(() => {
    gsap.set(finalRef.current, { autoAlpha: 0, z: 1000, y: -200 });

    // For any screen size
    const introTl = gsap.timeline({});

    introTl.fromTo(
      nameTextRef.current,
      {
        clipPath: "inset(0% 100% 0% 0%)",
      },
      {
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 1,
        opacity: 1,
      },
      "<0.2"
    );

    let mm = gsap.matchMedia();

    mm.add(
      {
        isMobile: "(max-width:639px)",
        isDesktop: "(min-width: 640px)",
      },
      (context) => {
        let { isMobile, isDesktop } = context.conditions;

        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: isDesktop? "+=2000" : "+=1000",
            scrub: true,
            pin: true,
            pinSpacing: true,
            markers: true,
          },
        });

        //Cover Hello
        tl.fromTo(
          helloRef.current,
          {
            clipPath: "inset(0% 0% 0% 0%)",
          },
          {
            clipPath: "inset(0% 0% 0% 100%)",
            duration: 0.05,
          }
        );

        //Move and shrink name to top
        tl.to(
          nameTextRef.current,
          {
            scale: 0.45,
            transformOrigin: "left top",
            duration: 0.5,
          },
          "a"
        );

        tl.to(
          nameTextRef.current,
          {
            y: isMobile ? "-20vh" : "-40vh",
            duration: 0.6,
            ease: "power2.inOut",
          },
          "a"
        );

        //Show final text
        tl.to(
          finalRef.current,
          {
            y: isMobile ? -150 : -280,
            z: 0,
            autoAlpha: 1,
            duration: 0.7,
            ease: "power1.inOut",
          },
          "<0.1"
        );

        // tl.to({}, { duration: 0.1 });
      }
    );

    return () => {
      introTl.kill();
      mm.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  });
  return (
    <div
      ref={containerRef}
      className=" flex flex-col justify-center  h-[60vh] sm:h-screen relative perspective-distant"
    >
      <div className="ml-8 sm:ml-14">
        <p
          ref={helloRef}
          className="relative w-fit mt-40 sm:mt-80 font-integral-extra-bold text-5xl sm:text-7xl [clip-path: inset(0%_0%_0%_0%]"
        >
          Hello,
        </p>

        <p
          ref={nameTextRef}
          className="font-integral-extra-bold text-5xl sm:text-7xl  mt-2 sm:mt-6 w-fit [clip-path:inset(0%_100%_0%_0%)]"
        >
          I'm{" "}
          <span className=" bg-black text-[#D7FF00] px-5 pb-2 sm:pb-4  inline-block">
            Harry,
          </span>
        </p>
      </div>

      <div
        ref={finalRef}
        className="font-integral-extra-bold text-4xl sm:text-7xl  text-center"
      >
        <p>A FullStack </p>
        <p>Developer, Designer</p> <p> and an Artist</p>
      </div>
    </div>
  );
};

export default Home;
