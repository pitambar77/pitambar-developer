import React from "react";

const Banner = () => {
  return (
    <section
      className="relative w-full h-[70vh] md:h-[85vh] flex items-center justify-center text-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/pita Ban.png')", // replace with your safari image
      }}
    >
      {/* GRADIENT OVERLAY */}
      {/* <div className="absolute inset-0 bg-gradient-to-t from-[#0000]/80 via-[#000]/40 to-black/70"></div> */}

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <p className="text-xs tracking-[0.4em] uppercase text-[#a67c52] mb-6">
          ABOUT ME
        </p>

        {/* MAIN HEADING */}
        <h1 className="font-cormorant font-semibold leading-[1.2] text-center text-[24px] sm:text-4xl md:text-[50px] tracking-[5px] mb-4 uppercase max-w-[700px]">
          Crafting Modern Full Stack Web Experiences
        </h1>
        <p className=" mb-4">
          I’m Pitambar, a MERN Stack Developer focused on creating responsive,
          high-performance, and user-friendly web applications using React.js,
          Next.js, Node.js, Express.js, and MongoDB.
        </p>
        <p>
          I specialize in full-stack development, website redesign, and CRM
          automation solutions that help businesses build strong digital
          experiences.
        </p>
      </div>
    </section>
  );
};

export default Banner;
