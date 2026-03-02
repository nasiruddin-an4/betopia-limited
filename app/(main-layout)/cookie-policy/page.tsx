import Hero from "./Hero";
import HeadingFive from "@/components/shared/heading/HeadingFive";
import PageSubtitle from "@/components/shared/heading/pageSubtitle";
import HeadingThree from "@/components/shared/heading/HeadingThree";
import Container from "@/components/layout/Container";

export default function page() {
  return (
    <div>
      <Hero />
      <section className="bg-[#FFF9EF] py-10 lg:py-20">
        <Container>
          <div className=" text-[#000000]">
            <HeadingFive
              title="Cookie Policy"
              center={false}
              className="mb-2 lg:mb-6 text-[#000000]!"
            />

            <PageSubtitle
              text="This Cookie Policy explains how Betopia Limited (“Betopia”, “we”, “our”,
          or “us”) uses cookies and similar technologies when you visit
          https://betopialimited.com. This policy is separate from our Terms &
          Conditions and focuses only on how cookies and tracking technologies
          are used on our website."
              className="mb-3 leading-relaxed"
            />
            <PageSubtitle
              text="This Cookie Policy explains how Betopia Limited (“Betopia”, “we”,
            “our”, or “us”) uses cookies and similar technologies when you visit
            https://betopialimited.com. This policy is separate from our Terms &
            Conditions and focuses only on how cookies and tracking technologies
            are used on our website."
              className="mb-3 lg:mb-6 leading-relaxed"
            />

            <HeadingThree
              title="1. What Are Cookies"
              center={false}
              className="mb-2 md:text-3xl"
            />
            <PageSubtitle
              text="Cookies are small text files placed on your device by a website.
            They help the website recognize your device, remember preferences,
            and improve functionality and performance. Cookies do not give us
            access to your device or personal files."
              className="mb-3 lg:mb-6 leading-relaxed"
            />

            <HeadingThree
              title="2. Why We Use Cookies"
              center={false}
              className="mb-2 md:text-3xl"
            />

            <ul className="list-disc pl-6 mb-3 lg:mb-6 space-y-2 text-base md:text-lg lg:text-2xl">
              <li>Ensure the website functions properly</li>
              <li>Improve performance and user experience</li>
              <li>Understand how visitors use our website</li>
              <li>Maintain website security</li>
              <li>Remember basic user preferences</li>
            </ul>

            <HeadingThree
              title="3. Types of Cookies Used"
              center={false}
              className="mb-3 md:text-3xl"
            />

            <HeadingThree
              title="A. Strictly Necessary Cookies"
              center={false}
              className="mb-2 font-medium text-lg! md:text-3xl!"
            />
            <PageSubtitle
              text="These cookies are required for the website to operate and cannot be
            disabled. They support basic features such as security, session
            management, and form submissions."
              className="mb-3 lg:mb-6 leading-relaxed"
            />
            <HeadingThree
              title="B. Analytics Cookies"
              center={false}
              className="mb-2 font-medium text-lg! md:text-3xl!"
            />
            <PageSubtitle
              text="Analytics cookies collect anonymous information about how visitors
            use our website (e.g., pages visited, time spent). This helps us
            improve website performance and content."
              className="mb-3 lg:mb-6 leading-relaxed"
            />
            <HeadingThree
              title="C. Preference Cookies"
              center={false}
              className="mb-2 font-medium text-lg! md:text-3xl!"
            />
            <PageSubtitle
              text="Preference cookies remember your settings such as language or region
            to enhance your experience."
              className="mb-3 lg:mb-6 leading-relaxed"
            />

            <HeadingThree
              title="D. Third-Party Cookies"
              center={false}
              className="mb-2 font-medium text-lg! md:text-3xl!"
            />
            <PageSubtitle
              text="Some cookies may be placed by trusted third-party services used on
            our website (such as analytics or embedded tools). Betopia does not
            control these cookies."
              className="mb-3 lg:mb-6 leading-relaxed"
            />

            <HeadingThree
              title="4. Third-Party Services"
              center={false}
              className="mb-2 md:text-3xl"
            />
            <PageSubtitle
              text="We may use third-party tools such as analytics or cloud services.
            These providers may set their own cookies according to their
            respective privacy and cookie policies. Betopia is not responsible
            for how these third parties manage their cookies."
              className="mb-3 lg:mb-6 leading-relaxed"
            />
            <HeadingThree
              title="5. Your Cookie Choices"
              center={false}
              className="mb-2 md:text-3xl"
            />
            <PageSubtitle
              text="You can manage or disable cookies at any time through your browser
            settings. You may also delete existing cookies from your device.
            Please note that disabling essential cookies may cause parts of the
            website to function improperly."
              className="mb-3 lg:mb-6 leading-relaxed"
            />
            <HeadingThree
              title="6. Confidentiality"
              center={false}
              className="mb-2 md:text-3xl"
            />
            <PageSubtitle
              text=" Any data collected through cookies is handled in accordance with our
            privacy practices and applicable laws."
              className="mb-3 lg:mb-6 leading-relaxed"
            />

            <HeadingThree
              title="7. Changes to This Cookie Policy"
              center={false}
              className="mb-2 md:text-3xl"
            />
            <PageSubtitle
              text="We may update this Cookie Policy from time to time to reflect
            changes in technology or legal requirements. Any updates will be
            published on this page."
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
//         <Hero />
//         <section className="bg-[#FFF9EF] py-10 lg:py-20">
//       <div className="max-w-[1100px] mx-auto px-4 text-[#000000]">
//         <h1 className="text-3xl md:text-4xl font-semibold mb-10">
//           Cookie Policy
//         </h1>

