import React, { useRef } from "react";

import { motion } from "framer-motion";
import { fadeIn } from "../Variants";

import { Card, CardBody, Typography } from "@material-tailwind/react";
import projectsCreated from "../../constants/projectsCreated";

const ButtonCard = () => {

  const ref = useRef(null);

  return (
    <motion.div className="flex flex-col justify-center items-center gap-5">
      {projectsCreated.map((proj) => {
        return (
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.6 }}
          >
            <Card ref={ref} className=" w-[350px] md:w-[400px] lg:w-[700px]">
              <a
                key={proj.id}
                href={proj.projLink}
                rel="noreferrer"
                target="_blank"
              >
                <button
                  key={proj.id}
                  className="group bg-gray-100 hover:bg-gray-200  dark:bg-gray-900 dark:hover:bg-gray-800 rounded-lg  hover:rounded-lg"
                >
                  <CardBody key={proj.id} className="">
                    {proj.projImage ? (
                      <div className="flex flex-row gap-5">
                        <div className="flex flex-col gap-5">
                          <Typography>
                            <img
                              width={250}
                              height={250}
                              key={proj.id}
                              className=" rounded-lg "
                              src={proj.projImage}
                              alt="hobo"
                            />
                          </Typography>
                          <div className="flex justify-center ">
                            <div className="flex flex-row gap-3">
                              {proj.projTechs.map((projTech) => {
                                return (
                                  <div key={projTech.id}>{projTech.icon}</div>
                                );
                              })}
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col gap-2 w-[70%]">
                          <div className="flex flex-row gap-2">
                            <Typography
                              variant="h6"
                              color="blue-gray"
                              className="mb-2 text-start font-poppins text-sm md:text-md dark:text-white group-hover:text-cyan-700"
                            >
                              {proj.projName}
                            </Typography>

                            {proj.projLink !== null ? (
                              <div
                                className="flex justify-end dark:fill-white group-hover:transition 
                            group-hover:ease-in-out 
                            group-hover:delay-20
                            group-hover:translate-x-3 
                            group-hover:scale-125 
                            group-hover:fill-cyan-700
                            "
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  height="18"
                                  viewBox="0 -960 960 960"
                                  width="18"
                                >
                                  <path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z" />
                                </svg>
                              </div>
                            ) : (
                              ""
                            )}
                          </div>

                          <Typography
                            variant="h8"
                            className="text-start md:text-justify font-poppins text-sm md:text-md  text-gray-700 dark:text-gray-500"
                          >
                            {proj.projDescription}
                          </Typography>
                        </div>
                      </div>
                    ) : (
                      <div className="flex flex-col gap-2">
                        <div className="flex flex-row gap-2 items-center">
                          <Typography
                            variant="h6"
                            color="blue-gray"
                            className="mb-2 text-start font-poppins text-sm md:text-md dark:text-white group-hover:text-cyan-700"
                          >
                            {proj.projName}
                          </Typography>

                          {proj.projLink !== null && (
                            <a
                              href={proj.projLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="mb-3"
                            >
                              <div
                                className="dark:fill-white group-hover:transition 
                                  group-hover:ease-in-out 
                                  group-hover:delay-20
                                  group-hover:translate-x-3 
                                  group-hover:scale-125 
                                  group-hover:fill-cyan-700
                                "
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  height="18"
                                  viewBox="0 -960 960 960"
                                  width="18"
                                >
                                  <path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z" />
                                </svg>
                              </div>
                            </a>
                          )}
                        </div>

                        <Typography
                          variant="h8"
                          className="text-start md:text-justify font-poppins text-sm md:text-md  text-gray-700 dark:text-gray-500"
                        >
                          {proj.projDescription}
                        </Typography>

                        {/* Project Techs moved to the bottom in the single-column view */}
                        <div className="flex flex-row gap-3 pt-2">
                          {proj.projTechs.map((projTech) => (
                            <div key={projTech.id}>{projTech.icon}</div>
                          ))}
                        </div>
                      </div>
                    )}

                  </CardBody>
                </button>
              </a>
            </Card>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default ButtonCard;
