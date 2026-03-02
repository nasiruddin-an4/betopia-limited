/* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";

// import Link from "next/link";
// import { IoIosArrowDown } from "react-icons/io";

// export default function ContactForm() {
//   return (
//     <section className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-10 lg:py-20">
//       <div className="w-full max-w-2xl">
//         <div className="">
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-5">
//             Consultation Request
//           </h2>
//           <p className="text-lg text-gray-600 mb-10">
//             Fill out the form below to schedule a one-on-one consultation with a
//             Betopia Expert.
//           </p>

//           <form className="space-y-8">
//             {/* Name */}
//             <div>
//               <label
//                 htmlFor="name"
//                 className="block text-sm font-medium text-gray-700 mb-2"
//               >
//                 Name <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 placeholder="Your full name"
//                 required
//                 className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF9500] focus:border-transparent transition"
//               />
//             </div>

//             {/* Company */}
//             <div>
//               <label
//                 htmlFor="company"
//                 className="block text-sm font-medium text-gray-700 mb-2"
//               >
//                 Company <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="text"
//                 id="company"
//                 placeholder="Your company name"
//                 required
//                 className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF9500] focus:border-transparent transition"
//               />
//             </div>

//             {/* Email */}
//             <div>
//               <label
//                 htmlFor="email"
//                 className="block text-sm font-medium text-gray-700 mb-2"
//               >
//                 Email <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 placeholder="your.email@company.com"
//                 required
//                 className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF9500] focus:border-transparent transition"
//               />
//             </div>

//             {/* Phone */}
//             <div>
//               <label
//                 htmlFor="phone"
//                 className="block text-sm font-medium text-gray-700 mb-2"
//               >
//                 Phone Number <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="tel"
//                 id="phone"
//                 placeholder="+1 (555) 123-4567"
//                 required
//                 className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF9500] focus:border-transparent transition"
//               />
//             </div>

//             {/* Inquiry Type */}
//             <div>
//               <label
//                 htmlFor="inquiry"
//                 className="block text-sm font-medium text-gray-700 mb-2"
//               >
//                 Inquiry Type <span className="text-red-500">*</span>
//               </label>
//               <div className="relative">
//                 <select
//                   id="inquiry"
//                   required
//                   className="w-full px-5 py-4 pr-12 appearance-none rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF9500] focus:border-transparent transition"
//                 >
//                   <option value="" disabled selected>
//                     Select an option
//                   </option>
//                   <option>Cloud Modernization</option>
//                   <option>Cybersecurity & Compliance</option>
//                   <option>AI & Analytics</option>
//                   <option>Resource Augmentation</option>
//                   <option>General Inquiry</option>
//                 </select>
//                 <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
//                   <IoIosArrowDown />
//                 </span>
//               </div>
//             </div>

//             {/* Message */}
//             <div>
//               <label
//                 htmlFor="massage"
//                 className="block text-sm font-medium text-gray-700 mb-2"
//               >
//                 Message / Requirements <span className="text-red-500">*</span>
//               </label>
//               <textarea
//                 id="massage"
//                 rows={6}
//                 placeholder="Tell us about your project or inquiry..."
//                 required
//                 className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF9500] focus:border-transparent transition resize-none"
//               />
//             </div>