//         <p className="mb-6 leading-relaxed">
//           This Cookie Policy explains how Betopia Limited (“Betopia”, “we”, “our”,
//           or “us”) uses cookies and similar technologies when you visit
//           https://betopialimited.com. This policy is separate from our Terms &
//           Conditions and focuses only on how cookies and tracking technologies
//           are used on our website.
//         </p>

//         {/* 1 */}
//         <h2 className="font-semibold mb-2">1. What Are Cookies</h2>
//         <p className="mb-6 leading-relaxed">
//           Cookies are small text files placed on your device by a website. They
//           help the website recognize your device, remember preferences, and
//           improve functionality and performance. Cookies do not give us access
//           to your device or personal files.
//         </p>

//         {/* 2 */}
//         <h2 className="font-semibold mb-2">2. Why We Use Cookies</h2>
//         <ul className="list-disc pl-6 mb-6 space-y-2">
//           <li>Ensure the website functions properly</li>
//           <li>Improve performance and user experience</li>
//           <li>Understand how visitors use our website</li>
//           <li>Maintain website security</li>
//           <li>Remember basic user preferences</li>
//         </ul>

//         {/* 3 */}
//         <h2 className="font-semibold mb-2">3. Types of Cookies Used</h2>

//         <p className="mb-2 font-semibold">
//           A. Strictly Necessary Cookies
//         </p>
//         <p className="mb-4 leading-relaxed">
//           These cookies are required for the website to operate and cannot be
//           disabled. They support basic features such as security, session
//           management, and form submissions.
//         </p>

//         <p className="mb-2 font-semibold">B. Analytics Cookies</p>
//         <p className="mb-4 leading-relaxed">
//           Analytics cookies collect anonymous information about how visitors use
//           our website (e.g., pages visited, time spent). This helps us improve
//           website performance and content.
//         </p>

//         <p className="mb-2 font-semibold">C. Preference Cookies</p>
//         <p className="mb-4 leading-relaxed">
//           Preference cookies remember your settings such as language or region
//           to enhance your experience.
//         </p>

//         <p className="mb-2 font-semibold">D. Third-Party Cookies</p>
//         <p className="mb-6 leading-relaxed">
//           Some cookies may be placed by trusted third-party services used on our
//           website (such as analytics or embedded tools). Betopia does not control
//           these cookies.
//         </p>

//         {/* 4 */}
//         <h2 className="font-semibold mb-2">4. Third-Party Services</h2>
//         <p className="mb-6 leading-relaxed">
//           We may use third-party tools such as analytics or cloud services. These
//           providers may set their own cookies according to their respective
//           privacy and cookie policies. Betopia is not responsible for how these
//           third parties manage their cookies.
//         </p>

//         {/* 5 */}
//         <h2 className="font-semibold mb-2">5. Your Cookie Choices</h2>
//         <p className="mb-6 leading-relaxed">
//           You can manage or disable cookies at any time through your browser
//           settings. You may also delete existing cookies from your device.
//           Please note that disabling essential cookies may cause parts of the
//           website to function improperly.
//         </p>

//         {/* 6 */}
//         <h2 className="font-semibold mb-2">6. Confidentiality</h2>
//         <p className="mb-6 leading-relaxed">
//           Any data collected through cookies is handled in accordance with our
//           privacy practices and applicable laws.
//         </p>

//         {/* 7 */}
//         <h2 className="font-semibold mb-2">
//           7. Changes to This Cookie Policy
//         </h2>
//         <p className="mb-10 leading-relaxed">
//           We may update this Cookie Policy from time to time to reflect changes
//           in technology or legal requirements. Any updates will be published on
//           this page.
//         </p>

//         {/* Contact */}
//         <h3 className="font-semibold mb-2">Contact Information</h3>
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
