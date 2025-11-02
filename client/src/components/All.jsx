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
  } = useRefs();

  return (
    <div ref={mainContainer} className="">
      <div className="font-integral-extra-bold text-[40px] sm:text-7xl  w-[70%] mx-auto text-center">
        The{" "}
        <span className=" bg-black text-[#D7FF00] px-5 pb-4 pt-0 inline-block ">
          Stack
        </span>{" "}
        <p>Behind My Work</p>
      </div>
      <div className=" w-[7%] sm:w-[5%] flex">
        <img ref={cssRef} src={assets.css} alt="" />
        <img ref={expressRef} src={assets.express} alt="" />
        <img ref={figmaRef} src={assets.figma} alt="" />
        <img ref={fireRef} src={assets.firebase} alt="" />
        <img ref={gitRef} src={assets.git} alt="" />
        <img ref={githubRef} src={assets.github} alt="" />
        <img ref={htmlRef} src={assets.html} alt="" />
        <img ref={ideaRef} src={assets.idea} alt="" />
        <img ref={javaRef} src={assets.java} alt="" />
        <img ref={jsRef} src={assets.js} alt="" />
        <img ref={mongoRef} src={assets.mongodb} alt="" />
        <img ref={sqlRef} src={assets.mysql} alt="" />
        <img ref={nodeRef} src={assets.node} alt="" />
        <img ref={postmanRef} src={assets.postman} alt="" />
        <img ref={tailwindRef} src={assets.tailwind} alt="" />
        <img ref={viteRef} src={assets.vite} alt="" />
        <img ref={vscodeRef} src={assets.vscode} alt="" />
        <img ref={webstromRef} src={assets.webstrom} alt="" />
      </div>
    </div>
  );
};

export default All;
