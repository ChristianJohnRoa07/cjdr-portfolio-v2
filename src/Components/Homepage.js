import { React, lazy, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ContentPane = lazy(() => import("./ContentPane"));
const TabPane = lazy(() => import("./TabPane"));

const variants = {
  clicked: { opacity: "1", backgroundColor: "#171717" },
  notClicked: { opacity: "1", backgroundColor: "#f3f4f6" },
};

const Homepage = () => {
  const [isDarkMode, setDarkModeStatus] = useState(false);
  console.log("Darkmode: " + isDarkMode);
  return (
    <AnimatePresence>
      <motion.div
        variants={variants}
        animate={isDarkMode ? "clicked" : "notClicked"}
        transition={{ duration: 0.5, ease: "linear" }}
      >
        <div className=" flex flex-col md:flex-row h-screen">
          <div className=" h-[350px]  md:w-[350px] lg:w-[560px] ">
            <TabPane
              setDarkModeStatus={setDarkModeStatus}
              isDarkMode={isDarkMode}
            />
          </div>
          <div className=" w-full flex-1 flex overflow-hidden">
            <ContentPane />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Homepage;
