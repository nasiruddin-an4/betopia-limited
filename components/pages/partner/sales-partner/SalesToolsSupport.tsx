import Image from "next/image";
import {
  FileText,
  BarChart3,
  DollarSign,
  BadgeCheck,
  CheckCircle2,
} from "lucide-react";

const tools = [
  {
    title: "Corporate Materials",
    icon: (
      <svg
        width="44"
        height="44"
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          width="44"
          height="44"
          rx="8"
          fill="url(#paint0_linear_2944_10014)"
        />
        <path
          d="M25 12H16C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V30C14 30.5304 14.2107 31.0391 14.5858 31.4142C14.9609 31.7893 15.4696 32 16 32H28C28.5304 32 29.0391 31.7893 29.4142 31.4142C29.7893 31.0391 30 30.5304 30 30V17L25 12Z"
          stroke="white"
          strokeWidth="2.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M24 12V16C24 16.5304 24.2107 17.0391 24.5858 17.4142C24.9609 17.7893 25.4696 18 26 18H30"
          stroke="white"
          strokeWidth="2.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20 19H18"
          stroke="white"
          strokeWidth="2.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M26 23H18"
          stroke="white"
          strokeWidth="2.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M26 27H18"
          stroke="white"
          strokeWidth="2.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient
            id="paint0_linear_2944_10014"
            x1="0"
            y1="0"
            x2="44"
            y2="44"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FF9500" />
            <stop offset="1" stopColor="#F54900" />
          </linearGradient>
        </defs>
      </svg>
    ),
    image: "/partner/sales/7.png",
    items: ["Company profile", "Corporate brochures", "Sales presentations"],
  },
  {
    title: "Sales Resources",
    icon: (
      <svg
        width="44"
        height="44"
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          width="44"
          height="44"
          rx="8"
          fill="url(#paint0_linear_2944_10022)"
        />
        <path
          d="M13 13V29C13 29.5304 13.2107 30.0391 13.5858 30.4142C13.9609 30.7893 14.4696 31 15 31H31"
          stroke="white"
          strokeWidth="2.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M28 27V19"
          stroke="white"
          strokeWidth="2.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M23 27V15"
          stroke="white"
          strokeWidth="2.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18 27V24"
          stroke="white"
          strokeWidth="2.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient
            id="paint0_linear_2944_10022"
            x1="0"
            y1="0"
            x2="44"
            y2="44"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FF9500" />
            <stop offset="1" stopColor="#F54900" />
          </linearGradient>
        </defs>
      </svg>
    ),
    image: "/partner/sales/8.png",
    items: ["Solution overviews", "Case studies", "Reference materials"],
  },
  {
    title: "Deal Support",
    icon: (
      <svg
        width="44"
        height="44"
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          width="44"
          height="44"
          rx="8"
          fill="url(#paint0_linear_2944_10029)"
        />
        <path
          d="M22 12V32"
          stroke="white"
          strokeWidth="2.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M27 15H19.5C18.5717 15 17.6815 15.3687 17.0251 16.0251C16.3687 16.6815 16 17.5717 16 18.5C16 19.4283 16.3687 20.3185 17.0251 20.9749C17.6815 21.6313 18.5717 22 19.5 22H24.5C25.4283 22 26.3185 22.3687 26.9749 23.0251C27.6313 23.6815 28 24.5717 28 25.5C28 26.4283 27.6313 27.3185 26.9749 27.9749C26.3185 28.6313 25.4283 29 24.5 29H16"
          stroke="white"
          strokeWidth="2.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient
            id="paint0_linear_2944_10029"
            x1="0"
            y1="0"
            x2="44"
            y2="44"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FF9500" />
            <stop offset="1" stopColor="#F54900" />
          </linearGradient>
        </defs>
      </svg>
    ),
    image: "/partner/sales/9.png",
    items: ["Proposal support", "Pricing assistance", "ROI calculators"],
  },
  {
    title: "Credentials",
    icon: (
      <svg
        width="44"
        height="44"
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          width="44"
          height="44"
          rx="8"
          fill="url(#paint0_linear_2944_10034)"
        />
        <path
          d="M25.4748 22.8906L26.9898 31.4166C27.0068 31.517 26.9927 31.6202 26.9494 31.7124C26.9062 31.8046 26.8358 31.8813 26.7477 31.9324C26.6597 31.9835 26.5581 32.0065 26.4566 31.9983C26.3551 31.9902 26.2585 31.9512 26.1798 31.8866L22.5998 29.1996C22.427 29.0705 22.217 29.0007 22.0013 29.0007C21.7856 29.0007 21.5756 29.0705 21.4028 29.1996L17.8168 31.8856C17.7381 31.9501 17.6417 31.989 17.5403 31.9972C17.4389 32.0054 17.3375 31.9825 17.2495 31.9315C17.1615 31.8805 17.0911 31.804 17.0477 31.712C17.0044 31.62 16.9901 31.5169 17.0068 31.4166L18.5208 22.8906"
          stroke="white"
          strokeWidth="2.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22 24C25.3137 24 28 21.3137 28 18C28 14.6863 25.3137 12 22 12C18.6863 12 16 14.6863 16 18C16 21.3137 18.6863 24 22 24Z"
          stroke="white"
          strokeWidth="2.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient
            id="paint0_linear_2944_10034"
            x1="0"
            y1="0"
            x2="44"
            y2="44"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FF9500" />
            <stop offset="1" stopColor="#F54900" />
          </linearGradient>
        </defs>
      </svg>
    ),
    image: "/partner/sales/10.png",
    items: [
      "Sales agent designation",
      "Official credentials",
      "Pre-sales coordination",
    ],
  },
];

