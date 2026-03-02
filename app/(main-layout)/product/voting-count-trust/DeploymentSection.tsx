"use client";
import Image from "next/image";

const deploymentData = [
  {
    icon: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 10C0 4.47715 4.47715 0 10 0H38C43.5229 0 48 4.47715 48 10V38C48 43.5229 43.5228 48 38 48H10C4.47715 48 0 43.5228 0 38V10Z"
          fill="#FF9500"
        />
        <path
          d="M24 34C29.5228 34 34 29.5228 34 24C34 18.4772 29.5228 14 24 14C18.4772 14 14 18.4772 14 24C14 29.5228 18.4772 34 24 34Z"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M24 14C21.4322 16.6962 20 20.2767 20 24C20 27.7233 21.4322 31.3038 24 34C26.5678 31.3038 28 27.7233 28 24C28 20.2767 26.5678 16.6962 24 14Z"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14 24H34"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    iconBg: "bg-[#FF9500]",
    title: "Deployment Flexibility",
    points: [
      "Cloud deployment (public or private)",
      "On-premises / local server deployment",
      "Supports data residency and regulatory requirements",
    ],
  },
  {
    icon: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 10C0 4.47715 4.47715 0 10 0H38C43.5229 0 48 4.47715 48 10V38C48 43.5229 43.5228 48 38 48H10C4.47715 48 0 43.5228 0 38V10Z"
          fill="#FF9500"
        />
        <path
          d="M34 19L25.5 27.5L20.5 22.5L14 29"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M28 19H34V25"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    iconBg: "bg-[#FF9500]",
    title: "Scalability & Performance",
    points: [
      "Scales from dozens to millions of voters",
      "High-availability architecture",
      "Designed for concurrent voting loads",
      "Suitable for regional, national, and federated elections",
    ],
  },
];

export default function DeploymentSection() {
  return (
    <section className="bg-[#FFF9F1] py-10 md:py-20 px-3 md:px-8">
      <div
        className="max-w-375 w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 xl:gap-16
                              items-stretch px-4 "
      >
        {/* Image from right */}
        <div className="relative w-full h-50 md:h-75 lg:h-full rounded-2xl overflow-hidden">
          <Image
            src="/product/d.png"
            alt="count_trust"
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="space-y-8">
          {deploymentData.map((box, i) => (
            <div key={i}>
              <div className="flex items-center gap-3 mb-3">
                <span className={`p-2 rounded-xl ${box.iconBg}`}>
                  {box.icon}
                </span>
                <h3 className="text-xl md:text-3xl  font-semibold">
                  {box.title}
                </h3>
              </div>

              <ul className="space-y-1 pl-1">
                {box.points.map((p, idx) => (
                  <li
                    key={idx}
                    className="text-[#45556C] text-[15px]  flex items-center gap-2"
                  >
                    <span className="text-[#FF9500] mt-0.75 text-3xl">•</span>
                    <span className="text-lg md:text-xl lg:text-[22px]">
                      {p}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
