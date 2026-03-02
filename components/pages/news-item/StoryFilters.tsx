"use client";

import { useState } from "react";

const filters = [
  { label: "All Stories", count: 7 },
  { label: "Leadership", count: 2 },
  { label: "Technology", count: 2 },
  { label: "Events", count: 1 },
  { label: "Business", count: 1 },
  { label: "Innovation", count: 1 },
];

export default function StoryFilters() {
  const [active, setActive] = useState("All Stories");

  return (
    <div className="w-full border-b border-t border-gray-200">
      <div className="max-w-[1480px] mx-auto px-4 py-10">
        {/* Center wrapper */}
        <div className="flex justify-center">
          <div className="flex items-center gap-3 overflow-x-auto scrollbar-hide">
            {filters.map((item) => {
              const isActive = active === item.label;

              return (
                <button
                  key={item.label}
                  onClick={() => setActive(item.label)}
                  className={`
                    whitespace-nowrap rounded-full px-5 py-2 text-sm font-semibold transition-all
                    ${
                      isActive
                        ? "bg-linear-to-r from-[#FF9500] to-[#F54900] text-white shadow-md"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }
                  `}
                >
                  {item.label}{" "}
                  <span
                    className={isActive ? "text-white/90" : "text-gray-400"}
                  >
                    ({item.count})
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
