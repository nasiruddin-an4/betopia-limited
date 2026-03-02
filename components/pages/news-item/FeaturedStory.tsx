import Image from "next/image";

export default function FeaturedStory() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-[1480px] mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block mb-3 rounded-full bg-linear-to-r from-[#FF9500] to-[#F54900] px-4 py-1 text-xs font-semibold text-white">
            Featured Story
          </span>

          <h2 className="font-arial text-3xl md:text-4xl font-bold text-gray-900">
            Latest from Betopia
          </h2>
        </div>

        {/* Card */}
        <div className="flex flex-col md:flex-row overflow-hidden rounded-3xl bg-white shadow-xl">
          {/* Image */}
          <div className="relative md:w-1/2 h-[320px] md:h-auto">
            <span className="absolute left-6 top-6 z-10 rounded-full bg-[#FF9500] px-4 py-1 text-xs font-semibold text-white">
              Leadership
            </span>

            <Image
              src="/news/news-img-7.png" // replace with your image
              alt="Featured Story"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content */}
          <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-between">
            {/* Meta */}
            <div>
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                <span className="flex items-center gap-1">
                  📅 July 24, 2024
                </span>
                <span className="flex items-center gap-1">
                  ⏱ 5 min read
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-4">
                How EDGE Helped Us Build Better People—and a Better Future
              </h3>

              <p className="text-gray-600 leading-relaxed mb-8">
                When I think about what defines a strong, forward-thinking
                company, the answer is simple: people. The right people,
                equipped with the right tools and mindset, are the foundation
                of success.
              </p>
            </div>

            {/* Author + CTA */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-[#FF9500] flex items-center justify-center text-white font-semibold">
                  M
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    Muhammad Monir Hossain
                  </p>
                  <p className="text-xs text-gray-500">
                    CEO of Betopia Group
                  </p>
                </div>
              </div>

              <a
                href="/news-item/how-edge"
                className="flex items-center gap-2 text-sm font-semibold text-[#FF9500] hover:gap-3 transition-all"
              >
                Read More
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
