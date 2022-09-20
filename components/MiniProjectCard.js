import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import { motion } from 'framer-motion'
import React from 'react'
import Link from 'next/link'

const MiniProjectCard = ({img,myText,route}) => {
  return (
    <div>
        <main className='flex items-end  gap-[41px] mb-6 '>
            <div className='flex items-center gap-[10px] w-[159px] h-[58px]'>
                <p className='w-[121px] h-[58px] text-2xl text-[#0B0B0B] leading-7 font-medium text-right font-Montserrat'>Click here to view.</p>
                <FontAwesomeIcon icon={faArrowRight} className='w-5 h-7'/>
            </div>
            <div>
            <Link href={route}>
                <motion.div 
                  whileHover={{
                    scale: 1.05,
                    transition: {
                      duration: .2
                    }
                  }}
                  whileTap={{ scale: 0.9 }}
                className='mb-7 cursor-pointer'>
                <Image src={img} width={400} height={350} alt="Project Dunderline underline-offset-8 esign"  />
                </motion.div>
                </Link>

                <Link href={route}>
                <motion.h1 
                  whileHover={{
                    scale: 1.05,
                    transition: {
                      duration: .2
                    }
                  }}
                  whileTap={{ scale: 0.9 }}
                className='w-[385px] h-[98px] text-[38px] text-[#171717] font-normal leading-[49px] font-Montserrat underline underline-offset-8 cursor-pointer'>{myText}</motion.h1>
                </Link>
            </div>
        </main>
    </div>
  )
}

export default MiniProjectCard