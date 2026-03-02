 import UnderlineSectionTitle from "@/components/shared/UnderlineSectionTitle";
import { whiteLabelFeatures } from "@/data/WhiteLabelFeatures";
const items = [
    {
      img: "/partner/sales/1.png",
      icon: (<svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="44" height="44" rx="8" fill="url(#paint0_linear_2944_10492)"/>
<path d="M22 12V32" stroke="white" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M27 15H19.5C18.5717 15 17.6815 15.3687 17.0251 16.0251C16.3687 16.6815 16 17.5717 16 18.5C16 19.4283 16.3687 20.3185 17.0251 20.9749C17.6815 21.6313 18.5717 22 19.5 22H24.5C25.4283 22 26.3185 22.3687 26.9749 23.0251C27.6313 23.6815 28 24.5717 28 25.5C28 26.4283 27.6313 27.3185 26.9749 27.9749C26.3185 28.6313 25.4283 29 24.5 29H16" stroke="white" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
<defs>
<linearGradient id="paint0_linear_2944_10492" x1="0" y1="0" x2="44" y2="44" gradientUnits="userSpaceOnUse">
<stop stopColor="#00C950"/>
<stop offset="1" stopColor="#00BC7D"/>
</linearGradient>
</defs>
</svg>

),
      title: "15% Flat Commission",
      text: "Earn a flat 15 percent commission on every successful deal with no earning cap"
    },
    {
      img: "/partner/sales/2.png",
      icon: (<svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="44" height="44" rx="8" fill="url(#paint0_linear_2944_10503)"/>
<path d="M14.5 26.4974C13 27.7574 12.5 31.4974 12.5 31.4974C12.5 31.4974 16.24 30.9974 17.5 29.4974C18.21 28.6574 18.2 27.3674 17.41 26.5874C17.0213 26.2164 16.5093 26.002 15.9722 25.9854C15.4352 25.9688 14.9109 26.1511 14.5 26.4974Z" stroke="white" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 25.0002L19 22.0002C19.5321 20.6197 20.2022 19.2963 21 18.0502C22.1652 16.1872 23.7876 14.6533 25.713 13.5943C27.6384 12.5354 29.8027 11.9866 32 12.0002C32 14.7202 31.22 19.5002 26 23.0002C24.7369 23.799 23.3968 24.469 22 25.0002Z" stroke="white" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 21.9956H14C14 21.9956 14.55 18.9656 16 17.9956C17.62 16.9156 21 17.9956 21 17.9956" stroke="white" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 25V30C22 30 25.03 29.45 26 28C27.08 26.38 26 23 26 23" stroke="white" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
<defs>
<linearGradient id="paint0_linear_2944_10503" x1="0" y1="0" x2="44" y2="44" gradientUnits="userSpaceOnUse">
<stop stopColor="#2B7FFF"/>
<stop offset="1" stopColor="#00B8DB"/>
</linearGradient>
</defs>
</svg>


),
      title: "High-Demand Solutions",
      text: "Sell in-demand solutions including Cloud, Cybersecurity, ERP, AI, and Digital Transformation"
    },
    {
      img: "/partner/sales/3.png",
      icon:(<svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="44" height="44" rx="8" fill="url(#paint0_linear_2944_10516)"/>
<g clipPath="url(#clip0_2944_10516)">
<path d="M22 32C27.5228 32 32 27.5228 32 22C32 16.4772 27.5228 12 22 12C16.4772 12 12 16.4772 12 22C12 27.5228 16.4772 32 22 32Z" stroke="white" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 12C19.4322 14.6962 18 18.2767 18 22C18 25.7233 19.4322 29.3038 22 32C24.5678 29.3038 26 25.7233 26 22C26 18.2767 24.5678 14.6962 22 12Z" stroke="white" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 22H32" stroke="white" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<linearGradient id="paint0_linear_2944_10516" x1="0" y1="0" x2="44" y2="44" gradientUnits="userSpaceOnUse">
<stop stopColor="#AD46FF"/>
<stop offset="1" stopColor="#F6339A"/>
</linearGradient>
<clipPath id="clip0_2944_10516">
<rect width="24" height="24" fill="white" transform="translate(10 10)"/>
</clipPath>
</defs>
</svg>

),
      title: "Global Technology Brand",
      text: " Represent a growing global technology company with proven delivery capability"
    },
    {
      img: "/partner/sales/4.png",
      icon:(<svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="44" height="44" rx="8" fill="url(#paint0_linear_2944_10528)"/>
<path d="M26 31V29C26 27.9391 25.5786 26.9217 24.8284 26.1716C24.0783 25.4214 23.0609 25 22 25H16C14.9391 25 13.9217 25.4214 13.1716 26.1716C12.4214 26.9217 12 27.9391 12 29V31" stroke="white" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 21C21.2091 21 23 19.2091 23 17C23 14.7909 21.2091 13 19 13C16.7909 13 15 14.7909 15 17C15 19.2091 16.7909 21 19 21Z" stroke="white" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M32 30.995V28.995C31.9993 28.1087 31.7044 27.2478 31.1614 26.5473C30.6184 25.8469 29.8581 25.3466 29 25.125" stroke="white" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M26 13.125C26.8604 13.3453 27.623 13.8457 28.1676 14.5473C28.7122 15.2489 29.0078 16.1118 29.0078 17C29.0078 17.8882 28.7122 18.7511 28.1676 19.4527C27.623 20.1543 26.8604 20.6547 26 20.875" stroke="white" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
<defs>
<linearGradient id="paint0_linear_2944_10528" x1="0" y1="0" x2="44" y2="44" gradientUnits="userSpaceOnUse">
<stop stopColor="#FF9500"/>
<stop offset="1" stopColor="#F54900"/>
</linearGradient>
</defs>
</svg>

),
      title: "Full Pre-Sales Support",
      text: "Receive full pre-sales and technical support during client discussions"
    },
    {
      img: "/partner/co-branded/feature/5.png",
      icon: (<svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="44" height="44" rx="8" fill="url(#paint0_linear_2944_10541)"/>
<g clipPath="url(#clip0_2944_10541)">
<path d="M22 32C27.5228 32 32 27.5228 32 22C32 16.4772 27.5228 12 22 12C16.4772 12 12 16.4772 12 22C12 27.5228 16.4772 32 22 32Z" stroke="white" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 28C25.3137 28 28 25.3137 28 22C28 18.6863 25.3137 16 22 16C18.6863 16 16 18.6863 16 22C16 25.3137 18.6863 28 22 28Z" stroke="white" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 24C23.1046 24 24 23.1046 24 22C24 20.8954 23.1046 20 22 20C20.8954 20 20 20.8954 20 22C20 23.1046 20.8954 24 22 24Z" stroke="white" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<linearGradient id="paint0_linear_2944_10541" x1="0" y1="0" x2="44" y2="44" gradientUnits="userSpaceOnUse">
<stop stopColor="#615FFF"/>
<stop offset="1" stopColor="#2B7FFF"/>
</linearGradient>
<clipPath id="clip0_2944_10541">
<rect width="24" height="24" fill="white" transform="translate(10 10)"/>
</clipPath>
</defs>
</svg>


),
      title: "Focus on Sales",
      text: "Focus purely on sales while Betopia handles contracts, delivery, and support"
    },
     {
      img: "/partner/sales/6.png",
      icon: (<svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="44" height="44" rx="8" fill="url(#paint0_linear_2944_10553)"/>
<path d="M32 17L23.5 25.5L18.5 20.5L12 27" stroke="white" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M26 17H32V23" stroke="white" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
<defs>
<linearGradient id="paint0_linear_2944_10553" x1="0" y1="0" x2="44" y2="44" gradientUnits="userSpaceOnUse">
<stop stopColor="#F6339A"/>
<stop offset="1" stopColor="#FF2056"/>
</linearGradient>
</defs>
</svg>


),
      title: "Flexible & Independent",
      text: "Work independently from any region with flexible earning potential"
    }
  ];

