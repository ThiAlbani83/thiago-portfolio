import Image from "next/image";
import React from "react";

const ProjectCard = ({
  src,
  alt,
  width,
  height,
  title,
  techs,
  desc,
  button1,
  button2,
}) => {
  return (
    <>
      <div className="border-[1px] border-[#ABB2BF] w-full max-w-[300px] h-[450px]">
        <Image src={src} alt={alt} width={width} height={height} />
        <div className="border boder-b-[1px] border-[#ABB2BF] px-4 py-1">
          <p>{techs}</p>
        </div>
        <div className="flex flex-col gap-4 px-4 py-2">
          <h3 className="font-medium text-white text-[24px]">{title}</h3>
          <p>{desc}</p>
        </div>
        <div className="flex gap-4 px-4 py-4">
          <button className="px-4 py-2 text-white border-[1px] border-[#59F268]">
            {button1} {`<~~>`}
          </button>
          <button className="px-4 py-2 text-white border-[1px] border-[#59F268]">
            {button2} {`>>`}
          </button>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
