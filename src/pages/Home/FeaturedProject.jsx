"use client";

import Button from "@/components/Button";
import Image from "next/image";

const services = [
  {
    title: "Imara Kileleni Safaris",
    category: "Safari Booking Platform",
    image:
      "/images/imara-project-section.webp",
    desc: "A modern safari and adventure travel platform designed to showcase Tanzania’s wildlife experiences through dynamic tour packages, destination highlights, responsive layouts, and engaging user interactions.",
    highlights: [
      "Dynamic safari package showcase",
      "Destination exploration sections",
      "Responsive modern UI/UX",
      "Testimonial & review integration",
      "Optimized booking experience",
    ],
  },
  {
    title: "Where To Africa",
    category: "Luxury Travel & Safari Platform",
    image:
      "/images/where-africa-proj-sec.webp",
    desc: "A premium African travel website focused on luxury safari journeys, curated travel experiences, and destination storytelling with elegant visuals and smooth user experience.",
    highlights: [
      "Interactive destination experiences",
      "Luxury travel presentation",
      "Mobile-first responsive design",
      "Engaging visual storytelling",
      "Smooth navigation & modern layouts",
    ],
  },
  {
    title: "Bed & Breakfast",
    category: "Hospitality & Property Listing Platform",
    image:
      "/images/bed-breakfast-porject-sec.webp",
    desc: "A hospitality-focused booking and activity platform featuring luxury property listings, restaurant experiences, activity showcases, and guest-focused travel accommodation services.",
    highlights: [
      "Property & room listing system",
      "Restaurant & activity showcase",
      "Luxury accommodation experience",
      "Guest-focused responsive design",
      "Interactive accommodation browsing",
    ],
  },
];

export default function FeaturedProject() {
  return (
    <section className="w-full bg-[#f7f3ef] py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-sm uppercase tracking-widest text-[#3c4655] mb-3">
            FEATURED PROJECTS
          </p>

          <div className="w-16 h-[2px] bg-[#ab7e47] mx-auto mb-4"></div>

          <h2 className="font-cormorant text-4xl md:text-5xl  text-[#ab7e47] leading-tight mb-6">
            Selected Projects Showcasing Modern Web Development
          </h2>

          <p className="text-gray-500">
            A selection of projects focused on modern UI/UX, scalable architecture, performance optimization, and business-driven solutions using MERN Stack and Next.js.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((item, index) => (
            <div key={index} className="group [perspective:1000px]  ">
              <div className="relative w-full h-[260px] transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateX(180deg)]">
                {/* FRONT */}
                <div className="absolute inset-0 backface-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover rounded-t-md "
                  />
                </div>

                {/* BACK (HIGHLIGHTS) */}
                <div className="absolute inset-0 bg-[#3c4655] text-white p-6 rounded-sm [transform:rotateX(180deg)] backface-hidden flex flex-col justify-center">
                  <ul className=" list-disc pl-5 space-y-2 text-sm">
                    {item.highlights.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* TEXT */}
              <div className=" mt-4 p-4 ">
                {/* CATEGORY */}
                <p className="text-[#ab7e47] text-sm font-medium mb-3">
                  {item.category}
                </p>

                <h2 className=" font-semibold text-[#2c2c2c] text-xl">
                  {item.title}
                </h2>

                {/* DESCRIPTION */}
                <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CENTER BUTTON */}
        <div className="flex justify-center">
          <Button href="/projects">Explore Case Studies</Button>
        </div>
      </div>
    </section>
  );
}
