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
    <div
      ref={aboutContainerRef}
      className="h-screen bg-dark-olive relative pt-5 px-6"
    >
      <div>
        <h1
          ref={aboutTextRef}
          className="font-integral-extra-bold text-5xl sm:text-7xl "
        >
          Who{" "}
          <span className=" bg-black text-[#D7FF00] px-5 pb-4 pt-0 inline-block ">
            AM I
          </span>{" "}
          ?
        </h1>
      </div>

      <div className="flex flex-col sm:flex-row w-full justify-center items-center">
        <div className="w-full sm:w-[40%] p-6 text-white text-[15px] font-mono">
          <p>
            I'm Harishihan Chandrakumar — a Full Stack Developer, Designer, and
            Artist.
          </p>
          <br />
          <p>
            {" "}
            I love turning ideas into interactive experiences, whether it's
            building web apps with the MERN stack, designing clean and
            user-friendly interfaces, or creating artwork that inspires.
          </p>{" "}
          <br />
          <p>
            I enjoy solving real problems with code, experimenting with new
            technologies, and bringing creativity into every project I work on.
            I enjoy working across diverse domains — building web applications,
            designing intuitive interfaces, and expressing ideas through art
          </p>
        </div>
        <div className="w-full sm:w-[40%] flex flex-col justify-center items-center">
          <img src={assets.me} alt="" className="w-80 -translate-y-4" />
          <div className="w-full flex justify-center items-center">
            <button className="w-48 py-2 bg-lime-primary">Download CV</button>
            <button className="w-48 py-2 bg-black text-white ">
              Reach Me
            </button>
          </div>
        </div>
      </div>

      <p className='font-mono mx-auto w-1/2 text-center text-lime-primary mt-10 capitalize'>
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
