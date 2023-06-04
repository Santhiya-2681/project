import React, { useEffect, useState } from 'react'
import './scrolltotop.css'
import {BsFillArrowUpCircleFill} from 'react-icons/bs'
const ScrollToTop = () => {
    const [isVisible,setIsVisible]=useState(false)
    const toggleVisibility=()=>{
        if(window.pageYOffset > 300){
            setIsVisible(true)
        }
        else{
            setIsVisible(false)
        }
    }
    const scrollToTop=()=>{
        window.scrollTo({
            top:0,
            behavior: "smooth"
        })
    }
    
    useEffect(()=>{
        window.addEventListener("scroll", toggleVisibility)
        return()=>{
            window.removeEventListener("scroll",toggleVisibility)
        }
    },[])
  return (
    <div className='scroll-to-top'>
        {isVisible && (
           
                <div onClick={scrollToTop}>
                    {/* <i className='fas fa-arrow-circle-up fa-3x'>{BsFillArrowUpCircleFill}</i> */}
                    <BsFillArrowUpCircleFill className='text-[60px]'/>
                </div>
        )}
    </div>
  )
}

export default ScrollToTop