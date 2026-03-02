"use client";

export function LoadMoreButton() {
  return (
    <div className="mt-16 flex justify-center">
      <button
        className="
          inline-flex items-center gap-2
          rounded-full px-8 py-3
          text-sm font-semibold text-white
          bg-linear-to-r from-[#FF9500] to-[#F54900]
          shadow-lg
          transition-all duration-300
          hover:scale-105 hover:shadow-xl
          active:scale-95
        "
      >
        Load More Stories
        <span>→</span>
      </button>
    </div>
  );
}
