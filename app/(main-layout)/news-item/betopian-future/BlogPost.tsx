"use client";
import BlogStoryGrid from "@/components/pages/news-item/BlogStoryGrid";
import Link from "next/link";
import React, { useState } from "react";
import { FiFacebook, FiLinkedin, FiShare2, FiTwitter } from "react-icons/fi";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "next-share";
import { IoMdShareAlt } from "react-icons/io";
import { LuBookmarkPlus } from "react-icons/lu";
import { GoDotFill } from "react-icons/go";
import ShareButton from "../achievement/ShareButton";

const BlogPost = () => {
  const [showMore, setShowMore] = useState(false);

  const shareUrl = "https://betopialimited.com/news-item/achievement";
  const shareTitle =
    "A From Good to Great -  Started with Tk 500,000, Now Pays Tk 80 Million in Monthly Salaries to Employees";
  const newsItems = [
    {
      id: 1,
      category: "Sponsors",
      title: "Betopia Sponsors Odoo Business Show",
      date: "Dec 10, 2024",
      image: "/news/news-img-1.png",
      link: "/news-item/betopia-sponsors",
    },
    {
      id: 2,
      category: "Technology",
      title: "Betopia Group Sponsors Robotics",
      date: "Nov 28, 2024",
      image: "/news/news-img-2.png",
      link: "/news-item/betopia-group-sponsors-robotics",
    },
    {
      id: 3,
      category: "Business",
      title: "AmCham Bangladesh Hosts Breakfast Meeting on Digital",
      date: "Nov 20, 2024",
      image: "/news/news-img-3.png",
      link: "/news-item/amcham-bd",
    },
    {
      id: 4,
      category: "Leadership",
      title: "Betopia LLC Joins AmCham Bangladesh",
      date: "Nov 11, 2024",
      image: "/news/news-img-4.png",
      link: "/news-item/betopia-llc-joins-amcham",
    },
    {
      id: 5,
      category: "Leadership",
      title: "Leadership Transformation Program",
      date: "Oct 25, 2024",
      image: "/news/news-img-5.png",
      link: "/news-item/leadership-transformation",
    },
    {
      id: 6,
      category: "Innovation",
      title: "Shaping the Future of Tomorrow",
      date: "Dec 15, 2024",
      image: "/news/news-img-6.png",
      link: "/news-item/shaping-the-future",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen font-sans text-slate-900">
      <div className="h-20  bg-black w-full mb-2"></div>
      <div className="border-b border-gray-200">
        <nav className="max-w-7xl w-11/12 mx-auto  flex items-center space-x-2 text-sm text-slate-500 py-4 ">
          <span className="hover:text-orange-600 cursor-pointer">Home</span>
          <span>/</span>
          <span className="hover:text-orange-600 cursor-pointer">
            News & Stories
          </span>
          <span>/</span>
          <span className="font-bold text-slate-900">Leadership</span>
        </nav>
      </div>
      {/* 1. Header Section */}
      <header className="max-w-4xl mx-auto pt-3 lg:pt-12 px-6">
        <span className="bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
          Leadership
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold mt-4 leading-tight">
         Leading with systems thinking: The CEO’s vision for ‘Betopian’ future!
        </h1>

        {/* Meta Info */}
        <div className="flex flex-wrap gap-6 text-sm text-gray-500 mt-6 border-b pb-8">
          <span>📅 January 12, 2026</span>
          <span>⏱️ 5 min read</span>
          <span>👁️ 1.6K views</span>
  <span className="flex items-center gap-1 text-orange-600">
            <GoDotFill />
            Featured by{" "}
            <Link href="https://industryinsiderbd.com/" target="blank">
             INDUSTRY INSIDER
            </Link>{" "}
          </span>
        </div>

        {/* Author Bio */}
        <div className="md:flex items-center justify-between py-6 relative">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden">
              <img src="/news/news-img-7.png" alt="Author" />
            </div>
            <div>
              <p className="font-bold text-sm">Muhammad Monir Hossain</p>
              <p className="text-xs text-gray-500">
                Founder & CEO of Betopia Group
              </p>
            </div>
          </div>

          {/* Right actions */}
          <div className="flex gap-2 items-center justify-end">
            <ShareButton shareUrl={shareUrl} shareTitle={shareTitle} />

            <button className="w-10 h-10 rounded-full bg-[#e0e0e0] text-[#2b2b2b] flex items-center justify-center hover:scale-110 transition">
              <LuBookmarkPlus size={20} />
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 mb-12 relative">
        {/* Main Image */}
        <img
          src="/news/Betopia.jpg"
          className="w-full rounded-[2rem] shadow-lg object-contain lg:object-cover   lg:h-[550px]"
          alt="Featured"
        />

         {/* Clickable Logo */}
        <a
          href="https://industryinsiderbd.com/leading-with-systems-thinking-the-ceos-vision-for-betopian-future/"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-4 md:top-6 right-10  md:p-2 "
        >
          <img src="/news/logo3.png" alt="Logo" className="h-6 md:h-10 w-auto" />
        </a>
      </div>

      {/* 3. Content Grid */}
      <main className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12 pb-20">
        {/* Left: Article Body */}
        <article className="lg:col-span-2 bg-white p-8 md:p-12 rounded-2xl shadow-sm leading-relaxed text-gray-700 space-y-6">
          <p>
           Engineer Muhammad Monir Hossain is a Bangladeshi entrepreneur, technologist, and global business leader. He is the Founder and Group CEO of Betopia Group, a diversified international business ecosystem spanning technology, fintech, energy, infrastructure, supply chain, education, and institutional services.
          </p>
          <p>
            Starting from the ground up, he has built Betopia Group into one of Bangladesh’s fastest-growing global enterprise platforms. Today, the group employs nearly 4,000 professionals and operates across Asia, Europe, and North America. In a candid conversation with Industry Insider, the seasoned tech leader shared his perspectives on people empowerment, technology-driven leadership, global policy shifts, and long-term sustainable growth. 
          </p>

          <h2 className="font-bold text-lg md:text-xl">
            How did your journey begin and evolve into Betopia Group?
          </h2>
          <p>
           My entrepreneurial journey began in 2013 through freelance work on global platforms such as oDesk and Elance. That early phase later became Bdcalling IT Ltd., which was my first step in understanding global clients, delivery standards, and systems thinking.As the organization grew, it became clear that the vision extended beyond a single company. This led to the creation of Betopia Group, a structured, diversified ecosystem operating across technology, fintech, infrastructure, energy, supply chain, and education.At our core, we believe in the boundless potential of humanity. In a world full of talent and opportunities, we see a gap, a disconnect between those seeking growth and the means to achieve it. Betopia exists to bridge that gap by empowering individuals and businesses to unleash their brilliance toward a more prosperous society.
          </p>

               <h2 className="font-bold text-lg md:text-xl">
           What are the main services of Betopia Group today?
          </h2>
          <p>
          Betopia Group works across five core areas designed to make technology and systems useful and impactful for real people and organizations. These are a. software products and technology solutions, b. AI, data and business insights, c. secure and compliant technology, d. B2B tech services, e. Supply chain and procurement support. This holistic approach enables Betopia to bridge the gap between complex technology and practical application, leading to seamless scalability for partners across multi-industry sectors.
          </p>

            
          {/* Read More Button */}

          {showMore && (
            <>
              <p>
               Betopia has software wizards who build custom software, mobile apps, and digital platforms that help businesses grow and operate efficiently. AI comes as the new age tech that is utilized to analyze data and help organizations make better decisions.We protect systems and help organizations meet regulatory and security requirements. As for B2B technology services, Betopia provides solutions that other companies can brand and deliver as their own. In supply chain and procurement support, we help government bodies, NGOs, and organizations plan, source, and manage resources efficiently and transparently.Most global enterprise services are delivered through Betopia Limited, while other group entities strengthen fintech, energy, infrastructure, and institutional capacity. Across all our work, the focus remains the same: turning potential into real, measurable impact.
              </p>

              <h2 className="font-bold text-lg md:text-xl">
                Which market among the US, Europe, or Asia is showing the fastest growth?
              </h2>
              <p>
                The United States is currently our fastest-growing market, especially for software, AI, and technology services delivered through Betopia Limited.  At the same time, we are expanding steadily across Europe and Asia, focusing on long-term partnerships rather than short-term projects. Sustainable growth and people-centric impact guide every market we enter.
              </p>
                 <h2 className="font-bold text-lg md:text-xl">
               What are the future goals and long-term vision of Betopia Group?
              </h2>
              <p>
             Our long-term vision is to help build a technology-powered, operationally efficient, and globally competitive Bangladesh.One of our flagship initiatives is Betopia City, a future-ready smart city integrating technology, energy, infrastructure, and innovation. In addition to our current capacity, we are expanding into Agri-tech, RMG-tech, and smart living solutions, and are building large-scale human capital and talent platforms that connect Bangladeshi professionals to global opportunities. Everything we do is driven by a simple belief: when people are empowered with the right systems and opportunities, they can create extraordinary outcomes.
              </p>
           <h2 className="font-bold text-lg md:text-xl">
               Let’s talk about a trending subject: trade protectionism. This concept has gained rapid popularity in recent years, influencing global technology policy and other areas. Should Bangladeshi companies be concerned?
              </h2>
              <p>
            Trade protectionism has significantly affected manufacturing, but technology and software services remain resilient. Enterprise clients continue to prioritize performance, reliability, and compliance.Through Betopia Limited, we see steady global demand. The main challenges relate to mobility and travel, not market access. Our focus remains on building strong systems and empowering talent to compete globally.
              </p>
              <h2 className="font-bold text-lg md:text-xl">
              Do tighter H-1B visa controls amount to technology protectionism?
              </h2>
              <p>
            Bangladesh is less dependent on H-1B visas than some countries, but business travel and skilled mobility have become more complex. There is a clear need for stronger policy support for white-collar technology professionals. If we want to compete globally, talent mobility must be treated as a strategic priority.
              </p>
              <h2 className="font-bold text-lg md:text-xl">
              Do you see a risk of fragmented AI ecosystems emerging across regions?
              </h2>
              <p>
            AI thrives on openness and collaboration. While some regional fragmentation may occur, innovation will continue. The real advantage lies in creating enabling environments, i.e., clear policies, infrastructure, and access. Technology matters only when it creates real opportunities for people and businesses.
              </p>
              <h2 className="font-bold text-lg md:text-xl">
               Agentic AI is still a new concept. Could you explain it in plain terms for our readers?
              </h2>
              <p>
            Agentic AI refers to digital agents that operate like virtual employees, handling tasks such as customer support, analytics, HR queries, and compliance checks. At Betopia, we design these systems to support and enhance human capability, not replace it. Responsible, secure, and practical use of AI is central to our approach.
              </p>
              <h2 className="font-bold text-lg md:text-xl">
               How important are digital trade agreements for Bangladesh?
              </h2>
              <p>
           Digital trade is not just about software; it is about people, skills, and knowledge. Bangladesh currently lacks structured digital trade agreements, which limits growth. Such agreements would make global collaboration easier, improve predictability, and unlock greater opportunities for our professionals and companies.
              </p>
              <h2 className="font-bold text-lg md:text-xl">
               Coming back to Betopia. The group also works with supply chain and procurement. How does this fit your strategy?
              </h2>
              <p>
            Supply chain and procurement are essential to delivering impact at scale. We support government bodies, NGOs, and institutions with planning, coordination, and execution, using technology to ensure transparency and efficiency. This work complements our broader mission of strengthening systems that enable growth and development.
              </p>
              <h2 className="font-bold text-lg md:text-xl">
              Looking ahead, what upcoming businesses or initiatives are you most excited about?
              </h2>
              <p>
            We are entering an exciting phase: moving from a service-led organization to a platform- and institution-led ecosystem. Over the next decade, we are scaling several high-impact initiatives. We are launching AI-powered platforms to streamline business operations and build critical infrastructure, such as Betopia City, alongside modern energy systems. Our work in digital finance will simplify global payments and drive financial inclusion. Simultaneously, our talent ecosystems will bridge the gap between Bangladeshi professionals and global markets. Every project serves a single purpose: to help people and businesses unleash their brilliance. Betopia is built for lasting societal impact rather than short-term gains.
              </p>
            </>
          )}
          <button
            onClick={() => setShowMore(!showMore)}
            className="text-orange-600 font-semibold text-sm  cursor-pointer"
          >
            {showMore ? "Read less" : "Read more"}
          </button>
          {/* Tags */}
          <div className="flex flex-wrap gap-2 ">
            {[
              "AI",
              "Betopia",
              "Featured",
              "Industry",
              "Tech",
            ].map((tag) => (
              <span
                key={tag}
                className="text-xs bg-gray-100 px-3 py-1.5 rounded hover:bg-gray-200 cursor-pointer"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center border-t pt-8 mt-8 text-sm font-medium text-gray-500">
            <Link
              href="/news-item"
              className="flex items-center gap-2 hover:text-orange-600 transition-colors duration-200"
            >
              <span>←</span> Back to News
            </Link>
            <Link
              href="/news-item/betopia-group-sponsors-robotics"
              className="flex items-center gap-2 hover:text-orange-600 transition-colors duration-200"
            >
              Next Article <span>→</span>
            </Link>
          </div>
        </article>

        {/* Right: Sidebar */}
        <aside className="lg:col-span-1 space-y-8">
          {/* Related News Card */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="font-bold text-lg mb-6 flex items-center">
              <span className="w-1 h-6 bg-[#FF9500] mr-2 rounded-full"></span>
              Related News
            </h3>

            <div className="space-y-6">
              {newsItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.link}
                  className="flex gap-4 group cursor-pointer"
                >
                  {/* Image Container */}
                  <div className="w-20 h-20 bg-gray-200 rounded-lg flex-shrink-0 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  {/* Text Content */}
                  <div className="flex flex-col justify-center">
                    <span className="text-[10px] uppercase font-bold text-orange-600 tracking-wide">
                      {item.category}
                    </span>
                    <h4 className="text-[13px] font-bold leading-tight text-slate-800 group-hover:text-orange-600 transition-colors mt-1">
                      {item.title}
                    </h4>
                    <p className="text-[10px] text-gray-400 font-medium mt-1">
                      {item.date}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            <Link href="/news-item" passHref>
              <button
                className="w-full mt-8 inline-flex items-center justify-center gap-2
                rounded-md px-8 py-3
                text-sm font-semibold text-white
                bg-linear-to-r from-[#FF9500] to-[#F54900]
                shadow-lg
                transition-all duration-300
                hover:scale-105 hover:shadow-xl
                active:scale-95"
              >
                View All News
              </button>
            </Link>
          </div>

          {/* Newsletter Card */}
          <div className="relative overflow-hidden rounded-3xl p-8 text-white shadow-[0_20px_50px_rgba(255,115,0,0.3)] bg-linear-to-br from-[#FF8A00] via-[#FF6B00] to-[#F54900]">
            {/* Background Decorative Blobs */}
            <div className="absolute -right-10 -top-10 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-orange-400/30" />

            <div className="relative z-10">
              <h3 className="text-3xl font-bold tracking-tight">
                Stay Updated
              </h3>
              <p className="mt-3 text-sm leading-relaxed opacity-90">
                Get the latest news and insights delivered to your inbox.
              </p>

              {/* Glassmorphism Input */}
              <div className="mt-8">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full rounded-xl border border-white/20 bg-white/10 px-5 py-4 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
                />
              </div>

              {/* Solid White Button with Shadow */}
              <button className="mt-4 w-full rounded-xl bg-white py-4 text-center font-bold text-[#F54900] shadow-xl transition-transform active:scale-95 hover:bg-gray-50">
                Subscribe Now
              </button>
            </div>
          </div>
        </aside>
      </main>
      <div>
        <BlogStoryGrid />
      </div>
    </div>
  );
};

export default BlogPost;
