"use client";

export default function DeploymentChoice() {
  return (
    <section className="w-full bg-white py-12 md:py-20">
      <div className="max-w-350 w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-20 items-stretch px-3 md:px-8">
        <div>
          <h2 className="text-2xl md:text-3xl lg:text-[36px] font-semibold ">
            Cloud or On-Premise
            <br /> Your Choice
          </h2>

          <p className="mt-4 text-lg md:text-xl lg:text-2xl">
            Betopia ERP supports flexible deployment models to meet
            organizational, regulatory, and infrastructure requirements. Choose
            cloud for agility and scalability or on-premise for data control and
            compliance-driven environments.
          </p>

          {/* OPTIONS */}
          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {/* Cloud */}
            <div className="rounded-xl  bg-linear-to-r from-[#EEF2FF] to-[#E0E7FF] shadow-sm p-5 hover:shadow-md transition">
              <div className="">
                <svg
                  width="56"
                  height="56"
                  viewBox="0 0 56 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 28C0 12.536 12.536 0 28 0C43.464 0 56 12.536 56 28C56 43.464 43.464 56 28 56C12.536 56 0 43.464 0 28Z"
                    fill="#FF9500"
                  />
                  <path
                    d="M34.4172 36.1654H24.5005C22.986 36.165 21.5015 35.7435 20.2128 34.9479C18.924 34.1524 17.8819 33.0141 17.2029 31.6604C16.5238 30.3067 16.2346 28.7908 16.3674 27.2822C16.5003 25.7735 17.0501 24.3315 17.9553 23.1173C18.8606 21.9032 20.0856 20.9646 21.4935 20.4066C22.9015 19.8486 24.4369 19.6931 25.9281 19.9574C27.4193 20.2218 28.8077 20.8956 29.938 21.9036C31.0684 22.9116 31.8961 24.214 32.3288 25.6654H34.4172C35.8096 25.6654 37.1449 26.2185 38.1295 27.2031C39.1141 28.1876 39.6672 29.523 39.6672 30.9154C39.6672 32.3078 39.1141 33.6431 38.1295 34.6277C37.1449 35.6122 35.8096 36.1654 34.4172 36.1654Z"
                    stroke="white"
                    strokeWidth="2.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h4 className="mt-3 font-semibold text-gray-900">
                Cloud Deployment
              </h4>
              <p className="text-sm text-gray-500">Agility and scalability</p>
            </div>

            {/* On-Prem */}
            <div className="rounded-xl  bg-linear-to-r from-[#EEF2FF] to-[#E0E7FF] shadow-sm p-5 hover:shadow-md transition">
              <div className="">
                <svg
                  width="56"
                  height="56"
                  viewBox="0 0 56 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 28C0 12.536 12.536 0 28 0C43.464 0 56 12.536 56 28C56 43.464 43.464 56 28 56C12.536 56 0 43.464 0 28Z"
                    fill="#FF9500"
                  />
                  <path
                    d="M37.332 16.332H18.6654C17.3767 16.332 16.332 17.3767 16.332 18.6654V23.332C16.332 24.6207 17.3767 25.6654 18.6654 25.6654H37.332C38.6207 25.6654 39.6654 24.6207 39.6654 23.332V18.6654C39.6654 17.3767 38.6207 16.332 37.332 16.332Z"
                    stroke="white"
                    strokeWidth="2.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M37.332 30.332H18.6654C17.3767 30.332 16.332 31.3767 16.332 32.6654V37.332C16.332 38.6207 17.3767 39.6654 18.6654 39.6654H37.332C38.6207 39.6654 39.6654 38.6207 39.6654 37.332V32.6654C39.6654 31.3767 38.6207 30.332 37.332 30.332Z"
                    stroke="white"
                    strokeWidth="2.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21 21H21.0117"
                    stroke="white"
                    strokeWidth="2.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21 35H21.0117"
                    stroke="white"
                    strokeWidth="2.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h4 className="mt-3 font-semibold text-gray-900">On-Premise</h4>
              <p className="text-sm text-gray-500">
                Data control and compliance
              </p>
            </div>
          </div>
        </div>
        {/* Image from right */}
        <div className="relative w-full h-full rounded-2xl overflow-hidden">
          <img
            src="/product/erp/cloud.png"
            alt="count_trust"
            className="w-full h-full "
          />
        </div>
      </div>
    </section>
  );
}
