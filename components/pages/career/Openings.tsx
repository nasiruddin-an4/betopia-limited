"use client";
import PageSubtitle from "@/components/shared/heading/pageSubtitle";
import React, { useState } from "react";
import { BiBriefcase, BiMapPin } from "react-icons/bi";
import { FaBangladeshiTakaSign } from "react-icons/fa6";

interface JobPosting {
  title: string;
  badge: string;
  badgeColor: string;
  type: string;
  location: string;
  salary: string;
  description: string;
  requirements: string[];
}

const Openings: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const jobs: JobPosting[] = [
    {
      title: "Senior Frontend Developer",
      badge: "Hot",
      badgeColor: "bg-red-500",
      type: "Full-time",
      location: "Dhaka, Bangladesh",
      salary: "Negotiable",
      description:
        "We are looking for an experienced Frontend Developer to join our dynamic team. You will work on cutting-edge web applications using React, TypeScript, and modern tools.",
      requirements: [
        "5+ years of experience in frontend development",
        "Expert knowledge of React and TypeScript",
        "Experience with modern build tools and workflows",
        "Strong problem-solving and communication skills",
      ],
    },
    {
      title: "Sales Manager",
      badge: "New",
      badgeColor: "bg-green-500",
      type: "Full-time",
      location: "Remote",
      salary: "Negotiable",
      description:
        "Join our sales team to help businesses transform their operations with our innovative SaaS solutions. Build relationships and drive growth.",
      requirements: [
        "3+ years of B2B sales experience",
        "Proven track record in SaaS sales",
        "Excellent communication and negotiation skills",
        "Self-motivated with a results-driven approach",
      ],
    },
    {
      title: "Product Manager",
      badge: "Featured",
      badgeColor: "bg-blue-500",
      type: "Full-time",
      location: "Hybrid",
      salary: "Negotiable",
      description:
        "Lead product strategy and development for our enterprise solutions. Work closely with engineering, design, and business teams to deliver exceptional products.",
      requirements: [
        "4+ years of product management experience",
        "Strong understanding of SaaS business models",
        "Data-driven decision making skills",
        "Experience with Agile methodologies",
      ],
    },
    {
      title: "Senior Frontend Developer",
      badge: "Hot",
      badgeColor: "bg-red-500",
      type: "Full-time",
      location: "Dhaka, Bangladesh",
      salary: "Negotiable",
      description:
        "We are looking for an experienced Frontend Developer to join our dynamic team. You will work on cutting-edge web applications using React, TypeScript, and modern tools.",
      requirements: [
        "5+ years of experience in frontend development",
        "Expert knowledge of React and TypeScript",
        "Experience with modern build tools and workflows",
        "Strong problem-solving and communication skills",
      ],
    },
    {
      title: "Sales Manager",
      badge: "New",
      badgeColor: "bg-green-500",
      type: "Full-time",
      location: "Remote",
      salary: "Negotiable",
      description:
        "Join our sales team to help businesses transform their operations with our innovative SaaS solutions. Build relationships and drive growth.",
      requirements: [
        "3+ years of B2B sales experience",
        "Proven track record in SaaS sales",
        "Excellent communication and negotiation skills",
        "Self-motivated with a results-driven approach",
      ],
    },
  ];

  const visibleJobs = showAll ? jobs : jobs.slice(0, 3);

  return (
    <div id="hiring" className=" bg-gray-100 py-10 lg:py-20 px-4">
      <div className="max-w-[1460px] w-11/12 mx-auto">
        {/* Job Cards */}
        <div className="space-y-6">
          {visibleJobs.map((job, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm p-6 md:p-8 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Job Header */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 flex-1">
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800 leading-tight">
                    {job.title}
                  </h2>
                  <span
                    className={`${job.badgeColor} text-white text-xs w-fit sm:text-sm px-3 py-1 rounded-full whitespace-nowrap`}
                  >
                    {job.badge}
                  </span>
                </div>

                {/* Apply Button - Full width on mobile, normal on larger */}
                <button className="w-full sm:w-auto bg-linear-to-r from-[#FF9500] to-[#F54900] text-white font-medium px-6 py-3 rounded-lg transition-colors hidden md:block">
                  Apply Now
                </button>
              </div>

              {/* Meta Info */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 text-gray-600">
                <div className="flex items-center gap-2">
                  <BiBriefcase className="text-[#FF9500] text-sm lg:text-xl flex-shrink-0" />
                  <span className="text-sm lg:text-xl">{job.type}</span>
                </div>
                <div className="flex items-center gap-2">
                  <BiMapPin className="text-[#FF9500] text-sm lg:text-xl flex-shrink-0" />
                  <span className="text-sm lg:text-xl">{job.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaBangladeshiTakaSign className="text-[#FF9500] text-sm lg:text-xl flex-shrink-0" />
                  <span className="text-sm lg:text-xl">{job.salary}</span>
                </div>
              </div>

              {/* Description */}

              <PageSubtitle
                text={job.description}
                className="text-gray-700 leading-relaxed mb-6"
              />

              {/* Key Requirements */}
              <div>
                <p className="font-semibold text-gray-800 mb-3 text-xl md:text-2xl lg:text-3xl">
                  Key Requirements:
                </p>
                <ul className="space-y-2 pl-1">
                  {job.requirements.map((req, i) => (
                    <li key={i} className="flex items-start text-gray-700">
                      <span className="text-[#FF9500] mr-3 mt-1.5 flex-shrink-0">
                        •
                      </span>
                      <span className="text-base md:text-lg lg:text-2xl leading-relaxed">
                        {req}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <button className="w-full sm:w-auto bg-linear-to-r from-[#FF9500] to-[#F54900] text-white font-medium px-6 py-3 rounded-lg transition-colors md:hidden block mt-5">
                Apply Now
              </button>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {!showAll && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2
                  rounded-full px-8 py-3
                  text-sm font-semibold text-white
                  bg-linear-to-r from-[#FF9500] to-[#F54900]
                  shadow-lg transition-all duration-300
                  hover:scale-105 hover:shadow-xl active:scale-95"
            >
              Load More Positions
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Openings;

// "use client";
// import React, { useState } from "react";
// import { BiBriefcase, BiMapPin } from "react-icons/bi";
// import { FaDollarSign } from "react-icons/fa";

// interface JobPosting {
//   title: string;
//   badge: string;
//   badgeColor: string;
//   type: string;
//   location: string;
//   salary: string;
//   description: string;
//   requirements: string[];
// }

// const Openings: React.FC = () => {
//   const [showAll, setShowAll] = useState(false);
//   const jobs: JobPosting[] = [
//     {
//       title: "Senior Frontend Developer",
//       badge: "Hot",
//       badgeColor: "bg-red-500",
//       type: "Full-time",
//       location: "Dhaka, Bangladesh",
//       salary: "$60k - $80k",
//       description:
//         "We are looking for an experienced Frontend Developer to join our dynamic team. You will work on cutting-edge web applications using React, TypeScript, and modern tools.",
//       requirements: [
//         "5+ years of experience in frontend development",
//         "Expert knowledge of React and TypeScript",
//         "Experience with modern build tools and workflows",
//         "Strong problem-solving and communication skills",
//       ],
//     },
//     {
//       title: "Sales Manager",
//       badge: "New",
//       badgeColor: "bg-green-500",
//       type: "Full-time",
//       location: "Remote",
//       salary: "$50k - $70k",
//       description:
//         "Join our sales team to help businesses transform their operations with our innovative SaaS solutions. Build relationships and drive growth.",
//       requirements: [
//         "3+ years of B2B sales experience",
//         "Proven track record in SaaS sales",
//         "Excellent communication and negotiation skills",
//         "Self-motivated with a results-driven approach",
//       ],
//     },
//     {
//       title: "Product Manager",
//       badge: "Featured",
//       badgeColor: "bg-blue-500",
//       type: "Full-time",
//       location: "Hybrid",
//       salary: "$70k - $90k",
//       description:
//         "Lead product strategy and development for our enterprise solutions. Work closely with engineering, design, and business teams to deliver exceptional products.",
//       requirements: [
//         "4+ years of product management experience",
//         "Strong understanding of SaaS business models",
//         "Data-driven decision making skills",
//         "Experience with Agile methodologies",
//       ],
//     },
//     {
//       title: "Senior Frontend Developer",
//       badge: "Hot",
//       badgeColor: "bg-red-500",
//       type: "Full-time",
//       location: "Dhaka, Bangladesh",
//       salary: "$60k - $80k",
//       description:
//         "We are looking for an experienced Frontend Developer to join our dynamic team. You will work on cutting-edge web applications using React, TypeScript, and modern tools.",
//       requirements: [
//         "5+ years of experience in frontend development",
//         "Expert knowledge of React and TypeScript",
//         "Experience with modern build tools and workflows",
//         "Strong problem-solving and communication skills",
//       ],
//     },
//     {
//       title: "Sales Manager",
//       badge: "New",
//       badgeColor: "bg-green-500",
//       type: "Full-time",
//       location: "Remote",
//       salary: "$50k - $70k",
//       description:
//         "Join our sales team to help businesses transform their operations with our innovative SaaS solutions. Build relationships and drive growth.",
//       requirements: [
//         "3+ years of B2B sales experience",
//         "Proven track record in SaaS sales",
//         "Excellent communication and negotiation skills",
//         "Self-motivated with a results-driven approach",
//       ],
//     },
//   ];

//   const visibleJobs = showAll ? jobs : jobs.slice(0, 3);

//   return (
//     <div id="hiring" className="min-h-screen bg-gray-100 py-10 lg:py-20 px-4">
//       <div className="max-w-[1460px] mx-auto">
//         {/* Job Cards */}
//         <div className="space-y-6">
//           {visibleJobs.map((job, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-xl shadow-sm p-6 md:p-8 hover:shadow-lg transition-shadow duration-300"
//             >
//               {/* Job Header */}
//               <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
//                 <div className="flex flex-col sm:flex-row sm:items-center gap-3 flex-1">
//                   <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800 leading-tight">
//                     {job.title}
//                   </h2>
//                   <span
//                     className={`${job.badgeColor} text-white text-xs w-fit sm:text-sm px-3 py-1 rounded-full whitespace-nowrap`}
//                   >
//                     {job.badge}
//                   </span>
//                 </div>

//                 {/* Apply Button - Full width on mobile, normal on larger */}
//                 <button className="w-full sm:w-auto bg-linear-to-r from-[#FF9500] to-[#F54900] text-white font-medium px-6 py-3 rounded-lg transition-colors">
//                   Apply Now
//                 </button>
//               </div>

//               {/* Meta Info */}
//               <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 text-gray-600">
//                 <div className="flex items-center gap-2">
//                   <BiBriefcase className="text-[#FF9500] text-lg flex-shrink-0" />
//                   <span className="text-sm md:text-base">{job.type}</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <BiMapPin className="text-[#FF9500] text-lg flex-shrink-0" />
//                   <span className="text-sm md:text-base">{job.location}</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <FaDollarSign className="text-[#FF9500] text-lg flex-shrink-0" />
//                   <span className="text-sm md:text-base">{job.salary}</span>
//                 </div>
//               </div>

//               {/* Description */}
//               <p className="text-gray-700 text-base leading-relaxed mb-6">
//                 {job.description}
//               </p>

//               {/* Key Requirements */}
//               <div>
//                 <p className="font-semibold text-gray-800 mb-3 text-lg">
//                   Key Requirements:
//                 </p>
//                 <ul className="space-y-2 pl-1">
//                   {job.requirements.map((req, i) => (
//                     <li key={i} className="flex items-start text-gray-700">
//                       <span className="text-[#FF9500] mr-3 mt-1.5 flex-shrink-0">
//                         •
//                       </span>
//                       <span className="text-sm md:text-base leading-relaxed">
//                         {req}
//                       </span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Load More Button */}
//         {!showAll && (
//           <div className="text-center mt-8">
//             <button
//               onClick={() => setShowAll(true)}
//               className="inline-flex items-center gap-2
//                   rounded-full px-8 py-3
//                   text-sm font-semibold text-white
//                   bg-linear-to-r from-[#FF9500] to-[#F54900]
//                   shadow-lg transition-all duration-300
//                   hover:scale-105 hover:shadow-xl active:scale-95"
//             >
//               Load More Positions
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Openings;
