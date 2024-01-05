import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-[#ABB2BF] flex flex-col items-center w-full px-5 pt-7 sm:px-7 md:px-20 lg:px-24 xl:px-36 2xl:px-60 mt-20">
      <div className="flex flex-col w-full gap-4 md:flex-row md:justify-between">
        <div className="flex flex-col w-full gap-4">
          <div className="flex items-center justify-center w-full gap-2 md:justify-start">
            <Image
              src={"/logo.png"}
              width={24}
              height={24}
              className="z-20"
              alt="logo"
            />
            <p className="text-[18px]">Thiago</p>
          </div>
          <p className="w-full text-center md:text-start">
            Front-end developer and ux/ui designer
          </p>
        </div>
        <div className="flex justify-center w-full gap-4 md:flex-col items-cente md:items-end">
          <h3 className="text-[24px] text-white font-medium">Media</h3>
          <div className="flex gap-5">
            <Link
              href={"https://www.linkedin.com/in/thiago-albani"}
              target="_blank"
            >
              <Image
                src={"/linkedin.svg"}
                alt="linkedin"
                width={32}
                height={32}
              />
            </Link>
            <Link href={"https://github.com/ThiAlbani83"} target="_blank">
              <Image src={"/github.svg"} alt="github" width={32} height={32} />
            </Link>
            <Link
              href={
                "https://www.figma.com/files/project/102877790/Team-project?fuid=1272347708146255481"
              }
              target="_blank"
            >
              <Image src={"/figma.svg"} alt="figma" width={32} height={32} />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-full mt-3">
        <p>Coded by Thiago</p>
      </div>
    </footer>
  );
};

export default Footer;
