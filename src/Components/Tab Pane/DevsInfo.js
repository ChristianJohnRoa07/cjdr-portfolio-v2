import React from "react";

import Typed from "react-typed";

const DevsInfo = () => {
  const texts = ["Junior Frontend Developer", "Aspiring Fullstack Developer"];
  return (
    <div className=" w-[300px]  md:w-[480px]">
      <div className="flex flex-col gap-1 text-black dark:text-white">
        <span className="font-poppins font-[800] text-3xl md:text-5xl">
          Christian John Roa
        </span>
        <span className="font-poppins font-[500] text-lg md:text-xl">
          <Typed strings={texts} typeSpeed={40} backSpeed={50} loop />
        </span>
      </div>
    </div>
  );
};

export default DevsInfo;
