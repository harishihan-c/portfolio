import React, { useState } from "react";

const ShowProjects = () => {
  const projectData = [
    {
      id: 1,
      title: "",
      img: "",
      icons: "",
      text: "",
      isPreview: true,
      isGitHub: true,
      background: "bg-black",
    },
    {
      id: 2,
      title: "",
      img: "",
      icons: "",
      text: "",
      isPreview: true,
      isGitHub: true,
      background: "bg-white",
    },
    {
      id: 3,
      title: "",
      img: "",
      icons: "",
      text: "",
      isPreview: true,
      isGitHub: true,
      background: "bg-lime-primary",
    },
    {
      id: 4,
      title: "",
      img: "",
      icons: "",
      text: "",
      isPreview: true,
      isGitHub: true,
      background: "bg-black",
    },
    {
      id: 5,
      title: "",
      img: "",
      icons: "",
      text: "",
      isPreview: true,
      isGitHub: true,
      background: "bg-white",
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
    },
  ];

  const [visible, setVisible] = useState(3);

  return (
    <div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10 gap-y-9 ">
        {projectData.slice(0, visible).map((item) => (
          <div key={item.id} className={`h-96 ${item.background}`}  >
            <h1></h1>
            <div></div>
            <div></div>
            <p></p>
            <div>
              <button></button>
              <button></button>
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
