import Nav from "../components/Nav";
import Jamil1 from '../Assets/img/Jamil/Rectangle 38.svg'
import Jamil2 from '../Assets/img/Jamil/Rectangle 39.svg'
import mini1 from '../Assets/img/projects/Frame 12.svg'
import mini2 from '../Assets/img/projects/Frame 13.svg'
import mini3 from '../Assets/img/projects/Frame 14.svg'
import Image from 'next/image'
import MiniProjectCard from "../components/MiniProjectCard";

export default function Home() {
  return (
    <div >
     <Nav/>
     {/* This is for the header name */}
     <hr />
     <div className="flex justify-center items-center h-[300px]">
      <h1 className=" text-[200px] font-normal leading-[312px] mx-6-">JAMIL NATHAN</h1>
     </div>
     <hr />
{/* This is the header for portfolio */}
     <div className="flex justify-center items-center h-[285px]">
        <h1 className=" text-[200px] leading-[312px]">* PORTFOLIO *</h1>
     </div>
     <hr />

    {/* This is the about section */}
    <section>
      <main className="flex gap-[300px] ml-9 mt-24">

        <h3 className="text-[#0B0B0B] text-[24px] leading-[29px] font-medium">/ABOUT</h3>
        <div>

          <h2 className="w-[1000px] h-[326px] text-[45px] text-[#0B0B0B] leading-[59px] font-medium">SELF-MOTIVATED DESIGNER WITH WILD INTEREST IN CREATING BEAUTIFUL, MEANINGFUL SEAMLESS DIGITAL EXPERIENCES.</h2>
          <h2 className="w-[1000px] h-[354px] text-[45px] text-[#0B0B0B] leading-[59px] font-medium">NOT ONLY DO I BELIEVE USER PAIN POINTS CAN BE ADDRESSED BY THOROUGH RESEARCH AND DESIGN. I ALSO BELIEVE THAT IT CAN MAKE THE DIFFERENCE BETWEEN SUCCESS AND FALIURE OF A PRODUCT.</h2>

          <div className="flex gap-[10px]">
            <Image src={Jamil1} width={521} height={743} alt="Image of Jamil"   />
            <Image src={Jamil2} width={521} height={743} alt="Image of Jamil" />
          </div>

      <main>
          <p className="w-[521px] h-[116px] text-[#2D2D2D] text-2xl font-medium leading-[29px]">I am a UI/UX designer with 2 years of experience in the design industry. I have designed projects on user needs and accessibility.</p>

          <p className="w-[521px] h-[174px] mt-[80px] float-right text-[#2D2D2D] text-2xl font-medium leading-[29px]">i have always channeled my designs towards creating a user friendly product. I believe equity is achievable in design and that one of the primary ways is by having seamless experiences and information accessible to all users.</p>
          
          <p className="w-[521px] h-[87px] mt-[80px] float-left mb-[100px] text-[#2D2D2D] text-2xl font-medium leading-[29px]">My experience in the industry has made me understand how collaboration and teamwork can make a product a success.</p>
        </main>

        </div>
      </main>
      <hr />
    </section>
    
    {/* Skillsets section */}
    <section>
      <main className="mt-[97px] flex gap-[369px] ml-9">
        <h3 className="text-[#0B0B0B] text-[24px] leading-[29px] font-medium">/SKILLSETS</h3>

        <div className="w-[928px]  h-[852px] ">
            <h1 className="w-[150px] h-[65px] text-5xl text-[#0B0B0B] font-normal leading-[65px] mb-[82px] pl-[300px]">Figma</h1>
            <h1 className="w-[244px] h-[65px] text-5xl text-[#0B0B0B] font-normal leading-[65px] float-right ">Adobe XD</h1>
            <h1 className="w-[455px] h-[65px] text-5xl text-[#0B0B0B] font-normal leading-[65px] float-left mt-[129px]">Adobe Photoshop</h1>
            <p className="w-[473px] h-[65px] text-5xl text-[#0B0B0B] font-normal leading-[65px] float-right pt-[250px]">Adobe Illustrator</p>
            <h1 className="w-[173px] h-[65px] text-5xl text-[#0B0B0B] font-normal leading-[65px] float-left pt-[250px]
            ">Studio</h1>

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
    <h1>Hey</h1>

    

    </div>
  )
}
