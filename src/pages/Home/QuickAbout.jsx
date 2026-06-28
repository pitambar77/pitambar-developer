"use client";

import Button from "@/components/Button";
import Image from "next/image";

export default function QuickAbout() {
  return (
    <section className="w-full bg-[#f7f3ef] py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT IMAGE */}
        {/* <div className="w-full h-[400px] flex justify-center md:justify-start">
          <Image
            src="./images/aboutsection.webp"
            width={500}
            height={500}
            className="object-contain"
          />
        </div> */}

        <div className="relative w-full h-[500px] flex justify-center">
          {/* Main Image */}
          <div className="absolute top-0 left-0 w-[75%] h-[380px] rounded-xl overflow-hidden shadow-xl">
            <Image
              src="/images/aboutsection.webp"
              alt="About Image 1"
              fill
              className="object-cover"
            />
          </div>

          {/* Second Image */}
          <div className="absolute bottom-0 right-0 w-[50%] h-[250px] rounded-2xl overflow-hidden border-8 border-[#f7f3ef] shadow-xl">
            <Image
              src="/images/aboutsection-2.jpeg"
              alt="About Image 2"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div>
          {/* Small Tagline */}
          <p className="text-sm uppercase tracking-widest text-[#3c4655] mb-3">
            About Me
          </p>

          {/* Main Heading */}
          <h2 className="font-cormorant text-4xl md:text-5xl  text-[#ab7e47] leading-tight mb-6">
            Transforming Ideas into Modern Web Experiences
          </h2>

          {/* Description */}
          <p className="text-gray-500 mb-4 leading-relaxed">
            I’m Pitambar, a MERN Stack Developer with 2+ years of experience
            creating scalable, responsive, and high-performance web applications
            using React.js, Next.js, Node.js, Express.js, and MongoDB.
          </p>
          <p className="text-gray-500 mb-10 leading-relaxed">
            I specialize in converting old websites into modern React/Next.js
            applications, building custom admin dashboards, and integrating Zoho
            CRM workflows to help businesses streamline operations and improve
            user experience.
          </p>

          <Button href={"/about"}>More About Me</Button>
        </div>
      </div>
    </section>
  );
}
