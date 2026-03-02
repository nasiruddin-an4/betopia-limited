import Container from "@/components/layout/Container";
import HeadingOne from "@/components/shared/heading/HeadingOne";
import Image from "next/image";

export default function WhyChooseBetopia() {
  return (
    <div className="bg-[#ffffff]">
      <Container>
        <div className=" py-10  lg:py-20 ">
          {/* <HeadingOne
          title="Why you"
          highlight="choose betopia"
          center={true}
          className=""
        /> */}
          <h2 className="text-center text-black text-[24px] md:text-[32px] lg:text-[52px] font-bold">
            Why you <span className="text-[#FF9500]">choose betopia</span>
          </h2>

          <div className="w-20 h-1 bg-[#FF9500] mx-auto mt-3 mb-8 lg:mb-16"></div>
          {/*  */}
          <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch gap-6 lg:gap-16 mt-8">
            <div className="space-y-6">
              {/*  */}
              <div className="md:flex items-start gap-5 bg-white rounded-2xl ">
                <div className="p-4 rounded-2xl bg-[#FF9500] w-[60px] mb-4 md:mb-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                  >
                    <path
                      d="M4.62096 16.1715C4.40238 16.1722 4.18806 16.1109 4.00293 15.9947C3.81779 15.8785 3.66942 15.7121 3.57507 15.515C3.48071 15.3178 3.44424 15.0979 3.4699 14.8808C3.49555 14.6637 3.58227 14.4584 3.71998 14.2886L15.1556 2.50651C15.2413 2.40749 15.3582 2.34058 15.4871 2.31676C15.6159 2.29294 15.749 2.31362 15.8645 2.37541C15.98 2.43719 16.0711 2.53642 16.1228 2.65679C16.1745 2.77717 16.1837 2.91154 16.149 3.03786L13.9311 9.99162C13.8658 10.1666 13.8438 10.3549 13.8671 10.5403C13.8905 10.7257 13.9585 10.9026 14.0652 11.056C14.172 11.2093 14.3144 11.3344 14.4801 11.4207C14.6459 11.5069 14.8301 11.5516 15.0169 11.551H23.1027C23.3213 11.5503 23.5356 11.6116 23.7208 11.7278C23.9059 11.844 24.0543 12.0103 24.1486 12.2075C24.243 12.4047 24.2794 12.6246 24.2538 12.8417C24.2281 13.0587 24.1414 13.2641 24.0037 13.4338L12.5681 25.216C12.4823 25.315 12.3654 25.3819 12.2366 25.4057C12.1078 25.4295 11.9747 25.4089 11.8592 25.3471C11.7437 25.2853 11.6526 25.186 11.6009 25.0657C11.5492 24.9453 11.54 24.8109 11.5747 24.6846L13.7925 17.7309C13.8579 17.5558 13.8799 17.3675 13.8565 17.1822C13.8332 16.9968 13.7652 16.8198 13.6584 16.6665C13.5517 16.5132 13.4093 16.388 13.2435 16.3018C13.0778 16.2156 12.8936 16.1708 12.7067 16.1715H4.62096Z"
                      stroke="white"
                      strokeWidth="2.31022"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <h5 className="text-xl md:text-3xl font-medium text-[#0F172B] ">
                    Powerful & Affordable
                  </h5>

                  <div className=" mt-1 text-lg lg:text-xl text-[#45556C]">
                    Get enterprise-level features without the enterprise price
                    tag. Our solutions are designed to scale with your business
                    growth.
                  </div>
                </div>
              </div>
              {/*  */}
              <div className="md:flex items-start gap-5 bg-white rounded-2xl ">
                <div className="p-4 rounded-2xl bg-[#FF9500] w-[60px] mb-4 md:mb-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                  >
                    <path
                      d="M23.1028 15.0163C23.1028 20.7918 19.06 23.6796 14.2547 25.3545C14.0031 25.4398 13.7298 25.4357 13.4808 25.343C8.66398 23.6796 4.62109 20.7918 4.62109 15.0163V6.93053C4.62109 6.62417 4.74279 6.33037 4.95942 6.11374C5.17604 5.89712 5.46985 5.77542 5.7762 5.77542C8.08642 5.77542 10.9742 4.38929 12.9841 2.63352C13.2288 2.42444 13.5401 2.30957 13.862 2.30957C14.1838 2.30957 14.4951 2.42444 14.7399 2.63352C16.7613 4.40084 19.6375 5.77542 21.9477 5.77542C22.2541 5.77542 22.5479 5.89712 22.7645 6.11374C22.9812 6.33037 23.1028 6.62417 23.1028 6.93053V15.0163Z"
                      stroke="white"
                      strokeWidth="2.31022"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <h5 className="text-xl md:text-3xl font-medium text-[#0F172B] ">
                    Solid Integration
                  </h5>
                  <div className=" mt-1 text-lg lg:text-xl text-[#45556C]">
                    Connect seamlessly with over 1,000+ apps and services. Our
                    open API makes integration simple and straightforward.
                  </div>
                </div>
              </div>
              {/*  */}
              <div className="md:flex items-start gap-5 bg-white rounded-2xl ">
                <div className="p-4 rounded-2xl bg-[#FF9500] w-[60px] mb-4 md:mb-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                  >
                    <path
                      d="M18.4821 24.2573V21.9471C18.4821 20.7217 17.9953 19.5465 17.1288 18.68C16.2623 17.8135 15.0871 17.3267 13.8616 17.3267H6.93099C5.70557 17.3267 4.53034 17.8135 3.66384 18.68C2.79734 19.5465 2.31055 20.7217 2.31055 21.9471V24.2573"
                      stroke="white"
                      strokeWidth="2.31022"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M18.4824 3.61328C19.4732 3.87014 20.3507 4.44873 20.9771 5.25823C21.6035 6.06773 21.9434 7.06231 21.9434 8.08587C21.9434 9.10942 21.6035 10.104 20.9771 10.9135C20.3507 11.723 19.4732 12.3016 18.4824 12.5584"
                      stroke="white"
                      strokeWidth="2.31022"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M25.4126 24.2571V21.9468C25.4118 20.9231 25.0711 19.9286 24.4439 19.1195C23.8167 18.3104 22.9385 17.7325 21.9473 17.4766"
                      stroke="white"
                      strokeWidth="2.31022"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10.3958 12.7062C12.9476 12.7062 15.0163 10.6376 15.0163 8.08577C15.0163 5.53397 12.9476 3.46533 10.3958 3.46533C7.84403 3.46533 5.77539 5.53397 5.77539 8.08577C5.77539 10.6376 7.84403 12.7062 10.3958 12.7062Z"
                      stroke="white"
                      strokeWidth="2.31022"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <h5 className="text-xl md:text-3xl font-medium text-[#0F172B] ">
                    Business Connectivity
                  </h5>
                  <div className=" mt-1 text-lg lg:text-xl text-[#45556C]">
                    Break down silos and keep your entire team connected.
                    Real-time collaboration tools that actually work.
                  </div>
                </div>
              </div>
              {/*  */}
              <div className="md:flex items-start gap-5 bg-white rounded-2xl ">
                <div className="p-4 rounded-2xl bg-[#FF9500] w-[60px] mb-4 md:mb-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                  >
                    <path
                      d="M18.4824 8.08594H25.4131V15.0166"
                      stroke="white"
                      strokeWidth="2.31022"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M25.4127 8.08594L15.5943 17.9044L9.81876 12.1288L2.31055 19.637"
                      stroke="white"
                      strokeWidth="2.31022"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <h5 className="text-xl md:text-3xl font-medium text-[#0F172B] ">
                    Data-Driven Insights
                  </h5>
                  <div className=" mt-1 text-lg lg:text-xl text-[#45556C]">
                    Transform raw data into actionable insights. Advanced
                    analytics and customizable dashboards at your fingertips.
                  </div>
                </div>
              </div>
              {/*  */}
              <div className="md:flex items-start gap-5 bg-white rounded-2xl ">
                <div className="p-4 rounded-2xl bg-[#FF9500] w-[60px] mb-4 md:mb-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                  >
                    <path
                      d="M21.9476 12.7061H5.77604C4.50014 12.7061 3.46582 13.7404 3.46582 15.0163V23.102C3.46582 24.3779 4.50014 25.4123 5.77604 25.4123H21.9476C23.2235 25.4123 24.2578 24.3779 24.2578 23.102V15.0163C24.2578 13.7404 23.2235 12.7061 21.9476 12.7061Z"
                      stroke="white"
                      strokeWidth="2.31022"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.08594 12.706V8.08561C8.08594 6.55384 8.69443 5.0848 9.77756 4.00168C10.8607 2.91855 12.3297 2.31006 13.8615 2.31006C15.3933 2.31006 16.8623 2.91855 17.9454 4.00168C19.0285 5.0848 19.637 6.55384 19.637 8.08561V12.706"
                      stroke="white"
                      strokeWidth="2.31022"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <h5 className="text-xl md:text-3xl font-medium text-[#0F172B] ">
                    Enterprise Security
                  </h5>
                  <div className=" mt-1 text-lg lg:text-xl text-[#45556C]">
                    Your data security is our top priority. Bank-level
                    encryption, compliance certifications, and regular security
                    audits.
                  </div>
                </div>
              </div>
            </div>

            <div className="relative w-full h-full min-h-[300px]">
              <Image
                src="/product/w.png"
                alt="hrm_software"
                fill
                className="object-cover rounded-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
