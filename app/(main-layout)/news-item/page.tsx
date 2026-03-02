import React from 'react'
import OurLatestInsights from '@/components/pages/blog/OurLatestInsights'
import BlogHero from '@/components/pages/news-item/BlogHero'
import CountStats from '@/components/pages/news-item/CountStats'
import FeaturedStory from '@/components/pages/news-item/FeaturedStory'
import StoriesGrid from '@/components/pages/news-item/StoriesGrid'

import type { Metadata } from "next";

/* ✅ SEO META INFORMATION */
export const metadata: Metadata = {
  title: "News & Stories | Insights, Leadership & Company Updates | Betopia Limited",

  description:
    "Stay updated with the latest news, leadership stories, events, partnerships, and innovations from Betopia Limited—highlighting real-world impact, growth milestones, and enterprise technology leadership.",

  keywords: [
    "Betopia news", "company updates", "leadership stories", "technology insights", "enterprise innovation news", "Betopia events", "Betopia Group stories", "corporate announcements"
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://betopialimited.com/news-item",
  },

  openGraph: {
    title: "News & Stories | Insights, Leadership & Company Updates | Betopia Limited",
    description:
      "Stay updated with the latest news, leadership stories, events, partnerships, and innovations from Betopia Limited—highlighting real-world impact, growth milestones, and enterprise technology leadership.",
    url: "https://betopialimited.com/news-item",
    siteName: "Betopia Limited",
    type: "website",
  },
};


export default function page() {
  return (
    <div>
        <BlogHero/>
        {/* <FeaturedStory/> */}
        <StoriesGrid/>
        {/* <CountStats/> */}
        <OurLatestInsights/>
    </div>
  )
}
