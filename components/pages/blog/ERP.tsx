import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function ERP() {
    return (
        <div className="bg-[#FFF7ED]">

            <div className='max-w-[1480px] mx-auto py-20'>
                <div className="relative z-10 flex flex-col mt-10 items-center justify-center h-full text-white text-center px-4 sm:px-6 md:px-10 lg:px-16">


                    <h1
                        className=" font-normal text-black 
          text-3xl sm:text-4xl md:text-5xl lg:text-[68px] xl:text-[64px] leading-24"
                    >
                        Enterprise Resource Planning  <span className='text-[#FF9500] '>(ERP)</span>
                    </h1>

                    <p
                        className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl lg:text-2xl font-normal  text-[#45556C] max-w-[1000px] px-2 sm:px-4"
                    >In today&apos;s fast-paced business landscape, ERP systems integrate core processes to streamline operations and drive growth. </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3  md:gap-4 mt-8 sm:mt-10 lg:mt-14">
                        <Link href='/product/erp'>
                            <button
                                className="bg-linear-to-r from-[#FF9500] to-[#F54900]  cursor-pointer flex items-center gap-4 rounded-xl font-normal px-5 py-3 sm:px-6 sm:py-4 md:px-8 md:py-3 text-sm md:text-base"

                            >Learn More About ERP
                                <svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" viewBox="0 0 7 13" fill="none">
                                    <path d="M0.769531 0.770142L6.16063 6.16124L0.769531 11.5523" stroke="white" strokeWidth="1.54031" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </Link>
                    </div>


                </div>
            </div>

            {/*  */}

            <div className='bg-[#FFF7ED]'>
                <div className='max-w-[1480px] mx-auto py-20 grid grid-cols-1 md:grid-cols-2 items-center gap-20'>
                    <Image src='/blog/erp.png' alt='hiring' width={711} height={462} />
                    <div>
                        <h6 className='w-fit text-xs md:text-sm lg:text-base text-[#FF9500] mb-4  px-5 py-2 rounded-3xl bg-[#FFD6A8] border border-[#FF9500]'>
                            Enterprise Resource Planning (ERP)
                        </h6>
                        <h1
                            className=" font-normal text-balck 
          text-3xl sm:text-4xl md:text-5xl lg:text-[52px] leading-16"
                        >5G60 IPL: SBP Conference
                        </h1>
                        <p
                            className="mt-2 text-base sm:text-lg md:text-xl font-normal  text-[#45556C] max-w-[1100px] px-2 sm:px-4"
                        >
                            A delegation of AmCham Bangladesh, led by its President 𝐌𝐫. 𝐒𝐲𝐞𝐝 𝐄𝐫𝐬𝐡𝐚𝐝 𝐀𝐡𝐦𝐞𝐝, attended the 𝐒𝐆𝟔𝟎 𝐈𝐏𝐒-𝐒𝐁𝐅 𝐂𝐨𝐧𝐟𝐞𝐫𝐞𝐧𝐜𝐞 on 29 July 2025 at the Sands Grand Ballroom, Singapore, on an invitation from AmCham Singapore.
                             <br />
                            <br />
                           The conference brought together global leaders and thinkers to discuss the future of the global economy amid rising uncertainty. It began with a dialogue between 𝐏𝐫𝐢𝐦𝐞 𝐌𝐢𝐧𝐢𝐬𝐭𝐞𝐫 𝐚𝐧𝐝 𝐌𝐢𝐧𝐢𝐬𝐭𝐞𝐫 𝐟𝐨𝐫 𝐅𝐢𝐧𝐚𝐧𝐜𝐞, 𝐌𝐫. 𝐋𝐚𝐰𝐫𝐞𝐧𝐜𝐞 𝐖𝐨𝐧𝐠, and IPS Director 𝐌𝐫. 𝐉𝐚𝐧𝐚𝐝𝐚𝐬 𝐃𝐞𝐯𝐚𝐧, focusing on Singapore’s role in an evolving international landscape.<br />
                            </p>
                        <Link href='/news/1'>
                            <button
                                className="bg-linear-to-r from-[#FF9500] to-[#F54900] mt-8 text-white   cursor-pointer flex items-center gap-4 rounded-xl font-normal px-5 py-3 sm:px-6 sm:py-4 md:px-8 md:py-3 text-sm md:text-base"

                            >Read Full Article
                                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                                    <path d="M3.85156 9.2417H14.6338" stroke="white" strokeWidth="1.54031" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M9.24219 3.85059L14.6333 9.24168L9.24219 14.6328" stroke="white" strokeWidth="1.54031" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
