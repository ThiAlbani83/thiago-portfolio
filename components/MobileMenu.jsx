import Image from "next/image";
import Link from "next/link";
import React from "react";

const MobileMenu = ({ isMobileMenu }) => {
  return (
    <ul className="flex flex-col fixed w-full h-full items-center justify-center gap-8 bg-transparent backdrop-blur-sm">
      <li onClick={() => isMobileMenu(false)} className="mobile_nav_menu_li">
        <span className="mobile_menu_span text-xl">#</span>
        <Link href={"/"} className="mobile_nav_menu_item">
          home
        </Link>
      </li>
      <li onClick={() => isMobileMenu(false)} className="mobile_nav_menu_li">
        <span className="mobile_menu_span">#</span>
        <Link href={"/works"} className="mobile_nav_menu_item">
          works
        </Link>
      </li>
      <li onClick={() => isMobileMenu(false)} className="mobile_nav_menu_li">
        <span className="mobile_menu_span">#</span>
        <Link href={"/about"} className="mobile_nav_menu_item">
          about me
        </Link>
      </li>
      <li onClick={() => isMobileMenu(false)} className="mobile_nav_menu_li">
        <span className="mobile_menu_span">#</span>
        <Link href={"/contact"} className="mobile_nav_menu_item">
          contact
        </Link>
      </li>
      <li
        onClick={() => isMobileMenu(false)}
        className="flex items-center gap-3 bg-transparent"
      >
        <Link
          href={"https://www.linkedin.com/in/thiago-albani"}
          target="_blank"
          className="bg-transparent"
        >
          <Image
            src={"/linkedin.svg"}
            alt="linkedin"
            width={32}
            height={32}
            className="bg-transparent"
          />
        </Link>
        <Link
          href={"https://github.com/ThiAlbani83"}
          target="_blank"
          className="bg-transparent"
        >
          <Image
            src={"/github.svg"}
            alt="github"
            width={32}
            height={32}
            className="bg-transparent"
          />
        </Link>
        <Link
          href={
            "https://www.figma.com/files/project/102877790/Team-project?fuid=1272347708146255481"
          }
          target="_blank"
          className="bg-transparent"
        >
          <Image
            src={"/figma.svg"}
            alt="figma"
            width={32}
            height={32}
            className="bg-transparent"
          />
        </Link>
      </li>
    </ul>
  );
};

export default MobileMenu;
