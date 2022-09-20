import React from 'react'
import Nav from '../components/Nav'
import SingleProject from '../components/SingleProject'
import Loho from '../Assets/img/single/Loho.svg'
import LohoFlow from '../Assets/img/flowcharts/LohoFlow.svg'
import LohoWire1 from '../Assets/img/wireframes/LohoWire1.svg'
import PopularWire from '../Assets/img/wireframes/Popular fits.png'
import NativeWire from '../Assets/img/wireframes/Native.png'
import TailorWire from '../Assets/img/wireframes/Tailor (1).png'
import OrdersWire from '../Assets/img/wireframes/Current orders.png'
import SearchWire from '../Assets/img/wireframes/Image search.png'
import ProfileWire from '../Assets/img/wireframes/Profile.png'
import ChatsWire from '../Assets/img/wireframes/Chats.png'
import Tailor from '../Assets/img/projects/Tailor (1).png'
import Native from '../Assets/img/projects/Native.png'
import Popular from '../Assets/img/projects/Popular fits (1).png'
import Orders from '../Assets/img/projects/Current orders (1).png'
import Search from '../Assets/img/projects/Image search (1).png'
import Profile from '../Assets/img/projects/Profile (1).png'
import Chats from '../Assets/img/projects/Chats (1).png'
import HomePage from '../Assets/img/projects/Homepage (2).png'
import Image from 'next/image'
import SolutionSect from '../components/SolutionSect'
import Solution1 from '../components/Solution1'
import SmallNav from '../components/SmallNav'
import {motion} from 'framer-motion'
import Link from 'next/link'


const Project = () => {
  return (
    <motion.div
    exit={{
      opacity: 0
    }}
    >
        <SmallNav route='/#projects'/>
        <hr />
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
          className="mt-[150px] overflow-hidden"
        >
        <SingleProject 
        title="Loho"
        img={Loho} marginPro='mt-12' problem1="People experience many issues with tailors ranging from having missing fabric to late delivery and the likes, therefore people need a way to ensure they get flawless services from tailors." problem2="For individuals that have experienced issues with their tailors  and require an app that serves as an assurance for flawless service delivery." 
        project1='Create an app that aims to eliminate poor service associated with tailors and allows tailors to reach out to more clients.'
        project2='Propose a user journey that allows a user navigate the app seamlessly with little or no help and persuades one to patronize more than usual the tailors in their local community.'
        project3='The app needs to be easy to use and engaging; think about hardware-enabled features like image capturing.'
        outcome='A functional app that complies with UX methodologies, blends with current tech and is extensible for added features. A digital space that breaks down information into a digestible form and merges information from existing platforms.'
        marginBottomPro="mb-[30px]"
        summary="An app that aims to help eliminate problems associated with late delivery and lack of effectiveness by tailors with a user friendly experience"
        projectDur="3 weeks"
        projectTool= "Figma, FigJam"
        gapPro="gap-[60px]"
        widthPro="w-[850px]"
        flowChart={LohoFlow}
        />

        <main className='mx-[60px]'>
          <h1 className='text-[48px] text-[#2D2D2D] leading-[59px] font-medium font-Montserrat mb-[100px]'>WIREFRAMES</h1>
          <div className='flex flex-wrap gap-20 w-[1400px]'>
          <Image src={LohoWire1} width={375} height={812} alt="Loho wireframe "   />
          <Image src={TailorWire} width={375} height={812} alt="Loho wireframe "   />
          <Image src={NativeWire} width={375} height={812} alt="Loho wireframe "   />
          <Image src={PopularWire} width={375} height={812} alt="Loho wireframe "   />
          <Image src={OrdersWire} width={375} height={812} alt="Loho wireframe "   />
          <Image src={SearchWire} width={375} height={812} alt="Loho wireframe "   />
          </div>
          <div className='flex justify-center gap-20 mt-20'>
          <Image src={ProfileWire} width={375} height={812} alt="Loho wireframe "   />
          <Image src={ChatsWire} width={375} height={812} alt="Loho wireframe "   />
          </div>
        </main>

        <SolutionSect 
        img1={HomePage}
        img2={Tailor}
        imgWidth='461'
        imgHeight='812' 
        paddingTop='pt-32'
        text1='The home screen displays the most popular tailors, most popular fits, and categories which allows the user to access a variety of styles. Users have access to a search bar also at top of the screen.'
        text2='The tailor’s profile screen displays a clear photo of the tailor, their bio and their rating at the top half of the screen. At the buttom half of the screen, the tailors most popular fits are shown alongside their catalogue for the user to make a selection from. Lastly, the screen provides a chat buttton for easy communication with the tailor.'
        header="TAILOR'S PROFILE"
        />
        <Solution1 
        img1={Native}
        img2={Popular}
        imgWidth='461'
        imgHeight='812'
        header1="FITS INFORMATION" 
        header2="POPULAR FITS" 
        text1="This screen has every information the user would need to know about the fit or style before the user order, starting from the image at the top half.  This screen includes suggestions of similar style."
        text2="This screen opens up from the home page containing the full catalogue of popular fits and styles."
        />
        <Solution1
        img1={Orders}
        img2={Search}
        imgWidth='461'
        imgHeight='812'
        header1='RUNNING ORDER'
        header2='IMAGE SEARCH'
        text1='The running order screen contains the basic information of each order the user has placed. Each card contains the image of the style, a brief description of the style, the duration of running order and the tailor woring on the order.'
        text2='The image search screen is a unique feature of the app. This screen contains the option for the user to either attach or take an image of what ever style or fit they would like made for them. This is matched with the tailor that best suites the style.'
        />
        <Solution1 
        img1={Profile}
        img2={Chats}
        imgWidth='461'
        imgHeight='812'
        header1='PROFILE'
        header2='CHATS'
        text1='Like most apps, the profile screen is quite important. This contains the basic details of the user including the user’s identification number. This page also contains access to settings for te app.'
        text2='The chat screen allows the user to communicate with tailors and also keep track or make changes to their orders directly.'
        />

      {/* Reflection section */}
      <section className='mt-[100px] mx-[60px] mb-[100px]'>
        <div>
          <h1 className='text-[#0B0B0B] text-[48px] font-Montserrat font-medium leading-[59px] mb-[30px]'>REFLECTION</h1>
          <p className='text-2xl text-[#2D2D2D] font-light'>This app took me on a journey and taught me a lot of lessons. There were multiple iterations and changes made until I was happy with the final result, because of the changes there was a delay with completing the app.</p>
          <br />
          <p className='text-2xl text-[#2D2D2D] font-light'>A major lesson I learnt is: not to be too critical of my own ideas and work and having a fresh perspective and feedback is very important.</p>
          <br />
          <p className='text-2xl text-[#2D2D2D] font-light'>One thing I wish I was able to do during this process was conduct some user testing with potential users of the app to get their perspective and thoughts on the features.</p>
        </div>
      </section>
    {/*Links to other projects  */}
      <div className='flex justify-center items-center h-[187px] mb-36'>
      <Link href='/#otherprojects'>
        <h1 className='text-[#0B0B0B] text-[30px] leading-[37px] font-Montserrat font-medium underline underline-offset-2 cursor-pointer'>VIEW OTHER PROJECTS</h1>
        </Link>
      </div>
     


    </motion.div>

    </motion.div>
  )
}

export default Project