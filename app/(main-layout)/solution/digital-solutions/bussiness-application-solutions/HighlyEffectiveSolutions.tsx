import Image from "next/image";
import SectionTitle from "@/components/shared/SectionTitle";

type ListBlock = {
  title: string;
  items: string[];
  iconType: "check" | "settings";
};

interface EffectiveSolutionSectionProps {
  normalTitle: string;
  highlightTitle: string;
  imageSrc: string;
  imageAlt?: string;
  blocks: ListBlock[];
}

export default function HighlyEffectiveSolutions({
  normalTitle,
  highlightTitle,
  imageSrc,
  imageAlt = "Solution Image",
  blocks,
}: EffectiveSolutionSectionProps) {
  return (
    <section className="bg-linear-to-b from-[#F8FAFC] to-[#EFF6FF] py-10 lg:py-20">
      <div className="max-w-[1680px] w-11/12 mx-auto px-4">
        {/* Section Title */}
        <div className="text-center">
          <SectionTitle
            normalText={normalTitle}
            highlightText={highlightTitle}
          />
        </div>

        <div className="w-20 h-1 bg-[#FF9500] mx-auto mt-3 mb-10" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-stretch ">
          {/* Image */}
          <div className="relative w-full h-[300px] lg:h-full rounded-2xl overflow-hidden">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover "
            />
          </div>

          {/* Content */}
          <div className="space-y-10 lg:space-y-14">
            {blocks.map((block, index) => (
              <div key={index}>
                <h3 className="text-xl md:text-2xl lg:text-[36px] text-[#414042] mb-5">
                  {block.title}
                </h3>

                <ul className="space-y-4 lg:space-y-6">
                  {block.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex gap-3 text-[#45556C] lg:text-xl"
                    >
                      <Icon type={block.iconType} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Icons ---------------- */

function Icon({ type }: { type: "check" | "settings" }) {
  if (type === "settings") {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" > <path d="M9.6713 4.1342C9.7264 3.55454 9.99564 3.01624 10.4264 2.62448C10.8572 2.23271 11.4185 2.01562 12.0008 2.01562C12.5831 2.01562 13.1444 2.23271 13.5752 2.62448C14.006 3.01624 14.2752 3.55454 14.3303 4.1342C14.3634 4.50865 14.4863 4.86962 14.6884 5.18654C14.8906 5.50346 15.1662 5.76701 15.4918 5.95488C15.8174 6.14274 16.1834 6.2494 16.559 6.26582C16.9346 6.28224 17.3085 6.20793 17.6493 6.0492C18.1784 5.80898 18.778 5.77422 19.3313 5.95168C19.8846 6.12915 20.3521 6.50615 20.6428 7.0093C20.9335 7.51246 21.0266 8.10577 20.9039 8.67377C20.7813 9.24177 20.4517 9.74381 19.9793 10.0822C19.6717 10.298 19.4206 10.5848 19.2472 10.9182C19.0739 11.2516 18.9833 11.6219 18.9833 11.9977C18.9833 12.3735 19.0739 12.7438 19.2472 13.0772C19.4206 13.4106 19.6717 13.6974 19.9793 13.9132C20.4517 14.2516 20.7813 14.7536 20.9039 15.3216C21.0266 15.8896 20.9335 16.4829 20.6428 16.9861C20.3521 17.4892 19.8846 17.8662 19.3313 18.0437C18.778 18.2212 18.1784 18.1864 17.6493 17.9462C17.3085 17.7875 16.9346 17.7132 16.559 17.7296C16.1834 17.746 15.8174 17.8527 15.4918 18.0405C15.1662 18.2284 14.8906 18.4919 14.6884 18.8089C14.4863 19.1258 14.3634 19.4867 14.3303 19.8612C14.2752 20.4409 14.006 20.9792 13.5752 21.3709C13.1444 21.7627 12.5831 21.9798 12.0008 21.9798C11.4185 21.9798 10.8572 21.7627 10.4264 21.3709C9.99564 20.9792 9.7264 20.4409 9.6713 19.8612C9.63825 19.4866 9.5154 19.1255 9.31317 18.8085C9.11094 18.4914 8.83528 18.2278 8.50954 18.0399C8.1838 17.852 7.81757 17.7454 7.44188 17.7291C7.06619 17.7128 6.69211 17.7873 6.3513 17.9462C5.82219 18.1864 5.22263 18.2212 4.6693 18.0437C4.11598 17.8662 3.64848 17.4892 3.35779 16.9861C3.0671 16.4829 2.97402 15.8896 3.09666 15.3216C3.21931 14.7536 3.54891 14.2516 4.0213 13.9132C4.32892 13.6974 4.58003 13.4106 4.75339 13.0772C4.92675 12.7438 5.01726 12.3735 5.01726 11.9977C5.01726 11.6219 4.92675 11.2516 4.75339 10.9182C4.58003 10.5848 4.32892 10.298 4.0213 10.0822C3.54957 9.74364 3.22055 9.24179 3.09821 8.67418C2.97586 8.10657 3.06891 7.51374 3.35929 7.01091C3.64966 6.50808 4.11662 6.13118 4.66939 5.95344C5.22217 5.7757 5.82129 5.80983 6.3503 6.0492C6.69106 6.20793 7.06505 6.28224 7.44061 6.26582C7.81616 6.2494 8.18224 6.14274 8.50784 5.95488C8.83345 5.76701 9.109 5.50346 9.31117 5.18654C9.51334 4.86962 9.63619 4.50865 9.6693 4.1342" stroke="#FF9500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /> <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#FF9500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /> </svg>
    );
  }

  return (
   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" > <path d="M21.8006 9.9995C22.2573 12.2408 21.9318 14.5709 20.8785 16.6013C19.8251 18.6317 18.1075 20.2396 16.0121 21.1568C13.9167 22.0741 11.5702 22.2453 9.36391 21.6419C7.15758 21.0385 5.2248 19.6969 3.88789 17.8409C2.55097 15.9849 1.89073 13.7267 2.01728 11.4429C2.14382 9.15904 3.04949 6.98759 4.58326 5.29067C6.11703 3.59375 8.18619 2.47393 10.4457 2.11795C12.7052 1.76198 15.0184 2.19136 16.9996 3.3345" stroke="#FF9500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /> <path d="M9 11L12 14L22 4" stroke="#FF9500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /> </svg>
  );
}
