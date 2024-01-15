import React from "react";
import ProjectCard from "../ProjectCard";

const UxDevProjects = () => {
  return (
    <div className="mt-[68px] flex flex-col w-full">
      <div className="flex flex-wrap items-center justify-center lg:justify-start w-full gap-10 mt-[48px]">
        <ProjectCard
          src={"/players-motion.png"}
          alt="players-motion"
          width={384}
          height={283}
          techs="ReactJS HTML TailwindCSS"
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
          techs="ReactJS HTML CSS"
          title="Gerícht Restaurant"
          desc="Responsive website made from a figma layout"
          button1="https://restaurant-one-sand.vercel.app/"
          button2="restaurant"
          workingVisibility="hidden"
        />
        <ProjectCard
          src={"/dashboard.png"}
          alt="dashboard"
          width={384}
          height={283}
          techs="NextJS HTML TailwindCSS API"
          title="Dashboard"
          desc="Revenue control dashboard made from a figma layout"
          button1="https://dashboard-tailwind-xi.vercel.app/"
          button2="dashboard2"
          workingVisibility="block"
        />
        <ProjectCard
          src={"/hotel.png"}
          alt="hotel"
          width={384}
          height={283}
          techs="ReactJS HTML TailwindCSS"
          title="Resort Hotel"
          desc="Landing page of a resort hotel made from a figma layout"
          button1="https://hotel-react-tailwind.vercel.app/"
          button2="hotel-react-tailwind"
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
        <ProjectCard
          src={"/IMDB.png"}
          alt="IMDB"
          width={384}
          height={283}
          techs="ReactJS HTML TailwindCSS API"
          title="IMDB Clone"
          desc="Clone of IMDB website using IMDB Api Rest"
          button1="https://imdb-clone-red.vercel.app/"
          button2="imdb-clone"
          workingVisibility="hidden"
        />
        <ProjectCard
          src={"/NFT.png"}
          alt="/NFT Marketplace"
          width={384}
          height={283}
          techs="ReactJS HTML TailwindCSS"
          title="NFT Marketplace"
          desc="NFT Marketplace website made from a figma layout"
          button1="https://nft-marketplace-alpha-five.vercel.app/"
          button2="nft-marketplacehub"
          workingVisibility={"block"}
        />
        <ProjectCard
          src={"/gpt3.png"}
          alt="GPT3"
          width={384}
          height={283}
          techs="ReactJS HTML CSS"
          title="GPT3 AI Website"
          desc="GPT3 OpenAI technology landing page made from a figma layout"
          button1="https://gpt3-figma-gules.vercel.app/"
          button2="gpt3_figma"
          workingVisibility={"hidden"}
        />
        <ProjectCard
          src={"/hoobank.png"}
          alt="hoobank"
          width={384}
          height={283}
          techs="ReactJS HTML TailwindCSS"
          title="Hoobank Website"
          desc="Bank landing page made from a figma layout"
          button1="https://bank-iota-nine.vercel.app/#"
          button2="bank"
          workingVisibility={"hidden"}
        />
        <ProjectCard
          src={"/lpweb.png"}
          alt="lpweb"
          width={384}
          height={283}
          techs="ReactJS HTML TailwindCSS"
          title="LP Web Website"
          desc="Website made to offer landing page develop services"
          button1="https://gpt3-figma-x176.vercel.app/"
          button2="lpweb"
          workingVisibility={"hidden"}
        />
        <ProjectCard
          src={"/finsweet.png"}
          alt="finsweet"
          width={384}
          height={283}
          techs="ReactJS HTML TailwindCSS"
          title="Finsweet Website"
          desc="Landing page made from a figma layout"
          button1="https://finsweet-thialbani.vercel.app/"
          button2="finsweet"
          workingVisibility={"hidden"}
        />
      </div>
    </div>
  );
};

export default UxDevProjects;
