import Container from "@/components/layout/Container";
import Image from "next/image";
import Link from "next/link";
import {
  FaShareAltSquare,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";

export default function TeamSection() {
 const members = [
  {
    name: "Rakibul Islam Shiku",
    role: "CTO",
    image: "/team/Rakibul Islam Shiku.png",
    linkedin: "https://www.linkedin.com/in/msaifislam9/",
  },
  {
    name: "Rafsun Ahmed",
    role: "AI engineer",
    image: "/team/Rafsun Ahmed -  AI engineer.png",
    linkedin: "https://www.linkedin.com/in/msaifislam9/",
  },
];

 const members2 = [
    {
    name: "SMF Karim",
    role: "Software Engineer",
    image: "/team/member.png",
    linkedin: "/team/member.png",
  },
  {
    name: "Saiful Islam Raju",
    role: "Cloud Infra Expert",
    image: "/team/Saiful Islam Raju - Cloud Infra Expert2.jpg",
    linkedin: "https://www.linkedin.com/in/msaifislam9/",
  },
   {
    name: "Muhammad Saiful Islam",
    role: "Data Center expert",
    image: "/team/Saiful Islam - Data Center expert.jpg",
    linkedin: "https://www.linkedin.com/in/muhammad-saiful-islam-12a2b42b9/ ",
  },
];

  return (
    <section className="relative overflow-hidden py-24">
      <Container>
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-16">
          {/* Left content */}
          <div>
            <p className=" font-semibold text-[#1F1F1F] mb-4 md:mb-[65px]">
              [ Team ]
            </p>
            <h2 className="text-2xl md:text-[60px] font-medium">
              The Neural Network Experts
            </h2>
  <p className="mt-6 text-[#595959] md:text-[20px] ">
            Bringing together expert minds to deliver AI-powered, cloud-ready business platforms.
          </p>
            {/* <div className="mt-6 md:mt-40">
              <h3 className="text-5xl md:text-[129px] font-semibold text-[#CCCCCC] mb-[17px]">
                3500k+
              </h3>
              <p className="mt-2 text-2xl md:text-[57px]">Awesome Member</p>
            </div> */}
          </div>

          {/* Right cards */}
          <div className="flex flex-col md:flex-row gap-6">
            {members.map((m, i) => (
              <div
                key={i}
                className={`w-[402px] h-[500px] rounded-2xl shadow-md
    ${i === 1 ? "md:mt-[250px]" : ""}
  `}
              >
                <div className="relative rounded-t-2xl  flex items-end justify-center ">
                   
                  <Image
                    src={m.image}
                    alt={m.name}
                    width={402}
                    height={367.4}
                    className="object-cover max-h-[327px] rounded-t-2xl"
                  />
                  <div className="absolute -bottom-1 left-[14%] group">
                    {/* Social icons */}
                    <div
                    className="absolute -left-.5 bottom-full  flex flex-col items-center gap-3
                  opacity-0 scale-95 transition-all duration-300
                  group-hover:opacity-100 group-hover:scale-100 bg-[#FF9500] rounded-t-2xl p-1"
                  >
                      <span className="w-10 h-10 cursor-pointer text-white flex items-center justify-center">
                        <FaFacebookF />
                      </span>
                      <span className="w-10 h-10 cursor-pointer text-white flex items-center justify-center">
                        <FaTwitter />
                      </span>
                     <Link href={m.linkedin}>
                    <span className="w-10 h-10 cursor-pointer text-white flex items-center justify-center">
                      <FaLinkedinIn />
                    </span>
                    </Link>
                    </div>

                    {/* Share icon */}
                  <span
                    className="bg-[#FF9500] border-4 rounded-md border-white hover:rounded-[0px] hover:border-[#FF9500] px-2 py-2 text-white  flex items-center justify-center text-2xl 
                  cursor-pointer"
                  >
                      <FiShare2 />
                    </span>
                  </div>
                </div>
                <div className="px-[33px] pt-[23px]">
                  <h4 className="font-semibold text-xl md:text-[30px] text-[#1F1F1F]">
                    {m.name}
                  </h4>
                  <p className="md:text-[23px] text-[#1F1F1F99]">{m.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-6 mt-10 md:mt-[62px] md:ml-[426px]">
          {members2.map((m, i) => (
            <div
              key={i}
              className={`w-[402px] h-[500px] rounded-2xl shadow-md
    ${i === 0 ? "md:mt-[250px]" : i === 2 ? "md:mt-[120px]" : ""}
  `}
            >
              <div className="relative rounded-t-2xl  flex items-end justify-center">
              
                <Image
                  src={m.image}
                  alt={m.name}
                  width={402}
                  height={367.4}
                  className="object-cover max-h-[327px] rounded-t-2xl"
                />
                <div className="absolute -bottom-1 left-[14%] group">
                  {/* Social icons */}
                  <div
                    className="absolute -left-.5 bottom-full  flex flex-col items-center gap-3
                  opacity-0 scale-95 transition-all duration-300
                  group-hover:opacity-100 group-hover:scale-100 bg-[#FF9500] rounded-t-2xl p-1"
                  >
                    <span className="w-10 h-10 cursor-pointer text-white flex items-center justify-center">
                      <FaFacebookF />
                    </span>
                    <span className="w-10 h-10 cursor-pointer text-white flex items-center justify-center">
                      <FaTwitter />
                    </span>
                    <Link href={m.linkedin}>
                    <span className="w-10 h-10 cursor-pointer text-white flex items-center justify-center">
                      <FaLinkedinIn />
                    </span>
                    </Link>
                  </div>

                  {/* Share icon */}
                 <span
                    className="bg-[#FF9500] hover:broder-[#FF9500]  border-4 rounded-md hover:rounded-[0px] hover:border-[#FF9500] border-white px-2 py-2 text-white  flex items-center justify-center text-2xl 
                  cursor-pointer"
                  >
                      <FiShare2 />
                    </span>
                </div>
              </div>
              <div className="px-[33px] pt-[23px]">
                <h4 className="font-semibold text-xl md:text-[30px] text-[#1F1F1F]">
                  {m.name}
                </h4>
                <p className="md:text-[23px] text-[#1F1F1F99]">{m.role}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
