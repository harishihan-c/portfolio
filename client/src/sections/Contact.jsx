import React, { useRef } from "react";
import { assets } from "../assets/images/assets";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRefs } from "../context/RfsContext";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
const Contact = () => {
  const { contactRef, titleRef1, titleRef2 } = useRefs()

  // useGSAP(() => {
  //   const mm = gsap.matchMedia();

  //   mm.add(
  //     {
  //       isMobile: "(max-width: 639px",
  //       isDesktop: "(min-width: 640px)",
  //     },
  //     (context) => {
  //       const { isMobile, isDesktop } = context.conditions;

  //       const tl = gsap.timeline({
  //         scrollTrigger: {
  //           trigger: contactRef.current,
  //           start: "top top",
  //           end: "+=100%",
  //           // pin: true,
  //           scrub: true,
  //           // pinSpacing: false,
  //           markers: true,
  //           pinReparent: true
  //         },
  //       });

  //       tl.fromTo(
  //         titleRef1.current,
  //         {
  //           clipPath: "inset(0% 100% 0% 0%)",
  //         },
  //         {
  //           clipPath: "inset(0% 0% 0% 0%)",
  //           duration: 0.8,
  //         }
  //       );

  //       tl.fromTo(
  //         titleRef2.current,
  //         {
  //           clipPath: "inset(0% 100% 0% 0%)",
  //         },
  //         {
  //           clipPath: "inset(0% 0% 0% 0%)",
  //           duration: 0.8,
  //         }
  //       );
  //     }
  //   );
  // });

  return (
    <div ref={contactRef} className="min-h-screen flex flex-col relative ">
      <div className="flex items-center justify-around py-50 w-full h-full ">
        <div className="font-integral-extra-bold text-[40px] sm:text-5xl lg:text-7xl w-[60%]  sm:w-full  mx-auto text-center mb-10">
          <p ref={titleRef1}>Let's Built something</p>
          <span
            ref={titleRef2}
            className=" bg-black text-[#D7FF00] px-5 pb-4 pt-0 inline-block mt-4"
          >
            together
          </span>{" "}
        </div>
      </div>
      <div className="bg-lime-primary">
        <div className="mx-auto w-[80%]">
          <div className="relative flex h-full pb-10 ">
            <div className="w-[40%] sm:w-full flex flex-col sm:items-center">
              <div className="bg-black w-[80%] sm:w-1/3 h-full flex justify-evenly items-end pb-10">
                <span className="text-white -rotate-90 whitespace-nowrap w-1/3 pl-2 font-integral-medium text-2xl">
                  <span className="text-lime-primary">Connect </span>With Me
                </span>
                <div className="w-1/4 h-full flex flex-col items-center justify-end gap-y-2 ">
                  <img src={assets.githubicon} alt="" />
                  <img src={assets.linkedin} alt="" />

                  <img src={assets.instagram} alt="" />
                  <img className="w-8" src={assets.facebook} alt="" />
                </div>
              </div>
              <button className="bg-white h-20 w-[80%] sm:w-1/3 text-xs sm:text-sm">
                Download CV
              </button>
            </div>
            <div className="w-full h-full flex flex-col items-center justify-center  gap-y-8">
              <h1 className="font-integral-extra-bold text-[40px] sm:text-5xl lg:text-7xl mb-5">
                Reach Me
              </h1>
              <input
                type="text"
                placeholder="Name"
                className="w-full sm:w-3/5 bg-white px-3 py-3 text-sm"
              />
              <input
                type="email"
                placeholder="Email"
                className=" w-full sm:w-3/5 bg-white px-3 py-3 text-sm"
              />
              <textarea
                placeholder="Leave a Message"
                className="w-full sm:w-3/5 bg-white px-3 py-3 h-32 text-sm"
              />
              <button className="w-full sm:w-3/5 bg-black text-lime-primary py-3 text-sm">
                Send
              </button>
            </div>
          </div>
        </div>
        <div className='flex flex-col sm:flex-row items-center justify-around text-xs py-4 ' >
          <p>© 2025 Harishihan Chandrakumar. All Rights Reserved.</p>
          <p>Batticaloa, Sri Lanka</p>
          <p>harishihan@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
