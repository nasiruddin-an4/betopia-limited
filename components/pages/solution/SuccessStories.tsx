import Container from "@/components/layout/Container";
import PageSubtitle from "@/components/shared/pageSubtitle";
import SectionTitle from "@/components/shared/SectionTitle";
import { stories } from "@/data/solution";
import Image from "next/image";


const SuccessStories = () => {
  return (
    <section className="bg-linear-to-r from-[#FFF7ED] to-[#FFFFFF] py-10 lg:py-20">
      <Container>
         {/* Header */}
        <div className="text-center mb-10 lg:mb-[75px]">

        <SectionTitle normalText="Success" highlightText="Stories" />
<div className="w-20 h-1 bg-[#FF9500] mx-auto mt-4  mb-5" />
        <PageSubtitle
          text="Real results from real clients across diverse industries"
          className="mt-4 md:mt-[19px] text-[#45556C] lg:w-[50%] mx-auto"
        />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {stories.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border-[1.16] border-[#E2E8F0] p-6 md:p-[37px] flex flex-col justify-between shadow-sm transition-all duration-300
      hover:shadow-md hover:-translate-y-1 "
            >
              <div>
                <span
                  className={`inline-block text-base font-medium px-3.5 py-[5px] rounded-full ${item.tagColor}`}
                >
                  {item.tag}
                </span>

                <h3 className="mt-3.5 text-lg md:text-[28px] text-[#0F172B]">
                  {item.title}
                </h3>

                <div className="mt-4 lg:mt-14 text-sm md:text-[19px] text-gray-600">
                  <div>
                    <p className=" text-[#62748E]">Challenge</p>
                    
                    <p className="mt-2">
                    {item.challenge}</p>
                  </div>
                  <div>

                    <p className="text-[#62748E] mt-[19px]">Solution</p>
                    <p className="mt-2"> {item.solution}</p>
      
                  </div>
                 
                </div>

                {/* Metric */}
                <div className="mt-6 bg-linear-to-r from-[#FFF7ED] to-[#FFEDD4] rounded-2xl py-4 lg:py-7
                 text-center">
                  <p className="text-3xl lg:text-[56px] text-[#FF9500]">
                    {item.metric}
                  </p>
                  <p className=" text-[#CA3500] mt-2.5">
                    {item.metricLabel}
                  </p>
                </div>
              </div>

              {/* Results */}
               <p className="text-[#62748E] mt-[19px] text-[17px] lg:mt-14">Results</p>
              <ul className="mt-6 lg:mt-14 space-y-2 text-[#314158]">

                {item.results.map((res, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Image
                                         width={23}
                                         height={23}
                                           src="/solution/checkbox.png"
                                           alt="check"
                                           className="w-5 lg:w-[23px] h-5 lg:h-[23px] "
                                         />
                    <span>{res}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default SuccessStories;
