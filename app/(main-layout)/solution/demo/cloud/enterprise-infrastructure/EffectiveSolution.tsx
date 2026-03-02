import React from "react";
interface SolutionCard {
  title: string;
  description: string;
  icon: React.ReactNode;
  badge?: string;
  image: string;
  gradient: string;
}

const EffectiveSolution: React.FC = () => {
  const solutions: SolutionCard[] = [
    {
      title: "Enterprise Server Solution",
      description:
        "Seamlessly migrate your infrastructure to the cloud with our expert guidance and proven methodologies.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="37"
          height="37"
          viewBox="0 0 37 37"
          fill="none"
        >
          <path
            d="M30.8062 3.08057H6.16119C4.45981 3.08057 3.08057 4.45981 3.08057 6.16119V12.3224C3.08057 14.0238 4.45981 15.4031 6.16119 15.4031H30.8062C32.5076 15.4031 33.8868 14.0238 33.8868 12.3224V6.16119C33.8868 4.45981 32.5076 3.08057 30.8062 3.08057Z"
            stroke="#2B7FFF"
            strokeWidth="3.08063"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M30.8062 21.5643H6.16119C4.45981 21.5643 3.08057 22.9436 3.08057 24.645V30.8062C3.08057 32.5076 4.45981 33.8868 6.16119 33.8868H30.8062C32.5076 33.8868 33.8868 32.5076 33.8868 30.8062V24.645C33.8868 22.9436 32.5076 21.5643 30.8062 21.5643Z"
            stroke="#2B7FFF"
            strokeWidth="3.08063"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.2417 9.24194H9.2571"
            stroke="#2B7FFF"
            strokeWidth="3.08063"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.2417 27.7257H9.2571"
            stroke="#2B7FFF"
            strokeWidth="3.08063"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      badge: "Hot",
      image: "/service/service2/Card (1).png",
      gradient: "from-blue-900/90 to-cyan-600/90",
    },
    {
      title: "Enterprise Storage Solution",
      description:
        "Enterprise-grade data solutions with advanced analytics, backup, and recovery capabilities.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="37"
          height="37"
          viewBox="0 0 37 37"
          fill="none"
        >
          <path
            d="M18.4839 12.3224C26.1401 12.3224 32.3467 10.2536 32.3467 7.70151C32.3467 5.14943 26.1401 3.08057 18.4839 3.08057C10.8277 3.08057 4.62109 5.14943 4.62109 7.70151C4.62109 10.2536 10.8277 12.3224 18.4839 12.3224Z"
            stroke="#FF9500"
            strokeWidth="3.08063"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.62109 7.70154V29.2659C4.62109 30.4915 6.08164 31.6668 8.68142 32.5334C11.2812 33.4 14.8073 33.8869 18.4839 33.8869C22.1606 33.8869 25.6866 33.4 28.2864 32.5334C30.8862 31.6668 32.3467 30.4915 32.3467 29.2659V7.70154"
            stroke="#FF9500"
            strokeWidth="3.08063"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.62109 18.4838C4.62109 19.7093 6.08164 20.8847 8.68142 21.7513C11.2812 22.6179 14.8073 23.1047 18.4839 23.1047C22.1606 23.1047 25.6866 22.6179 28.2864 21.7513C30.8862 20.8847 32.3467 19.7093 32.3467 18.4838"
            stroke="#FF9500"
            strokeWidth="3.08063"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      badge: "24/7",
      image: "/service/service2/Card (2).png",
      gradient: "from-slate-900/90 to-orange-600/90",
    },
    {
      title: "Server Operating System",
      description:
        "Server Operating System (Windows/Linux) Solution - Comprehensive security frameworks to protect your digital assets and ensure compliance.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="34"
          viewBox="0 0 28 34"
          fill="none"
        >
          <path
            d="M26.1855 18.4844C26.1855 26.186 20.7944 30.0368 14.3867 32.2702C14.0512 32.3839 13.6867 32.3785 13.3547 32.2548C6.93162 30.0368 1.54053 26.186 1.54053 18.4844V7.70223C1.54053 7.29371 1.70281 6.90193 1.99167 6.61306C2.28054 6.3242 2.67232 6.16191 3.08084 6.16191C6.16147 6.16191 10.0122 4.31354 12.6924 1.97226C13.0187 1.69346 13.4338 1.54028 13.863 1.54028C14.2922 1.54028 14.7073 1.69346 15.0337 1.97226C17.7292 4.32894 21.5646 6.16191 24.6452 6.16191C25.0537 6.16191 25.4455 6.3242 25.7344 6.61306C26.0233 6.90193 26.1855 7.29371 26.1855 7.70223V18.4844Z"
            stroke="#2DB67C"
            strokeWidth="3.08063"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      image: "/service/service2/Card (3).png",
      gradient: "from-slate-900/90 to-yellow-600/90",
    },
    {
      title: "Enterprise Virtualization Solution",
      description:
        "Build robust, scalable network architecture that supports your growing business needs.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="37"
          height="37"
          viewBox="0 0 37 37"
          fill="none"
        >
          <path
            d="M32.3466 24.645H26.1853C25.3346 24.645 24.645 25.3346 24.645 26.1853V32.3466C24.645 33.1973 25.3346 33.8869 26.1853 33.8869H32.3466C33.1973 33.8869 33.8869 33.1973 33.8869 32.3466V26.1853C33.8869 25.3346 33.1973 24.645 32.3466 24.645Z"
            stroke="#FF6900"
            strokeWidth="3.08063"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.7821 24.645H4.62088C3.77019 24.645 3.08057 25.3346 3.08057 26.1853V32.3466C3.08057 33.1973 3.77019 33.8869 4.62088 33.8869H10.7821C11.6328 33.8869 12.3224 33.1973 12.3224 32.3466V26.1853C12.3224 25.3346 11.6328 24.645 10.7821 24.645Z"
            stroke="#FF6900"
            strokeWidth="3.08063"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21.5644 3.08057H15.4031C14.5524 3.08057 13.8628 3.77019 13.8628 4.62088V10.7821C13.8628 11.6328 14.5524 12.3224 15.4031 12.3224H21.5644C22.415 12.3224 23.1047 11.6328 23.1047 10.7821V4.62088C23.1047 3.77019 22.415 3.08057 21.5644 3.08057Z"
            stroke="#FF6900"
            strokeWidth="3.08063"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.70117 24.6451V20.0242C7.70117 19.6157 7.86345 19.2239 8.15232 18.935C8.44118 18.6462 8.83297 18.4839 9.24148 18.4839H27.7252C28.1338 18.4839 28.5255 18.6462 28.8144 18.935C29.1033 19.2239 29.2656 19.6157 29.2656 20.0242V24.6451"
            stroke="#FF6900"
            strokeWidth="3.08063"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.4839 18.4838V12.3225"
            stroke="#FF6900"
            strokeWidth="3.08063"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      image: "/service/service2/Card (4).png",
      gradient: "from-slate-950/90 to-cyan-600/90",
    },
    {
      title: "Hyper Converged Infrastructure Solution",
      description:
        "Ensure regulatory compliance with automated governance and backup cloud tools.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="37"
          height="37"
          viewBox="0 0 37 37"
          fill="none"
        >
          <path
            d="M29.2661 16.9434H7.70172C6.00034 16.9434 4.62109 18.3226 4.62109 20.024V30.8062C4.62109 32.5076 6.00034 33.8868 7.70172 33.8868H29.2661C30.9675 33.8868 32.3467 32.5076 32.3467 30.8062V20.024C32.3467 18.3226 30.9675 16.9434 29.2661 16.9434Z"
            stroke="#615FFF"
            strokeWidth="3.08063"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.7822 16.9434V10.7821C10.7822 8.73955 11.5936 6.78063 13.038 5.3363C14.4823 3.89198 16.4412 3.08057 18.4838 3.08057C20.5264 3.08057 22.4853 3.89198 23.9296 5.3363C25.3739 6.78063 26.1854 8.73955 26.1854 10.7821V16.9434"
            stroke="#615FFF"
            strokeWidth="3.08063"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      image: "/service/service2/Card (5).png",
      gradient: "from-sky-900/90 to-cyan-500/90",
    },
    {
      title: "Backup & Recovery Solution",
      description:
        "Optimize your infrastructure with flexible hybrid cloud strategies and seamless integration.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="37"
          height="37"
          viewBox="0 0 37 37"
          fill="none"
        >
          <path
            d="M26.9556 29.266H13.8629C11.8634 29.2655 9.90338 28.709 8.20193 27.6587C6.50048 26.6083 5.12461 25.1056 4.22807 23.3183C3.33153 21.531 2.94964 19.5297 3.12508 17.5378C3.30052 15.546 4.02638 13.6422 5.22153 12.0392C6.41669 10.4361 8.03407 9.19699 9.89292 8.46024C11.7518 7.7235 13.7789 7.51817 15.7477 7.86719C17.7166 8.21621 19.5496 9.10583 21.0419 10.4366C22.5342 11.7675 23.6271 13.487 24.1984 15.4032H26.9556C28.7939 15.4032 30.5569 16.1335 31.8568 17.4334C33.1567 18.7333 33.887 20.4963 33.887 22.3346C33.887 24.173 33.1567 25.936 31.8568 27.2359C30.5569 28.5358 28.7939 29.266 26.9556 29.266Z"
            stroke="#00BBA7"
            strokeWidth="3.08063"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      image: "/service/service2/Card (6).png",
      gradient: "from-slate-950/90 to-blue-700/90",
    },
    {
      title: "Infrastructure Monitoring Solution",
      description:
        "Maintain inventory with advanced monitoring and alerting to keep your infrastructure running.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="31"
          height="34"
          viewBox="0 0 31 34"
          fill="none"
        >
          <path
            d="M3.08609 20.028C2.79461 20.029 2.50883 19.9473 2.26195 19.7923C2.01508 19.6374 1.81724 19.4156 1.69142 19.1526C1.5656 18.8897 1.51697 18.5965 1.55117 18.307C1.58538 18.0175 1.70101 17.7437 1.88465 17.5173L17.1337 1.80615C17.2481 1.67411 17.404 1.58489 17.5758 1.55313C17.7476 1.52136 17.925 1.54893 18.0791 1.63133C18.2331 1.71372 18.3546 1.84604 18.4235 2.00655C18.4924 2.16707 18.5047 2.34626 18.4584 2.51469L15.501 11.7874C15.4138 12.0208 15.3845 12.2718 15.4157 12.519C15.4468 12.7662 15.5375 13.0022 15.6798 13.2067C15.8222 13.4111 16.012 13.578 16.2331 13.693C16.4541 13.808 16.6998 13.8676 16.9489 13.8668H27.7311C28.0226 13.8658 28.3084 13.9475 28.5552 14.1025C28.8021 14.2575 29 14.4793 29.1258 14.7422C29.2516 15.0052 29.3002 15.2984 29.266 15.5879C29.2318 15.8773 29.1162 16.1511 28.9325 16.3775L13.6834 32.0887C13.5691 32.2207 13.4132 32.31 13.2414 32.3417C13.0696 32.3735 12.8921 32.3459 12.7381 32.2635C12.5841 32.1811 12.4626 32.0488 12.3937 31.8883C12.3248 31.7278 12.3124 31.5486 12.3588 31.3802L15.3162 22.1075C15.4034 21.8741 15.4327 21.623 15.4015 21.3758C15.3704 21.1286 15.2797 20.8927 15.1374 20.6882C14.995 20.4837 14.8051 20.3168 14.5841 20.2019C14.3631 20.0869 14.1174 20.0272 13.8683 20.028H3.08609Z"
            stroke="#D08700"
            strokeWidth="3.08063"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      image: "/service/service2/Card (7).png",
      gradient: "from-blue-900/90 to-amber-500/90",
    },
    {
      title: "IT Service Management Solution",
      description:
        "Deploy and manage IT infrastructure across multiple regions with high availability.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="37"
          height="37"
          viewBox="0 0 37 37"
          fill="none"
        >
          <path
            d="M18.4837 33.8871C26.9906 33.8871 33.8868 26.9909 33.8868 18.4839C33.8868 9.97703 26.9906 3.08081 18.4837 3.08081C9.97678 3.08081 3.08057 9.97703 3.08057 18.4839C3.08057 26.9909 9.97678 33.8871 18.4837 33.8871Z"
            stroke="#F6339A"
            strokeWidth="3.08063"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.4835 3.08081C14.5284 7.23373 12.3223 12.749 12.3223 18.4839C12.3223 24.2189 14.5284 29.7341 18.4835 33.8871C22.4387 29.7341 24.6448 24.2189 24.6448 18.4839C24.6448 12.749 22.4387 7.23373 18.4835 3.08081Z"
            stroke="#F6339A"
            strokeWidth="3.08063"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.08057 18.4836H33.8868"
            stroke="#F6339A"
            strokeWidth="3.08063"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      image: "/service/service2/Card.png",
      gradient: "from-slate-950/90 to-slate-500/90",
    },
    {
      title: "Virtual Desktop Infrastructure Solution",
      description:
        "Modern containerization strategies with Kubernetes and advanced orchestration.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="37"
          height="37"
          viewBox="0 0 37 37"
          fill="none"
        >
          <path
            d="M33.8868 11.8603C33.8868 10.9362 33.2707 10.012 32.6546 9.54987L22.9506 3.54265C22.5515 3.3158 22.1004 3.19653 21.6413 3.19653C21.1823 3.19653 20.7311 3.3158 20.3321 3.54265L4.46685 12.7845C3.69669 13.0926 3.08057 14.0168 3.08057 14.941V25.107C3.08057 25.8772 3.69669 26.9554 4.31282 27.4175L14.0168 33.4247C14.4159 33.6516 14.867 33.7708 15.3261 33.7708C15.7851 33.7708 16.2363 33.6516 16.6353 33.4247L32.5005 24.1828C33.2707 23.7208 33.8868 22.6425 33.8868 21.8724V11.8603Z"
            stroke="#FF9500"
            strokeWidth="3.08063"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.4028 33.7328V21.5644L3.23438 14.0168"
            stroke="#FF9500"
            strokeWidth="3.08063"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.4033 21.5642L33.733 10.936"
            stroke="#FF9500"
            strokeWidth="3.08063"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21.5645 30.4983V18.0217"
            stroke="#FF9500"
            strokeWidth="3.08063"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M27.7256 26.9553V14.4788"
            stroke="#FF9500"
            strokeWidth="3.08063"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      image: "/service/service2/Card (1).png",
      gradient: "from-blue-700/90 to-cyan-500/90",
    },
  ];

  return (
    <div className="bg-[#ffffff]">
      <div className="max-w-[1480px] mx-auto py-20">
        <h6 className="w-fit text-xs mx-auto md:text-sm lg:text-base text-[#FF9500] mb-4  px-5 py-2 rounded-3xl bg-[#FF95004D]">
          Our Services
        </h6>
        <h1
          className=" font-normal text-balck text-center mx-auto
          text-3xl sm:text-4xl md:text-5xl lg:text-[52px] leading-16"
        >
          Highly Effective <span className="text-[#FF9500]">Solution</span>
        </h1>
        <p className="mt-2 text-base text-center mx-auto sm:text-lg md:text-xl lg:text-2xl font-normal  text-[#45556C] max-w-[1100px] px-2 lg:px-0">
          Comprehensive infrastructure services tailored to meet your enterprise
          needs
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-20">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-1 bg-cover"
              style={{
                backgroundImage: `url('${solution.image}')`,
              }}
            >
              {/* Overlay Gradient */}
              <div
                className={`absolute inset-0 bg-black/40 backdrop-blur-[1px]`}
              ></div>

              {/* Content */}
              <div className="relative p-6 h-full flex flex-col justify-between min-h-[380px]">
                {/* Header */}
                <div>
                  <div className="flex items-start justify-between mb-20">
                    <div className="p-3 flex items-center  gap-2 w-full bg-white/10 backdrop-blur-xs rounded-2xl border border-white/20">
                      {solution.icon}{" "}
                      <h3 className="text-white text-lg md:text-xl font-normal leading-tight">
                        {solution.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-white/80 text-base leading-relaxed mb-4">
                    {solution.description}
                  </p>
                </div>

                {/* Footer */}
                <button className="flex items-center gap-2 text-orange-400 hover:text-orange-300 text-sm font-medium transition-colors group/btn">
                  Learn more
                  <svg
                    className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-cyan-500/30 rounded-2xl transition-colors duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EffectiveSolution;
