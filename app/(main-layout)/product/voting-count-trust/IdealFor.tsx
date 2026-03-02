export default function IdealFor() {
  return (
    <div className="max-w-420 w-11/12 mx-auto  px-4 overflow-hidden">
      <h3 className="text-center text-black text-[24px] md:text-[32px] lg:text-[52px] font-bold">
        Who <span className="text-[#FF9500]">CountTrust</span> Is For
      </h3>

      <div className="w-20 h-1 bg-[#FF9500] mx-auto mt-3 mb-8 lg:mb-10"></div>
      <p className="text-lg md:text-xl lg:text-2xl text-[#45556C] text-center">
        CountTrust is purpose-built for organizations that cannot afford
        ambiguity in elections
      </p>
      <p className="text-lg md:text-xl lg:text-2xl text-[#000000] font-semibold">
        Industries that We Serve
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-6 lg:mt-10">
        {[
          { img: "/product/ideal/1.jpg", text: "Clubs, Associations & Unions" },
          {
            img: "/product/ideal/2.jpeg",
            text: "Schools, Colleges & Universities",
          },
          { img: "/product/ideal/3.jpg", text: "Trusts, NGOs &  Foundations" },
          {
            img: "/product/ideal/4.jpg",
            text: "Corporate Boards & Shareholders",
          },
          {
            img: "/product/ideal/5.jpg",
            text: "Enterprises & Regulated Institutions",
          },
          {
            img: "/product/ideal/7.png",
            text: "Government & Public  Sector Initiatives",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="relative w-full aspect-4/3 rounded-xl bg-center bg-cover"
            style={{ backgroundImage: `url('${item.img}')` }}
          >
            {/* overlay */}
            <div className="absolute inset-0 bg-[#18181899] rounded-xl"></div>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%] md:w-[85%] xl:w-[75%] 2xl:w-[65%] rounded-lg py-5  text-xl md:text-2xl xl:text-[28px] font-medium text-white flex items-center justify-center  text-center">
              {item.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
// export default function IdealFor() {
//   return (
//     <div className="max-w-[1440px] mx-auto py-6 px-3 xl:px-0 overflow-hidden">
//       <h3 className="text-center text-black text-3xl md:text-4xl xl:text-[52px] font-bold">
//         <span className="text-[#FF9500]">Count Trust</span> is Ideal for
//       </h3>

//       <div className="w-20 h-1 bg-[#FF9500] mx-auto my-3"></div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-10">
//         {[
//           { img: "/product/1.webp", text: "Enterprises & Corporations" },
//           { img: "/product/2.jpg", text: "Associations & Membership Organizations" },
//           { img: "/product/3.webp", text: "Educational Institutions" },
//           { img: "/product/4.webp", text: "Cooperatives & Unions" },
//           { img: "/product/5.webp", text: "NGOs & Foundations" },
//           { img: "/product/6.avif", text: "Boards, Committees & Governance Bodies" },
//         ].map((item, i) => (
//           <div
//             key={i}
//             className="relative w-full aspect-[4/3] rounded-xl bg-center bg-cover"
//             style={{ backgroundImage: `url('${item.img}')` }}
//           >
//             <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%] rounded-lg py-5 border border-gray-300 text-xl md:text-2xl xl:text-[28px] font-medium text-white flex items-center justify-center backdrop-blur-sm text-center">
//               {item.text}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
