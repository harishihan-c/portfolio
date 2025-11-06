import React, { useState } from "react";

const ShowProjects = () => {
  const projectData = [
    {
      id: 1,
      title: "Skill Forge",
      img: "",
      icons: "",
      text: "A web platform where learners can generate AI-powered roadmaps to discover and learn new skills.",
      isPreview: true,
      isGitHub: true,
      background: "bg-black",
      button1: "white",
      button2: "lime-primary",
      butonText1: "black",
      butonText2: "black",
    },
    {
      id: 2,
      title: "Note Taking app",
      img: "",
      icons: "",
      text: "A simple yet powerful app to create, organize, and manage notes with ease",
      isPreview: true,
      isGitHub: true,
      background: "bg-white",
      button1: "black",
      button2: "lime-primary",
      button1Text: "white",
      button2Text: "black",
    },
    {
      id: 3,
      title: "Gemini Clone",
      img: "",
      icons: "",
      text: "An AI-powered web app to ask questions and generate content using the Gemini API.",
      isPreview: true,
      isGitHub: true,
      background: "bg-lime-primary",
      button1: "white",
      button2: "black",
      button1Text: "black",
      button2Text: "white",
    },
    {
      id: 4,
      title: "clothing site",
      img: "",
      icons: "",
      text: "An AI-powered web app to ask questions and generate content using the Gemini API.",
      isPreview: true,
      isGitHub: true,
      background: "bg-black",
      button1: "white",
      button2: "lime-primary",
      butonText1: "black",
      butonText2: "black",
    },
    {
      id: 5,
      title: "Movie App",
      img: "",
      icons: "",
      text: "An AI-powered web app to ask questions and generate content using the Gemini API.An AI-powered web app to ask questions and generate content using the Gemini API.",
      isPreview: true,
      isGitHub: true,
      background: "bg-white",
      button1: "black",
      button2: "lime-primary",
      button1Text: "white",
      button2Text: "black",
    },
    {
      id: 6,
      title: "",
      img: "",
      icons: "",
      text: "",
      isPreview: true,
      isGitHub: true,
      background: "bg-lime-primary",
      button1: "white",
      button2: "black",
      button1Text: "black",
      button2Text: "white",
    },
  ];

  const [visible, setVisible] = useState(3);

  return (
    <div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10 gap-y-9 ">
        {projectData.slice(0, visible).map((item) => (
          <div
            key={item.id}
            className={`min-h-96 ${item.background} `}
          >
            <h1 className={`text-center font-integral-medium text-2xl pt-4 ${item.background === "bg-black" ? "text-white" : ""}`}>
              {item.title}
            </h1>
            <div className="bg-amber-300 h-[50%] mt-2 mx-6 mb-3">
              <img src={item.img} alt="" />
            </div>
            <div>{item.icons}</div>
            <p className={`h-[15%] text-[10px] sm:text-[13px] text-center  mx-6  ${item.background === "bg-black" ? "text-white" : ""}`}>{item.text}</p>
            <div className="flex items-center mt-4 max-w-full mx-6 gap-3">
              <button
                className={`w-full py-2 bg-${item.button1} text-${item.button1Text} text-[12px] sm:text-[14px]`}
              >
                Preview
              </button>
              <button
                className={`w-full py-2 bg-${item.button2} text-${item.button2Text} text-[12px] sm:text-[14px]`}
              >
                Git Hub
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full flex justify-center ">
        <button
          className="w-30 h-10 bg-white my-10 "
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
