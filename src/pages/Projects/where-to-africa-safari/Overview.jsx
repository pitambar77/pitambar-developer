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
          Where To Africa Safari
        </h2>

        {/* CONTENT */}
        <div className="space-y-6 text-gray-500 leading-relaxed">
          <p>
            Where To Africa is a fully dynamic travel and safari platform
            designed to showcase African destinations, wildlife experiences,
            luxury accommodations, and custom travel itineraries through an
            engaging and visually immersive user experience.
          </p>
          <p>
            The platform features dynamic destination architecture, interactive
            Mapbox exploration, advanced filtering, booking integrations, and
            content management tools that allow travelers to easily discover
            experiences while enabling administrators to manage all website
            content from a centralized dashboard.
          </p>
        </div>
      </div>
    </section>
  );
}
