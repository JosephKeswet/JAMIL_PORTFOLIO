import Image from 'next/image'
import React from 'react'
import Loho from '../Assets/img/single/Loho.svg'


const SolutionSect = ({img1,img2,paddingTop,text1,text2,header,imgWidth,imgHeight}) => {
  return (
    <div className='mx-[60px] mt-[120px]'>
        <main className='flex justify-between h-[529px]'>
            <div className='w-[580px] h-[228px]'>
                <h1 className='text-[#2D2D2D] text-[48px] font-medium leading-[59px] font-Montserrat mb-[30px]'>THE SOLUTION</h1>
                <h3 className='text-[30px] text-[#0B0B0B]  leading-[37px] font-medium font-Montserrat mb-[15px]'>HOMEPAGE</h3>
                <p className='text-[24px] font-light'>{text1}</p>
            </div>

            <div className={`w-[580px] h-[226px] ${paddingTop}`}>
                <h1 className='text-[#0B0B0B] text-[37px] leading-[37px] font-Montserrat font-medium mb-[15px]'>{header}</h1>
                <p className='text-[#2D2D2D] text-[24px] leading-[29px] font-light '>{text2}</p>
            </div>
        </main>
        <div className='flex justify-center gap-40'>
            <Image src={img1} width={imgWidth} height={imgHeight} alt="Solution design "   />
            <Image src={img2} width={imgWidth} height={imgHeight} alt="SOlution design "   />
        </div>
    </div>
  )
}

export default SolutionSect