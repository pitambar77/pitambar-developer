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
          Bed and Breakfast
        </h2>

        {/* CONTENT */}
        <div className="space-y-6 text-gray-500 leading-relaxed">
          <p>
            Bed & Breakfast is a modern hospitality platform built to connect
            travelers with carefully curated accommodations, dining experiences,
            and local activities through an engaging and intuitive digital
            experience.
          </p>
          <p>
            The platform combines dynamic property listings, interactive
            location mapping, advanced filtering, booking functionality,
            restaurant management, and a custom-built content management system,
            providing a scalable solution for both travelers and administrators.
          </p>
        </div>
      </div>
    </section>
  );
}
