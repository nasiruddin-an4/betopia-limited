"use client";

import { useState } from "react";
import StoryCard from "./StoryCard";
import { IoIosArrowDown } from "react-icons/io";

/* ================= Filters ================= */
const filters = [
  { label: "All Stories", count: 8 },
  { label: "Leadership", count: 2 },
  { label: "Technology", count: 1 },
  { label: "Events", count: 2 },
  { label: "Business", count: 1 },
  { label: "Corporate", count: 1 },
  { label: "Innovation", count: 1 },
];

/* ================= Stories Data ================= */
const stories = [
    {
    image: "/news/Prothom.jpg",
    category: "Achievement",
    date: "January 12, 2026",
    readTime: "5 min read",
    title: "From Good to Great - Started with Tk 500,000, Now..",
    link: "/news-item/achievement",
    logo: "/news/logo.png",
    logohref: "https://www.prothomalo.com/business/%E0%A6%89%E0%A6%A6%E0%A7%8D%E0%A6%AF%E0%A7%8B%E0%A6%95%E0%A7%8D%E0%A6%A4%E0%A6%BE/gjx17mrabp",
    description: "The journey of technology company BDCalling IT began in 2017 with...",
  },
   {
    image: "/news/Betopia.jpg",
    category: "Leadership",
    date: "January 12, 2026",
    readTime: "3 min read",
    title: "Leading with systems thinking: The CEO’s vision for..",
    link: "/news-item/betopian-future",
     logo: "/news/logo3.png",
    logohref: "https://industryinsiderbd.com/leading-with-systems-thinking-the-ceos-vision-for-betopian-future",
    description:
      "Engineer Muhammad Monir Hossain is a Bangladeshi entrepreneur, technologist...",
  },
  {
    image: "/news/news-img-6.png",
    category: "Events",
    date: "June 8, 2025",
    readTime: "3 min read",
    title: "Betopia Sponsors Osdoo Business Show 2025..",
    link: "/news-item/betopia-sponsors",
    description:
      "Bdcalling IT Ltd., a concern of Betopia Group, was proud to sponsor the prestigious Odoo Business Show 2025...",
  },
  {
    image: "/news/news-img-2.png",
    category: "Leadership",
    date: "July 3, 2025",
    readTime: "4 min read",
    title: "Leadership Transformation Program Builds Future Leaders..",
    link: "/news-item/leadership-transformation",
    description: "Empowering New Managers to Become Confident Leaders...",
  },
  {
    image: "/news/news-img-4.png",
    category: "Business",
    date: "July 18, 2025",
    readTime: "5 min read",
    title: "AmCham Bangladesh Hosts Breakfast Meeting on..",
    link: "/news-item/amcham-bd",
    description: "The American Chamber of Commerce in Bangladesh (AmCham)...",
  },
  {
    image: "/news/news-img-5.png",
    category: "Technology",
    date: "May 19, 2023",
    readTime: "3 min read",
    title: "Betopia Group Sponsors Robotics Club Inaugural..",
    link: "/news-item/betopia-group-sponsors-robotics",
    description:
      "Betopia Group proudly sponsored the Robotics Club Inaugural Program...",
  },
  {
    image: "/news/news-img-3.png",
    category: "Corporate",
    date: "May 15, 2025",
    readTime: "4 min read",
    title: "Bdcalling LLC Joins AmCham Bangladesh as an Official..",
    link: "/news-item/betopia-llc-joins",
    description:
      "Bdcalling LLC – a concern of Betopia Group – has officially become...",
  },
  {
    image: "/news/news-img-1.png",
    category: "Innovation",
    date: "March 1, 2025",
    readTime: "5 min read",
    title: "Shaping the Future of Tomorrow..",
    link: "/news-item/shaping-the-future",
    description:
      "Bdcalling IT Ltd CEO and Founder Muhammad Monir Hossain speaks...",
  },
  {
    image: "/news/news-img-7.png",
    category: "Leadership",
    date: "July 24, 2025",
    readTime: "4 min read",
    title: "How EDGE Helped Us Build Better People—and a Better..",
    link: "/news-item/how-edge",
    description: "By Muhammad Monir Hossain, Founder & CEO of Betopia Group...",
  },
  {
    image: "/news/8.webp",
    category: "Events",
    date: "May 11, 2024",
    readTime: "5 min read",
    title: "Betopia Group Founder & CEO Muhammad Monir Hossain..",
    link: "/news-item/betopia-group-founder",
    description: "Betopia Group’s Founder & CEO returned to his alma mater...",
  },

];

