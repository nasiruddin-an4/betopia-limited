import React, { ReactNode } from "react";
interface OfferCardProps {
  title: string;
  icon: ReactNode;
  gradientClass?: string;
  bgColorClass?: string;
  description: string;
  cardBG: string;
}
const offersData = [
  {
    title: "Innovation First",
    gradientClass: "bg-linear-to-r from-[#AD46FF] to-[#9810FA]",
    cardBG: "bg-[#FAF5FF]",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
      >
        <path
          d="M20 18.6666C20.2667 17.3333 20.9333 16.4 22 15.3333C23.3333 14.1333 24 12.4 24 10.6666C24 8.54489 23.1571 6.51006 21.6569 5.00977C20.1566 3.50948 18.1217 2.66663 16 2.66663C13.8783 2.66663 11.8434 3.50948 10.3431 5.00977C8.84286 6.51006 8 8.54489 8 10.6666C8 12 8.26667 13.6 10 15.3333C10.9333 16.2666 11.7333 17.3333 12 18.6666"
          stroke="white"
          strokeWidth="2.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 24H20"
          stroke="white"
          strokeWidth="2.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.334 29.3334H18.6673"
          stroke="white"
          strokeWidth="2.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    description: "Always pushing boundaries.",
  },
  {
    title: "Collaboration",
    gradientClass: "bg-linear-to-r from-[#F6339A] to-[#E60076]",
    cardBG: "bg-[#FDF2F8]",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
      >
        <path
          d="M2.66602 12.6668C2.66604 11.183 3.11614 9.73421 3.95686 8.51165C4.79758 7.28909 5.98937 6.35031 7.37483 5.81929C8.76028 5.28828 10.2742 5.19002 11.7167 5.53749C13.1592 5.88495 14.4623 6.6618 15.454 7.76543C15.5239 7.84011 15.6083 7.89965 15.7021 7.94036C15.7959 7.98107 15.8971 8.00207 15.9993 8.00207C16.1016 8.00207 16.2028 7.98107 16.2966 7.94036C16.3904 7.89965 16.4748 7.84011 16.5447 7.76543C17.5333 6.65463 18.8367 5.87125 20.2815 5.51956C21.7263 5.16787 23.244 5.26456 24.6325 5.79674C26.021 6.32892 27.2145 7.27136 28.0542 8.49863C28.8938 9.7259 29.3398 11.1798 29.3327 12.6668C29.3327 15.7201 27.3327 18.0001 25.3327 20.0001L18.01 27.0841C17.7616 27.3694 17.4553 27.5986 17.1114 27.7565C16.7676 27.9143 16.3941 27.9972 16.0157 27.9996C15.6374 28.002 15.2629 27.9239 14.9171 27.7704C14.5712 27.6169 14.2621 27.3916 14.01 27.1094L6.66602 20.0001C4.66602 18.0001 2.66602 15.7334 2.66602 12.6668Z"
          stroke="white"
          strokeWidth="2.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    description: "Great minds build together.",
  },
  {
    title: "Transparency",
    gradientClass: "bg-linear-to-r from-[#2B7FFF] to-[#155DFC]",
    cardBG: "bg-[#EFF6FF]",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
      >
        <path
          d="M15.9993 29.3333C23.3631 29.3333 29.3327 23.3638 29.3327 16C29.3327 8.63616 23.3631 2.66663 15.9993 2.66663C8.63555 2.66663 2.66602 8.63616 2.66602 16C2.66602 23.3638 8.63555 29.3333 15.9993 29.3333Z"
          stroke="white"
          strokeWidth="2.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 24C20.4183 24 24 20.4183 24 16C24 11.5817 20.4183 8 16 8C11.5817 8 8 11.5817 8 16C8 20.4183 11.5817 24 16 24Z"
          stroke="white"
          strokeWidth="2.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.0007 18.6667C17.4734 18.6667 18.6673 17.4728 18.6673 16C18.6673 14.5273 17.4734 13.3334 16.0007 13.3334C14.5279 13.3334 13.334 14.5273 13.334 16C13.334 17.4728 14.5279 18.6667 16.0007 18.6667Z"
          stroke="white"
          strokeWidth="2.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    description: "Clear communication, open goals.",
  },
  {
    title: "Growth Mindset",
    bgColorClass: "bg-[#FF9500]",
    cardBG: "bg-[#FFF7ED]",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
      >
        <path
          d="M5.33397 18.6667C5.08166 18.6675 4.83428 18.5968 4.62058 18.4627C4.40688 18.3285 4.23562 18.1365 4.12671 17.9089C4.0178 17.6813 3.9757 17.4275 4.00531 17.1769C4.03492 16.9263 4.13501 16.6893 4.29397 16.4933L17.494 2.89335C17.593 2.77906 17.7279 2.70182 17.8766 2.67432C18.0253 2.64683 18.1789 2.6707 18.3123 2.74202C18.4456 2.81334 18.5508 2.92788 18.6104 3.06682C18.6701 3.20577 18.6807 3.36088 18.6406 3.50668L16.0806 11.5333C16.0052 11.7354 15.9798 11.9527 16.0068 12.1667C16.0337 12.3807 16.1122 12.5849 16.2354 12.7619C16.3587 12.9389 16.523 13.0834 16.7143 13.1829C16.9057 13.2824 17.1183 13.334 17.334 13.3333H26.6673C26.9196 13.3325 27.167 13.4032 27.3807 13.5374C27.5944 13.6715 27.7657 13.8635 27.8746 14.0911C27.9835 14.3187 28.0256 14.5726 27.996 14.8231C27.9664 15.0737 27.8663 15.3107 27.7073 15.5067L14.5073 29.1067C14.4083 29.221 14.2734 29.2982 14.1247 29.3257C13.976 29.3532 13.8223 29.3293 13.689 29.258C13.5557 29.1867 13.4505 29.0722 13.3909 28.9332C13.3312 28.7943 13.3205 28.6392 13.3606 28.4933L15.9206 20.4667C15.9961 20.2646 16.0215 20.0473 15.9945 19.8333C15.9676 19.6194 15.8891 19.4151 15.7659 19.2381C15.6426 19.0611 15.4783 18.9167 15.2869 18.8171C15.0956 18.7176 14.883 18.666 14.6673 18.6667H5.33397Z"
          stroke="white"
          strokeWidth="2.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    description: "Continuous learning & feedback.",
  },
];

