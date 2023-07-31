import React, { useState } from 'react'
import {AiOutlineMenu ,AiOutlineClose } from 'react-icons/ai'
import {CgProfile} from 'react-icons/cg'
const Navbar = () => {
    const[Nav,setNav] = useState(false);

  return (
    <div className=''>
            <div className='max-w-[1240px] mx-auto py-4 md:py-8 px-2 lg:px-4 flex justify-between items-center'>
                        <div>
                            <p className='font-bold text-2xl'>WeDu</p>
                            <p>Communicate.Collaborate.Create</p>
                        </div>
                        <div className='hidden md:flex gap-4 lg:gap-6 items-center'>
                                <ul className='flex gap-4 lg:gap-6'>
                                    <li className='lg:text-xl cursor-pointer hover:text-gray-400'><a href="#home">Home</a></li>
                                    <li className='lg:text-xl cursor-pointer hover:text-gray-400'><a href="#offer">Product</a></li>
                                    <li className='lg:text-xl cursor-pointer hover:text-gray-400'><a href="#price">Pricing plans</a></li>
                                    <li className='lg:text-xl cursor-pointer hover:text-gray-400'><a href="#contact">Contact</a></li>
                                    <li className='flex gap-1 items-center text-xl cursor-pointer hover:text-gray-400'><CgProfile size={20}/>Login</li>
                                </ul>
                                <button className='bg-[#ffbf23] text-black px-4 py-2 rounded-md border border-black font-bold hover:bg-black hover:text-[#ffbf23] transition-all duration-300'>
                                    Get Started</button>
                        </div>
                        <div className='md:hidden'>
                            {Nav ? <AiOutlineClose onClick={()=>setNav(false)} size={30} /> : <AiOutlineMenu size={30} onClick={()=>setNav(true)}/>}
                        </div>
                        {Nav &&
                        <div className='fixed top-24 md:hidden bg-white py-2'>
                             <ul>
                                <li className='py-1 text-xl font-semibold'>Login</li>
                                <li className='py-1 text-xl font-semibold'><a onClick={()=>setNav(false)} href="#home">Home</a></li>
                                <li className='py-1 text-xl font-semibold'><a onClick={()=>setNav(false)} href="#offer">Product</a></li>
                                <li className='py-1 text-xl font-semibold'><a onClick={()=>setNav(false)} href="#price">Pricing plans</a></li>
                                <li className='py-1 text-xl font-semibold'><a onClick={()=>setNav(false)} href="#contact">Contact</a></li> 
                            </ul>
                            <button className='bg-[#ffbf23] text-black p-2 mt-2 rounded-md border border-black font-bold hover:bg-black hover:text-[#ffbf23] transition-all duration-300'>
                                    Get Started</button>
                        </div> 
                     
                        }
            </div>   
    </div>
  )
}

export default Navbar
