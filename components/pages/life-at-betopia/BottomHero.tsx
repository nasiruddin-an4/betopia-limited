import Container from "@/components/layout/Container";
import Image from "next/image";
import React from "react";

export default function BottomHero() {
  return (
    <Container>
      <section className="w-full py-10 lg:py-20">
        {/* Header */}
        <div className="text-center">
          <span className="inline-block mb-4 rounded-full border border-[#FF69004D] bg-[#FF690033] px-4 py-2 text-sm font-medium text-[#FF8904]">
            Our Culture
          </span>

          <h2 className="text-2xl md:text-[52px] font-bold">
            Life at <span className="text-[#FF9500]">Betopia</span>
          </h2>
          <div className="w-20 h-1 bg-[#FF9500] mx-auto mt-4  mb-5" />

          <p className="mt-6 text-[#595959] text-lg md:text-xl lg:text-2xl lg:w-[52%] mx-auto md:pb-10 pb-20">
            A culture built on innovation, collaboration, and limitless growth.
            Where great minds come together to build the future.
          </p>
        </div>

        {/* Image Grid Wrapper */}
        <div className="relative rounded-2xl overflow-hidden shadow-xl">
          {/* Images */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-2.5">
              {[1, 2, 3].map((img, index) => (
                <div
                  key={img}
                  className={`group relative h-[444px] overflow-hidden
          ${index === 1 ? "md:col-span-2" : "md:col-span-1"}
        `}
                >
                  <Image
                    src={`/lifebetopia/${img}.png`}
                    alt="Life at Betopia"
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 group-hover:bg-black/20 transition duration-500" />
                </div>
              ))}
            </div>
          </div>

          {/* Centered Text (applies to all images together) */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <p className="text-white text-lg md:text-2xl 2xl:text-[52px] text-center">
              We create. We innovate. We grow — together
            </p>
          </div>
        </div>
      </section>
    </Container>
  );
}
