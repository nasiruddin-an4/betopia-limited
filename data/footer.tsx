
import { SocialLink } from "@/types/footer";
import { Dribbble } from "lucide-react";
import { FaBehance,FaFacebookF, FaLinkedinIn } from "react-icons/fa";

export const socialLinks: SocialLink[] = [
  { icon: <FaFacebookF color="#fff" size={20} />, url: "https://www.facebook.com/BetopiaLimited", bgColor: "#402BFF" },
  { icon: <FaLinkedinIn color="#fff"  size={20} />, url: "https://www.linkedin.com/company/betopia-limited", bgColor: "#04558E" },
  { icon: <FaBehance color="#fff" size={20} />, url: "https://www.behance.net/betopia_limited", bgColor: "#402BFF" },
  { icon: <Dribbble color="#fff" size={30} />, url: "https://dribbble.com/betopialimited", bgColor: "#E03E7A" },



];

export const services = [
  // { label: "Career", href: "/" },
  { label: "News Alerts", href: "/news-item" },
  { label: "Life at Betopia", href: "/life-at-betopia" }, 
  { label: "Career at Betopia" , href: "/career" }, 
  { label: "Case Studies" , href: "/case_studies" }, 
  { label: "Client Stories" , href: "/client-stories" }, 

  // { label: "Client & Case studies" , href: "/case-studies" }, 
];

export const anotherServices = [
  { label: "Contact Us", href: "/contact" }, 
  { label: "Cookie Policy", href: "/cookie-policy" }, 
  { label: "Terms & Conditions", href: "/terms-conditions" },
  // { label: "Privacy Policy", href: "/" },
];

export const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Solutions", href: "/solution" },
  { label: "Products", href: "/product" },
  { label: "Services", href: "/services" }, 
];

export const reviews = [
  { label: "G2", href: "https://www.g2.com/products/betopia-limited/reviews" },
  // { label: "Clutch", href: "https://my.clutch.co/#Dashboard" },
  { label: "Trustpilot", href: "https://www.trustpilot.com/review/betopialimited.com" },
  { label: "Ambition Box", href: "https://www.ambitionbox.com/reviews/betopia-reviews" },
  // { label: "Good Firms", href: "#" },
  // { label: "Design Rush", href: "https://www.designrush.com/user/profile/services" },
  // { label: "Partneerstack", href: "https://dash.partnerstack.com/home" },
];

export const officeData = [
  {
    imgUrl: "/dhaka2.png",
    imgWidth: 180,
    imgHeight: 140,
    title: "Corporate Office",
    city: "Dhaka",
    address: "Lotus Kamal Tower-2, Level 6, 59 & 61 Gulshan South Avenue, Gulshan-1, Dhaka-1212",
    phone: "+8801321231828",
    bgVideo: "/videos/footer/1.mp4",
    mail:"sales@betopialimited.com"
  },
  {
    imgUrl: "/philipines.png",
    imgWidth: 100,
    imgHeight: 90,
    title: "Philippines Office",
    city: "Philippines",
    address: "Angeles, Philippines",
    phone: "+1 (312) 877-3570 (WA)",
    bgVideo: "/videos/footer/2.mp4",
    mail:"sales@betopialimited.com"
  },
  {
    imgUrl: "/usa.png",
    imgWidth: 50,
    imgHeight: 50,
    title: "USA Office",
    city: "USA",
    address: "3651 Peachtree Pkwy STE. E #116, Suwanee, GA 30024, United States of America",
    phone: "+1 (404) 936-3567",
    bgVideo: "/videos/footer/3.mp4",
    mail:"sales@betopialimited.com"
  },
  {
    imgUrl: "/dhaka1.png",
    imgWidth: 110,
    imgHeight: 100,
    title: "Talent Hub",
    city: "Dhaka",
    address: "C/A, Ak Khandaker Road Kaderia Tower J-28/8-B, Mohakhali, Dhaka 1213",
    phone: "+8801332840871",
    bgVideo: "/videos/footer/4.mp4",
    mail:"sales@betopialimited.com"
  },
   {
    imgUrl: "/dhaka1.png",
    imgWidth: 110,
    imgHeight: 100,
    title: "Talent Hub",
    city: "United Arab Emirates", 
    address: "Meydan Grandstand, 6th Floor, Meydan Road",
    phone: "+971524157275",
    bgVideo: "/videos/footer/4.mp4",
    mail:"sales@betopialimited.com"
  }, 
  // {
  //   imgUrl: "/dhaka1.png",
  //   imgWidth: 110,
  //   imgHeight: 100,
  //   title: "Upcoming Office",
  //   city: "Tokyo, Japan", 
  //   bgVideo: "/videos/footer/4.mp4",
  //   mail:"sales@betopialimited.com"
  // },
  // {
  //   imgUrl: "/dhaka1.png",
  //   imgWidth: 110,
  //   imgHeight: 100,
  //   title: "Upcoming Office",
  //   city: "Ottawa, Canada", 
  //   bgVideo: "/videos/footer/4.mp4",
  //   mail:"sales@betopialimited.com"
  // },
  // {
  //   imgUrl: "/dhaka1.png",
  //   imgWidth: 110,
  //   imgHeight: 100,
  //   title: "Upcoming Office",
  //   city: "London, United kingdom", 
  //   bgVideo: "/videos/footer/4.mp4",
  //   mail:"sales@betopialimited.com"
  // },
];