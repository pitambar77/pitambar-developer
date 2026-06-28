"use client";

import Button from "@/components/Button";

export default function AboutBanner() {
  return (
    <section className="py-20 bg-[#ffffff]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="max-w-4xl mx-auto text-center">
          <p className="uppercase tracking-[3px] text-[#3c4655] text-sm mb-4">
            ABOUT ME
          </p>

          <h1 className="text-[#ab7e47]  text-3xl md:text-5xl leading-tight font-light mb-10 ">
            Full Stack Developer & Problem Solver
          </h1>
          <div className=" space-y-4 text-gray-600">
            <p>
              I’m Pitambar, a MERN Stack Developer focused on creating
              responsive, high-performance, and user-friendly web applications
              using React.js, Next.js, Node.js, Express.js, and MongoDB.
            </p>
            <p>
              I specialize in full-stack development, website redesign, and CRM
              automation solutions that help businesses build strong digital
              experiences.
            </p>
            <p>
              I believe great digital products combine clean design, strong
              functionality, and seamless user experiences. My goal is to build
              solutions that not only look professional but also solve real
              business challenges and support long-term growth.
            </p>
          </div>
        </div>
        <div className="mt-10 text-center">
          <Button href={"/contact"}> Let's Connect</Button>
        </div>
      </div>
    </section>
  );
}
