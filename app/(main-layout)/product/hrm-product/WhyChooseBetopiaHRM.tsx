"use client";
import Image from "next/image";

export default function WhyChooseBetopiaHRM() {
  return (
    <div className="bg-[#ffffff]">
      <div className="max-w-370 mx-auto py-0 px-3 ">
        <h3 className="text-center text-black text-3xl md:text-4xl xl:text-[52px] font-bold">
          Why Choose <span className="text-[#FF9500]">Betopia HRM</span>
        </h3>
        <div className="w-20 h-1 bg-[#FF9500] mx-auto my-3"></div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-16 mt-10">
          {/* Left Content: Features */}
          <div className="space-y-8">
            {/* Feature 01 */}
            <div className="flex items-start gap-5 bg-white rounded-2xl">
              <div className="px-4 py-2 rounded-2xl bg-[#FF9500] mt-1">
                <h4 className="text-lg md:text-2xl font-normal text-white">
                  01
                </h4>
              </div>
              <div>
                <h5 className="text-2xl md:text-3xl font-semibold text-[#0F172B]">
                  Simplified Workforce Management
                </h5>
                <div className="flex items-center mt-3 gap-3 text-lg md:text-xl font-normal text-[#45556C]">
                  HRM is built to simplify, secure, and scale workforce
                  management. By automating routine HR tasks and centralizing
                  employee data, it reduces errors and administrative overhead.
                </div>
              </div>
            </div>

            {/* Feature 02 */}
            <div className="flex items-start gap-5 bg-white rounded-2xl">
              <div className="px-4 py-2 rounded-2xl bg-[#FF9500] mt-1">
                <h4 className="text-lg md:text-2xl font-normal text-white">
                  02
                </h4>
              </div>
              <div>
                <h5 className="text-2xl md:text-3xl font-semibold text-[#0F172B]">
                  Compliance and Trust with Secure Workflows
                </h5>
                <div className="flex items-center mt-3 gap-3 text-lg md:text-xl font-normal text-[#45556C]">
                  Role-based security and transparent workflows ensure
                  compliance and trust, giving both HR teams and employees peace
                  of mind.
                </div>
              </div>
            </div>

            {/* Feature 03 */}
            <div className="flex items-start gap-5 bg-white rounded-2xl">
              <div className="px-4 py-2 rounded-2xl bg-[#FF9500] mt-1">
                <h4 className="text-lg md:text-2xl font-normal text-white">
                  03
                </h4>
              </div>
              <div>
                <h5 className="text-2xl md:text-3xl font-semibold text-[#0F172B]">
                  Empowering Teams with Real-Time Insights
                </h5>
                <div className="flex items-center mt-3 gap-3 text-lg md:text-xl font-normal text-[#45556C]">
                  With real-time insights and employee self-service, HRM
                  empowers both HR teams and employees to work more efficiently,
                  driving productivity and satisfaction.
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div>
            <Image
              src="/product/hrm_details.png"
              alt="count_trust2"
              width={711}
              height={577}
              className="rounded-md shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
