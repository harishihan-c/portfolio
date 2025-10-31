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
    gsap.set(finalRef.current, { autoAlpha: 0, });

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

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=2000",
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
        duration: 1,
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
        y: "-55vh", // move up to top area
        duration: 1,
        ease: "power2.inOut",
      },
      "a"
    );

    //Show final text
    tl.to(finalRef.current, {
      z: 0,
      autoAlpha: 1,
      duration: 3,
      ease: "power1.inOut",
    });

    tl.to({}, { duration: 1 });

    return () => {
      introTl.kill();
      tl.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  });
  return (
    <div
      ref={containerRef}
      className=" flex flex-col justify-center ml-14 h-full relative perspective-distant bg-amber-200"
    >
      <p
        ref={helloRef}
        className="relative w-fit mt-40 sm:mt-80 font-integral-extra-bold text-5xl sm:text-7xl [clip-path: inset(0%_0%_0%_0%]"
      >
        Hello,
      </p>

      <p
        ref={nameTextRef}
        className="font-integral-extra-bold text-5xl sm:text-7xl mt-6 w-fit relative [clip-path:inset(0%_100%_0%_0%)]"
      >
        I'm{" "}
        <span className=" bg-black text-[#D7FF00] px-5 pb-4  inline-block">
          Harry,
        </span>
      </p>

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
