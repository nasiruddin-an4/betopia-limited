import Image from "next/image";

export default function Responsibilities() {
  return (
    <section className="bg-white pb-10 lg:pb-20">
      <div
        className="max-w-[1440px] w-11/12 mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-14
                              items-stretch px-8 xl:px-0 "
      >
        {/* Left Content */}
        <div>
          <div className=" mb-10 ">
            <h3 className="bg-linear-to-r from-[#FF9500] to-[#F54900] p-1 rounded-full text-white  w-[200px] text-center mb-4">
              Your Responsibilities
            </h3>
            <h2 className="text-2xl md:text-[36px] font-bold text-[#414042]">
              Your Role as a Sales Agent
            </h2>
            <span className="block mt-[10px] rounded-full w-[103.86px] h-[5.19px] bg-[#FF9500]" />
          </div>

          <ul className="space-y-4 mb-8">
            {[
              "Identify and engage potential clients in your region",
              "Understand client needs and introduce relevant Betopia solutions",
              "Arrange meetings and support the sales closing process",
              "Coordinate with Betopia teams during the sales cycle",
              "Represent Betopia professionally in all engagements",
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <div className="mt-1">

                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    stroke="#FF9500"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 12L11 14L15 10"
                    stroke="#FF9500"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                </div>

                <span className="text-lg md:text-xl lg:text-2xl text-[#364153]">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <div className="bg-linear-to-b from-[#FF95001A] to-[#FFEDD4] border-l-4 border-[#FF9500] p-5 rounded-md">
            <p className="text-[#101828] text-lg md:text-xl lg:text-2xl">
              Your focus remains on relationship building and opportunity
              creation.
            </p>
          </div>
        </div>

        {/* Image from right */}
        <div className="relative w-full h-[300px] lg:h-full rounded-2xl overflow-hidden">
          <Image
            src="/partner/sales/responsibilities.png"
            alt="Sales agent working"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
