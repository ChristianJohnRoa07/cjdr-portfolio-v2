import { lazy, React } from "react";

const Intro = lazy(() => import("./Content Pane/Intro"));
const Skills = lazy(() => import("./Content Pane/Skills"));

const ContactMe = () => {
  return (
    <div className="flex flex-col mt-60 ">
      <div className="flex justify-center items-center">
        <span className="font-poppins text-gray-500 font-[500] text-lg md:text-xl">
          Contact Me
        </span>
      </div>

      
    </div>
  );
};

export default ContactMe;
