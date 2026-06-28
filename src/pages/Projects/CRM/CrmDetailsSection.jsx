import Image from "next/image";
import { CheckCircle2, BadgeCheck, CircleCheckBig } from "lucide-react";

export default function CrmDetailsSection() {
  return (
    <section className="bg-[#efede6] py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Top Content */}
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-cormorant text-4xl md:text-5xl  text-[#ab7e47] leading-tight mb-8">
            CRM Implementation
          </h2>

          <div className="space-y-6 text-gray-500 leading-relaxed">
            <p>
              The Zoho CRM project focused on designing and implementing a
              customized customer relationship management system tailored to the
              client's sales and lead management processes.
            </p>

            <p>
              As part of the implementation, I configured Zoho CRM modules,
              custom fields, page layouts, workflows, and automation rules to
              align with the client's business requirements. The system was
              structured to streamline lead capture, improve follow-up
              processes, automate repetitive tasks, and provide better
              visibility into sales activities.
            </p>
            <p>
              The solution included lead management automation, email
              notifications, custom reports, dashboards, role-based access
              control, and workflow-driven processes that reduced manual effort
              and improved operational efficiency.
            </p>
            <p>
              The result was a centralized CRM platform that enabled teams to
              manage leads, track customer interactions, monitor sales
              performance, and automate day-to-day business operations through a
              scalable and easy-to-maintain system.
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="mt-16">
          <div className="relative aspect-[16/9] w-full overflow-hidden">
            <Image
              src="/images/crm-banner.webp"
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

          <ul className="space-y-4 max-w-2xl mx-auto">
            <li className="flex items-start gap-3 text-left text-gray-500 leading-relaxed">
              <CircleCheckBig
                size={18}
                className="text-[#ab7e47] mt-1 flex-shrink-0"
              />
              <span>
                Zoho CRM setup and customization based on business requirements
              </span>
            </li>

            <li className="flex items-start gap-3 text-left text-gray-500 leading-relaxed">
              <CircleCheckBig
                size={18}
                className="text-[#ab7e47] mt-1 flex-shrink-0"
              />
              <span>
                Custom modules and fields for managing business-specific data
              </span>
            </li>

            <li className="flex items-start gap-3 text-left text-gray-500 leading-relaxed">
              <CircleCheckBig
                size={18}
                className="text-[#ab7e47] mt-1 flex-shrink-0"
              />
              <span>Lead capture, tracking, and management workflow</span>
            </li>

            <li className="flex items-start gap-3 text-left text-gray-500 leading-relaxed">
              <CircleCheckBig
                size={18}
                className="text-[#ab7e47] mt-1 flex-shrink-0"
              />
              <span>Automated lead assignment and follow-up processes</span>
            </li>

            <li className="flex items-start gap-3 text-left text-gray-500 leading-relaxed">
              <CircleCheckBig
                size={18}
                className="text-[#ab7e47] mt-1 flex-shrink-0"
              />
              <span>Email templates and notification automation</span>
            </li>

            <li className="flex items-start gap-3 text-left text-gray-500 leading-relaxed">
              <CircleCheckBig
                size={18}
                className="text-[#ab7e47] mt-1 flex-shrink-0"
              />
              <span>Sales pipeline and deal stage management</span>
            </li>

            <li className="flex items-start gap-3 text-left text-gray-500 leading-relaxed">
              <CircleCheckBig
                size={18}
                className="text-[#ab7e47] mt-1 flex-shrink-0"
              />
              <span>Custom reports and performance dashboards</span>
            </li>

            <li className="flex items-start gap-3 text-left text-gray-500 leading-relaxed">
              <CircleCheckBig
                size={18}
                className="text-[#ab7e47] mt-1 flex-shrink-0"
              />
              <span>User roles, profiles, and permission management</span>
            </li>

            <li className="flex items-start gap-3 text-left text-gray-500 leading-relaxed">
              <CircleCheckBig
                size={18}
                className="text-[#ab7e47] mt-1 flex-shrink-0"
              />
              <span>Task automation and activity tracking</span>
            </li>

            <li className="flex items-start gap-3 text-left text-gray-500 leading-relaxed">
              <CircleCheckBig
                size={18}
                className="text-[#ab7e47] mt-1 flex-shrink-0"
              />
              <span>Centralized customer data management</span>
            </li>

            <li className="flex items-start gap-3 text-left text-gray-500 leading-relaxed">
              <CircleCheckBig
                size={18}
                className="text-[#ab7e47] mt-1 flex-shrink-0"
              />
              <span>
                WhatsApp and Telegram integration for customer communication
              </span>
            </li>

            <li className="flex items-start gap-3 text-left text-gray-500 leading-relaxed">
              <CircleCheckBig
                size={18}
                className="text-[#ab7e47] mt-1 flex-shrink-0"
              />
              <span>Workflow automation to reduce manual operations</span>
            </li>
          </ul>
        </div>
        {/* Image */}
        <div className="mt-16">
          <div className="relative aspect-[16/9] w-full overflow-hidden">
            <Image
              src="/images/crm-1.webp"
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
          <div className="space-y-4 text-gray-500 mb-8">
            <p>
              The primary challenge was configuring Zoho CRM to align with the
              client's existing sales process while ensuring the system remained
              flexible enough to support future business growth. The CRM needed
              to manage leads, customer interactions, sales activities, and
              internal workflows through a centralized and easy-to-use platform.
            </p>

            <p>
              In addition to CRM customization, the project required workflow
              automation, custom modules, role-based permissions, email
              integrations, reporting dashboards, and process optimization to
              reduce manual work and improve team efficiency across multiple
              departments.
            </p>
          </div>

          <ul className="space-y-4 text-gray-500 max-w-3xl mx-auto">
            <li className="flex gap-3">
              <CheckCircle2
                size={20}
                className="text-[#ab7e47]  flex-shrink-0"
              />
              <span>
                Understanding and mapping the client's existing sales process
                into Zoho CRM
              </span>
            </li>

            <li className="flex gap-3">
              <CheckCircle2
                size={20}
                className="text-[#ab7e47]  flex-shrink-0"
              />
              <span>
                Creating custom modules for business data that were not
                available in standard CRM modules
              </span>
            </li>

            <li className="flex gap-3">
              <CheckCircle2
                size={20}
                className="text-[#ab7e47]  flex-shrink-0"
              />
              <span>
                Automating lead assignments based on predefined business rules
              </span>
            </li>

            <li className="flex gap-3">
              <CheckCircle2
                size={20}
                className="text-[#ab7e47]  flex-shrink-0"
              />
              <span>
                Managing different access levels for sales, marketing, and
                management teams
              </span>
            </li>

            <li className="flex gap-3">
              <CheckCircle2
                size={20}
                className="text-[#ab7e47]  flex-shrink-0"
              />
              <span>
                Integrating customer email communication with CRM records
              </span>
            </li>

            <li className="flex gap-3">
              <CheckCircle2
                size={20}
                className="text-[#ab7e47]  flex-shrink-0"
              />
              <span>
                Building reports that provide meaningful business insights
              </span>
            </li>

            <li className="flex gap-3">
              <CheckCircle2
                size={20}
                className="text-[#ab7e47]  flex-shrink-0"
              />
              <span>Reducing repetitive manual tasks through automation</span>
            </li>

            <li className="flex gap-3">
              <CheckCircle2
                size={20}
                className="text-[#ab7e47]  flex-shrink-0"
              />
              <span>
                Ensuring the CRM structure could support future business growth
              </span>
            </li>
          </ul>
        </div>

        {/* Image */}
        <div className="mt-16">
          <div className="relative aspect-[16/9] w-full overflow-hidden">
            <Image
              src="/images/crm-2.webp"
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
              To solve these challenges, Zoho CRM was customized to match the
              client's sales process, lead management workflow, and business
              requirements.
            </p>

            <p>
              Custom modules, automation workflows, email integrations, user
              permissions, and reporting dashboards were implemented to
              streamline operations, reduce manual work, and improve overall
              efficiency.
            </p>

            <div className="ml-16">
              <ul className="space-y-4 max-w-3xl mx-auto">
                <li className="flex gap-3 text-gray-500 leading-relaxed">
                  <BadgeCheck
                    size={20}
                    className="text-[#ab7e47] mt-1 flex-shrink-0"
                  />
                  <span>
                    Configured Zoho CRM according to the client's sales and lead
                    management process.
                  </span>
                </li>

                <li className="flex gap-3 text-gray-500 leading-relaxed">
                  <BadgeCheck
                    size={20}
                    className="text-[#ab7e47] mt-1 flex-shrink-0"
                  />
                  <span>
                    Developed custom modules, layouts, and fields to align with
                    business operations and workflows.
                  </span>
                </li>

                <li className="flex gap-3 text-gray-500 leading-relaxed">
                  <BadgeCheck
                    size={20}
                    className="text-[#ab7e47] mt-1 flex-shrink-0"
                  />
                  <span>
                    Implemented automated lead assignment and follow-up
                    workflows to improve response times.
                  </span>
                </li>

                <li className="flex gap-3 text-gray-500 leading-relaxed">
                  <BadgeCheck
                    size={20}
                    className="text-[#ab7e47] mt-1 flex-shrink-0"
                  />
                  <span>
                    Created email templates and notification systems for
                    streamlined customer communication.
                  </span>
                </li>

                <li className="flex gap-3 text-gray-500 leading-relaxed">
                  <BadgeCheck
                    size={20}
                    className="text-[#ab7e47] mt-1 flex-shrink-0"
                  />
                  <span>
                    Configured role-based access control for different
                    departments and user responsibilities.
                  </span>
                </li>

                <li className="flex gap-3 text-gray-500 leading-relaxed">
                  <BadgeCheck
                    size={20}
                    className="text-[#ab7e47] mt-1 flex-shrink-0"
                  />
                  <span>
                    Built custom reports and dashboards for monitoring leads,
                    deals, and team performance.
                  </span>
                </li>

                <li className="flex gap-3 text-gray-500 leading-relaxed">
                  <BadgeCheck
                    size={20}
                    className="text-[#ab7e47] mt-1 flex-shrink-0"
                  />
                  <span>
                    Integrated communication channels with CRM records to
                    improve customer tracking and visibility.
                  </span>
                </li>

                <li className="flex gap-3 text-gray-500 leading-relaxed">
                  <BadgeCheck
                    size={20}
                    className="text-[#ab7e47] mt-1 flex-shrink-0"
                  />
                  <span>
                    Automated routine business processes to reduce manual work
                    and increase operational efficiency.
                  </span>
                </li>
              </ul>
            </div>

            <h3 className="font-cormorant text-2xl md:text-3xl  text-[#ab7e47] leading-tight mb-4">
              Results
            </h3>

            <p>
              The project successfully transformed the client's sales and
              customer management process into a structured and automated CRM
              system. By combining customization, automation, and reporting
              capabilities, Zoho CRM became a scalable solution that improved
              operational efficiency and supported long-term business growth.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <div className="relative aspect-[16/9] w-full overflow-hidden">
            <Image
              src="/images/crm-3.webp"
              alt="Ground Handling"
              fill
              className=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
