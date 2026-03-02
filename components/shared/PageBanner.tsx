import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import PageTitle from "./PageTitle";
import OnelinePageTitle from "./OnelinePageTitle";

interface PageBannerProps {
  badgeText?: string;
  normalTitle: string;
  highlightTitle: string;
  description?: string;

  titleVariant?: "default" | "oneline";
  descriptionWidth?: "55" | "45";
  primaryBtn?: {
    label: string;
    href: string;
  };

  showSecondaryBtn?: boolean;
  secondaryBtn?: {
    label: string;
    href: string;
  };
}

const PageBanner = ({
  badgeText = "Trusted by Fortune 500 Companies",
  normalTitle,
  highlightTitle,
  description,
  titleVariant = "default",
  descriptionWidth = "55",
  primaryBtn,
  secondaryBtn,
  showSecondaryBtn = false,
}: PageBannerProps) => {
  return (
    <section className="relative flex flex-col justify-end items-center h-[664px] overflow-hidden text-white pb-20">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/hero/aboutbanner.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 container text-center px-4">
        {badgeText && (
          <p className="text-sm md:text-[17px] border border-[#FF9500] py-2.5 rounded-full w-fit mx-auto mb-4 px-6">
            {badgeText}
          </p>
        )}

        {/*  TITLE SWITCH */}
        {titleVariant === "oneline" ? (
          <OnelinePageTitle
            normalText={normalTitle}
            highlightText={highlightTitle}
          />
        ) : (
          <PageTitle normalText={normalTitle} highlightText={highlightTitle} />
        )}

        {description && (
          <p
            className={`md:text-2xl text-[#CAD5E2] mx-auto mt-4 mb-8 ${
              descriptionWidth === "45" ? "md:max-w-[45%]" : "md:max-w-[55%]"
            }`}
          >
            {description}
          </p>
        )}

        {/*  BUTTONS */}
        {primaryBtn && (
          <div className="flex justify-center gap-5">
            <Link
              href={primaryBtn.href}
              className="flex items-center gap-3 bg-linear-to-r from-[#FF9500] to-[#F54900] px-4 py-2 md:px-5 md:py-3 rounded-[10px]"
            >
              {primaryBtn.label} <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
              >
                <path
                  d="M10.8335 7.58331L16.2502 13L10.8335 18.4166"
                  stroke="#FF9500"
                  strokeWidth="1.95"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>

            {/* ❌ View Demo hidden by default */}
            {showSecondaryBtn && secondaryBtn && (
              <Link
                href={secondaryBtn.href}
                className="flex items-center gap-2 bg-white text-[#FF9500] hover:bg-[#FF9500] hover:text-white border border-[#45556C] px-4 py-2 md:px-5 md:py-3 rounded-[10px]"
              >
                {secondaryBtn.label}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default PageBanner;
