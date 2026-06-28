"use client";

import Button from "@/components/Button";
import Image from "next/image";

export default function TechStack() {
  const features = [
    {
      title: "React Js",
      icon: "/images/react-logo.webp",
    },
    {
      title: "Next Js",
      icon: "/images/nextjs-logo.webp",
    },
    {
      title: "Tailwind css",
      icon: "/images/tailwindcss.webp",
    },
    {
      title: "Mongo DB",
      icon: "/images/mongo-db-logo.webp",
    },
    {
      title: "Node Js",
      icon: "/images/nodejs.png",
    },
    {
      title: "JavaScript",
      icon: "/images/js-logo.webp",
    },

    {
      title: "Cloudinary",
      icon: "/images/cloudinary.webp",
    },
    {
      title: "Git hub",
      icon: "/images/git-logo.webp",
    },
  ];

  return (
    <section className="w-full bg-[#fff] py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* TOP CONTENT */}
        <div className="grid md:grid-cols-2 gap-12 items-center ">
          {/* LEFT TEXT */}
          <div>
            <p className="text-sm uppercase tracking-widest text-[#3c4655] mb-3">
              TECH STACK
            </p>

            <h2 className="font-cormorant text-4xl md:text-5xl text-[#ab7e47] leading-tight mb-6">
              Tools & Technologies Behind My Development Workflow
            </h2>

            <p className="text-gray-500 leading-relaxed mb-4">
              I work with modern frontend and backend technologies to create
              fast, scalable, and user-focused web applications with clean
              design and powerful functionality.
            </p>
            <p className="text-gray-500 leading-relaxed mb-10">
              I focus on building modern digital experiences with optimized
              performance, scalable architecture, and seamless user
              interactions.
            </p>

            <Button href="/tech-stack">Explore Technologies</Button>
          </div>

          {/* ICON FEATURES */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            {features.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center  p-4 rounded-md shadow hover:shadow-md hover:-translate-y-1 hover:transition-all duration-300 "
              >
                <div className="mb-4">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={70}
                    height={70}
                    className="object-contain"
                  />
                </div>

                <h4 className="text-[#6b6b6b] font-medium text-lg">
                  {item.title}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
