import React from 'react'
import Nav from '../components/Nav'
import SingleProject from '../components/SingleProject'
import RahisiHome from '../Assets/img/single/Rahisi.svg'
import RahisiFlow from '../Assets/img/flowcharts/RahisiFlow.png'
import Low1 from '../Assets/img/wireframes/Homepage.png'
import Low2 from '../Assets/img/wireframes/Current Flight.png'
import Mid1 from '../Assets/img/wireframes/mid-wireframe/HomepageRahisi.png'
import Mid2 from '../Assets/img/wireframes/mid-wireframe/BookingRahisi.png'
import Mid3 from '../Assets/img/wireframes/mid-wireframe/Flight DetailsRahisi.png'
import Mid4 from '../Assets/img/wireframes/mid-wireframe/AcommodationRahisi.png'
import Mid5 from '../Assets/img/wireframes/mid-wireframe/Available FlightsRahisi.png'
import Mid6 from '../Assets/img/wireframes/mid-wireframe/BookmarksRahisi.png'
import Mid7 from '../Assets/img/wireframes/mid-wireframe/ProfileRahisi.png'
import HomepageRahisi from '../Assets/img/single/HomepageRahisi.png'
import FlightDetails from '../Assets/img/single/Flight DetailsRahisi.png'
import Profile from '../Assets/img/single/ProfileRahisi.png'
import Accoms from '../Assets/img/single/AcommodationRahisi.png'
import Booking from '../Assets/img/single/BookingRahisi.png'
import Saved from '../Assets/img/single/BookmarksRahisi.png'
import {motion} from 'framer-motion'







import Image from 'next/image'
import Solution1 from '../components/Solution1'
import SolutionSect from '../components/SolutionSect'
import SmallNav from '../components/SmallNav'
import Link from 'next/link'

const Rahisi = () => {
  return (
    <motion.div
    exit={{
      opacity: 0
    }}
    >
        <SmallNav route='/#projects' />
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
                title="Rahisi"
                route="https://www.behance.net/gallery/145276235/Rahisi-Travel-App"
                img={RahisiHome} marginPro="mt-0" 
                problem1="Designing the an air travel app for mobile as a case study for prototyping"
                // problem2=""
                project1="Create a mobile app that aims at making air travel easier."
                project2="Propose a user journey that allows an person navigate the app seamlessly with little or no help and hightens the desire to travel." 
                project3="The app needs to be easy to use and engaging."
                outcome="A functional app that complies with UX methodologies, achieves desired outcome. A digital space that breaks down information into a digestible form."
                marginBottomPro='mb-0'
                summary="An air travel service platform for mobile in order to test out prototyping."
                projectDur="3 weeks"
                gapPro="gap-24"
                widthPro="w-[700px]"
                flowChart={RahisiFlow}
        />
        
          {/*Low fidelity Wireframes  */}
          <section className='mt-[100px]'>
          <main className='mx-[60px] '>
          <h1 className='text-[48px] text-[#2D2D2D] leading-[59px] font-medium font-Montserrat mb-[30px]'>WIREFRAMES</h1>
          <h2 className='text-[#0B0B0B] text-[28px] leading-[37px] font-Montserrat font-medium'>LOW FIDELITY WIREFRAME</h2>

          <div className='flex justify-center gap-32 items-center mt-[100px]'>
            <Image src={Low1} width={375} height={812}/>
            <Image src={Low2} width={375} height={812}/>
          </div>
          </main>
          </section>

          {/* Mid fidelity section */}
          <section className='mt-24'>
          <main className='mx-[60px] '>
          <h1 className='text-[48px] text-[#2D2D2D] leading-[59px] font-medium font-Montserrat mb-[30px]'>MID FIDELITYWIREFRAME</h1>
          <p className='text-[#0B0B0B] text-[23px] leading-[29px]  font-light'>During the mid-fidelity wireframe stage, I made slight changes to the initial designs.</p>

          <div className='flex flex-wrap mt-20  gap-20'>
            <Image src={Mid1} width={375} height={812}/>
            <Image src={Mid2} width={375} height={812}/>
            <Image src={Mid3} width={375} height={812}/>
            <Image src={Mid4} width={375} height={812}/>
            <Image src={Mid5} width={375} height={812}/>
            <Image src={Mid6} width={375} height={812}/>
            <div className='pl-[460px]'>
              <Image src={Mid7} width={375} height={812}/>
            </div>
          </div>
          </main>
          </section>



        {/* Solution section */}
        <SolutionSect 
        img1={HomepageRahisi}
        img2={ FlightDetails }
        imgWidth='461'
        imgHeight='1003' 
        paddingTop='pt-32'
        text1='The home screen immediately requests for your departure and arrival airport to get you started with your flight, most popular destinations. Users have access to a search bar also at top of the screen as well as the user profile.'
        text2='The tflightbdetail screen displays a clear photo of the destination, flight prices, airlines, available accomodations on arrival and any other important information. The buttom half of the screen holds the button to book the flight.'
        header="FLIGHT DETAILS"
        />
        <Solution1 
        img1={Profile}
        img2={Accoms}
        imgWidth='461'
        imgHeight='1003' 
        header1="PROFILE" 
        header2="ACCOMODATION" 
        text1="This screen has every information the user would need to know about their user profile such as their identification number and travel miles. This page contains a button to allow you share your miles with other users."
        text2="This screen contains various accomodatios available on arrival. This is categoriesed into “cheap”, “Average” and “Luxury”"
        />
        <Solution1 
         img1={Booking}
         img2={Saved}
         imgWidth='461'
         imgHeight='1003' 
        header1='BOOKING'
        header2='SAVED'
        text1='A continuation from the home screen. This page allows the user input information to help the app search for the most favourable flight.'
        text2='This page contains all saved flights and accomodations so that the user can eaily access them later.'
        />

        {/* Reflection section */}
      <section className='mt-[100px] mx-[60px] mb-[100px] '>
        <div>
          <h1 className='text-[#0B0B0B] text-[48px] font-Montserrat font-medium leading-[59px] mb-[30px]'>REFLECTION</h1>
          <p className='text-2xl text-[#2D2D2D] font-light'>This app took me on a journey and taught me a lot of lessons. There were multiple iterations and changes made until I was happy with the final result, because of the changes there was a delay with completing the app.
          </p>
          <br />
          <p className='text-2xl text-[#2D2D2D] font-light'>A major lesson I learnt is: to take things one step at a time without getting carried away.</p>
          <br />
          <p className='text-2xl text-[#2D2D2D] font-light'>A major lesson I learnt is: practice helps with perfecting a task.</p>
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

export default Rahisi