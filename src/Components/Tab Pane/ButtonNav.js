import React, { useState } from "react";
//import { ButtonGroup, Button } from "@material-tailwind/react";

import { motion, AnimatePresence } from "framer-motion";

import { BrowserRouter } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import { buttonNav } from "../ButtonData";

//import { Link } from "react-scroll";

const ButtonNav = () => {
  const [activeIdButton, setSelectedIdButton] = useState(0);

  const getSelectedButton = (selectedButtonId) => {
    for (let i = 0; i < buttonNav.length; i++) {
      if (selectedButtonId === buttonNav[i].id) {
        setSelectedIdButton(selectedButtonId);
      }
    }
  };

  const variants = {
    clicked: { x: "50px" },
    notClicked: { x: "0" },
  };

  return (
    <div className="w-[300px] md:w-[300px] lg:w-[450px]  hidden md:block ">
      <div className="flex flex-col gap-5 justify-start items-start text-black dark:text-white ">
        <BrowserRouter>
          {buttonNav.map((btn) => {
            return (
              <AnimatePresence key={btn.id}>
                <HashLink
                 
                  to={btn.link}
                  
                >
                  <motion.button
                    variants={variants}
                    animate={
                      btn.id === activeIdButton ? "clicked" : "notClicked"
                    }
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    key={btn.id}
                    onClick={() => getSelectedButton(btn.id)}
                    className={` ${
                      btn.id === activeIdButton
                        ? " text-cyan-600 dark:text-cyan-600"
                        : "hover:text-cyan-600"
                    }`}
                  >
                    <span className="font-poppins font-[400]  md:text-md lg:text-lg ">
                      {btn.btnName}
                    </span>
                  </motion.button>
                </HashLink>
              </AnimatePresence>
            );
          })}
        </BrowserRouter>
      </div>
    </div>
  );
};

export default ButtonNav;
