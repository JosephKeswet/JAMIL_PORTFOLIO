import React from 'react'
import Nav from '../components/Nav'
import SingleProject from '../components/SingleProject'
import Loho from '../Assets/img/single/Loho.svg'
import LohoFlow from '../Assets/img/flowcharts/LohoFlow.svg'


const Project = () => {
  return (
    <div>
        <Nav/>
        <hr />
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
    </div>
  )
}

export default Project