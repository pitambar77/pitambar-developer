"use client";

import { Layers3, Shield, Palette, Balloon } from "lucide-react";
import { SiZoho } from "react-icons/si";
import { IoShareSocial } from "react-icons/io5";

const services = [
  {
    id: 1,
    title: "Zoho CRM",
    icon: SiZoho,
    desc: "Configure and customize Zoho CRM to streamline lead management, customer interactions, sales pipelines, and business processes through a centralized platform.",
  },
  {
    id: 2,
    title: "Workflow Automation",
    icon: Layers3,
    desc: "Automate lead assignments, follow-ups, notifications, approvals, and routine business tasks to improve efficiency and reduce manual work.",
  },
  {
    id: 3,
    title: "WhatsApp & API Integrations",
    icon: IoShareSocial,
    desc: "Integrate WhatsApp, websites, forms, and third-party applications with CRM systems to enable real-time communication and seamless data synchronization.",
  },
  {
    id: 4,
    title: "Custom Module",
    icon: Shield,
    desc: "Develop custom CRM modules, fields, layouts, and business logic tailored to unique operational requirements and industry-specific workflows.",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-[#f7f7f7] py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <div className="max-w-xl">
            <p className="text-sm uppercase tracking-widest text-[#3c4655] mb-3">
              Our Services
            </p>

            <h2 className="font-cormorant text-4xl md:text-5xl  text-[#ab7e47] leading-tight mb-6">
              CRM Automation & Integrations
            </h2>

            <p className="mt-10 text-[#6d6d6d] text-[18px] leading-[2] max-w-lg">
              Alongside web development, I help businesses streamline workflows
              and improve operations through CRM automation and third-party
              integrations.
            </p>
          </div>

          {/* Right Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.id}
                  className={`bg-[#f2f2f2] rounded-[10px] p-6 text-center hover:shadow-lg transition duration-300 ${
                    index % 2 === 0 ? "-mb-2" : "mt-2"
                  }`}
                >
                  {/* Icon */}
                  <div className="flex justify-center mb-8">
                    <Icon size={52} className="text-[#ab7e47]" />
                  </div>

                  {/* Title */}
                  <h3 className="text-[20px] font-semibold text-[#1d1d1f] mb-5">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#6d6d6d] text-[17px] leading-[2]">
                    {service.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
