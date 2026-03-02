import OnelinePageTitle from "@/components/shared/OnelinePageTitle";
import Image from "next/image";
import Link from "next/link";

const MediaHero = () => {
  return (
    <div className="relative w-full h-[320px] lg:min-h-screen  overflow-hidden">
      {/* Background video */}
      <Image
        alt="media"
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/media_kit.jpg"
        width={1660}
        height={563}
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col mt-10 lg:-mt-[3%]  justify-center h-full text-white px-4 sm:px-6 md:px-10 lg:px-16">
        <div className="xl:min-w-[1440px] xl:mx-auto mb-2 lg:mb-10 flex items-center justify-start gap-3 pb-3 border-b border-white ">
          <div className="text-xl lg:text-3xl font-semibold">
            News & Media
          </div>
          <div className="text-xl lg:text-3xl font-semibold">/</div>
          <Link className="text-xl lg:text-3xl font-semibold" href="/media-kit">
            Media Kit
          </Link>
        </div>
        <div className="min-w-[1440px] mx-auto">
          <OnelinePageTitle normalText="Betopia" highlightText="Media Kit" />

          <p
            className={`text-lg md:text-xl xl:text-2xl mt-2 md:mt-7 text-start text-[#CAD5E2]  mx-auto `}
          >
            Explore our official Betopia assets, for <br /> editorial use only.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MediaHero;

{
  /* <div className="relative w-full h-[420px] lg:h-[700px] xl:h-[903px] overflow-hidden rr">
  <div className="absolute inset-0 bg-black opacity-60 z-10"></div>

  <div className="relative z-10 flex flex-col justify-center h-full text-white px-4 sm:px-6 md:px-10 lg:px-16">
    <div className="xl:min-w-[1660px] xl:mx-auto mb-10 flex items-center gap-3 pb-3 border-b border-white lg:px-4">
      <Link className="text-xl lg:text-3xl font-semibold" href="/about">
        Who We Are
      </Link>
      <div className="text-xl lg:text-3xl font-semibold">/</div>
      <Link className="text-xl lg:text-3xl font-semibold" href="/news-item">
        News Alerts
      </Link>
    </div>

    <div className="min-w-[1660px] mx-auto">
      <OnelinePageTitle normalText="Betopia" highlightText="Media Kit" />

      <p className="text-lg md:text-xl xl:text-2xl mt-4 md:mt-7 text-start text-[#CAD5E2] mx-auto">
        Explore our official Betopia assets, for <br /> editorial use only.
      </p>
    </div>
  </div>

  <style jsx>{`
    .rr {
      background-image: url("/media_kit.jpg");
      background-position: center;
      background-repeat: no-repeat;
      background-size: 110%;
      background-attachment: fixed;
      animation: zoomOut 2s ease-out forwards;
    }

    @keyframes zoomOut {
      from {
        background-size: 115%;
      }
      to {
        background-size: 100%;
      }
    }

    @media (max-width: 1024px) {
      .rr {
        background-attachment: scroll;
        animation: zoomOutMobile 2s ease-out forwards;
      }

      @keyframes zoomOutMobile {
        from {
          background-size: 120%;
        }
        to {
          background-size: cover;
        }
      }
    }
  `}</style>
</div> */
}
