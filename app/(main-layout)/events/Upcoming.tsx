/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useEffect, useState } from "react";

import { upcoming } from "@/data/events";
import PageSubtitle from "@/components/shared/heading/pageSubtitle";

const ITEMS_PER_LOAD = 10;

export default function Upcoming() {
  const [filters, setFilters] = useState({
    assetType: "",
    industry: "",
    service: "",
    region: "",
    technology: "",
    year: "",
  });

  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_LOAD);

  //  Reset visible items when filters change
  useEffect(() => {
    setVisibleCount(ITEMS_PER_LOAD);
  }, [filters]);

  //  Filter + Sort (ID new → old)
  const filtereditem = upcoming
    .filter((item) =>
      Object.entries(filters).every(
        ([key, value]) => !value || item[key as keyof typeof item] === value,
      ),
    )
    .sort((a, b) => a.id - b.id);

  //  Visible item
  const visibleitem = filtereditem.slice(0, visibleCount);

  // const hasMore = visibleCount < filtereditem.length;

  return (
    <section className="max-w-415 w-11/12 mx-auto px-4 pt-10 pb-10 lg:pt-20 ">
      <div className="flex items-center justify-center ">
        <div className="">
          <h2 className="text-[22px] md:text-[32px] lg:text-[52px] font-bold text-gray-900 mb-2 text-center">
            Upcoming <span className="text-[#FF9500]">Events</span>
          </h2>
          <div className="w-20 h-1 bg-[#FF9500] mx-auto mt-3 mb-7 "></div>
          <PageSubtitle
            text="Don't miss out on these exciting opportunities"
            className="text-gray-500 mb-8 lg:mb-16 max-w-3xl mx-auto"
          />
        </div>
      </div>

      {/* ================= Cards ================= */}
      {visibleitem.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {visibleitem.map((item, idx) => (
            // <Link key={idx} href={item.link ?? "#"} className="block h-full">
            <div
              key={idx}
              className="flex flex-col h-full space-y-1 shadow-2xl rounded-xl"
            >
              <img
                src={item.image}
                alt={item.title}
                width={400}
                height={250}
                className="w-full  object-cover object-center rounded-t-xl p-4"
              />

              <div className="px-4 pb-4 rounded-b-xl">
                <p className=" text-gray-500 ">{item.date}</p>

                <h3 className="text-xl  font-medium mb-4 mt-2">{item.title}</h3>
                <p className="md:text-lg tracking-wide text-gray-500">
                  {item?.description}
                </p>
              </div>
            </div>
            // </Link>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No results found</p>
      )}
    </section>
  );
}
