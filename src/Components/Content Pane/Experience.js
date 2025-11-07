import React from "react";

import {
  Card,
  CardBody,
  Typography,
} from "@material-tailwind/react";

import experiences from "../../constants/experiences";

const Experience = () => {
  return (
    <div className="flex justify-center items-center">
      <Card className="w-[450px] md:w-[500px] lg:w-[700px]">
       
          {experiences.map((experience) => {
            return (
              <CardBody className="group bg-gray-100 hover:bg-gray-200 dark:bg-gray-900 dark:hover:bg-gray-800">
                <div className="flex flex-row gap-2 md:gap-3">
                  <div className="w-[600px] md:w-[110%]">
                    <Typography
                      variant="h8"
                      color="blue-gray"
                      className="mb-2 font-poppins text-xs md:text-md text-gray-700 dark:text-gray-500"
                    >
                      {experience.duration}
                    </Typography>
                  </div>

                  <div className="flex flex-col gap-3 ">
                    <Typography
                      variant="h5"
                      color="blue-gray"
                      className="group-hover:text-cyan-700 mb-2 text-start font-poppins text-md md:text-lg dark:text-white"
                    >
                      {experience.companyName}
                    </Typography>
                    <Typography className="text-left font-poppins text-sm md:text-md text-gray-700 dark:text-gray-500">
                      {experience.jobDescription}
                    </Typography>
                    <Typography
                      variant="h6"
                      className="text-justify font-poppins text-sm md:text-md dark:text-gray-400"
                    >
                      Techs Learned:
                    </Typography>

                    <div className="flex flex-row gap-5">
                      {experience.techStacks.map((expTechStack) => {
                        return <div>{expTechStack.icon}</div>;
                      })}
                    </div>
                  </div>
                </div>
              </CardBody>
            );
          })}
       
      </Card>
    </div>
  );
};

export default Experience;
