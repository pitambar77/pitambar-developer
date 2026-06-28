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
              Bed & Breakfast was designed to connect travelers with quality
              accommodations, dining experiences, and local attractions while
              providing property owners and businesses with a powerful platform
              to showcase their offerings.
            </p>

            <p>
              The project combined dynamic listings, Mapbox-powered location
              discovery, booking integrations, restaurant management, and a
              custom administration system to deliver a scalable and
              user-friendly hospitality ecosystem across all devices.
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="mt-16">
          <div className="relative aspect-[16/9] w-full overflow-hidden">
            <Image
              src="/images/bed-breakfast-banner-1.webp"
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
            <li>Interactive Property Map</li>

            <li>Property & Accommodation Listings</li>

            <li>Restaurant Directory & Menu Management</li>
            <li>Multi-Step Owner Submission Forms</li>

            <li>Activity Showcase & Filtering</li>

            <li>Booking Engine Integration</li>
            <li>Custom Admin Dashboard</li>
            <li>Dynamic Content Management</li>
            <li>SEO-Friendly Architecture</li>
            <li>Responsive User Experience across all Devices</li>
          </ul>
        </div>
        {/* Image */}
        <div className="mt-16">
          <div className="relative aspect-[16/9] w-full overflow-hidden">
            <Image
              src="/images/bed-breakfast-property.webp"
              alt="Ground Handling"
              fill
              className=""
            />
          </div>
        </div>

        {/* challenge */}

        <div className="max-w-4xl mx-auto mt-16">
          <h3 className="font-cormorant text-center text-4xl md:text-5xl text-[#ab7e47] leading-tight mb-8">
            Challenge
          </h3>

          <div className="space-y-6 text-gray-500 leading-relaxed">
            <p>
              Where To Africa required a highly dynamic and scalable travel
              platform capable of managing a large number of destinations,
              itineraries, accommodations, travel guides, and safari
              experiences. The challenge was to create a system that remained
              easy for administrators to manage while providing travelers with
              an intuitive and engaging browsing experience.
            </p>

            <p>
              The platform needed to support complex content relationships,
              destination-based navigation, booking integrations, SEO
              management, and dynamic content generation without requiring
              technical intervention for day-to-day updates.
            </p>

            <h3 className="font-cormorant  text-xl md:text-3xl text-[#ab7e47] leading-tight mb-4">
              Key Challenges
            </h3>

            <ul className="text-left text-gray-500 leading-relaxed space-y-5 mx-auto max-w-3xl">
              <li>
                <h4 className="font-cormorant text-2xl mb-4 text-[#3c4655]">
                  1. Interactive Property Map Integration
                </h4>
                Display property locations on an interactive map while showing
                property details, pricing, and address information when users
                interact with map markers.
              </li>

              <li>
                <h4 className="font-cormorant text-2xl mb-4 text-[#3c4655]">
                  2. Multi-Step Owner Submission System
                </h4>
                Create a flexible property and restaurant submission process
                that allows different types of owners to list their businesses
                through a guided multi-step application form.
              </li>

              <li>
                <h4 className="font-cormorant text-2xl mb-4 text-[#3c4655]">
                  3. Dynamic Restaurant Menu Management
                </h4>
                Develop a system where each restaurant can manage its own menu
                items, categories, pricing, and related information through the
                administration panel.
              </li>
              <li>
                <h4 className="font-cormorant text-2xl mb-4 text-[#3c4655]">
                  4. Activity Categorization & Filtering
                </h4>
                Build a structured activity management system with categories
                and filtering options to help visitors quickly find relevant
                activities and experiences.
              </li>
              <li>
                <h4 className="font-cormorant text-2xl mb-4 text-[#3c4655]">
                  5. Booking Engine Integration
                </h4>
                Integrate external booking functionality into activities and
                accommodation listings while maintaining a seamless user
                experience.
              </li>

              <li>
                <h4 className="font-cormorant text-2xl mb-4 text-[#3c4655]">
                  6. Centralized Administration Dashboard
                </h4>
                Create an admin-friendly dashboard capable of managing
                properties, restaurants, activities, bookings, and website
                content from a single location.
              </li>
            </ul>
          </div>
        </div>

        {/* Image */}
        <div className="mt-16">
          <div className="relative aspect-[16/9] w-full overflow-hidden">
            <Image
              src="/images/bed-breakfast-experience.webp"
              alt="Ground Handling"
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
              To address these challenges, a fully dynamic content architecture
              was developed using modern web technologies, allowing the platform
              to scale while remaining easy to manage.
            </p>

            <p>
              A modular content management approach was implemented, enabling
              dynamic control over homepage sections, package listings,
              destinations, blogs, testimonials, and promotional content.
            </p>

            <ul className="text-left text-gray-500 leading-relaxed space-y-5 mx-auto max-w-3xl">
              <li>
                <h4 className="font-cormorant text-2xl mb-4 text-[#3c4655]">
                  Interactive Property Explorer
                </h4>
                Implemented Mapbox integration with dynamic property
                coordinates, allowing visitors to view accommodation locations
                and property information directly from the map.
              </li>

              <li>
                <h4 className="font-cormorant text-2xl mb-4 text-[#3c4655]">
                  Role-Based Listing Application System
                </h4>
                Developed a multi-step submission form that adapts based on the
                selected listing type, providing a streamlined experience for
                property owners and restaurant managers.
              </li>

              <li>
                <h4 className="font-cormorant text-2xl mb-4 text-[#3c4655]">
                  Restaurant Menu Management Module
                </h4>
                Created a dedicated menu management system where administrators
                can organize menu categories, pricing, and restaurant-specific
                offerings from the dashboard.
              </li>

              <li>
                <h4 className="font-cormorant text-2xl mb-4 text-[#3c4655]">
                  Dynamic Activity Management
                </h4>
                Implemented category-based activity management with filtering
                functionality, making it easier for users to browse and discover
                experiences.
              </li>

              <li>
                <h4 className="font-cormorant text-2xl mb-4 text-[#3c4655]">
                  Integrated Booking Experience
                </h4>
                Built a configurable booking system that allows booking links
                and booking engine integrations to be managed directly from the
                backend and opened through custom booking interfaces.
              </li>

              <li>
                <h4 className="font-cormorant text-2xl mb-4 text-[#3c4655]">
                  Custom CMS & Admin Dashboard
                </h4>
                Developed a centralized administration panel with full CRUD
                functionality for properties, restaurants, activities, menus,
                and content management, enabling non-technical users to manage
                the platform efficiently.
              </li>
            </ul>
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
              src="/images/bed-breakfast-dashboard.webp"
              alt="Ground Handling"
              fill
              className=""
            />
          </div>
        </div>

        <div className="flex justify-center my-10">
          <Link
            href="http://bedandbreakfast.manoramaseoservice.com/"
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
