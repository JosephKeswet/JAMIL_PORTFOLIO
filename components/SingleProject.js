import Image from 'next/image'
import React from 'react'
import LohoFlow from '../Assets/img/flowcharts/LohoFlow.svg'
import LohoWire1 from '../Assets/img/wireframes/LohoWire1.svg'

const SingleProject = ({title,summary,img,marginPro,marginBottomPro,problem1,problem2,project1,project2,project3,outcome, projectDur,gapPro,widthPro,flowChart}) => {
  return (
    <div className='mx-[60px]'>
        <main >
            {/* Summary sectiom */}
            <section className='w-[800px] pl-9 h-[503px] '>
                <h1 className='text-[#000000] text-[90px] font-normal leading-[121px] font-Cinzel pb-11 '>{title}</h1>
                <div className='mb-[40px]'>
                    <h2 className='text-[48px] text-[#2D2D2D] leading-[59px] font-medium mb-[15px] font-Montserrat '>SUMMARY</h2>
                    <p className='text-[24px] text-[#2D2D2D] leading-[29px] font-light font-Montserrat'>{summary}</p>
                </div>

                <div className='space-y-[15px]'>
                    <h3 className='text-[30px] text-[#000000] font-medium leading-[37px] font-Montserrat'>PROJECT DURATION:<span className='text-[#2D2D2D] text-[24px] font-light leading-[29px] pl-5 font-Montserrat'>{projectDur}</span></h3>
                    <h3 className='text-[30px] text-[#000000] font-medium leading-[37px] font-Montserrat'>ROLE:<span className='text-[#2D2D2D] text-[24px] font-light leading-[29px] pl-5 font-Montserrat'>Product designer, UI designer, UX designer</span> </h3>
                    <h3 className='text-[30px] text-[#000000] font-medium leading-[37px] font-Montserrat'>TOOL:<span className='text-[#2D2D2D] text-[24px] font-light leading-[29px] pl-5 font-Montserrat'>Figma, FigJam</span></h3>
                </div>
            </section>

            {/* Test prototype section */}
            <section className={`flex  w-[1400px] ${gapPro}  mb-20  h-[1000px]`}>
                <div>
                    <Image src={img} width={463} height={1002} alt="Loho Homepage"   />
                </div>

                <div className={`w-[500px] h-[905px] ${marginPro}`}>
                    <h1 className='mt-[30px] text-[#000000] text-[48px] leading-[59px] font-medium underline underline-offset-[12px] font-Montserrat'>TEST PROTOTYPE</h1>

                    <div className={`${widthPro} mt-[49px] h-[225px] ${marginBottomPro}`}>
                        <h1 className='text-[#000000] text-[30px] leading-[37px] font-medium mb-[14px] font-Montserrat '>PROBLEM</h1>
                        <div className='h-[174px]'>
                            <p className='text-[#2D2D2D] text-[23px] leading-[29px] font-light '>{problem1}</p>
                            <br />
                            <p className='text-[#2D2D2D] text-[23px] leading-[29px] font-light'>{problem2}</p>
                        </div>
                    </div>

                    <div className={`${widthPro} h-[312px] ${marginBottomPro}`}>
                        <h1 className='text-[#000000] text-[30px] leading-[37px] font-medium font-Montserrat mb-[14px] '>PROJECT BRIEF</h1>
                        <div className='h-[261px]'>
                            <p className='text-[#2D2D2D] text-[23px] leading-[29px] font-light'>{project1}</p>
                            <br />
                            <p className='text-[#2D2D2D] text-[23px] leading-[29px] font-light'>{project2}</p>
                            <br />
                            <p className='text-[#2D2D2D] text-[23px] leading-[29px] font-light'>{project3}</p>
                        </div>
                    </div>

                    <div className={`${widthPro} h-[138px]`}>
                        <h1 className='text-[#000000] text-[30px] leading-[37px] font-medium mb-[14px] font-Montserrat '>OUTCOME</h1>
                        <div className='h-[87px]'>
                            <p className='text-[#2D2D2D] text-[23px] leading-[29px] font-light'>{outcome}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Ideation section */}
            <section className=' h-[1094px]'>
                <div className=' h-[370px]'>
                    <h1 className='text-[#2D2D2D] text-[48px] font-medium leading-[59px] mb-[30px] font-Montserrat'>IDEATION</h1>
                    <h3 className='text-[30px] text-[#2D2D2D] leading-[37px] font-medium mb-[15px] font-Montserrat'>USER JOURNEY/ FLOWCHART</h3>
                    <p className='text-[24px] text-[#2D2D2D] leading-[29px] font-light'>As the next step I decided to outline the structure and map out the user journey of the app.</p>
                </div>
                <div>
                    <Image src={flowChart} width={1603} height={924} alt=" FlowChart"   />
                </div>
            </section>

         
            
        </main>
    </div>
  )
}

export default SingleProject