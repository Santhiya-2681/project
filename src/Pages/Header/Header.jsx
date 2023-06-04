import React, { useState } from 'react'
import { BsGlobe } from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom'
import Frontimg from '../../Assets/Images/Front.png'
import  './header.css'
import Footer from '../Footer/Footer'
import { useUserContext } from '../../utils/hooks/userContext'
import TabComponent from '../../Components/Tabs/Index'

const Header = () => {
  const [email,setEmail]=useState({username:"",password:""})
  const {totallogin,emailusers,emaillogin}=useUserContext()
  const navigator=useNavigate()
  const getstart=()=>{
          if(emailusers.username===email.username){
          emaillogin(email)
          navigator("/home")
        }
      }
  return (
    <div>
    <div className='f-page-container'>
     <div className='front-one'>
      <img className='front-nf-img' alt='' src={Frontimg}/>
      <div className='relative '>
      <BsGlobe className='absolute top-[10px] left-[20px]' />
      <select className='front-select f-s'>
        <option value="" >English</option>
        <option value=""  >Tamil</option></select>
      <Link to={"/login"}>
       <button className='front-select p-[5px] w-[100px] bg-red-600'>Sign In</button></Link>
      </div>
      </div>

     <div className='mt-[150px] text-center' >
      <h1 className='text-[50px] font-bold p-2'>Unlimited movies, TV shows and more.</h1>
      <p className=' text-[25px] p-2'>Watch anywhere. Cancel anytime.</p>
      <p className='text-[20px] p-2 '>Ready to watch? Enter your email to create or restart your membership.</p>
      </div>

      <div className='front-three text-center'>
      <input type="text" placeholder=" " onChange={(e)=>setEmail({...email,username:e.target.value})}
      className='front-inpt'/>
      <button className='front-btn text-[25px] font-bold' onClick={()=>getstart()}>Get Started</button></div>
      
    </div>  
    
        <TabComponent/>
        <Footer/>
  </div>
  )
}

export default Header