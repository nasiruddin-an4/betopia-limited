import Image from "next/image";

export default function HowItWorks() {
  return (
    <section className="relative w-11/12 mx-auto overflow-hidden pt-10 md:pt-20">
      {/* Background Image */}
      <Image
        src="/partner/bg.png"
        alt="background"
        fill
        className="object-cover object-center opacity-20"
        priority
      />
<div>
          {/* Title Section */}
        <div className="flex gap-6 md:gap-20 max-w-[1404px] mx-auto px-4">
          <div>
            <Image
              src="/partner/bulb.svg"
              alt="bulb"
              width={113}
              height={127}
              className="w-[113px] h-[127px] object-contain"
            />
          </div>

          <div className="mt-8">
            <span className="md:text-lg text-[#7A7F98] font-medium flex items-center gap-2">
              <svg
                width="28"
                height="23"
                viewBox="0 0 28 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="5.44539"
                  y="11.3125"
                  width="15"
                  height="15"
                  rx="3.5"
                  transform="rotate(-45 5.44539 11.3125)"
                  stroke="#243855"
                />
                <rect
                  y="11.3125"
                  width="14"
                  height="14"
                  rx="4"
                  transform="rotate(-45 0 11.3125)"
                  fill="#6232F8"
                />
              </svg>
              Working Process
            </span>

            <h2 className="text-2xl md:text-[52px] font-bold text-[#0F183A] mt-6">
              How It Works
            </h2>
          </div>
        </div>
</div>
      {/* --- TOP HOLEMARK (hologram) --- */}
      <div className=" relative w-full h-[150px] hidden md:block">
        <Image
          src="/partner/holmark.svg"
          alt="holmark"
          fill
          className="object-contain"
        />
      </div>

      {/* Container */}
      <div className="max-w-[1404px] mx-auto px-4 mt-10 md:mt-0">

        {/* --- STEPS --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-16 ">

          {/* Step 1 */}
          <div className="lg:mt-[60%]">
            <div className="flex items-center gap-2">
              <Image src="/partner/i1.png" width={40} height={40} alt="apply" />
              <h3 className="font-semibold text-xl md:text-2xl">
                Apply & Onboard
              </h3>
            </div>

            <p className="md:text-lg text-gray-600 mt-2">
              Complete the quick application and get onboarded with our partner success team.
            </p>

            <Image
              src="/partner/1.png"
              width={712}
              height={442}
              alt="step1"
              className="w-full mt-6 rounded-lg object-cover"
            />
          </div>

          {/* Step 2 */}
          <div className="lg:mt-[40%]">
            <div className="flex items-center gap-2">
              <Image src="/partner/i2.png" width={40} height={40} alt="train" />
              <h3 className="font-semibold text-xl md:text-2xl">
                Training & Enablement
              </h3>
            </div>

            <p className="md:text-lg text-gray-600 mt-2">
              Learn our offerings: Cloud, AI, cybersecurity, multi-cloud solutions, and more.
            </p>

            <Image
              src="/partner/2.png"
              width={712}
              height={442}
              alt="step2"
              className="w-full mt-6 rounded-lg object-cover"
            />
          </div>

          {/* Step 3 */}
          <div className="lg:mt-[20%]">
            <div className="flex items-center gap-2">
              <Image src="/partner/i3.png" width={40} height={40} alt="leads" />
              <h3 className="font-semibold text-xl md:text-2xl">
                Generate Leads & Close Deals
              </h3>
            </div>

            <p className="md:text-lg text-gray-600 mt-2">
              Identify clients, submit requirements, and collaborate with us for delivery.
            </p>

            <Image
              src="/partner/3.png"
              width={712}
              height={442}
              alt="step3"
              className="w-full mt-6 rounded-lg object-cover"
            />
          </div>

          {/* Step 4 */}
          <div className="">
            <div className="flex items-center gap-2">
              <Image src="/partner/i4.png" width={40} height={40} alt="revenue" />
              <h3 className="font-semibold text-xl md:text-2xl">
                Earn Revenue & Scale
              </h3>
            </div>

            <p className="md:text-lg text-gray-600 mt-2">
              Earn up to 40% and grow your partnership over time.
            </p>

            <Image
              src="/partner/4.png"
              width={712}
              height={442}
              alt="step4"
              className="w-full mt-6 rounded-lg object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
