"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Button from "@/components/Button";

const steps = [
  {
    id: "01",
    title: "Full Stack MERN Development",
    desc: "Building scalable and high-performance web applications using MongoDB, Express.js, React.js, and Node.js with clean architecture and responsive user experience.",
    features: [
      "Custom web applications",
      "REST API development",
      "Authentication systems",
      "Admin dashboards",
      "Database integration",
    ],
  },
  {
    id: "02",
    title: "Modern React & Next.js Applications",
    desc: "Creating fast, responsive, and SEO-friendly frontend experiences using modern React.js and Next.js development practices.",
    features: [
      "Responsive UI development",
      "Dynamic frontend applications",
      "SEO optimization",
      "Performance optimization",
      "Smooth user experience",
    ],
  },
  {
    id: "03",
    title: "Website Redesign & Modernization",
    desc: "Transforming outdated websites into modern, responsive, and visually engaging platforms with improved performance and better user experience.",
    features: [
      "Old website redesign",
      "HTML to React conversion",
      "UI/UX improvements",
      "Mobile responsiveness",
      "Modern frontend migration",
    ],
  },
  {
    id: "04",
    title: "HTML to React & Next.js Conversion",
    desc: "Converting static HTML websites into reusable, scalable, and component-based React.js and Next.js applications.",
    features: [
      "Component-based architecture",
      "Clean reusable code",
      "Faster frontend performance",
      "Responsive conversion",
      "Modern development workflow",
    ],
  },
  {
    id: "05",
    title: "Zoho CRM Integration & Automation",
    desc: "Helping businesses streamline operations through Zoho CRM setup, workflow automation, integrations, and lead management solutions.",
    features: [
      "Workflow automation",
      "Lead management setup",
      "CRM customization",
      "Social Media integration",
      "Third-party API integration",
    ],
  },
];

export default function Services() {
  const [lineHeight, setLineHeight] = useState(0);

  const ref = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      setLineHeight(containerRef.current.offsetHeight);
    }
  }, []);

  // Scroll progress tracking
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  // Animate line height
  const height = useTransform(scrollYProgress, [0, 1], [0, lineHeight]);

  return (
    <section ref={ref} className="w-full bg-[#f5f5f5] py-24">
      <div className="max-w-6xl mx-auto px-8">
        {/* HEADER */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-sm uppercase tracking-widest text-[#3c4655] mb-3">
            SERVICES
          </p>

          <div className="w-16 h-[2px] bg-[#ab7e47] mx-auto mb-4"></div>

          <h2 className="font-cormorant text-4xl md:text-5xl  text-[#ab7e47] leading-tight mb-6">
            Solutions I Provide Through Modern Web Development
          </h2>

          <p className="text-gray-500 mb-10">
            I help businesses build scalable, modern, and user-focused digital
            experiences through full-stack development, responsive design,
            website modernization, and CRM automation solutions.
          </p>
          <Button href="/contact">Get a Free Quote</Button>
        </div>

        {/* TIMELINE */}
        <div className="relative">
          {/* CENTER LINE (BACKGROUND) */}
          <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[2px] h-full bg-gray-300"></div>

          {/* ANIMATED LINE */}
          <motion.div
            style={{ height }}
            className="absolute left-1/2 top-0 -translate-x-1/2 w-[2px] bg-[#ab7e47]"
          />

          {/* STEPS */}
          <div ref={containerRef} className="flex flex-col gap-10">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "justify-end" : "justify-start"
                }`}
              >
                {/* DOT */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute left-1/2 -translate-x-1/2 w-5 h-5 top-0 bg-[#ab7e47] rounded-full border-4 border-white z-10"
                />

                {/* CARD */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className={`w-[45%] mt-10 bg-[#1c2b39] text-white p-4 md:p-8 rounded-xl shadow-lg ${
                    index % 2 === 0
                      ? "mr-12 translate-x-16"
                      : "ml-12 -translate-x-16"
                  }`}
                >
                  <h3 className="text-[#ab7e47] text-xl md:text-2xl font-bold mb-2">
                    {step.id}
                  </h3>
                  <h2 className="font-semibold mb-4 text-xl">{step.title}</h2>
                  <p className="text-sm text-gray-300 mb-4 leading-6">{step.desc}</p>
                  <ul className=" list-disc pl-5 space-y-2 text-sm text-gray-300">
                    {step.features.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
