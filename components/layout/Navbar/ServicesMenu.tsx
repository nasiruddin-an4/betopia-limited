"use client";
import Link from "next/link";
import { Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { FaArrowRight, FaFingerprint } from "react-icons/fa";
import { FiCloud } from "react-icons/fi";
import { LuBrain, LuShieldCheck } from "react-icons/lu";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export const ServicesMenu = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isServiceActive = pathname.startsWith("/services");
  // ✅ route change হলে dropdown auto close
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setOpen(false);
  }, [pathname]);
  const menuData = [
    {
      icon: <FiCloud className="text-3xl" />,
      category: "Cloud Modernization",
      description: " ",
      items: [
        {
          name: "Cloud-Native Development",
          link: "/services/cloud-modernization",
        },
        {
          name: "Legacy Refactoring",
          link: "/services/cloud-modernization",
        },
        {
          name: "Multi-Cloud Deployment",
          link: "/services/cloud-modernization",
        },
        {
          name: "FinOps Optimization",
          link: "/services/cloud-modernization",
        },
      ],
    },
    {
      icon: <LuShieldCheck className="text-3xl" />,
      category: "Cybersecurity Services",
      description: " ",
      items: [
        {
          name: "Secure-by-Design Development",
          link: "/services/cybersecurity",
        },
        {
          name: "Compliance Automation",
          link: "/services/cybersecurity",
        },
        {
          name: "Threat Detection & Response",
          link: "/services/cybersecurity",
        },
        {
          name: "Infrastructure Security",
          link: "/services/cybersecurity",
        },
      ],
    },
    {
      icon: <LuBrain className="text-3xl" />,
      category: "AI & Analytics",
      description: " ",
      items: [
        {
          name: "AI-Powered Applications",
          link: "/services/ai-analytics",
        },
        {
          name: "Predictive Analytics",
          link: "/services/ai-analytics",
        },
        {
          name: "Data Engineering",
          link: "/services/ai-analytics",
        },
        {
          name: "Business Intelligence",
          link: "/services/ai-analytics",
        },
      ],
    },
    {
      icon: <FaFingerprint className="text-3xl" />,
      category: "Resource Augmentation",
      description: " ",
      items: [
        {
          name: "Certified Enterprise Expertise",
          link: "/services/resource-augmentation",
        },
        {
          name: "Flexible Global Team Deployment",
          link: "/services/resource-augmentation",
        },
        {
          name: "Embedded Talent for Long-Term Impact",
          link: "/services/resource-augmentation",
        },
        {
          name: "End-to-End Delivery Support",
          link: "/services/resource-augmentation",
        },
      ],
    },
  ];

  return (
    <Dropdown
      open={open}
      onOpenChange={setOpen}
      trigger={["hover"]}
      placement="bottom"
      popupRender={() => (
        <div
          className={`bg-black  xl:bg-[#1a1d24] py-2 px-2 xl:py-10 xl:px-12 rounded-xl shadow-2xl border border-gray-800  overflow-y-auto h-[500px] xl:h-auto xl:max-w-[80vw] ${pathname === "/" ? "ml-5  " : " "} `}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
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
                        flex items-center px-4 py-2.5 rounded-lg
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
        className={`flex items-center gap-1 hover:text-[#FF9500] font-medium ${isServiceActive || open ? "text-[#FF9500] " : "text-white"} cursor-pointer`}
      >
        Service{" "}
        <DownOutlined
          className={`text-xs mt-0.5 transition-transform duration-300  ${
            open ? "rotate-180 text-[#FF9500]" : ""
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

// export const ServicesMenu = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [open, setOpen] = useState(false);
//   const pathname = usePathname();
//     useEffect(() => {
//       // eslint-disable-next-line react-hooks/set-state-in-effect
//       setOpen(false);
//     }, [pathname]);

//   const menuData = [
//     {
//       category: "Cloud Modernization",
//       description:
//         "Cloud-native rebuilds, legacy refactoring, and multi-cloud deployment for scalable, secure, and cost-efficient operations.",
//       link: "/services/cloud-modernization",
//     },
//     {
//       category: "Cybersecurity",
//       description:
//         "End-to-end security services, compliance automation, and managed app protection for regulated industries.",
//       link: "/services/cybersecurity",
//     },
//     {
//       category: "AI & Analytics",
//       description:
//         "AI-powered enterprise applications, predictive analytics, and integration solutions to drive measurable business impact.",
//       link: "/services/ai-analytics",
//     },
//     {
//       category: "Resource Augmentation",
//       description:
//         "Outcome-aligned teams embedded in your programs to accelerate delivery, reduce hiring risk, and optimize costs.",
//       link: "/services/resource-augmentation",
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
//           <div className="bg-black xl:bg-gray-900/95 backdrop-blur-lg rounded-2xl shadow-2xl border border-gray-800 overflow-hidden w-[1000px] max-w-[100vw] xl:ml-[630px]">
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
//         Service{" "}
//         <DownOutlined
//           className={`text-xs mt-0.5 transition-transform duration-300 ${
//             open ? "rotate-180" : ""
//           }`} // Rotate when dropdown is open
//         />
//       </span>
//     </Dropdown>
//   );
// };