//             {/* Submit Button */}
//             <div className="pt-6">
//               <button
//                 type="submit"
//                 className="w-full bg-linear-to-r from-[#FF9500] to-[#F54900] text-white font-semibold text-lg px-10 py-5 rounded-xl shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
//               >
//                 Submit
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="25"
//                   height="25"
//                   viewBox="0 0 25 25"
//                   fill="none"
//                 >
//                   <path
//                     d="M14.8223 22.1142C14.861 22.2107 14.9284 22.2931 15.0153 22.3503C15.1022 22.4075 15.2045 22.4367 15.3085 22.434C15.4125 22.4314 15.5132 22.3969 15.5971 22.3354C15.681 22.2739 15.744 22.1881 15.7778 22.0897L22.4061 2.71472C22.4387 2.62437 22.4449 2.52659 22.424 2.43282C22.4031 2.33905 22.3559 2.25318 22.288 2.18525C22.2201 2.11732 22.1342 2.07014 22.0404 2.04923C21.9467 2.02833 21.8489 2.03455 21.7585 2.06719L2.38353 8.69548C2.28513 8.72923 2.1994 8.79227 2.13785 8.87615C2.07631 8.96002 2.04189 9.06072 2.03923 9.16472C2.03657 9.26872 2.06578 9.37105 2.12295 9.45796C2.18012 9.54488 2.26251 9.61223 2.35906 9.65097L10.4456 12.8937C10.7012 12.9961 10.9335 13.1491 11.1284 13.3437C11.3232 13.5382 11.4767 13.7702 11.5795 14.0256L14.8223 22.1142Z"
//                     stroke="white"
//                     strokeWidth="2.03947"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                   <path
//                     d="M22.2848 2.18945L11.1289 13.3444"
//                     stroke="white"
//                     strokeWidth="2.03947"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                 </svg>
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// }

















"use client";

import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import Swal from "sweetalert2";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;

    
  // Get current date and time
  const now = new Date();
  const date = now.toISOString().split("T")[0]; // YYYY-MM-DD
  const time = now.toLocaleTimeString(); // HH:MM:SS AM/PM

    const formData = {
      name: (form.name as unknown as HTMLInputElement).value,
      company: (form.company as HTMLInputElement).value,
      email: (form.email as HTMLInputElement).value,
      phone: (form.phone as HTMLInputElement).value,
      inquiry: (form.inquiry as HTMLSelectElement).value,
      massage: (form.massage as HTMLTextAreaElement).value,
      status:"pending",
       date,  
    time,
    };

    try {
    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (!res.ok) throw new Error("Failed to send email 4");

    Swal.fire("Success", "Request submitted successfully", "success");
          form.reset();
  } catch (err: any) {
    Swal.fire("Something went wrong 3"); 
  }

    try {
      setLoading(true);

      const res = await fetch(`${process.env.NEXT_PUBLIC_NODE_API_URL}/contact-data`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error("Something went wrong 1");
      }

      Swal.fire("Success", "Request submitted successfully", "success");
      form.reset();
    } catch (error: any) {
      Swal.fire("Something went wrong 2");  
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-10 lg:py-20">
      <div className="w-full max-w-2xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-5">
          Consultation Request
        </h2>
        <p className="text-lg text-gray-600 mb-10">
          Fill out the form below to schedule a one-on-one consultation with a
          Betopia Expert.
        </p>

        <form className="space-y-8" onSubmit={handleSubmit}>
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              name="name"
              required
              placeholder="Your full name"
              className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#FF9500]"
            />
          </div>

          {/* Company */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Company <span className="text-red-500">*</span>
            </label>
            <input
              name="company"
              required
              placeholder="Your company name"
              className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#FF9500]"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="your.email@company.com"
              className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#FF9500]"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              name="phone"
              required
              placeholder="+1 (555) 123-4567"
              className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#FF9500]"
            />
          </div>

          {/* Inquiry */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Inquiry Type <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <select
                name="inquiry"
                required
                className="w-full px-5 py-4 pr-12 rounded-xl border appearance-none
 border-gray-300 focus:ring-2 focus:ring-[#FF9500]"
              >
                <option value="">Select an option</option>
                <option>Cloud Modernization</option>
                <option>Cybersecurity & Compliance</option>
                <option>AI & Analytics</option>
                <option>Resource Augmentation</option>
                <option>General Inquiry</option>
              </select>
              <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                <IoIosArrowDown />
              </span>
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              name="massage"
              required
              rows={6}
              placeholder="Tell us about your project..."
              className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#FF9500] resize-none"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full ${!loading ? "bg-linear-to-r from-[#FF9500] to-[#F54900] hover:scale-105 transition" : "bg-gray-400"}  text-white font-semibold text-lg px-10 py-5 rounded-xl shadow-xl `}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </section>
  );
}