 import UnderlineSectionTitle from "@/components/shared/UnderlineSectionTitle";
import CardGrid from "../common/CardGrid";
const items = [
    {
      id:1,
      img: "/partner/white-label/feature/1.png",
      icon: (<svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="56" height="56" rx="20" fill="#F79549"/>
<path d="M33 18L37 22L33 26" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 27V26C19 24.9391 19.4214 23.9217 20.1716 23.1716C20.9217 22.4214 21.9391 22 23 22H37" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M23 38L19 34L23 30" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M37 29V30C37 31.0609 36.5786 32.0783 35.8284 32.8284C35.0783 33.5786 34.0609 34 33 34H19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
),
      title: "We Handle Everything for You",
      text: "From understanding your needs to launching the solution, we take care of the entire process so you can stay focused on your business."
    },
    {
      id:2,
      img: "/partner/white-label/feature/2.png",
      icon: (<svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="56" height="56" rx="20" fill="#F79549"/>
<path d="M33.4982 37H24.9982C23.7001 36.9997 22.4276 36.6384 21.323 35.9565C20.2184 35.2746 19.3251 34.2989 18.7431 33.1386C18.161 31.9783 17.9131 30.679 18.027 29.3858C18.1409 28.0927 18.6121 26.8567 19.3881 25.816C20.164 24.7753 21.214 23.9708 22.4208 23.4925C23.6276 23.0142 24.9437 22.8809 26.2219 23.1075C27.5001 23.3341 28.6901 23.9116 29.6589 24.7756C30.6278 25.6396 31.3373 26.756 31.7082 28H33.4982C34.0892 28 34.6743 28.1164 35.2203 28.3425C35.7662 28.5687 36.2623 28.9002 36.6802 29.318C37.0981 29.7359 37.4295 30.232 37.6557 30.7779C37.8818 31.3239 37.9982 31.9091 37.9982 32.5C37.9982 33.091 37.8818 33.6761 37.6557 34.2221C37.4295 34.768 37.0981 35.2641 36.6802 35.682C36.2623 36.0998 35.7662 36.4313 35.2203 36.6575C34.6743 36.8836 34.0892 37 33.4982 37Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M37.9988 26.0018C37.9988 25.2061 37.6828 24.4431 37.1202 23.8804C36.5576 23.3178 35.7945 23.0018 34.9988 23.0018H32.7918C32.4526 21.8081 31.7198 20.7642 30.7124 20.0395C29.705 19.3148 28.4823 18.952 27.2427 19.0099C26.0031 19.0678 24.8195 19.5431 23.884 20.3585C22.9486 21.174 22.3163 22.2817 22.0898 23.5018" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
),
      title: "Flexible Cloud, Your Way",
      text: "Use Microsoft, AWS, or Google Cloud — we design, set up, and manage the cloud that fits your business best."
    },
    {
      id:3,
      img: "/partner/white-label/feature/3.png",
      icon:(<svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="56" height="56" rx="20" fill="#F79549"/>
<path d="M37 24.0019C36.9996 23.6511 36.9071 23.3067 36.7315 23.003C36.556 22.6994 36.3037 22.4472 36 22.2719L29 18.2719C28.696 18.0963 28.3511 18.0039 28 18.0039C27.6489 18.0039 27.304 18.0963 27 18.2719L20 22.2719C19.6963 22.4472 19.444 22.6994 19.2685 23.003C19.0929 23.3067 19.0004 23.6511 19 24.0019V32.0019C19.0004 32.3526 19.0929 32.697 19.2685 33.0007C19.444 33.3043 19.6963 33.5565 20 33.7319L27 37.7319C27.304 37.9074 27.6489 37.9998 28 37.9998C28.3511 37.9998 28.696 37.9074 29 37.7319L36 33.7319C36.3037 33.5565 36.556 33.3043 36.7315 33.0007C36.9071 32.697 36.9996 32.3526 37 32.0019V24.0019Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19.3008 23L28.0008 28L36.7008 23" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M28 38V28" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
),
      title: "Ready-Made Business Platforms",
      text: "Get instant access to powerful ERP, HRMS, POS, and governance systems built to simplify and scale your operations and able to sell them."
    },
    {
      id:4,
      img: "/partner/white-label/feature/4.png",
      icon:(<svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="56" height="56" rx="20" fill="#F79549"/>
<path d="M32 37V35C32 33.9391 31.5786 32.9217 30.8284 32.1716C30.0783 31.4214 29.0609 31 28 31H22C20.9391 31 19.9217 31.4214 19.1716 32.1716C18.4214 32.9217 18 33.9391 18 35V37" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M32 19.1289C32.8578 19.3513 33.6174 19.8522 34.1597 20.553C34.702 21.2538 34.9962 22.1148 34.9962 23.0009C34.9962 23.887 34.702 24.748 34.1597 25.4488C33.6174 26.1496 32.8578 26.6505 32 26.8729" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M38 36.9989V34.9989C37.9993 34.1126 37.7044 33.2517 37.1614 32.5512C36.6184 31.8508 35.8581 31.3505 35 31.1289" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M25 27C27.2091 27 29 25.2091 29 23C29 20.7909 27.2091 19 25 19C22.7909 19 21 20.7909 21 23C21 25.2091 22.7909 27 25 27Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
),
      title: "A Dedicated Expert by Your Side",
      text: "You’ll have one trusted manager guiding you through every step, ensuring smooth communication and successful delivery."
    },
    {
      id:5,
      img: "/partner/white-label/feature/5.png",
      icon: (<svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="56" height="56" rx="20" fill="#F79549"/>
<path d="M28 23V37" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 34C18.7348 34 18.4804 33.8946 18.2929 33.7071C18.1054 33.5196 18 33.2652 18 33V20C18 19.7348 18.1054 19.4804 18.2929 19.2929C18.4804 19.1054 18.7348 19 19 19H24C25.0609 19 26.0783 19.4214 26.8284 20.1716C27.5786 20.9217 28 21.9391 28 23C28 21.9391 28.4214 20.9217 29.1716 20.1716C29.9217 19.4214 30.9391 19 32 19H37C37.2652 19 37.5196 19.1054 37.7071 19.2929C37.8946 19.4804 38 19.7348 38 20V33C38 33.2652 37.8946 33.5196 37.7071 33.7071C37.5196 33.8946 37.2652 34 37 34H31C30.2044 34 29.4413 34.3161 28.8787 34.8787C28.3161 35.4413 28 36.2044 28 37C28 36.2044 27.6839 35.4413 27.1213 34.8787C26.5587 34.3161 25.7956 34 25 34H19Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
),
      title: "We Make Your Team Confident",
      text: "We train your team with clear guidance and resources so they can easily use and grow with the solution."
    }
  ];

