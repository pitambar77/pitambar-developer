"use client";


import { FaReact,FaHtml5 } from "react-icons/fa";
import { RiNextjsLine,RiTailwindCssFill } from "react-icons/ri";
import { TbBrandJavascript } from "react-icons/tb";
import { FaCss3Alt } from "react-icons/fa6";

const services = [
  {
    id: 1,
    title: "React.js",
    icon: FaReact,
    desc: "Building reusable component-based user interfaces with scalable frontend architecture and dynamic functionality.",
  },
  {
    id: 2,
    title: "Next.js",
    icon: RiNextjsLine,
    desc: "Creating SEO-friendly, high-performance web applications with server-side rendering and optimized routing.",
  },
  {
    id: 3,
    title: "Tailwind CSS",
    icon: RiTailwindCssFill,
    desc: "Designing modern and responsive interfaces with clean utility-first styling and scalable UI systems.",
  },
  {
    id: 4,
    title: "JavaScript",
    icon: TbBrandJavascript,
    desc: "Enhancing user experiences through interactive features, dynamic content, animations, and seamless functionality across modern web applications.",
  },
  {
    id: 5,
    title: "Html",
    icon: FaHtml5,
    desc: "Building well-structured, semantic, and accessible web pages that provide a strong foundation for responsive and user-friendly websites.",
  },
  {
    id: 6,
    title: "CSS",
    icon: FaCss3Alt,
    desc: "Creating visually appealing, responsive, and modern interfaces with custom layouts, styling, animations, and optimized user experiences.",
  },
];

export default function FrontendStack() {
  return (
    <section className="bg-[#f7f3ef] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-sm uppercase tracking-widest text-[#3c4655] mb-3">
            Frontend
          </p>

          <div className="w-16 h-[2px] bg-[#ab7e47] mx-auto mb-4"></div>

          <h2 className="font-cormorant text-4xl md:text-5xl  text-[#ab7e47] leading-tight mb-6">
            Frontend Development
          </h2>

          <p className="text-gray-500">
            I build responsive, interactive, and modern user interfaces focused
            on performance, accessibility, and seamless user experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-24 gap-x-16">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.id}
                className="text-center flex flex-col items-center"
              >
                {/* Icon */}
                <div className="mb-8">
                  <Icon size={58}  className="text-[#6b6b6b]" />
                </div>

                {/* Title */}
                <h3 className=" text-[22px] font-semibold mb-6">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-[#6f6f6f] leading-[2] max-w-[360px]">
                  {service.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
