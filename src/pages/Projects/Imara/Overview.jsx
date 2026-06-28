"use client";

import Button from "@/components/Button";

export default function Overview() {
  return (
    <section className="w-full bg-[#f7f5f2] py-20">
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* SMALL TAGLINE */}
        <p className="text-sm uppercase tracking-widest text-[#3c4655] mb-3 mt-10">
          Project intro
        </p>

        <h2 className="font-cormorant text-4xl md:text-5xl  text-[#ab7e47] leading-tight mb-6">
          Imara Kileleni Safaris
        </h2>

        {/* CONTENT */}
        <div className="space-y-6 text-gray-500 leading-relaxed">
          <p>
            Imara Kileleni Safaris is a modern safari and travel platform
            designed to showcase Tanzania’s wildlife destinations, curated
            safari packages, and travel experiences through an engaging and
            user-friendly digital experience.
          </p>
          <p>
            The platform combines immersive visuals, dynamic content management,
            and responsive design to help travelers explore destinations,
            discover tour packages, and connect with the business through a
            seamless online journey.
          </p>
        </div>
      </div>
    </section>
  );
}
