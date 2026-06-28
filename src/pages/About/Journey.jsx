"use client";

import Button from "@/components/Button";

export default function Journey() {
  return (
    <section
      className="relative w-full h-[80vh]  bg-fixed bg-center bg-cover flex items-center justify-center text-center"
      style={{
        backgroundImage: "url('/images/pita Ban.png')", // replace with your image
      }}
    >
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-4xl px-6 text-white space-y-4">
        {/* SMALL TEXT */}
        <p className="text-sm uppercase tracking-widest mb-3">MY JOURNEY</p>

        {/* MAIN TEXT */}
        <h2 className="font-cormorant text-4xl md:text-5xl leading-tight mb-6">
          My Journey as a Developer
        </h2>
        <div className="opacity-95 space-y-4 leading-relaxed">
          <p>
            My development journey started with frontend design and gradually
            evolved into full-stack MERN development.
          </p>
          <p>
            As I gained experience, I became passionate about building scalable
            backend systems, responsive interfaces, and business-focused
            applications that solve real user problems.
          </p>
          <p>
            Today, I focus on creating modern web experiences, improving
            outdated websites, and helping businesses streamline operations
            through CRM automation and scalable digital solutions.
          </p>
        </div>
        <div className=" mt-10">
          <Button href={"/projects"}>Explore My Work</Button>
        </div>
      </div>
    </section>
  );
}
