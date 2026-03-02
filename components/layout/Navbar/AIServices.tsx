
"use client";
import Link from "next/link";
import { Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { FaArrowRight, FaBrain, FaCogs, FaFingerprint, FaHandshake, FaRobot, FaTag, FaUserTie, FaVoteYea } from "react-icons/fa";
import { FiCloud } from "react-icons/fi";
import { LuBrain, LuShieldCheck } from "react-icons/lu";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export const AiServicesMenu = () => {
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
      icon: <FaRobot    className="text-3xl" />,
      category: "AI Service",
    //   category: "Intelligent Solution",
      description: " ",
      items: [
        {
          name: "Agentic AI",
          link: "https://agenticai.betopialimited.com/",
        },  
      ],
    },  
    {
      icon: <FaBrain    className="text-3xl" />,
      category: "AI Product",
    //   category: "Innovative Solutions",
      description: " ",
      items: [ 
         {
          name: "Agentic AI",
          link: "https://agenticai.betopialimited.com/",
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
        <div className="bg-black xl:bg-[#1a1d24] py-2 px-2 xl:py-10 xl:px-12 rounded-xl shadow-2xl border border-gray-800 xl:w-[50vw] overflow-y-auto h-[500px] xl:h-auto">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
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
                      target="_blank"
                      onClick={() => setOpen(false)} // ✅ click হলে close
                      className="
                        flex items-center px-4 py-2.5 rounded-lg gap-5
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
      <span className={`flex items-center gap-1 font-medium  ${open ? "text-[#FF9500]":""} cursor-pointer`}>
        Specialized AI <DownOutlined
          className={`text-xs mt-0.5 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}  
        />
      </span>
    </Dropdown>
  );
};