import PageSubtitle from "@/components/shared/heading/pageSubtitle";
import { ChartSpline, Clock, Globe, MapPin } from "lucide-react";
import Image from "next/image";

export default function DeliveryHubs() {
  const hubs = [
    {
      city: "Dhaka",
      country: "Bangladesh",
      image: "/media/d1.svg",
    },
    {
      city: "Manila",
      country: "Philippines",
      image: "/media/d2.svg",
    },
    {
      city: "Meydan Grandstand",
      country: "UAE",
      image: "/media/uae.jpg",
    },
  ];

    const futurehubs = [
    {
      city: "Japan",
      country: "Coming Soon",
      image: "/media/f1.svg",
    },
    {
      city: "Canada",
      country: "Coming Soon",
      image: "/media/f2.svg",
    },
    {
      city: "United Kingdom",
      country: "Coming Soon",
      image: "/media/f3.svg",
    },
  ];
  return (
    <section className="w-11/12 mx-auto pt-10 lg:pt-20 lg:space-y-10">
        <div>

      {/* Heading */}
      <div className="space-y-3 text-center">
        <h2 className="text-[28px] md:text-4xl lg:text-[52px] font-bold">
          Delivery Hubs
        </h2>
           <PageSubtitle
          text="BETOPIA Limited operates multiple delivery hubs to ensure efficient, round-the-clock project execution. Our distributed delivery model allows teams to work across time zones while maintaining consistent quality and performance."
          className="text-[#364153] lg:w-[60%] mx-auto"
        />
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-6 md:gap-[30px] py-10 ">
        {hubs.map((hub) => (
          <div
            key={hub.city}
            className="rounded-2xl border border-gray-200 overflow-hidden bg-white shadow-sm hover:shadow-lg transition"
          >
            <div className="relative h-[160px] lg:h-[270px] w-full rounded-lg">
              <Image
                src={hub.image}
                alt={hub.city}
                fill
                className="object-cover p-4 "
              />
            </div>

            <div className="px-4 pb-4 text-[#414042]">
              <p className="font-bold text-lg md:text-2xl">{hub.city}</p>
              <p className="font-bold text-lg md:text-2xl">{hub.country}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Advantages Box */}
      {/* <div className="bg-[#F4F8FF] rounded-2xl p-6 md:p-10 shadow-sm lg:w-8/12 mx-auto">
        <h3 className="text-2xl md:text-3xl xl:text-[36px] font-bold mb-6">
          Key advantages include:
        </h3>

        <div className="grid md:grid-cols-2 gap-5 text-gray-700">
          <div className="space-y-3">
            <p className="flex items-start gap-2 text-lg md:text-xl xl:text-2xl ">
              <span className="text-[#155DFC] mt-1"><Globe/></span> Continuous delivery capability across regions
            </p>
            <p className="flex items-start gap-2 text-lg md:text-xl xl:text-2xl ">
              <span className="text-[#155DFC] mt-1"><ChartSpline/></span> Scalable resource allocation
            </p>
          </div>

          <div className="space-y-3">
            <p className="flex items-start gap-2 text-lg md:text-xl xl:text-2xl ">
              <span className="text-[#155DFC] mt-1"><Clock/></span> Faster turnaround times
            </p>
            <p className="flex items-start gap-2 text-lg md:text-xl xl:text-2xl ">
              <span className="text-[#155DFC] mt-1"><MapPin/></span> Cost-efficient and reliable execution
            </p>
          </div>
        </div>
      </div> */}
        </div>
<div>
               {/* Heading */}
      <div className="space-y-3 text-center">
        <h2 className="text-[28px] md:text-4xl lg:text-[52px] font-bold">
          Future Expansion
        </h2>
           <PageSubtitle
          text="As part of our long-term growth strategy, BETOPIA Limited is planning expansion into additional international markets. These future locations will strengthen regional presence and support a growing global client base."
          className="text-[#364153] lg:w-[60%] mx-auto"
        />
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-6 md:gap-[30px]  py-10">
        {futurehubs.map((hub) => (
          <div
            key={hub.city}
            className="rounded-2xl border border-gray-200 overflow-hidden bg-white shadow-sm hover:shadow-lg transition"
          >
            <div className="relative h-[160px] lg:h-[270px] w-full rounded-lg">
              <Image
                src={hub.image}
                alt={hub.city}
                fill
                className="object-cover p-4 "
              />
            </div>

            <div className="px-4 pb-4 text-[#414042]">
              <p className="font-bold text-lg md:text-xl">{hub.city}</p>
              <p className="font-bold text-lg md:text-xl text-[#155DFC]">{hub.country}</p>
            </div>
          </div>
        ))}
      </div>
</div>

    </section>
  );
}
