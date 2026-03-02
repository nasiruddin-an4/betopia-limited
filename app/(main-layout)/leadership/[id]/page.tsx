"use client";

import LeadershipCTA from "@/components/pages/leadership/LeadershipCTA";
import { leaders } from "@/data/leaders";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function Page() {
  const { id } = useParams();
  const leader = leaders.find((o) => o.id === Number(id));

  // console.log(leader);

  return (
    <div>
      {leader ? (
        <>
          <section className="bg-black text-white pt-30 lg:pt-40">
            <div className="relative z-10 max-w-400 w-11/12 mx-auto  flex items-center gap-3 pb-3 border-b border-white">
              <Link
                href="/about"
                className="text-lg md:text-xl lg:text-2xl font-semibold"
              >
                Who We Are
              </Link>
              <span className="text-xl lg:text-3xl font-semibold">/</span>
              <Link
                href="/leadership"
                className="text-lg md:text-xl lg:text-2xl font-semibold"
              >
                Leadership
              </Link>
            </div>

            <div className="max-w-400 w-11/12 mx-auto  flex flex-col items-start md:flex-row gap-4 xl:gap-20 ">
              {/* Text */}
              <div className="w-full pt-10 lg:pt-32">
                <h1 className="text-3xl md:text-5xl xl:text-[64px] mb-4">
                  {leader.name}
                </h1>
                <p className="text-xl md:text-[36px] text-gray-300">
                  {leader.role}
                </p>
              </div>

              {/* Image */}
              <div className="w-full md:w-1/2 flex justify-center lg:justify-end">
                <div className="relative w-full h-87.5 lg:h-175 overflow-hidden">
                  <Image
                    src={leader.imageUrl}
                    alt={leader.name}
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white w-11/12  mx-auto px-4 py-10 lg:py-20">
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
              {/* LEFT — details */}
              <div className="lg:w-1/2 space-y-4">
                {leader.details?.map((sentence, i) => (
                  <p key={i} className="text-base md:text-lg xl:text-xl text-justify">
                    {sentence}
                  </p>
                ))}
              </div>

              {/* RIGHT — bio */}
              <div className="lg:w-1/2 lg:mt-[20%] border-l-5 border-[#FF9500] h-fit pl-4">
                <p className="text-base md:text-lg xl:text-xl">{leader.bio}</p>
              </div>
            </div>
          </section>
        </>
      ) : (
        <p>Leader not found</p>
      )}
      <LeadershipCTA />
    </div>
  );
}
