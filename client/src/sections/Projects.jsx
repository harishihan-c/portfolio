import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRefs } from "../context/RfsContext";
import ShowProjects from "../components/ShowProjects";
import ShowDesigns from "../components/ShowDesigns";
import ShowArts from "../components/ShowArts";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const { title1Ref, titleWrapperRef } = useRefs();
  const navArray = ["Projects", "Designs", "Arts"];

  const [active, setActive] = useState("Projects");

  const mainContainer = useRef(null);

  return (
    <div
      ref={mainContainer}
      className="min-h-screen bg-[#E6E6E6] px-10 sm:px-20 relative w-full"
    >
      <div className="flex justify-between items-center py-8 font-integral-regular text-[20px] ">
        {navArray.map((id) => (
          <div className="relative flex items-center justify-center">
            <div
              className={`w-full h-full absolute [clip-path:inset(10%_25%_0%_0%)] -left-2 ${
                active === id ? " bg-lime-primary " : ""
              }`}
            ></div>
            <button
              className="relative z-20"
              key={id}
              onClick={() => setActive(id)}
            >
              {id}
            </button>
          </div>
        ))}
      </div>
      <div ref={titleWrapperRef} className='hidden'>
        <div className="flex items-center justify-center mt-30 perspective-[1000px] ">
        <div
          ref={title1Ref}
          className="transform-gpu  font-integral-extra-bold text-[40px] sm:text-5xl lg:text-7xl w-[60%]  sm:w-[70%]  mx-auto text-center mb-10"
        >
          <p className="relative w-full  ">Things I've</p>{" "}
          <span className=" bg-black text-[#D7FF00] px-5 pb-4 pt-0 inline-block mt-4 ">
            Built
          </span>{" "}
        </div>
      </div>
      </div>
      <div>
        {active === navArray[0] && <ShowProjects />}
        {active === navArray[1] && <ShowDesigns />}
        {active === navArray[2] && <ShowArts />}
      </div>
    </div>
  );
};

export default Projects;
