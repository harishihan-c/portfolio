import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRefs } from "../context/RfsContext";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  return (
    <div className="h-screen bg-[#E6E6E6]">
      <div className="flex justify-evenly items-center py-8 font-integral-regular text-[20px] ">
        <button>Projects</button>
        <button>Designs</button>
        <button>Arts</button>
      </div>
      <div className="flex items-center justify-center mt-30">
        <div className="font-integral-extra-bold text-[40px] sm:text-5xl lg:text-7xl w-[60%]  sm:w-[70%]  mx-auto text-center mb-10">
          <p>Things I've</p>{" "}
          <span className=" bg-black text-[#D7FF00] px-5 pb-4 pt-0 inline-block ">
            Built
          </span>{" "}
        </div>
      </div>
    </div>
  );
};

export default Projects;
