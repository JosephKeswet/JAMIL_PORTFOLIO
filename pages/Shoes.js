import React from 'react'
import SingleProject from '../components/SingleProject'
import Shoe from '../Assets/img/single/Shoes.svg'
import ShoeFlow from '../Assets/img/flowcharts/ShoeFlow.png'
import ShoeWire1 from '../Assets/img/wireframes/ShoeWire1.svg'
import Nav from '../components/Nav'

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
    </div>
  )
}

export default Shoes