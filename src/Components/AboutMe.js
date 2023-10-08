import { React, lazy } from "react";

const Intro = lazy(() => import("./Content Pane/Intro"));
const Skills = lazy(() => import("./Content Pane/Skills"));
const Experience = lazy(() => import("./Content Pane/Experience"));

const AboutMe = () => {
  return (
    <div className="flex flex-col gap-20">
      <Intro />
      <Skills />
      <Experience/>
    </div>
  );
};

export default AboutMe;
