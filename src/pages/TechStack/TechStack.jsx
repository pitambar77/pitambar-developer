import React from "react";

import FrontendStack from "./FrontendStack";
import BackendStack from "./BackendStack";
import Toolsection from "./Toolsection";
import ServicesSection from "./ServicesSection";
import Overview from "./Overview";
import Growth from "./Growth";
import ContactSection from "../Home/ContactSection";
import Image from "next/image";

const TechStack = () => {
  return (
    <>
      <div className="relative h-[90vh] bg-[#3c4655]">
        <Image
          src={"/images/tech-banner.webp"}
          alt={"Banner Image"}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <FrontendStack />
      <BackendStack />
      <Toolsection />
      <ServicesSection />

      <Growth />
      <Overview />
      <ContactSection />
    </>
  );
};

export default TechStack;
