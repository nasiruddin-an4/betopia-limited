import Image from "next/image";
import { Calendar, Globe, TrendingUp } from "lucide-react";
import Link from "next/link";

export default function SalesAgentHero() {
  return (
    <section className="relative lg:h-[850px] overflow-hidden">
  {/* Background Image */}
  <Image
    src="/partner/sales/herobg3.png"
    alt="Sales Agent Program"
    fill
    priority
    className="object-cover"
  />

  {/* Overlay */}
  {/* <div className="absolute inset-0 bg-black/60 z-0" /> */}

  {/* Content */}
  <div className="relative z-10 max-w-[1675px] w-11/12 mx-auto px-4 pt-40 lg:pt-60 pb-20 flex flex-col lg:flex-row items-center gap-12">
    
    {/* LEFT */}
    <div className="w-full lg:w-1/2 text-white">
      <h3 className="bg-linear-to-r from-[#FF9500] to-[#F54900] px-3 py-1 rounded-full flex items-center gap-2 w-fit mb-4">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.3307 5.83594L11.2474 12.9193L7.08073 8.7526L1.66406 14.1693" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.3359 5.83594H18.3359V10.8359" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

        Global Sales Agent Program
      </h3>

      <h1 className="text-2xl lg:text-[52px] font-bold">
        Betopia Global <br />
        <span className="text-[#FF9500]">Sales Agent Program</span>
      </h1>

      <p className="mt-6 text-lg lg:text-2xl text-[#F2F2F2]">
        Sell Global Technology Solutions and Earn Performance-Based Commission
      </p>

      <p className="mt-4 text-lg text-[#F2F2F2]">
        Join Betopia Limited as an independent global sales agent and represent high-demand technology solutions across international markets.
      </p>

<Link href="/meeting-scheduler">
      <button className="mt-8 flex items-center gap-2 bg-linear-to-r from-[#FF9500] to-[#F54900] px-6 py-3 rounded-[14px] cursor-pointer">
        Schedule a Meeting
        <Calendar className="h-5 w-5" />
      </button>
</Link>
    </div>

    {/* RIGHT */}
    <div className="w-full lg:w-1/2 flex justify-center">
      <Image
        src="/partner/sales/hero.png"
        alt="Sales event"
        width={800}
        height={648}
        className="object-cover "
      />
    </div>

  </div>
</section>

  );
}
