"use client";

import Image from "next/image";

export default function Toolsection() {
  return (
    <section id="why-travel" className="bg-[#fdfaf5] py-12 md:py-20 px-4 ">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top Section */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center mb-8 md:mb-16">
          {/* Left Media */}
          <div className=" order-2 md:order-1 relative w-full h-[200px] sm:h-[260px] lg:h-[320px] bg-black rounded-lg overflow-hidden">
            <Image
              src="/images/devtools-new.png" // also fix path (see below)
              alt="Why section"
              fill
              className="object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="order-1 md:order-2 text-center md:text-left ">
            <p className="text-sm uppercase tracking-widest text-[#3c4655] mb-3">
              Development Tools
            </p>

            <div className="w-10 h-[1px] bg-[#ab7e47] mb-6 mx-auto md:mx-0"></div>

            <h2 className="font-cormorant text-4xl md:text-5xl  text-[#ab7e47] leading-tight mb-6">
              Database & Development <br /> Tools
            </h2>
            <p>
              Managing application data, development workflows, deployment
              systems, and version control using modern tools and technologies.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#f5dbca]"></div>

        {/* Bottom Features */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#f5dbca] md:mt-4">
          {/* Item */}
          <div className=" p-4 md:p-6">
            <p className="text-sm   font-bold tracking-widest text-[#ab7e47] mb-3">
              01
            </p>
            <h3 className=" text-2xl md:text-2xl  !font-cormorant leading-tight mb-3">
              MongoDB
            </h3>
            <p className=" text-[#444] leading-relaxed ">
              Using flexible NoSQL database architecture for scalable and
              efficient data management.
            </p>
          </div>

          <div className="p-4 md:p-6">
            <p className="text-sm !font-avenir font-bold tracking-widest text-[#ab7e47] mb-3">
              02
            </p>
            <h3 className="text-2xl !font-cormorant leading-tight mb-3">
              Git & GitHub
            </h3>
            <p className=" ">
              Managing version control, collaboration workflows, and
              deployment-ready code management.
            </p>
          </div>

          <div className="p-4 md:p-6">
            <p className="text-sm !font-avenir font-bold tracking-widest text-[#ab7e47] mb-3">
              03
            </p>
            <h3 className="text-2xl !font-cormorant leading-tight mb-3">
              Postman
            </h3>
            <p className=" ">
              Testing and managing APIs efficiently during backend development
              and integration workflows.
            </p>
          </div>

          <div className="p-4 md:p-6">
            <p className="text-sm  font-bold tracking-widest text-[#ab7e47] mb-3">
              04
            </p>
            <h3 className="text-2xl !font-cormorant leading-tight mb-3">
              Cloudinary & Vercel
            </h3>
            <p className=" ">
              Handling media optimization, cloud storage, deployment, and
              frontend hosting workflows.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
