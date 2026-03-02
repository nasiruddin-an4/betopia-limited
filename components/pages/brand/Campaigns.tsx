import React from "react";
import CampaignsCard from "./CampaignsCard";
import Container from "@/components/layout/Container";

const Campaigns = () => {
  const AllCampaigns = [
    {
      image: "/brand/c1.svg",
      category: "Technology",
      date: "November 28, 2024",
      readTime: "4 min read",
      title: "Betopia Group Sponsors Robotics Club Inaugural Program",
      link: "/news-item/betopia-group-sponsors-robotics",
      description:
        "Celebrated the launch of the Robotics Club Inaugural Program with North South University, driving innovation in automation and AI education.",
    },
    {
      image: "/brand/c2.svg",
      category: "Business",
      date: "November 28, 2024",
      readTime: "4 min read",
      title: "AmCham Bangladesh Hosts Breakfast Meeting on Digital Transformation",
      link: "/news-item/amcham-bd",
      description:
        "The American Chamber of Commerce in Bangladesh hosted a discussion on accelerating digital transformation across enterprises.",
    },

    {
      image: "/brand/c3.svg",
      category: "Corporate",
      date: "November 28, 2024",
      readTime: "4 min read",
      title: "Betopia LLC Joins AmCham Bangladesh as an Official Member",
      link: "/news-item/betopia-llc-joins",
      description:
        "Celebrated the launch of the Robotics Club Inaugural Program with North South University, driving innovation in automation and AI education.",
    },
  ];
  return (
    <div className="bg-[#FFF7ED4D]">
      <Container>

      <section className=" py-10 md:py-20">
        <h2 className="text-[28px] md:text-[32px] lg:text-[52px] font-bold mb-6 md:mb-8">
          Campaigns
        </h2>

        <div className="grid grid-cols-1 gap-8 xl:grid-cols-3">
          {AllCampaigns.map((story, idx) => (
            <CampaignsCard key={idx} {...story} />
          ))}
        </div>
      </section>
      </Container>
    </div>
  );
};

export default Campaigns;
