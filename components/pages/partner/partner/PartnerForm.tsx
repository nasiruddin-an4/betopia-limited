// "use client";

// import UnderlineSectionTitle from "@/components/shared/UnderlineSectionTitle";
// import Link from "next/link";
// import { FaArrowRight } from "react-icons/fa";
// import { FiPhone } from "react-icons/fi";
// import Swal from "sweetalert2";

// export default function PartnerForm() {
//   const handleApply = (e: { preventDefault: () => void }) => {
//     e.preventDefault(); // stop page refresh (important!)

//     Swal.fire({
//       title: "Application Submitted!",
//       text: "Our partnership team will contact you within 24 hours.",
//       icon: "success",
//       confirmButtonText: "Okay",
//     });
//   };
//   return (
//     <section
//       className="relative flex items-center justify-center py-10 lg:py-20 px-4 overflow-hidden bg-[linear-gradient(155deg,#101828_0%,#1C398E_45%,#101828_100%)]
// "
//     >
//       {/* Background Video */}
//       {/* <video
//         className="absolute inset-0 w-full h-full object-cover"
//         autoPlay
//         loop
//         muted
//         playsInline
//       >
//         <source src="/videos/partner/form.mp4" type="video/mp4" />
//       </video> */}

//       {/* Dark Overlay */}
//       {/* <div className="absolute inset-0 bg-black/40" /> */}

//       {/* Content */}
//       <div className="relative z-10 max-w-[963px] w-11/12 mx-auto text-white">
//         {/* Title */}
//         <div className="mb-6 lg:mb-10">
//           <h2 className="text-2xl md:text-5xl lg:text-[52px] font-bold text-white text-center">
//             Ready to Become a{" "}
//             <span className="text-[#FF9500]"> Betopia Partner? </span>
//           </h2>
//           <span className="block mx-auto mt-[21px] rounded-full w-[103.86px] h-[5.19px] bg-[#FF9500]" />
//         </div>
//         <p className="text-white/80 text-center text-lg md:text-2xl mb-0 lg:mb-[55px]">
//           Fill out the form below and our partnership team will contact you
//           within 24 hours
//         </p>
//         {/* Form Card */}
//         <div className="mt-8 lg:mt-12 rounded-2xl border-[1.16px] border-[#FFFFFF33] bg-[#FFFFFF1A] backdrop-blur-xl p-6 md:p-[38px] ">
//           <form
//             onSubmit={handleApply}
//             className="grid grid-cols-1 md:grid-cols-2 gap-6"
//           >
//             {/* Name */}
//             <div>
//               <label className=" text-white text-lg md:text-2xl">Name *</label>
//               <input
//                 type="text"
//                 placeholder="Your full name"
//                 className="mt-2 w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 text-lg md:text-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#FF9500]"
//               />
//             </div>

//             {/* Company */}
//             <div>
//               <label className=" text-white text-lg md:text-2xl">
//                 Company *
//               </label>
//               <input
//                 type="text"
//                 placeholder="Company name"
//                 className="mt-2 w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 text-lg md:text-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#FF9500]"
//               />
//             </div>

//             {/* Email */}
//             <div>
//               <label className=" text-white text-lg md:text-2xl">Email *</label>
//               <input
//                 type="email"
//                 placeholder="your.email@company.com"
//                 className="mt-2 w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 text-lg md:text-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#FF9500]"
//               />
//             </div>

//             {/* Phone */}
//             <div>
//               <label className=" text-white text-lg md:text-2xl">Phone *</label>
//               <input
//                 type="tel"
//                 placeholder="+1 (555) 123-4567"
//                 className="mt-2 w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 text-lg md:text-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#FF9500]"
//               />
//             </div>

//             {/* Partnership Type */}
//             <div className="md:col-span-2">
//               <label className=" text-white text-lg md:text-2xl">
//                 Partnership Type *
//               </label>
//               <select className="mt-2 w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 text-lg md:text-2xl text-white focus:outline-none ">
//                 <option className="bg-black">Select Type</option>
//                 <option className="bg-black">White Label Partner</option>
//                 <option className="bg-black">Co-Branded Partner</option>
//               </select>
//             </div>

//             {/* Comments */}
//             <div className="md:col-span-2">
//               <label className=" text-white text-lg md:text-2xl">
//                 Comments
//               </label>
//               <textarea
//                 rows={4}
//                 placeholder="Tell us about your business and partnership goals..."
//                 className="mt-2 w-full rounded-lg bg-white/10 border border-white/10 px-4 py-3 text-lg md:text-2xl text-white placeholder-gray-400 focus:outline-none
//                 focus:ring-1 focus:ring-[#FF9500]"
//               />
//             </div>

//             {/* Buttons */}
//             <div className="flex items-center justify-center  md:col-span-2">
//               {/* <button 
//               type="submit"
//                 className="w-full md:w-[434px] flex items-center justify-center gap-3 font-semibold text-lg md:text-2xl
//      bg-linear-to-r from-[#FF9500] to-[#F54900] cursor-pointer
//     px-4 py-2 md:py-4 md:px-6 rounded-[10px]"
//               >
//                 Apply Now & Start Earning <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="26"
//                 height="26"
//                 viewBox="0 0 26 26"
//                 fill="none"
//               >
//                 <path
//                   d="M10.8335 7.58331L16.2502 13L10.8335 18.4166"
//                   stroke="white"
//                   strokeWidth="1.95"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//               </svg>
//               </button> */}
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-[19px] lg:mt-4 w-full md:col-span-2">
//               <button
//                 className="w-full flex items-center justify-center gap-3 font-bold lg:text-[21px]
//   bg-linear-to-r from-[#FF9500] to-[#F54900] cursor-pointer
//     px-4 py-2 md:py-4 md:px-6 rounded-[10px]"
//               >
//                 Apply Now & Start Earning{" "}
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="26"
//                   height="26"
//                   viewBox="0 0 26 26"
//                   fill="none"
//                 >
//                   <path
//                     d="M10.8335 7.58331L16.2502 13L10.8335 18.4166"
//                     stroke="white"
//                     strokeWidth="1.95"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                 </svg>
//               </button>

