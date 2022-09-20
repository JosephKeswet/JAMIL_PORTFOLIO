import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { motion } from "framer-motion"
import Link from 'next/link'

const Nav = ({scrollFunc}) => {
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
        <main>
        <nav className='flex justify-between items-center mt-11 mb-[52px] mx-[100px] h-[20px]  '>
    
            <motion.h1 
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
            className='w-[235px] h-[37px]  text-[#0B0B0B] text-[30px] leading-9 font-Montserrat '> JAMIL NATHAN</motion.h1>
 
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
            className='flex gap-[50px] font-Montserrat cursor-pointer'>
              <Link href='/'>
                <li>Home</li>
              </Link>
              <Link href='/About'>
                <li>CV</li>
              </Link>
  
                <li onClick={scrollFunc}>Projects</li>


                <li onClick={handleShow}>Contact</li>

            </motion.ul> 
            <div className={`absolute top-20 cursor-pointer left-[1000px] bg-white shadow-lg text-[24px] w-[450px] p-10 h-20 ${show ? 'flex items-center' : 'hidden'}`}>
            <Link href="mailto:nathanumarjamil@gmail.com?subject = Feedback&body = Message">
                  <h1>NATHANUMARJAMIL@GMAIL.COM</h1>
                  </Link>
                </div>
               
        </nav>
         </main>
    </div>
  )
}

export default Nav