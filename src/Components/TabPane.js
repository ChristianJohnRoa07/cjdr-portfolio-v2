import { React, lazy } from "react";
import { Button } from "@material-tailwind/react";

const DevsInfo = lazy(() => import("./Tab Pane/DevsInfo"));
const ButtonNav = lazy(() => import("./Tab Pane/ButtonNav"));
const ButtonAccounts = lazy(() => import("./Tab Pane/ButtonAccounts"));
const TopComponent = lazy(() => import("./Tab Pane/TopComponent"));

const TabPane = (props) => {
  const { setDarkModeStatus, isDarkMode } = props;
  return (
    <div className="flex flex-col gap-10 md:gap-20 mt-10 md:mt-0 justify-center items-center h-[300px] md:h-screen ">
      <TopComponent
        setDarkModeStatus={setDarkModeStatus}
        isDarkMode={isDarkMode}
      />
      <DevsInfo />
      <ButtonNav />
      <div>
        <a
          href="https://christianjohnroa07.github.io/#/"
          rel="noreferrer"
          target="_blank"
        >
          {" "}
          <Button
            size="lg"
            variant="outlined"
            className="flex items-center gap-3 dark:border-white dark:text-white dark:fill-white"
          >
            CJDR V1 ©
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
            >
              <path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z" />
            </svg>
          </Button>
        </a>
      </div>

      <ButtonAccounts />
    </div>
  );
};

export default TabPane;