//               <Link
//                 href="/meeting-scheduler"
//                 className="w-full flex items-center justify-center gap-3 font-bold lg:text-[21px]
//     bg-white/10 border-[2.31px] border-white/20
//     px-4 py-2 md:py-4 md:px-6 rounded-[10px]"
//               >
//                 <FiPhone /> Schedule a 1:1 Consultation
//               </Link>
//             </div>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// }














/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Link from "next/link";
import { FiPhone } from "react-icons/fi";
import Swal from "sweetalert2";
import { useState } from "react";

export default function PartnerForm() {
const [isSubmitting, setIsSubmitting] = useState(false);

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setIsSubmitting(true);

  const form = e.currentTarget;
  const formData = new FormData(form);

  const payload = {
    name: formData.get("name"),
    company: formData.get("company"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    partnershipType: formData.get("partnershipType"),
    comments: formData.get("comments"),
  };

  try {
    await fetch(
      `${process.env.NEXT_PUBLIC_NODE_API_URL}/request/partner`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    );

    Swal.fire("Success", "Form submitted successfully", "success");
    form.reset();
  } catch (error) {
    Swal.fire("Error", "Something went wrong", "error");
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <section
      className="relative flex items-center justify-center py-10 lg:py-20 px-4 overflow-hidden bg-[linear-gradient(155deg,#101828_0%,#1C398E_45%,#101828_100%)]"
    >
      <div className="relative z-10 max-w-[963px] w-11/12 mx-auto text-white">
        <div className="mb-6 lg:mb-10">
          <h2 className="text-2xl md:text-5xl lg:text-[52px] font-bold text-white text-center">
            Ready to Become a <span className="text-[#FF9500]">Betopia Partner?</span>
          </h2>
          <span className="block mx-auto mt-[21px] rounded-full w-[103.86px] h-[5.19px] bg-[#FF9500]" />
        </div>

        <p className="text-white/80 text-center text-lg md:text-2xl mb-0 lg:mb-[55px]">
          Fill out the form below and our partnership team will contact you within 24 hours
        </p>

        <div className="mt-8 lg:mt-12 rounded-2xl border-[1.16px] border-[#FFFFFF33] bg-[#FFFFFF1A] backdrop-blur-xl p-6 md:p-[38px]">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-white text-lg md:text-2xl">Name *</label>
              <input
                type="text"
                name="name"
                required
                placeholder="Your full name"
                className="mt-2 w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 text-lg md:text-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#FF9500]"
              />
            </div>

            <div>
              <label className="text-white text-lg md:text-2xl">Company *</label>
              <input
                type="text"
                name="company"
                required
                placeholder="Company name"
                className="mt-2 w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 text-lg md:text-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#FF9500]"
              />
            </div>

            <div>
              <label className="text-white text-lg md:text-2xl">Email *</label>
              <input
                type="email"
                name="email"
                required
                placeholder="your.email@company.com"
                className="mt-2 w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 text-lg md:text-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#FF9500]"
              />
            </div>

            <div>
              <label className="text-white text-lg md:text-2xl">Phone *</label>
              <input
                type="tel"
                name="phone"
                required
                placeholder="+880 1X XXX XXXX"
                className="mt-2 w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 text-lg md:text-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#FF9500]"
              />
            </div>

            <div className="md:col-span-2">
              <label className="text-white text-lg md:text-2xl">Partnership Type *</label>
              <select
                name="partnershipType"
                required
                className="mt-2 w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 text-lg md:text-2xl text-white focus:outline-none focus:ring-1 focus:ring-[#FF9500]"
              >
                <option value="" disabled className="bg-black text-gray-400">
                  Select Type
                </option>
                <option value="White Label Partner" className="bg-black">
                  White Label Partner
                </option>
                <option value="Co-Branded Partner" className="bg-black">
                  Co-Branded Partner
                </option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="text-white text-lg md:text-2xl">Comments</label>
              <textarea
                name="comments"
                rows={4}
                placeholder="Tell us about your business and partnership goals..."
                className="mt-2 w-full rounded-lg bg-white/10 border border-white/10 px-4 py-3 text-lg md:text-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#FF9500]"
              />
            </div>

            <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-[19px] mt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex items-center justify-center gap-3 font-bold text-lg md:text-[21px] px-6 py-3 md:py-4 rounded-[10px] transition-all ${
                  isSubmitting
                    ? "bg-gray-600 cursor-not-allowed opacity-70"
                    : "bg-linear-to-r from-[#FF9500] to-[#F54900] hover:brightness-110"
                }`}
              >
                {isSubmitting ? "Submitting..." : "Apply Now & Start Earning"}
                {!isSubmitting && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                  >
                    <path
                      d="M10.8335 7.58331L16.2502 13L10.8335 18.4166"
                      stroke="white"
                      strokeWidth="1.95"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>

              <Link
                href="/meeting-scheduler"
                className="w-full flex items-center justify-center gap-3 font-bold text-lg md:text-[21px] bg-white/10 border-2 border-white/30 px-6 py-3 md:py-4 rounded-[10px] hover:bg-white/20 transition"
              >
                <FiPhone className="text-xl" /> Schedule a 1:1 Consultation
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
