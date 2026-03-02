import UnderlineSectionTitle from "@/components/shared/UnderlineSectionTitle";
import { whiteLabelFeatures } from "@/data/WhiteLabelFeatures";
import Image from "next/image";

export default function WhiteLabelFeatures() {
  const firstItems = whiteLabelFeatures.slice(0, -2);
  const lastItems = whiteLabelFeatures.slice(-2);

  return (
    <section className="w-full py-10 md:py-[64px] px-4 md:px-0 overflow-hidden max-w-[1674px] mx-auto">
      <UnderlineSectionTitle title="Key Features" wrapperClassName="mb-6 md:mb-[43px] text-center text-[#4A5565]"/>

      {/* GRID ITEMS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-[30px]">
        {firstItems.map((item) => (
          <div
            key={item.id}
            className="relative w-full md:w-[541px] h-full md:h-[446px]"
          >
            <Image
              src={item.image}
              alt={item.title}
              width={541}
              height={446}
              className="absolute inset-0 w-full h-full object-cover rounded-xl"
            />
          </div>
        ))}
      </div>

      {/* FLEX CENTERED LAST 2 */}
      <div className="flex justify-center gap-6 mt-6 flex-wrap">
        {lastItems.map((item) => (
          <div
            key={item.id}
            className="relative w-full md:w-[541px] h-full md:h-[446px]"
          >
            <Image
              src={item.image}
              alt={item.title}
              width={541}
              height={446}
              className="absolute inset-0 w-full h-full object-cover rounded-xl"
            />
          </div>
        ))}
      </div>
    </section>
  );
}


// import AboutPartner from "../common/AboutPartner";

// const whiteLabelFeaturesData = [
//   {
//     id: 1,
//     href: '/partner/white-label/features/feature1.svg',
//     title: "End-to-End Delivery",
//     description:
//       "From requirement gathering to deployment, Betopia handles all technical aspects",
//   },
//   {
//     id: 2,
//     href: '/partner/white-label/features/feature2.svg',
//     title: "Multi-Cloud Solutions",
//     description:
//       "Microsoft, AWS, Google Cloud solutions integrated and ready to deploy",
//   },
//   {
//     id: 3,
//     href: '/partner/white-label/features/feature3.svg',
//     title: "Proprietary Products",
//     description:
//       "ERP, HRMS, POS, and Voting/Governance systems available for global clients",
//   },
//     {
//     id: 4,
//     href: '/partner/white-label/features/feature4.svg',
//     title: "Dedicated Partner Success Manager",
//     description:
//       "Dedicated support guiding every step of client engagement and delivery",
//   },
//   {
//     id: 5,
//     href: '/partner/white-label/features/feature5.svg',
//     title: "Training & Enablement",
//     description:
//       "Access to Betopia's portfolio, marketing materials, and product training",
//   },
//   {
//     id: 6,
//     href: '/partner/white-label/features/feature6.svg',
//     title: "Recurring Revenue",
//     description:
//       "Earn on both project delivery and recurring SaaS subscriptions",
//   },
// ];

// export default function WhiteLabelFeatures() {
//   return (
//     <AboutPartner
//       heading="Key Features"
//       items={whiteLabelFeaturesData}
//     />
//   );
// }
