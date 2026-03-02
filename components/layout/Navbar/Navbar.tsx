"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Container from "../Container";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import { ProductsMenu } from "./ProductsMenu";
import { ServicesMenu } from "./ServicesMenu";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { PartnershipsMenu } from "./PartnershipsMenu";
import TcsStyleMegaMenu from "./SolutionsMenu";
import { AiServicesMenu } from "./AIServices";
import { AiProductMenu } from "./AIProduct";
import WhoWeAre from "./WhoWeAre";
import NewsMedia from "./NewsMedia";
import FixSolutionsMenu from "./FixSolutionsMenu";
import ImpactInsights from "./ImpactInsights";

export const whatWeDoData = [
  {
    label: "Products",
    groups: [
      {
        title: "Enterprice Grade Products",
        items: [
          {
            name: "Human Resource Management (HRM)",
            link: "/product/hrm-product",
          },
          {
            name: "Betopia ERP",
            link: "/product/erp-product",
          },
          {
            name: "Count Trust",
            link: "/product/voting-count-trust",
          },
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
          {
            name: "Agentic AI",
            link: "https://agenticai.betopialimited.com/",
          },
          {
            name: "Talkora AI",
            link: "https://talkoraai.com/",
          },
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
  //       link: "/services/cloud-modernization",
  //       items: [
  //         {
  //           name: "Cloud-Native Development",
  //           link: "/services/cloud-modernization",
  //         },
  //         {
  //           name: "Legacy Refactoring",
  //           link: "/services/cloud-modernization",
  //         },
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
  //       link: "/services/cybersecurity",
  //       items: [
  //         {
  //           name: "Secure-by-Design Development",
  //           link: "/services/cybersecurity",
  //         },
  //         {
  //           name: "Compliance Automation",
  //           link: "/services/cybersecurity",
  //         },
  //         {
  //           name: "Threat Detection & Response",
  //           link: "/services/cybersecurity",
  //         },
  //         {
  //           name: "Infrastructure Security",
  //           link: "/services/cybersecurity",
  //         },
  //       ],
  //     },
  //     {
  //       title: "AI & Analytics",
  //       link: "/services/ai-analytics",
  //       items: [
  //         {
  //           name: "AI-Powered Applications",
  //           link: "/services/ai-analytics",
  //         },
  //         {
  //           name: "Predictive Analytics",
  //           link: "/services/ai-analytics",
  //         },
  //         {
  //           name: "Data Engineering",
  //           link: "/services/ai-analytics",
  //         },
  //         {
  //           name: "Business Intelligence",
  //           link: "/services/ai-analytics",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Resource Augmentation",
  //       link: "/services/resource-augmentation",
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
        title:
          "Data Center Infrastructure Management & Network Security Solutions",
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
        title: "Hybrid Cloud & DevOps Solutions",
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
            name: "Business Application Solutions",
            link: "/solution/digital-solutions/bussiness-application-solutions",
          },
          // {
          //   name: "Customer Relationship Management (CRM)",
          //   link: "#",
          // },
        ],
      },
    ],
  },
  {
    link: "/partner-program",
    label: "Partnership",
    // groups: [],
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
  // {
  //   label: "About us",
  //   groups: [
  //     {
  //       title: "Leadership",
  //       link: "#",
  //       groups: [],
  //     },
  //   ],
  // },
  {
    link: "/brand",
    label: "Brand",
    groups: [],
  },
  {
    link: "/values",
    label: "Values",
    groups: [],
  },
  {
    link: "/leadership",
    label: "Leadership",
    groups: [],
  },
  {
    link: "/global-presence",
    label: "Global Presence",
    groups: [],
  },
  // {
  //   link:"/case-studies",
  //   label: "Clients & Case Studies",
  //   groups: [],
  // },
];

