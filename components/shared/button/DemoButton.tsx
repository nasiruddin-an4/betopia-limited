import Link from "next/link";

const DemoButton = () => {
  return (
    <div className="flex  gap-1  mt-3 lg:mt-10 ">
      <Link
        href="/meeting-scheduler"
        className="flex items-center cursor-pointer bg-linear-to-r from-[#FF9500] to-[#F54900] px-3 lg:px-6 py-1 lg:py-3 md:px-5 text-sm lg:text-base rounded-md lg:rounded-[14px]"
      >
        Demo Request
        <div className="mt-1">
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
        </div>
      </Link>
    </div>
  );
};

export default DemoButton;
