import { link } from "fs";
import BlogStoryCard from "./BlogStoryCard";
import { LoadMoreButton } from "./LoadMoreButton";
import StoryCard from "./StoryCard";

const stories = [
  
  {
    image: "/news/news-img-1.png",
    category: "Innovation",
    date: "December 10, 2024",
    readTime: "3 min read",
    title: "Shaping the Future of Tomorrow..",
    link: "/news-item/shaping-the-future",
    description:
      "Betopia Group, a leading force in fostering innovation and empowering youth, proudly sponsored the Robotics Club Inaugural Program and World Robot Olympiad (WRO) Workshop at Dhaka..",
  },
  {
    image: "/news/news-img-2.png",
    category: "Leadership",
    date: "December 12, 2024",
    readTime: "4 min read",
    title: "Leadership Transformation Program Builds Future Leaders..",
    link: "/news-item/leadership-transformation",
    description:
      "Empowering New Managers to Become Confident LeadersBetopia Group, a Bangladesh-based conglomerate dedicated to unleash the limitless potential of young leaders to shape a transformative..",
  },
  {
    image: "/news/news-img-3.png",
    category: "Corporate",
    date: "December 14, 2024",
    readTime: "5 min read",
    title: "Bdcalling LLC Joins AmCham Bangladesh as an Official",
    link: "/news-item/betopia-llc-joins",
    description:
      "We are delighted to announce that Bdcalling LLC – a concern of Betopia Group – has officially become an affiliate member of the American Chamber of Commerce in Bangladesh (AmCham..",
  },
];

export default function BlogStoryGrid() {
  return (
    <section className="max-w-[1480px] w-11/12 mx-auto px-4 pb-10 lg:pb-20">
    <div className="flex flex-col items-center justify-center py-8">
      {/* Title */}
      <h2 className="text-4xl font-bold text-[#0f172a] tracking-tight">
        More Stories You'll Love
      </h2>
      
      {/* Orange Accent Line */}
      <div className="mx-auto mt-4 block h-1 w-14 rounded-full bg-linear-to-r from-[#FF9500] to-[#F54900]" />
    </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {stories.map((story, idx) => (
          <BlogStoryCard key={idx} {...story} />
        ))}
      </div>
    </section>
  );
}
