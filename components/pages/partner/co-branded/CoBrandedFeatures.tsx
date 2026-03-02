 import UnderlineSectionTitle from "@/components/shared/UnderlineSectionTitle";
import { whiteLabelFeatures } from "@/data/WhiteLabelFeatures";
const items = [
    {
      img: "/partner/co-branded/feature/1.png",
      icon: (<svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="56" height="56" rx="20" fill="#F79549"/>
<path d="M31.4787 28.8906L32.9937 37.4166C33.0107 37.517 32.9966 37.6202 32.9533 37.7124C32.9101 37.8046 32.8397 37.8813 32.7516 37.9324C32.6636 37.9835 32.562 38.0065 32.4605 37.9983C32.359 37.9902 32.2624 37.9512 32.1837 37.8866L28.6037 35.1996C28.4309 35.0705 28.2209 35.0007 28.0052 35.0007C27.7895 35.0007 27.5795 35.0705 27.4067 35.1996L23.8207 37.8856C23.742 37.9501 23.6456 37.989 23.5442 37.9972C23.4428 38.0054 23.3414 37.9825 23.2534 37.9315C23.1654 37.8805 23.095 37.804 23.0516 37.712C23.0083 37.62 22.994 37.5169 23.0107 37.4166L24.5247 28.8906" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M28 30C31.3137 30 34 27.3137 34 24C34 20.6863 31.3137 18 28 18C24.6863 18 22 20.6863 22 24C22 27.3137 24.6863 30 28 30Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

),
      title: "A Brand You Can Trust",
      text: "Work with a proven technology partner trusted by global clients for reliability, quality delivery, and long-term support."
    },
    {
      img: "/partner/co-branded/feature/2.png",
      icon: (<svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="56" height="56" rx="20" fill="#F79549"/>
<path d="M25 19H20C19.4477 19 19 19.4477 19 20V25C19 25.5523 19.4477 26 20 26H25C25.5523 26 26 25.5523 26 25V20C26 19.4477 25.5523 19 25 19Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M36 19H31C30.4477 19 30 19.4477 30 20V25C30 25.5523 30.4477 26 31 26H36C36.5523 26 37 25.5523 37 25V20C37 19.4477 36.5523 19 36 19Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M36 30H31C30.4477 30 30 30.4477 30 31V36C30 36.5523 30.4477 37 31 37H36C36.5523 37 37 36.5523 37 36V31C37 30.4477 36.5523 30 36 30Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M25 30H20C19.4477 30 19 30.4477 19 31V36C19 36.5523 19.4477 37 20 37H25C25.5523 37 26 36.5523 26 36V31C26 30.4477 25.5523 30 25 30Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

),
      title: "Instant Access to Proven Solutions",
      text: "Get access to Betopia’s ready portfolio of enterprise solutions so you can start selling and delivering faster."
    },
    {
      img: "/partner/co-branded/feature/3.png",
      icon:(<svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="56" height="56" rx="20" fill="#F79549"/>
<path d="M33.4982 37H24.9982C23.7001 36.9997 22.4276 36.6384 21.323 35.9565C20.2184 35.2746 19.3251 34.2989 18.7431 33.1386C18.161 31.9783 17.9131 30.679 18.027 29.3858C18.1409 28.0927 18.6121 26.8567 19.3881 25.816C20.164 24.7753 21.214 23.9708 22.4208 23.4925C23.6276 23.0142 24.9437 22.8809 26.2219 23.1075C27.5001 23.3341 28.6901 23.9116 29.6589 24.7756C30.6278 25.6396 31.3373 26.756 31.7082 28H33.4982C34.0892 28 34.6743 28.1164 35.2203 28.3425C35.7662 28.5687 36.2623 28.9002 36.6802 29.318C37.0981 29.7359 37.4295 30.232 37.6557 30.7779C37.8818 31.3239 37.9982 31.9091 37.9982 32.5C37.9982 33.091 37.8818 33.6761 37.6557 34.2221C37.4295 34.768 37.0981 35.2641 36.6802 35.682C36.2623 36.0998 35.7662 36.4313 35.2203 36.6575C34.6743 36.8836 34.0892 37 33.4982 37Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M37.9988 26.0018C37.9988 25.2061 37.6828 24.4431 37.1202 23.8804C36.5576 23.3178 35.7945 23.0018 34.9988 23.0018H32.7918C32.4526 21.8081 31.7198 20.7642 30.7124 20.0395C29.705 19.3148 28.4823 18.952 27.2427 19.0099C26.0031 19.0678 24.8195 19.5431 23.884 20.3585C22.9486 21.174 22.3163 22.2817 22.0898 23.5018" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

),
      title: "Enterprise-Ready Cloud Options",
      text: "Offer Microsoft, AWS, and Google Cloud solutions tailored for high-performance, security, and enterprise scale."
    },
    {
      img: "/partner/co-branded/feature/4.png",
      icon:(<svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="56" height="56" rx="20" fill="#F79549"/>
<path d="M28 32V37" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M32 30V37" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M36 26V37" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M38 19L29.354 27.646C29.3076 27.6926 29.2524 27.7295 29.1916 27.7547C29.1309 27.7799 29.0658 27.7929 29 27.7929C28.9342 27.7929 28.8691 27.7799 28.8084 27.7547C28.7476 27.7295 28.6924 27.6926 28.646 27.646L25.354 24.354C25.2602 24.2603 25.1331 24.2076 25.0005 24.2076C24.8679 24.2076 24.7408 24.2603 24.647 24.354L18 31" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20 34V37" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M24 30V37" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

),
      title: "Grow Faster with Strong Revenue Potential",
      text: "Unlock high-value opportunities with end-to-end support that helps you close deals and scale revenue confidently."
    },
    {
      img: "/partner/co-branded/feature/5.png",
      icon: (<svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="56" height="56" rx="20" fill="#F79549"/>
<path d="M32 37V35C32 33.9391 31.5786 32.9217 30.8284 32.1716C30.0783 31.4214 29.0609 31 28 31H22C20.9391 31 19.9217 31.4214 19.1716 32.1716C18.4214 32.9217 18 33.9391 18 35V37" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M32 19.1289C32.8578 19.3513 33.6174 19.8522 34.1597 20.553C34.702 21.2538 34.9962 22.1148 34.9962 23.0009C34.9962 23.887 34.702 24.748 34.1597 25.4488C33.6174 26.1496 32.8578 26.6505 32 26.8729" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M38 36.9989V34.9989C37.9993 34.1126 37.7044 33.2517 37.1614 32.5512C36.6184 31.8508 35.8581 31.3505 35 31.1289" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M25 27C27.2091 27 29 25.2091 29 23C29 20.7909 27.2091 19 25 19C22.7909 19 21 20.7909 21 23C21 25.2091 22.7909 27 25 27Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

),
      title: "Your Personal Partner Manager",
      text: "A dedicated expert supports you from client onboarding to project delivery, ensuring smooth execution at every step."
    },
     {
      img: "/partner/co-branded/feature/6.png",
      icon: (<svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="56" height="56" rx="20" fill="#F79549"/>
<path d="M28 23V37" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 34C18.7348 34 18.4804 33.8946 18.2929 33.7071C18.1054 33.5196 18 33.2652 18 33V20C18 19.7348 18.1054 19.4804 18.2929 19.2929C18.4804 19.1054 18.7348 19 19 19H24C25.0609 19 26.0783 19.4214 26.8284 20.1716C27.5786 20.9217 28 21.9391 28 23C28 21.9391 28.4214 20.9217 29.1716 20.1716C29.9217 19.4214 30.9391 19 32 19H37C37.2652 19 37.5196 19.1054 37.7071 19.2929C37.8946 19.4804 38 19.7348 38 20V33C38 33.2652 37.8946 33.5196 37.7071 33.7071C37.5196 33.8946 37.2652 34 37 34H31C30.2044 34 29.4413 34.3161 28.8787 34.8787C28.3161 35.4413 28 36.2044 28 37C28 36.2044 27.6839 35.4413 27.1213 34.8787C26.5587 34.3161 25.7956 34 25 34H19Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>


),
      title: "We Prepare You to Win",
      text: "Get product training, sales support, and marketing materials so you’re fully equipped to succeed in every engagement."
    }
  ];

export default function CoBrandedFeatures() {
  const firstItems = whiteLabelFeatures.slice(0, -2);
  const lastItems = whiteLabelFeatures.slice(-2);

  return (
    <section className="">
      <div className="w-full py-10 pb-[68px] md:pt-[62px] px-4 lg:px-0 overflow-hidden max-w-[1404px] mx-auto">

        <UnderlineSectionTitle
          title="Key Features"
          wrapperClassName="mb-8 md:mb-[43px] text-center text-[#4A5565]"
        />

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



