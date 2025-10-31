import React from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { assets } from "../../assets/images/assets";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutContainerRef = useRef(null);
  const aboutTextRef = useRef(null);

  // useGSAP(() => {
  //   const aboutTl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: aboutContainerRef.current,
  //       start: "top 30%",
  //       pin: true,
  //       markers: true,
  //     },
  //   });
  // });

  return (
    <div ref={aboutContainerRef} className="h-screen">
      <div>
        <h1
          ref={aboutTextRef}
          className="font-integral-extra-bold text-6xl sm:text-7xl mt-6 "
        >
          Who{" "}
          <span className=" bg-black text-[#D7FF00] px-5 pb-4 pt-0 inline-block ">
            AM I
          </span>{" "}
          ?
        </h1>
      </div>

      <div>
        <p>
          I'm Harishihan Chandrakumar — a Full Stack Developer, Designer, and
          Artist. I love turning ideas into interactive experiences, whether
          it's building web apps with the MERN stack, designing clean and
          user-friendly interfaces, or creating artwork that inspires. I enjoy
          solving real problems with code, experimenting with new technologies,
          and bringing creativity into every project I work on. I enjoy working
          across diverse domains — building web applications, designing
          intuitive interfaces, and expressing ideas through art
        </p>
        <div>
          <img src="" alt="" />
          <div>
            <button>Download CV</button>
            <button>Reach Me</button>
          </div>
        </div>
      </div>

      <p>
        [ development isn’t just about writing code — it’s about creating things
        that make an impact. ]
      </p>

      {/* <div className="w-[90%] flex items-center justify-evenly mx-auto px-4 py-4 ">
        <p className="w-[90%] bg-[#D7FF00] px-8 py-11">
          Hi, I’m Harishihan Chandrakumar — a Full Stack Developer, Designer,
          and Artist.
          <br /> <br />I love turning ideas into interactive experiences,
          whether it’s building web apps with the MERN stack, designing clean
          and user-friendly interfaces, or creating artwork that inspires.
          <br /> <br /> I enjoy solving real problems with code, experimenting
          with new technologies, and bringing creativity into every project I
          work on. I enjoy working across diverse domains — building web
          applications, designing intuitive interfaces, and expressing ideas
          through art <br /> <br /> For me, development isn’t just about writing
          code — it’s about creating things that make an impact.
        </p>
        {/* <div className="h-full flex flex-col items-center justify-center  ">
          <div className="overflow-hidden">
            <img
            src={assets.me}
            alt=""
            className="w-sm objcet-cover relative bottom-8"
          />
          </div>
          <div className="w-full ">
            <button className="w-[50%] py-3 border">Download CV</button>
            <button className="w-[50%] py-3 bg-black text-white">
              Reach Me
            </button>
          </div>
        </div> */}
      {/* </div> */}
    </div>
  );
};

export default About;
