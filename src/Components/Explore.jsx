import React from 'react'
import {TiTick} from 'react-icons/ti'
const Explore = () => {
  return (
    <div className='py-16' id="price">
            <div className='max-w-[1240px] mx-auto px-4 grid lg:grid-cols-2 gap-10'>
                            <div className='flex flex-col gap-6 lg:justify-center'>
                                <h1 className='text-xl md:text-2xl lg:text-5xl'>Exploring our <br />Price Options</h1>
                                <p className='pr-24'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, velit repellat natus quos fugit cum officia assumenda excepturi hic distinctio!</p>
                                <button className='bg-black w-[150px] border border-black text-white px-4 py-2 rounded-md mt-2 hover:bg-[#ffbf23] hover:text-black transition-all duration-300'>See More</button>
                            </div>
                            <div className='border-2 border-black rounded-lg relative w-[254px] sm:w-[354px] bg-black lg:mx-auto '>
                                        <div className='bg-[#ffbf23] py-1 w-[100px] border-2 border-black text-center absolute -top-4 left-[70px] sm:left-[120px] font-bold'>
                                            Best Value
                                        </div>
                                        <div className='mt-4 px-6 py-6 bg-black text-white'>
                                            <p className='text-2xl pt-3'>Premium</p>
                                            <div className='relative mb-7 mt-2'>
                                                <p className='text-xl font-bold'>US$</p>
                                                <p className='text-5xl font-bold absolute top-4 left-8'>50</p>
                                            </div>
                                            <p className='text-sm pt-4'>Every month</p>
                                            <p className='pt-3'>For Memberships</p>
                                            <p className='mt-6 text-sm'>Valid for 12 months</p>
                                            <button className='bg-white text-black mt-4 px-4 py-4 font-bold border-2 border-black rounded-md block mx-auto w-[200px] cursor-pointer hover:bg-gray-300'>Get Started</button>
                                        </div>
                                        <div className='bg-[#ffd7ef] py-6 pl-6 flex flex-col gap-4'>
                                                    <p className='flex items-center gap-2'><TiTick />I'm a benefit</p>
                                                    <p className='flex items-center gap-2'><TiTick />I'm a benefit</p>
                                                    <p className='flex items-center gap-2'><TiTick />I'm a benefit</p>
                                                    <p className='flex items-center gap-2'><TiTick />I'm a benefit</p>
                                        </div>
                            </div>
            </div>
    </div>
  )
}

export default Explore
