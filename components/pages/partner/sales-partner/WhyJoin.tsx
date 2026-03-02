"use client";
import Image from "next/image";

const whyChooseData = [
  {
    id: "01",
    icon:(<svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 14C0 6.26801 6.26801 0 14 0H42C49.732 0 56 6.26801 56 14V42C56 49.732 49.732 56 42 56H14C6.26801 56 0 49.732 0 42V14Z" fill="url(#paint0_linear_2931_18797)"/>
<path d="M27.9987 39.6693C34.442 39.6693 39.6654 34.4459 39.6654 28.0026C39.6654 21.5593 34.442 16.3359 27.9987 16.3359C21.5554 16.3359 16.332 21.5593 16.332 28.0026C16.332 34.4459 21.5554 39.6693 27.9987 39.6693Z" stroke="white" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M28 35C31.866 35 35 31.866 35 28C35 24.134 31.866 21 28 21C24.134 21 21 24.134 21 28C21 31.866 24.134 35 28 35Z" stroke="white" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M28.0013 30.3307C29.29 30.3307 30.3346 29.2861 30.3346 27.9974C30.3346 26.7087 29.29 25.6641 28.0013 25.6641C26.7126 25.6641 25.668 26.7087 25.668 27.9974C25.668 29.2861 26.7126 30.3307 28.0013 30.3307Z" stroke="white" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round"/>
<defs>
<linearGradient id="paint0_linear_2931_18797" x1="0" y1="0" x2="56" y2="56" gradientUnits="userSpaceOnUse">
<stop stopColor="#2B7FFF"/>
<stop offset="1" stopColor="#00B8DB"/>
</linearGradient>
</defs>
</svg>
),
    title: "Focus on Sales Only",
    description:
      "No technical delivery, no operations, just pure relationship building and deal closing",
  },
  {
    id: "02",
    icon:(<svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 14C0 6.26801 6.26801 0 14 0H42C49.732 0 56 6.26801 56 14V42C56 49.732 49.732 56 42 56H14C6.26801 56 0 49.732 0 42V14Z" fill="url(#paint0_linear_2931_18808)"/>
<path d="M32.0552 29.0391L33.8227 38.9861C33.8425 39.1032 33.8261 39.2236 33.7756 39.3311C33.7252 39.4386 33.6431 39.5282 33.5403 39.5878C33.4376 39.6474 33.3191 39.6743 33.2007 39.6647C33.0823 39.6552 32.9696 39.6097 32.8777 39.5344L28.7011 36.3996C28.4994 36.2489 28.2545 36.1675 28.0028 36.1675C27.7511 36.1675 27.5062 36.2489 27.3046 36.3996L23.1209 39.5332C23.0291 39.6084 22.9166 39.6538 22.7983 39.6634C22.68 39.6729 22.5617 39.6462 22.459 39.5867C22.3563 39.5273 22.2742 39.4379 22.2236 39.3306C22.1731 39.2233 22.1564 39.1031 22.1759 38.9861L23.9422 29.0391" stroke="white" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M28 30.3359C31.866 30.3359 35 27.2019 35 23.3359C35 19.4699 31.866 16.3359 28 16.3359C24.134 16.3359 21 19.4699 21 23.3359C21 27.2019 24.134 30.3359 28 30.3359Z" stroke="white" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round"/>
<defs>
<linearGradient id="paint0_linear_2931_18808" x1="0" y1="0" x2="56" y2="56" gradientUnits="userSpaceOnUse">
<stop stopColor="#FF9500"/>
<stop offset="1" stopColor="#F54900"/>
</linearGradient>
</defs>
</svg>

),
    title: "Credibility & Portfolio",
    description:
      "Represent a proven technology company with enterprise-grade solutions",
  },
  {
    id: "03",
    icon:(<svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 14C0 6.26801 6.26801 0 14 0H42C49.732 0 56 6.26801 56 14V42C56 49.732 49.732 56 42 56H14C6.26801 56 0 49.732 0 42V14Z" fill="url(#paint0_linear_2931_18818)"/>
<path d="M32.6654 38.5V36.1667C32.6654 34.929 32.1737 33.742 31.2985 32.8668C30.4234 31.9917 29.2364 31.5 27.9987 31.5H20.9987C19.761 31.5 18.574 31.9917 17.6989 32.8668C16.8237 33.742 16.332 34.929 16.332 36.1667V38.5" stroke="white" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M24.4987 26.8333C27.076 26.8333 29.1654 24.744 29.1654 22.1667C29.1654 19.5893 27.076 17.5 24.4987 17.5C21.9214 17.5 19.832 19.5893 19.832 22.1667C19.832 24.744 21.9214 26.8333 24.4987 26.8333Z" stroke="white" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M39.668 38.4968V36.1634C39.6672 35.1295 39.3231 34.125 38.6896 33.3078C38.0561 32.4906 37.1691 31.9069 36.168 31.6484" stroke="white" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M32.668 17.6484C33.6718 17.9055 34.5615 18.4893 35.1969 19.3078C35.8322 20.1263 36.1771 21.1331 36.1771 22.1693C36.1771 23.2055 35.8322 24.2122 35.1969 25.0307C34.5615 25.8493 33.6718 26.4331 32.668 26.6901" stroke="white" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round"/>
<defs>
<linearGradient id="paint0_linear_2931_18818" x1="0" y1="0" x2="56" y2="56" gradientUnits="userSpaceOnUse">
<stop stopColor="#AD46FF"/>
<stop offset="1" stopColor="#F6339A"/>
</linearGradient>
</defs>
</svg>

),
    title: "Expert Backing",
    description:
      "Full pre-sales and technical support during all client discussions",
  },
  {
    id: "04",
    icon:(<svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 14C0 6.26801 6.26801 0 14 0H42C49.732 0 56 6.26801 56 14V42C56 49.732 49.732 56 42 56H14C6.26801 56 0 49.732 0 42V14Z" fill="url(#paint0_linear_2931_18830)"/>
<path d="M18.6667 30.3312C18.446 30.3319 18.2295 30.27 18.0425 30.1526C17.8555 30.0353 17.7057 29.8672 17.6104 29.6681C17.5151 29.4689 17.4782 29.2468 17.5042 29.0276C17.5301 28.8083 17.6176 28.6009 17.7567 28.4295L29.3067 16.5295C29.3934 16.4295 29.5114 16.3619 29.6416 16.3379C29.7717 16.3138 29.9061 16.3347 30.0228 16.3971C30.1394 16.4595 30.2314 16.5597 30.2836 16.6813C30.3358 16.8029 30.3452 16.9386 30.3101 17.0662L28.0701 24.0895C28.004 24.2663 27.9818 24.4564 28.0054 24.6437C28.029 24.8309 28.0977 25.0096 28.2055 25.1645C28.3133 25.3194 28.4571 25.4458 28.6246 25.5329C28.792 25.6199 28.978 25.6651 29.1667 25.6645H37.3334C37.5542 25.6637 37.7706 25.7256 37.9576 25.843C38.1446 25.9604 38.2945 26.1284 38.3898 26.3276C38.4851 26.5267 38.5219 26.7488 38.496 26.9681C38.4701 27.1873 38.3825 27.3947 38.2434 27.5662L26.6934 39.4662C26.6068 39.5662 26.4887 39.6337 26.3586 39.6578C26.2285 39.6819 26.0941 39.661 25.9774 39.5986C25.8607 39.5362 25.7687 39.4359 25.7165 39.3144C25.6643 39.1928 25.655 39.0571 25.6901 38.9295L27.9301 31.9062C27.9961 31.7294 28.0183 31.5392 27.9947 31.352C27.9711 31.1648 27.9025 30.986 27.7946 30.8312C27.6868 30.6763 27.543 30.5499 27.3756 30.4628C27.2082 30.3757 27.0221 30.3305 26.8334 30.3312H18.6667Z" stroke="white" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round"/>
<defs>
<linearGradient id="paint0_linear_2931_18830" x1="0" y1="0" x2="56" y2="56" gradientUnits="userSpaceOnUse">
<stop stopColor="#00C950"/>
<stop offset="1" stopColor="#00BC7D"/>
</linearGradient>
</defs>
</svg>

),
    title: "Unlimited Potential",
    description:
      "Work independently from anywhere with no earning limits",
  },

];

export default function WhyJoin() {
  return (
    <div className="pt-10  lg:pt-20  w-11/12 mx-auto px-4">
      <div className="  text-center">
      <div className="max-w-[1440px] mx-auto">

        <h3 className="bg-linear-to-r from-[#FF9500] to-[#F54900] p-1 rounded-full text-white  w-[200px] mx-auto mb-4">
            Why Choose Us
          </h3>
          <h2 className="text-2xl md:text-[52px] font-bold text-[#414042]">
             <span className="text-[#FF9500]">Why Join Betopia  </span>as a Sales Agent 
          </h2>
          <span className="block mx-auto mt-[10px] rounded-full w-[103.86px] h-[5.19px] bg-[#FF9500]" />
        </div>

        <p className="text-[#4A5565] text-center text-lg md:text-xl lg:text-2xl px-4 md:px-0 my-8 md:w-[70%] mx-auto">
          This program is built for sales professionals who want to focus on selling without managing technical delivery or operational execution. With Betopia, you gain the credibility, portfolio, and expert backing needed to sell enterprise technology solutions confidently and consistently.
        </p>
      </div>

        <div
          className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8
                      items-stretch px-8 xl:px-0 "
        >
             {/* Image from right */}
          <div className="relative w-full h-[300px] lg:h-full rounded-2xl overflow-hidden">
            <Image
              src="/partner/sales/sales.jpg"
              alt=""
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-6 lg:space-y-8">
            {whyChooseData.map((item) => (
              <div
                key={item.id}
                className="flex flex-col md:flex-row items-start gap-5 bg-linear-to-b from-[#F9FAFB] to-[#FFFFFF] border border-[#F3F4F6] p-6 rounded-2xl shadow-xl"
              >
                <div className="">
                 
                    {item.icon}

                </div>

                <div>
                  <h5 className="text-2xl md:text-3xl font-semibold text-[#0F172B]">
                    {item.title}
                  </h5>

                  <p className="mt-3 text-lg md:text-xl font-normal text-[#45556C]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

       
        </div>
      </div>
  );
}
