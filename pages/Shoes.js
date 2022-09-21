import React from 'react'
import SingleProject from '../components/SingleProject'
import Shoe from '../Assets/img/single/Shoes.svg'
import ShoePage from '../Assets/img/single/ShoePage.png'
import ShoeCart from '../Assets/img/single/ShoeCart.png'
import ShoeSignUp from '../Assets/img/single/ShoeSignUp.png'
import TopDeals from '../Assets/img/single/TopDeals.png'
import Login from '../Assets/img/single/Login.png'
import ShoeFlow from '../Assets/img/flowcharts/ShoeFlow.png'
import ShoeWire1 from '../Assets/img/wireframes/ShoeWire1.svg'
import Shoe1 from '../Assets/img/wireframes/Home3.png'
import Shoe2 from '../Assets/img/wireframes/Item 2.png'
import Shoe3 from '../Assets/img/wireframes/Your Cart 1.png'
import Shoe4 from '../Assets/img/wireframes/Item 3.png'
import Shoe5 from '../Assets/img/wireframes/Account 1.png'
import Shoe6 from '../Assets/img/wireframes/Home 4.png'
import Shoe7 from '../Assets/img/wireframes/Home 5.png'
import Shoe8 from '../Assets/img/wireframes/Home 6.png'



import Nav from '../components/Nav'
import SolutionSect from '../components/SolutionSect'
import Solution1 from '../components/Solution1'
import Image from 'next/image'
import SmallNav from '../components/SmallNav'
import {motion} from 'framer-motion'
import Link from 'next/link'


const Shoes = () => {
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
        title="Shoes & Shoes"
        route="https://www.behance.net/gallery/145354221/Shoes-Shoes-Desktop-Site"
        img={Shoe} marginPro="mt-24" 
        problem1="Designing the an e-commerce platform for desktop as a case study for desktop site layouts."
        // problem2=""
        project1="Create a desktop e-commerce site where users can purchase."
        project2="Propose a user journey that allows a user navigate the website seamlessly with little or no help and persuades one to patronize the e-commerce store more." 
        project3="The website needs to be easy to use and engaging."
        outcome="A functional website that complies with UX methodologies, blends with current tech and is extensible for added features. A digital space that breaks down information into a digestible form."
        marginBottomPro='mb-0'
        summary="An e-commerce app for shoes that aims to provide flawless and exciting purchase for shoes with a minimalist and user friendly user interface."
        projectDur="5 weeks"
        flowChart={ShoeFlow}
        gapPro="gap-[50px]"
        widthPro="w-[800px]"
        wire1={ShoeWire1}
        wireWidth="436"
        wireHeight="262"
        />

        {/* Wireframe section should go here */}
        <section>
        <main className='mx-[60px] '>
          <h1 className='text-[48px] text-[#2D2D2D] leading-[59px] font-medium font-Montserrat mb-[100px]'>WIREFRAMES</h1>
          <div className='flex flex-wrap gap-10'>
          <Image src={Shoe1} width={420} height={300} alt="Shoe wireframe "   />
          <Image src={Shoe2} width={420} height={300} alt="Shoe wireframe "   />
          <Image src={Shoe3} width={420} height={300} alt="Shoe wireframe "   />
          <Image src={Shoe4} width={420} height={300} alt="Shoe wireframe "   />
          <Image src={Shoe5} width={420} height={300} alt="Shoe wireframe "   />
          <Image src={Shoe6} width={420} height={300} alt="Shoe wireframe "   />
          </div>
          <div className='flex justify-center gap-10 mt-10'>
          <Image src={Shoe7} width={420} height={300} alt="Shoe wireframe "   />
          <Image src={Shoe8} width={420} height={300} alt="Shoe wireframe "   />
          </div>

          </main>
        </section>


        {/* Solution section */}
        <SolutionSect 
        img1={Shoe}
        img2={ShoePage}
        imgWidth='461'
        imgHeight='812' 
        paddingTop='pt-32'
        text1='The home screen displays the best deals and categories which allows the user to access a variety of shoes. Users have access to a search bar also at top of the screen.'
        text2='The shoe screen displays a clear photos of the shoe, their name, type, and their rating. The number of shoes left in stock is shown alongside its price and buttons to allow the user to make a selection from. Lastly, the screen provides other suggestions similar to the shoe on display.'
        header="SHOE PAGE"
        />
        <Solution1 
        img1={ShoeCart}
        img2={TopDeals}
        imgWidth='700'
        imgHeight='550' 
        header1="CART" 
        header2="TOP DEALS" 
        text1="This screen has every information about the persons possible purchase. This page includes the total price of all items in the cart and the number of items."
        text2="This screen opens up from the home page containing the full catalogue of the best deals in the store."
        />
        <Solution1 
         img1={ShoeSignUp}
         img2={Login}
         imgWidth='700'
         imgHeight='550' 
        header1='UNBOARDING PAGES'
        // header2='CHATS'
        text1='These pages contain the sign up and login pages for proper record keeping of the users purchases to aid tracking of purchased shoes and seemless delivery.'
        // text2='The chat screen allows the user to communicate with tailors and also keep track or make changes to their orders directly.'
        />

        {/* Reflection section */}
      <section className='mt-[100px] mx-[60px] mb-[100px]'>
        <div>
          <h1 className='text-[#0B0B0B] text-[48px] font-Montserrat font-medium leading-[59px] mb-[30px]'>REFLECTION</h1>
          <p className='text-2xl text-[#2D2D2D] font-light'>This app took me on a journey and taught me a lot of lessons. There were multiple iterations and changes made until I was happy with the final result</p>
          <br />
          <p className='text-2xl text-[#2D2D2D] font-light'>A major lesson I learnt is: to take things one step at a time without getting carried away.</p>
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

export default Shoes