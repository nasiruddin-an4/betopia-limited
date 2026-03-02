import UnderlineSectionTitle from "@/components/shared/UnderlineSectionTitle";

export default function CoBrandedAbout() {
  return (
    <section className="w-full pt-10 md:py-20 px-4 lg:px-0 overflow-hidden max-w-[1404px] mx-auto">
      {/* Section Title */}
      <UnderlineSectionTitle
        title="What is Co-Branded Partnership?"
        wrapperClassName="mb-10 md:mb-20 text-center text-[#414042]"
      />

      {/* Cards */}
      <div className="bg-white overflow-hidden border-y border-[#414042]">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#414042]">
          {/* Left Section - Your Brand, Our Expertise */}
          <div className="p-9 hover:bg-[#FFF9F5] flex flex-col justify-between">
            <div>

            <h2 className="text-2xl lg:text-4xl font-bold text-[#281812] mb-6 md:mb-10 xl:mb-16">
              Leverage Our Brand
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl mb-8 text-[#414042]">
             Sell Betopia solutions using our brand credibility.
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
               <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M66.6654 43.3322C66.6654 59.9989 54.9987 68.3322 41.132 73.1656C40.4059 73.4116 39.6172 73.3999 38.8987 73.1322C24.9987 68.3322 13.332 59.9989 13.332 43.3322V19.9989C13.332 19.1148 13.6832 18.267 14.3083 17.6419C14.9335 17.0168 15.7813 16.6656 16.6654 16.6656C23.332 16.6656 31.6654 12.6656 37.4654 7.59889C38.1715 6.99556 39.0699 6.66406 39.9987 6.66406C40.9275 6.66406 41.8258 6.99556 42.532 7.59889C48.3654 12.6989 56.6654 16.6656 63.332 16.6656C64.2161 16.6656 65.0639 17.0168 65.6891 17.6419C66.3142 18.267 66.6654 19.1148 66.6654 19.9989V43.3322Z" stroke="#414042" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M30 39.9987L36.6667 46.6654L50 33.332" stroke="#414042" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
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
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M53.332 23.332H73.332V43.332" stroke="#414042" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M73.3346 23.332L45.0013 51.6654L28.3346 34.9987L6.66797 56.6654" stroke="#414042" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

              </div>
            </div>

            <h2 className="text-2xl lg:text-4xl font-bold text-[#281812] mb-6 md:mb-10 xl:mb-16">
              Access Global Solutions
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl mb-8 text-[#414042]">
             Access global clients, proprietary platforms, and enterprise services.
            </p>
          </div>

          {/* Right Section - Full Client Ownership */}
          <div className="p-9 hover:bg-[#FFF9F5] flex flex-col justify-between">
            <div>

            <h2 className="text-2xl lg:text-4xl font-bold text-[#281812] mb-6 md:mb-10 xl:mb-16">
              Maximize Revenue
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl mb-8 text-[#414042]">
              Maximize project revenue with minimal overhead.
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
               <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M40.0013 73.3346C58.4108 73.3346 73.3346 58.4108 73.3346 40.0013C73.3346 21.5918 58.4108 6.66797 40.0013 6.66797C21.5918 6.66797 6.66797 21.5918 6.66797 40.0013C6.66797 58.4108 21.5918 73.3346 40.0013 73.3346Z" stroke="#414042" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M40.0013 6.66797C31.4421 15.6551 26.668 27.5904 26.668 40.0013C26.668 52.4122 31.4421 64.3475 40.0013 73.3346C48.5605 64.3475 53.3346 52.4122 53.3346 40.0013C53.3346 27.5904 48.5605 15.6551 40.0013 6.66797Z" stroke="#414042" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.66797 40H73.3346" stroke="#414042" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

