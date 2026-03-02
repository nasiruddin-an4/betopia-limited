"use client";

import React from "react";

type CardProps = {
  img: string;
  icon: React.ReactNode;
  title: string;
  text: string;
  className?: string;
};

export default function CardGrid({
  img,
  icon,
  title,
  text,
  className = "",
}: CardProps) {
  return (
    <div
      className={`bg-[#F5F7F8] rounded-2xl shadow-sm hover:shadow-lg transition p-4 flex flex-col ${className}`}
    >
      {/* Image */}
      <div className="rounded-xl overflow-hidden mb-4">
        <img src={img} alt={title} className="w-full h-40 object-cover" />
      </div>

      {/* Icon */}
      <div className="w-10 h-10 flex items-center justify-center bg-orange-100 text-orange-600 rounded-full mb-3">
        {icon}
      </div>

      {/* Content */}
      <h3 className="font-semibold text-lg md:text-xl lg:text-2xl mb-1">
        {title}
      </h3>

      <p className="text-lg md:text-xl text-gray-500">{text}</p>
    </div>
  );
}
