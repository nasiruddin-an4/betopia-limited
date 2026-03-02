import PageSubtitle from "@/components/shared/heading/pageSubtitle";
import Image from "next/image";

export default function DeliveryModel() {
  return (
    <section className="w-11/12 mx-auto px-3 lg:pt-10  md:flex gap-10  items-start">
      {/* LEFT CONTENT */}
      <div className="space-y-5 md:w-7/12">
        <h2 className="text-[28px] md:text-4xl lg:text-[52px] font-bold">
          Our Global Delivery Model
        </h2>
        <PageSubtitle
          text="BETOPIA Limited follows a global delivery model designed to balance
          local market understanding with centralized execution."
        />
        <PageSubtitle
          text=" This approach enables clients to achieve faster time-to-market,
          operational efficiency, and long-term technology scalability."
        />

        {/* BENEFITS */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-6 md:pt-[10%]">
          <div className="">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.33594 36.6641H31.6693"
                stroke="#FF9500"
                strokeWidth="1.85882"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.33594 3.33594H31.6693"
                stroke="#FF9500"
                strokeWidth="1.85882"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M28.3307 36.6667V29.7133C28.3305 28.8293 27.9792 27.9816 27.3541 27.3567L19.9974 20L12.6407 27.3567C12.0156 27.9816 11.6643 28.8293 11.6641 29.7133V36.6667"
                stroke="#FF9500"
                strokeWidth="1.85882"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.6641 3.33594V10.2893C11.6643 11.1733 12.0156 12.021 12.6407 12.6459L19.9974 20.0026L27.3541 12.6459C27.9792 12.021 28.3305 11.1733 28.3307 10.2893V3.33594"
                stroke="#FF9500"
                strokeWidth="1.85882"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <p className="text-lg md:text-xl xl:text-2xl mt-3">
              Long-term partnership focus
            </p>
          </div>

          <div className="">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.0026 36.6693C29.2073 36.6693 36.6693 29.2073 36.6693 20.0026C36.6693 10.7979 29.2073 3.33594 20.0026 3.33594C10.7979 3.33594 3.33594 10.7979 3.33594 20.0026C3.33594 29.2073 10.7979 36.6693 20.0026 36.6693Z"
                stroke="#FF9500"
                strokeWidth="1.85882"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20 30C25.5228 30 30 25.5228 30 20C30 14.4772 25.5228 10 20 10C14.4772 10 10 14.4772 10 20C10 25.5228 14.4772 30 20 30Z"
                stroke="#FF9500"
                strokeWidth="1.85882"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M19.9974 23.3307C21.8383 23.3307 23.3307 21.8383 23.3307 19.9974C23.3307 18.1564 21.8383 16.6641 19.9974 16.6641C18.1564 16.6641 16.6641 18.1564 16.6641 19.9974C16.6641 21.8383 18.1564 23.3307 19.9974 23.3307Z"
                stroke="#FF9500"
                strokeWidth="1.85882"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <p className="text-lg md:text-xl xl:text-2xl mt-3">
              Consistent service quality across regions
            </p>
          </div>

          <div className="">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M33.3307 21.67C33.3307 30.0034 27.4974 34.17 20.5641 36.5867C20.201 36.7097 19.8066 36.7038 19.4474 36.57C12.4974 34.17 6.66406 30.0034 6.66406 21.67V10.0034C6.66406 9.56133 6.83966 9.1374 7.15222 8.82484C7.46478 8.51228 7.8887 8.33669 8.33073 8.33669C11.6641 8.33669 15.8307 6.33669 18.7307 3.80335C19.0838 3.50168 19.533 3.33594 19.9974 3.33594C20.4618 3.33594 20.911 3.50168 21.2641 3.80335C24.1807 6.35335 28.3307 8.33669 31.6641 8.33669C32.1061 8.33669 32.53 8.51228 32.8426 8.82484C33.1551 9.1374 33.3307 9.56133 33.3307 10.0034V21.67Z"
                stroke="#FF9500"
                strokeWidth="1.85882"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15 19.9974L18.3333 23.3307L25 16.6641"
                stroke="#FF9500"
                strokeWidth="1.85882"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <p className="text-lg md:text-xl xl:text-2xl mt-3">
              Secure & compliant operations
            </p>
          </div>

          <div className="">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.1159 6.89033C16.2077 5.92423 16.6565 5.02707 17.3744 4.37413C18.0924 3.72119 19.028 3.35937 19.9984 3.35938C20.9689 3.35937 21.9045 3.72119 22.6224 4.37413C23.3404 5.02707 23.7891 5.92423 23.8809 6.89033C23.9361 7.51442 24.1408 8.11603 24.4778 8.64423C24.8148 9.17243 25.274 9.61168 25.8167 9.92479C26.3594 10.2379 26.9695 10.4157 27.5954 10.443C28.2213 10.4704 28.8446 10.3466 29.4126 10.082C30.2944 9.68163 31.2937 9.62369 32.2159 9.91947C33.1381 10.2153 33.9173 10.8436 34.4018 11.6822C34.8863 12.5208 35.0414 13.5096 34.837 14.4563C34.6326 15.4029 34.0832 16.2397 33.2959 16.8037C32.7832 17.1634 32.3647 17.6413 32.0758 18.197C31.7868 18.7527 31.636 19.3698 31.636 19.9962C31.636 20.6225 31.7868 21.2396 32.0758 21.7953C32.3647 22.351 32.7832 22.8289 33.2959 23.1887C34.0832 23.7526 34.6326 24.5894 34.837 25.536C35.0414 26.4827 34.8863 27.4716 34.4018 28.3102C33.9173 29.1487 33.1381 29.7771 32.2159 30.0729C31.2937 30.3686 30.2944 30.3107 29.4126 29.9103C28.8446 29.6458 28.2213 29.5219 27.5954 29.5493C26.9695 29.5767 26.3594 29.7544 25.8167 30.0675C25.274 30.3806 24.8148 30.8199 24.4778 31.3481C24.1408 31.8763 23.9361 32.4779 23.8809 33.102C23.7891 34.0681 23.3404 34.9653 22.6224 35.6182C21.9045 36.2711 20.9689 36.633 19.9984 36.633C19.028 36.633 18.0924 36.2711 17.3744 35.6182C16.6565 34.9653 16.2077 34.0681 16.1159 33.102C16.0608 32.4777 15.8561 31.8758 15.519 31.3475C15.182 30.8191 14.7225 30.3797 14.1796 30.0665C13.6367 29.7534 13.0264 29.5757 12.4002 29.5485C11.7741 29.5213 11.1506 29.6454 10.5826 29.9103C9.70073 30.3107 8.70145 30.3686 7.77924 30.0729C6.85703 29.7771 6.07787 29.1487 5.59338 28.3102C5.1089 27.4716 4.95377 26.4827 5.15818 25.536C5.36259 24.5894 5.91191 23.7526 6.69924 23.1887C7.21194 22.8289 7.63046 22.351 7.91939 21.7953C8.20832 21.2396 8.35917 20.6225 8.35917 19.9962C8.35917 19.3698 8.20832 18.7527 7.91939 18.197C7.63046 17.6413 7.21194 17.1634 6.69924 16.8037C5.91302 16.2394 5.36466 15.403 5.16075 14.457C4.95683 13.5109 5.11193 12.5229 5.59588 11.6849C6.07984 10.8468 6.8581 10.2186 7.77939 9.9224C8.70069 9.62617 9.69922 9.68305 10.5809 10.082C11.1488 10.3466 11.7721 10.4704 12.3981 10.443C13.024 10.4157 13.6341 10.2379 14.1768 9.92479C14.7195 9.61168 15.1787 9.17243 15.5157 8.64423C15.8526 8.11603 16.0574 7.51442 16.1126 6.89033"
                stroke="#FF9500"
                strokeWidth="1.85882"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20 25C22.7614 25 25 22.7614 25 20C25 17.2386 22.7614 15 20 15C17.2386 15 15 17.2386 15 20C15 22.7614 17.2386 25 20 25Z"
                stroke="#FF9500"
                strokeWidth="1.85882"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <p className="text-lg md:text-xl xl:text-2xl mt-3">
              Flexible engagement models
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT CARD */}
      <div className="rounded-3xl border border-[#00000000] shadow-sm p-4 md:w-5/12 mt-6 md:mt-0">
        <div className="rounded-2xl  overflow-hidden mb-4">
          <Image
            src="/media/modal.svg"
            alt="Japan"
            width={600}
            height={382}
            className="w-full h-56 lg:h-[382px] object-cover"
          />
        </div>

        <div>
          <h4 className="text-lg md:text-xl xl:text-2xl font-semibold">
            Japan
          </h4>
          <p className="text-[#155DFC] text-lg md:text-xl xl:text-2xl font-semibold">
            Coming Soon
          </p>
        </div>
      </div>
    </section>
  );
}
