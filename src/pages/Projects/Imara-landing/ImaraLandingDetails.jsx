import React from "react";
import Image from "next/image";
import { CheckCircle2, BadgeCheck, CircleCheckBig } from "lucide-react";
import Link from "next/link";

const ImaraLandingDetails = () => {
  return (
    <section className="bg-[#efede6] py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Top Content */}
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm uppercase tracking-widest text-[#3c4655] mb-3 mt-10">
            Project intro
          </p>

          <h2 className="font-cormorant text-4xl md:text-5xl  text-[#ab7e47] leading-tight mb-8">
            Luxury Tanzania Safaris Landing Page
          </h2>

          <div className="space-y-6 text-gray-500 leading-relaxed">
            <p>
              This project involved the design and development of a
              conversion-focused landing page for a luxury safari travel company
              specializing in Tanzania safari experiences. The goal was to
              create an engaging digital experience that showcases safari
              packages, destinations, and travel experiences while encouraging
              visitors to submit inquiries and book personalized safari tours.
            </p>

            <p>
              The landing page was strategically structured to guide users
              through the customer journey, from discovering safari experiences
              to submitting a customized travel request.
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="mt-16">
          <div className="relative aspect-[16/9] w-full overflow-hidden">
            <Image
              src="/images/landing-banner.webp"
              alt="Ground Handling"
              fill
              className=""
            />
          </div>
        </div>

        {/* Bottom Content */}
        <div className="max-w-3xl mx-auto text-center mt-16">
          <h3 className="font-cormorant text-4xl md:text-5xl  text-[#ab7e47] leading-tight mb-8">
            Objectives
          </h3>

          <ul className="space-y-4 max-w-2xl mx-auto">
            <li className="flex items-start gap-3 text-left text-gray-500 leading-relaxed">
              <CircleCheckBig
                size={18}
                className="text-[#ab7e47] mt-1 flex-shrink-0"
              />
              <span>Increase safari booking inquiries.</span>
            </li>

            <li className="flex items-start gap-3 text-left text-gray-500 leading-relaxed">
              <CircleCheckBig
                size={18}
                className="text-[#ab7e47] mt-1 flex-shrink-0"
              />
              <span>Showcase luxury safari experiences.</span>
            </li>

            <li className="flex items-start gap-3 text-left text-gray-500 leading-relaxed">
              <CircleCheckBig
                size={18}
                className="text-[#ab7e47] mt-1 flex-shrink-0"
              />
              <span>Improve user engagement and trust.</span>
            </li>

            <li className="flex items-start gap-3 text-left text-gray-500 leading-relaxed">
              <CircleCheckBig
                size={18}
                className="text-[#ab7e47] mt-1 flex-shrink-0"
              />
              <span>Highlight featured safari packages.</span>
            </li>

            <li className="flex items-start gap-3 text-left text-gray-500 leading-relaxed">
              <CircleCheckBig
                size={18}
                className="text-[#ab7e47] mt-1 flex-shrink-0"
              />
              <span>Create a mobile-friendly experience.</span>
            </li>

            <li className="flex items-start gap-3 text-left text-gray-500 leading-relaxed">
              <CircleCheckBig
                size={18}
                className="text-[#ab7e47] mt-1 flex-shrink-0"
              />
              <span>Optimize page performance and conversions.</span>
            </li>
          </ul>
        </div>
        {/* Image */}
        <div className="mt-16">
          <div className="relative aspect-[16/9] w-full overflow-hidden">
            <Image
              src="/images/landing-1.webp"
              alt="Ground Handling"
              fill
              className=""
            />
          </div>
        </div>

        {/* challenge */}

        <div className="max-w-4xl mx-auto mt-16">
          <h3 className="font-cormorant text-center text-4xl md:text-5xl text-[#ab7e47] leading-tight mb-8">
            Key Design Elements
          </h3>
          <div className="space-y-4 text-gray-500 mb-8">
            <p>
              The landing page was designed with a strong focus on storytelling
              and visual appeal.
            </p>
          </div>

          <ul className="space-y-4 text-gray-500 max-w-3xl mx-auto">
            <li className="flex gap-3">
              <CheckCircle2
                size={20}
                className="text-[#ab7e47]  flex-shrink-0"
              />
              <span>Immersive hero section with safari imagery.</span>
            </li>

            <li className="flex gap-3">
              <CheckCircle2
                size={20}
                className="text-[#ab7e47]  flex-shrink-0"
              />
              <span>Clear call-to-action buttons.</span>
            </li>

            <li className="flex gap-3">
              <CheckCircle2
                size={20}
                className="text-[#ab7e47]  flex-shrink-0"
              />
              <span>Luxury-focused typography and color palette.</span>
            </li>

            <li className="flex gap-3">
              <CheckCircle2
                size={20}
                className="text-[#ab7e47]  flex-shrink-0"
              />
              <span>Destination and experience highlights.</span>
            </li>

            <li className="flex gap-3">
              <CheckCircle2
                size={20}
                className="text-[#ab7e47]  flex-shrink-0"
              />
              <span>Testimonial and social proof sections.</span>
            </li>

            <li className="flex gap-3">
              <CheckCircle2
                size={20}
                className="text-[#ab7e47]  flex-shrink-0"
              />
              <span>Easy-to-navigate content structure.</span>
            </li>

            <li className="flex gap-3">
              <CheckCircle2
                size={20}
                className="text-[#ab7e47]  flex-shrink-0"
              />
              <span>Responsive design for all devices.</span>
            </li>
          </ul>
          <p className="text-gray-500 leading-relaxed my-8">
            The overall design emphasizes adventure, exclusivity, and trust
            while maintaining a clean and user-friendly interface.
          </p>
        </div>

        {/* Image */}
        <div className="mt-16">
          <div className="relative aspect-[16/9] w-full overflow-hidden">
            <Image
              src="/images/landing-2.webp"
              alt="Ground Handling"
              fill
              className=""
            />
          </div>
        </div>
        <div className="max-w-4xl mx-auto  mt-16">
          <h3 className="font-cormorant text-center text-4xl md:text-5xl  text-[#ab7e47] leading-tight mb-8">
            Features Implemented
          </h3>

          <div className="space-y-6 text-gray-500  leading-relaxed mb-8">
            <p className="text-xl">Responsive Design :</p>

            <div className="ml-8">
              <ul className="space-y-4 max-w-3xl mx-auto">
                <li className="flex gap-3 text-gray-500 leading-relaxed">
                  <BadgeCheck
                    size={20}
                    className="text-[#ab7e47] mt-1 flex-shrink-0"
                  />
                  <span>Mobile Optimization</span>
                </li>

                <li className="flex gap-3 text-gray-500 leading-relaxed">
                  <BadgeCheck
                    size={20}
                    className="text-[#ab7e47] mt-1 flex-shrink-0"
                  />
                  <span>Tablet Compatibility</span>
                </li>

                <li className="flex gap-3 text-gray-500 leading-relaxed">
                  <BadgeCheck
                    size={20}
                    className="text-[#ab7e47] mt-1 flex-shrink-0"
                  />
                  <span>Desktop Experience Enhancement</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="space-y-6 text-gray-500  leading-relaxed mb-8">
            <p className="text-xl">User Experience :</p>

            <div className="ml-8">
              <ul className="space-y-4 max-w-3xl mx-auto">
                <li className="flex gap-3 text-gray-500 leading-relaxed">
                  <BadgeCheck
                    size={20}
                    className="text-[#ab7e47] mt-1 flex-shrink-0"
                  />
                  <span>Intuitive Navigation</span>
                </li>

                <li className="flex gap-3 text-gray-500 leading-relaxed">
                  <BadgeCheck
                    size={20}
                    className="text-[#ab7e47] mt-1 flex-shrink-0"
                  />
                  <span>Fast Page Loading</span>
                </li>

                <li className="flex gap-3 text-gray-500 leading-relaxed">
                  <BadgeCheck
                    size={20}
                    className="text-[#ab7e47] mt-1 flex-shrink-0"
                  />
                  <span>Structured Content Flow</span>
                </li>
                <li className="flex gap-3 text-gray-500 leading-relaxed">
                  <BadgeCheck
                    size={20}
                    className="text-[#ab7e47] mt-1 flex-shrink-0"
                  />
                  <span>Accessible Design</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="space-y-6 text-gray-500  leading-relaxed">
            <p className="text-xl">Conversion Optimization :</p>

            <div className="ml-8">
              <ul className="space-y-4 max-w-3xl mx-auto">
                <li className="flex gap-3 text-gray-500 leading-relaxed">
                  <BadgeCheck
                    size={20}
                    className="text-[#ab7e47] mt-1 flex-shrink-0"
                  />
                  <span>Strategic CTA Placement</span>
                </li>

                <li className="flex gap-3 text-gray-500 leading-relaxed">
                  <BadgeCheck
                    size={20}
                    className="text-[#ab7e47] mt-1 flex-shrink-0"
                  />
                  <span>Inquiry Forms</span>
                </li>

                <li className="flex gap-3 text-gray-500 leading-relaxed">
                  <BadgeCheck
                    size={20}
                    className="text-[#ab7e47] mt-1 flex-shrink-0"
                  />
                  <span>Trust Signals</span>
                </li>
                <li className="flex gap-3 text-gray-500 leading-relaxed">
                  <BadgeCheck
                    size={20}
                    className="text-[#ab7e47] mt-1 flex-shrink-0"
                  />
                  <span>Lead Capture Elements</span>
                </li>
              </ul>
            </div>

            <h3 className="font-cormorant text-2xl md:text-3xl  text-[#ab7e47] leading-tight mb-4">
              Results
            </h3>

            <p>
              The final landing page successfully combines luxury branding,
              engaging storytelling, and strategic conversion elements to
              deliver an exceptional user experience while driving safari
              booking inquiries and business growth.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <div className="relative aspect-[16/9] w-full overflow-hidden">
            <Image
              src="/images/landing-3.webp"
              alt="Ground Handling"
              fill
              className=""
            />
          </div>
        </div>
        <div className="flex justify-center my-10">
          <Link
            href="https://imarakilelenisafaris.com/tanzania-tailormade-safaris"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#3c4655] font-aviner text-white text-sm px-8 py-3 uppercase rounded-sm hover:bg-transparent border border-[#3c4655] hover:border hover:text-[#ab7e47] hover:border-[#ab7e47]  transition cursor-pointer tracking-widest duration-300"
          >
            View Live Site
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ImaraLandingDetails;
