import React from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
const Home = () => {
  useGSAP(() => {
    gsap.from("#hello", {
      y: 30,
      opacity: 0,
      duration: 1,
      ease: "back.inOut",
      // scrollTrigger: {
      //   trigger: "#hello",
      //   start: "top 40%",
      //   end: "bottom 40%",
      //   pin:true,
      //   markers: true,
      // },
    });

    // gsap.from("#name", {
    //   x: -600,
    //   durarion: 1,
    //   delay: 1,
    //   scrollTrigger: {
    //     trigger: "#name",
    //     start: "top center",
    //     end: "bottom 40%",
    //     markers: true,
    //     pin: true,
    //     scrub: true,
    //   },
    // });
  });
  return (
    <div className=" flex flex-col justify-center ml-14 h-screen">
      <p
        id="hello"
        className="font-integral-extra-bold text-6xl sm:text-7xl mt-6 "
      >
        Hello,
      </p>

      <p
        id="name"
        className="font-integral-extra-bold text-6xl sm:text-7xl mt-6 w-fit relative"
      >
        I'm{" "}
        <span className=" bg-black text-[#D7FF00] px-5 pb-4 pt-0 inline-block ">
          Harry,
        </span>
        <div
          id="name-div"
          className="bg-amber-500 w-full h-full absolute top-0 -skew-x-12"
        ></div>
      </p>

      {/* <div className="font-integral-extra-bold text-6xl sm:text-7xl mt-6 text-center"><p >A FullStack </p>
<p>Developer, Designer</p> <p> and an Artist</p></div> */}
    </div>
  );
};

export default Home;
