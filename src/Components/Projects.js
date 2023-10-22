import { lazy, React } from "react";

const ButtonCard = lazy(() => import("./Projects/ButtonCard"));
const Projects = () => {
  return (
    <div className="flex flex-col mt-36 gap-10">
      <div className="flex justify-center items-center">
        <ButtonCard />
      </div>
    </div>
  );
};

export default Projects;
