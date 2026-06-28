import React from "react";
import AboutBanner from "./AboutBanner";
import Overview from "./Overview";
import Journey from "./Journey";
import PersonalApproach from "./PersonalApproach";
import Specialize from "./Specialize";
import WorkwithMe from "./WorkwithMe";
import DevelopmentProcess from "./DevelopmentProcess";
import ContactSection from "../Home/ContactSection";
import Image from "next/image";

const AboutMe = () => {
  return (
    <>
      <div className="relative h-[90vh] bg-[#3c4655]">
        <Image
          src={"/images/about-new-banner.webp"}
          alt={"Banner Image"}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <AboutBanner />

      <Overview />
      <Journey />
      <Specialize />
      <WorkwithMe />
      <DevelopmentProcess />
      <PersonalApproach />
      <ContactSection />
    </>
  );
};

export default AboutMe;
