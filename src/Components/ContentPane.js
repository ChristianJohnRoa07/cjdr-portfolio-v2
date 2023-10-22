import { React, lazy } from "react";
import { Element } from "react-scroll";

const AboutMe = lazy(() => import("./AboutMe"));
const Projects = lazy(() => import("./Projects"));

const ContentPane = () => {
  return (
    <div className="overflow-y-scroll pb-10  flex flex-col ">
      <div id="about">
        <AboutMe />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div className="flex flex-col justify-center text-gray-500 items-center mt-10">
        <span className="font-poppins  font-[700] text-md">© 2023 </span>
        <span className="font-poppins font-[300] text-sm">
          REACT x TAILWIND CSS
        </span>
      </div>
    </div>
  );
};

export default ContentPane;
