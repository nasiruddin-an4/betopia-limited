export default function ReadyFor() {
  return (
    <section className="bg-[#F9FAFB]">
      <div className="max-w-420 mx-auto pb-10 pt-0 lg:pt-6 lg:pb-20  px-3 md:px-8 overflow-hidden ">
        {/* <h3 className="text-center text-[#131313] text-3xl md:text-4xl xl:text-[42px] font-bold">
        Industry Ready For
      </h3> */}
        <h2 className="text-center text-black text-[24px] md:text-[32px] lg:text-[52px] font-bold ">
          Industry {}
          <span className="text-[#FF9500]">Ready For</span>
        </h2>
        <div className="w-20 h-1 bg-[#FF9500] mx-auto mt-3 mb-8 lg:mb-14"></div>
        {/* <div className="w-20 h-1 bg-[#FF9500] mx-auto my-3"></div> */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-6 lg:mt-10">
          {[
            { img: "/product/erp/1.jpg", text: "Retail" },
            { img: "/product/erp/2.jpg", text: "Manufacturing" },
            { img: "/product/erp/3.jpg", text: "Servicess" },
            { img: "/product/erp/4.jpg", text: "Education" },
            { img: "/product/erp/5.jpg", text: "Healthcare" },
            { img: "/product/erp/6.jpg", text: "Enterprise Groups" },
          ].map((item, i) => (
            <div
              key={i}
              className="relative w-full aspect-4/3 rounded-xl bg-center bg-cover"
              style={{ backgroundImage: `url('${item.img}')` }}
            >
              {/* overlay */}
              <div className="absolute inset-0 bg-[#18181899] rounded-xl"></div>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[60%] rounded-lg py-5  text-xl md:text-2xl xl:text-[28px] font-medium text-white flex items-center justify-center  text-center">
                {item.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
