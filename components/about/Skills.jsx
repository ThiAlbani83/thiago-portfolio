import React from "react";

const Skills = () => {
  return (
    <section className="flex flex-col w-full gap-20">
      <div>
        <h1 className="text-[32px] font-semibold text-white"><span className="text-[#59F268]">#</span>skills</h1>
      </div>
      <div className="flex flex-wrap justify-center w-full gap-6 md:justify-start">
        <div className="border-[1px] border-[#ABB2BF] w-full max-w-[200px]">
          <div className="border-b-[1px] border-b-[#ABB2BF]">
            <p className="p-2 pr-20">Languages</p>
          </div>
          <p className="px-2 pt-2 pb-1">Javascript</p>
          <p className="px-2">Typescript</p>
          <p className="px-2">SQL</p>
          <p></p>
        </div>
        <div className="border-[1px] border-[#ABB2BF] w-full max-w-[200px] h-full max-h-[110px]">
          <div className="border-b-[1px] border-b-[#ABB2BF]">
            <p className="p-2 pr-20">Frameworks</p>
          </div>
          <p className="px-2 pt-2 pb-1">Reactjs</p>
          <p className="px-2">TailwindCSS</p>
          <p></p>
        </div>
        <div className="border-[1px] border-[#ABB2BF] w-full max-w-[200px]">
          <div className="border-b-[1px] border-b-[#ABB2BF]">
            <p className="p-2 pr-20">Tools</p>
          </div>
          <p className="px-2 pt-2 pb-1">VSCode</p>
          <p className="px-2">Figma</p>
          <p className="px-2">Photoshop</p>
        </div>
        <div className="border-[1px] border-[#ABB2BF] w-full max-w-[200px]">
          <div className="border-b-[1px] border-b-[#ABB2BF]">
            <p className="p-2 pr-20">Databases</p>
          </div>
          <p className="px-2 pt-2 pb-1">MySQL</p>
          <p className="px-2">Firebase</p>
          <p className="px-2">PostgreSQL</p>
        </div>
        <div className="border-[1px] border-[#ABB2BF] w-full max-w-[200px]">
          <div className="border-b-[1px] border-b-[#ABB2BF]">
            <p className="p-2 pr-20">Other</p>
          </div>
          <p className="px-2 pt-2 pb-1">HTML</p>
          <p className="px-2">CSS</p>
          <p className="px-2">REST API</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
