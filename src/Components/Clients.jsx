import React from 'react'

const Clients = () => {
  return (
    <div className='py-16'>
            <div className='max-w-[1240px] mx-auto px-4 flex flex-col gap-8 lg:gap-16'>
                        <div>
                            <h1 className='text-2xl sm:text-3xl md:text-4xl lg:hidden'>What Our <br /> Clients Say</h1>
                            <h1 className='hidden lg:block lg:text-5xl'>What Our Clients Say</h1>
                        </div>
                        <div className='flex flex-wrap gap-8 justify-center items-center sm:justify-start lg:flex-nowrap lg:gap-32'>
                                <div className='border-2 border-black rounded-xl w-[250px] h-[350px]'>
                                            <div className='border-b-2 border-black h-8 rounded-t-xl py-2 px-4 flex gap-3 items-center bg-[#ffbf23]'>
                                                    <div className='bg-black w-2 h-2 rounded-lg'/>
                                                    <div className='bg-black w-2 h-2 rounded-lg'/>
                                                    <div className='bg-black w-2 h-2 rounded-lg'/>
                                            </div>
                                            <div className='px-6 py-4 flex flex-col justify-center gap-8'>
                                                "TechGeekz delivers cutting-edge insights on the latest gadgets and gizmos. With its sleek interface and in-depth product comparisons, it's a go-to platform for tech enthusiasts"
                                                <div className='flex flex-col items-end'>
                                                     <p className='font-bold'>Deena Levies,</p>
                                                     <p className='font-bold'>Mission bay</p>
                                                </div>
                                            </div>
                                </div>
                                <div className='border-2 border-black rounded-xl w-[250px] h-[350px]'>
                                            <div className='border-b-2 border-black h-8 rounded-t-xl py-2 px-4 flex gap-3 items-center bg-[#ffbf23]'>
                                                    <div className='bg-black w-2 h-2 rounded-lg'/>
                                                    <div className='bg-black w-2 h-2 rounded-lg'/>
                                                    <div className='bg-black w-2 h-2 rounded-lg'/>
                                            </div>
                                            <div className='px-6 py-4 flex flex-col justify-center gap-8'>
                                            "GadgetMaster offers a treasure trove of tech knowledge. From helpful tutorials to unbiased reviews, it's a one-stop-shop for staying ahead in the digital world."
                                                <div className='flex flex-col items-end'>
                                                     <p className='font-bold'>Deena Levies,</p>
                                                     <p className='font-bold'>Mission bay</p>
                                                </div>
                                            </div>
                                </div>
                                <div className='border-2 border-black rounded-xl w-[250px] h-[350px]'>
                                            <div className='border-b-2 border-black h-8 rounded-t-xl py-2 px-4 flex gap-3 items-center bg-[#ffbf23]'>
                                                    <div className='bg-black w-2 h-2 rounded-lg'/>
                                                    <div className='bg-black w-2 h-2 rounded-lg'/>
                                                    <div className='bg-black w-2 h-2 rounded-lg'/>
                                            </div>
                                            <div className='px-6 py-4 flex  justify-center flex-col gap-8'>
                                            "Geekverse impresses with its diverse content, catering to both beginners and tech-savvy users. A well-organized hub for tech news, reviews, and fascinating innovations."
                                                <div className='flex flex-col items-end'>
                                                     <p className='font-bold'>Deena Levies,</p>
                                                     <p className='font-bold'>Mission bay</p>
                                                </div>
                                            </div>
                                </div>
                        </div>
            </div>
    </div>
  )
}

export default Clients

// lg:gap-36 lg:mt-8