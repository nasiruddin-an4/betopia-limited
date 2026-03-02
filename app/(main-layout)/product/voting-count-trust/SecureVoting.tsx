import Image from "next/image";

export default function SecureVoting() {
  return (
    <div className=" bg-[#F5F9FD]">
      <div
        className="max-w-420 w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-20
                    items-stretch px-4  py-10 lg:py-20"
      >
        {/* Left Content */}
        <div className="">
          <span className="inline-block px-4 py-1 bg-[#F0FDF4]  rounded-full text-[#45556C] shadow">
            Key Differentiator
          </span>

          <h2 className="text-2xl md:text-3xl lg:text-[36px] font-semibold mt-4">
            Secure Voting Environment
          </h2>

          <h3 className="text-lg  mt-2">
            Controlled Voting via Verified Terminals
          </h3>

          <p className="mt-3 text-[#414042] text-lg md:text-xl lg:text-2xl">
            CountTrust supports voting through Windows and macOS-based
            terminals, enabling controlled polling environments such as
            campuses, AGMs, and voting booths.
          </p>

          <p className="mt-4 mb-6  text-[#414042]">
            This approach significantly reduces:
          </p>

          {/* Benefits List */}
          <div className="mt-3 space-y-3">
            <div className="flex items-center gap-3 hover:shadow-md rounded-lg px-4 py-2 bg-[#F0FDF4] shadow-sm">
              <span>
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.0026 19.8333C14.6469 19.8333 15.1693 19.311 15.1693 18.6667C15.1693 18.0223 14.6469 17.5 14.0026 17.5C13.3583 17.5 12.8359 18.0223 12.8359 18.6667C12.8359 19.311 13.3583 19.8333 14.0026 19.8333Z"
                    stroke="#414042"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22.1667 11.668H5.83333C4.54467 11.668 3.5 12.7126 3.5 14.0013V23.3346C3.5 24.6233 4.54467 25.668 5.83333 25.668H22.1667C23.4553 25.668 24.5 24.6233 24.5 23.3346V14.0013C24.5 12.7126 23.4553 11.668 22.1667 11.668Z"
                    stroke="#414042"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.16406 11.6654V8.16536C8.16406 6.61827 8.77864 5.13454 9.87261 4.04057C10.9666 2.94661 12.4503 2.33203 13.9974 2.33203C15.5445 2.33203 17.0282 2.94661 18.1222 4.04057C19.2161 5.13454 19.8307 6.61827 19.8307 8.16536V11.6654"
                    stroke="#414042"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <p className="text-[#414042] text-lg md:text-xl ">
                Unauthorized device usage
              </p>
            </div>

            <div className="flex items-center gap-3 hover:shadow-md rounded-lg px-4 py-2 bg-[#F0FDF4] shadow-sm">
              <span>
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25.3518 21.0006L16.0185 4.66725C15.815 4.30816 15.5199 4.00947 15.1632 3.80167C14.8066 3.59386 14.4012 3.48437 13.9885 3.48438C13.5757 3.48437 13.1704 3.59386 12.8138 3.80167C12.4571 4.00947 12.162 4.30816 11.9585 4.66725L2.62516 21.0006C2.41946 21.3568 2.31159 21.7611 2.31251 22.1725C2.31342 22.5839 2.42307 22.9877 2.63035 23.343C2.83763 23.6984 3.13517 23.9926 3.49281 24.1959C3.85045 24.3992 4.25547 24.5043 4.66683 24.5006H23.3335C23.7429 24.5002 24.1449 24.392 24.4993 24.1871C24.8537 23.9821 25.1479 23.6875 25.3524 23.3329C25.5569 22.9782 25.6645 22.576 25.6644 22.1667C25.6643 21.7573 25.5565 21.3551 25.3518 21.0006Z"
                    stroke="#414042"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14 10.5V15.1667"
                    stroke="#414042"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14 19.832H14.0117"
                    stroke="#414042"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <p className="text-[#414042] text-lg md:text-xl ">
                Coercion risks
              </p>
            </div>

            <div className="flex items-center gap-3 hover:shadow-md rounded-lg px-4 py-2 bg-[#F0FDF4] shadow-sm">
              <span>
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 23.332V12.832"
                    stroke="#414042"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16.3333 8.16797C17.571 8.16797 18.758 8.65963 19.6332 9.5348C20.5083 10.41 21 11.597 21 12.8346V16.3346C21 18.1912 20.2625 19.9716 18.9497 21.2844C17.637 22.5971 15.8565 23.3346 14 23.3346C12.1435 23.3346 10.363 22.5971 9.05025 21.2844C7.7375 19.9716 7 18.1912 7 16.3346V12.8346C7 11.597 7.49167 10.41 8.36683 9.5348C9.242 8.65963 10.429 8.16797 11.6667 8.16797H16.3333Z"
                    stroke="#414042"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16.4766 4.52536L18.6699 2.33203"
                    stroke="#414042"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M24.4997 24.4987C24.501 23.2985 24.0399 22.1439 23.2121 21.2748C22.3843 20.4058 21.2535 19.889 20.0547 19.832"
                    stroke="#414042"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M24.501 5.83203C24.4997 6.97788 24.0769 8.08319 23.3131 8.93734C22.5493 9.7915 21.4979 10.3348 20.3594 10.4637"
                    stroke="#414042"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M25.6667 15.168H21"
                    stroke="#414042"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3.5 24.4987C3.49865 23.2985 3.95977 22.1439 4.78756 21.2748C5.61534 20.4058 6.74615 19.889 7.945 19.832"
                    stroke="#414042"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3.5 5.83203C3.50132 6.97788 3.92416 8.08319 4.68795 8.93734C5.45175 9.7915 6.5031 10.3348 7.64167 10.4637"
                    stroke="#414042"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7.0026 15.168H2.33594"
                    stroke="#414042"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.33594 2.33203L11.5293 4.52536"
                    stroke="#414042"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10.5 8.31833V7C10.5 6.07174 10.8687 5.1815 11.5251 4.52513C12.1815 3.86875 13.0717 3.5 14 3.5C14.9283 3.5 15.8185 3.86875 16.4749 4.52513C17.1313 5.1815 17.5 6.07174 17.5 7V8.31833"
                    stroke="#414042"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <p className="text-[#414042] text-lg md:text-xl ">
                Malware or compromised personal devices
              </p>
            </div>
          </div>

          <p className="mt-5 text-[#414042] text-lg md:text-xl lg:text-2xl ">
            Hybrid voting (on-site + remote) can be enabled where required
            without compromising governance or security.
          </p>
        </div>

        {/* Image from right */}
        <div className="relative w-full h-50 md:h-75 lg:h-full rounded-2xl overflow-hidden ">
          <Image
            src="/product/secure.png"
            alt="count_trust"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
