import UnderlineSectionTitle from "@/components/shared/UnderlineSectionTitle";
import { CoBrandedAboutData } from "@/data/CoBrandedAboutData";

export default function CoBrandedAbout() {
  return (
    <section className="w-full py-10 md:py-20 px-4 md:px-0 overflow-hidden max-w-[1674px] mx-auto">
      {/* Section Title */}
      <UnderlineSectionTitle title="What is Co-Branded Partnership?" wrapperClassName="mb-10 md:mb-20 text-center text-[#4A5565]"/>

      {/* Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 ">
        {CoBrandedAboutData.map((item) => (
          <div
            key={item.id}
            className="relative pl-[27px] pb-[53px] w-full md:w-[544px] h-full md:h-[514px] "
          >
            {/* Video */}
            <video
              className="absolute top-0 left-0 w-full h-full  object-cover rounded-xl"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={item.video} type="video/mp4" />
            </video>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-50 rounded-xl " />

            {/* Content */}
            <div className="relative z-20 px-4 h-full flex flex-col justify-end">
              <h5 className="text-xl md:text-2xl 2xl:text-[32px] text-white font-bold">
                {item.title}
              </h5>

              <p className="text-sm md:text-base mt-[10px] text-white">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

