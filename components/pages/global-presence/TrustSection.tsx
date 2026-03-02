import PageSubtitle from "@/components/shared/heading/pageSubtitle";
import Image from "next/image";

export default function TrustSection() {
  return (
    <section className="w-11/12 mx-auto px-3 py-10 lg:py-20 grid lg:grid-cols-2 gap-6 lg:gap-10">
      {/* Left  */}
      <div className="relative rounded-xl overflow-hidden min-h-[260px] md:min-h-[380px] xl:h-full">
        <Image
          src="/media/trust.png"
          alt="Business handshake"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Right */}
      <div>
        <h2 className="text-[28px] md:text-4xl lg:text-[52px] font-bold mb-4">
          Trust, Governance & <br /> Security
        </h2>
        <PageSubtitle
          text="Across all regions, BETOPIA Limited follows strong governance, security, and compliance practices. Global operations are aligned with international standards to ensure data protection, operational integrity, and dependable service delivery."
          className="mb-10"
        />

        <div className="space-y-6">
          <div className="flex gap-4">
            <span className="">
              <svg
                width="56"
                height="56"
                viewBox="0 0 56 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 27.7256C0 12.4132 12.4132 0 27.7256 0C43.0381 0 55.4513 12.4132 55.4513 27.7256C55.4513 43.0381 43.0381 55.4513 27.7256 55.4513C12.4132 55.4513 0 43.0381 0 27.7256Z"
                  fill="#FFEDD4"
                />
                <path
                  d="M35.7266 28.727C35.7266 33.727 32.2266 36.227 28.0666 37.677C27.8487 37.7508 27.6121 37.7473 27.3966 37.667C23.2266 36.227 19.7266 33.727 19.7266 28.727V21.727C19.7266 21.4618 19.8319 21.2074 20.0195 21.0199C20.207 20.8324 20.4613 20.727 20.7266 20.727C22.7266 20.727 25.2266 19.527 26.9666 18.007C27.1784 17.826 27.4479 17.7266 27.7266 17.7266C28.0052 17.7266 28.2747 17.826 28.4866 18.007C30.2366 19.537 32.7266 20.727 34.7266 20.727C34.9918 20.727 35.2461 20.8324 35.4337 21.0199C35.6212 21.2074 35.7266 21.4618 35.7266 21.727V28.727Z"
                  stroke="#FF9500"
                  strokeWidth="1.85882"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M24.7266 27.7266L26.7266 29.7266L30.7266 25.7266"
                  stroke="#FF9500"
                  strokeWidth="1.85882"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <div>
              <h4 className="font-bold text-lg md:text-[28px]">
                Strong Governance
              </h4>
              <PageSubtitle
                text="Aligned with international standards across all regions"
                className="text-[#364153]"
              />
            </div>
          </div>

          <div className="flex gap-4">
            <span className="">
              <svg
                width="56"
                height="56"
                viewBox="0 0 56 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 27.7256C0 12.4132 12.4132 0 27.7256 0C43.0381 0 55.4513 12.4132 55.4513 27.7256C55.4513 43.0381 43.0381 55.4513 27.7256 55.4513C12.4132 55.4513 0 43.0381 0 27.7256Z"
                  fill="#FFEDD4"
                />
                <path
                  d="M27.7266 32.7266C28.2788 32.7266 28.7266 32.2788 28.7266 31.7266C28.7266 31.1743 28.2788 30.7266 27.7266 30.7266C27.1743 30.7266 26.7266 31.1743 26.7266 31.7266C26.7266 32.2788 27.1743 32.7266 27.7266 32.7266Z"
                  stroke="#F59500"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M34.7266 25.7266H20.7266C19.622 25.7266 18.7266 26.622 18.7266 27.7266V35.7266C18.7266 36.8311 19.622 37.7266 20.7266 37.7266H34.7266C35.8311 37.7266 36.7266 36.8311 36.7266 35.7266V27.7266C36.7266 26.622 35.8311 25.7266 34.7266 25.7266Z"
                  stroke="#F59500"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22.7266 25.7266V22.7266C22.7266 21.4005 23.2533 20.1287 24.191 19.191C25.1287 18.2533 26.4005 17.7266 27.7266 17.7266C29.0526 17.7266 30.3244 18.2533 31.2621 19.191C32.1998 20.1287 32.7266 21.4005 32.7266 22.7266V25.7266"
                  stroke="#F59500"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <div>
              <h4 className="font-bold text-lg md:text-[28px]">
                Data Protection
              </h4>
              <PageSubtitle
                text="Ensuring security and privacy in every operation"
                className="text-[#364153]"
              />
            </div>
          </div>

          <div className="flex gap-4">
            <span className="">
              <svg
                width="56"
                height="56"
                viewBox="0 0 56 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 27.7256C0 12.4132 12.4132 0 27.7256 0C43.0381 0 55.4513 12.4132 55.4513 27.7256C55.4513 43.0381 43.0381 55.4513 27.7256 55.4513C12.4132 55.4513 0 43.0381 0 27.7256Z"
                  fill="#FFEDD4"
                />
                <path
                  d="M21.7266 37.7266C21.1961 37.7266 20.6874 37.5159 20.3123 37.1408C19.9373 36.7657 19.7266 36.257 19.7266 35.7266V19.7266C19.7266 19.1961 19.9373 18.6874 20.3123 18.3124C20.6874 17.9373 21.1961 17.7266 21.7266 17.7266H29.7266C30.0431 17.7261 30.3566 17.7882 30.6491 17.9093C30.9415 18.0305 31.2071 18.2083 31.4306 18.4326L35.0186 22.0206C35.2434 22.2441 35.4217 22.5099 35.5433 22.8027C35.6648 23.0955 35.7271 23.4095 35.7266 23.7266V35.7266C35.7266 36.257 35.5158 36.7657 35.1408 37.1408C34.7657 37.5159 34.257 37.7266 33.7266 37.7266H21.7266Z"
                  stroke="#FF9500"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M29.7266 17.7266V22.7266C29.7266 22.9918 29.8319 23.2461 30.0195 23.4337C30.207 23.6212 30.4613 23.7266 30.7266 23.7266H35.7266"
                  stroke="#FF9500"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <div>
              <h4 className="font-bold text-lg md:text-[28px]">Compliance</h4>
              <PageSubtitle
                text="Meeting global regulatory requirements"
                className="text-[#364153]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
