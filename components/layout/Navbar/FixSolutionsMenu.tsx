"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaChevronRight } from "react-icons/fa";

interface Item {
  name: string;
  link: string;
}

interface Group {
  title: string;
  link?: string;
  items: Item[];
}

interface Menu {
  link?: any;
  label: string;
  groups?: Group[];
}

interface Props {
  data: Menu[];
}

export default function FixSolutionsMenu({ data }: Props) {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(0); // label
  const [activeGroup, setActiveGroup] = useState<number | null>(0); 
  
  useEffect(() => {
      setIsOpen(false);
      setActiveMenu(0);
    }, [pathname]);

  return (
    <div
      className="relative"
      onMouseEnter={() => window.innerWidth >= 1024 && setIsOpen(true)}
      onMouseLeave={() => window.innerWidth >= 1024 && setIsOpen(false)}
    >
      {/* Trigger */}
      <span
        className={`cursor-pointer font-medium flex items-center gap-2 transition-colors ${
          isOpen ? "text-orange-400" : "text-white"
        }`}
        onClick={(e) => {
          if (window.innerWidth < 1024) {
            e.stopPropagation();
            setIsOpen(!isOpen);
          }
        }}
      >
        What we do
        <FaChevronRight
          className={`transition-transform ${
            isOpen ? "rotate-270" : "rotate-90"
          }`}
        />
      </span>

      {/* Mega Menu */}
      {isOpen && (
        <div className="fixed inset-x-0 top-full z-50 -mt-[450px] lg:-mt-10">
          <div className="h-10 bg-transparent"></div>
          <div className="bg-[#212529] text-white">
            <div className="max-w-[1660px] mx-auto md:px-8 pt-2 pb-8 grid grid-cols-12 gap-10">
              {/* LEFT CONTENT */}
              <div className="col-span-3 space-y-6 hidden lg:block">
                <h2 className="text-3xl font-medium">
                  Secure, Scalable, AI-Powered Enterprise Platforms
                </h2>
                <p className="text-gray-400 text-lg">
                  At Betopia, we create secure, cloud-ready, AI-powered
                  platforms that help organizations modernize, scale, and
                  thrive. Our expertise covers Cloud, Cybersecurity, AI &
                  Analytics, and enterprise-grade products.
                </p>
                <Link
                  href="/adaptability"
                  className="inline-flex items-center gap-2 text-xl hover:gap-3 transition-all"
                >
                  Ready for What’s Next <FaChevronRight />
                </Link>
              </div>

              {/* RIGHT CONTENT */}
              <div className="col-span-12 lg:col-span-9 grid grid-cols-12 gap-8">
                {/* LEVEL 1 — LABELS */}
                <div className="col-span-3 space-y-2 border-r border-gray-700 pr-4">
                  {data.map((menu, index) => (
                    <div
                      key={index}
                      onMouseEnter={() => {
                        if (window.innerWidth >= 1024) {
                          setActiveMenu(index);
                          setActiveGroup(0);
                        }
                      }}
                      onClick={(e) => {
                        if (window.innerWidth < 1024) {
                          e.stopPropagation();
                          setActiveMenu(index);
                          setActiveGroup(0);
                        }
                      }}
                      className={`px-4 py-3 cursor-pointer flex justify-between items-center font-semibold text-lg ${
                        activeMenu === index
                          ? "text-orange-400"
                          : "text-gray-300 hover:text-white"
                      }`}
                    >
                     {!menu.groups ? <Link href={`${menu.link}`}>{menu.label}</Link> : menu.label}
                                         {/* {menu.label}   */}
                                         {menu.groups && <FaChevronRight className="text-xs" />}
                    </div>
                  ))}
                </div>

                {/* LEVEL 2 — GROUP TITLES */}
                <div className="col-span-4 space-y-2 border-r border-gray-700 pr-4">
                  {data[activeMenu]?.groups?.map((group, idx) => (
                    <div
                      key={idx}
                      onMouseEnter={() =>
                        window.innerWidth >= 1024 && setActiveGroup(idx)
                      }
                      onClick={(e) => {
                        if (window.innerWidth < 1024) {
                          e.stopPropagation();
                          setActiveGroup(idx);
                        }
                      }}
                      className={`px-3 py-2 cursor-pointer text-lg flex justify-between items-center ${
                        activeGroup === idx
                          ? "text-orange-400"
                          : "text-gray-300 hover:text-white"
                      }`}
                    >
                      {group.title}  <FaChevronRight className="min-text-[10px]" />
                    </div>
                  ))}
                </div>

                {/* LEVEL 3 — ITEMS */}
                <div className="col-span-5 space-y-3">
                  {activeGroup !== null &&
                    data[activeMenu]?.groups?.[activeGroup]?.items.map(
                      (item, i) => (
                        <Link
                          key={i}
                          href={item.link}
                          className="block text-gray-400 hover:text-orange-400 text-base transition-colors"
                          onClick={() =>
                            window.innerWidth < 1024 && setIsOpen(false)
                          }
                        >
                          {item.name}
                        </Link>
                      )
                    )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
