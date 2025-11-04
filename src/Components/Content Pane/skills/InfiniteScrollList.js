import {
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

const InfiniteScrollList = ({ skills }) => {
  const skillsList = [...skills, ...skills];

  return (
    <div className="flex justify-start items-center overflow-hidden w-full max-w-7xl mx-auto">
      <div className="flex flex-row gap-5 whitespace-nowrap animate-scroll-slow">
        {skillsList.map((skill, index) => (
          <div key={`${skill.id}-${index}`} className="inline-block flex-shrink-0">
            <Card
              className="group flex flex-col items-center justify-center dark:bg-gray-900 w-28 h-28 sm:w-32 sm:h-32 shadow-xl"
              aria-hidden="true"
            >
              <CardBody className="p-2 flex-grow flex items-center justify-center">
                <Typography className="opacity-60 group-hover:opacity-100 text-4xl transition-opacity duration-300">
                  {skill.icon}
                </Typography>
              </CardBody>
              <CardFooter className="group-hover:text-cyan-700 pt-0 pb-2 dark:text-white font-poppins text-sm text-center">
                {skill.text}
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteScrollList;