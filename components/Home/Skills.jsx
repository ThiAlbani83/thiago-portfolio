import Image from "next/image";
import React from "react";

const Skills = () => {
  return (
    <div className="relative flex flex-col gap-10 px-5 pt-10 md:gap-16 sm:px-7 md:px-20 lg:px-24 xl:px-36 2xl:px-60">
      <div className="flex items-center gap-0">
        <span className="text-[32px] text-[#59F268]">#</span>
        <h2 className="text-[32px] text-white">skills</h2>
        <div className="w-[200px] max-w-[200px] h-[1px] bg-[#59F268] ml-3" />
      </div>
      <div className="flex flex-col-reverse justify-between w-full gap-20 md:flex-row">
        <div className="relative max-w-[350px] w-full max-h-[285px] h-full hidden md:block">
          <Image
            src={"/square-dots.png"}
            alt="square-dots"
            width={63}
            height={63}
            className="square_dots absolute top-[38px] rotate-45"
          />
          <Image
            src={"/large-rectangle.png"}
            alt="large-rectangle"
            width={86}
            height={86}
            className="absolute top-0 right-[40px] rotate-[67deg]"
          />
          <Image
            src={"/geometric-figure.png"}
            alt="geometric-figure"
            width={113}
            height={113}
            className="geometric absolute top-[181px] left-[15px] rotate-[96deg]"
          />
          <Image
            src={"/square-dots.png"}
            alt="square-dots"
            width={63}
            height={63}
            className="square_dots_2 absolute top-[155px] right-[119px] rotate-12"
          />
          <Image
            src={"/small-rectangle.png"}
            alt="small-rectangle"
            width={52}
            height={52}
            className="absolute top-[205px] right-[10px] rotate-[24deg]"
          />
        </div>
        <div className="grid w-full grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:mx-20 2xl:ml-36 2xl:max-w-[600px]">
          <div className="border-[1px] border-[#ABB2BF] w-full max-w-[200px]">
            <div className="border-b-[1px] border-b-[#ABB2BF]">
              <p className="p-2 pr-20">Languages</p>
            </div>
            <p className="px-2 pt-2 pb-1">Javascript</p>
            <p className="px-2">Typescript</p>
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
              <p className="p-2 pr-20">Other</p>
            </div>
            <p className="px-2 pt-2 pb-1">HTML</p>
            <p className="px-2">CSS</p>
            <p className="px-2">REST API</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
