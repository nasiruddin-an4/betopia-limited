// components/OdooSection.tsx

import Image from "next/image";

export default function OdooSection() {
  return (
    <section className="relative w-[94%] lg:max-w-415 mx-auto my-10 h-187.5 lg:h-137.5 flex items-center justify-center overflow-hidden rounded-3xl x-2">
      {/* Background Image - Replace with your actual image URL */}
      <Image
        src="/product/erp_new.png" // Put your dark abstract background image here (e.g., upload to public/images)
        alt="Background"
        fill
        className="object-cover"
        priority
      />

      {/* Dark Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/80" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">
        {/* Powered By Badge */}
        <div className="inline-flex items-center gap-4 mb-8 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
          >
            <path
              d="M21.3292 17.7656L23.4173 29.5169C23.4407 29.6553 23.4212 29.7975 23.3616 29.9246C23.302 30.0516 23.205 30.1574 23.0836 30.2278C22.9622 30.2983 22.8223 30.33 22.6824 30.3187C22.5425 30.3074 22.4094 30.2537 22.3009 30.1647L17.3666 26.4613C17.1284 26.2833 16.839 26.1871 16.5417 26.1871C16.2443 26.1871 15.955 26.2833 15.7168 26.4613L10.7742 30.1633C10.6658 30.2521 10.5328 30.3058 10.3931 30.3171C10.2534 30.3284 10.1136 30.2968 9.99227 30.2266C9.87097 30.1563 9.77396 30.0508 9.71421 29.924C9.65445 29.7972 9.63477 29.6552 9.65781 29.5169L11.7445 17.7656"
              stroke="white"
              strokeWidth="2.75658"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.5393 19.2973C21.1065 19.2973 24.809 15.5948 24.809 11.0275C24.809 6.4603 21.1065 2.75781 16.5393 2.75781C11.972 2.75781 8.26953 6.4603 8.26953 11.0275C8.26953 15.5948 11.972 19.2973 16.5393 19.2973Z"
              stroke="white"
              strokeWidth="2.75658"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Powered By Industry Leaders
        </div>

        {/* Main Title */}
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Built on <span className="text-[#FF9500]">Trustworthy</span> Framework
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl max-w-4xl mx-auto mb-12 opacity-90">
          Betopia ERP leverages the power of Trustworthy Framework, the
          world&apos;s leading open-source ERP platform, combined with Python
          and PostgreSQL for maximum reliability, security, and scalability.
        </p>

        {/* Central Odoo Logo Circle */}
        {/* <div className="flex justify-center mb-12">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 bg-purple-600/80 rounded-full blur-xl" />
            <div className="relative bg-purple-900/50 backdrop-blur-md border border-purple-500/30 rounded-full w-full h-full flex items-center justify-center">
              <span className="text-6xl md:text-8xl font-bold text-white">odoo</span>
            </div>
          </div>
        </div> */}

        {/* Bottom Tech Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-8 max-w-4xl mx-auto">
          {/* Odoo Framework */}
          <div className="bg-white/10 backdrop-blur-md flex flex-col items-center justify-center rounded-2xl p-3 lg:p-6 border border-white/20">
            <div className="text-lg lg:text-2xl font-bold mb-2">
              Trustworthy
            </div>
            <p className="text-sm opacity-80">ERP Framework</p>
          </div>

          {/* PostgreSQL */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 lg:p-6 border border-white/20 flex flex-col items-center">
            <svg
              className="hidden lg:flex"
              xmlns="http://www.w3.org/2000/svg"
              width="89"
              height="89"
              viewBox="0 0 89 89"
              fill="none"
            >
              <path
                d="M44.1063 29.4042C62.3753 29.4042 77.1852 24.4675 77.1852 18.3779C77.1852 12.2882 62.3753 7.35156 44.1063 7.35156C25.8373 7.35156 11.0273 12.2882 11.0273 18.3779C11.0273 24.4675 25.8373 29.4042 44.1063 29.4042Z"
                stroke="#FF9500"
                strokeWidth="7.35088"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.0273 18.3789V69.835C11.0273 72.7594 14.5124 75.564 20.7159 77.6318C26.9194 79.6997 35.3332 80.8614 44.1063 80.8614C52.8794 80.8614 61.2931 79.6997 67.4966 77.6318C73.7001 75.564 77.1852 72.7594 77.1852 69.835V18.3789"
                stroke="#FF9500"
                strokeWidth="7.35088"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.0273 44.1055C11.0273 47.0298 14.5124 49.8344 20.7159 51.9023C26.9194 53.9701 35.3332 55.1318 44.1063 55.1318C52.8794 55.1318 61.2931 53.9701 67.4966 51.9023C73.7001 49.8344 77.1852 47.0298 77.1852 44.1055"
                stroke="#FF9500"
                strokeWidth="7.35088"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="text-lg lg:text-2xl font-semibold">PostgreSQL</div>
            <p className="text-sm opacity-80">Database</p>
          </div>

          {/* Python */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 lg:p-6 border border-white/20 flex flex-col items-center">
            <svg
              className="hidden lg:flex"
              xmlns="http://www.w3.org/2000/svg"
              width="89"
              height="89"
              viewBox="0 0 89 89"
              fill="none"
            >
              <path
                d="M44.917 7.35156H43.2998C41.3502 7.35156 39.4805 8.12603 38.102 9.50458C36.7234 10.8831 35.9489 12.7529 35.9489 14.7024V15.364C35.9476 16.6531 35.6073 17.9191 34.9622 19.0352C34.3171 20.1512 33.3899 21.078 32.2735 21.7225L30.6931 22.6414C29.5756 23.2866 28.308 23.6262 27.0176 23.6262C25.7273 23.6262 24.4597 23.2866 23.3422 22.6414L22.7909 22.3474C21.1041 21.3743 19.1001 21.1104 17.2189 21.6134C15.3377 22.1164 13.7329 23.3454 12.7569 25.0304L11.9483 26.4271C10.9753 28.1139 10.7113 30.1178 11.2144 31.999C11.7174 33.8803 12.9463 35.485 14.6314 36.461L15.1827 36.8286C16.2937 37.47 17.2175 38.391 17.8623 39.5C18.5071 40.609 18.8504 41.8675 18.8581 43.1503V45.0248C18.8633 46.3201 18.5261 47.5938 17.8806 48.7168C17.2352 49.8399 16.3045 50.7724 15.1827 51.4201L14.6314 51.7509C12.9463 52.7269 11.7174 54.3316 11.2144 56.2128C10.7113 58.0941 10.9753 60.098 11.9483 61.7848L12.7569 63.1815C13.7329 64.8665 15.3377 66.0955 17.2189 66.5985C19.1001 67.1015 21.1041 66.8376 22.7909 65.8645L23.3422 65.5705C24.4597 64.9253 25.7273 64.5857 27.0176 64.5857C28.308 64.5857 29.5756 64.9253 30.6931 65.5705L32.2735 66.4894C33.3899 67.1339 34.3171 68.0607 34.9622 69.1767C35.6073 70.2928 35.9476 71.5588 35.9489 72.8479V73.5095C35.9489 75.459 36.7234 77.3288 38.102 78.7073C39.4805 80.0859 41.3502 80.8603 43.2998 80.8603H44.917C46.8666 80.8603 48.7363 80.0859 50.1149 78.7073C51.4934 77.3288 52.2679 75.459 52.2679 73.5095V72.8479C52.2692 71.5588 52.6095 70.2928 53.2546 69.1767C53.8997 68.0607 54.827 67.1339 55.9433 66.4894L57.5238 65.5705C58.6412 64.9253 59.9088 64.5857 61.1992 64.5857C62.4895 64.5857 63.7572 64.9253 64.8746 65.5705L65.4259 65.8645C67.1127 66.8376 69.1167 67.1015 70.9979 66.5985C72.8791 66.0955 74.4839 64.8665 75.4599 63.1815L76.2685 61.7481C77.2415 60.0613 77.5055 58.0573 77.0024 56.1761C76.4994 54.2949 75.2705 52.6901 73.5854 51.7141L73.0341 51.4201C71.9123 50.7724 70.9816 49.8399 70.3362 48.7168C69.6907 47.5938 69.3535 46.3201 69.3587 45.0248V43.1871C69.3535 41.8918 69.6907 40.6181 70.3362 39.4951C70.9816 38.372 71.9123 37.4395 73.0341 36.7918L73.5854 36.461C75.2705 35.485 76.4994 33.8803 77.0024 31.999C77.5055 30.1178 77.2415 28.1139 76.2685 26.4271L75.4599 25.0304C74.4839 23.3454 72.8791 22.1164 70.9979 21.6134C69.1167 21.1104 67.1127 21.3743 65.4259 22.3474L64.8746 22.6414C63.7572 23.2866 62.4895 23.6262 61.1992 23.6262C59.9088 23.6262 58.6412 23.2866 57.5238 22.6414L55.9433 21.7225C54.827 21.078 53.8997 20.1512 53.2546 19.0352C52.6095 17.9191 52.2692 16.6531 52.2679 15.364V14.7024C52.2679 12.7529 51.4934 10.8831 50.1149 9.50458C48.7363 8.12603 46.8666 7.35156 44.917 7.35156Z"
                stroke="#FF9500"
                strokeWidth="7.35088"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M44.1083 55.1308C50.198 55.1308 55.1347 50.1941 55.1347 44.1044C55.1347 38.0148 50.198 33.0781 44.1083 33.0781C38.0187 33.0781 33.082 38.0148 33.082 44.1044C33.082 50.1941 38.0187 55.1308 44.1083 55.1308Z"
                stroke="#FF9500"
                strokeWidth="7.35088"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="text-lg lg:text-2xl font-semibold">Python</div>
            <p className="text-sm opacity-80">Backend</p>
          </div>
        </div>
      </div>
    </section>
  );
}
