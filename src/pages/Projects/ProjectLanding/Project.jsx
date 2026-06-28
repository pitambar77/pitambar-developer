import React from "react";
import ProjectCards from "./ProjectCards";
import ContactSection from "@/pages/Home/ContactSection";
import Image from "next/image";

const Project = () => {
  return (
    <div>
      <div className="relative h-[90vh] bg-[#3c4655]">
        <Image
          src={"/images/project-new-banner.webp"}
          alt={"Banner Image"}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <ProjectCards />
      <ContactSection />
    </div>
  );
};

export default Project;
