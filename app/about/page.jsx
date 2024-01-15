import React from "react";
import AboutMe from "../../components/about/AboutMe";
import Skills from "../../components/about/Skills";
import Curiosities from "../../components/about/Curiosities";

const About = () => {
  return (
    <div className="flex flex-col justify-center w-full gap-20 px-5 pt-10 sm:px-7 md:px-16 lg:px-24 xl:px-36 2xl:px-60">
      <div>
        <h1 className="text-[32px] font-semibold text-white">
          <span className="text-[#59F268]">/</span>about-me
        </h1>
        <p className="text-white">Who am I?</p>
      </div>
      <AboutMe />
      <Skills />
      <Curiosities />
    </div>
  );
};

export default About;
