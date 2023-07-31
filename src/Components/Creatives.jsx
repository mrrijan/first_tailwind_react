import React from 'react'
import Tablet from '../assets/tablet.png'
import Toolkit from '../assets/toolkit.png'
import File from '../assets/file.png'
import Freedom from '../assets/freedom.png'
import {motion,spring} from 'framer-motion'
const Creatives = () => {
  return (
    <div className='py-16'>
            <div className='max-w-[1240px] mx-auto grid lg:grid-cols-2 gap-4 px-4'>
                    <motion.div
                            initial={{y:'7rem',opacity:0}}
                            animate={{y:0,opacity:1}}
                            transition={
                              {
                                duration : 2,
                                type : "spring",
                              }
                            }
                    >
                        <img src={Tablet} alt="" />
                    </motion.div>
                    <div className='flex flex-col justify-start items-start lg:justify-center'>
                        <h1 className='text-2xl mb-2 md:text-4xl lg:mb-6 lg:text-6xl'>Built For Creatives <br />by Creatives </h1>
                        <p className='md:text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto explicabo placeat delectus accusamus harum ullam odio! Nam, perspiciatis esse! Aspernatur?</p>
                        <div className='flex flex-col mt-6 gap-4 justify-start items-start lg:flex-row lg:gap-8'>
                                <div className='flex gap-3'>
                                        <img src={Toolkit} className='w-15' alt="" />
                                        <p className='text-sm mt-1'>All-in-one <br />Toolkit </p>
                                </div>
                                <div className='flex gap-3'>
                                        <img src={File} className='w-15' alt="" />
                                        <p className='text-sm mt-1'>Integrated <br />File Sharing </p>
                                </div>
                                <div className='flex gap-3'>
                                        <img src={Freedom} className='w-15' alt="" />
                                        <p className='text-sm mt-1'>Total Design<br />Freedom</p>
                                </div>
                        </div>
                    </div>
            </div>
        
    </div>
  )
}

export default Creatives
