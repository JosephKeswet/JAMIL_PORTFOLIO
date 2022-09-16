import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import React from 'react'

const MiniProjectCard = ({img,myText}) => {
  return (
    <div>
        <main className='flex items-end  gap-[41px] mb-6 '>
            <div className='flex items-center gap-[10px] w-[159px] h-[58px]'>
                <p className='w-[121px] h-[58px] text-2xl text-[#0B0B0B] leading-7 font-medium text-right'>Click here to view.</p>
                <FontAwesomeIcon icon={faArrowRight} className='w-5 h-7'/>
            </div>
            <div>
                <div className='mb-7'>
                <Image src={img} width={400} height={350} alt="Project Design"  />
                </div>
                <h1 className='w-[385px] h-[98px] text-[40px] text-[#171717] font-normal leading-[49px] underline underline-offset-8 '>{myText}</h1>
            </div>
        </main>
    </div>
  )
}

export default MiniProjectCard