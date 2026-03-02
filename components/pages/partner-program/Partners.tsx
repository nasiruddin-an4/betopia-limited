import Container from "@/components/layout/Container";
import PageSubtitle from "@/components/shared/heading/pageSubtitle";
import Image from "next/image";

const partnerData = [
  {
    name: "Microsoft",
    role: "Gold Partner",
    logo: "/partner/1.svg",
  },
  {
    name: "AWS",
    role: "Advanced Partner",
    logo: "/partner/2.svg",
  },
  {
    name: "Google Cloud",
    role: "GCP Partner",
    logo: "/partner/3.svg",
  },
  {
    name: "ISO",
    role: "Certified",
    logo: "/partner/4.svg",
  },
];

const Partners = () => {
  return (
    <section className="bg-[linear-gradient(155deg,#101828_0%,#1C398E_45%,#101828_100%)] py-10 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {partnerData.map((partner, index) => (
            <div
              key={index}
              className="backdrop-blur-md bg-[#FFFFFF1A] border border-[#FFFFFF99] rounded-2xl py-10 px-6 text-center flex flex-col items-center justify-center transition-all duration-300 hover:bg-white/10"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={120}
                height={100}
                className="object-contain w-full h-[70px] mb-6"
              />
              <PageSubtitle text={partner.role} className="text-white" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
