import React from "react";

import { TypeAnimation } from "react-type-animation";

const DevsInfo = () => {
  const texts = ["Junior Frontend Developer", 1000 , "Aspiring Fullstack Developer", 1000];
  return (
    <div className=" w-[300px]  md:w-[300px] lg:w-[480px]">
      <div className="flex flex-col gap-1 text-black dark:text-white">
        <span className="font-poppins font-[800] text-3xl md:text-3xl lg:text-5xl">
          Christian John Roa
        </span>
        <span className="font-poppins font-[500] text-md md:text-lg lg:text-xl">
          <TypeAnimation sequence={texts} speed={40} deletionSpeed={50} repeat={Infinity} />
        </span>
      </div>
    </div>
  );
};

export default DevsInfo;
