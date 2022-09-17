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
import Nav from '../components/Nav'
import SolutionSect from '../components/SolutionSect'
import Solution1 from '../components/Solution1'

const Shoes = () => {
  return (
    <div>
        <Nav/>
        <hr />
        <SingleProject 
        title="Shoes & Shoes"
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


        {/* Solution section */}
        <SolutionSect 
        img1={Shoe}
        img2={ShoePage}
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
        <h1 className='text-[#0B0B0B] text-[30px] leading-[37px] font-Montserrat font-medium underline underline-offset-2'>VIEW OTHER PROJECTS</h1>
      </div>
      

    </div>
  )
}

export default Shoes