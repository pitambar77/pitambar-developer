"use client";

import Button from "@/components/Button";

export default function Overview() {
  return (
    <section className="w-full bg-[#f7f5f2] py-20">
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* SMALL TAGLINE */}
        <p className="text-sm uppercase tracking-widest text-[#3c4655] mb-3">
          Why choose
        </p>

        <h2 className="font-cormorant text-4xl md:text-5xl  text-[#ab7e47] leading-tight mb-6">
          Why I Use These Technologies
        </h2>

        {/* CONTENT */}
        <div className="space-y-6 text-gray-500 leading-relaxed">
          <p>
            I choose technologies that help build scalable, maintainable, and
            performance-focused digital products.
          </p>

          <p>
            My stack is designed to create modern user experiences, efficient
            backend systems, flexible workflows, and scalable applications that
            can grow alongside business requirements.
          </p>
        </div>
      </div>
    </section>
  );
}
