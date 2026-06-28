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
              Where To Africa was designed to inspire and simplify African
              travel by connecting travelers with carefully curated
              destinations, safari experiences, accommodations, activities, and
              personalized itineraries through an engaging digital platform.
            </p>

            <p>
              The platform combines dynamic destination architecture,
              interactive map exploration, content relationships, booking
              functionality, and centralized content management to create a
              scalable travel solution that enhances both user experience and
              operational efficiency.
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="mt-16">
          <div className="relative aspect-[16/9] w-full overflow-hidden">
            <Image
              src="/images/where-africa-banner.webp"
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
            <li>Dynamic Destination Management</li>

            <li>Interactive Mapbox Integration</li>

            <li>Dynamic Itineraries, Accomodation and Experiences</li>
            <li>In Landing Page Filter Functionality Add</li>

            <li>Custom CMS & Admin Dashboard</li>

            <li>Booking System Integration</li>
            <li>SEO Optimization</li>
            <li>Responsive User Experience across all Devices</li>
          </ul>
        </div>
        {/* Image */}
        <div className="mt-16">
          <div className="relative aspect-[16/9] w-full overflow-hidden">
            <Image
              src="/images/where-africa-1.webp"
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
                  1. Dynamic Destination Management
                </h4>
                Build a dynamic destination management system that automatically
                updates website content from backend-managed data.
              </li>

              <li>
                <h4 className="font-cormorant text-2xl mb-4 text-[#3c4655]">
                  2. Mapbox Destination Explorer
                </h4>
                Integrate an interactive Mapbox explorer to display destinations
                and safari package locations across Africa.
              </li>

              <li>
                <h4 className="font-cormorant text-2xl mb-4 text-[#3c4655]">
                  3. Destination-Based Content Relationships
                </h4>
                Create connected destination pages that dynamically relate
                accommodations, activities, travel guides, and safari packages.
              </li>

              <li>
                <h4 className="font-cormorant text-2xl mb-4 text-[#3c4655]">
                  4. Advanced Filtering System
                </h4>
                Implement advanced search and filtering to help travelers
                quickly discover relevant experiences.
              </li>

              <li>
                <h4 className="font-cormorant text-2xl mb-4 text-[#3c4655]">
                  5. Booking Engine Integration
                </h4>
                Integrate a flexible booking system that supports itinerary
                inquiries and future booking engine expansion.
              </li>

              <li>
                <h4 className="font-cormorant text-2xl mb-4 text-[#3c4655]">
                  6. Custom Administration Dashboard
                </h4>
                Develop a centralized administration dashboard for managing
                destinations, content, blogs, and SEO settings.
              </li>

              <li>
                <h4 className="font-cormorant text-2xl mb-4 text-[#3c4655]">
                  7. SEO & On-Page Optimization
                </h4>
                Establish a strong SEO foundation with dynamic metadata,
                structured URLs, and optimized content architecture.
              </li>

              <li>
                <h4 className="font-cormorant text-2xl mb-4 text-[#3c4655]">
                  8. Content Interlinking System
                </h4>
                Build an automated content interlinking system to improve
                navigation, user engagement, and search visibility.
              </li>
            </ul>
          </div>
        </div>

        {/* Image */}
        <div className="mt-16">
          <div className="relative aspect-[16/9] w-full overflow-hidden">
            <Image
              src="/images/where-to-africa-2.webp"
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
                  1. Dynamic Destination Management
                </h4>
                The website required a destination management system where
                administrators could create, update, and publish new
                destinations directly from the backend. Any newly created
                destination needed to automatically appear throughout the
                website, including navigation menus, destination sections, and
                related content modules.
              </li>

              <li>
                <h4 className="font-cormorant text-2xl mb-4 text-[#3c4655]">
                  2. Mapbox Destination Explorer
                </h4>
                A dynamic Mapbox integration was implemented to display safari
                destinations and package locations across Africa. Destination
                data is managed from the backend, allowing new locations and
                package counts to automatically appear on the map without
                frontend updates.
              </li>

              <li>
                <h4 className="font-cormorant text-2xl mb-4 text-[#3c4655]">
                  3. Destination-Based Content Relationships
                </h4>
                Every destination required its own dedicated landing page
                containing destination information, national parks, travel
                guides, accommodation options, safari packages, and related
                activities. The challenge was maintaining relationships between
                these content types while keeping everything manageable from the
                CMS.
              </li>

              <li>
                <h4 className="font-cormorant text-2xl mb-4 text-[#3c4655]">
                  4. Advanced Filtering System
                </h4>
                Travelers needed the ability to quickly find relevant
                destinations, itineraries, accommodations, and safari
                experiences using filtering and search options.
              </li>

              <li>
                <h4 className="font-cormorant text-2xl mb-4 text-[#3c4655]">
                  5. Booking Engine Integration
                </h4>
                Each itinerary and activity page required a "Book Now"
                functionality that could integrate with an external booking
                engine while supporting future expansion and customization.
              </li>

              <li>
                <h4 className="font-cormorant text-2xl mb-4 text-[#3c4655]">
                  6. Custom Administration Dashboard
                </h4>
                The client required a centralized administration system capable
                of managing all website content, destinations, itineraries,
                blogs, accommodations, and SEO settings without developer
                assistance.
              </li>

              <li>
                <h4 className="font-cormorant text-2xl mb-4 text-[#3c4655]">
                  7. SEO & On-Page Optimization
                </h4>
                The website needed strong SEO foundations including dynamic meta
                titles, dynamic meta descriptions, structured URLs, schema
                markup, internal linking, and search-friendly content
                architecture.
              </li>

              <li>
                <h4 className="font-cormorant text-2xl mb-4 text-[#3c4655]">
                  8. Content Interlinking System
                </h4>
                Multiple content types such as destinations, itineraries,
                accommodations, activities, and blogs needed to be
                interconnected automatically to improve user navigation and
                search engine discoverability.
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
              src="/images/where-africa-2.webp"
              alt="Ground Handling"
              fill
              className=""
            />
          </div>
        </div>
        <div className="flex justify-center my-10">
          <Link
            href="http://wheretoafrica.manoramaseoservice.com/"
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
