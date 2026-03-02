"use client";

const securityData = [
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
          d="M31 23H17C15.8954 23 15 23.8954 15 25V32C15 33.1046 15.8954 34 17 34H31C32.1046 34 33 33.1046 33 32V25C33 23.8954 32.1046 23 31 23Z"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M19 23V19C19 17.6739 19.5268 16.4021 20.4645 15.4645C21.4021 14.5268 22.6739 14 24 14C25.3261 14 26.5979 14.5268 27.5355 15.4645C28.4732 16.4021 29 17.6739 29 19V23"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    iconBg: "bg-[#FF9500]",
    border: "border-[#BEDBFF]",
    title: "Security-First Architecture",
    mark: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.6693 10.835C16.6693 15.0017 13.7526 17.085 10.2859 18.2933C10.1044 18.3549 9.90722 18.3519 9.7276 18.285C6.2526 17.085 3.33594 15.0017 3.33594 10.835V5.00168C3.33594 4.78066 3.42374 4.5687 3.58002 4.41242C3.7363 4.25614 3.94826 4.16834 4.16927 4.16834C5.83594 4.16834 7.91927 3.16834 9.36927 1.90168C9.54582 1.75084 9.7704 1.66797 10.0026 1.66797C10.2348 1.66797 10.4594 1.75084 10.6359 1.90168C12.0943 3.17668 14.1693 4.16834 15.8359 4.16834C16.057 4.16834 16.2689 4.25614 16.4252 4.41242C16.5815 4.5687 16.6693 4.78066 16.6693 5.00168V10.835Z"
          stroke="#FF9500"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.5 9.9987L9.16667 11.6654L12.5 8.33203"
          stroke="#FF9500"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    points: [
      "Secure-by-design system architecture",
      "End-to-end encrypted vote transmission",
      "Tamper-evident audit logs",
      "Role-based admin access controls",
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
          fill="#00A63E"
        />
        <path
          d="M27 14H18C17.4696 14 16.9609 14.2107 16.5858 14.5858C16.2107 14.9609 16 15.4696 16 16V32C16 32.5304 16.2107 33.0391 16.5858 33.4142C16.9609 33.7893 17.4696 34 18 34H30C30.5304 34 31.0391 33.7893 31.4142 33.4142C31.7893 33.0391 32 32.5304 32 32V19L27 14Z"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M26 14V18C26 18.5304 26.2107 19.0391 26.5858 19.4142C26.9609 19.7893 27.4696 20 28 20H32"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21 27L23 29L27 25"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    iconBg: "bg-[#2BB673]",
    border: "border-[#B9F8CF]",
    title: "Transparency & Compliance Readiness",
    mark: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.9974 5L5.83073 14.1667L1.66406 10"
          stroke="#00A63E"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.3359 8.33203L12.0859 14.582L10.8359 13.332"
          stroke="#00A63E"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    points: [
      "Full system, admin, and voter activity logs",
      "Exportable audit evidence packs",
      "Recount-ready verification data",
      "Designed to align with ISO 27001, SOC 2, and NIST-style controls",
    ],
  },
];

export default function SecurityTrustCapabilities() {
  return (
    <section className="max-w-420 w-11/12 mx-auto px-4  py-10 lg:py-20 ">
      <h2 className="text-center text-black text-[24px] md:text-[32px] lg:text-[52px] font-bold">
        Security, Trust & <span className="text-[#FF9500]">Capabilities</span>
      </h2>

      <div className="w-20 h-1 bg-[#FF9500] mx-auto mt-3 mb-8 lg:mb-10"></div>

      <div className="grid md:grid-cols-2 gap-8 mt-10">
        {securityData.map((box, i) => (
          <div
            key={i}
            className={`border ${box.border} rounded-2xl p-6 bg-white shadow-sm`}
          >
            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
              <div>{box.icon}</div>
              <h3 className="text-xl md:text-3xl font-semibold">{box.title}</h3>
            </div>

            {/* Points */}
            <ul className="space-y-2">
              {box.points.map((text, idx) => (
                <li
                  key={idx}
                  className="flex items-start  gap-2 text-[#45556C] text-lg md:text-xl"
                >
                  <span className="mt-1">{box.mark}</span>

                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
