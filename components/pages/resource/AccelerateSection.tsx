import UnderlineSectionTitle from "@/components/shared/UnderlineSectionTitle";
import Image from "next/image";

export default function AccelerateSection() {
  return (
    <section className="relative  bg-linear-to-r from-[#FFFFFF] via-[#FFF7ED4D] to-[#FF89040D] pb-10 md:pb-0">
      <div className=" max-w-[1515px] mx-auto md:px-0 px-4 pt-10">
        {/* Header */}
        <div className="text-center">
          <div className="w-[115px] mx-auto mb-3 rounded-full bg-linear-to-r from-[#FF9500] to-[#F54900] px-4 py-1  font-semibold text-white">
            Benefits
          </div>

          <UnderlineSectionTitle
            title="Accelerate Your Team's Success"
            wrapperClassName="mb-10 md:mb-[10px] text-center text-[#101828]"
          />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:p-[60px] lg:gap-10">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl p-6 md:p-[60px] shadow-xl hover:shadow-2xl transition">
            <div className="mb-[20px]">
              <svg
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 17.4453C0 7.81053 7.81053 0 17.4453 0H62.3047C71.9395 0 79.75 7.81053 79.75 17.4453V62.3047C79.75 71.9395 71.9395 79.75 62.3047 79.75H17.4453C7.81053 79.75 0 71.9395 0 62.3047V17.4453Z"
                  fill="url(#paint0_linear_1677_8025)"
                />
                <path
                  d="M26.5812 43.1957C26.2668 43.1968 25.9585 43.1086 25.6922 42.9415C25.4259 42.7743 25.2125 42.5351 25.0768 42.2515C24.9411 41.9678 24.8886 41.6516 24.9255 41.3393C24.9624 41.0271 25.0872 40.7317 25.2852 40.4876L41.7337 23.5407C41.8571 23.3983 42.0252 23.302 42.2105 23.2678C42.3958 23.2335 42.5872 23.2632 42.7534 23.3521C42.9195 23.441 43.0505 23.5837 43.1249 23.7569C43.1992 23.93 43.2125 24.1233 43.1625 24.305L39.9725 34.3069C39.8785 34.5587 39.8469 34.8295 39.8805 35.0961C39.9141 35.3628 40.0119 35.6173 40.1654 35.8378C40.319 36.0584 40.5238 36.2384 40.7622 36.3624C41.0006 36.4864 41.2656 36.5508 41.5343 36.5499H53.1645C53.4789 36.5488 53.7872 36.637 54.0535 36.8041C54.3198 36.9713 54.5332 37.2106 54.6689 37.4942C54.8046 37.7778 54.8571 38.0941 54.8202 38.4063C54.7833 38.7186 54.6585 39.0139 54.4605 39.2581L38.012 56.205C37.8886 56.3474 37.7205 56.4436 37.5352 56.4779C37.3499 56.5121 37.1585 56.4824 36.9923 56.3935C36.8262 56.3046 36.6952 56.1619 36.6208 55.9888C36.5465 55.8156 36.5332 55.6224 36.5832 55.4407L39.7732 45.4387C39.8672 45.187 39.8988 44.9161 39.8652 44.6495C39.8316 44.3829 39.7339 44.1283 39.5803 43.9078C39.4267 43.6872 39.2219 43.5072 38.9835 43.3832C38.7451 43.2592 38.4801 43.1949 38.2114 43.1957H26.5812Z"
                  stroke="white"
                  strokeWidth="3.32292"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1677_8025"
                    x1="0"
                    y1="0"
                    x2="79.75"
                    y2="79.75"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#FF9500" />
                    <stop offset="1" stopColor="#F54900" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <h3 className="text-xl md:text-[28px] font-bold">Speed to Scale</h3>

            <p className="mt-[21px] text-lg md:text-2xl text-[#4A5565]">
              Reduce hiring cycle from months to days. Get certified
              professionals deployed rapidly to meet urgent project deadlines
              and business objectives.
            </p>

            <p className="mt-[30px] flex items-center gap-2 text-[#FF9500]  text-lg">
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.4622 22.8464C18.1972 22.8464 22.8464 18.1972 22.8464 12.4622C22.8464 6.72725 18.1972 2.07812 12.4622 2.07812C6.72725 2.07812 2.07812 6.72725 2.07812 12.4622C2.07812 18.1972 6.72725 22.8464 12.4622 22.8464Z"
                  stroke="#FF9500"
                  strokeWidth="2.07682"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.34375 12.4596L11.4206 14.5365L15.5742 10.3828"
                  stroke="#FF9500"
                  strokeWidth="2.07682"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Deploy teams in 2–4 weeks
            </p>
          </div>

          {/* Image 1 */}
          <div className="rounded-2xl overflow-hidden ">
            <Image
              src="/augmentation/1.svg"
              alt=""
              width={738}
              height={459}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Image 2 */}
          <div className="rounded-2xl overflow-hidden ">
            <Image
              src="/augmentation/2.svg"
              alt=""
              width={738}
              height={459}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl p-6 md:p-[60px] shadow-xl hover:shadow-2xl transition">
            <div className="mb-[20px]">
              <svg
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 17.4453C0 7.81053 7.81053 0 17.4453 0H62.3047C71.9395 0 79.75 7.81053 79.75 17.4453V62.3047C79.75 71.9395 71.9395 79.75 62.3047 79.75H17.4453C7.81053 79.75 0 71.9395 0 62.3047V17.4453Z"
                  fill="url(#paint0_linear_1677_8043)"
                />
                <path
                  d="M45.643 41.3516L48.1601 55.5172C48.1883 55.684 48.1649 55.8554 48.0931 56.0085C48.0212 56.1617 47.9043 56.2892 47.7579 56.3741C47.6116 56.459 47.4429 56.4972 47.2743 56.4836C47.1056 56.47 46.9452 56.4053 46.8144 56.298L40.8663 51.8337C40.5792 51.6192 40.2304 51.5033 39.8719 51.5033C39.5135 51.5033 39.1647 51.6192 38.8776 51.8337L32.9196 56.2964C32.7889 56.4034 32.6286 56.4681 32.4602 56.4817C32.2918 56.4953 32.1232 56.4573 31.977 56.3726C31.8307 56.2879 31.7138 56.1607 31.6418 56.0078C31.5697 55.855 31.546 55.6838 31.5738 55.5172L34.0892 41.3516"
                  stroke="white"
                  strokeWidth="3.32292"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M39.875 43.1992C45.3806 43.1992 49.8438 38.7361 49.8438 33.2305C49.8438 27.7249 45.3806 23.2617 39.875 23.2617C34.3694 23.2617 29.9062 27.7249 29.9062 33.2305C29.9062 38.7361 34.3694 43.1992 39.875 43.1992Z"
                  stroke="white"
                  strokeWidth="3.32292"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1677_8043"
                    x1="0"
                    y1="0"
                    x2="79.75"
                    y2="79.75"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#FF9500" />
                    <stop offset="1" stopColor="#F54900" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <h3 className="text-xl md:text-[28px] font-bold">
              Expertise on Demand
            </h3>

            <p className="mt-[21px] text-lg md:text-2xl text-[#4A5565]">
              Certified professionals ready for complex projects. Access
              specialized talent in Cloud, AI, Cybersecurity, and Software
              Development whenever you need it.
            </p>

            <p className="mt-[30px] flex items-center gap-2 text-[#FF9500]  text-lg">
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.4622 22.8464C18.1972 22.8464 22.8464 18.1972 22.8464 12.4622C22.8464 6.72725 18.1972 2.07812 12.4622 2.07812C6.72725 2.07812 2.07812 6.72725 2.07812 12.4622C2.07812 18.1972 6.72725 22.8464 12.4622 22.8464Z"
                  stroke="#FF9500"
                  strokeWidth="2.07682"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.34375 12.4596L11.4206 14.5365L15.5742 10.3828"
                  stroke="#FF9500"
                  strokeWidth="2.07682"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Pre-vetted & certified experts
            </p>
          </div>

          {/* Card 3*/}
          <div className="bg-white rounded-2xl p-6 md:p-[60px] shadow-xl hover:shadow-2xl transition">
            <div className="mb-[20px]">
              <svg
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 17.4453C0 7.81053 7.81053 0 17.4453 0H62.3047C71.9395 0 79.75 7.81053 79.75 17.4453V62.3047C79.75 71.9395 71.9395 79.75 62.3047 79.75H17.4453C7.81053 79.75 0 71.9395 0 62.3047V17.4453Z"
                  fill="url(#paint0_linear_1677_8062)"
                />
                <path
                  d="M39.875 23.2617V56.4909"
                  stroke="white"
                  strokeWidth="3.32292"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M48.1823 28.2461H35.7214C34.1791 28.2461 32.7 28.8588 31.6095 29.9493C30.5189 31.0398 29.9062 32.5189 29.9062 34.0612C29.9062 35.6035 30.5189 37.0826 31.6095 38.1731C32.7 39.2636 34.1791 39.8763 35.7214 39.8763H44.0286C45.5709 39.8763 47.05 40.489 48.1405 41.5795C49.2311 42.67 49.8438 44.1491 49.8438 45.6914C49.8438 47.2337 49.2311 48.7128 48.1405 49.8033C47.05 50.8938 45.5709 51.5065 44.0286 51.5065H29.9062"
                  stroke="white"
                  strokeWidth="3.32292"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1677_8062"
                    x1="0"
                    y1="0"
                    x2="79.75"
                    y2="79.75"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#FF9500" />
                    <stop offset="1" stopColor="#F54900" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <h3 className="text-xl md:text-[28px] font-bold">Cost-Effective</h3>

            <p className="mt-[21px] text-lg md:text-2xl text-[#4A5565]">
              Offshore rates without compromising quality. Leverage our global
              delivery hubs in Dhaka, Manila, and Eastern Europe for optimal
              cost efficiency.
            </p>

            <p className="mt-[30px] flex items-center gap-2 text-[#FF9500]  text-lg">
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.4622 22.8464C18.1972 22.8464 22.8464 18.1972 22.8464 12.4622C22.8464 6.72725 18.1972 2.07812 12.4622 2.07812C6.72725 2.07812 2.07812 6.72725 2.07812 12.4622C2.07812 18.1972 6.72725 22.8464 12.4622 22.8464Z"
                  stroke="#FF9500"
                  strokeWidth="2.07682"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.34375 12.4596L11.4206 14.5365L15.5742 10.3828"
                  stroke="#FF9500"
                  strokeWidth="2.07682"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Save up to 60% on talent costs
            </p>
          </div>

          {/* Image 3 */}
          <div className="rounded-2xl overflow-hidden ">
            <Image
              src="/augmentation/3.svg"
              alt=""
              width={738}
              height={459}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Image 4 */}
          <div className="rounded-2xl overflow-hidden">
            <Image
              src="/augmentation/4.svg"
              alt=""
              width={738}
              height={459}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-2xl p-6 md:p-[60px] shadow-xl hover:shadow-2xl transition">
            <div className="mb-[20px]">
              <svg
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 17.4453C0 7.81053 7.81053 0 17.4453 0H62.3047C71.9395 0 79.75 7.81053 79.75 17.4453V62.3047C79.75 71.9395 71.9395 79.75 62.3047 79.75H17.4453C7.81053 79.75 0 71.9395 0 62.3047V17.4453Z"
                  fill="url(#paint0_linear_1677_8081)"
                />
                <path
                  d="M39.8802 56.4909C49.0562 56.4909 56.4948 49.0523 56.4948 39.8763C56.4948 30.7003 49.0562 23.2617 39.8802 23.2617C30.7042 23.2617 23.2656 30.7003 23.2656 39.8763C23.2656 49.0523 30.7042 56.4909 39.8802 56.4909Z"
                  stroke="white"
                  strokeWidth="3.32292"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M39.875 49.8438C45.3806 49.8438 49.8438 45.3806 49.8438 39.875C49.8438 34.3694 45.3806 29.9062 39.875 29.9062C34.3694 29.9062 29.9062 34.3694 29.9062 39.875C29.9062 45.3806 34.3694 49.8438 39.875 49.8438Z"
                  stroke="white"
                  strokeWidth="3.32292"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M39.8698 43.1966C41.705 43.1966 43.1927 41.7089 43.1927 39.8737C43.1927 38.0385 41.705 36.5508 39.8698 36.5508C38.0346 36.5508 36.5469 38.0385 36.5469 39.8737C36.5469 41.7089 38.0346 43.1966 39.8698 43.1966Z"
                  stroke="white"
                  strokeWidth="3.32292"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1677_8081"
                    x1="0"
                    y1="0"
                    x2="79.75"
                    y2="79.75"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#FF9500" />
                    <stop offset="1" stopColor="#F54900" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <h3 className="text-xl md:text-[28px] font-bold">
              Managed Accountability
            </h3>

            <p className="mt-[21px] text-lg md:text-2xl text-[#4A5565]">
              Success manager ensures timely delivery and quality. Dedicated
              Partner Success Manager tracks KPIs, provides regular reports, and
              ensures seamless execution.
            </p>

            <p className="mt-[30px] flex items-center gap-2 text-[#FF9500]  text-lg">
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.4622 22.8464C18.1972 22.8464 22.8464 18.1972 22.8464 12.4622C22.8464 6.72725 18.1972 2.07812 12.4622 2.07812C6.72725 2.07812 2.07812 6.72725 2.07812 12.4622C2.07812 18.1972 6.72725 22.8464 12.4622 22.8464Z"
                  stroke="#FF9500"
                  strokeWidth="2.07682"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.34375 12.4596L11.4206 14.5365L15.5742 10.3828"
                  stroke="#FF9500"
                  strokeWidth="2.07682"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Single point of contact
            </p>
          </div>
          {/* Card 5 */}
          <div className="bg-white rounded-2xl p-6 md:p-[60px] shadow-xl hover:shadow-2xl transition">
            <div className="mb-[20px]">
              <svg
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 17.4453C0 7.81053 7.81053 0 17.4453 0H62.3047C71.9395 0 79.75 7.81053 79.75 17.4453V62.3047C79.75 71.9395 71.9395 79.75 62.3047 79.75H17.4453C7.81053 79.75 0 71.9395 0 62.3047V17.4453Z"
                  fill="url(#paint0_linear_1677_8101)"
                />
                <path
                  d="M46.526 54.8281V51.5052C46.526 49.7426 45.8259 48.0522 44.5795 46.8059C43.3332 45.5596 41.6428 44.8594 39.8802 44.8594H29.9115C28.1489 44.8594 26.4585 45.5596 25.2121 46.8059C23.9658 48.0522 23.2656 49.7426 23.2656 51.5052V54.8281"
                  stroke="white"
                  strokeWidth="3.32292"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M34.888 38.2135C38.5584 38.2135 41.5339 35.2381 41.5339 31.5677C41.5339 27.8973 38.5584 24.9219 34.888 24.9219C31.2176 24.9219 28.2422 27.8973 28.2422 31.5677C28.2422 35.2381 31.2176 38.2135 34.888 38.2135Z"
                  stroke="white"
                  strokeWidth="3.32292"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M56.4844 54.827V51.5041C56.4833 50.0316 55.9932 48.6011 55.091 47.4373C54.1889 46.2736 52.9257 45.4423 51.5 45.0742"
                  stroke="white"
                  strokeWidth="3.32292"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M46.5156 25.1367C47.9452 25.5027 49.2122 26.3341 50.1171 27.4998C51.0219 28.6655 51.513 30.0992 51.513 31.5749C51.513 33.0505 51.0219 34.4842 50.1171 35.6499C49.2122 36.8156 47.9452 37.647 46.5156 38.013"
                  stroke="white"
                  strokeWidth="3.32292"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1677_8101"
                    x1="0"
                    y1="0"
                    x2="79.75"
                    y2="79.75"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#FF9500" />
                    <stop offset="1" stopColor="#F54900" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <h3 className="text-xl md:text-[28px] font-bold">
              Seamless Integration
            </h3>

            <p className="mt-[21px] text-lg md:text-2xl text-[#4A5565]">
              Teams embedded in your project workflow. Our professionals work as
              part of your internal team, aligned with your processes, tools,
              and culture.
            </p>

            <p className="mt-[30px] flex items-center gap-2 text-[#FF9500]  text-lg">
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.4622 22.8464C18.1972 22.8464 22.8464 18.1972 22.8464 12.4622C22.8464 6.72725 18.1972 2.07812 12.4622 2.07812C6.72725 2.07812 2.07812 6.72725 2.07812 12.4622C2.07812 18.1972 6.72725 22.8464 12.4622 22.8464Z"
                  stroke="#FF9500"
                  strokeWidth="2.07682"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.34375 12.4596L11.4206 14.5365L15.5742 10.3828"
                  stroke="#FF9500"
                  strokeWidth="2.07682"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Work as your internal team
            </p>
          </div>

          {/* Image 5 */}
          <div className="rounded-2xl overflow-hidden">
            <Image
              src="/augmentation/5.svg"
              alt=""
              width={738}
              height={459}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
