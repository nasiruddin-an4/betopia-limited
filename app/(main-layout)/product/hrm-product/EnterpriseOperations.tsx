import Container from "@/components/layout/Container";
import { Users } from "lucide-react";
import Image from "next/image";

export default function EnterpriseOperations() {
  return (
    <div>
      <section className="pt-10 pb-4 md:py-20 bg-white">
        <Container>
          <div className="">
            <h2 className="text-center text-black text-[24px] md:text-[32px] lg:text-[52px] font-bold ">
              Complete HRM {}
              <span className="text-[#FF9500]">in One Platform</span>
            </h2>
            <div className="w-20 h-1 bg-[#FF9500] mx-auto mt-3 mb-8 lg:mb-16"></div>
            {/* <HeadingOne
  title="Complete HRM"
  highlight="in One Platform"
/> */}

            {/* <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-8  ">
            Complete HRM <span className="text-[#FF9500]">in One Platform</span>
          </h2>
          <div className="w-20 h-1 bg-[#FF9500] mx-auto mt-3 mb-10 md:mb-16"></div> */}
            {/* 1st one */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center  mb-5 md:mb-8 lg:mb-20">
              <div className="block lg:hidden">
                <div className="flex justify-center ">
                  <Image
                    src="/product/hrm/1.png"
                    alt="HRMS Dashboard - Employee data, charts, payroll, attendance, and KPI tracking"
                    width={738}
                    height={366}
                    className="object-cover rounded-2xl"
                  />
                </div>
              </div>
              {/* Left Side - Text Content */}
              <div className="space-y-2 md:space-y-6 ">
                <div className="md:flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#FF9500] rounded-lg flex items-center justify-center shrink-0 mb-5 md:mb-0">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl md:text-3xl font-medium text-gray-800">
                    Employee & Role Management
                  </h3>
                </div>

                <p className="md:text-lg text-gray-600 leading-relaxed md:pl-16">
                  Maintain a centralized employee database with structured
                  roles, departments, and hierarchies. HR teams can easily
                  manage employee profiles, job details, reporting lines, and
                  employment status across the organization.
                </p>
              </div>

              {/* Right Side - Image */}
              <div className="hidden lg:block">
                <div className="flex justify-center">
                  <Image
                    src="/product/hrm/1.png"
                    alt="HRMS Dashboard - Employee data, charts, payroll, attendance, and KPI tracking"
                    width={738}
                    height={366}
                    className="object-cover rounded-2xl"
                  />
                </div>
              </div>
            </div>

            {/* 2nd one */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center mb-5 md:mb-8 lg:mb-20">
              {/* Right Side - Image */}
              <div className="flex justify-center">
                <Image
                  src="/product/hrm/6.png"
                  alt="HRMS Dashboard - Employee data, charts, payroll, attendance, and KPI tracking"
                  width={738}
                  height={366}
                  className="object-cover rounded-2xl"
                />
              </div>
              {/* Left Side - Text Content */}
              <div className="space-y-2 md:space-y-6">
                <div className="md:flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#FF9500] rounded-lg flex items-center justify-center shrink-0 mb-5 md:mb-0">
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
                        d="M23 26H24V30"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M28 14V18"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M15 22H33"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M20 14V18"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M31 16H17C15.8954 16 15 16.8954 15 18V32C15 33.1046 15.8954 34 17 34H31C32.1046 34 33 33.1046 33 32V18C33 16.8954 32.1046 16 31 16Z"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl md:text-3xl font-medium text-gray-800">
                    Attendance, Leave & Availability Tracking
                  </h3>
                </div>

                <p className="md:text-lg text-gray-600 leading-relaxed md:pl-16">
                  Automate attendance tracking, leave requests, approvals, and
                  workforce availability. Gain real-time visibility into
                  employee presence, absences, and scheduling to ensure
                  operational continuity.
                </p>
              </div>
            </div>

            {/* 3rd one */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center  mb-5 md:mb-8 lg:mb-20">
              <div className="block lg:hidden">
                <div className="flex justify-center">
                  <Image
                    src="/product/hrm/10.png"
                    alt="HRMS Dashboard - Employee data, charts, payroll, attendance, and KPI tracking"
                    width={738}
                    height={366}
                    className="object-cover rounded-2xl"
                  />
                </div>
              </div>
              {/* Left Side - Text Content */}
              <div className="space-y-2 md:space-y-6">
                <div className="md:flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#FF9500] rounded-lg flex items-center justify-center shrink-0  mb-5 md:mb-0">
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
                        d="M18 34C17.4696 34 16.9609 33.7893 16.5858 33.4142C16.2107 33.0391 16 32.5304 16 32V16C16 15.4696 16.2107 14.9609 16.5858 14.5858C16.9609 14.2107 17.4696 14 18 14H26C26.3166 13.9995 26.6301 14.0616 26.9225 14.1828C27.215 14.3039 27.4806 14.4818 27.704 14.706L31.292 18.294C31.5168 18.5175 31.6952 18.7833 31.8167 19.0762C31.9382 19.369 32.0005 19.683 32 20V32C32 32.5304 31.7893 33.0391 31.4142 33.4142C31.0391 33.7893 30.5304 34 30 34H18Z"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M26 14V19C26 19.2652 26.1054 19.5196 26.2929 19.7071C26.4804 19.8946 26.7348 20 27 20H32"
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
                  </div>
                  <h3 className="text-xl md:text-3xl font-medium text-gray-800">
                    Recruitment & Onboarding
                  </h3>
                </div>

                <p className="md:text-lg text-gray-600 leading-relaxed md:pl-16">
                  Streamline hiring and onboarding workflows with structured
                  recruitment processes, role assignments, policy
                  acknowledgments, and onboarding checklists that ensure new
                  hires are productive from day one.
                </p>
              </div>

              {/* Right Side - Image */}
              <div className="hidden lg:block">
                <div className="flex justify-center">
                  <Image
                    src="/product/hrm/10.png"
                    alt="HRMS Dashboard - Employee data, charts, payroll, attendance, and KPI tracking"
                    width={738}
                    height={366}
                    className="object-cover rounded-2xl"
                  />
                </div>
              </div>
            </div>

            {/* 4th one */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center  mb-5 md:mb-8 lg:mb-20">
              {/* Right Side - Image */}
              <div className="flex justify-center">
                <Image
                  src="/product/hrm/8.png"
                  alt="HRMS Dashboard - Employee data, charts, payroll, attendance, and KPI tracking"
                  width={738}
                  height={366}
                  className="object-cover rounded-2xl"
                />
              </div>
              {/* Left Side - Text Content */}
              <div className="space-y-2 md:space-y-6">
                <div className="md:flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#FF9500] rounded-lg flex items-center justify-center shrink-0  mb-5 md:mb-0">
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
                        d="M32 17H16C14.8954 17 14 17.8954 14 19V29C14 30.1046 14.8954 31 16 31H32C33.1046 31 34 30.1046 34 29V19C34 17.8954 33.1046 17 32 17Z"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M14 22H34"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl md:text-3xl font-medium text-gray-800">
                    Payroll, Compensation & Benefits
                  </h3>
                </div>

                <p className="md:text-lg text-gray-600 leading-relaxed md:pl-16">
                  Enable payroll-ready HR operations by aligning attendance,
                  leave, and compensation data. Generate accurate records,
                  manage benefits, and simplify payroll processing through
                  structured HR data management.
                </p>
              </div>
            </div>

            {/* 5th one */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center  mb-5 md:mb-0">
              <div className="lg:hidden block">
                <div className="flex justify-center">
                  <Image
                    src="/product/hrm/9.png"
                    alt="HRMS Dashboard - Employee data, charts, payroll, attendance, and KPI tracking"
                    width={738}
                    height={366}
                    className="object-cover rounded-2xl"
                  />
                </div>
              </div>
              {/* Left Side - Text Content */}
              <div className="space-y-2 md:space-y-6">
                <div className="md:flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#FF9500] rounded-lg flex items-center justify-center shrink-0  mb-5 md:mb-0">
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
                        d="M19.2095 27L14.6595 19.14C14.4633 18.8009 14.371 18.4116 14.3941 18.0205C14.4172 17.6294 14.5547 17.2537 14.7895 16.94L16.3995 14.8C16.5858 14.5516 16.8273 14.35 17.105 14.2111C17.3828 14.0723 17.689 14 17.9995 14H29.9995C30.31 14 30.6162 14.0723 30.8939 14.2111C31.1716 14.35 31.4132 14.5516 31.5995 14.8L33.1995 16.94C33.4358 17.2527 33.575 17.6278 33.5999 18.019C33.6248 18.4101 33.5343 18.7999 33.3395 19.14L28.7895 27"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M23.0011 23.9992L17.1211 14.1992"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M25 23.9992L30.88 14.1992"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M20 19H28"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M24 34C26.7614 34 29 31.7614 29 29C29 26.2386 26.7614 24 24 24C21.2386 24 19 26.2386 19 29C19 31.7614 21.2386 34 24 34Z"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M24 30V28H23.5"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl md:text-3xl font-medium text-gray-800">
                    Performance & Talent Management
                  </h3>
                </div>

                <p className="md:text-lg text-gray-600 leading-relaxed md:pl-16">
                  Track employee performance, KPIs, and development goals.
                  Empower HR leaders with visibility into productivity, talent
                  growth, and workforce effectiveness.
                </p>
              </div>

              {/* Right Side - Image */}
              <div className="hidden lg:block">
                <div className="flex justify-center">
                  <Image
                    src="/product/hrm/9.png"
                    alt="HRMS Dashboard - Employee data, charts, payroll, attendance, and KPI tracking"
                    width={738}
                    height={366}
                    className="object-cover rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
