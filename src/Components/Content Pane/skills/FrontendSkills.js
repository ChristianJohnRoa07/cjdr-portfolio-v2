import {
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

import frontEndTech from "../../../constants/frontendTech";

const FrontendTechs = () => {
  return (
    <div className="flex justify-center items-center flex-row gap-5  overflow-hidden">
        <div className=" flex flex-row gap-5  ">
          {frontEndTech.map((skill) => {
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

    
  );
};

export default FrontendTechs;