export default function SalesBenefits() {
  const firstItems = whiteLabelFeatures.slice(0, -2);
  const lastItems = whiteLabelFeatures.slice(-2);

  return (
    <section className="">
      <div className=" py-10 lg:py-20 lg:px-0 overflow-hidden max-w-[1440px] w-11/12 mx-auto px-4">

          <div className="max-w-[1440px] mx-auto text-center mb-10 lg:mb-16">

        <h3 className="bg-linear-to-r from-[#FF9500] to-[#F54900] p-1 rounded-full text-white  w-[200px] mx-auto mb-4">
            Your Rewards
          </h3>
          <h2 className="text-2xl md:text-[52px] font-bold text-[#414042]">
             <span className="text-[#FF9500]">Your Benefits  </span>as a Sales Agent 
          </h2>
          <span className="block mx-auto mt-[10px] rounded-full w-[103.86px] h-[5.19px] bg-[#FF9500]" />
        </div>

 <div className=" grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {items.map((card, i) => (
          <div
            key={i}
            className="bg-[#F5F7F8] rounded-2xl shadow-sm  hover:shadow-lg transition p-4 flex flex-col"
          >
            {/* Image */}
            <div className="rounded-xl overflow-hidden mb-4">
              <img src={card.img} className="w-full h-40 object-cover" />
            </div>

            {/* Icon */}
            <div className="w-10 h-10 flex items-center justify-center
                            bg-orange-100 text-orange-600 rounded-full mb-3">
              {card.icon}
            </div>

            {/* Content */}
            <h3 className="font-semibold text-lg md:text-xl lg:text-2xl mb-1">{card.title}</h3>
            <p className="text-lg md:text-xl text-gray-500">{card.text}</p>
          </div>
        ))}
      </div>

      </div>
    </section>
  );
}



