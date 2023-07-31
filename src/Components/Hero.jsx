import React from 'react'
import Children from '../assets/children.png'
import Lock from '../assets/lock.png'
import Collab from '../assets/collaboration.png'
import Security from '../assets/security.png'
import {motion ,spring} from 'framer-motion';
const Hero = () => {
  return (
    <div className='py-16 px-4' id="home">
                <div className='max-w-[1240px] mx-auto flex flex-col md:flex-row-reverse lg:gap-8'>
                            <motion.div
                                    initial={{x:'7rem',opacity:0}}
                                    animate={{x:0,opacity:1}}
                                    transition={
                                      {
                                        duration : 2,
                                        type : "spring",
                                      }
                                    }
                            >
                                <img src={Children} className='w-[600px]' alt="" />
                            </motion.div>
                            <div>
                                    <div className='md:mt-4 lg:mt-16'>
                                        <motion.h1
                                            initial={{y:'7rem',opacity:0}}
                                            animate={{y:0,opacity:1}}
                                            transition={
                                              {
                                                duration : 2,
                                                type : "spring",
                                              }
                                            }
                                         className='text-xl font-medium md:text-3xl lg:text-6xl'>Communicate. <br /> Collaborate.Create</motion.h1>
                                        <p className='mt-2 md:mt-4 lg:mt-6'>WeDu provides an powerful and effective way to manage your projects</p>
                                    </div>
                                <div className='flex flex-col md:flex-col-reverse lg:mt-5'>
                                        <div className='mt-4 flex flex-col lg:flex-row lg:mt-16 lg:gap-2'>
                                                <div className='flex justify-start gap-8 items-center lg:gap-2'>
                                                    <img src={Security} className='w-10' alt="" />
                                                    <p className='text-sm'>Speed and Security</p>
                                                </div>
                                                <div className='flex gap-8 justify-start items-center lg:gap-2'>
                                                    <img src={Lock} className='w-10' alt="" />
                                                    <p className='text-sm'>Flexibility and Scalability</p>
                                                </div>
                                                <div className='flex gap-8 justify-start items-center lg:gap-2'>
                                                    <img src={Collab} className='w-10' alt="" />
                                                    <p className='text-sm'>Better Collaboration</p>
                                                </div>
                                        </div>
                                            <button className='bg-black w-[200px] border border-black text-white px-4 py-2 rounded-md mt-2 hover:bg-[#ffbf23] hover:text-black transition-all duration-300'>Get Started</button>
                                </div>
                            </div>
                            
                </div>
    </div>
  )
}

export default Hero
