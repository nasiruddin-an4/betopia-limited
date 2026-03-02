import PageSubtitle from "@/components/shared/heading/pageSubtitle";
import Image from "next/image";

export default function RegionalOffices() {
  const offices = [
    {
      title: "United States of America",
      image: "/media/r2.svg",
    },
    {
      title: "United Arab Emirates",
      image: "/media/r1.svg",
    },
  ];

  return (
    <section className="bg-[#0F172B] text-white py-10 lg:py-20 px-3 ">
      <div className="w-11/12 mx-auto text-center">
        {/* Title */}
        <h2 className="text-[28px] md:text-4xl lg:text-[52px] font-bold mb-4">
          Regional Offices
        </h2>

           <PageSubtitle
          text="Our regional offices support client engagement, business development,
          and strategic partnerships in key global markets. These locations
          enable closer collaboration with clients, faster communication, and
          deeper understanding of regional business needs."
          className="mb-10 lg:w-[60%] mx-auto"
        />


        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-[96px] lg:w-7/12 mx-auto">
          {offices.map((office, i) => (
            <div
              key={i}
              className="bg-white p-4 lg:h-[340px] rounded-xl overflow-hidden  text-gray-900 "
            >
              <div className="w-full aspect-[2/1] overflow-hidden relative">
                <Image
                  src={office.image}
                  alt={office.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>

              <p className="text-lg md:text-xl xl:text-2xl pt-4 font-bold">
                {office.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
