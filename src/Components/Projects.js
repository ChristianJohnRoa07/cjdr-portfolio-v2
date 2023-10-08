import { lazy, React } from "react";

const ButtonCard = lazy(() => import("./Projects/ButtonCard"));
const Projects = () => {
  return (
    <div className="flex flex-col mt-60 gap-10">
      {/* <div className="flex justify-center items-center">
        <span className="font-poppins text-gray-500 font-[500] text-lg md:text-xl">
          Projects
        </span>
      </div> */}

      <div className="flex justify-center items-center">
        <ButtonCard />
      </div>
    </div>
  );
};

export default Projects;
