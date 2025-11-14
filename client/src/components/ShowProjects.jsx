import React, { useState } from "react";
import { assets } from "../assets/images/assets";

const ShowProjects = () => {
  const projectData = [
    {
      id: 1,
      title: "Auth System",
      img: `${assets.auth}`,
      icons: "",
      text: "A secure authentication system with user signup, login, and protected routes.",
      isPreview: "https://authentication-system-frontend-topaz.vercel.app/",
      isGitHub: "https://github.com/harishihan-c/Authentication-System.git",
      background: "bg-black",
      button1: "white",
      button2: "lime-primary",
      butonText1: "black",
      butonText2: "black",
    },
    {
      id: 2,
      title: "Skill Forge",
      img: `${assets.skillForge}`,
      icons: "",
      text: "A web platform that generates personalized learning roadmaps using AI.",
      isPreview: true,
      isGitHub: "https://github.com/Bhanuka10/Capstone.git",
      background: "bg-white",
      button1: "black",
      button2: "lime-primary",
      button1Text: "white",
      button2Text: "black",
    },
    {
      id: 3,
      title: "Note Taking app",
      img: `${assets.note}`,
      icons: "",
      text: " A clean and efficient app to create, organize, and manage personal notes.",
      isPreview: "https://note-taking-app-1090.onrender.com",
      isGitHub: "https://github.com/harishihan-c/Note-Taking-app.git",
      background: "bg-lime-primary",
      button1: "white",
      button2: "black",
      button1Text: "black",
      button2Text: "white",
    },
    {
      id: 4,
      title: "Gemini Clone",
      img: `${assets.gemoni}`,
      icons: "",
      text: "An AI-powered web app to ask questions and generate content using the Gemini API.",
      isPreview: true,
      isGitHub: "https://github.com/harishihan-c/Gemini-Clone.git",
      background: "bg-lime-primary",
      button1: "white",
      button2: "black",
      button1Text: "black",
      button2Text: "white",
    },
    {
      id: 5,
      title: "clothing site",
      img: `${assets.cloth}`,
      icons: "",
      text: "A modern clothing storefront showcasing products with a clean shopping interface.",
      isPreview: true,
      isGitHub: "https://github.com/harishihan-c/Clothing-website.git",
      background: "bg-black",
      button1: "white",
      button2: "lime-primary",
      butonText1: "black",
      butonText2: "black",
    },
    {
      id: 6,
      title: "Movie App",
      img: `${assets.movie}`,
      icons: "",
      text: "A movie browsing app that displays films with carousel effect",
      isPreview: true,
      isGitHub: "https://github.com/harishihan-c/Movie-Landing-Page.git",
      background: "bg-white",
      button1: "black",
      button2: "lime-primary",
      button1Text: "white",
      button2Text: "black",
    },
  ];

  const [visible, setVisible] = useState(3);

  return (
    <div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10 gap-y-9 ">
        {projectData.slice(0, visible).map((item) => (
          <div key={item.id} className={`min-h-96 ${item.background} `}>
            <h1
              className={`text-center font-integral-medium text-2xl pt-4 ${
                item.background === "bg-black" ? "text-white" : ""
              }`}
            >
              {item.title}
            </h1>
            <div className=" h-[50%] mt-2 mx-6 mb-3">
              <img
                src={item.img}
                alt=""
                className="object-cover aspect-video w-full h-full"
              />
            </div>
            <div>{item.icons}</div>
            <p
              className={`h-[15%] text-[10px] sm:text-[13px] text-center  mx-6  ${
                item.background === "bg-black" ? "text-white" : ""
              }`}
            >
              {item.text}
            </p>
            <div className="flex items-center mt-4 max-w-full mx-6 gap-3">
              <a
                href={item.isPreview}
                className={`${
                  item.id > 3 || item.id == "2" ? "hidden" : "w-full h-full "
                }`}
                target="_blank"
              >
                <button
                  className={`w-full py-2 bg-${item.button1} text-${item.button1Text} text-[12px] sm:text-[14px] cursor-pointer`}
                >
                  Preview
                </button>
              </a>
              <a
                href={item.isGitHub}
                className="w-full h-full "
                target="_blank"
              >
                <button
                  className={`w-full py-2 bg-${item.button2} text-${item.button2Text} text-[12px] sm:text-[14px] cursor-pointer`}
                >
                  Git Hub
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full flex justify-center ">
        <button
          className="w-30 h-10 bg-white my-10 cursor-pointer"
          onClick={() => {
            if (visible <= 3) {
              setVisible(visible + 3);
            } else {
              setVisible(visible - 3);
            }
          }}
        >
          {visible <= 3 ? "Show More" : "Show Less"}
        </button>
      </div>
    </div>
  );
};

export default ShowProjects;
