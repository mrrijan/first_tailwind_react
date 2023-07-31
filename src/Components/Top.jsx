import React, { useEffect, useState } from 'react'
import {AiOutlineArrowUp} from 'react-icons/ai'
const Top = () => {
    const [isVisible , setIsVisible ] =useState(false);
    const toggleup = ()=>{
        window.scrollTo({top:0,left:0,behavior:"smooth"});
    }
    const listenToScroll = ()=>{
        let heightToHidden = 300;
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        if(winScroll>heightToHidden)
        {
            setIsVisible(true);
        }
        else
        {
            setIsVisible(false);
        }
    }
    useEffect(()=>{
            window.addEventListener('scroll',listenToScroll)
    },[]) 
  return (
    <>
    {isVisible && 
    <div className='w-10 h-10 bg-blue-500 rounded-full flex justify-center items-center fixed bottom-2 right-2 cursor-pointer' onClick={toggleup}>
            <AiOutlineArrowUp color='#FFF' className='animate-bounce' size={27} />
    </div>
    }
    </>
  )
}

export default Top
