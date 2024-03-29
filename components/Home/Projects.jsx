import Image from "next/image";
import React from "react";
import ProjectCard from "../ProjectCard";
import Link from "next/link";

const Projects = () => {
  return (
    <section className="relative flex flex-col items-center gap-10 px-5 pt-10 overflow-hidden md:gap-16 sm:px-7 md:px-20 lg:px-24 xl:px-36 2xl:px-60">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center w-full gap-0">
          <span className="text-[32px] text-[#59F268]">#</span>
          <h2 className="text-[32px] text-white">projects</h2>
          <div className="w-[200px] max-w-[200px] h-[1px] bg-[#59F268] ml-3" />
        </div>
        <Link href={"/works"} className="hidden w-full gap-2 ml-6 font-medium md:flex max-w-32">
          View all <span className="text-[#59F268]">{`~~~>`}</span>
        </Link>
      </div>
      <div className="flex flex-wrap items-center justify-center w-full gap-10">
        <ProjectCard
          src={"/players-motion.png"}
          alt="players-motion"
          width={384}
          height={283}
          techs="ReactJS TailwindCSS HTML"
          title="Players Motion"
          desc="Responsive Website of a company of iGaming industry"
          button1="https://playersmotion.com/"
          button2="playersmotion"
          workingVisibility="hidden"
        />
        <ProjectCard
          src={"/restaurant.png"}
          alt="restaurant"
          width={384}
          height={283}
          techs="ReactJS TailwindCSS HTML"
          title="Gerícht Restaurant"
          desc="Responsive Website of a restaurant"
          button1="https://restaurant-one-sand.vercel.app/"
          button2="restaurant"
          workingVisibility="hidden"
        />
       <ProjectCard
          src={"/travigo.png"}
          alt="travigo"
          width={384}
          height={283}
          techs="ReactJS HTML TailwindCSS"
          title="Travigo App"
          desc="Landing page of a travel app made from a figma layout"
          button1="https://travigo-travel-app.vercel.app/"
          button2="travigo-travel-app"
          workingVisibility="hidden"
        />
      </div>
      <button className="w-full ml-6 font-medium max-w-32 md:hidden">
        View all <span className="text-[#59F268]">{`~~~>`}</span>
      </button>
      <Image src={'/square-dots.png'} alt="dots" width={70} height={70} className="absolute top-[160px] -left-[40px] hidden md:block"/>
      <Image src={'/large-rectangle.png'} alt="dots" width={155} height={155} className="absolute top-[300px] -right-[80px] hidden md:block"/>
    </section>
  );
};

export default Projects;
