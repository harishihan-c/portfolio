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
  const navArray = ["Projects", "Designs", "Arts"];

  const [active, setActive] = useState("Projects");

  return (
    <div className="min-h-screen bg-[#E6E6E6] px-20">
      <div className="flex justify-between items-center py-8 font-integral-regular text-[20px] ">
        {navArray.map((id) => (
          <button key={id} onClick={() => setActive(id)}>
            {id}
          </button>
        ))}
      </div>
      {/* <div className="flex items-center justify-center mt-30">
        <div className="font-integral-extra-bold text-[40px] sm:text-5xl lg:text-7xl w-[60%]  sm:w-[70%]  mx-auto text-center mb-10">
          <p>Things I've</p>{" "}
          <span className=" bg-black text-[#D7FF00] px-5 pb-4 pt-0 inline-block ">
            Built
          </span>{" "}
        </div>
      </div> */}
      <div>
        {active === navArray[0] && <ShowProjects />}
        {active === navArray[1] && <ShowDesigns />}
        {active === navArray[2] && <ShowArts />}
      </div>

      
    </div>
  );
};

export default Projects;
