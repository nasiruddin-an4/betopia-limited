import Link from 'next/link'

const CTAButton = () => {
  return (
    <div>  
        <Link href="/meeting-scheduler" target="_blank">
          <button
            className="mt-9.25 inline-flex items-center gap-2 bg-white text-[#FF9500] font-semibold px-4 py-3 rounded-xl cursor-pointer
             transition"
          >
            Book a Consultation
            <span className="text-lg">
              <svg
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
            </span>
          </button>
        </Link>
    </div>
  )
}

export default CTAButton
