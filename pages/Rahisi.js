import React from 'react'
import Nav from '../components/Nav'
import SingleProject from '../components/SingleProject'
import RahisiHome from '../Assets/img/single/Rahisi.svg'
import RahisiFlow from '../Assets/img/flowcharts/RahisiFlow.png'

const Rahisi = () => {
  return (
    <div>
        <Nav/>
        <hr />
        <SingleProject
                title="Rahisi"
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
    </div>
  )
}

export default Rahisi