import React from "react";

const Curiosities = () => {
  return (
    <section className="flex flex-col w-full gap-10">
      <div>
        <h1 className="text-[32px] font-semibold text-white">
          <span className="text-[#59F268]">#</span>my-fun-facts
        </h1>
      </div>
      <div className="flex flex-wrap gap-4">
        <p className="px-2 border w-fit">
          I live on a beach and prefer winter than summer
        </p>
        <p className="px-2 border w-fit">My favorite food is bean</p>
        <p className="px-2 border w-fit">
          I've worked as real estate agent for many years
        </p>
        <p className="px-2 border w-fit">...worked as gym instructor as well</p>
        <p className="px-2 border w-fit">
          ...also as a real estate photographer
        </p>
        <p className="px-2 border w-fit">...and software tester</p>
        <p className="px-2 border w-fit">
          ...today I work for a iGaming industry as fraud analyst
        </p>
        <p className="px-2 border w-fit">I'm 40 years old</p>
        <p className="px-2 border w-fit">I have a beautyful family</p>
      </div>
    </section>
  );
};

export default Curiosities;
