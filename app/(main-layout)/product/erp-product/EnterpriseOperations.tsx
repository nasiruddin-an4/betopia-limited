import Container from "@/components/layout/Container";
import { Users } from "lucide-react";
import Image from "next/image";

export default function EnterpriseOperations() {
  return (
    <div>
      <section className="  bg-white pb-8 lg:pb-14 ">
        <Container>
          {/* <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 lg:mb-16 max-w-[800px] mx-auto">
            A Complete ERP Suite for Enterprise Operations
          </h2> */}
          <h2 className="text-center text-black text-[24px] md:text-[32px] lg:text-[52px] font-bold ">
            A Complete ERP Suite for <br />{" "}
            <span className="text-[#FF9500]">Enterprise Operations</span>
          </h2>

          <div className="w-20 h-1 bg-[#FF9500] mx-auto mt-3 mb-8 lg:mb-16"></div>
          {/* 1st one */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center  mb-5 md:mb-8 lg:mb-20">
            {/* Right Side - Image */}
            <div className="  lg:hidden justify-center">
              <Image
                src="/product/image_with_fallback.png"
                alt="HRMS Dashboard - Employee data, charts, payroll, attendance, and KPI tracking"
                width={738}
                height={366}
                className="object-cover rounded-2xl"
              />
            </div>

            {/* Left Side - Text Content */}
            <div className="space-y-2 md:space-y-6 ">
              <div className="md:flex items-center gap-4">
                <div className="w-12 h-12 bg-[#FF9500] rounded-lg flex items-center justify-center shrink-0 mb-5 md:mb-0">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl md:text-3xl font-medium text-gray-800">
                  Human Resources & Workforce Management
                </h3>
              </div>

              <p className="md:text-lg text-gray-600 leading-relaxed md:pl-16">
                Centralize workforce operations across branches with advanced
                HRMS capabilities, comprising attendance, payroll management,
                employee life cycle management and tracking performance
                appraisal aligned with KPIs.
              </p>
            </div>

            {/* Right Side - Image */}
            <div className="hidden lg:flex justify-center">
              <Image
                src="/product/image_with_fallback.png"
                alt="HRMS Dashboard - Employee data, charts, payroll, attendance, and KPI tracking"
                width={738}
                height={366}
                className="object-cover rounded-2xl"
              />
            </div>
          </div>

          {/* 2nd one */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center  mb-5 md:mb-8 lg:mb-20">
            {/* Right Side - Image */}
            <div className="flex justify-center">
              <Image
                src="/product/image_with_fallback2.png"
                alt="HRMS Dashboard - Employee data, charts, payroll, attendance, and KPI tracking"
                width={738}
                height={366}
                className="object-cover rounded-2xl"
              />
            </div>
            {/* Left Side - Text Content */}
            <div className="space-y-2 md:space-y-6 ">
              <div className="md:flex items-center gap-4">
                <div className="w-12 h-12 bg-[#FF9500] rounded-lg flex items-center justify-center shrink-0 mb-5 md:mb-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M13 17V9"
                      stroke="white"
                      strokeWidth="2.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M18 17V14"
                      stroke="white"
                      strokeWidth="2.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3 3V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H21"
                      stroke="white"
                      strokeWidth="2.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 17V5"
                      stroke="white"
                      strokeWidth="2.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-xl md:text-3xl font-medium text-gray-800">
                  Finance & Accounting
                </h3>
              </div>

              <p className="md:text-lg text-gray-600 leading-relaxed md:pl-16">
                Maintain full financial visibility with multi-branch accounting,
                consolidation, budgeting, cashflow management, audit trails, and
                approval workflows designed for enterprise governance.
              </p>
            </div>
          </div>

          {/* 3rd one */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center  mb-5 md:mb-8 lg:mb-20">
            {/* Right Side - Image */}
            <div className="lg:hidden justify-center">
              <Image
                src="/product/image_with_fallback3.png"
                alt="HRMS Dashboard - Employee data, charts, payroll, attendance, and KPI tracking"
                width={738}
                height={366}
                className="object-cover rounded-2xl"
              />
            </div>

            {/* Left Side - Text Content */}
            <div className="space-y-2 md:space-y-6 ">
              <div className="md:flex items-center gap-4">
                <div className="w-12 h-12 bg-[#FF9500] rounded-lg flex items-center justify-center shrink-0 mb-5 md:mb-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M16 7H22V13"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M22 7L13.5 15.5L8.5 10.5L2 17"
                      stroke="white"
                      strokeWidth="2.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-xl md:text-3xl font-medium text-gray-800">
                  Sales, CRM & Customer Engagement
                </h3>
              </div>

              <p className="md:text-lg text-gray-600 leading-relaxed md:pl-16">
                Manage leads, opportunities, orders, and invoicing while
                maintaining a unified customer view through integrated CRM and
                built-in email marketing capabilities.
              </p>
            </div>

            {/* Right Side - Image */}
            <div className="hidden lg:flex justify-center">
              <Image
                src="/product/image_with_fallback3.png"
                alt="HRMS Dashboard - Employee data, charts, payroll, attendance, and KPI tracking"
                width={738}
                height={366}
                className="object-cover rounded-2xl"
              />
            </div>
          </div>

          {/* 4th one */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center  mb-5 md:mb-8 lg:mb-20">
            {/* Right Side - Image */}
            <div className="flex justify-center">
              <Image
                src="/product/image_with_fallback4.png"
                alt="HRMS Dashboard - Employee data, charts, payroll, attendance, and KPI tracking"
                width={738}
                height={366}
                className="object-cover rounded-2xl"
              />
            </div>
            {/* Left Side - Text Content */}
            <div className="space-y-2 md:space-y-6 ">
              <div className="md:flex items-center gap-4">
                <div className="w-12 h-12 bg-[#FF9500] rounded-lg flex items-center justify-center shrink-0 mb-5 md:mb-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M8 22C8.55228 22 9 21.5523 9 21C9 20.4477 8.55228 20 8 20C7.44772 20 7 20.4477 7 21C7 21.5523 7.44772 22 8 22Z"
                      stroke="white"
                      strokeWidth="2.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M19 22C19.5523 22 20 21.5523 20 21C20 20.4477 19.5523 20 19 20C18.4477 20 18 20.4477 18 21C18 21.5523 18.4477 22 19 22Z"
                      stroke="white"
                      strokeWidth="2.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2.05078 2.05078H4.05078L6.71078 14.4708C6.80836 14.9256 7.06145 15.3323 7.42649 15.6206C7.79153 15.909 8.24569 16.0611 8.71078 16.0508H18.4908C18.946 16.05 19.3873 15.8941 19.7418 15.6086C20.0964 15.3232 20.3429 14.9253 20.4408 14.4808L22.0908 7.05078H5.12078"
                      stroke="white"
                      strokeWidth="2.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-xl md:text-3xl font-medium text-gray-800">
                  Purchase & Inventory Management
                </h3>
              </div>

              <p className="md:text-lg text-gray-600 leading-relaxed md:pl-16">
                Optimize procurement and inventory across locations with
                multi-warehouse control, stock transfers, valuation, vendor
                management, and real-time inventory insights.
              </p>
            </div>
          </div>

          {/* 5th one */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center  mb-5 md:mb-8 lg:mb-20">
            {/* Right Side - Image */}
            <div className="lg:hidden justify-center">
              <Image
                src="/product/image_with_fallback5.png"
                alt="HRMS Dashboard - Employee data, charts, payroll, attendance, and KPI tracking"
                width={738}
                height={366}
                className="object-cover rounded-2xl"
              />
            </div>

            {/* Left Side - Text Content */}
            <div className="space-y-2 md:space-y-6 ">
              <div className="md:flex items-center gap-4">
                <div className="w-12 h-12 bg-[#FF9500] rounded-lg flex items-center justify-center shrink-0 mb-5 md:mb-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M8.92188 3H3.92188C3.36959 3 2.92188 3.44772 2.92188 4V11C2.92188 11.5523 3.36959 12 3.92188 12H8.92188C9.47416 12 9.92188 11.5523 9.92188 11V4C9.92188 3.44772 9.47416 3 8.92188 3Z"
                      stroke="white"
                      strokeWidth="2.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M20 3H15C14.4477 3 14 3.44772 14 4V7C14 7.55228 14.4477 8 15 8H20C20.5523 8 21 7.55228 21 7V4C21 3.44772 20.5523 3 20 3Z"
                      stroke="white"
                      strokeWidth="2.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M20 12H15C14.4477 12 14 12.4477 14 13V20C14 20.5523 14.4477 21 15 21H20C20.5523 21 21 20.5523 21 20V13C21 12.4477 20.5523 12 20 12Z"
                      stroke="white"
                      strokeWidth="2.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.92188 16H3.92188C3.36959 16 2.92188 16.4477 2.92188 17V20C2.92188 20.5523 3.36959 21 3.92188 21H8.92188C9.47416 21 9.92188 20.5523 9.92188 20V17C9.92188 16.4477 9.47416 16 8.92188 16Z"
                      stroke="white"
                      strokeWidth="2.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-xl md:text-3xl font-medium text-gray-800">
                  KPI Management & Interactive Dashboards
                </h3>
              </div>

              <p className="md:text-lg text-gray-600 leading-relaxed md:pl-16">
                Monitor performance in real time with role-based dashboards,
                branch-level analytics, and enterprise-wide KPI visibility for
                informed decision-making.
              </p>
            </div>

            {/* Right Side - Image */}
            <div className="hidden lg:flex justify-center">
              <Image
                src="/product/image_with_fallback5.png"
                alt="HRMS Dashboard - Employee data, charts, payroll, attendance, and KPI tracking"
                width={738}
                height={366}
                className="object-cover rounded-2xl"
              />
            </div>
          </div>

          {/* 6th one */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center  mb-5 md:mb-8 lg:mb-20">
            {/* Right Side - Image */}
            <div className="flex justify-center">
              <Image
                src="/product/ImageWithFallback6.png"
                alt="HRMS Dashboard - Employee data, charts, payroll, attendance, and KPI tracking"
                width={738}
                height={366}
                className="object-cover rounded-2xl"
              />
            </div>
            {/* Left Side - Text Content */}
            <div className="space-y-2 md:space-y-6 ">
              <div className="md:flex items-center gap-4">
                <div className="w-12 h-12 bg-[#FF9500] rounded-lg flex items-center justify-center shrink-0 mb-5 md:mb-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_2758_11914)">
                      <path
                        d="M2.99169 16.3417C3.13873 16.7126 3.17147 17.119 3.08569 17.5087L2.02069 20.7987C1.98638 20.9655 1.99525 21.1384 2.04647 21.3008C2.09769 21.4633 2.18955 21.61 2.31336 21.727C2.43716 21.844 2.5888 21.9274 2.75389 21.9693C2.91898 22.0113 3.09205 22.0104 3.25669 21.9667L6.66969 20.9687C7.03741 20.8958 7.41822 20.9276 7.76869 21.0607C9.90408 22.0579 12.3231 22.2689 14.5988 21.6564C16.8746 21.0439 18.861 19.6473 20.2074 17.7131C21.5538 15.7788 22.1738 13.4311 21.958 11.0842C21.7422 8.73738 20.7044 6.54216 19.0278 4.88589C17.3511 3.22962 15.1434 2.21873 12.7941 2.03159C10.4448 1.84445 8.10483 2.49308 6.18713 3.86303C4.26944 5.23299 2.89722 7.23624 2.31258 9.51933C1.72795 11.8024 1.96846 14.2186 2.99169 16.3417Z"
                        stroke="white"
                        strokeWidth="2.3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2758_11914">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <h3 className="text-xl md:text-3xl font-medium text-gray-800">
                  Internal Communication & Collaboration
                </h3>
              </div>

              <p className="md:text-lg text-gray-600 leading-relaxed md:pl-16">
                Enable secure internal communication with built-in chat and
                collaboration tools that reduce dependency on external platforms
                and improve cross-team alignment.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
