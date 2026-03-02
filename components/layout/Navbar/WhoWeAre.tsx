"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaArrowRight, FaChevronRight } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { DownOutlined } from "@ant-design/icons";

type SubItem = {
  name: string;
  link: string;
};

type MenuGroup = {
  title: string;
  items: SubItem[];
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

export default function WhoWeAre({ data }: Props) {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(0);

  // ✅ route change হলে menu close
  useEffect(() => {
    setIsOpen(false);
    setActiveMenu(0);
  }, [pathname]);

  return (
    <div
      className="relative"
      // Desktop: hover | Mobile: click to toggle
      onMouseEnter={() => {
        if (window.innerWidth >= 1024) setIsOpen(true); // lg এবং তার ওপরে hover কাজ করবে
      }}
      onMouseLeave={() => {
        if (window.innerWidth >= 1024) setIsOpen(false);
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
          }
        }}
      >
        Who we are
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
            if (window.innerWidth < 1024) {
              e.stopPropagation();
            }
          }}
        >
          {/* hover gap fix */}
          <div className=" h-10 bg-transparent"></div>
          <div className="bg-[#212529] text-white min-h-full">
            <div
              className="
             px-8 py-10   md:pb-14 md:pt-0
          md:grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12
          rounded-b-3xl md:rounded-b-4xl max-w-[1660px] mx-auto
            "
            >
              {/* LEFT STATIC CONTENT */}
              <div className="hidden lg:block lg:col-span-4 space-y-6">
                <h2 className="text-3xl font-medium leading-snug">
                  Your Trusted Partner in Enterprise Digital Transformation
                </h2>

                <p className="text-gray-400 text-lg leading-relaxed max-w-sm">
                  At Betopia Limited, we are a global enterprise technology
                  company delivering secure, scalable, and future-ready digital
                  platforms. We partner with organizations worldwide to engineer
                  cloud-native, AI-driven, and compliance-ready solutions built
                  for long-term growth.
                </p>

                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-white font-medium hover:gap-3 transition-all text-xl md:text-2xl"
                >
                  About Us More <FaChevronRight />
                </Link>
              </div>

              {/* MIDDLE MAIN MENU */}
              <div className="col-span-1 md:col-span-6 lg:col-span-3 space-y-2">
                {data.map((menu, index) => {
                  const hasSubMenu = menu.groups && menu.groups.length > 0;

                  return hasSubMenu ? (
                    // 🔹 HAS SUBMENU → hover + arrow
                    <div
                      key={index}
                      onMouseEnter={() => setActiveMenu(index)}
                      className={`
          flex items-center justify-between
          px-4 py-3 text-xl font-semibold
          cursor-pointer border-b border-gray-700
          ${
            activeMenu === index
              ? "text-orange-400"
              : "text-gray-300 hover:text-white"
          }
        `}
                    >
                      {menu.label}
                      <FaChevronRight className="text-xs" />
                    </div>
                  ) : (
                    // 🔹 NO SUBMENU → direct link, no arrow
                    <Link
                      key={index}
                      href={menu.link || "#"}
                      className="
          flex items-center justify-between
          px-4 py-3 text-xl font-semibold
          border-b border-gray-700
          text-gray-300 hover:text-orange-400
        "
                    >
                      {menu.label}
                    </Link>
                  );
                })}
              </div>

              {/* RIGHT SUB MENU (CATEGORY WISE) */}
              <div className="col-span-7 grid grid-cols-2 gap-x-12 gap-y-6">
                {data[activeMenu]?.groups.map((group, idx) => (
                  <div key={idx} className="space-y-3">
                    {/* 👉 Group Title */}
                    {group.link ? (
                      <Link
                        href={group.link}
                        className="text-xl font-semibold text-white hover:text-orange-400 transition-colors inline-block"
                      >
                        {group.title}
                      </Link>
                    ) : (
                      <h4 className="text-lg font-semibold text-white">
                        {group.title}
                      </h4>
                    )}

                    {/* 👉 Group Items (optional) */}
                    {group.items?.map((item, i) => (
                      <Link
                        key={i}
                        href={item.link}
                        className="
            block text-gray-400 text-base
            hover:text-orange-400 transition-colors
          "
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