export default function SalesToolsSupport() {
  return (
    <section className="bg-white py-10 lg:py-20">
      <div className="max-w-[1440px] w-11/12 mx-auto px-4">
        {/* Header */}
        <div className="  text-center mb-10 lg:mb-16">
          <div className="">
            <h3 className="bg-linear-to-r from-[#FF9500] to-[#F54900] p-1 rounded-full text-white  w-[200px] mx-auto mb-4">
              Resources & Tools
            </h3>
            <h2 className="text-2xl lg:text-[52px] font-bold text-[#414042]">
              <span className="text-[#FF9500]">Sales Tools and Support </span>
              You Can Use
            </h2>
            <span className="block mx-auto mt-[10px] rounded-full w-[103.86px] h-[5.19px] bg-[#FF9500]" />
          </div>

          <p className="text-[#4A5565] text-center text-lg md:text-xl lg:text-2xl px-4 md:px-0 my-8 md:w-[70%] mx-auto">
            As an authorized sales agent, you will have access to professional
            resources designed to help you sell effectively and close deals
            faster.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {tools.map((tool, i) => (
            <div
              key={i}
              className="bg-[#F5F7F8] rounded-4xl shadow-lg hover:shadow-xl transition overflow-hidden p-6"
            >
              {/* Image */}
              <div className="relative h-50 w-full">
                <Image
                  src={tool.image}
                  alt={tool.title}
                  fill
                  className="object-cover rounded-3xl "
                />
              </div>

              {/* Content */}
              <div className="mt-6">
                <div className=" mb-4">
                  <div className="mb-4">{tool.icon}</div>

                  <h3 className="font-bold text-lg md:text-xl  text-[#131313]">
                    {tool.title}
                  </h3>
                </div>

                <ul className="space-y-2">
                  {tool.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 "
                    >
                      <div>
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_2944_10115)">
                            <path
                              d="M10.0013 18.3307C14.6037 18.3307 18.3346 14.5998 18.3346 9.9974C18.3346 5.39502 14.6037 1.66406 10.0013 1.66406C5.39893 1.66406 1.66797 5.39502 1.66797 9.9974C1.66797 14.5998 5.39893 18.3307 10.0013 18.3307Z"
                              stroke="#FF9500"
                              strokeWidth="1.66667"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M7.5 10.0026L9.16667 11.6693L12.5 8.33594"
                              stroke="#FF9500"
                              strokeWidth="1.66667"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_2944_10115">
                              <rect width="20" height="20" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <div className="text-lg text-[#4A5565]">

                      {item}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
