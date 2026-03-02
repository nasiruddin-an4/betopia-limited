import React from 'react'


type FeatureCardProps = {
  bg: string
  icon: React.ReactNode
  title: string
  description: string
}


export const features = [
  {
    bg: "bg-[#2B7FFF1A]",
    title: "Comprehensive HRM",
    description:
      "An all-in-one suite covering employee management, attendance, leave, payroll, and self-service built for seamless operations.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M18.4838 24.2599V21.9494C18.4838 20.7239 17.997 19.5485 17.1304 18.6819C16.2638 17.8153 15.0884 17.3285 13.8629 17.3285H6.93149C5.70594 17.3285 4.53058 17.8153 3.66399 18.6819C2.79739 19.5485 2.31055 20.7239 2.31055 21.9494V24.2599" stroke="#2B7FFF" strokeWidth="2.31047" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18.4834 3.61365C19.4743 3.87054 20.3519 4.44919 20.9783 5.25877C21.6048 6.06836 21.9447 7.06305 21.9447 8.08672C21.9447 9.11038 21.6048 10.1051 20.9783 10.9147C20.3519 11.7242 19.4743 12.3029 18.4834 12.5598" stroke="#2B7FFF" strokeWidth="2.31047" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M25.4149 24.26V21.9495C25.4142 20.9257 25.0734 19.9311 24.4461 19.1219C23.8188 18.3127 22.9406 17.7347 21.9492 17.4788" stroke="#2B7FFF" strokeWidth="2.31047" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10.3973 12.7076C12.9494 12.7076 15.0182 10.6387 15.0182 8.08664C15.0182 5.53456 12.9494 3.4657 10.3973 3.4657C7.84523 3.4657 5.77637 5.53456 5.77637 8.08664C5.77637 10.6387 7.84523 12.7076 10.3973 12.7076Z" stroke="#2B7FFF" strokeWidth="2.31047" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    bg: "bg-[#00C9501A]",
    title: "Data-Driven Intelligence",
    description:
      "Real-time oversight through MSS tools, reports, and analytics, enabling smarter workforce decisions",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M9.24219 2.31042V6.93136" stroke="#2DB67C" strokeWidth="2.31047" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18.4834 2.31042V6.93136" stroke="#2DB67C" strokeWidth="2.31047" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21.9496 4.62097H5.77629C4.50025 4.62097 3.46582 5.6554 3.46582 6.93144V23.1047C3.46582 24.3808 4.50025 25.4152 5.77629 25.4152H21.9496C23.2256 25.4152 24.26 24.3808 24.26 23.1047V6.93144C24.26 5.6554 23.2256 4.62097 21.9496 4.62097Z" stroke="#2DB67C" strokeWidth="2.31047" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3.46582 11.5524H24.26" stroke="#2DB67C" strokeWidth="2.31047" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    bg: "bg-[#FAF5FF]",
    title: "Automation & Compliance",
    description:
      "Payroll, overtime, and other HR tasks run automatically ensuring speed, accuracy, and regulatory compliance.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M17.3287 2.31042H6.93156C6.31879 2.31042 5.73111 2.55385 5.29781 2.98715C4.86452 3.42044 4.62109 4.00812 4.62109 4.62089V23.1046C4.62109 23.7174 4.86452 24.3051 5.29781 24.7384C5.73111 25.1717 6.31879 25.4151 6.93156 25.4151H20.7944C21.4072 25.4151 21.9948 25.1717 22.4281 24.7384C22.8614 24.3051 23.1048 23.7174 23.1048 23.1046V8.0866L17.3287 2.31042Z" stroke="#FF9500" strokeWidth="2.31047" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16.1729 2.31042V6.93136C16.1729 7.54414 16.4163 8.13182 16.8496 8.56511C17.2829 8.99841 17.8705 9.24183 18.4833 9.24183H23.1043" stroke="#FF9500" strokeWidth="2.31047" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11.5527 10.3971H9.24219" stroke="#FF9500" strokeWidth="2.31047" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18.4841 15.0181H9.24219" stroke="#FF9500" strokeWidth="2.31047" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18.4841 19.639H9.24219" stroke="#FF9500" strokeWidth="2.31047" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    bg: "bg-[#FF69001A]",
    title: "Engagement & Growth",
    description:
      "Streamlined HR processes that enhance employee satisfaction while driving measurable business results.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path
          d="M14 2v24M20 6H11a4 4 0 000 8h6a4 4 0 010 8H6"
          stroke="#FF6900"
          strokeWidth="2.3"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  // {
  //   bg: "bg-[#FDF2F8]",
  //   title: "Performance Reviews",
  //   description:
  //     "Structured performance evaluation system with goal setting and feedback management.",
  //   icon: (
  //     <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
  //       <path d="M17.8792 14.891L19.6294 24.7405C19.649 24.8565 19.6328 24.9757 19.5828 25.0822C19.5328 25.1887 19.4515 25.2774 19.3498 25.3364C19.248 25.3954 19.1307 25.422 19.0135 25.4125C18.8962 25.4031 18.7847 25.3581 18.6937 25.2835L14.5579 22.1794C14.3583 22.0302 14.1158 21.9496 13.8665 21.9496C13.6173 21.9496 13.3748 22.0302 13.1751 22.1794L9.03246 25.2823C8.94157 25.3568 8.83014 25.4017 8.71303 25.4112C8.59593 25.4207 8.47873 25.3942 8.37705 25.3353C8.27538 25.2764 8.19408 25.188 8.14399 25.0817C8.0939 24.9754 8.07741 24.8564 8.09672 24.7405L9.84575 14.891" stroke="#F6339A" strokeWidth="2.31047" strokeLinecap="round" strokeLinejoin="round" />
  //       <path d="M13.863 16.1734C17.6912 16.1734 20.7945 13.0701 20.7945 9.24195C20.7945 5.41384 17.6912 2.31055 13.863 2.31055C10.0349 2.31055 6.93164 5.41384 6.93164 9.24195C6.93164 13.0701 10.0349 16.1734 13.863 16.1734Z" stroke="#F6339A" strokeWidth="2.31047" strokeLinecap="round" strokeLinejoin="round" />
  //     </svg>
  //   ),
  // },
  // {
  //   bg: "bg-[#ECFEFF]",
  //   title: "Analytics & Reports",
  //   description:
  //     "Comprehensive HR analytics with customizable reports and data-driven insights.",
  //   icon: (
  //     <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
  //       <path d="M18.4834 8.08667H25.4148V15.0181" stroke="#00B8DB" strokeWidth="2.31047" strokeLinecap="round" strokeLinejoin="round" />
  //       <path d="M25.4152 8.08667L15.5957 17.9062L9.81957 12.13L2.31055 19.639" stroke="#00B8DB" strokeWidth="2.31047" strokeLinecap="round" strokeLinejoin="round" />
  //     </svg>
  //   ),
  // },
  // {
  //   bg: "bg-[#EEF2FF]",
  //   title: "Time Tracking",
  //   description:
  //     "Accurate time and project tracking with overtime calculations and timesheet approvals.",
  //   icon: (
  //     <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
  //       <path
  //         d="M14 6v8l4 2M14 2a12 12 0 110 24 12 12 0 010-24z"
  //         stroke="#615FFF"
  //         strokeWidth="2.3"
  //         strokeLinecap="round"
  //       />
  //     </svg>
  //   ),
  // },
  // {
  //   bg: "bg-[#FEF2F2]",
  //   title: "Recruitment",
  //   description:
  //     "End-to-end recruitment management from job posting to candidate onboarding.",
  //   icon: (
  //     <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
  //       <path d="M3.46582 3.46582V21.9496C3.46582 22.5624 3.70924 23.15 4.14254 23.5833C4.57584 24.0166 5.16352 24.26 5.77629 24.26H24.26" stroke="#FB2C36" strokeWidth="2.31047" strokeLinecap="round" strokeLinejoin="round" />
  //       <path d="M20.7939 19.6391V10.3972" stroke="#FB2C36" strokeWidth="2.31047" strokeLinecap="round" strokeLinejoin="round" />
  //       <path d="M15.0186 19.6391V5.77625" stroke="#FB2C36" strokeWidth="2.31047" strokeLinecap="round" strokeLinejoin="round" />
  //       <path d="M9.24219 19.639V16.1733" stroke="#FB2C36" strokeWidth="2.31047" strokeLinecap="round" strokeLinejoin="round" />
  //     </svg>
  //   ),
  // },
];




const FeatureCard = ({ bg, icon, title, description }: FeatureCardProps) => {
  return (
    <div className={`p-9 rounded-2xl border-2 border-gray-200 hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-105 ${bg}`}>
      <div className="p-3 rounded-xl w-full bg-[#ffffff] flex items-center gap-3">
        {icon}
      <h5 className="text-base md:text-xl font-normal  text-[#0F172B]">
        {title}
      </h5>
      </div>


      <p className="mt-10 text-xs md:text-sm lg:text-base  text-[#45556C]">
        {description}
      </p>
    </div>
  )
}




export default function ComprehensiveFeatures() {
  return (
    <div className="bg-[#fffefd]">

      <div className='max-w-[1480px] mx-auto py-20'>
        <h3 className='text-center text-black text-3xl md:text-5xl lg:text-[52px]  font-normal'>Our Comprehensive <span className='text-[#FF9500]'>Features</span> </h3>
        <p
          className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl lg:text-2xl text-center font-normal  text-[##45556C] mx-auto max-w-[1000px] px-2 sm:px-4"
        >
          Everything you need to manage your workforce efficiently in one integrated platform
        </p>

        {/*  */}




        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 mt-20'>
          {features.map((item, index) => (
            <FeatureCard
              key={index}
              bg={item.bg}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
