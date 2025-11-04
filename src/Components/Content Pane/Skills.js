import InfiniteScrollList from "./skills/InfiniteScrollList";

import frontEndTech from "../../constants/frontendTech";
import backEndTech from "../../constants/backendTech";
import sqlTech from "../../constants/sqlTech";
import devTools from "../../constants/devTools";

const Skills = () => {

  const allSkills = [
    ...devTools,
    ...frontEndTech,
    ...backEndTech,
    ...sqlTech
  ];

  return (
    <div className="flex flex-col gap-10 ">
      <div className="flex justify-center items-center">
        <span className="font-poppins text-gray-500 font-[500] text-md md:text-xl">
          Tech Stacks
        </span>
      </div>

      <div>
        <InfiniteScrollList skills={allSkills} />
      </div>
    </div>
  );
};

export default Skills;