export default function WhiteLabelFeatures() {
  const firstItems = items.slice(0, -2);
  const lastItems = items.slice(-2);

  return (
    <section>
      <div className="w-11/12 py-10 md:pb-[68px] md:pt-[62px] px-4 lg:px-0 overflow-hidden max-w-[1404px] mx-auto">

        <UnderlineSectionTitle
          title="Key Features"
          wrapperClassName="mb-8 md:mb-[43px] text-center text-[#4A5565]"
        />
        <div className="lg:hidden block">

        <div className="grid gap-6 lg:gap-10 md:grid-cols-2 ">
          {items.map((item) => (
            <CardGrid
              key={item.id}
              img={item.img}
              icon={item.icon}
              title={item.title}
              text={item.text}
              className="h-full md:h-[446px]"
            />
          ))}
        </div>
        </div>
        {/* FIRST GRID */}
        <div className="hidden lg:block">

        <div className="grid gap-6 lg:gap-10 md:grid-cols-2 lg:grid-cols-3">
          {firstItems.map((item) => (
            <CardGrid
              key={item.id}
              img={item.img}
              icon={item.icon}
              title={item.title}
              text={item.text}
              className="h-full md:h-[446px]"
            />
          ))}
        </div>

        {/* LAST 2 CENTERED */}
        <div className="flex justify-center gap-6 mt-6 w-[65%] mx-auto">
          {lastItems.map((item) => (
            <CardGrid
              key={item.id}
              img={item.img}
              icon={item.icon}
              title={item.title}
              text={item.text}
              className="w-full md:w-[544px] h-full md:h-[446px]"
            />
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}

//  import UnderlineSectionTitle from "@/components/shared/UnderlineSectionTitle";
// import { whiteLabelFeatures } from "@/data/WhiteLabelFeatures";
// const items = [
//     {
//       img: "/partner/white-label/feature/1.png",
//       icon: (<svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
// <rect width="56" height="56" rx="20" fill="#F79549"/>
// <path d="M33 18L37 22L33 26" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
// <path d="M19 27V26C19 24.9391 19.4214 23.9217 20.1716 23.1716C20.9217 22.4214 21.9391 22 23 22H37" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
// <path d="M23 38L19 34L23 30" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
// <path d="M37 29V30C37 31.0609 36.5786 32.0783 35.8284 32.8284C35.0783 33.5786 34.0609 34 33 34H19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
// </svg>
// ),
//       title: "We Handle Everything for You",
//       text: "From understanding your needs to launching the solution, we take care of the entire process so you can stay focused on your business."
//     },
//     {
//       img: "/partner/white-label/feature/2.png",
//       icon: (<svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
// <rect width="56" height="56" rx="20" fill="#F79549"/>
// <path d="M33.4982 37H24.9982C23.7001 36.9997 22.4276 36.6384 21.323 35.9565C20.2184 35.2746 19.3251 34.2989 18.7431 33.1386C18.161 31.9783 17.9131 30.679 18.027 29.3858C18.1409 28.0927 18.6121 26.8567 19.3881 25.816C20.164 24.7753 21.214 23.9708 22.4208 23.4925C23.6276 23.0142 24.9437 22.8809 26.2219 23.1075C27.5001 23.3341 28.6901 23.9116 29.6589 24.7756C30.6278 25.6396 31.3373 26.756 31.7082 28H33.4982C34.0892 28 34.6743 28.1164 35.2203 28.3425C35.7662 28.5687 36.2623 28.9002 36.6802 29.318C37.0981 29.7359 37.4295 30.232 37.6557 30.7779C37.8818 31.3239 37.9982 31.9091 37.9982 32.5C37.9982 33.091 37.8818 33.6761 37.6557 34.2221C37.4295 34.768 37.0981 35.2641 36.6802 35.682C36.2623 36.0998 35.7662 36.4313 35.2203 36.6575C34.6743 36.8836 34.0892 37 33.4982 37Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
// <path d="M37.9988 26.0018C37.9988 25.2061 37.6828 24.4431 37.1202 23.8804C36.5576 23.3178 35.7945 23.0018 34.9988 23.0018H32.7918C32.4526 21.8081 31.7198 20.7642 30.7124 20.0395C29.705 19.3148 28.4823 18.952 27.2427 19.0099C26.0031 19.0678 24.8195 19.5431 23.884 20.3585C22.9486 21.174 22.3163 22.2817 22.0898 23.5018" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
// </svg>
// ),
//       title: "Flexible Cloud, Your Way",
//       text: "Use Microsoft, AWS, or Google Cloud — we design, set up, and manage the cloud that fits your business best."
//     },
//     {
//       img: "/partner/white-label/feature/3.png",
//       icon:(<svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
// <rect width="56" height="56" rx="20" fill="#F79549"/>
// <path d="M37 24.0019C36.9996 23.6511 36.9071 23.3067 36.7315 23.003C36.556 22.6994 36.3037 22.4472 36 22.2719L29 18.2719C28.696 18.0963 28.3511 18.0039 28 18.0039C27.6489 18.0039 27.304 18.0963 27 18.2719L20 22.2719C19.6963 22.4472 19.444 22.6994 19.2685 23.003C19.0929 23.3067 19.0004 23.6511 19 24.0019V32.0019C19.0004 32.3526 19.0929 32.697 19.2685 33.0007C19.444 33.3043 19.6963 33.5565 20 33.7319L27 37.7319C27.304 37.9074 27.6489 37.9998 28 37.9998C28.3511 37.9998 28.696 37.9074 29 37.7319L36 33.7319C36.3037 33.5565 36.556 33.3043 36.7315 33.0007C36.9071 32.697 36.9996 32.3526 37 32.0019V24.0019Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
// <path d="M19.3008 23L28.0008 28L36.7008 23" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
// <path d="M28 38V28" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
// </svg>
// ),
//       title: "Ready-Made Business Platforms",
//       text: "Get instant access to powerful ERP, HRMS, POS, and governance systems built to simplify and scale your operations and able to sell them."
//     },
//     {
//       img: "/partner/white-label/feature/4.png",
//       icon:(<svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
// <rect width="56" height="56" rx="20" fill="#F79549"/>
// <path d="M32 37V35C32 33.9391 31.5786 32.9217 30.8284 32.1716C30.0783 31.4214 29.0609 31 28 31H22C20.9391 31 19.9217 31.4214 19.1716 32.1716C18.4214 32.9217 18 33.9391 18 35V37" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
// <path d="M32 19.1289C32.8578 19.3513 33.6174 19.8522 34.1597 20.553C34.702 21.2538 34.9962 22.1148 34.9962 23.0009C34.9962 23.887 34.702 24.748 34.1597 25.4488C33.6174 26.1496 32.8578 26.6505 32 26.8729" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
// <path d="M38 36.9989V34.9989C37.9993 34.1126 37.7044 33.2517 37.1614 32.5512C36.6184 31.8508 35.8581 31.3505 35 31.1289" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
// <path d="M25 27C27.2091 27 29 25.2091 29 23C29 20.7909 27.2091 19 25 19C22.7909 19 21 20.7909 21 23C21 25.2091 22.7909 27 25 27Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
// </svg>
// ),
//       title: "A Dedicated Expert by Your Side",
//       text: "You’ll have one trusted manager guiding you through every step, ensuring smooth communication and successful delivery."
//     },
//     {
//       img: "/partner/white-label/feature/5.png",
//       icon: (<svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
// <rect width="56" height="56" rx="20" fill="#F79549"/>
// <path d="M28 23V37" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
// <path d="M19 34C18.7348 34 18.4804 33.8946 18.2929 33.7071C18.1054 33.5196 18 33.2652 18 33V20C18 19.7348 18.1054 19.4804 18.2929 19.2929C18.4804 19.1054 18.7348 19 19 19H24C25.0609 19 26.0783 19.4214 26.8284 20.1716C27.5786 20.9217 28 21.9391 28 23C28 21.9391 28.4214 20.9217 29.1716 20.1716C29.9217 19.4214 30.9391 19 32 19H37C37.2652 19 37.5196 19.1054 37.7071 19.2929C37.8946 19.4804 38 19.7348 38 20V33C38 33.2652 37.8946 33.5196 37.7071 33.7071C37.5196 33.8946 37.2652 34 37 34H31C30.2044 34 29.4413 34.3161 28.8787 34.8787C28.3161 35.4413 28 36.2044 28 37C28 36.2044 27.6839 35.4413 27.1213 34.8787C26.5587 34.3161 25.7956 34 25 34H19Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
// </svg>
// ),
//       title: "We Make Your Team Confident",
//       text: "We train your team with clear guidance and resources so they can easily use and grow with the solution."
//     }
//   ];

// export default function WhiteLabelFeatures() {
//   const firstItems = whiteLabelFeatures.slice(0, -2);
//   const lastItems = whiteLabelFeatures.slice(-2);

//   return (
//     <section className="">
//       <div className="w-11/12 py-10 md:pb-[68px] md:pt-[62px] px-4 lg:px-0 overflow-hidden max-w-[1404px] mx-auto">

//         <UnderlineSectionTitle
//           title="Key Features"
//           wrapperClassName="mb-8 md:mb-[43px] text-center text-[#4A5565]"
//         />

//  <div className=" grid gap-6 lg:gap-10 md:grid-cols-2 lg:grid-cols-3">
//         {items.map((card, i) => (
//           <div
//             key={i}
//             className="bg-[#F5F7F8] rounded-2xl shadow-sm  hover:shadow-lg transition p-4 flex flex-col"
//           >
//             {/* Image */}
//             <div className="rounded-xl overflow-hidden mb-4">
//               <img src={card.img} className="w-full h-40 object-cover" />
//             </div>

//             {/* Icon */}
//             <div className="w-10 h-10 flex items-center justify-center
//                             bg-orange-100 text-orange-600 rounded-full mb-3">
//               {card.icon}
//             </div>

//             {/* Content */}
//             <h3 className="font-semibold text-lg md:text-xl lg:text-2xl mb-1">{card.title}</h3>
//             <p className="text-lg md:text-xl text-gray-500">{card.text}</p>
//           </div>
//         ))}
//       </div>
//         {/* GRID ITEMS */}
//         {/* <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-[30px] ">
//           {firstItems.map(item => (
//             <FeatureCard
//               key={item.id}
//               title={item.title}
//               description={item.description}
//               bgImage={item.image}
//               className="h-full md:h-[446px]"    
//             />
//           ))}
//         </div> */}

//         {/* FLEX — LAST 2 CENTERED */}
//         {/* <div className="flex justify-center gap-6 mt-6 flex-wrap">
//           {lastItems.map(item => (
//             <FeatureCard
//               key={item.id}
//               title={item.title}
//               description={item.description}
//               bgImage={item.image}
//               className="w-full md:w-[544px] h-full md:h-[446px]"
//             />
//           ))}
//         </div> */}

//       </div>
//     </section>
//   );
// }


// // export default function WhiteLabelFeatures() {
// //   const firstItems = whiteLabelFeatures.slice(0, -2);
// //   const lastItems = whiteLabelFeatures.slice(-2);

// //   return (
// //     <section className="w-full py-10 md:py-[64px] px-4 max-w-[1674px] mx-auto">
// //       <UnderlineSectionTitle
// //         title="Key Features"
// //         wrapperClassName="mb-6 md:mb-[43px] text-center text-[#4A5565]"
// //       />

// //       {/* GRID ITEMS */}
// //       <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-[30px]">
// //         {firstItems.map((item) => (
// //           <div
// //             key={item.id}
// //             className="relative w-full aspect-[541/446] md:h-[446px]"
// //           >
// //             <Image
// //               src={item.image}
// //               alt={item.title}
// //               fill
// //               className="object-cover rounded-xl"
// //             />
// //           </div>
// //         ))}
// //       </div>

// //       {/* LAST 2 CENTERED */}
// //       <div className="flex justify-center gap-6 mt-6 flex-wrap">
// //         {lastItems.map((item) => (
// //           <div
// //             key={item.id}
// //             className="relative w-full md:w-[541px] aspect-[541/446] md:h-[446px]"
// //           >
// //             <Image
// //               src={item.image}
// //               alt={item.title}
// //               fill
// //               className="object-cover rounded-xl"
// //             />
// //           </div>
// //         ))}
// //       </div>
// //     </section>
// //   );
// // }



// // import AboutPartner from "../common/AboutPartner";

// // const whiteLabelFeaturesData = [
// //   {
// //     id: 1,
// //     href: '/partner/white-label/features/feature1.svg',
// //     title: "End-to-End Delivery",
// //     description:
// //       "From requirement gathering to deployment, Betopia handles all technical aspects",
// //   },
// //   {
// //     id: 2,
// //     href: '/partner/white-label/features/feature2.svg',
// //     title: "Multi-Cloud Solutions",
// //     description:
// //       "Microsoft, AWS, Google Cloud solutions integrated and ready to deploy",
// //   },
// //   {
// //     id: 3,
// //     href: '/partner/white-label/features/feature3.svg',
// //     title: "Proprietary Products",
// //     description:
// //       "ERP, HRMS, POS, and Voting/Governance systems available for global clients",
// //   },
// //     {
// //     id: 4,
// //     href: '/partner/white-label/features/feature4.svg',
// //     title: "Dedicated Partner Success Manager",
// //     description:
// //       "Dedicated support guiding every step of client engagement and delivery",
// //   },
// //   {
// //     id: 5,
// //     href: '/partner/white-label/features/feature5.svg',
// //     title: "Training & Enablement",
// //     description:
// //       "Access to Betopia's portfolio, marketing materials, and product training",
// //   },
// //   {
// //     id: 6,
// //     href: '/partner/white-label/features/feature6.svg',
// //     title: "Recurring Revenue",
// //     description:
// //       "Earn on both project delivery and recurring SaaS subscriptions",
// //   },
// // ];

// // export default function WhiteLabelFeatures() {
// //   return (
// //     <AboutPartner
// //       heading="Key Features"
// //       items={whiteLabelFeaturesData}
// //     />
// //   );
// // }
