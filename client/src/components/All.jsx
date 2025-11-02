import React, { useRef } from "react";
import { assets } from "../assets/images/assets.js";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRefs } from "../context/RfsContext.jsx";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const All = () => {
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
    reactRef,
  } = useRefs();

  return (
    <div ref={mainContainer} className="relative w-full h-full">
      <div className="font-integral-extra-bold text-[40px] sm:text-5xl lg:text-7xl  w-[70%] mx-auto text-center mb-10">
        The{" "}
        <span className=" bg-black text-[#D7FF00] px-5 pb-4 pt-0 inline-block ">
          Stack
        </span>{" "}
        <p>Behind My Work</p>
      </div>
      <div className="flex">
        <img
          ref={figmaRef}
          src={assets.figma}
          alt=""
          className="icon top-[-15%] left-[16%]"
        />
        <img
          ref={webstromRef}
          src={assets.webstrom}
          alt=""
          className="icon top-[55%] left-[6%] scale-105"
        />
        <img ref={tailwindRef} src={assets.tailwind} alt="" className="icon bottom-[-50%] left-[8%]"/>

        <img ref={reactRef} src={assets.react} alt="" className="icon top-[110%] left-[23%]"/>
        <img ref={nodeRef} src={assets.node} alt="" className="icon top-[170%] left-[16%]"/>
        <img ref={fireRef} src={assets.firebase} alt="" className="icon top-[155%] left-[31%]"/>
        <img ref={mongoRef} src={assets.mongodb} alt="" className="icon top-[120%] left-[40%]"/>
        <img ref={vscodeRef} src={assets.vscode} alt="" className="icon top-[130%] left-[54%]" />
        <img ref={jsRef} src={assets.js} alt="" className="icon top-[170%] left-[46%]" />
        <img ref={javaRef} src={assets.java} alt="" className="icon top-[95%] left-[63%]" />
        <img  ref={ideaRef} src={assets.idea} alt="" className="icon top-[170%] left-[61%]"/>
        <img ref={cssRef} src={assets.css} alt="" className="icon top-[110%] left-[75%]" />
        <img ref={htmlRef} src={assets.html} alt=""  className="icon top-[153%] left-[71%]"/>
        <img ref={githubRef} src={assets.github} alt="" className="icon top-[168%] left-[81%]"/>
        <img ref={gitRef} src={assets.git} alt="" className="icon top-[115%] left-[86%]" />
        <img ref={sqlRef} src={assets.mysql} alt="" className="icon top-[60%] left-[90%]" />
        <img ref={expressRef} src={assets.express} alt="" className="icon top-[10%] left-[79%]"/>
        {/* <img ref={postmanRef} src={assets.postman} alt="" /> */}
        {/* <img ref={viteRef} src={assets.vite} alt="" /> */}
      </div>
    </div>
  );
};

export default All;
