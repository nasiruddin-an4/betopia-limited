
export default function ServeSection() {
  const items = [
    {
      icon: (<svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 10C0 4.47715 4.47715 0 10 0H46C51.5229 0 56 4.47715 56 10V46C56 51.5229 51.5228 56 46 56H10C4.47715 56 0 51.5228 0 46V10Z" fill="#FEF2F2"/>
<path d="M37.3307 30.6667C39.3174 28.72 41.3307 26.3867 41.3307 23.3333C41.3307 21.3884 40.5581 19.5232 39.1828 18.1479C37.8076 16.7726 35.9423 16 33.9974 16C31.6507 16 29.9974 16.6667 27.9974 18.6667C25.9974 16.6667 24.3441 16 21.9974 16C20.0525 16 18.1872 16.7726 16.8119 18.1479C15.4367 19.5232 14.6641 21.3884 14.6641 23.3333C14.6641 26.4 16.6641 28.7333 18.6641 30.6667L27.9974 40L37.3307 30.6667Z" stroke="#E7000B" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.2969 28.0026H24.6702L25.3369 26.6693L28.0035 32.6693L30.6702 23.3359L32.6702 28.0026H39.6969" stroke="#E7000B" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
),
      label: "Healthcare & Life Sciences",
    },
    {
      icon: (<svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 10C0 4.47715 4.47715 0 10 0H46C51.5229 0 56 4.47715 56 10V46C56 51.5229 51.5228 56 46 56H10C4.47715 56 0 51.5228 0 46V10Z" fill="#EFF6FF"/>
<path d="M33.3307 38.6641V17.3307C33.3307 16.6235 33.0498 15.9452 32.5497 15.4451C32.0496 14.945 31.3713 14.6641 30.6641 14.6641H25.3307C24.6235 14.6641 23.9452 14.945 23.4451 15.4451C22.945 15.9452 22.6641 16.6235 22.6641 17.3307V38.6641" stroke="#155DFC" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M38.6641 20H17.3307C15.858 20 14.6641 21.1939 14.6641 22.6667V36C14.6641 37.4728 15.858 38.6667 17.3307 38.6667H38.6641C40.1368 38.6667 41.3307 37.4728 41.3307 36V22.6667C41.3307 21.1939 40.1368 20 38.6641 20Z" stroke="#155DFC" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
),
      label: "Banking, Financial Services & Insurance",
    },
    {
      icon: (<svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 10C0 4.47715 4.47715 0 10 0H46C51.5229 0 56 4.47715 56 10V46C56 51.5229 51.5228 56 46 56H10C4.47715 56 0 51.5228 0 46V10Z" fill="#FFF7ED"/>
<path d="M14.6641 38.6641C14.6641 39.3713 14.945 40.0496 15.4451 40.5497C15.9452 41.0498 16.6235 41.3307 17.3307 41.3307H38.6641C39.3713 41.3307 40.0496 41.0498 40.5497 40.5497C41.0498 40.0496 41.3307 39.3713 41.3307 38.6641V22.6641L31.9974 29.3307V22.6641L22.6641 29.3307V17.3307C22.6641 16.6235 22.3831 15.9452 21.883 15.4451C21.3829 14.945 20.7046 14.6641 19.9974 14.6641H17.3307C16.6235 14.6641 15.9452 14.945 15.4451 15.4451C14.945 15.9452 14.6641 16.6235 14.6641 17.3307V38.6641Z" stroke="#F54900" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M34.6641 36H35.9974" stroke="#F54900" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M28 36H29.3333" stroke="#F54900" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21.3359 36H22.6693" stroke="#F54900" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
),
      label: "Manufacturing & Supply Chain",
    },
    {
      icon: (<svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 10C0 4.47715 4.47715 0 10 0H46C51.5229 0 56 4.47715 56 10V46C56 51.5229 51.5228 56 46 56H10C4.47715 56 0 51.5228 0 46V10Z" fill="#FAF5FF"/>
<path d="M38.667 33.3307V21.3307C38.667 20.6235 38.3861 19.9452 37.886 19.4451C37.3859 18.945 36.7076 18.6641 36.0004 18.6641H20.0004C19.2931 18.6641 18.6148 18.945 18.1147 19.4451C17.6146 19.9452 17.3337 20.6235 17.3337 21.3307V33.3307M38.667 33.3307H17.3337M38.667 33.3307L40.3737 36.7307C40.4765 36.9347 40.5251 37.1617 40.515 37.3899C40.5049 37.6181 40.4363 37.8398 40.3159 38.0339C40.1954 38.228 40.0271 38.3879 39.8271 38.4982C39.6271 38.6085 39.4021 38.6657 39.1737 38.6641H16.827C16.5986 38.6657 16.3736 38.6085 16.1736 38.4982C15.9736 38.3879 15.8053 38.228 15.6849 38.0339C15.5644 37.8398 15.4958 37.6181 15.4857 37.3899C15.4756 37.1617 15.5242 36.9347 15.627 36.7307L17.3337 33.3307" stroke="#9810FA" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
),
      label: "Technology & SaaS",
    },
    {
      icon: (<svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 10C0 4.47715 4.47715 0 10 0H46C51.5229 0 56 4.47715 56 10V46C56 51.5229 51.5228 56 46 56H10C4.47715 56 0 51.5228 0 46V10Z" fill="#F0FDF4"/>
<path d="M33.3307 40V37.3333C33.3307 35.9188 32.7688 34.5623 31.7686 33.5621C30.7684 32.5619 29.4119 32 27.9974 32H19.9974C18.5829 32 17.2264 32.5619 16.2262 33.5621C15.226 34.5623 14.6641 35.9188 14.6641 37.3333V40" stroke="#00A63E" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M23.9974 26.6667C26.9429 26.6667 29.3307 24.2789 29.3307 21.3333C29.3307 18.3878 26.9429 16 23.9974 16C21.0519 16 18.6641 18.3878 18.6641 21.3333C18.6641 24.2789 21.0519 26.6667 23.9974 26.6667Z" stroke="#00A63E" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M41.3359 39.9985V37.3319C41.3351 36.1502 40.9417 35.0022 40.2178 34.0683C39.4938 33.1344 38.4801 32.4673 37.3359 32.1719" stroke="#00A63E" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M33.3359 16.1719C34.4832 16.4656 35.5 17.1328 36.2261 18.0683C36.9523 19.0038 37.3464 20.1543 37.3464 21.3385C37.3464 22.5228 36.9523 23.6733 36.2261 24.6088C35.5 25.5443 34.4832 26.2115 33.3359 26.5052" stroke="#00A63E" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
),
      label: "Professional Services",
    },
  ];

  return (
    <section className="w-11/12 mx-auto ">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl xl:text-[52px] font-bold mb-4 text-center">
       Clients & Industries We Serve
      </h2>
      <p className="text-lg md:text-xl xl:text-2xl mb-8 md:mb-20 text-center  md:w-[50%] mx-auto">
       BETOPIA Limited partners with organizations across diverse industries, delivering scalable and secure digital solutions tailored to business needs.
      </p>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
        {items.map((item, i) => (
          <div
            key={i}
            className="w-full w-[400px] rounded-2xl border border-[#E5E7EB] shadow-sm p-6  hover:shadow-md transition"
          >
            <span className="">
              {item.icon}
            </span>
            <p className="text-lg md:text-xl xl:text-2xl text-left mt-7">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
