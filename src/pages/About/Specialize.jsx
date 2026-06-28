"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    title: "Full Stack MERN Development",
    desc: "Building scalable and secure full-stack applications with modern frontend interfaces, backend APIs, and optimized database systems.",
    image: "./images/full-stack.jpeg",
  },
  {
    title: "React & Next.js Development",
    desc: "Creating fast, responsive, and SEO-friendly frontend experiences using modern React.js and Next.js technologies.",
    image: "/images/next-slider.jpeg",
  },
  {
    title: "Website Modernization",
    desc: "Transforming outdated websites into responsive and modern digital experiences with improved usability and performance.",
    image: "/images/mernstack-slider.jpeg",
  },
  {
    title: "CRM Automation & Integrations",
    desc: "Implementing workflow automation, lead management, and business integrations through customized Zoho CRM solutions.",
    image: "/images/crm-slide-3.jpeg",
  },
];

export default function Specialize() {
  return (
    <section className="w-full bg-[#f7f5f2] py-20">
      {/* HEADER */}
      <div className="text-center mb-16">
        <p className="text-sm uppercase tracking-widest text-[#3c4655] mb-4">
          What I Specialize In
        </p>

        <h2 className="font-cormorant text-4xl md:text-5xl  text-[#ab7e47] leading-tight mb-6">
          What I Specialize In
        </h2>
      </div>

      {/* SLIDER */}
      <div className="relative max-w-7xl mx-auto px-6">
        {/* LEFT BUTTON */}
        <button className="swiper-prev absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-black hover:text-white transition">
          <ChevronLeft size={20} />
        </button>

        {/* RIGHT BUTTON */}
        <button className="swiper-next absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-black hover:text-white transition">
          <ChevronRight size={20} />
        </button>

        <Swiper
          modules={[Autoplay, Navigation]}
          loop
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = ".swiper-prev";
            swiper.params.navigation.nextEl = ".swiper-next";
          }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {slides.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="overflow-hidden bg-white shadow-md rounded-md my-4">
                {/* IMAGE */}
                <div className="relative h-[240px] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>

                {/* CONTENT BELOW IMAGE */}
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
