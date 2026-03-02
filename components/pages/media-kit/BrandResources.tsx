"use client";

import Image from "next/image";
import { Download } from "lucide-react";

export default function BrandResources() {
  return (
    <section className="max-w-[1675px] w-11/12 mx-auto  pb-10 lg:pb-20">
      {/* <h2 className="text-2xl md:text-3xl font-semibold mb-6">Resources:</h2> */}

<div className="grid grid-cols-1 gap-4 lg:gap-20 lg:grid-cols-2">
      {/* --- Dark Logo --- */}
      <div>
        <Image
          src="/media/white_betopialimited_logo2.png"
          alt="Betopia Dark Logo"
          width={805}
          height={454}
          className="w-full md:h-[454px] md:w-[805px] object-contain "
        />

        <div className="flex flex-wrap justify-center md:justify-start items-center gap-6 my-5 lg:my-0">
          <a
            href="/media/white_betopialimited_logo.svg"
            download
            className="flex items-center gap-1 text-base lg:text-lg cursor-pointer"
          >
            Download SVG <Download className="w-4 h-4" />
          </a>

          <span className="opacity-40">|</span>

          <a
            href="/media/white_betopialimited_logo2.png"
            download
            className="flex items-center gap-1 text-base lg:text-lg cursor-pointer"
          >
            Download PNG <Download className="w-4 h-4" />
          </a>

          <span className="opacity-40">|</span>

          <a
            href="/media/white_betopialimited_logo.ai"
            download
            className="flex items-center gap-1 text-base lg:text-lg cursor-pointer"
          >
            Download AI <Download className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* --- Light Logo --- */}
      <div>
        <Image
          src="/media/black_betopialimited_logo.png"
          alt="Betopia Light Logo"
          width={805}
          height={454}
          className="w-full md:h-[454px] md:w-[805px] object-contain"
        />

        <div className="flex flex-wrap justify-center md:justify-start items-center gap-6 my-5 lg:my-0">
          <a href="/media/black_betopialimited_logo.svg" download className="flex items-center gap-1 text-base lg:text-lg">
            Download SVG <Download className="w-4 h-4" />
          </a>

          <span className="opacity-40">|</span>

          <a href="/media/black_betopialimited_logo.png" download className="flex items-center gap-1 text-base lg:text-lg">
            Download PNG <Download className="w-4 h-4" />
          </a>

          <span className="opacity-40">|</span>

          <a href="/media/black_betopialimited_logo.ai" download className="flex items-center gap-1 text-base lg:text-lg">
            Download AI <Download className="w-4 h-4" />
          </a>
        </div>
      </div>

</div>

      {/* --- Group White --- */}
      {/* <div>
        <Image
          src="/media/white_betopiagroup_logo.png"
          alt="Betopia Group White Logo"
          width={705}
          height={354}
          className="w-full md:h-[354px] md:w-[705px] object-contain"
        />

        <div className="flex items-center gap-6 my-8">
          <a href="/media/black_betopiagroup_logo.svg" download className="flex items-center gap-1">
            Download SVG <Download className="w-4 h-4" />
          </a>

          <span className="opacity-40">|</span>

          <a href="/media/white_betopiagroup_logo.png" download className="flex items-center gap-1">
            Download PNG <Download className="w-4 h-4" />
          </a>
        </div>
      </div> */}

      {/* --- Group Black --- */}
      {/* <div>
        <Image
          src="/media/black_betopiagroup_logo.png"
          alt="Betopia Group Black Logo"
          width={705}
          height={354}
          className="w-full md:h-[354px] md:w-[705px] object-contain"
        />

        <div className="flex items-center gap-6 my-8">
          <a href="/media/white_betopiagroup_logo.svg" download className="flex items-center gap-1">
            Download SVG <Download className="w-4 h-4" />
          </a>

          <span className="opacity-40">|</span>

          <a href="/media/black_betopiagroup_logo.png" download className="flex items-center gap-1">
            Download PNG <Download className="w-4 h-4" />
          </a>
        </div>
      </div> */}
    </section>
  );
}
