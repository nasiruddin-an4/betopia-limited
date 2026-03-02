import React from "react";
import Hero from "./Hero";
import Container from "@/components/layout/Container";
import HeadingFive from "@/components/shared/heading/HeadingFive";
import PageSubtitle from "@/components/shared/heading/pageSubtitle";
import HeadingThree from "@/components/shared/heading/HeadingThree";

export default function page() {
  return (
    <div>
      <Hero />
      <section className="bg-[#FFF9EF] py-10 lg:py-20">
        <Container>
          <div className=" text-[#000000]">
            <HeadingFive
              title="Terms & Conditions"
              center={false}
              className="mb-2 lg:mb-6 text-[#000000]!"
            />

            <HeadingThree
              title="Betopia Limited"
              center={false}
              className="mb-2 md:text-3xl"
            />
            <PageSubtitle
              text="Welcome to Betopia Limited (“Betopia”, “we”, “our”, or “us”). By using
          https://betopialimited.com or accessing our website, platforms, or engaging
          our services, you agree to comply with and be bound by the following
          Terms & Conditions. Please read them carefully."
              className="mb-3 lg:mb-6 leading-relaxed"
            />

            <HeadingThree
              title="1. Acceptance of Terms"
              center={false}
              className="mb-2 md:text-3xl"
            />
            <PageSubtitle
              text="By accessing our website or using any of our services, you acknowledge
          that you have read, understood, and agreed to these Terms & Conditions.
          If you do not agree, you must refrain from using our services."
              className="mb-3 lg:mb-6 leading-relaxed"
            />

            <HeadingThree
              title="2. Services"
              center={false}
              className="mb-2 md:text-3xl"
            />
            <PageSubtitle
              text="Betopia Limited provides technology-driven solutions including but not
          limited to IT Services, ERP Systems, AI Solutions, Cloud Computing,
          Cybersecurity, SaaS, and Digital Transformation Services for clients
          globally."
              className="mb-2 leading-relaxed"
            />
            <ul className="list-disc pl-6 mb-3 lg:mb-6 space-y-2 text-base md:text-lg lg:text-2xl">
              <li>
                {" "}
                The scope of work, deliverables, timelines, and pricing are
                defined in official proposals, agreements, or contracts.
              </li>
              <li>
                {" "}
                Betopia reserves the right to update, modify, or discontinue any
                service to improve quality, performance, or comply with legal
                and regulatory requirements.
              </li>
            </ul>
            <HeadingThree
              title="3. User Responsibilities"
              center={false}
              className="mb-2 md:text-3xl"
            />
            <ul className="list-disc pl-6 mb-6 space-y-2 text-base md:text-lg lg:text-2xl">
              <li>
                Provide accurate, lawful, and complete information when engaging
                with Betopia.
              </li>
              <li>
                Refrain from unlawful activities including hacking, unauthorized
                access, data breaches, or malware distribution.
              </li>
              <li>
                Respect all intellectual property rights, trademarks,
                copyrights, and proprietary materials displayed on our
                platforms.
              </li>
            </ul>
            <HeadingThree
              title="4. Intellectual Property"
              center={false}
              className="mb-3 md:text-3xl"
            />
            <PageSubtitle
              text="All content, software, code, designs, documentation, trademarks, and
            branding on Betopia’s website or platforms are the exclusive
            property of Betopia Limited, unless otherwise stated."
              className="mb-2 leading-relaxed"
            />
            <PageSubtitle
              text="No material may be copied, reproduced, distributed, modified, or
            exploited without prior written consent from Betopia."
              className="mb-3 lg:mb-6 leading-relaxed"
            />
            <HeadingThree
              title="5. Payments & Billing"
              center={false}
              className="mb-3 md:text-3xl"
            />
            <ul className="list-disc pl-6 mb-6 space-y-2 text-base md:text-lg lg:text-2xl">
              <li>
                All payments must be made in accordance with agreed invoices,
                contracts, or service agreements.
              </li>
              <li>
                Delayed payments may result in service suspension, penalties, or
                termination as outlined in the agreement.
              </li>
              <li>
                Prices are exclusive of applicable taxes, duties, and are
                subject to exchange rate fluctuations where applicable.
              </li>
            </ul>
            <HeadingThree
              title="6. Confidentiality"
              center={false}
              className="mb-3 md:text-3xl"
            />
            <PageSubtitle
              text="Both Betopia and the client agree to maintain strict confidentiality
            of all business, technical, financial, and client-related
            information. Confidential information may only be disclosed if
            legally required or mutually agreed upon in writing."
              className="mb-3 lg:mb-6 leading-relaxed"
            />
            <HeadingThree
              title="7. Limitation of Liability"
              center={false}
              className="mb-3 md:text-3xl"
            />
            <ul className="list-disc pl-6 mb-6 space-y-2 text-base md:text-lg lg:text-2xl">
              <li>
                While Betopia strives to deliver high-quality and reliable
                services, we do not guarantee uninterrupted or error-free
                operation.
              </li>
              <li>
                Betopia shall not be liable for any indirect, incidental,
                special, or consequential damages.
              </li>
              <li>
                Our total liability, if any, shall be limited to the amount paid
                for the specific service giving rise to the claim.
              </li>
            </ul>
            <HeadingThree
              title="8. Third-Party Links & Services"
              center={false}
              className="mb-3 md:text-3xl"
            />

            <ul className="list-disc pl-6 mb-6 space-y-2 text-base md:text-lg lg:text-2xl">
              <li>
                Our website or services may integrate or link to third-party
                platforms such as Odoo, AWS, Azure, GCP, or other vendors.
              </li>
              <li>
                Betopia is not responsible for third-party content, policies,
                security, or services.
              </li>
              <li>
                Use of third-party platforms is at your own risk and subject to
                their respective terms.
              </li>
            </ul>
            <HeadingThree
              title="9. Termination"
              center={false}
              className="mb-3 md:text-3xl"
            />
            <ul className="list-disc pl-6 mb-6 space-y-2 text-base md:text-lg lg:text-2xl">
              <li>
                Betopia reserves the right to suspend or terminate access to
                services if these Terms or applicable laws are violated.
              </li>
              <li>
                Either party may terminate service agreements in accordance with
                the terms defined in the applicable contract.
              </li>
            </ul>
            <HeadingThree
              title="10. Governing Law & Contract Information"
              center={false}
              className="mb-3 md:text-3xl"
            />
            <PageSubtitle
              text="These Terms & Conditions are governed by the laws of Bangladesh,
            along with applicable international regulations where relevant."
              className="mb-2 leading-relaxed"
            />
            <PageSubtitle
              text="Any disputes shall fall under the jurisdiction of Bangladesh courts
            unless otherwise agreed in writing."
              className="mb-3 lg:mb-6 leading-relaxed"
            />


            {/* Contact */}
            <HeadingThree
              title="Contact Information"
              center={false}
              className="mb-2  text-2xl! md:text-3xl!"
            />
            <p className="leading-relaxed text-base md:text-lg lg:text-xl">
              Betopia Limited
              <br />
              C/A, AK Khondaker Road,
              <br />
              Kaderia Tower, J-28/B,
              <br />
              Mohakhali, Dhaka 1213, Bangladesh
              <br />
              sales@betopialimited.com
              <br />
              +880 1322-840871
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}
// import React from 'react'
// import Hero from './Hero'

// export default function page() {
//   return (
//     <div>
//         <Hero/>
//         <section className="bg-[#FFF9EF] py-16">
//       <div className="max-w-[1100px] mx-auto px-4 text-[#000000]">
//         <h1 className="text-3xl md:text-4xl font-semibold mb-10">
//           Terms & Conditions
//         </h1>

//         <p className="font-semibold mb-4">Betopia Limited</p>

//         <p className="mb-6 leading-relaxed">
//           Welcome to Betopia Limited (“Betopia”, “we”, “our”, or “us”). By using
//           https://betopialimited.com or accessing our website, platforms, or engaging
//           our services, you agree to comply with and be bound by the following
//           Terms & Conditions. Please read them carefully.
//         </p>

//         {/* 1 */}
//         <h2 className="font-semibold mb-2">1. Acceptance of Terms</h2>
//         <p className="mb-6 leading-relaxed">
//           By accessing our website or using any of our services, you acknowledge
//           that you have read, understood, and agreed to these Terms & Conditions.
//           If you do not agree, you must refrain from using our services.
//         </p>

//         {/* 2 */}
//         <h2 className="font-semibold mb-2">2. Services</h2>
//         <p className="mb-2 leading-relaxed">
//           Betopia Limited provides technology-driven solutions including but not
//           limited to IT Services, ERP Systems, AI Solutions, Cloud Computing,
//           Cybersecurity, SaaS, and Digital Transformation Services for clients
//           globally.
//         </p>
//         <ul className="list-disc pl-6 mb-6 space-y-2">
//           <li>
//             The scope of work, deliverables, timelines, and pricing are defined
//             in official proposals, agreements, or contracts.
//           </li>
//           <li>
//             Betopia reserves the right to update, modify, or discontinue any
//             service to improve quality, performance, or comply with legal and
//             regulatory requirements.
//           </li>
//         </ul>

//         {/* 3 */}
//         <h2 className="font-semibold mb-2">3. User Responsibilities</h2>
//         <ul className="list-disc pl-6 mb-6 space-y-2">
//           <li>
//             Provide accurate, lawful, and complete information when engaging
//             with Betopia.
//           </li>
//           <li>
//             Refrain from unlawful activities including hacking, unauthorized
//             access, data breaches, or malware distribution.
//           </li>
//           <li>
//             Respect all intellectual property rights, trademarks, copyrights,
//             and proprietary materials displayed on our platforms.
//           </li>
//         </ul>

//         {/* 4 */}
//         <h2 className="font-semibold mb-2">4. Intellectual Property</h2>
//         <p className="mb-6 leading-relaxed">
//           All content, software, code, designs, documentation, trademarks, and
//           branding on Betopia’s website or platforms are the exclusive property
//           of Betopia Limited, unless otherwise stated.
//           <br />
//           No material may be copied, reproduced, distributed, modified, or
//           exploited without prior written consent from Betopia.
//         </p>

//         {/* 5 */}
//         <h2 className="font-semibold mb-2">5. Payments & Billing</h2>
//         <ul className="list-disc pl-6 mb-6 space-y-2">
//           <li>
//             All payments must be made in accordance with agreed invoices,
//             contracts, or service agreements.
//           </li>
//           <li>
//             Delayed payments may result in service suspension, penalties, or
//             termination as outlined in the agreement.
//           </li>
//           <li>
//             Prices are exclusive of applicable taxes, duties, and are subject to
//             exchange rate fluctuations where applicable.
//           </li>
//         </ul>

//         {/* 6 */}
//         <h2 className="font-semibold mb-2">6. Confidentiality</h2>
//         <p className="mb-6 leading-relaxed">
//           Both Betopia and the client agree to maintain strict confidentiality of
//           all business, technical, financial, and client-related information.
//           Confidential information may only be disclosed if legally required or
//           mutually agreed upon in writing.
//         </p>

//         {/* 7 */}
//         <h2 className="font-semibold mb-2">7. Limitation of Liability</h2>
//         <ul className="list-disc pl-6 mb-6 space-y-2">
//           <li>
//             While Betopia strives to deliver high-quality and reliable services,
//             we do not guarantee uninterrupted or error-free operation.
//           </li>
//           <li>
//             Betopia shall not be liable for any indirect, incidental, special, or
//             consequential damages.
//           </li>
//           <li>
//             Our total liability, if any, shall be limited to the amount paid for
//             the specific service giving rise to the claim.
//           </li>
//         </ul>

//         {/* 8 */}
//         <h2 className="font-semibold mb-2">8. Third-Party Links & Services</h2>
//         <ul className="list-disc pl-6 mb-6 space-y-2">
//           <li>
//             Our website or services may integrate or link to third-party
//             platforms such as Odoo, AWS, Azure, GCP, or other vendors.
//           </li>
//           <li>
//             Betopia is not responsible for third-party content, policies,
//             security, or services.
//           </li>
//           <li>
//             Use of third-party platforms is at your own risk and subject to
//             their respective terms.
//           </li>
//         </ul>

//         {/* 9 */}
//         <h2 className="font-semibold mb-2">9. Termination</h2>
//         <ul className="list-disc pl-6 mb-6 space-y-2">
//           <li>
//             Betopia reserves the right to suspend or terminate access to services
//             if these Terms or applicable laws are violated.
//           </li>
//           <li>
//             Either party may terminate service agreements in accordance with the
//             terms defined in the applicable contract.
//           </li>
//         </ul>

//         {/* 10 */}
//         <h2 className="font-semibold mb-2">
//           10. Governing Law & Contract Information
//         </h2>
//         <p className="mb-10 leading-relaxed">
//           These Terms & Conditions are governed by the laws of Bangladesh, along
//           with applicable international regulations where relevant.
//           <br />
//           Any disputes shall fall under the jurisdiction of Bangladesh courts
//           unless otherwise agreed in writing.
//         </p>

//         {/* Contact */}
//         <h3 className="font-semibold mb-2">Contact Us:</h3>
//         <p className="leading-relaxed">
//           Betopia Limited
//           <br />
//           C/A, AK Khondaker Road,
//           <br />
//           Kaderia Tower, J-28/B,
//           <br />
//           Mohakhali, Dhaka 1213, Bangladesh
//           <br />
//           sales@betopialimited.com
//           <br />
//           +880 1322-840871
//         </p>
//       </div>
//     </section>
//     </div>
//   )
// }
