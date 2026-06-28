"use client";


import { FaNodeJs } from "react-icons/fa";
import { SiExpress,SiJsonwebtokens } from "react-icons/si";

const services = [
  {
    id: 1,
    title: "Node.js",
    icon: FaNodeJs,
    desc: "Building scalable backend applications and APIs with efficient server-side JavaScript architecture.",
  },
  {
    id: 2,
    title: "Express.js",
    icon: SiExpress,
    desc: "Creating structured REST APIs, middleware systems, routing, and backend services for modern applications.",
  },
  {
    id: 3,
    title: "Authentication & APIs",
    icon: SiJsonwebtokens,
    desc: "Implementing secure authentication systems, JWT authorization, and third-party API integrations.",
  }
];

export default function BackendStack() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-sm uppercase tracking-widest text-[#3c4655] mb-3">
            Backend
          </p>

          <div className="w-16 h-[2px] bg-[#ab7e47] mx-auto mb-4"></div>

          <h2 className="font-cormorant text-4xl md:text-5xl  text-[#ab7e47] leading-tight mb-6">
            Backend Development
          </h2>

          <p className="text-gray-500">
            I develop secure and scalable backend systems focused on APIs,
            authentication, business logic, and efficient server-side
            architecture.
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
                  <Icon size={58} className="text-[#6b6b6b]" />
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