export const newsMediaData = [
  {
    link: "/news-item",
    label: "News Alerts",
    groups: [],
  },
  {
    link: "/media-kit",
    label: "Media KIT",
    groups: [],
  },
  {
    link: "/events",
    label: "Events",
    groups: [
      // {
      //   title: "Management Event Kickoff",
      //   highlightDate: "1 January 2026",
      //   description:
      //     "The day begins with a leadership town hall in the morning, followed by the CEO and Chairperson visiting all SBUs in the afternoon to personally greet and wish employees well.",
      //   viewAllLink: "/events",
      // },
      {
        title: "AGM & Employee Branding",
        highlightDate: "Upcoming",
        description:
          "It focused on AGM insights and employee branding to reinforce culture, alignment, and organizational identity.",
        viewAllLink: "/events",
      },
    ],
  },
  // {
  //   link:"/case-studies",
  //   label: "Clients & Case Studies",
  //   groups: [],
  // },
];
export const ImpactInsight = [
  {
    link: "/case_studies",
    label: "Case Studies",
    groups: [],
  },
  {
    link: "/client-stories",
    label: "Client Stories",
    groups: [],
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setOpen(false);
  }, [pathname]);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-1/2 -translate-x-1/2 z-50 font-manrope
    transition-all duration-300
    w-[100%]  lg:px-4 xl:px-4  
    
    ${scrolled ? "bg-[#212529] md:mt-0" : "bg-[#212529] "}
  `}
    >
      <div className="max-w-[1700px] px-4 sm:px-6 lg:px-0 mx-auto">
        <div className="flex items-center justify-between py-[22px] ">
          <Link href="/">
            <Image
              src="/logo_tm.png"
              alt="betopia_hite_logo"
              width={130}
              height={40}
            />
          </Link>
          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-1 2xl:gap-5 rounded-b-[15px]">
            <ul className="flex gap-6 xl:gap-8 md:gap-3 text-white text-base font-medium lg:text-lg xl:text-xl 2xl:text-[22px]  rounded-b-[15px] font-normal">
              {/* <li><Link className="hover:text-[#FF9500] " href="/">Home</Link></li> */}
              {/* <li className="relative group hidden 2xl:flex">
                <Link
                  href="/"
                  className={`cursor-pointer flex items-center gap-1
            ${pathname === "/" ? "text-[#FF9500]" : "hover:text-[#FF9500] "}
          `}
                >
                  Home
                </Link>

                
              </li> */}

              <li className="relative">
                <div className="hidden [@media(min-height:100px)_and_(max-height:750px)]:flex">
                  <FixSolutionsMenu data={whatWeDoData} />
                </div>
                <div className="[@media(min-height:100px)_and_(max-height:750px)]:hidden flex">
                  <TcsStyleMegaMenu data={whatWeDoData} />
                </div>
              </li>
              <li className="relative">
                <WhoWeAre data={whoWeAreData} />
              </li>

              {/* <li>
                <Link
                  className={`cursor-pointer flex items-center gap-1
            ${
              pathname === "/solution"
                ? "text-[#FF9500]"
                : "hover:text-[#FF9500] "
            }
          `}
                  href="/solution"
                >
                  Solution
                </Link>
              </li> */}

              {/* <li>
                <Link className="hover:text-[#FF9500] " href="/service">Services</Link>
              </li> */}

              {/* <li className="relative group cursor-pointer">
                <button className="flex items-center gap-1">
                  Services <IoIosArrowDown />
                </button>
              </li> */}
              {/* <li className="relative">
                <ServicesMenu />
              </li>
              <li className="relative">
                <ProductsMenu />
              </li>
              <li className="relative">
                <AiServicesMenu />
              </li> */}
              {/* <li className="relative">
                <AiProductMenu />
              </li> */}
              {/* <li className="relative">
                <PartnershipsMenu />
              </li> */}

              {/* <li>
                <Link className="hover:text-[#FF9500] " href="/team-augmentation">Team Augmentation</Link>
              </li> */}

              <li className="relative">
                <ImpactInsights data={ImpactInsight} />
              </li>
              <li className="relative">
                <NewsMedia data={newsMediaData} />
              </li>
              {/* <li>
                <Link
                  className={`cursor-pointer flex items-center gap-1
            ${
              pathname === "/client-stories"
                ? "text-[#FF9500]"
                : "hover:text-[#FF9500] "
            }
          `}
                  href="/client-stories"
                >
                  Client Stories & Case Studies
                </Link>
              </li> */}
              <li>
                <Link
                  className={`cursor-pointer flex items-center gap-1
            ${
              pathname === "/career"
                ? "text-[#FF9500]"
                : "hover:text-[#FF9500] "
            }
          `}
                  href="/career"
                >
                  Career
                </Link>
              </li>
              {/* <li>
                <Link
                  className={`cursor-pointer flex items-center gap-1
            ${
              pathname === "/about"
                ? "text-[#FF9500]"
                : "hover:text-[#FF9500] "
            }
          `}
                  href="/about"
                >
                  About us
                </Link>
              </li> */}
              {/* <li>
                <Link
                  className={`cursor-pointer flex items-center gap-1
            ${
              pathname === "/career"
                ? "text-[#FF9500]"
                : "hover:text-[#FF9500] "
            }
          `}
                  href="/career"
                >
                  Career
                </Link>
              </li> */}
            </ul>
          </nav>
          {/* Desktop Button */}
          <div className="flex gap-4 ">
            <Link
              href="/meeting-scheduler"
              className="hidden lg:flex bg-linear-to-r from-[#FF9500] to-[#F54900] text-white text-sm md:text-base 2xl:text-xl 
            font-medium px-2 xl:px-[20.8px] cursor-pointer  py-3 xl:py-[10.4px] rounded-[10px] transition gap-[5.2px] items-center"
            >
              Book a Consultation <span className="mt-1"><IoIosArrowForward /></span> 
            </Link>
            <Link
            target="_blank"
              href="https://partners.betopialimited.com/web/login"
              className="hidden lg:flex border border-[#FF9500] text-white text-sm md:text-base 2xl:text-xl 
            font-medium px-2 xl:px-[20.8px] cursor-pointer  py-3 xl:py-[10.4px] rounded-[10px] transition gap-[5.2px] items-center"
            >
              Sign In
            </Link>
          </div>
          {/* Menu Icon */}
          {/* <button
            className="text-white xl:hidden text-3xl z-10"
            onClick={() => setOpen(!open)}
          >
            {open ? <HiX /> : <HiOutlineMenu />}
          </button> */}
        </div>

        {/* Mobile Menu */}
        <div
          className={` xl:hidden overflow-hidden text-white transition-all duration-300 ${
            open ? "max-h-[500px] py-4 bg-[#212529]" : "max-h-0"
          }`}
        >
          <ul className="flex flex-col text-center items-start justify-start gap-5 text-lg font-medium px-2">
            <Link onClick={() => setOpen(false)} href="/">
              Home
            </Link>

            <li className="relative">
              <TcsStyleMegaMenu data={whatWeDoData} />
            </li>
            <li className="relative">
              <WhoWeAre data={whoWeAreData} />
            </li>
            <NewsMedia data={newsMediaData} />
            <Link onClick={() => setOpen(false)} href="/client-stories">
              Client Stories & Case Studies
            </Link>
            <Link onClick={() => setOpen(false)} href="/career">
              Career
            </Link>
          </ul>

          <div className="mt-6 flex justify-center">
            <Link
              href="/meeting-scheduler"
              className="bg-linear-to-r from-[#FF9500] to-[#F54900] text-sm md:text-base 2xl:text-[18px] px-6 py-2 rounded-lg flex items-center gap-2"
            >
              Get started <IoIosArrowForward />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
