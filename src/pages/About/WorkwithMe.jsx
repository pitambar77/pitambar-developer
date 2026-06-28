"use client";

import Image from "next/image";

const partnerships = [
  {
    id: 1,
    title: "Modern Development Approach",
    image:
      "/images/Modern-Development.jpeg",
    desc: `Using modern technologies and scalable architecture to create future-ready digital solutions.`,
  },
  {
    id: 2,
    title: "Business-Focused Solutions",
    image:
      "/images/business-focus.jpeg",
    desc: `Building applications that solve real business problems while improving user experience and performance.`,
  },
  {
    id: 3,
    title: "Responsive & Optimized Design",
    image:
      "/images/responsive-optimization.jpeg",
    desc: `Creating fully responsive and performance-optimized applications across all devices.`,
  },
  {
    id: 4,
    title: "Clean & Scalable Code",
    image:
      "/images/clean-scable.jpeg",
    desc: `Writing maintainable and scalable code structures for long-term project growth.`,
  },
];

export default function WorkwithMe() {
  return (
    <section className=" py-20">
      <div className="max-w-7xl mx-auto px-6 ">
        {/* Heading */}
        <div className="text-center max-w-5xl mx-auto">
          <p className="text-sm uppercase tracking-widest text-[#3c4655] mb-4">
            Work With Me
          </p>

          <h2 className="font-cormorant text-4xl md:text-5xl  text-[#ab7e47] leading-tight mb-6">
            Why Clients Choose to Work With Me
          </h2>

          <p className="mt-10 text-gray-500 mb-4 leading-relaxed">
            I focus on creating modern web experiences that combine clean
            design, scalable architecture, and practical business functionality
            to help brands grow digitally.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mt-16">
          {partnerships.map((item) => (
            <div key={item.id} className="group bg-white overflow-hidden">
              {/* Image */}
              <div className="relative h-[200px] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-700"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/10" />

                {/* Bottom Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#20252d] from-0% via-[#3c4655]/80 via-10% to-transparent to-75%" />

                {/* Title */}
                <div className="absolute bottom-8 left-8">
                  <h3 className="text-white text-xl font-cormorant capitalize leading-tight">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="px-8 py-5 bg-[#f7f7f5]  flex flex-col justify-between">
                <p className="text-gray-500 leading-relaxed">{item.desc}</p>

               
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
