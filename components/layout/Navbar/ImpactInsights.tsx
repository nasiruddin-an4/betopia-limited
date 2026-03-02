/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Link from "next/link";
import { ReactNode, useEffect, useState } from "react";
import { FaArrowRight, FaChevronRight } from "react-icons/fa";
import { usePathname } from "next/navigation"; 

type SubItem = {
  name: string;
  link: string;
};

type MenuGroup = {
  title: string;
  description?: ReactNode;
  highlightDate?: string;
  viewAllLink?: string;
  items?: SubItem[];
  link?: string;
};

type MainMenu = {
  label: string;
  link?: string;
  groups: MenuGroup[];
};

interface Props {
  data: MainMenu[];
}

 
interface Props {
  data: MainMenu[];
}

export default function ImpactInsights({ data }: Props) {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<number | null>(null); // ← null দিয়ে শুরু

  // Route change হলে মেনু বন্ধ + active reset
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsOpen(false);
    setActiveMenu(null);
  }, [pathname]);

  return (
    <div
      className="relative"
      onMouseEnter={() => {
        if (window.innerWidth >= 1024) setIsOpen(true);
      }}
      onMouseLeave={() => {
        if (window.innerWidth >= 1024) {
          setIsOpen(false);
          setActiveMenu(null); // হোভার চলে গেলে active reset
        }
      }}
    >
      {/* Header Trigger */}
      <span
        className={`cursor-pointer font-medium transition-colors flex items-center gap-2
          ${isOpen ? "text-orange-400" : "text-white"}`}
        onClick={(e) => {
          if (window.innerWidth < 1024) {
            e.stopPropagation();
            setIsOpen(!isOpen);
            if (!isOpen) setActiveMenu(null); // মোবাইলে ওপেন হলে ডিফল্ট কোনো কন্টেন্ট না
          }
        }}
      >
       Impact & Insights
        <FaChevronRight
          className={`text-xl font-bold mt-0.5 transition-transform duration-300 ${
            isOpen ? "rotate-270" : "rotate-90"
          }`}
        />
      </span>

      {/* Mega Menu */}
      {isOpen && (
        <div
          className="
            fixed inset-x-0 top-full -mt-[450px] lg:-mt-10 z-50 
            max-h-[calc(100vh-4rem)] overflow-y-auto
          h-[80vh] lg:min-h-[65vh]
          "
          onClick={(e) => {
            if (window.innerWidth < 1024) e.stopPropagation();
          }}
        >
          <div className=" h-10 bg-transparent"></div>
        <div className="bg-[#212529] text-white min-h-full">
          <div
            className="
            px-8 py-10 md:pb-14 md:pt-0
            md:grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12
            rounded-b-3xl md:rounded-b-4xl max-w-[1660px] mx-auto
          "
          >
            {/* LEFT STATIC CONTENT */}
            <div className="hidden lg:block lg:col-span-4 space-y-6">
              <h2 className="text-3xl font-medium leading-snug">
               Impact & Insights
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed max-w-sm">
               Research-driven insights and perspectives that build on our case studies and customer stories sharing knowledge, outcomes, and ideas that matter.
              </p>
              <Link
                href="/client-stories"
                className="inline-flex items-center gap-2 text-white font-medium hover:gap-3 transition-all text-xl md:text-2xl"
              >
                More Stories <FaChevronRight />
              </Link>
            </div>

            {/* MIDDLE MAIN MENU */}
            <div className="col-span-1 md:col-span-6 lg:col-span-3 space-y-2">
              {data.map((menu, index) => {
                const hasSubMenu = menu.groups && menu.groups.length > 0;

                return hasSubMenu ? (
                  <div
                    key={index}
                    onMouseEnter={() => setActiveMenu(index)}
                    onClick={() =>
                      window.innerWidth < 1024 && setActiveMenu(index)
                    } // মোবাইলে ক্লিকে অ্যাকটিভ
                    className={`
                      flex items-center justify-between px-4 py-3 text-xl font-semibold
                      cursor-pointer border-b border-gray-700 transition-colors duration-200
                      ${
                        activeMenu === index
                          ? "text-[#FF9500] bg-gray-800/30"
                          : "text-gray-300 hover:text-white"
                      }
                    `}
                  >
                    <span>{menu.label}</span>
                    <FaChevronRight className="text-xs" />
                  </div>
                ) : (
                  <Link
                    key={index}
                    href={menu.link || "#"}
                    className="
                      flex items-center justify-between px-4 py-3 text-xl font-semibold
                      border-b border-gray-700 text-gray-300 hover:text-[#FF9500] block
                    "
                    onClick={() => window.innerWidth < 1024 && setIsOpen(false)}
                  >
                    <span>{menu.label}</span>
                  </Link>
                );
              })}
            </div>

            {/* RIGHT SUB MENU - শুধু activeMenu থাকলে দেখাবে */}
            <div className="col-span-5 lg:col-span-5 mt-8 lg:mt-0">
              {activeMenu !== null &&
              data[activeMenu]?.groups &&
              data[activeMenu].groups.length > 0 ? (
                <div className="space-y-8">
                  {data[activeMenu].groups.map((group, idx) => (
                    <div key={idx}>
                      {/* Header: Upcoming + Date */}
                      <div className="mb-6 flex flex-wrap items-center gap-x-6">
                        {/* <span className="text-sm font-medium text-gray-400 uppercase tracking-wider">
                          Upcoming
                        </span> */}
                        {group.highlightDate && (
                          <span className="text-sm text-gray-400">
                            {group.highlightDate}
                          </span>
                        )}
                      </div>

                      {/* Main Event Title */}
                      <h4 className="text-3xl font-semibold text-white mb-6">
                        {group.title}
                      </h4>

                      {/* Event Description */}
                      <p className="text-base text-gray-300 leading-relaxed max-w-2xl mb-8">
                        {group.description}
                      </p>

                      {/* View all Button - নিচে যোগ করা হয়েছে */}
                      {group.viewAllLink && (
                        <Link
                          href={group.viewAllLink}
                          className="inline-block text-white font-medium underline hover:text-[#FF9500] transition-colors"
                          onClick={() =>
                            window.innerWidth < 1024 && setIsOpen(false)
                          }
                        >
                          View all
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
          </div>
        </div>
      )}
    </div>
  );
}
