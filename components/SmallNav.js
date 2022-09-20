import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'
import Link from 'next/link'

const SmallNav = ({route}) => {
  const [show,setShow] = useState(false)
  const handleShow = ()=>{
    if (!show) {
      setShow(true) 
    }
    else{
    setShow(false)
    }
  }
  
  
  return (
    <div>
        <main className='fixed top-0 left-0 right-0 bg-white z-50'>
        <nav className='flex justify-between items-center mt-11 mb-[52px] mx-[100px] h-[20px]  '>
          <motion.div 
              initial={{
                x:-500,
                opacity:0,
                scale:0.5
              }}
              animate={{
                x:0,
                opacity:1,
                scale:1
              }}
              transition={{
                duration: 1.3
              }}
            className='flex items-center gap-12'>
            <Link href={route}>
            <FontAwesomeIcon icon={faArrowLeft} className='w-10 h-7 text-[#959595] hover:text-black duration-300 cursor-pointer'/>
            </Link>
            <h1 className='w-[235px] h-[37px]  text-[#0B0B0B] text-[30px] leading-9 font-Montserrat '> JAMIL NATHAN</h1>
          </motion.div>
            <motion.ul 
                initial={{
                  x:500,
                  opacity:0,
                  scale:0.5
                }}
                animate={{
                  x:0,
                  opacity:1,
                  scale:1
                }}
                transition={{
                  duration: 1.3
                }}
            className='flex gap-[50px] font-Montserrat cursor-pointer '>
            <Link href='/'>
                <li className='cursor-pointer hover:underline underline-offset-8'>Home</li>
              </Link>
              <Link href='/About'>
                <li className='cursor-pointer hover:underline underline-offset-8'>CV</li>
              </Link>
                <li className='cursor-pointer hover:underline underline-offset-8' onClick={handleShow}>Contact</li>
            </motion.ul>
            <div className={`absolute z-40 top-20 cursor-pointer left-[1000px] bg-white shadow-lg text-[24px] w-[450px] p-10 h-20 ${show ? 'flex items-center' : 'hidden'}`}>
              <Link href="mailto:nathanumarjamil@gmail.com?subject = Feedback&body = Message">
                  <h1>NATHANUMARJAMIL@GMAIL.COM</h1>
                  </Link>
                </div>
        </nav>
         </main>
    </div>
  )
}

export default SmallNav