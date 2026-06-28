
import Image from "next/image";
import Link from "next/link";

export default function DetailsExplain() {
  return (
    <section className="bg-[#efede6] py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Top Content */}
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-cormorant text-4xl md:text-5xl  text-[#ab7e47] leading-tight mb-8">
            Project Overview
          </h2>

          <div className="space-y-6 text-gray-500 leading-relaxed">
            <p>
              Imara Kileleni Safaris was designed to provide travelers with a
              modern and engaging platform to explore safari destinations, tour
              packages, and travel experiences across Tanzania.
            </p>

            <p>
              The project focused on combining immersive visuals, responsive
              layouts, and scalable frontend architecture to deliver a premium
              user experience across all devices.
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="mt-16">
          <div className="relative aspect-[16/9] w-full overflow-hidden">
            <Image
              src="/images/imara-home.png"
              alt="Ground Handling"
              fill
              className=""
            />
          </div>
        </div>

        {/* Bottom Content */}
        <div className="max-w-3xl mx-auto text-center mt-16">
          <h3 className="font-cormorant text-4xl md:text-5xl  text-[#ab7e47] leading-tight mb-8">
            Key Features
          </h3>

          <ul className="text-left text-gray-500  leading-relaxed space-y-3 mx-auto max-w-2xl list-disc">
            <li>Dynamic safari package showcase</li>

            <li>Responsive travel experience</li>

            <li>Destination exploration sections</li>
            <li>Interactive UI components</li>

            <li>Testimonial & review integration</li>

            <li>Optimized booking experience</li>
            <li>Mobile-first responsive design</li>
          </ul>
        </div>
        {/* Image */}
        <div className="mt-16">
          <div className="relative aspect-[16/9] w-full overflow-hidden">
            <Image
              src="/images/imara-packages.png"
              alt="packages"
              fill
              className=""
            />
          </div>
        </div>

        {/* challenge */}

        <div className="max-w-4xl mx-auto  mt-16">
          <h3 className="font-cormorant text-center text-4xl md:text-5xl  text-[#ab7e47] leading-tight mb-8">
            Challenge
          </h3>

          <div className="space-y-6 text-gray-500 leading-relaxed">
            <p>
              The goal of this project was to transform a traditional safari
              website into a modern, scalable, and fully manageable travel
              platform. The client required a solution that would not only
              improve the visual experience for visitors but also simplify
              content management and support future business growth.
            </p>
            <p>
              One of the primary challenges was building a system where every
              section of the website could be managed dynamically from an admin
              dashboard without requiring developer intervention. The platform
              needed to support frequent updates to safari packages,
              destinations, banners, blogs, travel guides, testimonials, and
              promotional content.
            </p>
            <p>
              Additionally, the website required advanced navigation and content
              organization due to the large amount of information being
              presented across multiple safari destinations, tour packages, and
              travel categories.
            </p>
            <p>Key Challenges:</p>
            <ul className="text-left text-gray-500  leading-relaxed space-y-3 mx-auto max-w-2xl list-disc">
              <li>
                Building a fully dynamic website where all content is managed
                from the backend.
              </li>

              <li>
                Designing and developing a custom mega menu for improved
                navigation and content discovery.
              </li>

              <li>
                Creating a centralized admin dashboard for managing all website
                sections.
              </li>
              <li>
                Implementing dynamic data fetching across pages and components.
              </li>

              <li>
                Developing an intelligent search system to help users quickly
                find safari packages, destinations, and travel content.
              </li>

              <li>
                Setting up SEO-friendly content management, including metadata,
                page titles, URLs, and schema support.
              </li>
              <li>
                Implementing keyword optimization, internal linking structures,
                and highlighted content sections to improve search visibility.
              </li>
              <li>
                Building a flexible blog management system with customizable
                layouts and reusable content blocks.
              </li>
              <li>
                Creating reusable forms with validation, email notifications,
                customer confirmation emails, and admin mail templete.
              </li>
              <li>
                Optimizing performance, image delivery, and page speed while
                maintaining a rich visual experience.
              </li>
            </ul>
            <p>while still maintaining a clean and premium experience.</p>
          </div>
        </div>

        {/* Image */}
        <div className="mt-16">
          <div className="relative aspect-[16/9] w-full overflow-hidden">
            <Image
              src="/images/imara-megamenu.webp"
              alt="megamenu"
              fill
              className=""
            />
          </div>
        </div>
        <div className="max-w-4xl mx-auto  mt-16">
          <h3 className="font-cormorant text-center text-4xl md:text-5xl  text-[#ab7e47] leading-tight mb-8">
            Solution
          </h3>

          <div className="space-y-6 text-gray-500 leading-relaxed">
            <p>
              To address these requirements, a fully dynamic architecture was
              developed using modern frontend and backend technologies. The
              platform was built with scalability and long-term maintainability
              in mind, allowing the client to manage website content
              independently through a custom administration system.
            </p>

            <p>
              A modular content management approach was implemented, enabling
              dynamic control over homepage sections, package listings,
              destinations, blogs, testimonials, and promotional content.
            </p>

            <div>
              <h4 className="font-cormorant mb-4 text-xl md:text-2xl  text-[#3c4655] leading-tight">
                Dynamic Content Management
              </h4>
              <p className=" mb-4">
                A custom admin dashboard was developed to allow administrators
                to:
              </p>
              <ul className="text-left text-gray-500  leading-relaxed space-y-3 mx-auto max-w-3xl list-disc">
                <li>Manage homepage content.</li>

                <li>Update safari packages.</li>

                <li>Add and edit destinations.</li>
                <li>Manage blogs and travel guides.</li>

                <li>Update testimonials and reviews.</li>
                <li>Control SEO settings for individual pages.</li>
              </ul>
              <p className="my-4">
                This eliminated the need for manual code changes whenever
                website content needed updating.
              </p>
            </div>
            <div>
              <h4 className="font-cormorant mb-4 text-xl md:text-2xl text-[#3c4655] leading-tight">
                Custom Mega Menu System
              </h4>
              <p className="mb-4">
                A fully customized mega menu was designed to organize large
                amounts of travel content into structured categories.
              </p>
              <p className=" mb-4">The menu provides quick access to:</p>
              <ul className="text-left text-gray-500  leading-relaxed space-y-3 mx-auto max-w-3xl list-disc">
                <li>Safari Packages</li>

                <li>Destinations</li>

                <li>Travel Guides</li>

                <li>Blog Categories</li>
                <li>Contact & Inquiry Pages</li>
              </ul>
              <p className="my-4">
                The search experience was optimized to help users find relevant
                content quickly and efficiently.
              </p>
            </div>

            <div>
              <h4 className="font-cormorant mb-4 text-xl md:text-2xl text-[#3c4655] leading-tight">
                SEO & Content Optimization
              </h4>
              <p className="mb-4">
                The platform was developed with SEO as a core requirement.
              </p>
              <p className=" mb-4">Implemented features include:</p>
              <ul className="text-left text-gray-500  leading-relaxed space-y-3 mx-auto max-w-3xl list-disc">
                <li>Dynamic meta titles.</li>

                <li>Dynamic meta descriptions.</li>

                <li>SEO-friendly URLs.</li>
                <li>Open Graph support.</li>
                <li>Structured heading hierarchy.</li>
                <li>Internal linking strategy.</li>
                <li>Keyword-focused content structure.</li>
                <li>Sitemap generation.</li>
                <li>Search engine indexing optimization.</li>
              </ul>
              <p className="my-4">
                This provides a strong foundation for long-term organic
                visibility.
              </p>
            </div>

            <div>
              <h4 className="font-cormorant mb-4 text-xl md:text-2xl text-[#3c4655] leading-tight">
                Reusable Form System
              </h4>
              <p className="mb-4">
                A reusable form architecture was developed to ensure consistency
                across the website.
              </p>
              <p className=" mb-4">Features include:</p>
              <ul className="text-left text-gray-500  leading-relaxed space-y-3 mx-auto max-w-3xl list-disc">
                <li>Client-side validation.</li>

                <li>Server-side validation.</li>

                <li>Email notifications to administrators.</li>
                <li>Automated customer confirmation emails.</li>

                <li>Reusable form components.</li>
                <li>Contact inquiries.</li>
              </ul>
              <p className="my-4">
                This allows forms to be deployed across multiple pages while
                maintaining a consistent experience.
              </p>
            </div>

            <div>
              <h4 className="font-cormorant mb-4 text-xl md:text-2xl text-[#3c4655] leading-tight">
                Performance Optimization
              </h4>
              <p className="mb-4">
                Performance optimization was prioritized throughout development.
              </p>
              <p className=" mb-4">Implemented improvements include:</p>
              <ul className="text-left text-gray-500  leading-relaxed space-y-3 mx-auto max-w-3xl list-disc">
                <li>Image optimization.</li>

                <li>Lazy loading.</li>

                <li>Component reusability.</li>
                <li>Dynamic imports.</li>

                <li>Responsive image handling.</li>
                <li>Code splitting.</li>
                <li>Improved Core Web Vitals performance.</li>
              </ul>
              <p className="my-4">
                The result is a fast, responsive, and user-friendly experience
                across desktop and mobile devices.
              </p>
            </div>
            <h3 className="font-cormorant text-2xl md:text-3xl  text-[#ab7e47] leading-tight mb-4">
              Results
            </h3>
            <p>
              The completed platform provides the client with a fully manageable
              digital ecosystem that supports ongoing content updates, improved
              user engagement, and future scalability.
            </p>
          </div>
        </div>
        <div className="mt-16">
          <div className="relative aspect-[16/9] w-full overflow-hidden">
            <Image
              src="/images/imara-dashboard.webp"
              alt="dashboard"
              fill
              className=""
            />
          </div>
        </div>
        <div className="max-w-4xl mx-auto  mt-16">
          <h3 className="font-cormorant text-center text-4xl md:text-5xl  text-[#ab7e47] leading-tight mb-8">
            Key Solution
          </h3>

          <div className="space-y-4 text-gray-500 leading-relaxed">
            <h4 className="font-cormorant text-xl md:text-3xl  text-[#ab7e47] leading-tight">
              Destination Discovery
            </h4>
            <p>
              Visitors can explore safari destinations through dedicated pages
              that provide detailed information, highlights, and travel
              inspiration.
            </p>
            <h4 className="font-cormorant text-xl md:text-3xl  text-[#ab7e47] leading-tight">
              Travel Package Showcase
            </h4>
            <p>
              Tour packages are presented in a structured format that makes it
              easy for users to compare experiences and understand what each
              journey offers.
            </p>
            <h4 className="font-cormorant text-xl md:text-3xl  text-[#ab7e47] leading-tight">
              Responsive Design
            </h4>
            <p>
              The entire platform adapts seamlessly across desktop, tablet, and
              mobile devices to provide a consistent browsing experience.
            </p>
            <h4 className="font-cormorant text-xl md:text-3xl  text-[#ab7e47] leading-tight">
              Visual Storytelling
            </h4>
            <p>
              Large imagery and carefully structured content help communicate
              the unique atmosphere and beauty of African travel experiences.
            </p>
            <h4 className="font-cormorant text-xl md:text-3xl  text-[#ab7e47] leading-tight">
              Inquiry System
            </h4>
            <p>
              Visitors can quickly connect with the business through inquiry
              forms and contact sections strategically placed throughout the
              website.
            </p>
            <h4 className="font-cormorant text-xl md:text-3xl  text-[#ab7e47] leading-tight">
              SEO-Friendly Structure
            </h4>
            <p>
              Pages are organized using clean URLs, optimized content hierarchy,
              and metadata practices to support search visibility.
            </p>
          </div>
        </div>
        <div className="mt-16">
          <div className="relative aspect-[16/9] w-full overflow-hidden">
            <Image
              src="/images/imara-listing.webp"
              alt="Ground Handling"
              fill
              className=""
            />
          </div>
        </div>

        <div className="flex justify-center my-10">
          <Link
            href="https://imarakilelenisafaris.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#3c4655] font-aviner text-white text-sm px-8 py-3 uppercase rounded-sm hover:bg-transparent border border-[#3c4655] hover:border hover:text-[#ab7e47] hover:border-[#ab7e47]  transition cursor-pointer tracking-widest duration-300"
          >
            View Live Site
          </Link>
        </div>

        <div className="max-w-4xl mx-auto  mt-16">
          <h3 className="font-cormorant text-center text-4xl md:text-5xl  text-[#ab7e47] leading-tight mb-8">
            Technology Stack
          </h3>

          <h3 className="font-cormorant  text-2xl md:text-4xl  text-[#ab7e47] leading-tight mt-6 mb-4">
            Frontend
          </h3>

          <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            <div className="space-y-4 mb-4 text-gray-500 leading-relaxed ">
              <h4 className="font-cormorant text-xl md:text-2xl  text-[#3c4655] leading-tight">
                Next.js
              </h4>
              <p>
                Next.js was selected as the primary frontend framework to build
                a fast, scalable, and SEO-friendly travel platform. Its
                server-side rendering and static generation capabilities helped
                improve page performance, search engine visibility, and overall
                user experience. The framework also provided a structured
                architecture for managing dynamic pages such as safari packages,
                destinations, blogs, and travel guides.
              </p>
            </div>
            <div className="space-y-4 mb-4 text-gray-500 leading-relaxed ">
              <h4 className="font-cormorant text-xl md:text-2xl  text-[#3c4655] leading-tight">
                Tailwind CSS
              </h4>
              <p>
                Tailwind CSS was used to create a consistent and responsive
                design system throughout the website. Its utility-first approach
                allowed rapid development of reusable UI components while
                maintaining design consistency across all pages. The framework
                helped build mobile-friendly layouts, custom sections, and
                responsive interfaces that adapt seamlessly across different
                screen sizes.
              </p>
            </div>
          </div>
          <h3 className="font-cormorant   text-2xl md:text-4xl  text-[#ab7e47] leading-tight mt-6 mb-4">
            Backend
          </h3>

          <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            <div className="space-y-4 mb-4 text-gray-500 leading-relaxed ">
              <h4 className="font-cormorant text-xl md:text-2xl  text-[#3c4655] leading-tight">
                Node.js
              </h4>
              <p>
                Node.js powered the server-side functionality of the platform
                and handled API requests, form processing, business logic, and
                content management operations. It provided a scalable
                environment capable of supporting dynamic content updates,
                search functionality, blog management, and future platform
                expansion.
              </p>
            </div>
            <div className="space-y-4 mb-4 text-gray-500 leading-relaxed ">
              <h4 className="font-cormorant text-xl md:text-2xl  text-[#3c4655] leading-tight">
                Express.js
              </h4>
              <p>
                Express.js was used to structure backend APIs and manage
                communication between the frontend, database, and admin
                dashboard. It simplified route management, middleware handling,
                authentication workflows, form submissions, and content delivery
                across different sections of the website.
              </p>
            </div>
          </div>

          <h3 className="font-cormorant text-2xl md:text-4xl  text-[#ab7e47] leading-tight mt-6 mb-4">
            Database
          </h3>
          <div className="space-y-4 mb-4 text-gray-500 leading-relaxed ">
            <h4 className="font-cormorant text-xl md:text-2xl  text-[#3c4655] leading-tight">
              MongoDB
            </h4>
            <p>
              MongoDB was chosen for its flexibility and ability to support
              dynamic content structures. Since the platform contains safari
              packages, destinations, blogs, SEO data, testimonials, and
              homepage content, MongoDB's document-based architecture made it
              easier to manage evolving content requirements while maintaining
              scalability and performance.
            </p>
          </div>
          <h3 className="font-cormorant  text-2xl md:text-4xl  text-[#ab7e47] leading-tight mt-6 mb-4">
            Additional Tools
          </h3>
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            <div className="space-y-4 mb-4 text-gray-500 leading-relaxed ">
              <h4 className="font-cormorant text-xl md:text-2xl  text-[#3c4655] leading-tight">
                Cloudinary
              </h4>
              <p>
                Cloudinary was integrated to manage and optimize media assets
                throughout the website. It handled image uploads, storage,
                transformations, and delivery while automatically optimizing
                image sizes for different devices. This significantly improved
                page speed and ensured high-quality visuals without compromising
                performance.
              </p>
            </div>
            <div className="space-y-4 mb-4 text-gray-500 leading-relaxed ">
              <h4 className="font-cormorant text-xl md:text-2xl  text-[#3c4655] leading-tight">
                Git & GitHub
              </h4>
              <p>
                Git and GitHub were used for version control, project
                collaboration, and deployment management. They allowed efficient
                tracking of code changes, branch management, feature
                development, and project backups throughout the development
                lifecycle. This ensured a reliable workflow and simplified
                future maintenance and updates.
              </p>
            </div>
            <div className="space-y-4 mb-4 text-gray-500 leading-relaxed ">
              <h4 className="font-cormorant text-xl md:text-2xl  text-[#3c4655] leading-tight">
                Vercel
              </h4>
              <p>
                Vercel was primarily used to deploy staging and preview versions
                of the website during development. This allowed features, design
                updates, and content changes to be tested in a live environment
                before being published to the production website.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
