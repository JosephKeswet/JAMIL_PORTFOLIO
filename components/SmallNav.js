import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const SmallNav = () => {
  
  return (
    <div>
        <main className=''>
        <nav className='flex justify-between items-center mt-11 mb-[52px] mx-[100px] h-[20px]  '>
          <div className='flex items-center gap-12'>
            <FontAwesomeIcon icon={faArrowLeft} className='w-10 h-7 text-[#959595] hover:text-black duration-300 cursor-pointer'/>
            <h1 className='w-[235px] h-[37px]  text-[#0B0B0B] text-[30px] leading-9 font-Montserrat '> JAMIL NATHAN</h1>
          </div>
            <ul className='flex gap-[50px] font-Montserrat cursor-pointer'>
                <li>Home</li>
                <li>CV</li>
                <li>Contact</li>
            </ul>
        </nav>
         </main>
    </div>
  )
}

export default SmallNav