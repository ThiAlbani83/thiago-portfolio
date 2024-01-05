"use client";

import Image from "next/image";
import React, { useState } from "react";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";
import Link from "next/link";

const Navbar = ({toggleMenu}) => {
  const [isMobileMenu, setIsMobileMenu] = useState(false);

  const handleClickMobileMenu = () => {
    setIsMobileMenu(!isMobileMenu);
    if (!isMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  };

  return (
    <div className="relative flex items-center justify-between w-full px-5 pt-10 sm:px-7 md:px-20 lg:px-24 xl:px-36 2xl:px-60">
      <div className="flex items-center gap-2">
        <Image
          src={"/logo.png"}
          width={24}
          height={24}
          className="z-20"
          alt="logo"
        />
        <p className="text-[18px]">Thiago</p>
      </div>
      <DesktopMenu />
      <Image
        src={"/mobile-menu.png"}
        width={24}
        height={24}
        alt="mobile-menu"
        onClick={handleClickMobileMenu}
        className="z-20 text-white cursor-pointer md:hidden"
      />
      <div
        className={
          isMobileMenu
            ? "fixed text-gray-300 left-0 top-0 w-full bg-[#282C33]/50 h-screen px-4 py-7 flex flex-col z-10 ease-in duration-300"
            : "absolute top-0 h-screen left-[-100%] ease-in duration-300 z-10"
        }
      >
        <MobileMenu  isMobileMenu={handleClickMobileMenu}/>
      </div>
      <div className="absolute top-0 items-center hidden gap-2 left-5 lg:left-8 xl:left-12 md:flex md:flex-col">
        <div className="w-[1px] h-[200px] bg-[#ABB2BF]" />
        <Link href={'https://www.linkedin.com/in/thiago-albani'} target="_blank"><Image src={'/linkedin.svg'} alt="linkedin" width={32} height={32}/></Link>
        <Link href={'https://github.com/ThiAlbani83'} target="_blank"><Image src={'/github.svg'} alt="github" width={32} height={32}/></Link>
        <Link href={'https://www.figma.com/files/project/102877790/Team-project?fuid=1272347708146255481'} target="_blank"><Image src={'/figma.svg'} alt="figma" width={32} height={32}/></Link>
      </div>
    </div>
  );
};

export default Navbar;
