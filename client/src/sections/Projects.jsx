import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const projectContainerRef = useRef(null);

  useGSAP(() => {
    let mm = gsap.matchMedia();

    mm.add(
      {
        isMobile: "(max-width: 639px)",
        isDesktop: "(min-width: 640px)",
      },
      (context) => {
        let { isMobile, isDesktop } = context.conditions;

        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: projectContainerRef.current,
            start: "top bottom",
            end: "+=2000",
            pin: true,
            scrub: true,
          },
        });
      }
    );
  });
  return (
    <div ref={projectContainerRef} className="h-screen bg-amber-400">
      <div className="font-integral-extra-bold text-[40px] sm:text-5xl lg:text-7xl w-[60%]  sm:w-[70%]  mx-auto text-center mb-10">
        The{" "}
        <span className=" bg-black text-[#D7FF00] px-5 pb-4 pt-0 inline-block ">
          Stack
        </span>{" "}
        <p>Behind My Work</p>
      </div>
    </div>
  );
};

export default Projects;
