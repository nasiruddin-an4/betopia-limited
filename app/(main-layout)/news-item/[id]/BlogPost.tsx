/* eslint-disable react-hooks/rules-of-hooks */
'use client';

import BlogStoryGrid from '@/components/pages/news-item/BlogStoryGrid';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import ShareButton from '../achievement/ShareButton';
import { LuBookmarkPlus } from 'react-icons/lu';
import { GoDotFill } from 'react-icons/go';
import { useParams } from 'next/navigation';

// Define the expected shape of the news item from your API
interface NewsItem {
  _id: string;
  title: string;
  description: string;
  publishDate: string;
  views: string;
  readTime: string;
  badges: string[];
  author: {
    name: string;
    designation: string;
    avatar: string;
  };
  images: string[];
  tags: string[];
  featured?: {
    by: string;
    link: string;
    logo: string;
    postLink: string;
  };
  status: string;
}

 

interface BlogPostProps {
  id: string;
}

const BlogPost = ( ) => {  
const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<NewsItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null); 
  const [showMore, setShowMore] = useState(false);

  console.log(id)
  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        setError(null);

        // Adjust this URL to match your actual API endpoint
        const res = await fetch(`${process.env.NEXT_PUBLIC_NODE_API_URL}/news-data/${id}`);
        // OR if using Next.js API route: `/api/news/${id}`

        if (!res.ok) {
          throw new Error(`Failed to fetch news: ${res.status}`);
        }

        const data: NewsItem = await res.json();
        setPost(data);
      } catch (err: any) {
        setError(err.message || 'Something went wrong');
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchNews();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-xl text-gray-600">Loading post...</div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-xl text-red-600">
          {error || 'News post not found'}
        </div>
      </div>
    );
  }

  // Prepare share data
  const shareUrl = `https://betopialimited.com/news-item/${id}`;
  const shareTitle = post.title;

  // Keep your static related news for now (you can make this dynamic later)
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




  
  
//   const getLimitedHTML = (html: string, wordLimit: number) => {
//     const parser = new DOMParser();
//     const doc = parser.parseFromString(html, "text/html");
    
//     let wordCount = 0;
//   const walker = document.createTreeWalker(
//     doc.body,
//     NodeFilter.SHOW_TEXT,
//     null
//   );
  
//   while (walker.nextNode()) {
//     const node = walker.currentNode as Text;
//     const words = node.textContent?.split(/\s+/) || [];
    
//     if (wordCount + words.length > wordLimit) {
//       node.textContent =
//       words.slice(0, wordLimit - wordCount).join(" ") + "...";
//       break;
//     }
    
//     wordCount += words.length;
//   }
  
//   return doc.body.innerHTML;
// };

// const WORD_LIMIT = 200;

// const content = showMore
//   ? post.description
//   : getLimitedHTML(post.description, WORD_LIMIT);

  return (
    <div className="bg-gray-50 min-h-screen font-sans text-slate-900">
      <div className="h-20 bg-black w-full mb-2"></div>

      <div className="border-b border-gray-200">
        <nav className="max-w-7xl w-11/12 mx-auto flex items-center space-x-2 text-sm text-slate-500 py-4">
          <span className="hover:text-orange-600 cursor-pointer">Home</span>
          <span>/</span>
          <span className="hover:text-orange-600 cursor-pointer">News & Stories</span>
          <span>/</span>
          <span className="font-bold text-slate-900">{post.badges?.[0]}</span>
        </nav>
      </div>

      {/* Header Section */}
      <header className="max-w-5xl mx-auto pt-3 lg:pt-12 px-6">
        <span className="bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
          {post.badges?.[0] || 'Achievement'}
        </span>

        <h1 className="text-3xl md:text-5xl font-extrabold mt-4 leading-tight">
          {post.title}
        </h1>

        {/* Meta Info */}
        <div className="flex flex-wrap gap-6 text-sm text-gray-500 mt-6 border-b pb-8">
          <span>
            📅 {new Date(post.publishDate).toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })}
          </span>
          <span>⏱️ {post.readTime}</span>
          <span>👁️ {Number(post.views).toLocaleString()} views</span>

          {post.featured?.by && (
            <span className="flex items-center gap-1 text-orange-600">
              <GoDotFill />
              Featured by{' '}
              <Link href={post?.featured.link} target="_blank">
                {post?.featured.by}
              </Link>
            </span>
          )}
        </div>

        {/* Author Bio */}
        <div className="md:flex items-center justify-between py-6 relative">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden">
              <img
                src={post.author?.avatar}
                alt="Author"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="font-bold text-sm">{post.author?.name}</p>
              <p className="text-xs text-gray-500">{post.author?.designation}</p>
            </div>
          </div>

          <div className="flex gap-2 items-center justify-end">
            <ShareButton shareUrl={shareUrl} shareTitle={shareTitle} />

            <button className="w-10 h-10 rounded-full bg-[#e0e0e0] text-[#2b2b2b] flex items-center justify-center hover:scale-110 transition">
              <LuBookmarkPlus size={20} />
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 mb-12 relative">
        {post.images?.[0] && (
          <img
            src={post.images[0]}
            className="w-full rounded-[2rem] shadow-lg object-contain lg:object-cover lg:h-[550px]"
            alt="Featured"
          />
        )}

        {post?.featured?.logo && post?.featured?.postLink && (
          <a
            href={post.featured.postLink}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-4 md:top-6 right-10 md:p-2"
          >
            <img
              src={post.featured.logo}
              alt="Featured source logo"
              className="h-6 md:h-10 w-auto"
            />
          </a>
        )}
      </div>

      {/* Main Content Grid */}
      <main className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12 pb-20">
        <article className="lg:col-span-2 bg-white p-8 md:p-12 rounded-2xl shadow-sm leading-relaxed text-gray-700 space-y-6">
       <div dangerouslySetInnerHTML={{ __html: post.description, }} />
       
          {/* <div
  className="prose prose-img:max-w-full"
  dangerouslySetInnerHTML={{ __html: content }}
/> */}

{/* <button
  onClick={() => setShowMore(!showMore)}
  className="mt-4 text-blue-600 font-medium hover:underline"
>
  {showMore ? "Read Less" : "Read More"}
</button> */}


          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-8">
            {post.tags?.map((tag) => (
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
              href="/news"
              className="flex items-center gap-2 hover:text-orange-600 transition-colors duration-200"
            >
              <span>←</span> Back to News
            </Link>
            <Link
              href="/news-item/next-slug-here" // ← You can make this dynamic later
              className="flex items-center gap-2 hover:text-orange-600 transition-colors duration-200"
            >
              Next Article <span>→</span>
            </Link>
          </div>
        </article>

        {/* Sidebar - unchanged */}
        <aside className="lg:col-span-1 space-y-8">
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
                  <div className="w-20 h-20 bg-gray-200 rounded-lg flex-shrink-0 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
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

            <Link href="/news" passHref>
              <button className="w-full mt-8 inline-flex items-center justify-center gap-2 rounded-md px-8 py-3 text-sm font-semibold text-white bg-linear-to-r from-[#FF9500] to-[#F54900] shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95">
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