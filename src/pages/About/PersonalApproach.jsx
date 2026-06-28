"use client";

// import Button from "@/components/Button";
import Image from "next/image";

export default function PersonalApproach() {
  return (
    <section className="w-full h-[80vh] flex">
      {/* LEFT IMAGE (FULL HEIGHT) */}
      <div className="w-1/2 h-full relative">
        <Image
          src="/images/my-approuch.jpeg" // your image
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
            PERSONAL APPROACH SECTION
          </p>

          {/* HEADING */}
          <h2 className="font-cormorant text-4xl md:text-5xl  text-[#ab7e47] leading-tight mb-6">
            My Approach to Development
          </h2>

          {/* TEXT */}
          <div className="space-y-5 text-gray-500 leading-relaxed ">
            <p>
              I believe great web development is about more than just writing
              code — it’s about creating digital experiences that are
              functional, scalable, visually engaging, and easy for users to
              interact with.
            </p>

            <p>
              My focus is on building modern applications that combine clean
              architecture, responsive design, and business-focused
              functionality to deliver meaningful results.
            </p>
          </div>

          {/* BUTTON */}
          {/* <div className="mt-8">
            <Button href={"/"}>Learn More</Button>
          </div> */}
        </div>
      </div>
    </section>
  );
}
