import UnderlineSectionTitle from "@/components/shared/UnderlineSectionTitle";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    text: "Our sales partners grew revenue 3x in 6 months by leveraging Betopia's enterprise solutions.",
    badge: "3x Revenue Growth",
    badgeColor: "bg-linear-to-r from-[#2B7FFF] to-[#155DFC]",
  },
  {
    text: "White-label partners expanded offerings without hiring in-house developers.",
    badge: "Zero Development Cost",
    badgeColor: "bg-linear-to-r from-[#FF9500] to-[#F54900]",
  },
];
const logos = [
  { src: "/partner/partner/1.svg", alt: "Microsoft", w: 150, h: 64 },
  { src: "/partner/partner/a.svg", alt: "AWS", w: 100, h: 64 },
  { src: "/partner/partner/6.svg", alt: "Google Cloud", w: 220, h: 64 },
  { src: "/partner/partner/4.svg", alt: "ISO Certified", w: 90, h: 64 },
  // { src: "/partner/partner/1.svg", alt: "Microsoft", w: 245, h: 120 },
  // { src: "/partner/partner/2.svg", alt: "AWS", w: 120, h: 120 },
  // { src: "/partner/partner/6.svg", alt: "Google Cloud", w: 287, h: 120 },
  // { src: "/partner/partner/4.svg", alt: "ISO Certified", w: 120, h: 120 },
];
export default function PartnerSuccessStories() {
  return (
    <section className="py-10 lg:pt-20  max-w-[1404px] w-11/12 mx-auto px-4 lg:px-0">
      <div className=" ">


        {/* Partner Logos */}
        <div className="lg:flex ">
          <div className="lg:w-1/2">

          <p className="text-[#4A5565] text-xl md:text-[36px] mb-6 md:mb-[36px] font-bold">
            Join <span className="text-[#FF9500]">50+ partners </span> driving global enterprise transformation
          </p>
          </div>


     <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:w-1/2 mx-auto justify-items-center">
        {logos.map((logo, i) => (
          <Image
            key={i}
            src={logo.src}
            alt={logo.alt}
            width={logo.w}
            height={logo.h}
          />
        ))}
      </div>
        </div>
      </div>
    </section>
  );
}
