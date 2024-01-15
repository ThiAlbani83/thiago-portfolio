import Image from "next/image";
import React from "react";

const AboutMe = () => {
  return (
    <section className="">
      <div className="flex flex-col gap-5 md:flex-row">
        <div className="flex flex-col w-full justify-center gap-5 max-w-[550px]">
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
            className="top-10  mid:right-32 lg:right-40 xl:right-48 2xl:right-[500px]"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
