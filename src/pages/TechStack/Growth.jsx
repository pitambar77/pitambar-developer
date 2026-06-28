"use client";

import Button from "@/components/Button";
import Image from "next/image";

export default function Growth() {
  return (
    <section className="w-full h-[70vh] flex">
      {/* LEFT IMAGE (FULL HEIGHT) */}
      <div className="w-1/2 h-full relative">
        <Image
          src="/images/growth-img.jpeg" // your image
          alt="Every Trip"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* RIGHT CONTENT (FULL HEIGHT) */}
      <div className="w-1/2 h-full bg-white flex items-center">
        <div className="px-20">
          {/* SMALL TEXT */}
          <p className="text-sm uppercase tracking-widest text-[#3c4655] mb-4">
            Growth
          </p>

          {/* HEADING */}
          <h2 className="font-cormorant text-4xl md:text-5xl  text-[#ab7e47] leading-tight mb-6">
            Continuous Learning & Growth
          </h2>

          {/* TEXT */}
          <div className="space-y-5 text-gray-500 leading-relaxed ">
            <p>
              Technology is constantly evolving, and I continuously focus on
              improving my development skills, exploring modern frameworks, and
              learning better ways to build scalable digital solutions.
            </p>

            <p>
              I believe continuous learning is essential for creating modern
              applications that remain efficient, maintainable, and
              future-ready.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
