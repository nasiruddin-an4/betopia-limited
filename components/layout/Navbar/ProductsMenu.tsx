"use client";
import Link from "next/link";
import { Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import {
  FaArrowRight,
  FaCogs,
  FaFingerprint,
  FaUserTie,
  FaVoteYea,
} from "react-icons/fa";
import { FiCloud } from "react-icons/fi";
import { LuBrain, LuShieldCheck } from "react-icons/lu";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export const ProductsMenu = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isProductActive = pathname.startsWith("/product");
  // ✅ route change হলে dropdown auto close
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setOpen(false);
  }, [pathname]);
  const menuData = [
    {
      icon: <FaUserTie className="text-3xl" />,
      category: "People & Workforce Solutions",
      description: " ",
      items: [
        {
          name: "Human Resource Management (HRM)",
          link: "/product/hrm-product",
        },
      ],
    },
    {
      icon: <FaCogs className="text-3xl" />,
      category: "Business Operations Platform",
      description: " ",
      items: [
        {
          name: "Betopia ERP",
          link: "/product/erp-product",
        },
      ],
    },
    {
      icon: <FaVoteYea className="text-3xl" />,
      category: "Digital Voting Solutions",
      description: " ",
      items: [
        {
          name: "Count Trust",
          link: "/product/voting-count-trust",
        },
      ],
    },
  ];

  // Governance &

  return (
    <Dropdown
      open={open}
      onOpenChange={setOpen}
      trigger={["hover"]}
      placement="bottom"
      popupRender={() => (
        <div className="bg-black xl:bg-[#1a1d24] py-2 px-2 xl:py-10 xl:px-6 rounded-xl shadow-2xl border border-gray-800 xl:max-w-[70vw] overflow-y-auto h-[500px] xl:h-auto">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            {menuData.map((section, index) => (
              <div key={index} className="space-y-5 flex flex-col">
                {/* Header */}
                <div className="flex items-center gap-3">
                  <div className="text-gray-400 w-8 shrink-0">
                    {section.icon}
                  </div>
                  <h3 className="text-white font-semibold text-base xl:text-lg">
                    {section.category}
                  </h3>
                </div>

                {/* Items */}
                <div className="space-y-3">
                  {section.items.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.link}
                      onClick={() => setOpen(false)} // ✅ click হলে close
                      className="
                        flex items-center px-4 py-2.5 rounded-lg gap-2
                        border border-gray-700/50
                        bg-[#1A1D24]
                        hover:bg-green-800/90
                        transition-colors duration-200
                      "
                    >
                      <span className="flex-1 text-xs xl:text-base text-gray-300 hover:text-white">
                        {item.name}
                      </span>
                      <FaArrowRight className="text-gray-300" />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    >
      <span
        className={`flex items-center gap-1 font-medium ${isProductActive || open ? "text-[#FF9500] " : "text-white"} cursor-pointer`}
      >
        Product{" "}
        <DownOutlined
          className={`text-xs mt-0.5 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </span>
    </Dropdown>
  );
};

// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import { Dropdown } from "antd";
// import { DownOutlined } from "@ant-design/icons";
// import { FaArrowRight } from "react-icons/fa";
// import { usePathname } from "next/navigation";

// export const ProductsMenu = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [open, setOpen] = useState(false); // Track dropdown open state

//   const pathname = usePathname();
//     useEffect(() => {
//       // eslint-disable-next-line react-hooks/set-state-in-effect
//       setOpen(false);
//     }, [pathname]);

//   const menuData = [
//     {
//       category: "Human Resource Management (HRM)",
//       description:
//         "Betopia's HRM solution transforms human resource operations into a seamless, efficient process for modern businesses. It handles recruitment, onboarding, performance tracking, and payroll with intuitive automation.",
//       link: "/product/hrm-product",
//     },
//     {
//       category: "Betopia ERP",
//       description:
//         "Betopia's ERP platform unifies core business functions like finance, supply chain, and operations into a single, intelligent system. It provides real-time visibility and automation to streamline workflows and reduce costs.",
//       link: "/product/erp-product",
//     },
//     // {
//     //   category: "Point of Sale (POS)",
//     //   description:
//     //     "Transform your sales process with a modern Point-of-Sale system built for efficiency.",
//     //   link: "#",
//     // },
//     {
//       category: "Betopia Voting & Election Management System",
//       description:
//         "Betopia’s advanced voting solution brings secure, transparent, and fully digital election management to organizations of all sizes. It streamlines voter registration, candidate profiling, ballot creation, and encrypted vote casting with real-time monitoring.",
//       link: "/product/voting-count-trust",
//     },
//   ];

//   return (
//     <Dropdown
//       trigger={["hover"]}
//       placement="bottom"
//       open={open}
//       onOpenChange={(status: boolean | ((prevState: boolean) => boolean)) =>
//         setOpen(status)
//       } // Track when dropdown is open
//       popupRender={() => (
//         <div className="flex justify-center">
//           {/* Dropdown Card */}
//           <div className="bg-black xl:bg-gray-900/95 backdrop-blur-lg rounded-2xl shadow-2xl border border-gray-800 overflow-hidden w-[1000px] max-w-[100vw] xl:ml-[730px]">
//             <div className="grid xl:grid-cols-2 min-h-[320px]">
//               {/* LEFT MENU */}
//               <div className="bg-black xl:bg-gray-950/60 p-6 border-r border-gray-800">
//                 <ul className="space-y-1">
//                   {menuData.map((item, index) => (
//                     <li key={index}>
//                       <Link href={item.link}>
//                         <button
//                           onMouseEnter={() => setActiveIndex(index)}
//                           className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 text-lg font-medium cursor-pointer
//                             ${
//                               activeIndex === index
//                                 ? "bg-gray-800 text-white"
//                                 : "text-gray-400 hover:text-white hover:bg-gray-800/50"
//                             }`}
//                         >
//                           {item.category}
//                         </button>
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               {/* RIGHT CONTENT */}
//               <div className="p-8 hidden xl:flex flex-col justify-center">
//                 <h3 className="text-3xl font-semibold text-gray-200 mb-4">
//                   {menuData[activeIndex].category}
//                 </h3>

//                 <p className="text-gray-400 text-lg leading-relaxed mb-6 min-h-[120px]">
//                   {menuData[activeIndex].description}
//                 </p>

//                 <Link
//                   href={menuData[activeIndex].link}
//                   className="inline-flex items-center gap-2 text-lg font-medium text-[#FF9500] hover:underline"
//                 >
//                   Learn more <FaArrowRight className="text-xs" />
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     >
//       {/* Trigger */}
//       <span className="flex items-center gap-1 font-medium text-white cursor-pointer">
//         Products{" "}
//         <DownOutlined
//           className={`text-xs mt-0.5 transition-transform duration-300 ${
//             open ? "rotate-180" : ""
//           }`}
//         />
//       </span>
//     </Dropdown>
//   );
// };
