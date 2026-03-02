import { CaseStudy } from "@/data/caseStudies";
import Image from "next/image";

export default function CaseCard({ data }: { data: CaseStudy }) {
  return (
    <div className="h-full flex flex-col shadow-2xl rounded-xl">
      {/* Image */}
      <Image
        src={data.image}
        alt={data.title}
        width={400}
        height={250}
        className="w-full  object-cover rounded-t-xl p-4"
      />

      {/* Content */}
      <div className="flex flex-col flex-1 px-4 pb-4">
        <p className="text-gray-500">{data.date}</p>

        <h3 className="text-xl font-medium mt-2 mb-4">{data.title}</h3>

        {/* Description (NO clamp, NO dots) */}
        <p className="md:text-lg tracking-wide text-gray-500">
          {data.description}
        </p>
      </div>
    </div>
  );
}

// import Image from "next/image";
// import { CaseStudy } from "@/data/caseStudies";

// export default function CaseCard({ data }: { data: CaseStudy }) {
//   return (
//     <div className="space-y-1 shadow-2xl rounded-xl">
//       <Image
//         src={data.image}
//         alt={data.title}
//         width={400}
//         height={250}
//         className="w-full  object-cover object-center rounded-t-xl p-4"
//       />

//       <div className="px-4 pb-4">
//         <p className=" text-gray-500 ">{data.date}</p>

//         <h3 className="text-xl font-medium mb-4 mt-2">{data.title}</h3>
//         <p className="md:text-lg tracking-wide text-gray-500">
//           {data?.description}
//         </p>
//       </div>
//     </div>
//   );
// }

// import Image from "next/image";
// import { CaseStudy } from "@/data/caseStudies";
// import Link from "next/link";

// export default function CaseCard({ data }: { data: CaseStudy }) {
//   return (
//     <div className="space-y-1 shadow-2xl rounded-xl">
//       <Image
//         src={data.image}
//         alt={data.title}
//         width={400}
//         height={250}
//         className="rounded-md max-h-[220px] min-h-[220px] object-cover "
//       />

// <div className="p-5">
//   <div className="flex items-center justify-between">
//       <p className="text-sm   tracking-wide text-gray-500">
//         {data.category}
//       </p>

//  <p className="text-sm text-gray-500 ">
//        {data.date}
//       </p>
//   </div>

// <Link href={data.link}>
//       <h3 className="text-xl hover:text-orange-400 font-medium mb-4 mt-2">{data.title}</h3>
// </Link>
//       <p className="md:text-lg tracking-wide text-gray-500">
//         {data.description}
//       </p>

// </div>
//     </div>
//   );
// }
