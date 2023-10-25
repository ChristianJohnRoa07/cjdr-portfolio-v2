import { React, lazy } from "react";
import { Element } from "react-scroll";
import { Button } from "@material-tailwind/react";

const AboutMe = lazy(() => import("./AboutMe"));
const Projects = lazy(() => import("./Projects"));
const ButtonAccounts = lazy(() => import("./Tab Pane/ButtonAccounts"));

const ContentPane = () => {
  return (
    <div className="overflow-y-scroll pb-10  flex flex-col ">
      <div id="about">
        <AboutMe />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div className=" block md:hidden ">
        <div className="flex flex-col gap-10 items-center justify-center mt-10">
          <div>
            <a
              href="https://christianjohnroa07.github.io/#/"
              rel="noreferrer"
              target="_blank"
            >
              {" "}
              <Button
                size="md"
                variant="outlined"
                className="flex group items-center gap-1 dark:border-white dark:text-white dark:fill-white"
              >
                CJDR V1
                <div
                  className="group-hover:transition 
            group-hover:ease-in-out 
            group-hover:delay-20
            group-hover:-translate-y-1 
            group-hover:translate-x-2
            group-hover:fill-cyan-700
            "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 -960 960 960"
                    width="20"
                  >
                    <path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z" />
                  </svg>
                </div>
              </Button>
            </a>
          </div>
          <ButtonAccounts />
        </div>
      </div>
      <div className="flex flex-col justify-center text-gray-500 items-center mt-5">
        <span className="font-poppins  font-[700] text-md">© 2023 </span>
        <span className="font-poppins font-[300] text-sm">
          REACT x TAILWIND CSS
        </span>
      </div>
    </div>
  );
};

export default ContentPane;
