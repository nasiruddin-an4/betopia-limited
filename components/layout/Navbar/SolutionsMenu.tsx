"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaArrowRight, FaChevronRight } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { DownOutlined } from "@ant-design/icons";
import { HiX } from "react-icons/hi";

type SubItem = {
  name: string;
  link: string;
};

type MenuGroup = {
  title: string;
  link?: string;
  items: SubItem[];
};

type MainMenu = {
  link?: any;
  label: string;
  groups?: MenuGroup[];
};

interface Props {
  data: MainMenu[];
}

export default function TcsStyleMegaMenu({ data }: Props) {
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
      onMouseEnter={() => {
        if (window.innerWidth >= 1024) setIsOpen(true);
      }}
      onMouseLeave={() => {
        if (window.innerWidth >= 1024) setIsOpen(false);
      }}
    >
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
        What we do{" "}
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
        max-h-[calc(100vh-3rem)]  
          h-[80vh] lg:max-h-[95vh]
      "
          onClick={(e) => {
            if (window.innerWidth < 1024) {
              e.stopPropagation();
            }
          }}
        >
          <div className="h-10 bg-transparent"></div>
          <div className="bg-[#212529] text-white min-h-full">
            <div
              className="
          px-8 py-10 md:pb-14 md:pt-0
          grid  grid-cols-12 gap-8 lg:gap-12
          rounded-b-3xl md:rounded-b-4xl max-w-[1660px] mx-auto
        "
            >
              <div className="   lg:col-span-3 space-y-6">
                <h2 className="hidden lg:block text-2xl md:text-3xl font-medium leading-snug">
                  Secure, Scalable, AI-Powered Enterprise Platforms
                </h2>
                <p className="hidden lg:block text-gray-400 text-base md:text-lg leading-relaxed">
                  At Betopia, we create secure, cloud-ready, AI-powered
                  platforms that help organizations modernize, scale, and
                  thrive. Our expertise covers Cloud, Cybersecurity, AI &
                  Analytics, and enterprise-grade products.
                </p>
                <Link
                  href="/adaptability"
                  className="inline-flex items-center justify-strat gap-2 text-white font-medium hover:gap-3 transition-all text-xl md:text-2xl"
                >
                  Ready for What&apos;s Next <FaChevronRight />
                </Link>
              </div>

              {/* MIDDLE + RIGHT */}
              <div className=" col-span-9 grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
                {/* MAIN MENU ITEMS */}
                <div className="md:col-span-4 lg:col-span-3 space-y-2">
                  {data.map((menu, index) => (
                    <div
                      key={index}
                      // Desktop: hover | Mobile: click to select
                      onMouseEnter={() => {
                        if (window.innerWidth >= 1024) setActiveMenu(index);
                      }}
                      onClick={(e) => {
                        if (window.innerWidth < 1024) {
                          e.stopPropagation();
                          setActiveMenu(index);
                        }
                      }}
                      className={`
                  flex items-center justify-between
                  px-4 py-3 text-lg md:text-xl font-semibold
                  cursor-pointer border-b border-gray-700
                  ${
                    activeMenu === index
                      ? "text-orange-400"
                      : "text-gray-300 hover:text-white"
                  }
                `}
                    >
                      {!menu.groups ? <Link href={`${menu.link}`}>{menu.label}</Link> : menu.label}
                      {/* {menu.label}   */}
                      {menu.groups && <FaChevronRight className="text-xs" />}
                      
                    </div>
                  ))}
                </div>
                {/* [@media(min-height:100px)_and_(max-height:700px)]:columns-1 */}

                {/* SUB MENU ITEMS */}
                <div
                  className={`${data[activeMenu]?.label === "Partnerships" ? "[@media(min-height:750px)]:columns-3" : "[@media(min-height:750px)]:columns-2"} col-span-9  [@media(min-height:100px)_and_(max-height:750px)]:grid grid-cols-2 [@media(min-height:750px)]:block
   
overflow-y-auto  
 h-[80vh] 
`}
                >
                  {data[activeMenu]?.groups?.map((group, idx) => {
                    const isServicesMenu =
                      data[activeMenu]?.label === "Services";

                    return (
                      <div
                        key={idx}
                        className="mt-1 space-y-3 break-inside-avoid"
                      >
                        {/* 🔑 Group Title */}
                        {isServicesMenu && group.link ? (
                          <Link
                            href={group.link}
                            className="block text-lg font-semibold text-start text-white hover:text-orange-400 transition-colors"
                            onClick={() => {
                              if (window.innerWidth < 1024) {
                                setIsOpen(false);
                              }
                            }}
                          >
                            {group.title}
                          </Link>
                        ) : (
                          <h4 className="text-lg font-semibold text-start text-white">
                            {group.title}
                          </h4>
                        )}

                        {/* Items */}
                        {group.items.map((item, i) => (
                          <Link
                            key={i}
                            href={item.link}
                            className="block text-gray-400 text-base text-start hover:text-orange-400 transition-colors"
                            onClick={() => {
                              if (window.innerWidth < 1024) {
                                setIsOpen(false);
                              }
                            }}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    );
                  })}
                </div>

                {/* <div className="md:col-span-8 lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 gap-x-8 lg:gap-x-12 gap-y-6 overflow-y-auto h-[30vh] xl:h-auto">
                {data[activeMenu]?.groups.map((group, idx) => (
                  <div key={idx} className="space-y-3">
                    <h4 className=" text-lg font-semibold text-start text-white">
                      {group.title}
                    </h4>
                    {group.items.map((item, i) => (
                      <Link
                        key={i}
                        href={item.link}
                        className="block text-gray-400 text-base text-start hover:text-orange-400 transition-colors"
                        // শুধু লিংকে ক্লিক করলেই মোবাইলে মেনু বন্ধ হবে
                        onClick={() => {
                          if (window.innerWidth < 1024) {
                            setIsOpen(false);
                          }
                        }}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                ))}
              </div> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

//  <div
//       className="relative"
//       // Desktop: hover | Mobile: click to toggle
//       onMouseEnter={() => {
//         if (window.innerWidth >= 1024) setIsOpen(true); // lg এবং তার ওপরে hover কাজ করবে
//       }}
//       onMouseLeave={() => {
//         if (window.innerWidth >= 1024) setIsOpen(false);
//       }}
//     >
//       {/* Header Trigger - Click only works on mobile */}
//       <span
//         className={`cursor-pointer font-medium transition-colors flex items-center gap-2
//       ${isOpen ? "text-orange-400" : "text-white"}`}
//         onClick={(e) => {
//           if (window.innerWidth < 1024) {
//             e.stopPropagation();
//             setIsOpen(!isOpen);
//           }
//         }}
//       >
//         What we do{" "}
//         <FaChevronRight
//           className={`text-xl font-bold mt-0.5 transition-transform duration-300 ${
//             isOpen ? "rotate-270" : "rotate-90"
//           }`}
//         />
//       </span>

//       {/* Mega Menu */}
//       {isOpen && (
//         <div
//           className="
//         fixed inset-x-0 top-full -mt-[450px] lg:-mt-10 z-50
//         max-h-[calc(100vh-4rem)]
//           h-[80vh] lg:min-h-[65vh]
//       "
//           // Mobile এ বাইরে ক্লিক করলে বন্ধ করার জন্য (optional)
//           onClick={(e) => {
//             if (window.innerWidth < 1024) {
//               e.stopPropagation();
//             }
//           }}
//         >
//           <div className="h-10 bg-transparent"></div>
//         <div className="bg-[#212529] text-white min-h-full">

//           <div
//             className="
//           px-6 py-10 md:px-12 lg:px-16 md:pb-14 md:pt-0
//           grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12
//           rounded-b-3xl md:rounded-b-4xl max-w-[1660px] mx-auto
//         "
//           >
//             {/* LEFT STATIC CONTENT - Desktop only */}
//             <div className="  lg:col-span-3 space-y-6">
//               <h2 className="hidden lg:block text-2xl md:text-3xl font-medium leading-snug">
//                 Secure, Scalable, AI-Powered Enterprise Platforms
//               </h2>
//               <p className="hidden lg:block text-gray-400 text-base md:text-lg leading-relaxed">
//                 At Betopia, we create secure, cloud-ready, AI-powered platforms
//                 that help organizations modernize, scale, and thrive. Our
//                 expertise covers Cloud, Cybersecurity, AI & Analytics, and
//                 enterprise-grade products.
//               </p>
//               <Link
//                 href="/adaptability"
//                 className="inline-flex items-center justify-strat gap-2 text-white font-medium hover:gap-3 transition-all text-xl md:text-2xl"
//               >
//                 Ready for What&apos;s Next <FaChevronRight />
//               </Link>
//             </div>

//             {/* MIDDLE + RIGHT */}
//             <div className="col-span-1 md:col-span-12 lg:col-span-9 grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
//               {/* MAIN MENU ITEMS */}
//               <div className="md:col-span-4 lg:col-span-3 space-y-2">
//                 {data.map((menu, index) => (
//                   <div
//                     key={index}
//                     // Desktop: hover | Mobile: click to select
//                     onMouseEnter={() => {
//                       if (window.innerWidth >= 1024) setActiveMenu(index);
//                     }}
//                     onClick={(e) => {
//                       if (window.innerWidth < 1024) {
//                         e.stopPropagation(); // যাতে parent এ click না যায়
//                         setActiveMenu(index);
//                       }
//                     }}
//                     className={`
//                   flex items-center justify-between
//                   px-4 py-3 text-lg md:text-xl font-semibold
//                   cursor-pointer border-b border-gray-700
//                   ${
//                     activeMenu === index
//                       ? "text-orange-400"
//                       : "text-gray-300 hover:text-white"
//                   }
//                 `}
//                   >
//                     {menu.label}
//                     <FaChevronRight className="text-xs" />
//                   </div>
//                 ))}
//               </div>

//               {/* SUB MENU ITEMS */}
//                    <div className="md:col-span-8 lg:col-span-9 columns-1 sm:columns-2 gap-x-12 overflow-y-auto h-[30vh] xl:h-auto">
//   {data[activeMenu]?.groups.map((group, idx) => {
//     const isServicesMenu = data[activeMenu]?.label === "Services";

//     return (
//       <div key={idx} className="mt-3 space-y-3 break-inside-avoid">

//         {/* 🔑 Group Title */}
//         {isServicesMenu && group.link ? (
//           <Link
//             href={group.link}
//             className="block text-lg font-semibold text-start text-white hover:text-orange-400 transition-colors"
//             onClick={() => {
//               if (window.innerWidth < 1024) {
//                 setIsOpen(false);
//               }
//             }}
//           >
//             {group.title}
//           </Link>
//         ) : (
//           <h4 className="text-lg font-semibold text-start text-white">
//             {group.title}
//           </h4>
//         )}

//         {/* Items */}
//         {group.items.map((item, i) => (
//           <Link
//             key={i}
//             href={item.link}
//             className="block text-gray-400 text-base text-start hover:text-orange-400 transition-colors"
//             onClick={() => {
//               if (window.innerWidth < 1024) {
//                 setIsOpen(false);
//               }
//             }}
//           >
//             {item.name}
//           </Link>
//         ))}
//       </div>
//     );
//   })}
// </div>

//               {/* <div className="md:col-span-8 lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 gap-x-8 lg:gap-x-12 gap-y-6 overflow-y-auto h-[30vh] xl:h-auto">
//                 {data[activeMenu]?.groups.map((group, idx) => (
//                   <div key={idx} className="space-y-3">
//                     <h4 className=" text-lg font-semibold text-start text-white">
//                       {group.title}
//                     </h4>
//                     {group.items.map((item, i) => (
//                       <Link
//                         key={i}
//                         href={item.link}
//                         className="block text-gray-400 text-base text-start hover:text-orange-400 transition-colors"
//                         // শুধু লিংকে ক্লিক করলেই মোবাইলে মেনু বন্ধ হবে
//                         onClick={() => {
//                           if (window.innerWidth < 1024) {
//                             setIsOpen(false);
//                           }
//                         }}
//                       >
//                         {item.name}
//                       </Link>
//                     ))}
//                   </div>
//                 ))}
//               </div> */}
//             </div>
//           </div>
//         </div>
//         </div>
//       )}
//     </div>
