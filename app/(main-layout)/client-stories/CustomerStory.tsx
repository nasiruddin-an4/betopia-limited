/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useEffect, useState } from "react";
import FilterSelect from "./FilterSelect";
import ActiveFilterChip from "./ActiveFilterChip";
import CaseCard from "./CaseCard";
import Container from "@/components/layout/Container";
import { clientStories } from "@/data/caseStudies";

const ITEMS_PER_LOAD = 10;

export default function CustomerStorySection() {
  const [filters, setFilters] = useState({
    assetType: "",
    industry: "",
    service: "",
    region: "",
    technology: "",
    year: "",
  });

  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_LOAD);

  // 👉 Reset visible items when filters change
  useEffect(() => {
    setVisibleCount(ITEMS_PER_LOAD);
  }, [filters]);

  // 👉 Filter + Sort (ID new → old)
  const filteredData = clientStories
    // 👉 Only Customer Story
    .filter((item) => item.category === "Customer Story")
    // 👉 Existing filters
    .filter((item) =>
      Object.entries(filters).every(
        ([key, value]) => !value || item[key as keyof typeof item] === value,
      ),
    )
    .sort((a, b) => a.id - b.id);

  // 👉 Visible data
  const visibleData = filteredData.slice(0, visibleCount);

  // const hasMore = visibleCount < filteredData.length;

  return (
    <Container>
      <section className="pb-10 pt-10 lg:pt-20 lg:space-y-8">
        <h2 className="text-[28px] md:text-4xl lg:text-[52px] font-bold text-[#45556C] mb-3 lg:mb-4">
          Client Story
        </h2>
        <div className="w-20 h-1 bg-[#FF9500] mb-3"></div>
        <div></div>
        {/* ================= Filters ================= */}
        <div className="md:flex flex-wrap items-center gap-2 lg:gap-6 border-b border-gray-200 pb-4">
          <h4 className="text-base lg:text-xl font-bold  md:border-r-2 pr-5">
            Filter <span className="md:hidden">:</span>
          </h4>

          {/* <FilterSelect
          label="Asset Type"
          options={[...new Set(clientStories.map((i) => i.assetType))]}
          value={filters.assetType}
          onChange={(v) => setFilters({ ...filters, assetType: v })}
        /> */}

          <FilterSelect
            label="Industry"
            options={[...new Set(clientStories.map((i) => i.industry))]}
            value={filters.industry}
            onChange={(v) => setFilters({ ...filters, industry: v })}
          />

          <FilterSelect
            label="Service"
            options={[...new Set(clientStories.map((i) => i.service))]}
            value={filters.service}
            onChange={(v) => setFilters({ ...filters, service: v })}
          />

          <FilterSelect
            label="Region"
            options={[...new Set(clientStories.map((i) => i.region))]}
            value={filters.region}
            onChange={(v) => setFilters({ ...filters, region: v })}
          />

          <FilterSelect
            label="Technology"
            options={[...new Set(clientStories.map((i) => i.technology))]}
            value={filters.technology}
            onChange={(v) => setFilters({ ...filters, technology: v })}
          />

          <FilterSelect
            label="Year"
            options={[...new Set(clientStories.map((i) => i.year))]}
            value={filters.year}
            onChange={(v) => setFilters({ ...filters, year: v })}
          />
        </div>

        {/* ================= Active Filters ================= */}
        <div className="flex flex-wrap gap-2 my-5">
          {Object.entries(filters).map(
            ([key, value]) =>
              value && (
                <ActiveFilterChip
                  key={key}
                  label={key}
                  value={value}
                  onRemove={() => setFilters({ ...filters, [key]: "" })}
                />
              ),
          )}
        </div>

        {/* ================= Cards ================= */}
        {visibleData.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {visibleData.map((item) => (
              <CaseCard key={item.id} data={item} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No results found</p>
        )}
        {/* ================= Load More ================= */}
        {/* {filteredData.length > 3 && (
  hasMore ? (
    <div className="flex justify-center pt-6">
      <button
        onClick={() =>
          setVisibleCount((prev) => prev + ITEMS_PER_LOAD)
        }
        className="inline-flex items-center gap-2 rounded-full px-8 py-3
        text-sm font-semibold text-white
        bg-linear-to-r from-[#FF9500] to-[#F54900]
        shadow-lg transition-all duration-300
        hover:scale-105 hover:shadow-xl active:scale-95 cursor-pointer"
      >
        Load More
      </button>
    </div>
  ) : (
    <div className="flex justify-center pt-6">
      <button
        onClick={() =>
          setVisibleCount((prev) => ITEMS_PER_LOAD)
        }
        className="inline-flex items-center gap-2 rounded-full px-8 py-3
        text-sm font-semibold text-white
        bg-linear-to-r from-[#FF9500] to-[#F54900]
        shadow-lg transition-all duration-300
        hover:scale-105 hover:shadow-xl active:scale-95"
      >
        Minimize Stories
      </button>
    </div>
  )
)} */}

        {/* ================= Load More ================= */}
        {/* {hasMore ? (
        <div className="flex justify-center pt-6">
          <button
            onClick={() =>
              setVisibleCount((prev) => prev + ITEMS_PER_LOAD)
            }
            className="inline-flex items-center gap-2
                  rounded-full px-8 py-3
                  text-sm font-semibold text-white
                  bg-linear-to-r from-[#FF9500] to-[#F54900]
                  shadow-lg transition-all duration-300
                  hover:scale-105 hover:shadow-xl active:scale-95 cursor-pointer"
          >
            Load More
          </button>
        </div>
      ) :<div className="flex justify-center pt-6">
          <button
            onClick={() =>
              setVisibleCount((prev) => prev - ITEMS_PER_LOAD)
            }
            className="inline-flex items-center gap-2
                  rounded-full px-8 py-3
                  text-sm font-semibold text-white
                  bg-linear-to-r from-[#FF9500] to-[#F54900]
                  shadow-lg transition-all duration-300
                  hover:scale-105 hover:shadow-xl active:scale-95"
          >
            Minimize Stories
          </button>
        </div> } */}
      </section>
    </Container>
  );
}
