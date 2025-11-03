import React from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { assets } from "../assets/images/assets";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutContainerRef = useRef(null);
  const aboutTitleRef = useRef(null);
  const cardRef = useRef(null);
  const wrapContainerRef = useRef(null);

  useGSAP(() => {
    gsap.set(aboutContainerRef.current, {
      backgroundColor: " #ffffff",
    });

    //Pre Animation background color
    let bgTl = gsap.timeline({
      scrollTrigger: {
        trigger: aboutContainerRef.current,
        start: "top 20%",
        end: "bottom bottom",
        scrub: true,
      },
    });

    bgTl.to(aboutContainerRef.current, {
      backgroundColor: "#282c20",
      duration: 0.5,
    });

    let mm = gsap.matchMedia();

    mm.add(
      {
        isMobile: "(max-width: 639px)",
        isTab: "(max-width: 767px)",
        isDesktop: "(min-width: 768px)",
        isWide: "(min-width: 1280px)",
      },
      (context) => {
        let { isMobile, isTab, isDesktop, isWide } = context.conditions;

        // pre Animation Text and Card
        if (isDesktop) {
          let initTl = gsap.timeline({
            scrollTrigger: {
              trigger: aboutContainerRef.current,
              scrub: true,
              start: "top bottom",
              end: "+=1000",
            },
          });

          initTl.fromTo(
            aboutTitleRef.current,
            { x: 800, y: 150, autoAlpha: 0 },
            {
              y: 0,
              x: 0,
              scale: 0.7,
              transformOrigin: "left top",
              autoAlpha: 1,
              duration: 1,
              // ease: "power4.inOut",
            }
          );

          initTl.fromTo(
            cardRef.current,
            { x: 1000, autoAlpha: 0 },
            {
              x: 0,
              autoAlpha: 1,
              duration: 0.9,
            },
            "0.6"
          );
        } else {
          let initTl = gsap.timeline({
            scrollTrigger: {
              trigger: aboutContainerRef.current,
              scrub: true,
              start: "top bottom",
              end: "+=1000",
            },
          });
          initTl.fromTo(
            aboutTitleRef.current,
            { x: 800, y: 150, autoAlpha: 0 },
            {
              y: 0,
              x: 0,
              scale: 0.7,
              transformOrigin: "left top",
              autoAlpha: 1,
              duration: 1,
              // ease: "power4.inOut",
            }
          );

          initTl.fromTo(
            cardRef.current,
            { x: 1000, autoAlpha: 0 },
            {
              x: 0,
              autoAlpha: 1,
              duration: 0.9,
            },
            "0.6"
          );
        }

        //Actual Timeline
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: aboutContainerRef.current,
            start: "top top",
            end: "+=800",
            pin: true,
            scrub: true,
          },
        });

        tl.to(
          aboutTitleRef.current,
          {
            scale: 0.45,
            transformOrigin: "left top",
            duration: 0.3,
            color: "#ffffff",
          },
          "a"
        );

        // tl.to(
        //   cardRef.current,
        //   {
        //     x: 0,
        //     duration: 1.5,
        //   },
        //   "a"
        // );
      }
    );
  });
  return (
    <div
      ref={aboutContainerRef}
      className="min-h-screen bg-dark-olive relative py-8 px-6 "
    >
      <div ref={wrapContainerRef}>
        <div ref={aboutTitleRef}>
          <h1 className="font-integral-extra-bold text-[40px] sm:text-7xl ml-8 sm:ml-14 ">
            Who{" "}
            <span className=" bg-black text-[#D7FF00] px-5 pb-4 pt-0 inline-block ">
              AM I
            </span>{" "}
            ?
          </h1>
        </div>

        <div
          ref={cardRef}
          className="flex flex-col custom-lg:flex-row w-full justify-center items-center"
        >
          <div className="w-full md:w-[80%] p-6 text-white text-[14px] sm:text-[16px] md:text-[25px] custom-lg:text-[18px] font-mono">
            <p>
              I'm Harishihan Chandrakumar — a Full Stack Developer, Designer,
              and Artist.
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
              technologies, and bringing creativity into every project I work
              on. I enjoy working across diverse domains — building web
              applications, designing intuitive interfaces, and expressing ideas
              through art
            </p>
          </div>
          <div className="w-full md:w-[90%] flex flex-col justify-center items-center md:mt-20">
            <img
              src={assets.me}
              alt=""
              className="w-72 md:w-96 -translate-y-4"
            />
            <div className="w-full flex justify-center items-center text-[13px] sm:text-[16px] px-6">
              <button className="w-48 py-2 bg-lime-primary md:min-w-56">
                Download CV
              </button>
              <button className="w-48 py-2 bg-black text-white md:w-56 ">
                Reach Me
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="h-[300px] flex justify-center items-center">
        <p className="font-mono mx-auto w-3/4 text-center capitalize text-[14px]">
          [ development isn’t just about writing code — it’s about creating
          things that make an impact. ]
        </p>
      </div> */}
    </div>
  );
};

export default About;
