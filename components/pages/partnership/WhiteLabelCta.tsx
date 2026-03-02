import Image from 'next/image'
import React from 'react'

export default function WhiteLabelCta() {
  return (
    <div className='max-w-[1222px] mx-auto my-20 bg-[#FB7F1E33] rounded-2xl flex justify-end gap-10'>
        <div></div>
        <Image src="/icons/rainbow.png" alt='' height={488} width={488}/>
    </div>
  )
}
