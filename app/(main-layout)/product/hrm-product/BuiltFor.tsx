"use client";

import Container from "@/components/layout/Container";
import PageSubtitle from "@/components/shared/heading/pageSubtitle";

export default function BuiltFor() {
  const items = [
    {
      icon: (
        <svg
          width="56"
          height="56"
          viewBox="0 0 56 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 28C0 12.536 12.536 0 28 0C43.464 0 56 12.536 56 28C56 43.464 43.464 56 28 56C12.536 56 0 43.464 0 28Z"
            fill="#FF9500"
          />
          <path
            d="M27.9987 33.8333C28.643 33.8333 29.1654 33.311 29.1654 32.6667C29.1654 32.0223 28.643 31.5 27.9987 31.5C27.3544 31.5 26.832 32.0223 26.832 32.6667C26.832 33.311 27.3544 33.8333 27.9987 33.8333Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M36.1667 25.668H19.8333C18.5447 25.668 17.5 26.7126 17.5 28.0013V37.3346C17.5 38.6233 18.5447 39.668 19.8333 39.668H36.1667C37.4553 39.668 38.5 38.6233 38.5 37.3346V28.0013C38.5 26.7126 37.4553 25.668 36.1667 25.668Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22.168 25.6654V22.1654C22.168 20.6183 22.7826 19.1345 23.8765 18.0406C24.9705 16.9466 26.4542 16.332 28.0013 16.332C29.5484 16.332 31.0321 16.9466 32.1261 18.0406C33.2201 19.1345 33.8346 20.6183 33.8346 22.1654V25.6654"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Role-based Access Control (RBAC)",
    },
    {
      icon: (
        <svg
          width="56"
          height="56"
          viewBox="0 0 56 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 28C0 12.536 12.536 0 28 0C43.464 0 56 12.536 56 28C56 43.464 43.464 56 28 56C12.536 56 0 43.464 0 28Z"
            fill="#FF9500"
          />
          <path
            d="M16.405 28.4079C16.3077 28.1459 16.3077 27.8578 16.405 27.5959C17.3519 25.2997 18.9594 23.3364 21.0235 21.9549C23.0877 20.5734 25.5155 19.8359 27.9993 19.8359C30.4831 19.8359 32.9109 20.5734 34.9751 21.9549C37.0392 23.3364 38.6466 25.2997 39.5936 27.5959C39.6909 27.8578 39.6909 28.1459 39.5936 28.4079C38.6466 30.7041 37.0392 32.6673 34.9751 34.0488C32.9109 35.4303 30.4831 36.1678 27.9993 36.1678C25.5155 36.1678 23.0877 35.4303 21.0235 34.0488C18.9594 32.6673 17.3519 30.7041 16.405 28.4079Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M28 31.5C29.933 31.5 31.5 29.933 31.5 28C31.5 26.067 29.933 24.5 28 24.5C26.067 24.5 24.5 26.067 24.5 28C24.5 29.933 26.067 31.5 28 31.5Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Permission driven data visibility",
    },
    {
      icon: (
        <svg
          width="56"
          height="56"
          viewBox="0 0 56 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 28C0 12.536 12.536 0 28 0C43.464 0 56 12.536 56 28C56 43.464 43.464 56 28 56C12.536 56 0 43.464 0 28Z"
            fill="#FF9500"
          />
          <path
            d="M37.3346 29.1659C37.3346 34.9992 33.2513 37.9159 28.398 39.6076C28.1438 39.6937 27.8678 39.6896 27.6163 39.5959C22.7513 37.9159 18.668 34.9992 18.668 29.1659V20.9992C18.668 20.6898 18.7909 20.3931 19.0097 20.1743C19.2285 19.9555 19.5252 19.8326 19.8346 19.8326C22.168 19.8326 25.0846 18.4326 27.1146 16.6592C27.3618 16.4481 27.6762 16.332 28.0013 16.332C28.3264 16.332 28.6408 16.4481 28.888 16.6592C30.9296 18.4442 33.8346 19.8326 36.168 19.8326C36.4774 19.8326 36.7741 19.9555 36.9929 20.1743C37.2117 20.3931 37.3346 20.6898 37.3346 20.9992V29.1659Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M24.5 28.0013L26.8333 30.3346L31.5 25.668"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Secure handling of sensitive employee information",
    },
    {
      icon: (
        <svg
          width="56"
          height="56"
          viewBox="0 0 56 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 28C0 12.536 12.536 0 28 0C43.464 0 56 12.536 56 28C56 43.464 43.464 56 28 56C12.536 56 0 43.464 0 28Z"
            fill="#FF9500"
          />
          <path
            d="M21.0013 39.6654C20.3825 39.6654 19.789 39.4195 19.3514 38.982C18.9138 38.5444 18.668 37.9509 18.668 37.332V18.6654C18.668 18.0465 18.9138 17.453 19.3514 17.0155C19.789 16.5779 20.3825 16.332 21.0013 16.332H30.3346C30.7039 16.3314 31.0697 16.4039 31.4109 16.5453C31.7521 16.6866 32.062 16.8941 32.3226 17.1557L36.5086 21.3417C36.771 21.6025 36.979 21.9126 37.1208 22.2542C37.2626 22.5958 37.3352 22.9622 37.3346 23.332V37.332C37.3346 37.9509 37.0888 38.5444 36.6512 38.982C36.2136 39.4195 35.6201 39.6654 35.0013 39.6654H21.0013Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M30.332 16.332V22.1654C30.332 22.4748 30.4549 22.7715 30.6737 22.9903C30.8925 23.2091 31.1893 23.332 31.4987 23.332H37.332"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M24.5 31.5013L26.8333 33.8346L31.5 29.168"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Audit-friendly system design",
    },
    {
      icon: (
        <svg
          width="56"
          height="56"
          viewBox="0 0 56 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 28C0 12.536 12.536 0 28 0C43.464 0 56 12.536 56 28C56 43.464 43.464 56 28 56C12.536 56 0 43.464 0 28Z"
            fill="#FF9500"
          />
          <path
            d="M28 25.668H28.0117"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M28 30.332H28.0117"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M28 21H28.0117"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M32.668 25.668H32.6796"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M32.668 30.332H32.6796"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M32.668 21H32.6796"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M23.332 25.668H23.3437"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M23.332 30.332H23.3437"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M23.332 21H23.3437"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M24.5 39.6667V36.1667C24.5 35.8572 24.6229 35.5605 24.8417 35.3417C25.0605 35.1229 25.3572 35 25.6667 35H30.3333C30.6428 35 30.9395 35.1229 31.1583 35.3417C31.3771 35.5605 31.5 35.8572 31.5 36.1667V39.6667"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M35.0013 16.332H21.0013C19.7126 16.332 18.668 17.3767 18.668 18.6654V37.332C18.668 38.6207 19.7126 39.6654 21.0013 39.6654H35.0013C36.29 39.6654 37.3346 38.6207 37.3346 37.332V18.6654C37.3346 17.3767 36.29 16.332 35.0013 16.332Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Compliance-ready architecture for enterprise environments",
    },
  ];

  return (
    <section className="">
      <Container>
        <div className="text-center">
          {/* Title */}
          {/* <HeadingOne title="Security, Compliance & " highlight="Access Control" /> */}
          <h2 className="text-center text-black text-[24px] md:text-[32px] lg:text-[52px] font-bold ">
            Security, Compliance & {}
            <span className="text-[#FF9500]">Access Control</span>
          </h2>
          <div className="w-20 h-1 bg-[#FF9500] mx-auto mt-3 mb-5 lg:mb-16"></div>

          {/* Description */}
          <PageSubtitle
            text=" Security is built into the foundation of Betopia HRM."
            className="mt-3 text-[#414042] lg:w-[90%] mx-auto px-6"
          />

          {/* Cards */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {items.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 flex flex-col items-center gap-3 hover:shadow-md transition"
              >
                <div className="">{item.icon}</div>
                <PageSubtitle
                  text={item.title}
                  className="text-gray-800  text-center"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>

    // <section className="w-full bg-[#DEEBF7] py-10 md:py-20">
    //     <div className="w-11/12 mx-auto">

    //   <div className="max-w-[1404px] mx-auto px-4 text-center">
    //     {/* Title */}
    //     <h2 className="text-2xl md:text-3xl lg:text-[36px] font-semibold text-gray-900">
    //       Security, Compliance & Access Control
    //     </h2>

    //     {/* Description */}
    //     <p className="mt-3 text-lg md:text-xl lg:text-2xl text-[#414042] lg:w-[90%] mx-auto px-6">
    //      Security is built into the foundation of Betopia HRM.
    //     </p>

    //     {/* Cards */}
    //     <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
    //       {items.map((item, i) => (
    //         <div
    //           key={i}
    //           className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col items-center gap-3 hover:shadow-md transition"
    //         >
    //           <div className="">
    //             {item.icon}
    //           </div>
    //           <p className="text-gray-800 text-lg md:text-xl text-center">
    //             {item.title}
    //           </p>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    //     </div>
    // </section>
  );
}
