"use client";


import {  Building2, Phone, Mail } from "lucide-react";

export default function ContactFormRightSide() {
  const reasons = [
    {
      icon: (
        <svg width="98" height="98" viewBox="0 0 98 98" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_dd_1707_31803)">
<path d="M14.6875 19.5808C14.6875 10.1193 22.3576 2.44922 31.8191 2.44922H66.0822C75.5438 2.44922 83.2138 10.1193 83.2138 19.5808V53.844C83.2138 63.3055 75.5437 70.9755 66.0822 70.9755H31.8191C22.3576 70.9755 14.6875 63.3055 14.6875 53.844V19.5808Z" fill="url(#paint0_linear_1707_31803)" shapeRendering="crispEdges"/>
<path d="M54.6665 49.5619V46.7066C54.6665 45.1921 54.0649 43.7396 52.994 42.6687C51.923 41.5977 50.4705 40.9961 48.956 40.9961H40.3902C38.8757 40.9961 37.4232 41.5977 36.3523 42.6687C35.2813 43.7396 34.6797 45.1921 34.6797 46.7066V49.5619" stroke="white" strokeWidth="2.85526" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M44.6715 35.2843C47.8253 35.2843 50.382 32.7276 50.382 29.5738C50.382 26.42 47.8253 23.8633 44.6715 23.8633C41.5176 23.8633 38.9609 26.42 38.9609 29.5738C38.9609 32.7276 41.5176 35.2843 44.6715 35.2843Z" stroke="white" strokeWidth="2.85526" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M63.2282 49.5638V46.7085C63.2273 45.4433 62.8061 44.2141 62.0309 43.2141C61.2558 42.2141 60.1704 41.4999 58.9453 41.1836" stroke="white" strokeWidth="2.85526" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M54.6641 24.0508C55.8924 24.3653 56.9812 25.0797 57.7587 26.0813C58.5361 27.083 58.9582 28.3149 58.9582 29.5829C58.9582 30.8508 58.5361 32.0828 57.7587 33.0844C56.9812 34.086 55.8924 34.8004 54.6641 35.1149" stroke="white" strokeWidth="2.85526" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<filter id="filter0_dd_1707_31803" x="0.0032897" y="0.00185061" width="97.8919" height="97.8958" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="4.89474" operator="erode" in="SourceAlpha" result="effect1_dropShadow_1707_31803"/>
<feOffset dy="4.89474"/>
<feGaussianBlur stdDeviation="3.67105"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1707_31803"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="3.67105" operator="erode" in="SourceAlpha" result="effect2_dropShadow_1707_31803"/>
<feOffset dy="12.2368"/>
<feGaussianBlur stdDeviation="9.17763"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="effect1_dropShadow_1707_31803" result="effect2_dropShadow_1707_31803"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_1707_31803" result="shape"/>
</filter>
<linearGradient id="paint0_linear_1707_31803" x1="14.6875" y1="2.44922" x2="83.2138" y2="70.9755" gradientUnits="userSpaceOnUse">
<stop stopColor="#2B7FFF"/>
<stop offset="1" stopColor="#00B8DB"/>
</linearGradient>
</defs>
</svg>

      ),
      color: "text-blue-500",
      bg: "bg-blue-50",
      title: "Expert Guidance",
      description:
        "Get insights from our global enterprise consultants with decades of combined experience in delivering successful digital transformations.",
    },
    {
      icon: (<svg width="98" height="98" viewBox="0 0 98 98" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_dd_1707_31818)">
<path d="M14.6875 19.5808C14.6875 10.1193 22.3576 2.44922 31.8191 2.44922H66.0822C75.5438 2.44922 83.2138 10.1193 83.2138 19.5808V53.844C83.2138 63.3055 75.5437 70.9755 66.0822 70.9755H31.8191C22.3576 70.9755 14.6875 63.3055 14.6875 53.844V19.5808Z" fill="url(#paint0_linear_1707_31818)" shapeRendering="crispEdges"/>
<path d="M37.5341 39.5689C37.2639 39.5698 36.999 39.4941 36.7702 39.3504C36.5414 39.2068 36.358 39.0012 36.2414 38.7575C36.1248 38.5138 36.0797 38.242 36.1114 37.9737C36.1431 37.7054 36.2503 37.4517 36.4205 37.2419L50.5541 22.68C50.6601 22.5576 50.8046 22.4749 50.9638 22.4455C51.123 22.4161 51.2875 22.4416 51.4302 22.518C51.573 22.5943 51.6856 22.717 51.7495 22.8658C51.8134 23.0145 51.8248 23.1806 51.7818 23.3367L49.0408 31.9311C48.9599 32.1474 48.9328 32.3801 48.9617 32.6092C48.9905 32.8383 49.0746 33.057 49.2065 33.2465C49.3385 33.436 49.5144 33.5907 49.7193 33.6973C49.9242 33.8038 50.1518 33.8591 50.3827 33.8584H60.3762C60.6463 33.8574 60.9112 33.9332 61.14 34.0768C61.3688 34.2205 61.5522 34.4261 61.6688 34.6697C61.7854 34.9134 61.8305 35.1852 61.7988 35.4535C61.7671 35.7218 61.6599 35.9756 61.4897 36.1854L47.3562 50.7472C47.2501 50.8696 47.1057 50.9523 46.9465 50.9818C46.7873 51.0112 46.6228 50.9856 46.48 50.9093C46.3372 50.8329 46.2246 50.7103 46.1608 50.5615C46.0969 50.4127 46.0855 50.2467 46.1284 50.0905L48.8695 41.4962C48.9503 41.2799 48.9774 41.0472 48.9486 40.8181C48.9197 40.5889 48.8357 40.3702 48.7037 40.1807C48.5718 39.9912 48.3958 39.8366 48.1909 39.73C47.9861 39.6234 47.7584 39.5681 47.5275 39.5689H37.5341Z" stroke="white" strokeWidth="2.85526" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<filter id="filter0_dd_1707_31818" x="0.0032897" y="0.00185061" width="97.8919" height="97.8958" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="4.89474" operator="erode" in="SourceAlpha" result="effect1_dropShadow_1707_31818"/>
<feOffset dy="4.89474"/>
<feGaussianBlur stdDeviation="3.67105"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1707_31818"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="3.67105" operator="erode" in="SourceAlpha" result="effect2_dropShadow_1707_31818"/>
<feOffset dy="12.2368"/>
<feGaussianBlur stdDeviation="9.17763"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="effect1_dropShadow_1707_31818" result="effect2_dropShadow_1707_31818"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_1707_31818" result="shape"/>
</filter>
<linearGradient id="paint0_linear_1707_31818" x1="14.6875" y1="2.44922" x2="83.2138" y2="70.9755" gradientUnits="userSpaceOnUse">
<stop stopColor="#AD46FF"/>
<stop offset="1" stopColor="#F6339A"/>
</linearGradient>
</defs>
</svg>
),
      color: "text-purple-500",
      bg: "bg-purple-50",
      title: "Tailored Solutions",
      description:
        "Discuss custom cloud, AI, cybersecurity, and proprietary product solutions designed specifically for your business needs.",
    },
    {
      icon: (
        <svg width="98" height="98" viewBox="0 0 98 98" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_dd_1707_31830)">
<path d="M14.6875 19.5808C14.6875 10.1193 22.3576 2.44922 31.8191 2.44922H66.0822C75.5438 2.44922 83.2138 10.1193 83.2138 19.5808V53.844C83.2138 63.3055 75.5437 70.9755 66.0822 70.9755H31.8191C22.3576 70.9755 14.6875 63.3055 14.6875 53.844V19.5808Z" fill="url(#paint0_linear_1707_31830)" shapeRendering="crispEdges"/>
<path d="M48.956 50.9901C56.8406 50.9901 63.2323 44.5984 63.2323 36.7138C63.2323 28.8292 56.8406 22.4375 48.956 22.4375C41.0714 22.4375 34.6797 28.8292 34.6797 36.7138C34.6797 44.5984 41.0714 50.9901 48.956 50.9901Z" stroke="white" strokeWidth="2.85526" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M48.9531 28.1484V36.7142L54.6637 39.5695" stroke="white" strokeWidth="2.85526" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<filter id="filter0_dd_1707_31830" x="0.0032897" y="0.00185061" width="97.8919" height="97.8958" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="4.89474" operator="erode" in="SourceAlpha" result="effect1_dropShadow_1707_31830"/>
<feOffset dy="4.89474"/>
<feGaussianBlur stdDeviation="3.67105"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1707_31830"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="3.67105" operator="erode" in="SourceAlpha" result="effect2_dropShadow_1707_31830"/>
<feOffset dy="12.2368"/>
<feGaussianBlur stdDeviation="9.17763"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="effect1_dropShadow_1707_31830" result="effect2_dropShadow_1707_31830"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_1707_31830" result="shape"/>
</filter>
<linearGradient id="paint0_linear_1707_31830" x1="14.6875" y1="2.44922" x2="83.2138" y2="70.9755" gradientUnits="userSpaceOnUse">
<stop stopColor="#00C950"/>
<stop offset="1" stopColor="#00BC7D"/>
</linearGradient>
</defs>
</svg>

      ),
      color: "text-green-500",
      bg: "bg-green-50",
      title: "Quick Response",
      description:
        "Our team ensures fast follow-up to accelerate your project or partnership. Expect to hear from us within 24 hours.",
    },
    {
      icon: (<svg width="98" height="98" viewBox="0 0 98 98" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_dd_1707_31843)">
<path d="M14.6875 19.5808C14.6875 10.1193 22.3576 2.44922 31.8191 2.44922H66.0822C75.5438 2.44922 83.2138 10.1193 83.2138 19.5808V53.844C83.2138 63.3055 75.5437 70.9755 66.0822 70.9755H31.8191C22.3576 70.9755 14.6875 63.3055 14.6875 53.844V19.5808Z" fill="url(#paint0_linear_1707_31843)" shapeRendering="crispEdges"/>
<path d="M60.3734 33.8586C60.3734 40.9867 52.4657 48.4104 49.8103 50.7032C49.5629 50.8892 49.2618 50.9898 48.9523 50.9898C48.6428 50.9898 48.3417 50.8892 48.0943 50.7032C45.4389 48.4104 37.5312 40.9867 37.5312 33.8586C37.5312 30.8295 38.7345 27.9245 40.8764 25.7826C43.0183 23.6408 45.9233 22.4375 48.9523 22.4375C51.9814 22.4375 54.8863 23.6408 57.0282 25.7826C59.1701 27.9245 60.3734 30.8295 60.3734 33.8586Z" stroke="white" strokeWidth="2.85526" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M48.9548 38.14C51.3201 38.14 53.2377 36.2225 53.2377 33.8571C53.2377 31.4917 51.3201 29.5742 48.9548 29.5742C46.5894 29.5742 44.6719 31.4917 44.6719 33.8571C44.6719 36.2225 46.5894 38.14 48.9548 38.14Z" stroke="white" strokeWidth="2.85526" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<filter id="filter0_dd_1707_31843" x="0.0032897" y="0.00185061" width="97.8919" height="97.8958" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="4.89474" operator="erode" in="SourceAlpha" result="effect1_dropShadow_1707_31843"/>
<feOffset dy="4.89474"/>
<feGaussianBlur stdDeviation="3.67105"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1707_31843"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="3.67105" operator="erode" in="SourceAlpha" result="effect2_dropShadow_1707_31843"/>
<feOffset dy="12.2368"/>
<feGaussianBlur stdDeviation="9.17763"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="effect1_dropShadow_1707_31843" result="effect2_dropShadow_1707_31843"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_1707_31843" result="shape"/>
</filter>
<linearGradient id="paint0_linear_1707_31843" x1="14.6875" y1="2.44922" x2="83.2138" y2="70.9755" gradientUnits="userSpaceOnUse">
<stop stopColor="#FF9500"/>
<stop offset="1" stopColor="#F54900"/>
</linearGradient>
</defs>
</svg>
),
      color: "text-[#FF9500]",
      bg: "bg-orange-50",
      title: "Global Delivery",
      description:
        "Access Betopia’s delivery hubs across Dhaka, Manila, and Eastern Europe for seamless 24/7 execution and support.",
    },
  ];

  return (
    <section className="px-4 py-10 lg:py-20 bg-gray-50 ">
      <div className="max-w-7xl mx-auto">
        {/* Why Contact Betopia */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-20 ">
          Why Contact Betopia?
        </h2>

        <div className="grid grid-cols-1  gap-8 mb-8 ">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg p-5 flex gap-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div
                
              >
                {reason.icon}
              </div>
              <div>
                <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-1">
                  {reason.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Information */}
   <div className="relative rounded-[20px] p-10 lg:p-12 text-white">
  <video
    className="absolute inset-0 w-full h-full object-cover z-0 rounded-[20px]"
    autoPlay
    loop
    muted
    playsInline
  >
    <source src="/videos/contact2.mp4" type="video/mp4" />
  </video>

  {/* overlay (optional, makes text easier to read) */}
  <div className="absolute inset-0 bg-black/50 z-0 rounded-[20px]" />
    <div className="relative z-10">
    <h3 className="text-2xl lg:text-3xl font-bold mb-8">
      Contact Information
    </h3>


          <div className="grid grid-cols-1 gap-8">
            <div className="flex items-start gap-4">
              <div className="bg-[#FF950033] rounded-full flex items-center justify-center w-12 h-12">
                <Building2 className="w-6 h-6 text-orange-400 mt-1 flex-shrink-0" />
              </div>
              <div>
                <p className="font-semibold text-lg mb-1">Location</p>
                <p className="text-gray-300">C/A, Ak Khandaker Road Kaderia Tower J-28/8-B, Mohakhali, Dhaka 1213</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-[#FF950033] rounded-full flex items-center justify-center w-12 h-12">
                <Phone className="w-6 h-6 text-orange-400 mt-1 flex-shrink-0" />
              </div>
              <div>
                <p className="font-semibold text-lg mb-1">Phone</p>
                <p className="text-gray-300">+8801332840871</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-[#FF950033] rounded-full flex items-center justify-center w-12 h-12">
                <Mail className="w-6 h-6 text-orange-400 mt-1 flex-shrink-0" />
              </div>
              <div>
                <p className="font-semibold text-lg mb-1">Email</p>
                <a
                  href="mailto:info@betopia.com"
                  className="text-gray-300 hover:text-orange-400 transition"
                >
                  sales@betopialimited.com
                </a>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
