"use client";

import Container from "@/components/layout/Container";
import Image from "next/image";
import Link from "next/link";

export default function LifeAtBetopia() {
  return (
    <Container>
      <section className="w-full py-10 md:py-20">
        {/* Header */}
        <div className="text-center">
          <h2 className="inline-block mb-4 rounded-full border border-[#FF69004D] bg-[#FF690033] px-4 py-2 text-sm font-medium text-[#FF8904]">
            Our Culture
          </h2>

          <h2 className="text-4xl md:text-[64px]">
            Life at <span className="text-[#FF9500]">Betopia</span>
          </h2>

          <p className="mt-6 text-[#595959] md:text-[20px] md:w-[52%] mx-auto md:pb-10 pb-20">
           Betopia promotes a culture of excellence, accountability, and innovation, empowering teams to deliver secure, scalable, and intelligent solutions for global clients.
          </p>
        </div>

        {/* Image Grid Wrapper */}
        <div className="relative rounded-2xl overflow-hidden shadow-xl">
          {/* Images */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5">
            {["IMG_8936", "Team Meeting 2 1", "IMG_8903"].map((img) => (
              <Link key={img} href="/life-at-betopia">
              <div
                
                className="group relative h-[444px] overflow-hidden"
              >
                <Image
                  src={`/life-at-betopia/${img}.jpg`}
                  alt="Life at Betopia"
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                {/* Individual overlay */}
                <div className="absolute inset-0  group-hover:bg-black/20 transition duration-500" />
              </div>
              </Link>
            ))}
          </div>

          {/* Centered Text */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <p className="text-white text-lg md:text-2xl 2xl:text-[52px] text-center">
              We create. We innovate. We grow —{" "}
              <span className="text-[#FF9500]">together</span>
            </p>
          </div>
        </div>
      </section>
    </Container>
  );
}
