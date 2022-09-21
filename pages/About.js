import React from 'react'
import Nav from '../components/Nav'
import SmallNav from '../components/SmallNav'
import Jamil from '../Assets/img/Jamil/JamilRounded.png'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <motion.div
    exit={{
        opacity: 0
      }}
    >
        <SmallNav route='/'/>
        
        <motion.div
        initial='hidden' animate='visible'
        variants={{
          hidden: {
            scale: .8,
            opacity: 0
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: 1
            }
          },
        }}
        className='relative flex items-start mt-48 mx-[100px] '>
            <main>
            <div className='mb-24 w-[878px]'>
                <h1 className='font-Cinzel text-[50px] font-light leading-[81px] text-[#2D2D2D] mb-[40px]'>{`Hey, I'm Nathan Jamil Umar,`}</h1>
                <p className='font-Montserrat font-light text-[24px] text-[#171717] leading-[29px] w-[778px] h-[58px]'>{`I'm a Nigerian based UX/UI Designer and Graphic Designer passionate about creating beautiful, meaningful and seamless experiences.`}</p>
            </div>
            
            <div className='w-[893px] mb-[50px]'>
                <h1 className='text-[#0B0B0B] text-[48px] leading-[59px] font-Montserrat mb-[15px]'>A BIT OF MY JOURNEY</h1>
                <p className='text-2xl text-[#2D2D2D] font-Montserrat leading-[29px]'>I initially began my journey into tech and design during my third year of pharmacy school after having a forced school bbreak that left me a bit too idle. As someone who is naturally curious and likes to keep productive, I got my self a design app and started trying out random things, over time I got myself a tutor and went on self practice too. About 10 months into it and I got my first paying job. learning to design had its challenges but I was thrilled by my progress and was excited about the future.
                </p>
                <br />
                <p className='text-2xl text-[#2D2D2D] font-Montserrat leading-[29px]'>Fast Forward to September 2021, after hanging around other designers and meeting people from other tech fields such as UI/UX Designers, Front End Developers and Back End Developers. I again immersed myself into the world of tech even deeper. Before my decision to transition to UI/UX, I had been promoted to the position of Head Design Intern. This gave me a sense of responsibility and accountability that I needed to function in a professional environment. I explored many other learning options in both design and UI/UX like YouTube and SkillShare.
​                </p>
                <br />
                <p className='text-2xl text-[#2D2D2D] font-Montserrat leading-[29px]'>​
                After months of learning UI/UX on my own I am now seeking the opportunity to advance my career as a UX/UI Designer and have a primary focus on utilising my skills to create meaningful and seamless experiences. </p>
                <br />
                <p className='text-2xl text-[#2D2D2D] font-Montserrat leading-[29px]'>
                {`When I'm not designing, I’m voluntering to tech design at a hub in the city where I live.`}
​                </p>
                <br />
                <p className='text-2xl text-[#2D2D2D] font-Montserrat leading-[29px]'>{`Outside of this, I like to spend time enjoying art in all forms, whether it's paintings, (re)watching TV series and films, listening to music or creating music when I get the opportunity to.`}</p>
            </div>

            <div className='mb-[50px]'>
                <h1 className='text-[#0B0B0B] text-[48px] font-Montserrat leading-[59px] mb-[20px]'>SKILLS</h1>
                <ul className='text-2xl text-[#2D2D2D] font-light leading-[35px] font-Montserrat'>
                    <li className='pl-5'> <span className='pr-6'><FontAwesomeIcon icon={faCircle}/></span> Figma</li>
                    <li className='pl-5'> <span className='pr-6'><FontAwesomeIcon icon={faCircle}/></span> Adobe Photoshop</li>
                    <li className='pl-5'> <span className='pr-6'><FontAwesomeIcon icon={faCircle}/></span> Adobe Illustrator</li>
                    <li className='pl-5'> <span className='pr-6'><FontAwesomeIcon icon={faCircle}/></span> Adobe XD</li>
                    <li className='pl-5'> <span className='pr-6'><FontAwesomeIcon icon={faCircle}/></span> Canva</li>
                </ul>
            </div>

            <div>
                <h1 className='text-[#0B0B0B] text-[48px] font-Montserrat leading-[59px]'>WORK EXPERIENCE</h1>
                <br />
                <div>
                    <h2 className='text-[30px] text-[#0B0B0B] font-Montserrat leading-[37px] uppercase'>Elite Entrepreneurs Network</h2>
                    <p className='text-[24px] leading-[29px] font-Montserrat font-light text-[#2D2D2D] '>Social Media Designer</p>
                    <p className='text-[24px] leading-[29px] font-Montserrat font-light text-[#2D2D2D]'>(April 2021 - Present)</p>
                </div>
                <br />
                <div>
                    <h2 className='text-[30px] text-[#0B0B0B] font-Montserrat leading-[37px] uppercase'>Lustre Media Conglomerate</h2>
                    <p className='text-[24px] leading-[29px] font-Montserrat font-light text-[#2D2D2D]'>Designer</p>
                    <p className='text-[24px] leading-[29px] font-Montserrat font-light text-[#2D2D2D]'>(April 2021 - Present)</p>
                    <p className='text-[24px] leading-[29px] font-Montserrat font-light text-[#2D2D2D]'>Designs and creates social media content for Lustre Media Conglomerate and her subsidiarie.</p>
                </div>
                <br />
                <div>
                    <h2 className='text-[30px] text-[#0B0B0B] font-Montserrat leading-[37px] uppercase'>Myllash Media</h2>
                    <p className='text-[24px] leading-[29px] font-Montserrat font-light text-[#2D2D2D]'>Designer</p>
                    <p className='text-[24px] leading-[29px] font-Montserrat font-light text-[#2D2D2D]'>(June 2021 - Present)</p>
                    <p className='text-[24px] leading-[29px] font-Montserrat font-light text-[#2D2D2D]'>Designs and creates promotions for Myllash Media.</p>
                    <p className='text-[24px] leading-[29px] font-Montserrat font-light text-[#2D2D2D]'>
                    Designs promotion for Clients working in hand with Myllash Media.</p>
                </div>
                <br />
                <div className='mb-32'>
                    <h2 className='text-[30px] text-[#0B0B0B] font-Montserrat leading-[37px] uppercase'>Freelancer</h2>
                </div>
            </div>
            </main>
            <div className='absolute left-[880px] z-20 top-[-60px]'>
            <Image src={Jamil} alt="Jamil"/>
            </div>
        </motion.div>
    </motion.div>
  )
}

export default About