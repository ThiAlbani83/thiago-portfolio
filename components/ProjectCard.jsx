import Image from "next/image";
import Link from "next/link";
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
  workingVisibility,
  live,
  github,
}) => {
  return (
    <>
      <div className="border-[1px] border-[#ABB2BF] w-full max-w-[300px] h-[450px] flex flex-col justify-between relative">
        <div>
          <Image src={src} alt={alt} width={width} height={height} />
        </div>

        <div className="border boder-b-[1px] border-[#ABB2BF] px-4 py-1">
          <p>{techs}</p>
        </div>
        <div className="flex flex-col gap-4 px-4 py-2">
          <h3 className="font-medium text-white text-[24px]">{title}</h3>
          <p>{desc}</p>
        </div>
        <div className="flex gap-4 px-4 py-4">
          <Link href={button1} target="_blank" className="px-4 py-2 text-white border-[1px] border-[#59F268]">
             Live {`<~~>`}
          </Link>
          <Link href={`https://github.com/ThiAlbani83/${button2}`} target="_blank" className="px-4 py-2 text-white border-[1px] border-[#59F268]">
             Github{` >>`}
          </Link>
        </div>
        <div className={`absolute top-[35px] left-[-18px] px-2 text-gray-900 -rotate-45 bg-yellow-500 text-[10px] ${workingVisibility}`}>
          Working in progress
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
