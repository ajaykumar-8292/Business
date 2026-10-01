import services from "../assets/services.jpg";






function Services() {
  
  return(
    <main>
      <div className="flex flex-col md:flex-row ">
         {/* Left Container */}
  <div className="w-1/2 bg-gray-800 p-5 pb-10  w-full md:w-1/2 ">
    <h1 className="text-6xl font-bold text-white  md:pl-40 pt-10 font-sans md:text-5xl text-left  ">We engineer the <br className="hidden md:block" /> <span className="text-[rgb(228,164,91)]"> Software</span> your  business runs on.</h1>
    <p className="text-white text-2xl text-left  md:pl-40 pt-20 font-sans pb-10 md:pt-10">Webnest  Solutions Pvt Ltd is a product engineering studio in New Jaganpura, Patna. We design, build and maintain web platforms, business software and mobile apps for companies that need software to hold up under real use.</p>
    <div className="md:flex-row     ">
    <button className=" text-1xl  font-bold bg-red-500 rounded-4xl ml-25 md:ml-40  gap-10 text-white  ">Book a Discovery Call</button>
    <button className="w- ml-25 mt-10 md:ml-30 text-white border-border-medium font-bold text-1xl">See our work</button>
  </div>
  </div>

  {/* Right Container */}
  <div className=" bg-gray-800 pr-5 pt-5 pl-5 w-full md:w-1/2">
     <img className=" rounded-lg "   src={services} alt="services" />
     <div className=" absolute w-[290px] bg-gray-700 pt-2 pl-5 pb-2 rounded-lg shadow-[0_0_5px_rgba(255,255,255,0.5)] ml-5 top-280 md:top-115">
      <span className="text-green-500">Currently building</span>
      <p className="text-white">A GST-ready billing platform for a Bihar distribution network.</p>
     </div>
  </div>
        

      </div>

      <div className="bg-gray-800  pl-5 pr-5 md:pl-45 flex  gap-5 pb-15 pt-15">

  <div className="  h-30 pt-5 w-[200px]  shadow-[0_0_2px_rgba(255,255,255,0.5)]  rounded-2xl pl-2">
    <h2 class="stat-number">120+</h2>
      <p class="text-white">Projects delivered</p>
     
  </div>
  
  <div className="  h-30  pt-5  w-[200px]  shadow-[0_0_2px_rgba(255,255,255,0.5)]  rounded-2xl pl-2">
    <h2 class="stat-number">8 Yrs</h2>
      <p class="text-white">Engineering practice</p>
     
  </div>
  
  <div className="  h-30 pt-5 w-[200px]  shadow-[0_0_2px_rgba(255,255,255,0.5)]  rounded-2xl pl-2">
    <h2 class="stat-number">96%</h2>
      <p class="text-white">Client retention</p>
     
  </div>
  

  </div>

<div className="flex flex-col md:flex-row bg-gray-800 pl-5 md:pl-25">
  <div className="w-full md:w-1/2  pb-10 md:pl-20">
    <sapn className="text-[rgb(228,164,91)]  md:pl-2 font-bold  ">   WHAT WE DO</sapn>
    <h1 className="text-white text-5xl font-bold mt-5 md:mt-5 font-sans">Full-cycle engineering, one accountable team.</h1>
  </div>
  <div className="w-full md:w-1/2 md:pl-10 md:pt-20">
    <p className="text-white text-2x1   md:ml-40 pb-10 font-sans  pr-5 ">Strategy, design, development and long-term maintenance under one roof — so nothing gets lost between vendors.</p>
  </div> 
</div>
<hr className="text-white text-1x0" ></hr>
  
    
      
     <div className="w-full bg-gray-800 px-4 py-6 md:px-10 md:py-8 ">
      
      <div className="flex flex-col md:flex-row justify-between gap-10 md:pl-30">

        {/* Left Section */}
        <div className="flex items-center gap-6 pl-0 md:-20">

          {/* Icon Box */}
          <div className="w-12 h-12 flex items-center justify-center rounded-xl border border-gray-700 bg-[#111827] text-cyan-400">
            <span className="text-2xl">▱</span>
          </div>

          {/* Heading */}
          <h2 className="text-white text-2xl font-bold font-sans">
            Web Development
          </h2>

        </div>

        {/* Right Section */}
        <div className=" w-full md:w-[55%]">

          <p className="text-gray-400 text-xl md:text-2xl leading-7 font-sans">
            Marketing sites, portals and web apps built on React, Next.js
            and Laravel — fast, accessible and search-ready from day one.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-4">

            <span className="px-3 py-1 text-[10px] tracking-[2px] text-gray-300 border border-gray-700 rounded-full font-mono">
              RESPONSIVE FRONT-ENDS
            </span>

            <span className="px-3 py-1 text-[10px] tracking-[2px] text-gray-300 border border-gray-700 rounded-full font-mono">
              HEADLESS CMS
            </span>

            <span className="px-3 py-1 text-[10px] tracking-[2px] text-gray-300 border border-gray-700 rounded-full font-mono">
              CORE WEB VITALS TUNING
            </span>

          </div>

        </div>

      </div>
    </div>






    <hr className="text-white text-1x0" ></hr>



     <div className="w-full bg-gray-800 px-4 py-6 md:px-10 md:py-8">
      
      <div className="flex flex-col md:flex-row justify-between gap-10 md:pl-30">

        {/* Left Section */}
        <div className="flex items-center gap-6 pl-0 md:-20">

          {/* Icon Box */}
          <div className="w-12 h-12 flex items-center justify-center rounded-xl border border-gray-700 bg-[#111827] text-cyan-400">
            <span className="text-2xl">//</span>
          </div>

          {/* Heading */}
          <h2 className="text-white text-2xl font-bold font-sans">
            Custom Software
          </h2>

        </div>

        {/* Right Section */}
        <div className=" w-full md:w-[55%]">

          <p className="text-gray-400 text-xl md:text-2xl leading-7 font-sans">
            ERP, CRM, billing and inventory platforms shaped around how your team actually works, not around a template.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-4">

            <span className="px-3 py-1 text-[10px] tracking-[2px] text-gray-300 border border-gray-700 rounded-full font-mono">
              DOMAIN-DRIVE BUILDS
            </span>

            <span className="px-3 py-1 text-[10px] tracking-[2px] text-gray-300 border border-gray-700 rounded-full font-mono">
              ROLE-BASED ACCESS
            </span>

            <span className="px-3 py-1 text-[10px] tracking-[2px] text-gray-300 border border-gray-700 rounded-full font-mono">
              REPORTING DASHBOARD
            </span>

          </div>

        </div>

      </div>
    </div>
 


  
    </main>
  )
}

export default Services;