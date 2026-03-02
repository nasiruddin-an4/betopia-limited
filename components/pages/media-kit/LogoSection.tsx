"use client";
import Container from "@/components/layout/Container";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { FiFileText } from "react-icons/fi";

const sections = [
  {
    title: "Betopia White Logo",
    files: [
      { label: "JPG file", path: "/media/whitelogo.jpg" },
      { label: "AI file", path: "/media/whitelogo.ai" },
      { label: "SVG file", path: "/media/whitelogo.svg" },
    ],
  },
];

const sections2 = [
  {
    title: "Betopia Black Logo",
    files: [
      { label: "JPG  file", path: "/media/blacklogo.jpg" },
      { label: "AI file", path: "/media/blacklogo.ai" },
      { label: "SVG file", path: "/media/blacklogo.svg" },
    ],
  },
];

const sections3 = [
  {
    title: "Betopia Group Logo",
    files: [
      { label: "JPG  file", path: "/media/betopiagroup.jpg" },
      { label: "AI file", path: "/media/betopiagroup.ai" },
      { label: "SVG file", path: "/media/betopiagroup.svg" },
    ],
  },
];

const sections4 = [
  {
    title: "Betopia GroupTM Logo",
    files: [
      { label: "JPG  file", path: "/media/betopiagrouptm.jpg" },
      { label: "AI file", path: "/media/betopiagrouptm.ai" },
      { label: "SVG file", path: "/media/betopiagrouptm.svg" },
    ],
  },
];

export default function LogoSection() {
  const handleDownload = (filePath: string) => {
    const a = document.createElement("a");
    a.href = filePath;
    a.download = filePath.split("/").pop() ?? "";
    a.click();
  };

  return (
    <section className="py-10 lg:py-20 ">
      <Container>
        <div>
                 <div className="flex flex-col md:flex-row gap-8">
              <Image
                src="/media/betopialimited3.jpg"
                alt="logo"
                width={700}
                height={600}
                className="w-full h-auto object-contain rounded-lg"
              />
                 <Image
                src="/media/betopialimited.jpg"
                alt="logo"
                width={700}
                height={600}
                className="w-full h-auto object-contain rounded-lg"
              />
            
            </div>
             <h2 className="text-3xl md:text-[52px] font-semibold mb-10 md:mb-16 w-11/12 mx-auto text-center pt-10 md:pt-16">
                    Also Betopia Group Logo
                  </h2>
               <div className="flex flex-col md:flex-row gap-8 mb-8 md:mb-16">
               <Image
                src="/media/betopiaGroup2.jpg"
                alt="logo"
                width={700}
                height={600}
                className="w-full h-auto object-contain rounded-lg"
              />
                 <Image
                src="/media/betopiaGroupTM2.jpg"
                alt="logo"
                width={700}
                height={600}
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
          {/* WHITE LOGO */}
          <div>
       

            <div className="">
              {sections.map((section) => (
                <div key={section.title}>
                  <h2 className="text-3xl md:text-[52px] font-semibold mb-10 md:mb-12 ">
                    {section.title}
                  </h2>

                  <ul className="space-y-5">
                    {section.files.map((file) => (
                      <li
                        key={file.path}
                        onClick={() => handleDownload(file.path)}
                        className="flex items-center gap-2 pb-3 cursor-pointer hover:text-[#FF9500] border-b border-gray-300 w-fit"
                      >
                        <div className="flex items-center gap-3 text-lg md:text-2xl">
                          <FiFileText />
                          Download the {file.label}
                        </div>
                        <ArrowRight className="text-2xl" />
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* BLACK LOGO */}
          <div>
         

            <div className=" xl:mt-0 mt-8">
              {sections2.map((section) => (
                <div key={section.title}>
                  <h2 className="text-3xl md:text-[52px] font-semibold mb-10 md:mb-12">
                    {section.title}
                  </h2>

                  <ul className="space-y-5">
                    {section.files.map((file) => (
                      <li
                        key={file.path}
                        onClick={() => handleDownload(file.path)}
                        className="flex items-center gap-2 pb-3 cursor-pointer hover:text-[#FF9500] border-b border-gray-300 w-fit"
                      >
                        <div className="flex items-center gap-3 text-lg md:text-2xl">
                          <FiFileText />
                          Download the {file.label}
                        </div>
                        <ArrowRight className="text-2xl" />
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* betopiagroup */}

                <div className="md:mt-10">
         

            <div className=" xl:mt-0 mt-8">
              {sections3.map((section) => (
                <div key={section.title}>
                  <h2 className="text-3xl md:text-[52px] font-semibold mb-10 md:mb-12">
                    {section.title}
                  </h2>

                  <ul className="space-y-5">
                    {section.files.map((file) => (
                      <li
                        key={file.path}
                        onClick={() => handleDownload(file.path)}
                        className="flex items-center gap-2 pb-3 cursor-pointer hover:text-[#FF9500] border-b border-gray-300 w-fit"
                      >
                        <div className="flex items-center gap-3 text-lg md:text-2xl">
                          <FiFileText />
                          Download the {file.label}
                        </div>
                        <ArrowRight className="text-2xl" />
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* betopiagrouptm */}
                <div className="md:mt-10">
         

            <div className=" xl:mt-0 mt-8">
              {sections4.map((section) => (
                <div key={section.title}>
                  <h2 className="text-3xl md:text-[52px] font-semibold mb-10 md:mb-12">
                    {section.title}
                  </h2>

                  <ul className="space-y-5">
                    {section.files.map((file) => (
                      <li
                        key={file.path}
                        onClick={() => handleDownload(file.path)}
                        className="flex items-center gap-2 pb-3 cursor-pointer hover:text-[#FF9500] border-b border-gray-300 w-fit"
                      >
                        <div className="flex items-center gap-3 text-lg md:text-2xl">
                          <FiFileText />
                          Download the {file.label}
                        </div>
                        <ArrowRight className="text-2xl" />
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
