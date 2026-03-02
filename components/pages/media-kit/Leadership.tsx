"use client";

import { ArrowUpRight } from "lucide-react";

export interface lead {
  name: string;
  role: string;
  image: string;
}
const leaders = [
  {
    name: "Muhammad Monir Hossain",
    role: "Chief Executive Officer",
    image: "/media/new/CEO.png",
  },
  {
    name: "Sabina Akter",
    role: "Chairperson",
    image: "/media/new/Chairperson.png",
  },
  {
    name: "Md. Ariful Islam",
    role: "Director, Enterprise Business",
    image: "/media/new/Director.png",
  },
  {
    name: "Rakibul Islam Shiku",
    role: "Chief Technology Officer",
    image: "/media/new/CTO.png",
  },
];

export default function Leadership() {
  return (
    <section className="bg-[#f4f1f9]">
      <div className="max-w-[1675px] w-11/12 mx-auto py-10 lg:py-16 space-y-5 lg:space-y-10">
        <h3 className="text-lg font-semibold">IMAGES OF OUR LEADERSHIP TEAM</h3>

        <div className="grid md:grid-cols-2 gap-5 lg:gap-10">
          {leaders.map((p) => (
            <a
              key={p.name}
              href={p.image}
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-[#FF9500] pb-5 lg:pb-10 flex justify-between cursor-pointer  transition"
            >
              <div>
                <p className="text-xl md:text-[36px]">{p.name}</p>
                <p className="text-lg md:text-2xl mt-2 text-gray-500">
                  {p.role}
                </p>
              </div>

              <ArrowUpRight className="text-[#FF9500]" size={26} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
