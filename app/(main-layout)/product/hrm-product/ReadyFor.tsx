import Container from "@/components/layout/Container";

export default function ReadyFor() {
  return (
    <section className="bg-[#F9FAFB]">
      <Container>
        <div className=" py-10  lg:py-20 overflow-hidden ">
          {/* <HeadingOne title="Who Betopia" highlight="HRM Is Built For" /> */}
          <h2 className="text-center text-black text-[24px] md:text-[32px] lg:text-[52px] font-bold ">
            Who Betopia {}
            <span className="text-[#FF9500]">HRM Is Built For</span>
          </h2>
          <div className="w-20 h-1 bg-[#FF9500] mx-auto mt-3 mb-8 lg:mb-16"></div>
          {/* <h3 className="text-center text-black text-3xl md:text-4xl xl:text-[52px] font-bold">
        Who Betopia <span className="text-[#FF9500]">HRM Is Built For</span> 
      </h3> */}

          {/* <div className="w-20 h-1 bg-[#FF9500] mx-auto my-3"></div> */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 mt-6 lg:mt-10">
            {[
              {
                img: "/product/hrm/ready/1.jpg",
                text: "Enterprise & Large Organizations",
              },
              {
                img: "/product/hrm/ready/2.jpg",
                text: "Multi-Branch & Distributed Teams",
              },
              {
                img: "/product/hrm/ready/3.png",
                text: "Organizations Seeking Secure, Centralized HR Operations",
              },
              {
                img: "/product/hrm/ready/4.jpeg",
                text: "Growing Companies Needing Scalable HR System",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="relative w-full aspect-4/3 rounded-xl bg-center bg-cover"
                style={{ backgroundImage: `url('${item.img}')` }}
              >
                {/* overlay */}
                <div className="absolute inset-0 bg-[#18181899] rounded-xl"></div>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[80%] rounded-lg 2xl:py-5  text-xl md:text-2xl 2xl:text-3xl font-medium text-white flex items-center justify-center  text-center">
                  {item.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
