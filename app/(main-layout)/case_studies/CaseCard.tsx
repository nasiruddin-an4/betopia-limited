import Image from "next/image";
import { CaseStudy } from "@/data/caseStudies";
import Link from "next/link";

export default function CaseCard({ data }: { data: CaseStudy }) {
  return (
    <Link href={data.link}>
      <div className="space-y-1  shadow-2xl rounded-2xl">
        <Image
          src={data.image}
          alt={data.title}
          width={400}
          height={250}
          className=" min-w-full object-center h-62.5 lg:h-75 rounded-2xl shadow-md"
        />

        <div className="p-4">
          {/* <p className="text-xs uppercase tracking-wide text-gray-500">
        {data.category}
      </p> */}

          <h3 className="text-xl hover:text-orange-400 font-medium mb-4">
            {data.title}
          </h3>

          <p className="text-sm text-gray-500">
            {data.category} | {data.date}
          </p>
        </div>
      </div>
    </Link>
  );
}