export default function StoriesGrid() {
  const [activeCategory, setActiveCategory] = useState("All Stories");
  const [activeYear, setActiveYear] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);

  /* ================= Dynamic Year List ================= */
  const years = [
    "All",
    ...Array.from(
      new Set(
        stories.map((story) => new Date(story.date).getFullYear().toString())
      )
    ).sort((a, b) => Number(b) - Number(a)),
  ];

  /* ================= Filter Logic ================= */
  // const filteredStories = stories.filter((story) => {
  //   const matchCategory =
  //     activeCategory === "All Stories" || story.category === activeCategory;

  //   const matchYear =
  //     activeYear === "All" ||
  //     new Date(story.date).getFullYear().toString() === activeYear;

  //   return matchCategory && matchYear;
  // });

  /* ================= Visible Stories ================= */
  // const displayedStories = filteredStories.slice(0, visibleCount);

  /* ================= Filter + Sort Logic ================= */
const filteredStories = stories
  .filter((story) => {
    const matchCategory =
      activeCategory === "All Stories" || story.category === activeCategory;

    const matchYear =
      activeYear === "All" ||
      new Date(story.date).getFullYear().toString() === activeYear;

    return matchCategory && matchYear;
  })
  //  Latest news first
  .sort(
    (a, b) =>
      new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const displayedStories = filteredStories.slice(0, visibleCount);

  const handleCategoryChange = (label: string) => {
    setActiveCategory(label);
    setVisibleCount(6);
  };

  const handleYearChange = (year: string) => {
    setActiveYear(year);
    setVisibleCount(6);
  };

  return (
    <div className="bg-[#FFF7ED4D]">
      <section className="max-w-[1660px] w-11/12 mx-auto px-4 py-8">
        {/* ================= Heading ================= */}
        <div className="flex flex-col items-center justify-center pt-8 ">
          <h2 className="text-2xl lg:text-[52px] font-bold text-[#0f172a] text-center">
            Discover Betopia{" "}
            <span className="text-[#FF9500]"> News Alerts</span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-14 rounded-full bg-[#FF9500]" />
        </div>

        {/* ================= Year Filter ================= */}
        <div className="mb-8 mt-6 lg:mt-0 flex justify-end items-center ">
          <h4 className="text-base lg:text-xl font-bold pr-5">Filter by:</h4>
          <div className="relative">
            <select
  value={activeYear}
  onChange={(e) => handleYearChange(e.target.value)}
  className="
    appearance-none
    rounded-full border border-gray-300 bg-white
    px-4 pr-10 py-2 text-sm outline-none
    focus:border-[#FF9500]
    w-full
  "
>
  {years.map((year) => (
    <option key={year} value={year}>
      {year === "All" ? "All Years" : year}
    </option>
  ))}
</select>

            {/* <select
              className="
      appearance-none
      rounded-full border border-gray-300 bg-white
      px-4 pr-10 py-2 text-sm outline-none
      focus:border-[#FF9500]
      w-full
    "
            >
              {years.map((year) => (
                <option key={year} value={year}>
                  {year === "All" ? "All Years" : year}
                </option>
              ))}
            </select> */}

            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
              <IoIosArrowDown />
            </span>
          </div>

          {/* <select
            value={activeYear}
            onChange={(e) => handleYearChange(e.target.value)}
            className="
              rounded-full border border-gray-300 bg-white
              px-4 py-2 text-sm outline-none
              focus:border-[#FF9500]
            "
          >
            {years.map((year) => (
              <option key={year} value={year}>
                {year === "All" ? "All Years" : year}
              </option>
            ))}
          </select> */}
        </div>

        {/* ================= Cards ================= */}
        {displayedStories.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:grid-cols-3">
            {displayedStories.map((story, idx) => (
              <StoryCard key={idx} {...story} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-gray-500">
            No stories found.
          </div>
        )}

        {/* ================= Load More ================= */}
        {visibleCount < filteredStories.length && (
          <div className="mt-16 flex justify-center mb-6">
            <button
              onClick={() => setVisibleCount((prev) => prev + 6)}
              className="
                inline-flex items-center gap-2 rounded-full
                px-8 py-3 text-sm font-semibold text-white
                bg-linear-to-r from-[#FF9500] to-[#F54900]
                shadow-lg transition-all duration-300
                hover:scale-105 hover:shadow-xl
              "
            >
              Load More Stories
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
