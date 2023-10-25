import { React, lazy, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn } from "./Variants";

const ContentPane = lazy(() => import("./ContentPane"));
const TabPane = lazy(() => import("./TabPane"));

const variants = {
  clicked: { opacity: "1", backgroundColor: "#171717" },
  notClicked: { opacity: "1", backgroundColor: "#f3f4f6" },
};

const Homepage = () => {
  const [isDarkMode, setDarkModeStatus] = useState(false);

  return (
    <AnimatePresence>
      <motion.div
        variants={variants}
        animate={isDarkMode ? "clicked" : "notClicked"}
        transition={{ duration: 0.5, ease: "linear" }}
      >
        <div className=" flex flex-col md:flex-row h-screen">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ amount: 0.1 }}
            className="sticky h-[180px] md:w-[350px] lg:w-[560px] "
          >
            <TabPane
              setDarkModeStatus={setDarkModeStatus}
              isDarkMode={isDarkMode}
            />
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ amount: 0.1 }}
            className=" w-full flex-1 flex overflow-hidden"
          >
            <ContentPane />
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Homepage;
