"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  IoIosArrowDown,
  IoIosArrowUp,
  IoIosArrowForward,
} from "react-icons/io";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import { usePathname } from "next/navigation";

// তোমার ডেটা
export const whatWeDoData = [
  {
    label: "Products",
    groups: [
      {
        title: "Enterprise Grade Products",
        items: [
          {
            name: "Human Resource Management (HRM)",
            link: "/product/hrm-product",
          },
          { name: "Betopia ERP", link: "/product/erp-product" },
          { name: "Count Trust", link: "/product/voting-count-trust" },
          // {
          //   name: "Hospitals management",
          //   link: "#",
          // },
          // {
          //   name: "Pharmacy Management.",
          //   link: "#",
          // },
          // {
          //   name: "Library management",
          //   link: "#",
          // },
          // {
          //   name: "University management",
          //   link: "#",
          // },
          // {
          //   name: "Garments management.",
          //   link: "#",
          // },
        ],
      },
      {
        title: "AI Products",
        items: [
          { name: "Agentic AI", link: "https://agenticai.betopialimited.com/" },
          { name: "Talkora AI", link: "https://talkoraai.com/" },
        ],
      },
    ],
  },
  {
    label: "Services",
    groups: [
      {
        title: "Cloud Modernization",
        link: "/services/cloud-modernization",
        items: [
          {
            name: "Cloud Strategy & Readiness Services",
            link: "/services/cloud-modernization",
          },
          {
            name: "Application Modernization & Migration",
            link: "/services/cloud-modernization",
          },
          {
            name: "Cloud Infrastructure & Platform Modernization",
            link: "/services/cloud-modernization",
          },
          {
            name: "Cloud Optimization, Security & Governance",
            link: "/services/cloud-modernization",
          },
        ],
      },

      {
        title: "AI & Analytics",
        link: "/services/ai-analytics",
        items: [
          {
            name: "Data Strategy & Governance",
            link: "/services/ai-analytics",
          },
          {
            name: "Data Engineering & Platforms",
            link: "/services/ai-analytics",
          },
          {
            name: "AI & Advanced Analytics",
            link: "/services/ai-analytics",
          },
          {
            name: "BI & Decision Enablement",
            link: "/services/ai-analytics",
          },
        ],
      },
      {
        title: "Cybersecurity Services",
        link: "/services/cybersecurity",
        items: [
          {
            name: "Cyber Risk & Governance Services",
            link: "/services/cybersecurity",
          },
          {
            name: "Threat Detection, Response & Resilience",
            link: "/services/cybersecurity",
          },
          {
            name: "Identity, Endpoint & Infrastructure Security",
            link: "/services/cybersecurity",
          },
          {
            name: "Data & Application Security Services",
            link: "/services/cybersecurity",
          },
          {
            name: "Managed Security Services",
            link: "/services/cybersecurity",
          },
        ],
      },
      {
        title: "Software Development",
        link: "/services/software-development",
        items: [
          {
            name: "Custom Software & Mobile Apps Development",
            link: "/services/software-development",
          },
          {
            name: "Application Modernization & Enhancement",
            link: "/services/software-development",
          },
          {
            name: "Agile Development, DevOps & Automation",
            link: "/services/software-development",
          },
          {
            name: "Product Engineering & Digital Innovation",
            link: "/services/software-development",
          },
        ],
      },
      {
        title: "Managed Services",
        link: "/services/managed",
        items: [
          {
            name: "Fully Managed IT Services",
            link: "/services/managed",
          },
          {
            name: "Co-Managed IT Services",
            link: "/services/managed",
          },
          {
            name: "Project-Managed Transition Services",
            link: "/services/managed",
          },
          {
            name: "Build-Operate-Transfer (BOT) Services",
            link: "/services/managed",
          },
        ],
      },
      {
        title: "Resource Augmentation",
        link: "/services/resource-augmentation",
        items: [
          {
            name: "Capability-as-a-Service (CaaS)",
            link: "/services/resource-augmentation",
          },
          {
            name: "Outcome-Based Delivery Pods",
            link: "/services/resource-augmentation",
          },
          {
            name: "Embedded Engineering Model",
            link: "/services/resource-augmentation",
          },
          {
            name: "Managed Engineering Capacity",
            link: "/services/resource-augmentation",
          },
        ],
      },
    ],
  },
  // {
  //   label: "Services",
  //   groups: [
  //     {
  //       title: "Cloud Modernization",
  //       items: [
  //         {
  //           name: "Cloud-Native Development",
  //           link: "/services/cloud-modernization",
  //         },
  //         { name: "Legacy Refactoring", link: "/services/cloud-modernization" },
  //         {
  //           name: "Multi-Cloud Deployment",
  //           link: "/services/cloud-modernization",
  //         },
  //         {
  //           name: "FinOps Optimization",
  //           link: "/services/cloud-modernization",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Cybersecurity Services",
  //       items: [
  //         {
  //           name: "Secure-by-Design Development",
  //           link: "/services/cybersecurity",
  //         },
  //         { name: "Compliance Automation", link: "/services/cybersecurity" },
  //         {
  //           name: "Threat Detection & Response",
  //           link: "/services/cybersecurity",
  //         },
  //         { name: "Infrastructure Security", link: "/services/cybersecurity" },
  //       ],
  //     },
  //     {
  //       title: "AI & Analytics",
  //       items: [
  //         { name: "AI-Powered Applications", link: "/services/ai-analytics" },
  //         { name: "Predictive Analytics", link: "/services/ai-analytics" },
  //         { name: "Data Engineering", link: "/services/ai-analytics" },
  //         { name: "Business Intelligence", link: "/services/ai-analytics" },
  //       ],
  //     },
  //     {
  //       title: "Resource Augmentation",
  //       items: [
  //         {
  //           name: "Certified Enterprise Expertise",
  //           link: "/services/resource-augmentation",
  //         },
  //         {
  //           name: "Flexible Global Team Deployment",
  //           link: "/services/resource-augmentation",
  //         },
  //         {
  //           name: "Embedded Talent for Long-Term Impact",
  //           link: "/services/resource-augmentation",
  //         },
  //         {
  //           name: "End-to-End Delivery Support",
  //           link: "/services/resource-augmentation",
  //         },
  //       ],
  //     },
  //   ],
  // },
  {
    label: "Solutions",
    groups: [
      {
        title: "Secure Business Productivity Solutions",
        items: [
          {
            name: "End-User Management Solutions",
            link: "/solution/secure-business-productivity/end-user-management",
          },
          {
            name: "Endpoint Security Solutions",
            link: "/solution/secure-business-productivity/end-point-security",
          },
          {
            name: "Modern Work Solutions",
            link: "/solution/secure-business-productivity/modern-work",
          },
          {
            name: "Endpoint Solutions",
            link: "/solution/secure-business-productivity/endpoint",
          },
        ],
      },
      {
        title: "Data Center Infrastructure Management & Network Security",
        items: [
          {
            name: "Data Center & Virtualization Solutions",
            link: "/solution/dcim-network/data-center",
          },
          {
            name: "Infrastructure Management Solutions",
            link: "/solution/dcim-network/infrastructure-management",
          },
          {
            name: "Enterprise Networking Solutions",
            link: "/solution/dcim-network/enterprise-networking",
          },
          {
            name: "Network Security Solutions",
            link: "/solution/dcim-network/network-security",
          },
        ],
      },
      {
        title: "Cyber Security Solutions",
        items: [
          {
            name: "Infrastructure Security Solutions",
            link: "/solution/cyber-security/infrastructure-security",
          },
          {
            name: "Data Security Solutions",
            link: "/solution/cyber-security/data-security-solutions",
          },
          {
            name: "Identity Security Solutions",
            link: "/solution/cyber-security/identity-security-solutions",
          },
          {
            name: "Application Security Solutions",
            link: "/solution/cyber-security/application-security-solutions",
          },
          {
            name: "Email Security Solutions",
            link: "/solution/cyber-security/email-security-solutions",
          },
          {
            name: "IoT Security Solutions",
            link: "/solution/cyber-security/iot-security-solutions",
          },
          {
            name: "AI Security Solutions",
            link: "/solution/cyber-security/ai-security-solutions",
          },
          {
            name: "Cyber Security Operations Solutions",
            link: "/solution/cyber-security/cyber-security-operations-solutions",
          },
        ],
      },
      {
        title: "Digital Solutions",
        items: [
          {
            name: "Digital & App Innovation Solutions",
            link: "/solution/digital-solutions/digital-app-innovation",
          },
          {
            name: "Database & Business Analytics Solutions",
            link: "/solution/digital-solutions/batabase-business-analytics",
          },
          {
            name: "AI Solutions",
            link: "/solution/digital-solutions/ai-solutions",
          },
          {
            name: "Bussiness Application Solutions",
            link: "/solution/digital-solutions/bussiness-application-solutions",
          },
        ],
      },
      {
        title: "Hybrid Cloud & DevOps",
        items: [
          {
            name: "Cloud Infrastructure Solutions",
            link: "/solution/hybrid-cloud-and-devops/cloud-infrastructure",
          },
          {
            name: "Hybrid Cloud Solutions",
            link: "/solution/hybrid-cloud-and-devops/hybrid-cloud",
          },
          {
            name: "DevOps Solutions",
            link: "/solution/hybrid-cloud-and-devops/devops-solutions",
          },
        ],
      },
    ],
  },
  {
    link: "/partner-program",
    label: "Partnership",
    groups: [],
  },
  // {
  //   label: "Partnership",
  //   groups: [
  //     {
  //       title: "Business Partnerships",
  //       items: [
  //         {
  //           name: "White-label program",
  //           link: "/partner/white-label",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Brand Collaboration",
  //       items: [
  //         {
  //           name: "Co-branded program",
  //           link: "/partner/co-branded",
  //         },
  //       ],
  //     },
  //     // {
  //     //   title: "Sales Collaboration",
  //     //   items: [
  //     //     {
  //     //       name: "Sales partner",
  //     //       link: "/partner/sales-partner",
  //     //     },
  //     //   ],
  //     // },
  //   ],
  // },
];

