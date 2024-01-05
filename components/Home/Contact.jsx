import Image from "next/image";
import React from "react";
import { RiWhatsappFill } from "react-icons/ri";

const Contact = () => {
  return (
    <section className="relative flex flex-col gap-10 px-5 pt-10 overflow-hidden md:gap-16 sm:px-7 md:px-20 lg:px-24 xl:px-36 2xl:px-60">
      <div className="flex items-center gap-0">
        <span className="text-[32px] text-[#59F268]">#</span>
        <h2 className="text-[32px] text-white w-full max-w-[150px]">
          contacts
        </h2>
        <div className="w-[200px] max-w-[200px] h-[1px] bg-[#59F268] ml-3" />
      </div>
      <div className="flex flex-col items-center gap-5 md:items-start md:flex-row">
        <div className="w-full max-w-[450px] lg:max-w-[550px]">
          <p>
            I'm interested in full time job or freelance opportunities. However,
            if you have other request or question, don't hesitate to contact me
          </p>
        </div>
        <div className="flex items-center justify-center w-full">
          <div className="border-[1px] w-fit px-4 py-2 gap-4 flex flex-col">
            <p className="font-medium text-white">Message me here</p>
            <div className="flex gap-2">
              <Image src={"/email.svg"} alt="email" width={32} height={32} />
              <p>thiago.albani01@gmail.com</p>
            </div>
            <div className="flex gap-2">
              <RiWhatsappFill className="text-[#ABB2BF] w-7 h-7" />
              <p>+55 48 98821-0987</p>
            </div>
          </div>
        </div>
      </div>
      <Image src={'/square-dots.png'} alt="dots" width={70} height={70} className="absolute top-[160px] -left-[40px] hidden md:block"/>
    </section>
  );
};

export default Contact;
