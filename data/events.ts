export type CaseStudy = {
  id: number;
  title: string;
  category: string;
  date: string;
  image: string;
  assetType: string;
  industry: string;
  service: string;
  region: string;
  technology: string;
  year: string;
  description: string;
  link: string;
};
export const upcoming = [
  {
    id: 2,
    title: "AGM & Employee Branding",
    description:
      "An upcoming session focused on AGM insights and employee branding to reinforce culture, alignment, and organizational identity.",
    date: "Upcoming",
    image: "/events/e3.png",
    year: "2026",
  },
  {
    id: 3,
    title: "Foundation Day",
    description:
      "A special upcoming occasion to celebrate our foundation, growth, and the people who shape our success.",
    date: "Upcoming",
    image: "/events/e4.png",
    year: "2026",
  },
];
export const caseStudies: CaseStudy[] = [
  // {
  //   id: 1,
  //   title: "Chase The Cash SA",
  //   category: "Case Studies",
  //   date: "22 Dec 2025",
  //   image: "/case-studies/Chase The Cash SA.png",
  //   assetType: "Case Study",
  //   industry: "Retail",
  //   service: "ERP",
  //   region: "North America",
  //   technology: "SAP",
  //   year: "2025",
  //   link:"/case-studies/chase-the-cash"
  // },
  // {
  //   id: 2,
  //   title: "Nutri AI",
  //   category: "Case Studies",
  //   date: "18 Dec 2025",
  //   image: "/case-studies/Nutri AI.png",
  //   assetType: "Case Study",
  //   industry: "Telecom",
  //   service: "SAP",
  //   region: "Europe",
  //   technology: "SAP",
  //   year: "2025",
  //   link:"/case-studies/nutri-ai"
  // },
  // {
  //   id: 3,
  //   title: "Umrah Guide",
  //   category: "Customer Story",
  //   date: "18 Dec 2024",
  //   image: "/case-studies/Umrah Guide.png",
  //   assetType: "Customer Story",
  //   industry: "Logistics",
  //   service: "Cloud",
  //   region: "Europe",
  //   technology: "AWS",
  //   year: "2024",
  //   link:"/case-studies/umrah-guide"
  // },
  // {
  //   id: 16,
  //   title: "Enhancing Fanatics CX with ERP Integration",
  //   category: "Case Studies",
  //   date: "22 Dec 2025",
  //   image: "/client-stories/1.jpg",
  //   assetType: "Case Study",
  //   industry: "Retail",
  //   service: "ERP",
  //   region: "North America",
  //   technology: "SAP",
  //   year: "2025",
  //   link:"#"
  // },
  // {
  //   id: 17,
  //   title: "SAP S/4HANA Transformation for Telecom Leader",
  //   category: "Case Studies",
  //   date: "18 Dec 2025",
  //   image: "/client-stories/2.jpg",
  //   assetType: "Case Study",
  //   industry: "Telecom",
  //   service: "SAP",
  //   region: "Europe",
  //   technology: "SAP",
  //   year: "2025",
  //   link:"#"
  // },
  // {
  //   id: 18,
  //   title: "PostNord IT Transformation",
  //   category: "Customer Story",
  //   date: "18 Dec 2024",
  //   image: "/client-stories/3.jpg",
  //   assetType: "Customer Story",
  //   industry: "Logistics",
  //   service: "Cloud",
  //   region: "Europe",
  //   technology: "AWS",
  //   year: "2024",
  //   link:"#"
  // },
  // {
  //   id: 4,
  //   title: "Transforming Travel Experience Together",
  //   category: "Case Studies",
  //   date: "09 Dec 2025",
  //   image: "/client-stories/4.jpg",
  //   assetType: "Case Study",
  //   industry: "Travel",
  //   service: "Digital",
  //   region: "Asia",
  //   technology: "Salesforce",
  //   year: "2025",
  //   link:"#"
  // },
  // {
  //   id: 5,
  //   title: "AI Driven Healthcare Platform Modernization",
  //   category: "Customer Story",
  //   date: "12 Nov 2024",
  //   image: "/client-stories/5.jpg",
  //   assetType: "Customer Story",
  //   industry: "Healthcare",
  //   service: "AI",
  //   region: "North America",
  //   technology: "Azure",
  //   year: "2024",
  //   link:"#"
  // },
  // {
  //   id: 6,
  //   title: "Banking Cloud Migration Success Story",
  //   category: "Case Studies",
  //   date: "02 Oct 2023",
  //   image: "/client-stories/6.jpg",
  //   assetType: "Case Study",
  //   industry: "Banking",
  //   service: "Cloud",
  //   region: "Asia",
  //   technology: "AWS",
  //   year: "2023",
  //   link:"#"
  // },
  // {
  //   id: 7,
  //   title: "Cybersecurity Transformation for Retail Giant",
  //   category: "Customer Story",
  //   date: "15 Sep 2024",
  //   image: "/client-stories/7.jpg",
  //   assetType: "Customer Story",
  //   industry: "Retail",
  //   service: "Cybersecurity",
  //   region: "Europe",
  //   technology: "Azure",
  //   year: "2024",
  //   link:"#"
  // },
  // {
  //   id: 8,
  //   title: "Digital Core Transformation with SAP",
  //   category: "Case Studies",
  //   date: "19 Aug 2025",
  //   image: "/client-stories/8.jpg",
  //   assetType: "Case Study",
  //   industry: "Manufacturing",
  //   service: "SAP",
  //   region: "North America",
  //   technology: "SAP",
  //   year: "2025",
  //   link:"#"
  // },
  // {
  //   id: 9,
  //   title: "AI Powered Supply Chain Optimization",
  //   category: "Customer Story",
  //   date: "05 Jul 2024",
  //   image: "/client-stories/9.jpg",
  //   assetType: "Customer Story",
  //   industry: "Logistics",
  //   service: "AI",
  //   region: "Asia",
  //   technology: "AWS",
  //   year: "2024",
  //   link:"#"
  // },
  // {
  //   id: 10,
  //   title: "Cloud Native Banking Platform",
  //   category: "Case Studies",
  //   date: "11 Jun 2023",
  //   image: "/client-stories/10.jpg",
  //   assetType: "Case Study",
  //   industry: "Banking",
  //   service: "Cloud",
  //   region: "Europe",
  //   technology: "Azure",
  //   year: "2023",
  //   link:"#"
  // },
  // {
  //   id: 11,
  //   title: "Telecom Digital Experience Transformation",
  //   category: "Customer Story",
  //   date: "14 May 2025",
  //   image: "/client-stories/11.jpg",
  //   assetType: "Customer Story",
  //   industry: "Telecom",
  //   service: "Digital",
  //   region: "North America",
  //   technology: "Salesforce",
  //   year: "2025",
  //   link:"#"
  // },
  // {
  //   id: 12,
  //   title: "Healthcare Data Security Enhancement",
  //   category: "Case Studies",
  //   date: "02 Apr 2024",
  //   image: "/client-stories/12.jpg",
  //   assetType: "Case Study",
  //   industry: "Healthcare",
  //   service: "Cybersecurity",
  //   region: "Asia",
  //   technology: "Azure",
  //   year: "2024",
  //   link:"#"
  // },

  {
    id: 1,
    title: "Medical Camp & Awareness Program",
    description:
      "Free health consultations by expert doctors including Dental, Nutrition, Physiotherapy, and General Medicine. Special gifts for all participants.",
    date: "29 January, 2026",
    image: "/events/e5.png",
    category: " ",
    assetType: "Community Event",
    industry: "Healthcare",
    service: "Medical Consultation",
    region: "Bangladesh",
    technology: "N/A",
    year: "2026",
    link: "/events/medical-camp",
  },

  {
    id: 2,
    title: "Management Event Kickoff",
    description:
      "The day begins with a leadership town hall in the morning, followed by the CEO and Chairperson visiting all SBUs in the afternoon to personally greet and wish employees well.",
    category: " ",
    date: "01 January, 2026",
    image: "/events/e1.png",
    assetType: "Customer Story",
    industry: "Retail",
    service: "Digital",
    region: "Europe",
    technology: "Salesforce",
    year: "2026",
    link: "#",
  },
];
