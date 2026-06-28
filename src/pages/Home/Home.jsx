import React from "react";
import Banner from "@/components/Banner";
import QuickAbout from "./QuickAbout";
import TechStack from "./TechStack";
import FeaturedProject from "./FeaturedProject";
import Services from "./Services";
import ContactSection from "./ContactSection";

const Home = () => {
  return (
    <>
      <Banner
        imageUrl={"/images/home-banner.webp"}
        title={"Hi, I'm Pitambar"}
        subtitle={
          "MERN Stack Developer with 2+ years of experience building modern web applications using React, Next.js, Node.js, and MongoDB."
        }
        options={"Available for Freelance Projects"}
      />
      <QuickAbout />
      <TechStack />
      <FeaturedProject />
      <Services />
      <ContactSection/>
    </>
  );
};

export default Home;