export const whoWeAreData = [
  { label: "Brand", link: "/brand" },
  { label: "Values", link: "/values" },
  { label: "Leadership", link: "/leadership" },
  { label: "Global Presence", link: "/global-presence" },
];

export const newsMediaData = [
  { label: "News Alerts", link: "/news-item" },
  { label: "Media KIT", link: "/media-kit" },
  { label: "Events", link: "/events" },
];

export const ImpactInsight = [
  {
    link: "/case_studies",
    label: "Case Studies",
  },
  {
    link: "/client-stories",
    label: "Client Stories",
  },
];

export default function ResponsiveNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMenuOpen(false);
  }, [pathname]);

  const [openSections, setOpenSections] = useState({
    whatWeDo: false,
    whoWeAre: false,
    insights: false,
    careers: false,
    newsroom: false,
    investors: false,
  });

  const [openSubMenus, setOpenSubMenus] = useState<Record<string, boolean>>({});

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const toggleSubMenu = (label: string) => {
    setOpenSubMenus((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  return (
    <header className="fixed top-0 left-0 w-full  bg-[#212529] z-50 xl:hidden">
      {/* Top Bar with Logo and Hamburger */}
      <div className="px-4 py-4 flex items-center justify-between">
        <Link href="/">
          <Image
            src="/logo_tm.png"
            alt="Betopia Logo"
            width={130}
            height={40}
          />
        </Link>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white text-3xl z-50"
        >
          {menuOpen ? <HiX /> : <HiOutlineMenu />}
        </button>
      </div>

      {/* Mobile Menu - Slide in from top */}
      <div
        className={`fixed inset-y-0 right-0 w-full md:w-[50%] lg:w-[40%] xl:w-[30%] bg-[#212529] transition-transform duration-300 ease-in-out shadow-2xl z-50 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } ${menuOpen ? "mt-20 md:mt-20" : "pt-0"} h-[96vh] overflow-y-auto`}
      >
        <nav className="px-4 pb-8 text-white text-base font-medium">
          {/* <div className="border-b border-gray-700">
            <button 
              className="w-full py-4 flex text-xl items-center justify-between"
            >
              <Link href="/">Home</Link> 
            </button> 
          </div> */}

          {/* What we do */}
          <div className="border-b border-gray-700">
            <button
              onClick={() => toggleSection("whatWeDo")}
              className="w-full py-4 flex text-xl items-center justify-between"
            >
              What we do
              {openSections.whatWeDo ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </button>

            {openSections.whatWeDo && (
              <div className="pb-6 space-y-1">
                <div className="pl-4 py-3 border-b border-gray-600">
                  <Link href="/adaptability">Ready for What&apos;s Next</Link>
                </div>

                <div className="pl-4 space-y-1">
                  {/* {whatWeDoData.map((category) => (
                    <div
                      key={category.label}
                      className="border-b border-gray-600 last:border-0"
                    >
                      <button
                        onClick={() => toggleSubMenu(category.label)}
                        className="w-full py-4 flex items-center justify-between text-left font-bold"
                      >
                        {category.label}
                        <span className="text-xl">
                          {openSubMenus[category.label] ? "-" : "+"}
                        </span>
                      </button>

                      {openSubMenus[category.label] && (
                        <div className="pb-4 pl-6 space-y-4">
                          {category.groups.map((group) => (
                            <div key={group.title}>
                              <h4 className="font-medium mb-2 text-base text-gray-100">
                                {group.title}
                              </h4>
                              <ul className="space-y-2">
                                {group.items.map((item) => (
                                  <li key={item.name}>
                                    {item.link.startsWith("http") ? (
                                      <a
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block py-1 text-gray-400 text-sm hover:text-[#FF9500]"
                                        onClick={() => setMenuOpen(false)}
                                      >
                                        {item.name}
                                      </a>
                                    ) : (
                                      <Link
                                        href={item.link}
                                        className="block py-1 text-gray-400 text-sm hover:text-[#FF9500]"
                                        onClick={() => setMenuOpen(false)}
                                      >
                                        {item.name}
                                      </Link>
                                    )}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))} */}
                  {whatWeDoData.map((category) => (
                    <div
                      key={category.label}
                      className="border-b border-gray-600 last:border-0"
                    >
                      {/* 👉 If category has link and no groups → Direct Link */}
                      {category.link && category.groups.length === 0 ? (
                        <Link
                          href={category.link}
                          className="w-full py-4 flex items-center justify-between text-left font-bold"
                          onClick={() => setMenuOpen(false)}
                        >
                          {category.label}
                        </Link>
                      ) : (
                        <>
                          <button
                            onClick={() => toggleSubMenu(category.label)}
                            className="w-full py-4 flex items-center justify-between text-left font-bold"
                          >
                            {category.label}
                            <span className="text-xl">
                              {openSubMenus[category.label] ? "-" : "+"}
                            </span>
                          </button>

                          {openSubMenus[category.label] && (
                            <div className="pb-4 pl-6 space-y-4">
                              {category.groups.map((group) => (
                                <div key={group.title}>
                                  <h4 className="font-medium mb-2 text-base text-gray-100">
                                    {group.title}
                                  </h4>
                                  <ul className="space-y-2">
                                    {group.items.map((item) => (
                                      <li key={item.name}>
                                        {item.link.startsWith("http") ? (
                                          <a
                                            href={item.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block py-1 text-gray-400 text-sm hover:text-[#FF9500]"
                                            onClick={() => setMenuOpen(false)}
                                          >
                                            {item.name}
                                          </a>
                                        ) : (
                                          <Link
                                            href={item.link}
                                            className="block py-1 text-gray-400 text-sm hover:text-[#FF9500]"
                                            onClick={() => setMenuOpen(false)}
                                          >
                                            {item.name}
                                          </Link>
                                        )}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Who we are */}
          <div className="border-b border-gray-700">
            <button
              onClick={() => toggleSection("whoWeAre")}
              className="w-full py-4 flex text-xl items-center justify-between"
            >
              Who we are
              {openSections.whoWeAre ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </button>

            {openSections.whoWeAre && (
              <div className="pb-6 space-y-1">
                {/* Featured Item - Ready for What's Next */}
                <div className="pl-4 py-3 border-b border-gray-600">
                  <Link
                    href="/about"
                    className="block text-white hover:text-[#FF9500] font-medium"
                    onClick={() => setMenuOpen(false)}
                  >
                    About Us More
                  </Link>
                </div>

                <div className="pl-6 space-y-3">
                  {whoWeAreData.map((item) => (
                    <Link
                      key={item.label}
                      href={item.link}
                      className="block py-2 text-white hover:text-[#FF9500]"
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* insights */}
          <div className="border-b border-gray-700">
            <button
              onClick={() => toggleSection("insights")}
              className="w-full py-4 flex text-xl items-center justify-between"
            >
              Impact & Insights
              {openSections.insights ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </button>

            {openSections.insights && (
              <div className="pb-4 pl-6 space-y-3">
                {ImpactInsight.map((item) => (
                  <Link
                    key={item.label}
                    href={item.link}
                    className="block py-2 hover:text-[#FF9500]"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          {/* Newsroom */}
          <div className="border-b border-gray-700">
            <button
              onClick={() => toggleSection("newsroom")}
              className="w-full py-4 flex text-xl items-center justify-between"
            >
              News & Media
              {openSections.newsroom ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </button>

            {openSections.newsroom && (
              <div className="pb-4 pl-6 space-y-3">
                {newsMediaData.map((item) => (
                  <Link
                    key={item.label}
                    href={item.link}
                    className="block py-2 hover:text-[#FF9500]"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Insights */}
          {/* <div className="border-b border-gray-700">
            <button
                onClick={() => toggleSection("insights")}
              className="w-full py-4 flex text-xl items-center justify-between"
            >
              <Link href="/client-stories">Client Stories & Case Studies</Link>
              {openSections.insights ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </button>
            {openSections.insights && (
              <div className="pb-4 pl-6 text-gray-400">Coming soon...</div>
            )}
          </div> */}

          {/* Careers */}
          <div className="border-b  border-gray-700">
            <button
              //   onClick={() => toggleSection("careers")}
              className="w-full py-4 flex text-xl items-center justify-between"
            >
              <Link href="/career">Career</Link>
              {/* {openSections.careers ? <IoIosArrowUp /> : <IoIosArrowDown />} */}
            </button>
            {/* {openSections.careers && (
              <div className="pb-4 pl-6">
                <Link
                  href="/career"
                  className="block py-2 hover:text-[#FF9500]"
                  onClick={() => setMenuOpen(false)}
                >
                  Explore Careers
                </Link>
              </div>
            )} */}
          </div>

          {/* Investors */}
          {/* <div className="border-b border-gray-700">
            <button
              onClick={() => toggleSection("investors")}
              className="w-full py-4 flex items-center  text-xl justify-between"
            >
              Investors
              {openSections.investors ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </button>
            {openSections.investors && (
              <div className="pb-4 pl-6 text-gray-400">Investor Relations (Coming soon)</div>
            )}
          </div> */}

          {/* CTA Button */}
          <div className="mt-8 ">
            <Link
              href="/meeting-scheduler"
              className="bg-linear-to-r from-[#FF9500] cursor-pointer  to-[#F54900] text-white text-center px-8 py-3 rounded-lg flex items-center gap-2 text-xl justify-center font-semibold"
              onClick={() => setMenuOpen(false)}
            >
              Book a Consultation <IoIosArrowForward />
            </Link>
            <Link
              target="_blank"
              href="https://partners.betopialimited.com/web/login"
              className="flex border border-[#FF9500] text-white text-sm md:text-base 2xl:text-xl mt-6
            font-medium px-[20.8px] cursor-pointer  py-3 xl:py-[10.4px] rounded-[10px] transition gap-[5.2px] justify-center items-center"
            >
              Sign In
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
