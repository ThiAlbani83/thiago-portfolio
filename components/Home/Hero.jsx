import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full gap-10 px-5 pt-10 mt-16 md:flex-row md:justify-between md:gap-40 sm:px-7 md:px-20 lg:px-24 xl:px-36 2xl:px-60">
      <div className="flex flex-col gap-5 max-w-[375px] md:max-w-full text-center sm:text-left items-center md:items-start">
        <h1 className="text-[32px]">
          Thiago is a{" "}
          <span className="text-[#59F268]">front-end developer</span> and{" "}
          <span className="text-[#59F268]">ux/ui designer</span>
        </h1>
        <h4>He crafts responsive websites with technologies and creativity</h4>
        <Link href={"/contact"} className="border border-[#59F268] px-4 py-2 text-white mt-4 hidden md:flex active:scale-90 duration-200">
          Contact me !!
        </Link>
      </div>
      <div className="w-[350px] md:w-full flex flex-col gap-5 items-center justify-center md:justify-end">
        <Image
          src={"/hero-image.png"}
          alt="hero-banner"
          width={470}
          height={390}
        />
        <Link href={"/contact"} className="border border-[#59F268] px-4 py-2 text-white mt-4 flex md:hidden w-full justify-center active:scale-90 duration-200">
          Contact me !!
        </Link>
      </div>
    </section>
  );
};

export default Hero;
