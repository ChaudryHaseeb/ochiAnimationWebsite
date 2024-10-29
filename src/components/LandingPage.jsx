import React from 'react'
import { HiArrowUpRight } from "react-icons/hi2";
import { BsEmojiHeartEyes } from "react-icons/bs";
import { motion } from 'framer-motion';

function LandingPage() {
  
<React/>
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-screen bg-zinc-950 pt-1'>
        <div className="fontDisplay font-[Courier-New] mt-36 px-12">
            {["We create","eye-opening","presentations"].map((item,index)=>{
                return  <div key={index} className="masker">
                  <div className='w-fit flex overflow-hidden'>
                    {
                      index == 1 && (<motion.div initial={{width:0}} animate={{width:'8vw'}} transition={{ease:[0.68, -0.6, 0.32, 1.6], duration:'1'}} className='w-[8vw] h-[5vw] flex justify-center items-center relative rounded-lg -top-[-0.79vw] bg-pink-700 mr-4'><BsEmojiHeartEyes size={50}/> </motion.div>)
                    }
                <h1 className='uppercase leading-[15vh] tracking-tighter font-bold text-[7.5vw]'>{item}</h1>
                </div>
                </div>
            })}
        </div>
        <div className="border-t-[2px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-10">
           {["For public and private companies","From the first pitch to IPO"].map((item,index)=>{
            return <p key={index} className='text-md font-light leading-none tracking-tighter'>{item}</p>
           })}
           <div className="start flex justify-between items-center">
           <div className="px-5 py-2 text-md font-light leading-none tracking-tighter border-zinc-600 rounded-full border-[2px] mx-2 hover:bg-zinc-600">START THE PROJECT</div>
          <div className=" flex justify-center arrow w-8 h-8 items-center border-zinc-600 rounded-full border-[2px] hover:bg-zinc-600"><HiArrowUpRight/></div> 
           </div>
        </div>
    </div>
  )
}

export default LandingPage
