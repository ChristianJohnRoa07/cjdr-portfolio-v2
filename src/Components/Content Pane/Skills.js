import {
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";



import FrontendTechs from "./skills/FrontendSkills" ;
import backEndTech from "../../constants/backendTech";
import sqlTech from "../../constants/sqlTech";
import devTools from "../../constants/devTools";

const Skills = () => {
  return (
    <div className="flex flex-col gap-10 ">
      <div className="flex justify-center items-center">
        <span className="font-poppins text-gray-500 font-[500] text-md md:text-xl">
          Tech Stacks
        </span>
      </div>

      <div className="flex justify-center items-center  flex-row gap-5  overflow-hidden">
        <div className="flex flex-row gap-5">
          {devTools.map((skill) => {
            return (
              <div className="">
                <Card
                  key={skill.id}
                  className="group  flex items-center justify-center dark:bg-gray-900"
                  aria-hidden="true"
                >
                  <CardBody>
                    <Typography className="opacity-60 group-hover:opacity-100">
                      {skill.icon}
                    </Typography>
                  </CardBody>
                  <CardFooter className="group-hover:text-cyan-700 pt-0 dark:text-white font-poppins text-sm md:text-md">
                    {skill.text}
                  </CardFooter>
                </Card>
              </div>
            );
          })}
        </div>
      </div>

      <FrontendTechs />

      <div className="flex justify-center items-center  flex-row gap-5  overflow-hidden">
        <div className="flex flex-row gap-5">
          {sqlTech.map((skill) => {
            return (
              <div className="">
                <Card
                  key={skill.id}
                  className="group  flex items-center justify-center dark:bg-gray-900"
                  aria-hidden="true"
                >
                  <CardBody>
                    <Typography className="opacity-60 group-hover:opacity-100">
                      {skill.icon}
                    </Typography>
                  </CardBody>
                  <CardFooter className="group-hover:text-cyan-700 pt-0 dark:text-white font-poppins text-sm md:text-md">
                    {skill.text}
                  </CardFooter>
                </Card>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex justify-center items-center flex-row gap-5  overflow-hidden">
        <div className="flex flex-row gap-5">
          {backEndTech.map((skill) => {
            return (
              <div className="">
                <Card
                  key={skill.id}
                  className="group  flex items-center justify-center dark:bg-gray-900"
                  aria-hidden="true"
                >
                  <CardBody>
                    <Typography className="opacity-60 group-hover:opacity-100">
                      {skill.icon}
                    </Typography>
                  </CardBody>
                  <CardFooter className="group-hover:text-cyan-700 pt-0 dark:text-white font-poppins text-sm md:text-md">
                    {skill.text}
                  </CardFooter>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
