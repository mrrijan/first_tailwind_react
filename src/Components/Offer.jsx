import React from 'react'
import Image1 from '../assets/img1.jpg'
import Image2 from '../assets/img2.jpg'
import Image3 from '../assets/img3.jpg'
import Image4 from '../assets/img4.jpg'
const Offer = () => {
  return (
    <div className='py-16 px-4' id="offer">
                <div className='max-w-[1240px] mx-auto flex flex-col gap-4 md:gap-8'>
                        <div>
                            <h1 className='text-xl md:text-2xl lg:text-4xl'>What We Offer</h1>
                            <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, amet!</p>
                        </div>
                        <div className='flex flex-col gap-10 md:gap-6 md:flex-row lg:gap-6 justify-center items-center'>
                            <div >
                                <img src={Image1} className='w-22 lg:w-44 border-2 lg:mx-auto border-black rounded-md' alt="" />
                                <h1 className='mt-4 font-semibold text-xl lg:text-2xl lg:text-center'>Work Flows <br /> That Work</h1>
                                <p className='mt-2 lg:text-center lg:px-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates a eaque tempore in delectus dolorum temporibus porro? Alias, id aliquam.</p>
                            </div>
                            <div>
                                <img src={Image2} className='w-22 lg:w-44 border-2 lg:mx-auto border-black rounded-md' alt="" />
                                <h1 className='mt-4 font-semibold text-xl lg:text-2xl lg:text-center'>All-In-One <br /> Solution</h1>
                                <p className='mt-2 lg:text-center lg:px-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates a eaque tempore in delectus dolorum temporibus porro? Alias, id aliquam.</p>
                            </div>
                            <div>
                                <img src={Image3} className='w-22 lg:w-44 border-2 lg:mx-auto border-black rounded-md' alt="" />
                                <h1 className='mt-4 font-semibold text-xl lg:text-2xl lg:text-center'>Comprehensive <br/>Customer Support </h1>
                                <p className='mt-2 lg:text-center lg:px-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates a eaque tempore in delectus dolorum temporibus porro? Alias, id aliquam.</p>
                            </div>
                            <div>
                                <img src={Image4} className='w-22 lg:w-44 border-2 lg:mx-auto border-black rounded-md' alt="" />
                                <h1 className='mt-4 font-semibold text-xl lg:text-2xl lg:text-center'>Smart <br/> Automation Tools</h1>
                                <p className='mt-2 lg:text-center lg:px-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates a eaque tempore in delectus dolorum temporibus porro? Alias, id aliquam.</p>
                            </div>
                        </div>
                </div>
    </div>
  )
}

export default Offer
