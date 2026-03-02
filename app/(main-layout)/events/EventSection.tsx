/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useEffect, useState } from "react";
import { caseStudies } from "@/data/events";
import FilterSelect from "./FilterSelect";
import ActiveFilterChip from "./ActiveFilterChip";
import CaseCard from "./EventsCard";
import Link from "next/link";

const ITEMS_PER_LOAD = 10;

export default function CaseStudiesSection() {
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
  const filteredData = caseStudies
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
    <section className="max-w-415 w-11/12 mx-auto px-3 md:px-8 pt-10 pb-10 lg:pb-20 space-y-8">
      {/* ================= Filters ================= */}

      <div className="md:flex flex-wrap items-center gap-2 lg:gap-6 border-b border-gray-200 pb-4">
        <h4 className="text-base lg:text-xl font-bold  md:border-r-2 pr-5">
          Filter <span className="md:hidden">:</span>
        </h4>
        <FilterSelect
          label="Industry"
          options={[...new Set(caseStudies.map((i) => i.industry))]}
          value={filters.industry}
          onChange={(v) => setFilters({ ...filters, industry: v })}
        />

        <FilterSelect
          label="Service"
          options={[...new Set(caseStudies.map((i) => i.service))]}
          value={filters.service}
          onChange={(v) => setFilters({ ...filters, service: v })}
        />

        <FilterSelect
          label="Region"
          options={[...new Set(caseStudies.map((i) => i.region))]}
          value={filters.region}
          onChange={(v) => setFilters({ ...filters, region: v })}
        />

        <FilterSelect
          label="Year"
          options={[...new Set(caseStudies.map((i) => i.year))]}
          value={filters.year}
          onChange={(v) => setFilters({ ...filters, year: v })}
        />
      </div>

      {/* ================= Active Filters ================= */}
      <div className="flex flex-wrap gap-2">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {visibleData.map((item) => (
            <Link key={item.id} href={item.link ?? "#"}>
              <CaseCard data={item} />
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No results found</p>
      )}

      {/* {visibleData.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {visibleData.map((item) => (
            <CaseCard key={item.id} data={item} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">
          No results found
        </p>
      )} */}
    </section>
  );
}

// /* eslint-disable react-hooks/set-state-in-effect */
// "use client";

// import { useEffect, useState } from "react";
// import { caseStudies } from "@/data/events";
// import FilterSelect from "./FilterSelect";
// import ActiveFilterChip from "./ActiveFilterChip";
// import CaseCard from "./EventsCard";

// const ITEMS_PER_LOAD = 10;

// export default function CaseStudiesSection() {
//   const [filters, setFilters] = useState({
//     assetType: "",
//     industry: "",
//     service: "",
//     region: "",
//     technology: "",
//     year: "",
//   });

//   const [visibleCount, setVisibleCount] = useState(ITEMS_PER_LOAD);

//   // 👉 Reset visible items when filters change
//   useEffect(() => {
//     setVisibleCount(ITEMS_PER_LOAD);
//   }, [filters]);

//   // 👉 Filter + Sort (ID new → old)
//   const filteredData = caseStudies
//     .filter((item) =>
//       Object.entries(filters).every(
//         ([key, value]) =>
//           !value || item[key as keyof typeof item] === value
//       )
//     )
//     .sort((a, b) => a.id - b.id);

//   // 👉 Visible data
//   const visibleData = filteredData.slice(0, visibleCount);

//   const hasMore = visibleCount < filteredData.length;

//   return (
//     <section className="max-w-[1660px] w-11/12 mx-auto px-3 md:px-8 py-10 space-y-8">
//       {/* ================= Filters ================= */}
//       <div className="flex flex-wrap items-center gap-6 border-b border-gray-200 pb-4">
//         <h4 className="text-base lg:text-xl font-bold border-r-2 pr-5">
//           Filter
//         </h4>

//         <FilterSelect
//           label="Asset Type"
//           options={[...new Set(caseStudies.map((i) => i.assetType))]}
//           value={filters.assetType}
//           onChange={(v) => setFilters({ ...filters, assetType: v })}
//         />

//         <FilterSelect
//           label="Industry"
//           options={[...new Set(caseStudies.map((i) => i.industry))]}
//           value={filters.industry}
//           onChange={(v) => setFilters({ ...filters, industry: v })}
//         />

//         <FilterSelect
//           label="Service"
//           options={[...new Set(caseStudies.map((i) => i.service))]}
//           value={filters.service}
//           onChange={(v) => setFilters({ ...filters, service: v })}
//         />

//         <FilterSelect
//           label="Region"
//           options={[...new Set(caseStudies.map((i) => i.region))]}
//           value={filters.region}
//           onChange={(v) => setFilters({ ...filters, region: v })}
//         />

//         <FilterSelect
//           label="Technology"
//           options={[...new Set(caseStudies.map((i) => i.technology))]}
//           value={filters.technology}
//           onChange={(v) =>
//             setFilters({ ...filters, technology: v })
//           }
//         />

//         <FilterSelect
//           label="Year"
//           options={[...new Set(caseStudies.map((i) => i.year))]}
//           value={filters.year}
//           onChange={(v) => setFilters({ ...filters, year: v })}
//         />
//       </div>

//       {/* ================= Active Filters ================= */}
//       <div className="flex flex-wrap gap-2">
//         {Object.entries(filters).map(
//           ([key, value]) =>
//             value && (
//               <ActiveFilterChip
//                 key={key}
//                 label={key}
//                 value={value}
//                 onRemove={() =>
//                   setFilters({ ...filters, [key]: "" })
//                 }
//               />
//             )
//         )}
//       </div>

//       {/* ================= Cards ================= */}
//       {visibleData.length > 0 ? (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {visibleData.map((item) => (
//             <CaseCard key={item.id} data={item} />
//           ))}
//         </div>
//       ) : (
//         <p className="text-center text-gray-500">
//           No results found
//         </p>
//       )}

//       {/* ================= Load More ================= */}
//       {/* {hasMore ? (
//         <div className="flex justify-center pt-6">
//           <button
//             onClick={() =>
//               setVisibleCount((prev) => prev + ITEMS_PER_LOAD)
//             }
//             className="inline-flex items-center gap-2
//                   rounded-full px-8 py-3
//                   text-sm font-semibold text-white
//                   bg-linear-to-r from-[#FF9500] to-[#F54900]
//                   shadow-lg transition-all duration-300
//                   hover:scale-105 hover:shadow-xl active:scale-95"
//           >
//             Load More
//           </button>
//         </div>
//       ) :<div className="flex justify-center pt-6">
//           <button
//             onClick={() =>
//               setVisibleCount((prev) => prev - ITEMS_PER_LOAD)
//             }
//             className="inline-flex items-center gap-2
//                   rounded-full px-8 py-3
//                   text-sm font-semibold text-white
//                   bg-linear-to-r from-[#FF9500] to-[#F54900]
//                   shadow-lg transition-all duration-300
//                   hover:scale-105 hover:shadow-xl active:scale-95"
//           >
//             Minimize Stories
//           </button>
//         </div> } */}
//     </section>
//   );
// }
