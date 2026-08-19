

"use client";

import Image from "next/image";

export default function Growth() {
  return (
    <section className="w-full flex flex-col lg:flex-row">
      {/* LEFT IMAGE */}
      <div className="w-full lg:w-1/2 h-[45vh] sm:h-[50vh] lg:h-[70vh] relative">
        <Image
          src="/images/growth-img.jpeg"
          alt="Continuous Learning and Growth"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover object-center"
        />
      </div>

      {/* RIGHT CONTENT */}
      <div className="w-full lg:w-1/2 bg-white flex items-center">
        <div className="w-full px-6 py-10 sm:px-10 sm:py-12 md:px-14 lg:px-16 xl:px-20">
          {/* SMALL TEXT */}
          <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-[#3c4655] mb-3 sm:mb-4">
            Growth
          </p>

          {/* HEADING */}
          <h2 className="font-cormorant text-3xl sm:text-4xl md:text-5xl text-[#ab7e47] leading-tight mb-5 sm:mb-6">
            Continuous Learning & Growth
          </h2>

          {/* TEXT */}
          <div className="space-y-4 sm:space-y-5 text-sm sm:text-base text-gray-500 leading-relaxed max-w-2xl">
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
