"use client";

import Image from "next/image";

interface Service {
  icon: string;
  title: string;
}

export default function LeadingPlatform() {
  const services: Service[] = [
    {
      icon: "/solution/business-application/l1.svg",
      title: "Microsoft Gold",
    },
    {
      icon: "/solution/business-application/l2.svg",
      title: "SAP",
    },
    {
      icon: "/solution/business-application/l3.svg",
      title: "Salesforce",
    },
    {
      icon: "/solution/business-application/l4.svg",
      title: "Odoo",
    },
  ];

  return (
    <div className="bg-white">
      <div className="relative w-full overflow-hidden">
        {/* Video Background */}
        <video
          loop
          muted
          playsInline
          autoPlay
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/home/trusted.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/80" />

        {/* Content */}
        <div className="relative z-10 py-10 lg:py-20 text-center">
          <h2 className="text-3xl md:text-4xl xl:text-[52px] font-bold text-white mb-4">
            Built on Industry-Leading Platforms
          </h2>

          <div className="w-16 sm:w-20 h-1 bg-[#FF9500] mx-auto mb-6" />

          <p className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12">
            Vendor-neutral expertise across enterprise ecosystems
          </p>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 max-w-[1406px] w-11/12  mx-auto px-4 place-items-center">
            {services.map((service, index) => (
              <Card key={index} service={service} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ================= CARD COMPONENT ================= */

interface CardProps {
  service: Service;
}

function Card({ service }: CardProps) {
  const isMicrosoft = service.title === "Microsoft Gold";

  return (
    <div className="w-full h-full flex justify-center">
      <div
        className="group h-full w-full max-w-[320px]
        flex flex-col items-center justify-center
        bg-[#FFFFFF1A] rounded-[19px]
        p-5 lg:p-[38px]
        border border-[#FFFFFF33]
        transition-all duration-300
        hover:scale-105"
      >
        {/* Icon */}
        <Image
          src={service.icon}
          alt={service.title}
          width={isMicrosoft ? 80 : 128}
          height={isMicrosoft ? 80 : 128}
          className={`object-contain ${
            isMicrosoft ? "my-5" : "my-6"
          }`}
        />

        {/* Title */}
        <h3 className="text-white text-lg md:text-xl font-semibold text-center">
          {service.title}
        </h3>
      </div>
    </div>
  );
}
