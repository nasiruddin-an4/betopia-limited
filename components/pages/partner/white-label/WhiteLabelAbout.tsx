import UnderlineSectionTitle from "@/components/shared/UnderlineSectionTitle";

export default function WhiteLabelAbout() {
  return (
    <section className="w-11/12 pt-10 md:py-20 px-4 lg:px-0 overflow-hidden max-w-[1404px] mx-auto">
      {/* Section Title */}
      <UnderlineSectionTitle
        title="What is White-Label Partnership?"
        wrapperClassName="mb-10 md:mb-20 text-center text-[#414042]"
      />

      {/* Cards */}
      <div className="bg-white overflow-hidden border-y border-[#414042]">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#414042]">
          {/* Left Section - Your Brand, Our Expertise */}
          <div className="p-9 hover:bg-[#FFF9F5] flex flex-col justify-between">
            <div>

            <h2 className="text-2xl lg:text-4xl font-bold text-[#281812] mb-6 md:mb-10 xl:mb-16">
              Your Brand, Our Expertise
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl mb-8 text-[#414042]">
              Deliver Betopia solutions (Cloud, AI, cybersecurity, ERP, HRMS, POS, Voting Systems) under your branding.
            </p>
            </div>
            <div className="flex items-center justify-between">
              <div className="">
                <svg
                  width="42"
                  height="42"
                  viewBox="0 0 42 42"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 0H26C34.8366 0 42 7.16344 42 16V42H0V0Z"
                    fill="#F79549"
                  />
                  <path
                    d="M11.4697 30.4697C11.1768 30.7626 11.1768 31.2374 11.4697 31.5303C11.7626 31.8232 12.2374 31.8232 12.5303 31.5303L12 31L11.4697 30.4697ZM28.75 15C28.75 14.5858 28.4142 14.25 28 14.25L21.25 14.25C20.8358 14.25 20.5 14.5858 20.5 15C20.5 15.4142 20.8358 15.75 21.25 15.75L27.25 15.75L27.25 21.75C27.25 22.1642 27.5858 22.5 28 22.5C28.4142 22.5 28.75 22.1642 28.75 21.75L28.75 15ZM12 31L12.5303 31.5303L28.5303 15.5303L28 15L27.4697 14.4697L11.4697 30.4697L12 31Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="">
                <svg
                  width="80"
                  height="80"
                  viewBox="0 0 80 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.832 28.7343C12.3455 26.5427 12.4202 24.2638 13.0492 22.1088C13.6782 19.9538 14.8412 17.9925 16.4303 16.4067C18.0193 14.821 19.9831 13.6621 22.1394 13.0376C24.2957 12.4131 26.5748 12.3432 28.7654 12.8343C29.9711 10.9486 31.632 9.39684 33.5952 8.32193C35.5584 7.24702 37.7605 6.68359 39.9987 6.68359C42.2369 6.68359 44.439 7.24702 46.4022 8.32193C48.3653 9.39684 50.0263 10.9486 51.232 12.8343C53.4259 12.3411 55.7089 12.4107 57.8687 13.0367C60.0284 13.6627 61.9948 14.8248 63.5848 16.4148C65.1749 18.0049 66.337 19.9712 66.963 22.131C67.589 24.2907 67.6586 26.5738 67.1654 28.7676C69.051 29.9733 70.6028 31.6343 71.6777 33.5975C72.7526 35.5606 73.3161 37.7628 73.3161 40.001C73.3161 42.2392 72.7526 44.4413 71.6777 46.4045C70.6028 48.3676 69.051 50.0286 67.1654 51.2343C67.6565 53.4249 67.5865 55.704 66.962 57.8603C66.3375 60.0166 65.1787 61.9803 63.593 63.5694C62.0072 65.1585 60.0459 66.3214 57.8909 66.9505C55.7359 67.5795 53.4569 67.6542 51.2654 67.1676C50.0612 69.0605 48.3989 70.619 46.4324 71.6987C44.4659 72.7784 42.2588 73.3445 40.0154 73.3445C37.7719 73.3445 35.5648 72.7784 33.5983 71.6987C31.6318 70.619 29.9695 69.0605 28.7654 67.1676C26.5748 67.6588 24.2957 67.5888 22.1394 66.9643C19.9831 66.3398 18.0193 65.181 16.4303 63.5952C14.8412 62.0095 13.6782 60.0482 13.0492 57.8932C12.4202 55.7382 12.3455 53.4592 12.832 51.2676C10.9319 50.0651 9.36674 48.4016 8.28218 46.4317C7.19763 44.4618 6.62891 42.2497 6.62891 40.001C6.62891 37.7523 7.19763 35.5401 8.28218 33.5703C9.36674 31.6004 10.9319 29.9368 12.832 28.7343Z"
                    stroke="#414042"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M30 39.9987L36.6667 46.6654L50 33.332"
                    stroke="#414042"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Middle Section - Enterprise Platforms */}
          <div className="p-9 hover:bg-[#FFF9F5]">
            <div className="flex items-center  justify-between mb-6">
              <div className="">
                <svg
                  width="42"
                  height="42"
                  viewBox="0 0 42 42"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 0H26C34.8366 0 42 7.16344 42 16V42H0V0Z"
                    fill="#F79549"
                  />
                  <path
                    d="M11.4697 30.4697C11.1768 30.7626 11.1768 31.2374 11.4697 31.5303C11.7626 31.8232 12.2374 31.8232 12.5303 31.5303L12 31L11.4697 30.4697ZM28.75 15C28.75 14.5858 28.4142 14.25 28 14.25L21.25 14.25C20.8358 14.25 20.5 14.5858 20.5 15C20.5 15.4142 20.8358 15.75 21.25 15.75L27.25 15.75L27.25 21.75C27.25 22.1642 27.5858 22.5 28 22.5C28.4142 22.5 28.75 22.1642 28.75 21.75L28.75 15ZM12 31L12.5303 31.5303L28.5303 15.5303L28 15L27.4697 14.4697L11.4697 30.4697L12 31Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="">
                <svg
                  width="80"
                  height="80"
                  viewBox="0 0 80 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M53.3346 73.3333C57.0165 73.3333 60.0013 70.3486 60.0013 66.6667C60.0013 62.9848 57.0165 60 53.3346 60C49.6527 60 46.668 62.9848 46.668 66.6667C46.668 70.3486 49.6527 73.3333 53.3346 73.3333Z"
                    stroke="#414042"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M33.3346 66.667H13.3346C11.5665 66.667 9.87083 65.9646 8.62059 64.7144C7.37035 63.4641 6.66797 61.7684 6.66797 60.0003V16.667C6.66797 14.8989 7.37035 13.2032 8.62059 11.9529C9.87083 10.7027 11.5665 10.0003 13.3346 10.0003H26.3346C27.4496 9.98939 28.5495 10.2583 29.5336 10.7824C30.5178 11.3065 31.3548 12.0691 31.968 13.0003L34.668 17.0003C35.275 17.9221 36.1014 18.6787 37.073 19.2023C38.0446 19.7259 39.1309 20.0001 40.2346 20.0003H66.668C68.4361 20.0003 70.1318 20.7027 71.382 21.9529C72.6323 23.2032 73.3346 24.8989 73.3346 26.667V33.3337"
                    stroke="#414042"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M73.332 46.668L58.332 61.668"
                    stroke="#414042"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M70 50L73.3333 53.3333"
                    stroke="#414042"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            <h2 className="text-2xl lg:text-4xl font-bold text-[#281812] mb-6 md:mb-10 xl:mb-16">
              Enterprise Platforms
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl mb-8 text-[#414042]">
              Leverage our enterprise-grade platforms and multi-cloud solutions across Microsoft, AWS, and Google Cloud
            </p>
          </div>

          {/* Right Section - Full Client Ownership */}
          <div className="p-9 hover:bg-[#FFF9F5] flex flex-col justify-between">
            <div>

            <h2 className="text-2xl lg:text-4xl font-bold text-[#281812] mb-6 md:mb-10 xl:mb-16">
              Full Client Ownership
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl mb-8 text-[#414042]">
              Maintain full client ownership while we manage delivery, compliance, and technical execution
            </p>
            </div>
            <div className="flex items-center justify-between">
              <div className="">
                <svg
                  width="42"
                  height="42"
                  viewBox="0 0 42 42"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 0H26C34.8366 0 42 7.16344 42 16V42H0V0Z"
                    fill="#F79549"
                  />
                  <path
                    d="M11.4697 30.4697C11.1768 30.7626 11.1768 31.2374 11.4697 31.5303C11.7626 31.8232 12.2374 31.8232 12.5303 31.5303L12 31L11.4697 30.4697ZM28.75 15C28.75 14.5858 28.4142 14.25 28 14.25L21.25 14.25C20.8358 14.25 20.5 14.5858 20.5 15C20.5 15.4142 20.8358 15.75 21.25 15.75L27.25 15.75L27.25 21.75C27.25 22.1642 27.5858 22.5 28 22.5C28.4142 22.5 28.75 22.1642 28.75 21.75L28.75 15ZM12 31L12.5303 31.5303L28.5303 15.5303L28 15L27.4697 14.4697L11.4697 30.4697L12 31Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="w-20 h-20">
                <svg
                  width="80"
                  height="80"
                  viewBox="0 0 80 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M40 26.668C56.5685 26.668 70 22.1908 70 16.668C70 11.1451 56.5685 6.66797 40 6.66797C23.4315 6.66797 10 11.1451 10 16.668C10 22.1908 23.4315 26.668 40 26.668Z"
                    stroke="#414042"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 16.668V63.3346C10 65.9868 13.1607 68.5303 18.7868 70.4057C24.4129 72.2811 32.0435 73.3346 40 73.3346C47.9565 73.3346 55.5871 72.2811 61.2132 70.4057C66.8393 68.5303 70 65.9868 70 63.3346V16.668"
                    stroke="#414042"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 40C10 42.6522 13.1607 45.1957 18.7868 47.0711C24.4129 48.9464 32.0435 50 40 50C47.9565 50 55.5871 48.9464 61.2132 47.0711C66.8393 45.1957 70 42.6522 70 40"
                    stroke="#414042"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 ">
        {whiteLabelAboutData.map((item) => (
          <div
            key={item.id}
            className="relative pl-[27px] pb-[53px] w-full md:w-[500px]  min-h-[314px] mx-auto"
          >
            <video
              className="absolute top-0 left-0 w-full h-full  object-cover rounded-xl"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={item.video} type="video/mp4" />
            </video>

            <div className="absolute inset-0 bg-black opacity-50 rounded-xl " />

            <div className="relative z-20 px-4 h-full flex flex-col justify-end">
              <h5 className="text-xl md:text-[28px] text-white font-bold">
                {item.title}
              </h5>

              <p className="text-lg md:text-2xl mt-[10px] text-white">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div> */}
    </section>
  );
}
// import AboutPartner from "../common/AboutPartner";

// const whiteLabelData = [
//   {
//     id: 1,
//     href: '/partner/white-label/about/about1.svg',
//     title: "Your Brand, Our Expertise",
//     description:
//       "Deliver Betopia solutions (Cloud, AI, cybersecurity, ERP, HRMS, POS, Voting Systems) under your branding",
//   },
//   {
//     id: 2,
//     href: '/partner/white-label/about/about2.svg',
//     title: "Enterprise Platforms",
//     description:
//       "Leverage our enterprise-grade platforms and multi-cloud solutions across Microsoft, AWS, and Google Cloud",
//   },
//   {
//     id: 3,
//     href: '/partner/white-label/about/about3.svg',
//     title: "Full Client Ownership",
//     description:
//       "Maintain full client ownership while we manage delivery, compliance, and technical execution",
//   },
// ];

// export default function WhiteLabelAbout() {
//   return (
//     <AboutPartner
//       heading="What is White-Label Partnership?"
//       items={whiteLabelData}
//     />
//   );
// }
