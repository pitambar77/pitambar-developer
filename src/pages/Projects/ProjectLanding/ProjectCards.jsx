"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    id: 1,
    image: "/images/imara-project-section.webp",
    title: "Imara kileleni safari",
    description:
      "A modern safari landing page designed to showcase Tanzania’s wildlife destinations, curated safari packages, and unforgettable travel experiences while encouraging visitors to plan their next adventure.",
    link: "/project/imara-kileleni-safari",
  },
  {
    id: 2,
    image: "/images/bed-breakfast-porject-sec.webp",
    title: "Bed and Breakfast",
    description:
      "A responsive hospitality landing page built to connect travelers with carefully selected accommodations, local experiences, and seamless booking opportunities through an engaging user experience.",
    link: "/project/bed-and-breakfast",
  },
  {
    id: 3,
    image: "/images/where-africa-proj-sec.webp",
    title: "Where to Africa",
    description:
      "A dynamic travel landing page showcasing African destinations, safari adventures, luxury accommodations, and personalized travel experiences through visually engaging and conversion-focused design.",
    link: "/project/where-to-africa-safari",
  },
  {
    id: 4,
    image: "/images/crm-slider.jpeg",
    title: "CRM Automation",
    description:
      "Automate lead management, customer communication, and business workflows through seamless CRM integrations. Improve efficiency, boost conversions, and streamline operations with intelligent automation.",
    link: "/project/crm",
  },
  {
    id: 5,
    image: "/images/landing-imara.webp",
    title: "Landing Page Design",
    description:
      "Designed a conversion-focused landing page that combines engaging visuals, strategic content, and clear calls-to-action to drive inquiries and bookings.",
    link: "/project/landing-page",
  },
];

export default function ProjectCards() {
  return (
    <section className="py-20 bg-[#f8f6f2]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="uppercase tracking-[3px] text-[#ab7e47] text-sm mb-4">
            My Projects
          </p>

          <h2 className="text-[#3c4655] text-3xl md:text-5xl leading-tight font-light">
            Projects where i works
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((item) => (
            <div
              key={item.id}
              className="bg-white overflow-hidden shadow-sm rounded-sm hover:shadow-xl transition-all duration-500"
            >
              <Link href={item.link}>
                <div className="relative h-[280px] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="px-4 py-6 text-center">
                  <h3 className="font-cormorant text-3xl text-[#3c4655] mb-5">
                    {item.title}
                  </h3>

                  <p className="text-gray-500 leading-relaxed mb-8">
                    {item.description}
                  </p>

                  <button className="group inline-flex items-center gap-3 border border-[#ab7e47] rounded-full px-8 py-3 text-[#ab7e47] uppercase tracking-[2px] text-sm hover:bg-[#ab7e47] hover:text-white transition-all duration-300 cursor-pointer">
                    View Project
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </button>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