const OfferCard: React.FC<OfferCardProps> = ({
  icon,
  title,
  cardBG,
  description,
  bgColorClass,
  gradientClass,
}) => {
  return (
    <div
      className={`p-7 rounded-2xl hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-105  ${cardBG}`}
    >
      <div
        className={`p-4 rounded-xl w-full flex items-center gap-3  ${
          gradientClass ? gradientClass : bgColorClass
        }`}
      >
        {icon}
        <h5 className="text-base md:text-xl lg:text-2xl font-normal  text-[#ffffff]">
          {title}
        </h5>
      </div>
      <p className=" text-[#45556C] mt-10 text-lg">
        {description}
      </p>
    </div>
  );
};
export default function NumbersAndValues() {
  return (
    <div className="bg-[#fffefc]">
      <div className="max-w-[1480px] w-11/12 mx-auto px-4">
        <h3 className="text-center text-black text-2xl md:text-5xl lg:text-[52px] font-bold">
          By the <span className="text-[#FF9500]">Numbers</span>{" "}
        </h3>
        <div className="w-20 h-1 bg-[#FF9500] mx-auto mt-4  mb-5" />
        <p className=" text-lg md:text-xl lg:text-2xl text-center font-normal  text-[##45556C] mx-auto max-w-[1000px] px-2 sm:px-4">
          Our community is growing, thriving, and making an impact
        </p>

        <div className="flex flex-wrap items-center justify-center gap-5   mx-auto mt-9">
          <div className="bg-white px-8 py-6 flex flex-col justify-center items-center ">
            <h3
              className="
    text-2xl md:text-4xl lg:text-[41px]
     font-normal mb-3
    bg-linear-to-r from-[#2B7FFF] to-[#00B8DB]
    bg-clip-text text-transparent
  "
            >
              3500+
            </h3>

            <p className="text-[#90A1B9] text-lg md:text-xl lg:text-2xl">
              Community Members
            </p>
          </div>
          <div className="bg-white px-8 py-6 flex flex-col justify-center items-center ">
            <h3
              className="
    text-2xl md:text-4xl lg:text-[41px]
     font-normal mb-3
    bg-linear-to-r from-[#AD46FF] to-[#F6339A]
    bg-clip-text text-transparent
  "
            >
              40K+
            </h3>

            <p className="text-[#90A1B9] text-lg md:text-xl lg:text-2xl">
              Global Clients
            </p>
          </div>
          <div className="bg-white px-8 py-6 flex flex-col justify-center items-center ">
            <h3
              className="
    text-2xl md:text-4xl lg:text-[41px]
     font-normal mb-3
    bg-linear-to-r from-[#00C950] to-[#00BC7D]
    bg-clip-text text-transparent
  "
            >
              92%
            </h3>

            <p className="text-[#90A1B9] text-lg md:text-xl lg:text-2xl">
              Employee Satisfaction
            </p>
          </div>
          <div className="bg-white px-8 py-6 flex flex-col justify-center items-center ">
            <h3
              className="
    text-2xl md:text-4xl lg:text-[41px]
     font-normal mb-3
    text-[#FF9500] 
  "
            >
              40%
            </h3>

            <p className="text-[#90A1B9] text-lg md:text-xl lg:text-2xl">
              Women in Tech
            </p>
          </div>
          <div className="bg-white px-8 py-6 flex flex-col justify-center items-center ">
            <h3
              className="
    text-2xl md:text-4xl lg:text-[41px]
     font-normal mb-3  text-[#FF9500]
  "
            >
              50K+
            </h3>

            <p className="text-[#90A1B9] text-lg md:text-xl lg:text-2xl">
              Successful Projects
            </p>
          </div>
        </div>

        {/* other section */}

        <h3 className="text-center mt-10 lg:mt-12 text-black text-2xl md:text-5xl lg:text-[52px] font-bold">
          Our Core <span className="text-[#FF9500]">Values</span>{" "}
        </h3>
        <div className="w-20 h-1 bg-[#FF9500] mx-auto mt-4  mb-5" />

        <p className=" text-lg md:text-xl lg:text-2xl text-center font-normal  text-[##45556C] mx-auto max-w-[1000px] px-2 sm:px-4">
          The principles that guide everything we do
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-7 mt-10">
          {offersData.map((offer, index) => (
            <OfferCard key={index} {...offer} />
          ))}
        </div>
      </div>
    </div>
  );
}
