import Image from 'next/image'
import React from 'react'
import Loho from '../Assets/img/single/Loho.svg'
import { motion } from 'framer-motion'



const Solution1 = ({img1,img2,header1,header2,text1,text2,imgWidth,imgHeight}) => {
  return (
    <div className='mx-[60px] mt-[120px]'>
        <main className='flex justify-between h-[329px]'>
            <div className='w-[580px] h-[228px]'>
                <h3 className='text-[30px] text-[#0B0B0B]  leading-[37px] font-medium font-Montserrat mb-[15px]'>{header1}</h3>
                <p className='text-[24px] font-light'>{text1}</p>
            </div>

            <div className='w-[580px] h-[226px] '>
                <h1 className='text-[#0B0B0B] text-[24px] leading-[37px] font-Montserrat font-medium mb-[15px]'>{header2}</h1>
                <p className='text-[#2D2D2D] text-[24px] leading-[29px] font-light '>{text2}</p>
            </div>
        </main>
        <div className='flex justify-center gap-40 '>
        <motion.div
                initial={{
                    x:-500,
                    opacity:0,
                    scale:0.5
                  }}
                  whileInView={{
                    x:0,
                    opacity:1,
                    scale:1
                  }}
                  transition={{
                    duration: 1.3
                  }}
                  viewport={{once:true}}

            >
            <Image src={img1} width={imgWidth} height={imgHeight} alt="Design Homepage "   />
            </motion.div>

            <motion.div
                initial={{
                    x:500,
                    opacity:0,
                    scale:0.5
                  }}
                  whileInView={{
                    x:0,
                    opacity:1,
                    scale:1
                  }}
                  transition={{
                    duration: 1.3
                  }}

                  viewport={{once:true}}
            >
            <Image src={img2} width={imgWidth} height={imgHeight} alt="Design Homepage "   />
            </motion.div>
        </div>
    </div>
  )
}

export default Solution1