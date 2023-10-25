import React from "react";

import {
  Card,
  CardBody,
  Typography,
} from "@material-tailwind/react";
const Experience = () => {
  const experiences = [
    {
      id: 0,
      companyName: "Pixel8 Web Solutions & Consultancy",
      jobDescription:
        "On-Job-Trainee is responsible for developing system components such as ui designs for frontend development and API's for backend development. Their duties include meetings with the Developer unit and executing and reporting the tasks given by the senior developer",
      duration: "Feb 2021 - May 2021",
      techStacks: [
        {
          id: 0,
          icon: (
            <svg
              width="30px"
              height="30px"
              viewBox="0 0 256 221"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMinYMin meet"
            >
              <path
                d="M204.8 0H256L128 220.8 0 0h97.92L128 51.2 157.44 0h47.36z"
                fill="#41B883"
              />
              <path
                d="M0 0l128 220.8L256 0h-51.2L128 132.48 50.56 0H0z"
                fill="#41B883"
              />
              <path
                d="M50.56 0L128 133.12 204.8 0h-47.36L128 51.2 97.92 0H50.56z"
                fill="#35495E"
              />
            </svg>
          ),
        },
        {
          id: 1,
          icon: (
            <svg
              width="30px"
              height="30px"
              viewBox="0 0 256 256"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMinYMin meet"
            >
              <path
                d="M251.172 116.594L139.4 4.828c-6.433-6.437-16.873-6.437-23.314 0l-23.21 23.21 29.443 29.443c6.842-2.312 14.688-.761 20.142 4.693 5.48 5.489 7.02 13.402 4.652 20.266l28.375 28.376c6.865-2.365 14.786-.835 20.269 4.657 7.663 7.66 7.663 20.075 0 27.74-7.665 7.666-20.08 7.666-27.749 0-5.764-5.77-7.188-14.235-4.27-21.336l-26.462-26.462-.003 69.637a19.82 19.82 0 0 1 5.188 3.71c7.663 7.66 7.663 20.076 0 27.747-7.665 7.662-20.086 7.662-27.74 0-7.663-7.671-7.663-20.086 0-27.746a19.654 19.654 0 0 1 6.421-4.281V94.196a19.378 19.378 0 0 1-6.421-4.281c-5.806-5.798-7.202-14.317-4.227-21.446L81.47 39.442l-76.64 76.635c-6.44 6.443-6.44 16.884 0 23.322l111.774 111.768c6.435 6.438 16.873 6.438 23.316 0l111.251-111.249c6.438-6.44 6.438-16.887 0-23.324"
                fill="#DE4C36"
              />
            </svg>
          ),
        },
        {
          id: 2,
          icon: (
            <svg
              width="30px"
              height="30px"
              viewBox="0 0 256 236"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMinYMin meet"
            >
              <path
                d="M128.075 236.075l47.104-144.97H80.97l47.104 144.97z"
                fill="#E24329"
              />
              <path
                d="M128.075 236.074L80.97 91.104H14.956l113.119 144.97z"
                fill="#FC6D26"
              />
              <path
                d="M14.956 91.104L.642 135.16a9.752 9.752 0 0 0 3.542 10.903l123.891 90.012-113.12-144.97z"
                fill="#FCA326"
              />
              <path
                d="M14.956 91.105H80.97L52.601 3.79c-1.46-4.493-7.816-4.492-9.275 0l-28.37 87.315z"
                fill="#E24329"
              />
              <path
                d="M128.075 236.074l47.104-144.97h66.015l-113.12 144.97z"
                fill="#FC6D26"
              />
              <path
                d="M241.194 91.104l14.314 44.056a9.752 9.752 0 0 1-3.543 10.903l-123.89 90.012 113.119-144.97z"
                fill="#FCA326"
              />
              <path
                d="M241.194 91.105h-66.015l28.37-87.315c1.46-4.493 7.816-4.492 9.275 0l28.37 87.315z"
                fill="#E24329"
              />
            </svg>
          ),
        },
      ],
    },
  ];

  return (
    <div className="flex justify-center items-center">
      <Card className="w-[350px] sm:w-[400px] md:w-[700px]">
       
          {experiences.map((experience) => {
            return (
              <CardBody className="group bg-gray-100 hover:bg-gray-200 dark:bg-gray-900 dark:hover:bg-gray-800 rounded-lg ">
                <div className="flex flex-row gap-2 md:gap-3">
                  <div className="w-[600px] md:w-[110%]">
                    <Typography
                      variant="h8"
                      color="blue-gray"
                      className="mb-2 font-poppins text-xs md:text-lg text-gray-700 dark:text-gray-500"
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
