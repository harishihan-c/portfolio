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
  } = useRefs();

  const [active, setActive] = useState("all");

  const nameArray = ["all", "frontend", "backend", "languages", "tools"];

  const handleOnClick = (index) => {
    setActive(() => nameArray[index]);
  };

  //Main Component useRefs,
  const skillsContainer = useRef(null);

  // <<<<<<<-------------Animations---------------------------->>>>>>>>>>>>
  useGSAP(() => {
    //Initial set values
    gsap.set(cssRef.current, { y: -300, x: 50 });

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
            trigger: skillsContainer.current,
            start: "top top",
            end: "+=1000",
            scrub: true,
            pin: true,
            markers: true,
          },
        });
      }
    );
  });

  return (
    <div ref={skillsContainer} className="min-h-screen flex flex-col ">
      <nav className="flex items-center justify-center gap-8 h-[30%] w-full">
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
