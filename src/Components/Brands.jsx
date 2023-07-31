import React from 'react'
import bond from '../assets/bond.png'
import cog from '../assets/cog.png'
import delta from '../assets/delta.png'
import meta from '../assets/meta.png'
import motion from '../assets/motion.png'
import power from '../assets/power.png'
import strongest from "../assets/strongest.png"
import tech from '../assets/tech.png'
const Brands = () => {
  return (
    <div className='bg-[#ffd7ef] py-16 relative'>
          <div className='max-w-[1240px] px-4 mx-auto flex flex-col'>
                            <div>
                                 <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl'>Trusted Among <br />Industry Leaders</h1>
                                 <p className='mt-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et obcaecati illum dolores eveniet illo ut impedit hic tempore ea rerum.</p>
                            </div>
                           <div className='grid md:grid-cols-2 lg:grid-cols-4 mt-5 lg:mt-16'>
                                     <div className='flex gap-10 md:justify-evenly lg:justify-evenly lg:flex-col'>
                                            <img src={bond} className='w-[90px] h-[90px] lg:w-[127px] lg:h-[127px]' alt="" />
                                            <img src={cog} className='w-[90px] h-[90px] lg:w-[127px] lg:h-[127px]' alt="" />
                                    </div>
                                    <div className='flex gap-10 md:justify-evenly lg:justify-evenly lg:flex-col'>
                                            <img src={delta} className='w-[90px] h-[90px] lg:w-[127px] lg:h-[127px]' alt="" />
                                            <img src={meta} className='w-[90px] h-[90px] lg:w-[127px] lg:h-[127px]' alt="" />
                                    </div>
                               
                              
                                    <div className='flex gap-10 md:justify-evenly lg:justify-evenly lg:flex-col'>
                                            <img src={motion} className='w-[90px] h-[90px] lg:w-[127px] lg:h-[127px]' alt="" />
                                            <img src={power} className='w-[90px] h-[90px] lg:w-[127px] lg:h-[127px]' alt="" />
                                    </div>
                                    <div className='flex gap-10 md:justify-evenly lg:justify-evenly lg:flex-col'>
                                            <img src={strongest} className='w-[90px] h-[90px] lg:w-[127px] lg:h-[127px]'  alt="" />
                                            <img src={tech} className='w-[90px] h-[90px] lg:w-[127px] lg:h-[127px]'  alt="" />
                                    </div>
                               
                           </div>
                </div>
    </div>
  )
}

export default Brands
