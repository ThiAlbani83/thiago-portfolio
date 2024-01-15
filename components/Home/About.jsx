import Image from "next/image";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <section className="relative flex flex-col gap-10 px-5 pt-10 overflow-hidden md:gap-16 sm:px-7 md:px-20 lg:px-24 xl:px-36 2xl:px-60">
      <div className="flex items-center gap-0">
        <span className="text-[32px] text-[#59F268]">#</span>
        <h2 className="text-[32px] text-white w-full max-w-[150px]">
          about-me
        </h2>
        <div className="w-[200px] max-w-[200px] h-[1px] bg-[#59F268] ml-3" />
      </div>
      <div className="flex flex-col gap-5 md:flex-row">
        <div className="flex flex-col w-full gap-5 max-w-[550px]">
          <p>Hello, I'm Thiago</p>
          <p>
            I'm a front-end developer and ux/ui designer based in Florianópolis,
            Brazil. I can create and develop responsive websites from scratch
            and raise them into modern user-friendly web experiences.
          </p>
          <p>
            Transforming creativity and knowledge into a websites has been my
            passion for over a year. I have been helping various clients to
            establish their presence online. I always strive to learn about the
            newest technologies and frameworks.
          </p>
        </div>
        <div className="flex items-center justify-center w-full">
          <Image
            src={"/about-me.png"}
            alt="about"
            width={300}
            height={450}
            className="top-10  mid:right-32 lg:right-40 xl:right-48 2xl:right-[500px] md:absolute"
          />
        </div>
      </div>
      <div className="flex justify-center w-full md:-mt-10 md:justify-start">
        <Link href='/about' className="font-medium border border-[#59F268] px-4 py-2 w-fit">
          Read more {`-->`}
        </Link>
      </div>
      <Image
        src={"/square-dots.png"}
        alt="dots"
        width={70}
        height={70}
        className="absolute top-[300px] -right-[43px]  hidden md:block"
      />
      <Image
        src={"/large-rectangle.png"}
        alt="dots"
        width={155}
        height={155}
        className="absolute top-[160px] -left-[80px]  hidden md:block"
      />
    </section>
  );
};

export default About;
