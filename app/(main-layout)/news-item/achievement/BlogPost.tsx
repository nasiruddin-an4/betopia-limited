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
import ShareButton from "./ShareButton";
import { GoDotFill } from "react-icons/go";

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
          <span className="font-bold text-slate-900">Achievement</span>
        </nav>
      </div>
      {/* 1. Header Section */}
      <header className="max-w-4xl mx-auto pt-3 lg:pt-12 px-6">
        <span className="bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
          Achievement
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold mt-4 leading-tight">
          From Good to Great -{" "}
          <span className="font-bold">
            Started with Tk 500,000, Now Pays Tk 80 Million in Monthly Salaries
            to Employees
          </span>
        </h1>

        {/* Meta Info */}
        <div className="flex flex-wrap gap-6 text-sm text-gray-500 mt-6 border-b pb-8">
          <span>📅 January 12, 2026</span>
          <span>⏱️ 5 min read</span>
          <span>👁️ 1.5K views</span>
          <span className="flex items-center gap-1 text-orange-600">
            <GoDotFill />
            Featured by{" "}
            <Link href="https://www.prothomalo.com/" target="blank">
              Prothom Alo
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
          src="/news/Prothom.jpg"
          className="w-full rounded-[2rem] shadow-lg object-contain lg:object-cover   lg:h-[550px]"
          alt="Featured"
        />

        {/* Clickable Logo */}
        <a
          href="https://www.prothomalo.com/business/%E0%A6%89%E0%A6%A6%E0%A7%8D%E0%A6%AF%E0%A7%8B%E0%A6%95%E0%A7%8D%E0%A6%A4%E0%A6%BE/gjx17mrabp"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-4 md:top-6 right-10  md:p-2 "
        >
          <img src="/news/logo.png" alt="Logo" className="h-6 md:h-10 w-auto" />
        </a>
      </div>

      {/* 3. Content Grid */}
      <main className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12 pb-20">
        {/* Left: Article Body */}
        <article className="lg:col-span-2 bg-white p-8 md:p-12 rounded-2xl shadow-sm leading-relaxed text-gray-700 space-y-6">
          <p>
            The journey of technology company BDCalling IT began in 2017 with an
            investment of Tk 500,000 and seven employees. Over the past eight
            years, the organization has expanded many times over. From a small
            company, it has grown into Betopia Group, now comprising 22
            companies. The number of employees has increased to nearly 4,000. A
            company that started with Tk 500,000 now pays Tk 80 million every
            month in employee salaries alone.
          </p>
          <p>
            The founder and Chief Executive Officer (CEO) of Betopia Group is
            Engineer Muhammad Monir Hossain. Starting from scratch, he has
            transformed Betopia Group into one of Bangladesh’s fastest-growing
            technology companies. Monir Hossain’s entrepreneurial journey began
            in 2013, when he started working alone on international freelance
            platforms such as oDesk and Elance. As the workload increased, he
            eventually founded BDCalling IT.
          </p>
          <p>
            In its early days, the company worked in areas such as web design
            and development, mobile app development, visual and creative design,
            data entry, and digital marketing. Currently, under Betopia Group,
            new services have been added, including artificial intelligence
            (AI), cloud services, and data centers. The group has also invested
            in renewable energy, electrical equipment, supply chain management,
            and infrastructure development. In addition, it provides full-scale
            technology services in industry-specific solutions such as fintech,
            healthcare, energy, and infrastructure. At present, Betopia Group
            operates in 78 countries worldwide, including the United States,
            United Kingdom, Canada, Japan, Brazil, and the Philippines. However,
            approximately 80–90% of its total work is US-based.
          </p>
          <h2 className="font-bold text-lg md:text-xl">
            Annual Revenue of Tk 2 Billion
          </h2>
          <p>
            Two years ago, in December 2023, Prothom Alo published a report on
            BDCalling IT’s operations. At that time, the company had 400
            employees and a monthly revenue of around Tk 25 million (Tk 300
            million annually). Over the past two years alone, the company’s
            workforce has grown by 900%, and its revenue has increased nearly
            sevenfold.
          </p>

          {/* Read More Button */}

          {showMore && (
            <>
              <p>
                So far, Tk 450 million has been invested in Betopia Group. Of
                this, Tk 30 million came from bank loans, while Tk 420 million
                was self-invested by the group. In the last fiscal year, the
                combined annual revenue of all Betopia Group companies stood at
                Tk 2 billion. The group pays approximately Tk 80 million per
                month in employee salaries and paid Tk 2.5 million in government
                revenue during the last fiscal year.
              </p>
              <p>
                Betopia Group CEO Monir Hossain said, “Our employees are highly
                dedicated, skilled, and creative. This is the key to our
                success. I dream for the country, for the people—we must create
                employment. My employees share and implement that vision.”
                Employees are working at Betopia Group’s office in Mohakhali,
                Dhaka, where they develop software, applications, and AI-based
                solutions.
              </p>
              <div className="max-w-6xl mx-auto mb-12">
                <img
                  src="/news/11.avif"
                  className="w-full  shadow-lg object-cover h-[250px] md:h-[450px]"
                  alt="Featured"
                />
              </div>
              <h2 className="font-bold text-lg md:text-xl">
                Working with Artificial Intelligence
              </h2>
              <p>
                Betopia Group has increased its investment in artificial
                intelligence (AI) and next-generation technology sectors. As one
                of the pioneering initiatives in the country, the group has
                begun establishing an AI-based data center equipped with
                high-performance GPU infrastructure. This will make it easier to
                operate AI and machine learning applications.
              </p>
              <p>
                Alongside AI investments, Betopia Group has set a goal of rapid
                global expansion. It is selling services through local
                representatives in the United States, Europe, the Middle East,
                East Asia, and Africa. At the same time, the group aims to bring
                products from other local technology companies to international
                markets. Monir Hossain stated that the company has built its own
                data center in Bangladesh under its own management, enabling it
                to provide cost-effective services to local companies.
              </p>
              <p>
                Monir Hossain said, “The global freelancing market is worth USD
                60–80 billion, while the AI and cloud market is approaching the
                trillion-dollar range. Most local and global organizations are
                moving toward AI transformation. By selling these services, we
                can significantly increase foreign currency earnings. For this,
                we need skilled manpower, advanced technology, data centers, and
                appropriate hardware. If customs duties are waived on AI-related
                hardware such as GPUs, Bangladeshi companies will become more
                competitive in the global market.”
              </p>
              <h2 className="font-bold text-lg md:text-xl">
                What Are the Challenges?
              </h2>
              <p>
                Monir Hossain believes that the country’s IT and AI sectors
                currently face several fundamental challenges. One of the
                biggest challenges is the high cost and limited availability of
                internet bandwidth. Although prices are said to be decreasing,
                in reality, they are still expensive compared to international
                standards. Due to the two-tier licensing structure, costs often
                become two to three times higher.
              </p>
              <p>
                He said, “The second major challenge is uninterrupted
                electricity supply. Even a temporary power outage can bring our
                business to a halt. Therefore, in the long term, it is essential
                to use green energy and establish a sustainable power supply
                system. The third challenge is the shortage of skilled manpower
                and high-tech infrastructure. There is a lack of skilled
                software engineers and Python developers. Without overcoming
                these limitations, we cannot compete in the global AI and
                technology market.” “The fourth challenge is weak national
                branding. Unlike India or the Philippines, Bangladesh has not
                yet built strong brand value as a well-known IT or software hub.
                If Bangladesh’s skilled workforce and success stories are
                promoted globally, international client confidence will
                increase.”
              </p>
              <p>
                Over the past decade and a half, there has been significant
                investment and promotion in the freelancing sector in
                Bangladesh, and many individual freelancers have emerged.
                However, Monir Hossain believes freelancing does not create
                long-term, stable employment. Due to intense global competition,
                freelancers’ incomes are often unstable.
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
              "Entrepreneurship",
              "Leadership",
              "GlobalBusiness",
              "BusinessGrowth",
              "SuccessStory",
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
