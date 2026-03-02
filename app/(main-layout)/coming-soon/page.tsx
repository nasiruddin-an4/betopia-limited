"use client";

import Link from "next/link";

export default function ComingSoonPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-[#8aa1ff] via-[#bfccff] to-[#f6f8ff] text-black px-6">
      <div className="text-center max-w-xl w-full animate-fadeIn">
        {/* Badge */}
        <span className="inline-block mb-6 px-4 py-1 text-sm rounded-full bg-[#FF9500]/10 text-orange-600 border border-orange-400/30">
          New Page Incoming
        </span>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Coming <span className="text-[#FF9500]">Soon</span>
        </h1>

        {/* Description */}
        <p className="text-gray-600 text-lg mb-10">
          We are working on something exciting. This page will be available very
          soon. Stay tuned!
        </p>

        {/* Animated Loader */}
        <div className="flex justify-center gap-3 mb-12">
          <span className="w-3 h-3 bg-[#FF9500] rounded-full animate-bounce [animation-delay:-0.3s]" />
          <span className="w-3 h-3 bg-[#FF9500] rounded-full animate-bounce [animation-delay:-0.15s]" />
          <span className="w-3 h-3 bg-[#FF9500] rounded-full animate-bounce" />
        </div>

        {/* CTA */}
        <Link
          href="/"
          className="inline-flex items-center text-white justify-center px-6 py-3 rounded-lg bg-[#FF9500] hover:bg-orange-600 transition font-medium"
        >
          Back to Home
        </Link>
      </div>

      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#FF9500]/20 blur-[120px]" />
      </div>

      {/* Custom animation */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
