import {
  Target,
  Handshake,
  Rocket,
  DollarSign,
} from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Generate Leads",
    desc: "You generate and qualify leads in your market",
    icon: (<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 16C0 7.16344 7.16344 0 16 0H48C56.8366 0 64 7.16344 64 16V48C64 56.8366 56.8366 64 48 64H16C7.16344 64 0 56.8366 0 48V16Z" fill="url(#paint0_linear_2944_9683)"/>
<path d="M32.0013 45.3307C39.3651 45.3307 45.3346 39.3612 45.3346 31.9974C45.3346 24.6336 39.3651 18.6641 32.0013 18.6641C24.6375 18.6641 18.668 24.6336 18.668 31.9974C18.668 39.3612 24.6375 45.3307 32.0013 45.3307Z" stroke="white" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M32 40C36.4183 40 40 36.4183 40 32C40 27.5817 36.4183 24 32 24C27.5817 24 24 27.5817 24 32C24 36.4183 27.5817 40 32 40Z" stroke="white" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M31.9987 34.6693C33.4715 34.6693 34.6654 33.4754 34.6654 32.0026C34.6654 30.5298 33.4715 29.3359 31.9987 29.3359C30.5259 29.3359 29.332 30.5298 29.332 32.0026C29.332 33.4754 30.5259 34.6693 31.9987 34.6693Z" stroke="white" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
<defs>
<linearGradient id="paint0_linear_2944_9683" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
<stop stopColor="#2B7FFF"/>
<stop offset="1" stopColor="#00B8DB"/>
</linearGradient>
</defs>
</svg>
),
    color: "bg-blue-500",
  },
  {
    step: "02",
    title: "Betopia Supports",
    desc: "Betopia supports solutioning and deal closure",
    icon: (<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 16C0 7.16344 7.16344 0 16 0H48C56.8366 0 64 7.16344 64 16V48C64 56.8366 56.8366 64 48 64H16C7.16344 64 0 56.8366 0 48V16Z" fill="url(#paint0_linear_2944_9696)"/>
<path d="M30.668 38.6693L33.3346 41.3359C33.5973 41.5986 33.9091 41.8069 34.2522 41.9491C34.5954 42.0912 34.9632 42.1644 35.3346 42.1644C35.7061 42.1644 36.0739 42.0912 36.417 41.9491C36.7602 41.8069 37.072 41.5986 37.3346 41.3359C37.5973 41.0733 37.8056 40.7615 37.9478 40.4183C38.0899 40.0752 38.1631 39.7074 38.1631 39.3359C38.1631 38.9645 38.0899 38.5967 37.9478 38.2535C37.8056 37.9104 37.5973 37.5986 37.3346 37.3359" stroke="white" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M34.667 34.6673L38.0003 38.0007C38.5307 38.5311 39.2502 38.8291 40.0003 38.8291C40.7504 38.8291 41.4699 38.5311 42.0003 38.0007C42.5307 37.4702 42.8287 36.7508 42.8287 36.0007C42.8287 35.2505 42.5307 34.5311 42.0003 34.0007L36.827 28.8273C36.077 28.0783 35.0603 27.6575 34.0003 27.6575C32.9403 27.6575 31.9236 28.0783 31.1736 28.8273L30.0003 30.0007C29.4699 30.5311 28.7504 30.8291 28.0003 30.8291C27.2502 30.8291 26.5307 30.5311 26.0003 30.0007C25.4699 29.4702 25.1719 28.7508 25.1719 28.0007C25.1719 27.2505 25.4699 26.5311 26.0003 26.0007L29.747 22.254C30.9633 21.0409 32.5495 20.2681 34.2545 20.058C35.9595 19.8479 37.6859 20.2124 39.1603 21.094L39.787 21.4673C40.3547 21.81 41.0297 21.9288 41.6803 21.8007L44.0003 21.334" stroke="white" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M44.0013 20L45.3346 34.6667H42.668" stroke="white" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20.0013 20L18.668 34.6667L27.3346 43.3333C27.8651 43.8638 28.5845 44.1618 29.3346 44.1618C30.0848 44.1618 30.8042 43.8638 31.3346 43.3333C31.8651 42.8029 32.1631 42.0835 32.1631 41.3333C32.1631 40.5832 31.8651 39.8638 31.3346 39.3333" stroke="white" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20 21.3359H30.6667" stroke="white" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
<defs>
<linearGradient id="paint0_linear_2944_9696" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
<stop stopColor="#AD46FF"/>
<stop offset="1" stopColor="#F6339A"/>
</linearGradient>
</defs>
</svg>
),
    color: "bg-pink-500",
  },
  {
    step: "03",
    title: "We Deliver",
    desc: "Betopia signs contracts and delivers projects",
    icon: (<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 16C0 7.16344 7.16344 0 16 0H48C56.8366 0 64 7.16344 64 16V48C64 56.8366 56.8366 64 48 64H16C7.16344 64 0 56.8366 0 48V16Z" fill="url(#paint0_linear_2944_9711)"/>
<path d="M21.9987 37.9965C19.9987 39.6765 19.332 44.6632 19.332 44.6632C19.332 44.6632 24.3187 43.9965 25.9987 41.9965C26.9454 40.8765 26.932 39.1565 25.8787 38.1165C25.3604 37.6219 24.6778 37.336 23.9617 37.3139C23.2456 37.2917 22.5465 37.5348 21.9987 37.9965Z" stroke="white" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M32 35.9977L28 31.9977C28.7095 30.157 29.6029 28.3925 30.6667 26.7311C32.2202 24.247 34.3835 22.2018 36.9507 20.7898C39.5178 19.3779 42.4036 18.6462 45.3333 18.6644C45.3333 22.2911 44.2933 28.6644 37.3333 33.3311C35.6492 34.396 33.8625 35.2894 32 35.9977Z" stroke="white" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M27.9987 31.9968H21.332C21.332 31.9968 22.0654 27.9568 23.9987 26.6634C26.1587 25.2234 30.6654 26.6634 30.6654 26.6634" stroke="white" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M32 36.0026V42.6693C32 42.6693 36.04 41.9359 37.3333 40.0026C38.7733 37.8426 37.3333 33.3359 37.3333 33.3359" stroke="white" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
<defs>
<linearGradient id="paint0_linear_2944_9711" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
<stop stopColor="#00C950"/>
<stop offset="1" stopColor="#00BC7D"/>
</linearGradient>
</defs>
</svg>
),
    color: "bg-green-500",
  },
  {
    step: "04",
    title: "You Earn",
    desc: "You earn commission on successful sales",
    icon: (<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 16C0 7.16344 7.16344 0 16 0H48C56.8366 0 64 7.16344 64 16V48C64 56.8366 56.8366 64 48 64H16C7.16344 64 0 56.8366 0 48V16Z" fill="url(#paint0_linear_2944_9725)"/>
<path d="M32 18.6641V45.3307" stroke="white" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M38.6667 22.6641H28.6667C27.429 22.6641 26.242 23.1557 25.3668 24.0309C24.4917 24.9061 24 26.0931 24 27.3307C24 28.5684 24.4917 29.7554 25.3668 30.6306C26.242 31.5057 27.429 31.9974 28.6667 31.9974H35.3333C36.571 31.9974 37.758 32.4891 38.6332 33.3642C39.5083 34.2394 40 35.4264 40 36.6641C40 37.9017 39.5083 39.0887 38.6332 39.9639C37.758 40.8391 36.571 41.3307 35.3333 41.3307H24" stroke="white" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
<defs>
<linearGradient id="paint0_linear_2944_9725" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
<stop stopColor="#FF9500"/>
<stop offset="1" stopColor="#F54900"/>
</linearGradient>
</defs>
</svg>
),
    color: "bg-[#FF9500]",
  },
];

export default function CollaborationProcess() {
  return (
    <section className="bg-white pb-10 lg:pb-20">
      <div className="max-w-[1440px] w-11/12 mx-auto px-4">
        {/* Header */}
              <div className="  text-center mb-10 lg:mb-16">
          <div className="">
            <h3 className="bg-linear-to-r from-[#FF9500] to-[#F54900] p-1 rounded-full text-white  w-[200px] mx-auto mb-4">
             Simple Process
            </h3>
            <h2 className="text-2xl md:text-[52px] font-bold text-[#414042]">
            How Collaboration Works
            </h2>
            <span className="block mx-auto mt-[10px] rounded-full w-[103.86px] h-[5.19px] bg-[#FF9500]" />
          </div>

          <p className="text-[#4A5565] text-center text-lg md:text-xl lg:text-2xl px-4 md:px-0 my-7 md:w-[70%] mx-auto">
            This structure ensures transparency, efficiency, and accountability.
          </p>
        </div>


        {/* Steps */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
  
  {/* CENTER DIVIDER LINE */}
  <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-[#FF9500] -translate-y-1/2 z-0"></div>

          {steps.map((item, i) => (
            <div
              key={i}
              className="relative bg-white rounded-2xl shadow-lg p-[33px] hover:shadow-xl transition border-t border-gray-100"
            >
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#364153] text-white ">
                {item.step}
              </div>

              {/* Icon */}
              <div
                className="mb-5"
              >
               {item.icon}
              </div>

              {/* Content */}
              <h3 className="font-bold text-lg md:text-xl  text-[#131313] mb-[10px]">
                {item.title}
              </h3>

              <p className="text-lg text-[#4A5565]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
