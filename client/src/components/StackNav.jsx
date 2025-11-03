import React, { useState, useRef } from "react";
import All from "./All";
import Frontend from "./Frontend";
import Backend from "./Backend";
import Languages from "./Languages";
import Tools from "./Tools";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRefs } from "../context/RfsContext";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const StackNav = () => {
  const {
    mainContainer,
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
  } = useRefs();

  //aRAY
  const iconArrayLeft = [
    cssRef,
    expressRef,
    figmaRef,
    fireRef,
    tailwindRef,
    githubRef,
    ideaRef,
    reactRef,
  ];

  const iconArrayRight = [
    gitRef,
    htmlRef,
    javaRef,
    jsRef,
    mongoRef,
    sqlRef,
    nodeRef,
    postmanRef,
    viteRef,
    vscodeRef,
    webstromRef,
  ];

  const [active, setActive] = useState("all");

  const nameArray = ["all", "frontend", "backend", "languages", "tools"];

  const handleOnClick = (index) => {
    setActive(() => nameArray[index]);
  };

  //Main Component useRefs,
  const skillsContainer = useRef(null);
  const navRef = useRef(null);

  // <<<<<<<-------------Animations---------------------------->>>>>>>>>>>>
  useGSAP(() => {
    //Initial set values
    gsap.set(navRef.current, { autoAlpha: 0 });
    gsap.set(titleRef.current, { autoAlpha: 0, z: -1000 });

    // let icTl = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: skillsContainer.current,
    //     start: "top 20%",
    //     // end: "+=1500",
    //     toggleActions: "play pause resume pause",
    //     scrub: true
    //   },
    // });

    // iconArrayLeft.forEach((ref) => {
    //   icTl.fromTo(
    //     ref.current,
    //     {
    //       y: -25,
    //       rotate: -5,
    //       duration: 0.9,
    //     },
    //     {
    //       y: 10,
    //       rotate: 0,
    //       // repeat: -1,
    //       yoyo: true,
    //       ease: "power3.inOut",
    //       duration: 0.9,
    //     },"a"
    //   );
    // });

    // iconArrayRight.forEach((ref) => {
    //   icTl.fromTo(
    //     ref.current,
    //     {
    //       y: -25,
    //       rotate: 10,
    //       duration: 0.9,
    //     },
    //     {
    //       y: 10,
    //       rotate: 0,
    //       // repeat: -1,
    //       yoyo: true,
    //       ease: "power3.inOut",
    //       duration: 0.9,
    //     },"a"
    //   );
    // });

    let mm = gsap.matchMedia();

    mm.add(
      {
        isMobile: "(max-width: 639px)",
        isDesktop: "(min-width: 640px)",
      },
      (context) => {
        let { isMobile, isDesktop } = context.conditions;

        //pre Animation
        let preTl = gsap.timeline({
          scrollTrigger: {
            trigger: skillsContainer.current,
            start: "top 90%",
            end: "bottom bottom",
            scrub: true,
            markers: true,
          },
        });

        preTl.to(
          titleRef.current,
          {
            autoAlpha: 1,
            z: 0,
            duration: 10,
            ease: "power1.inOut",
          },
          "<0.2"
        );

        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: skillsContainer.current,
            start: "top top",
            end: "+=1000",
            scrub: true,
            pin: true,
            pinSpacing: true,
            markers: true,
          },
        });

        tl.to(
          navRef.current,
          {
            autoAlpha: 1,
            duration: 0.2,
          },
          "a"
        );

        iconArrayLeft.forEach((ref) => {
          tl.fromTo(
            ref.current,
            {
              y: -25,
              rotate: -5,
              // duration: 0.9,
            },
            {
              y: 10,
              rotate: 0,
              // repeat: -1,
              // yoyo: true,
              ease: "power3.inOut",
              duration: 0.9,
            },
            "a"
          );
        });

        iconArrayRight.forEach((ref) => {
          tl.fromTo(
            ref.current,
            {
              y: -25,
              rotate: 10,
              // duration: 0.9,
            },
            {
              y: 10,
              rotate: 0,
              // repeat: -1,
              yoyo: true,
              ease: "power3.inOut",
              duration: 0.9,
            },
            "a"
          );
        });
      }
    );
  });

  return (
    <div
      ref={skillsContainer}
      className="min-h-screen w-screen flex flex-col relative perspective-distant "
    >
      <nav
        ref={navRef}
        className="flex items-center justify-center gap-8 h-[30%] w-full"
      >
        <button
          onClick={() => handleOnClick(0)}
          className={`${
            active === nameArray[0] ? "text-lime-primary bg-black" : ""
          } px-6  py-1.5`}
        >
          All
        </button>
        <button
          onClick={() => handleOnClick(1)}
          className={`${
            active === nameArray[1] ? "text-lime-primary bg-black" : ""
          } px-6 py-1.5`}
        >
          Frontend
        </button>
        <button
          onClick={() => handleOnClick(2)}
          className={`${
            active === nameArray[2] ? "text-lime-primary bg-black" : ""
          }  px-6 py-1.5`}
        >
          Backend
        </button>
        <button
          onClick={() => handleOnClick(3)}
          className={`${
            active === nameArray[3] ? "text-lime-primary bg-black" : ""
          }  px-6 py-1.5`}
        >
          Languages
        </button>
        <button
          onClick={() => handleOnClick(4)}
          className={`${
            active === nameArray[4] ? "text-lime-primary bg-black" : ""
          }  px-6 py-1.5`}
        >
          Tools
        </button>
      </nav>

      <div>
        {active === "all" && <All />}
        {active === "frontend" && <Frontend />}
        {active === "backend" && <Backend />}
        {active === "languages" && <Languages />}
        {active === "tools" && <Tools />}
      </div>
    </div>
  );
};

export default StackNav;
