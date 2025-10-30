import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const containerRef = useRef(null);

  const helloRef = useRef(null);
  const helloVanishRef = useRef(null);

  const nameSectionRef = useRef(null);
  const nameOverlayRef = useRef(null);
  const nameTextRef = useRef(null);

  const finalRef = useRef(null);

  useGSAP(() => {
    gsap.set(nameOverlayRef.current, { x: "0%" });
    gsap.set(helloVanishRef.current, { x: "-100%" });
    gsap.set(finalRef.current, { autoAlpha: 1, y: 50 });
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 30%",
        end: "+=1500",
        scrub: true,
        pin: true,
        pinSpacing: true,
        markers: true,
      },
    });

    // 1️⃣ Reveal the name
    tl.to(nameOverlayRef.current, {
      x: "110%", // slide right to reveal name
      duration: 0.4,
      ease: "none",
    });

    // 2️⃣ Cover Hello
    tl.to(
      helloVanishRef.current,
      {
        x: "0%",
        duration: 0.1,
        ease: "none",
      },
      "+=0.2"
    );

    // 3️⃣ Move and shrink name to top (pin-like effect)
    tl.to(
      nameTextRef.current,
      {
        y: "-40vh", // move up to top area
        scale: 0.45,
        transformOrigin: "left top",
        duration: 0.3,
        ease: "power2.inOut",
      },
      "+=0.2"
    );

    // 4️⃣ Show final text (FullStack Developer...)
    tl.to(
      finalRef.current,
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.6,
        ease: "power1.out",
      },
      "<0.1"
    );
  });
  return (
    <div
      ref={containerRef}
      className=" flex flex-col justify-center ml-14 h-screen relative top-40"
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
        className="font-integral-extra-bold text-6xl sm:text-7xl mt-6 w-fit relative"
      >
        I'm{" "}
        <span className=" bg-black text-[#D7FF00] px-5 pb-4 pt-0 inline-block ">
          Harry,
        </span>
        <div
          ref={nameOverlayRef}
          className="bg-white w-[110%] h-full absolute top-0 -left-10 -skew-x-12"
        ></div>
      </p>

      <div
        ref={finalRef}
        className="font-integral-extra-bold text-6xl sm:text-7xl mt-6 text-center"
      >
        <p>A FullStack </p>
        <p>Developer, Designer</p> <p> and an Artist</p>
      </div>
    </div>
  );
};

export default Home;
