import Container from "@/components/layout/Container";
import { ChevronRight } from "lucide-react";

const ApplyForm = () => {
  return (
    <section className="relative py-10 lg:py-20  overflow-hidden bg-[linear-gradient(155deg,#101828_0%,#1C398E_45%,#101828_100%)]">
        <Container>

      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        
        {/* LEFT SIDE */}
        <div className="text-white">
          {/* Heading */}
          <h2 className="text-3xl md:text-5xl lg:text-[52px] font-bold leading-tight">
            Ready to Become a{" "}
            <span className="text-[#FF9500]">Betopia Partner?</span>
          </h2>

          <p className="text-white/80 text-lg md:text-xl mt-6 mb-10 max-w-xl">
            Fill out the form below and our partnership team will contact you
            within 24 hours
          </p>

          {/* Form Card */}
          <div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl p-6 md:p-8">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-5">
              
              {/* Name */}
              <div>
                <label className="text-sm text-white/80">Name *</label>
                <input
                  type="text"
                  placeholder="Your full name"
                  className="mt-2 w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF9500]"
                />
              </div>

              {/* Company */}
              <div>
                <label className="text-sm text-white/80">Company *</label>
                <input
                  type="text"
                  placeholder="Company name"
                  className="mt-2 w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF9500]"
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-sm text-white/80">Email *</label>
                <input
                  type="email"
                  placeholder="your.email@company.com"
                  className="mt-2 w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF9500]"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="text-sm text-white/80">Phone *</label>
                <input
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  className="mt-2 w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF9500]"
                />
              </div>

              {/* Country */}
              <div>
                <label className="text-sm text-white/80">Country Name *</label>
                <select
                  className="mt-2 w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#FF9500]"
                >
                  <option className="text-black">Select your country</option>
                </select>
              </div>

              {/* Job Title */}
              <div>
                <label className="text-sm text-white/80">Job Title *</label>
                <input
                  type="text"
                  placeholder="Your job title"
                  className="mt-2 w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF9500]"
                />
              </div>

              {/* Message */}
              <div className="md:col-span-2">
                <label className="text-sm text-white/80">Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your business and partnership goals..."
                  className="mt-2 w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF9500]"
                />
              </div>

              {/* Submit */}
              <div className="md:col-span-2 mt-4">
                <button
                  type="submit"
                  className="w-full bg-linear-to-r from-[#FF9500] to-[#FF5C00] hover:opacity-90 transition-all text-white font-semibold py-4 rounded-xl flex items-center justify-center gap-2"
                >
                  Submit <ChevronRight/>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="flex justify-center lg:justify-end">
          <img
            src="/partner/pf.png" 
            alt="Partner"
            className="rounded-2xl w-full  object-cover"
          />
        </div>
      </div>
        </Container>
    </section>
  );
};

export default ApplyForm;