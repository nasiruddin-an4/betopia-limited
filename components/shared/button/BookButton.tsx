import Link from 'next/link'

const BookButton = () => {
  return (
    <div className="flex  gap-5 mt-5 lg:mt-10">
          <Link
            href="/meeting-scheduler" target="_blank"
            className="flex items-center cursor-pointer gap-1 bg-linear-to-r from-[#FF9500] to-[#F54900] px-4 py-2 md:px-5 md:py-3 rounded-[14px]"
          >
            Book a Consultation
               <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
              >
                <path
                  d="M10.8335 7.58331L16.2502 13L10.8335 18.4166"
                  stroke="white"
                  strokeWidth="1.95"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
          </Link>
        </div>
  )
}

export default BookButton
