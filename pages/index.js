import Nav from "../components/Nav";
import Jamil1 from '../Assets/img/Jamil/Rectangle 38.svg'
import Jamil2 from '../Assets/img/Jamil/Rectangle 39.svg'
import mini1 from '../Assets/img/projects/Frame 12.svg'
import mini2 from '../Assets/img/projects/Frame 13.svg'
import mini3 from '../Assets/img/projects/Frame 14.svg'
import InnyBlog from '../Assets/img/projects/Landing Page.svg'
import SelfHelp from '../Assets/img/projects/Self-help.svg'
import Kechi from '../Assets/img/projects/Kechi.svg'
import Reef from '../Assets/img/projects/Reef.svg'
import ReefHomepage from '../Assets/img/projects/ReefHomepage.svg'
import Image from 'next/image'
import MiniProjectCard from "../components/MiniProjectCard";

export default function Home() {
  return (
    <div >
     <Nav/>
     {/* This is for the header name */}
     <hr />
     <div className="flex justify-center items-center w-[1500px] h-[300px]">
      <h1 className=" text-[190px] font-normal leading-[312px] mx-6 font-Cinzel ">JAMIL NATHAN</h1>
     </div>
     <hr />
{/* This is the header for portfolio */}
     <div className="flex justify-center items-center h-[285px]">
        <h1 className=" text-[190px] leading-[312px] font-Cinzel">* PORTFOLIO *</h1>
     </div>
     <hr />

    {/* This is the about section */}
    <section>
      <main className="flex gap-[300px] ml-9 mt-24">

        <h3 className="text-[#0B0B0B] text-[24px] leading-[29px] font-Montserrat">/ABOUT</h3>
        <div>

          <h2 className="w-[1000px] h-[326px] text-[45px] text-[#0B0B0B] leading-[59px] font-Montserrat font-medium">SELF-MOTIVATED DESIGNER WITH WILD INTEREST IN CREATING BEAUTIFUL, MEANINGFUL SEAMLESS DIGITAL EXPERIENCES.</h2>
          <h2 className="w-[1000px] h-[354px] text-[45px] text-[#0B0B0B] leading-[59px] font-medium font-Montserrat">NOT ONLY DO I BELIEVE USER PAIN POINTS CAN BE ADDRESSED BY THOROUGH RESEARCH AND DESIGN. I ALSO BELIEVE THAT IT CAN MAKE THE DIFFERENCE BETWEEN SUCCESS AND FALIURE OF A PRODUCT.</h2>

          <div className="flex gap-[10px]">
            <Image src={Jamil1} width={521} height={743} alt="Image of Jamil"   />
            <Image src={Jamil2} width={521} height={743} alt="Image of Jamil" />
          </div>

      <main>
          <p className="w-[521px] h-[116px] text-[#2D2D2D] text-2xl font-Montserrat leading-[29px]">I am a UI/UX designer with 2 years of experience in the design industry. I have designed projects on user needs and accessibility.</p>

          <p className="w-[521px] h-[174px] mt-[80px] float-right text-[#2D2D2D] text-2xl font-Montserrat leading-[29px]">i have always channeled my designs towards creating a user friendly product. I believe equity is achievable in design and that one of the primary ways is by having seamless experiences and information accessible to all users.</p>
          
          <p className="w-[521px] h-[87px] mt-[80px] float-left mb-[100px] text-[#2D2D2D] text-2xl font-Montserrat leading-[29px]">My experience in the industry has made me understand how collaboration and teamwork can make a product a success.</p>
        </main>

        </div>
      </main>
      <hr />
    </section>
    
    {/* Skillsets section */}
    <section>
      <main className="mt-[97px] mb-24 flex gap-36 ml-9">
        <h3 className="text-[#0B0B0B] text-[24px] leading-[29px] font-Montserrat">/SKILLSETS</h3>

        <div className="w-[1200px]  h-[852px] mr-32 ">
            <h1 className=" text-5xl text-[#0B0B0B] font-Cinzel font-normal leading-[65px] text-center mb-[82px]
            pr-80">Figma</h1>
            <h1 className=" text-5xl text-[#0B0B0B] font-normal font-Cinzel leading-[65px] text-right mb-[133px]
            pr-52">Adobe XD</h1>
            <h1 className="text-5xl text-[#0B0B0B] font-normal font-Cinzel leading-[65px] text-left mb-[162px]">Adobe Photoshop</h1>
            <p className=" text-5xl text-[#0B0B0B] font-normal font-Cinzel leading-[65px] text-right mb-[150px] pr-44">Adobe Illustrator</p>
            <h1 className="text-5xl text-[#0B0B0B] font-normal font-Cinzel leading-[65px] text-left pl-20">Studio</h1>

        </div>
      </main>
      <hr />
    </section>

    {/*Recent projects section  */}
    <section>
      <main className="flex mt-[97px] h-[1350px] ml-9 mr-32 relative">
      <h3 className="w-[244px] h-[29px]text-[#0B0B0B] text-[24px] leading-[29px] font-medium">/RECENT PROJECTS</h3>
    {/* Display projects container */}
      <div className="relative">
        
        <div >
        <MiniProjectCard img={mini3} myText='Rahisi Travel App Case Study'/>
        </div>
        <div className=" absolute top-[210px] left-[550px]">
        <MiniProjectCard img={mini1} myText='Loho: Defining a new for customized wears.'/>
        </div>
        <div className="absolute top-[700px]">
        <MiniProjectCard img={mini2} myText='Shoes & Shoes E-commerce Website Case Study.'/>
        </div>

      </div>
      </main>
      <hr />
    </section>
   
   {/* Other projects section */}
   <section>
    <main className=" ml-9 mt-[89px]">
      <div className="flex justify-between items-center">
        <h3 className="w-[244px] h-[29px]text-[#0B0B0B] text-[24px] leading-[29px] font-medium">/Other projects</h3>
        <h3 className="w-[179px] h-[54px] text-[#0B0B0B] text-[40px] leading-[54px] font-normal underline underline-offset-8 font-Cinzel mr-20">View all</h3>
      </div>

        <div className="flex justify-between ml-[30px] mt-[64px]">
          <div>
          <h1 className="text-[#171717] text-[48px] leading-[65px] font-normal w-[513px] h-[65px] font-Cinzel">Innysblog</h1>
          <Image src={InnyBlog} width={700} height={1763} alt="Image of Jamil"   />
          </div>

          <div>
          <h1 className="text-[#171717] text-[48px] leading-[65px] font-normal  w-[300px] h-[65px] font-Cinzel ">Self Help</h1>
          <Image src={SelfHelp} width={700} height={1410} alt="Image of Jamil"   />
          </div>
        </div>


        <div className="flex  ml-[10px] mt-[64px]">
          <div className="mr-[500px]">
          <h1 className="text-[#171717] text-[48px] leading-[65px] font-normal w-[513px] h-[65px] mb-14 font-Cinzel ">Kechi’s</h1>
          <Image src={Kechi} width={750} height={2483} alt="Image of Jamil"   />
          </div>

          <div className="flex flex-col w-[1200px]  ">
          <h1 className="text-[#171717] text-[48px] leading-[65px] font-normal text-center w-[200px] h-[65px] mb-14 font-Cinzel ">Reef</h1>
          <div className="mb-8">
            <Image src={Reef} width={393} height={651} alt="Image of Jamil"   />
            </div>
            <div>
          <Image src={ReefHomepage} width={393} height={650} alt="Image of Jamil"   />
          </div>
          </div>
        </div>
    </main>
    <hr />
   </section>

   {/* Skillset section */}
   <section>
    <main className="flex ml-9 mr-9 mt-24  h-[440px] justify-evenly  items-start">
    <h3 className="w-[244px] h-[29px] pt-6 text-[#0B0B0B] text-[24px] mr-28 leading-[29px] font-medium font-Montserrat">/SKILLSETS</h3>
    <div className="flex gap-40 items-center " >
      <h1 className="w-[730px] h-[225px] text-[40px] text-left text-[#0B0B0B] leading-[75px] font-medium font-Montserrat">ELITE ENTREPRENEURS NETWORK, LUSTRE MEDIA CONGLOMERATE, MYLLASH MEDIA</h1>
      <div className=" h-[190px] space-y-14">
          <p className="text-[20px] text-[#0B0B0B] text-right leading-[29px] font-medium font-Montserrat">2021 - 2022</p>
          <p className="text-[20px] text-[#0B0B0B] text-right leading-[29px] font-medium font-Montserrat">2021 - 2022</p>
          <p className="text-[20px] text-[#0B0B0B] text-right leading-[29px] font-medium font-Montserrat">2021 - PRESENT</p>
      </div>
    </div>
    </main>
    <hr />
   </section>

    {/* Contact me section */}
    <section>
      <main className="flex gap-32 items-center h-[20px] ml-9 mb-60 mt-[97px]">
      <h3 className="w-[244px] h-[29px]text-[#0B0B0B] text-[24px] leading-[29px] font-medium font-Montserrat">/CONTACT ME</h3>
      <h1 className="text-[48px] text-[#0B0B0B] leading-[75px] font-medium w-[1047px] h-[75px] font-Montserrat ">NATHANUMARJAMIL@GMAIL.COM</h1>
      </main>
      <hr />
      <div className="h-[150px]">
        <hr />
      </div>
      <div className="mb-[129px]">
        <hr />
      </div>
    </section>

    

    </div>
  )
}
