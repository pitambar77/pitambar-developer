"use client";

const awards = [
  {
    id: 1,
    step: "Step 01",
    title: " Research & Planning",
    description:
      "Understanding business goals, target users, and project requirements before development begins.",
  },
  {
    id: 2,
    step: "Step 02",
    title: "UI/UX & Structure",
    description:
      "Designing responsive layouts and scalable structures focused on user experience.",
  },
  {
    id: 3,
    step: "Step 03",
    title: "Development & Integration",
    description:
      "Building modern frontend interfaces, backend systems, APIs, and integrations.",
  },
  {
    id: 4,
    step: "Step 04",
    title: "Optimization & Deployment",
    description:
      "Testing, optimizing performance, and deploying scalable production-ready applications.",
  },
];

export default function DevelopmentProcess() {
  return (
    <section className="bg-[#f7f3ef] py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Heading */}
        <div className="text-center">
          <p className="text-sm uppercase tracking-widest text-[#3c4655] mb-4">
            Development Process
          </p>

          <h2 className="font-cormorant text-4xl md:text-5xl  text-[#ab7e47] leading-tight mb-6">
            My Development Process
          </h2>
        </div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-7 mt-16">
          {awards.map((award) => (
            <div key={award.id} className="text-center">
              {/* Circle */}
              <div className="w-[180px] h-[180px] rounded-full bg-[#3c4655] mx-auto flex flex-col items-center justify-center px-10 text-center">
                <div className="space-y-2">
                  <h2 className="text-white capitalize text-lg leading-none tracking-wide">
                    {award.step}
                  </h2>
                  <div className="w-16 h-[1px] bg-white/50 mx-auto my-3" />
                  <h3 className="text-white text-lg capitalize leading-[1.3] tracking-[1px]">
                    {award.title}
                  </h3>

                 
                </div>
              </div>

              {/* Content */}
              <div className="mt-12 px-3">
                <p className="text-gray-500 leading-relaxed">
                  {award.description}
                </p>

                {/* <button className="mt-10 uppercase tracking-[2px] text-[#b78749] text-[14px] hover:tracking-[5px] transition-all duration-300">
                  Learn More
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
