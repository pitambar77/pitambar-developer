"use client";

export default function Overview() {
  return (
    <section className="w-full bg-[#f7f5f2] py-20">
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* SMALL TAGLINE */}
        <p className="text-sm uppercase tracking-widest text-[#3c4655] mb-3">
          WHO I AM
        </p>

        <h2 className="font-cormorant text-4xl md:text-5xl  text-[#ab7e47] leading-tight mb-6">
          Turning Ideas into Modern Web Solutions
        </h2>

        {/* CONTENT */}
        <div className="space-y-6 text-gray-500 leading-relaxed">
          <p>
            My passion for web development comes from solving real-world
            problems through clean design and scalable technology.
          </p>

          <p>
            I enjoy creating applications that combine responsive user
            interfaces, optimized performance, and maintainable architecture to
            deliver seamless digital experiences.
          </p>

          <p>
            Over the years, I’ve worked on safari platforms, booking systems,
            admin dashboards, hospitality websites, and Zoho CRM integrations —
            helping businesses improve their online presence through modern web
            technologies.
          </p>
          <p>
            My approach focuses on creating applications that are easy to
            manage, fast to use, and built for long-term growth. Whether it's
            developing dynamic content management systems, integrating
            third-party services, or improving user workflows, I enjoy turning
            complex challenges into practical solutions.
          </p>
          <p>
            I am constantly learning new technologies and best practices to
            improve my skills and deliver better digital experiences. My goal is
            to build products that not only meet business objectives but also
            provide real value to the people who use them every day.
          </p>
        </div>
      </div>
    </section>
  );
}
