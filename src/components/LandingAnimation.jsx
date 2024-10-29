import React from 'react'
import { motion } from "framer-motion"

function LandingAnimation() {
    <React/>
  return (
    <div data-scroll data-scroll-section data-scroll-speed='.2'  className='w-full rounded-t-2xl py-10 bg-[#0F0FFF]'>
      <div className="text border-t-2 border-b-2 border-zinc-500 whitespace-nowrap gap-10 flex overflow-hidden">
        <motion.h1 initial={{x: 0}} animate={{ x: '-100%' }}  transition={{ ease: "linear", repeat: Infinity, duration: 15 }} className='text-[24vw] -mt-8 uppercase -mb-8 leading-none font-[Courier-New] font-bold  '> we are ochi </motion.h1>
        <motion.h1 initial={{x: 0}} animate={{ x: '-100%' }}  transition={{ ease: "linear", repeat: Infinity, duration: 15 }} className='text-[24vw] -mt-8 uppercase -mb-8 leading-none font-[Courier-New] font-bold  '> we are ochi </motion.h1>
      </div>
    </div>
  )
}

export default LandingAnimation
