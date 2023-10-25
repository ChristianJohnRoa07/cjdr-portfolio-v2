import { React, lazy } from "react";
import { Button } from "@material-tailwind/react";
import Headroom from "react-headroom";

const DevsInfo = lazy(() => import("./Tab Pane/DevsInfo"));
const ButtonNav = lazy(() => import("./Tab Pane/ButtonNav"));
const ButtonAccounts = lazy(() => import("./Tab Pane/ButtonAccounts"));
const TopComponent = lazy(() => import("./Tab Pane/TopComponent"));

const TabPane = (props) => {
  const { setDarkModeStatus, isDarkMode } = props;
  return (
    <div className="flex flex-col gap-6  md:gap-16 lg:gap-20 mt-0 md:mt-0 justify-center items-center h-[180px] md:h-screen ">
      <TopComponent
        setDarkModeStatus={setDarkModeStatus}
        isDarkMode={isDarkMode}
      />
      <DevsInfo />
      <ButtonNav />

      <div className="hidden md:block">
        <div className="flex flex-col gap-6  md:gap-16 lg:gap-20">
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
    </div>
  );
};

export default TabPane;
