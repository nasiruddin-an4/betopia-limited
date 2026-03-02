import BlogStoryGrid from '@/components/pages/news-item/BlogStoryGrid';
import Link from 'next/link';
import React from 'react';
import { FiFacebook, FiLinkedin, FiTwitter } from 'react-icons/fi';
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from 'next-share';
import ShareButton from '../achievement/ShareButton';
import { LuBookmarkPlus } from 'react-icons/lu';

const BlogPost = () => {
  const shareUrl = 'https://betopialimited.com/news-item/how-edge';
  const shareTitle = 'How EDGE Helped Us Build Better..';
const newsItems = [
  {
    id: 1,
    category: "Sponsors",
    title: "Betopia Sponsors Odoo Business Show",
    date: "Dec 10, 2024",
    image: "/news/news-img-1.png",
    link: "/news-item/betopia-sponsors"
  },
  {
    id: 2,
    category: "Technology",
    title: "Betopia Group Sponsors Robotics",
    date: "Nov 28, 2024",
    image: "/news/news-img-2.png",
    link: "/news-item/betopia-group-sponsors-robotics"
  },
  {
    id: 3,
    category: "Business",
    title: "AmCham Bangladesh Hosts Breakfast Meeting on Digital",
    date: "Nov 20, 2024",
    image: "/news/news-img-3.png",
    link: "/news-item/amcham-bd"
  },
  {
    id: 4,
    category: "Leadership",
    title: "Betopia LLC Joins AmCham Bangladesh",
    date: "Nov 11, 2024",
    image: "/news/news-img-4.png",
    link: "/news-item/betopia-llc-joins-amcham"
  },
  {
    id: 5,
    category: "Leadership",
    title: "Leadership Transformation Program",
    date: "Oct 25, 2024",
    image: "/news/news-img-5.png",
    link: "/news-item/leadership-transformation"
  },
  {
    id: 6,
    category: "Innovation",
    title: "Shaping the Future of Tomorrow",
    date: "Dec 15, 2024",
    image: "/news/news-img-6.png",
    link: "/news-item/shaping-the-future"
  }
];

  return (
    <div className="bg-gray-50 min-h-screen font-sans text-slate-900">
        <div className='h-20  bg-black w-full mb-2'></div>
      <div className='border-b border-gray-200'>
        <nav className="max-w-7xl w-11/12 mx-auto  flex items-center space-x-2 text-sm text-slate-500 py-4 ">
            <span className="hover:text-orange-600 cursor-pointer">Home</span>
            <span>/</span>
            <span className="hover:text-orange-600 cursor-pointer">News & Stories</span>
            <span>/</span>
            <span className="font-bold text-slate-900">Leadership</span>
        </nav>
      </div>
      {/* 1. Header Section */}
      <header className="max-w-4xl mx-auto pt-12 px-6">
        <span className="bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
          Leadership
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold mt-4 leading-tight">
          How EDGE Helped Us Build Better People—and a Better Future
        </h1>
        
        {/* Meta Info */}
        <div className="flex gap-6 text-sm text-gray-500 mt-6 border-b pb-8">
          <span>📅 July 24, 2025</span>
          <span>⏱️ 8 min read</span>
          <span>👁️ 2.5K views</span>
        </div>

        {/* Author Bio */}
        <div className="flex items-center justify-between py-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden">
               <img src="/news/news-img-7.png" alt="Author" />
            </div>
            <div>
              <p className="font-bold text-sm">Muhammad Monir Hossain</p>
              <p className="text-xs text-gray-500">Founder & CEO of Betopia Group</p>
            </div>
          </div>
          {/* Social Icons Placeholder */}
            <div className="flex gap-2 items-center">
    <ShareButton
      shareUrl={shareUrl}
      shareTitle={shareTitle}
    />

    <button className="w-10 h-10 rounded-full bg-[#e0e0e0] text-[#2b2b2b] flex items-center justify-center hover:scale-110 transition">
      <LuBookmarkPlus size={20} />
    </button>
  </div>
          {/* <div className="flex gap-2">
            <div className="flex items-center gap-3">
              <FacebookShareButton url={shareUrl} quote={shareTitle}>
                <div className="w-9 h-9 rounded-full bg-[#1877F2] flex items-center justify-center text-white hover:scale-110 transition-transform">
                  <FiFacebook size={18} />
                </div>
              </FacebookShareButton>

              <TwitterShareButton url={shareUrl} title={shareTitle}>
                <div className="w-9 h-9 rounded-full bg-[#1DA1F2] flex items-center justify-center text-white hover:scale-110 transition-transform">
                  <FiTwitter size={18} />
                </div>
              </TwitterShareButton>

              <LinkedinShareButton url={shareUrl}>
                <div className="w-9 h-9 rounded-full bg-[#0A66C2] flex items-center justify-center text-white hover:scale-110 transition-transform">
                  <FiLinkedin size={18} />
                </div>
              </LinkedinShareButton>
            </div>
          </div> */}
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 mb-12">
        <img 
            src="/news/news-img-7.png" 
            className="w-full rounded-[2rem] shadow-lg object-contain lg:object-cover  lg:h-[550px]" 
            alt="Featured"
        />
        </div>

      {/* 3. Content Grid */}
      <main className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12 pb-20">
        
        {/* Left: Article Body */}
        <article className="lg:col-span-2 bg-white p-8 md:p-12 rounded-2xl shadow-sm leading-relaxed text-gray-700 space-y-6">
          <p>
            When I think about what defines a strong, forward-thinking company, the answer is simple: people. The right people,
            with the right mindset and skills, are the engine behind everything we do at Betopia Group. But here’s the truth—not all
            great people get a fair shot. And that’s exactly why the EDGE Project matters.  A Solution That Met Us Where We Were At
            Bdcalling IT Ltd., one of our tech companies under the Betopia umbrella, we often face a familiar problem: talented
            graduates who are full of potential but not quite ready for the demands of the job. When we heard about the EDGE
            initiative—particularly the Hire and Train Program—we saw something different. This wasn’t just another skills training
            scheme. It was a bridge. A bridge between academic theory and real-world application. Between potential and performance.
            One of our most inspiring hires, Sumiya Afrin, came to us through this program. She had the right degree, a great
            attitude—but like many young graduates, she hadn’t had the opportunity to apply her knowledge in a meaningful way.
            Thanks to EDGE, that changed.  She joined Bdcalling as a web developer, equipped with more than just technical skills.
            She had confidence. She understood workflows, collaboration, and how to add value from day one. Today, she’s not just part
            of the team—she’s helping lead projects that matter.  Why This Program Works What sets EDGE apart is its holistic approach.
            It doesn’t just train people; it nurtures them. It works with employers. It responds to real industry needs. And most
            importantly, it gives people a chance—often when they need it most. As a business leader, I’ve always believed that our
            responsibility extends beyond our office walls. If we want a better industry, we must help build it—one person, one
            opportunity at a time. EDGE is making that possible.  The Bigger Picture Beyond talent development, what excites me most
            about EDGE is its investment in innovation. From AI-powered road safety apps to life-changing medical devices like the
            Pedograph Machine, this initiative is laying the groundwork for a smarter, more inclusive digital economy. The Research
            and Innovation Centers (RICs) popping up at universities are doing more than funding ideas—they’re helping turn those
            ideas into real solutions for real people. At Betopia Group, we see alignment here—not just with our business goals, but
            with our values.  Looking Ahead We’re proud to be part of this ecosystem. As the CEO of Betopia Group, I’ve seen firsthand
            what’s possible when you give bright minds the tools and trust to thrive. My hope is that more companies—big or small—step
            up and collaborate with programs like EDGE. Because when you invest in people, you don’t just build better businesses.
            You build a better future. And that’s something worth showing up for every day.
          </p>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-10">
            {['Leadership', 'People Development', 'EDGE Assessment', 'Team Building'].map(tag => (
              <span key={tag} className="text-xs bg-gray-100 px-3 py-1.5 rounded hover:bg-gray-200 cursor-pointer">
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
              href="/news-item/betopia-group-founder" 
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
            <button className="w-full mt-8 inline-flex items-center justify-center gap-2
                rounded-md px-8 py-3
                text-sm font-semibold text-white
                bg-linear-to-r from-[#FF9500] to-[#F54900]
                shadow-lg
                transition-all duration-300
                hover:scale-105 hover:shadow-xl
                active:scale-95">
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
                <h3 className="text-3xl font-bold tracking-tight">Stay Updated</h3>
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
            <BlogStoryGrid/>
        </div>
    </div>
  );
};

export default BlogPost;