import React, { useEffect, useState } from 'react'
import './Row.css'
import { AiOutlineDownCircle } from 'react-icons/ai'
import { BiLike } from 'react-icons/bi'
import { BsPlayCircleFill, BsPlusLg } from 'react-icons/bs'
import {HiStar} from "react-icons/hi"
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import connect from '../../lib/Connect'


const base_url="https://image.tmdb.org/t/p/original"
const Row = ({title,fetchUrl}) => {
  const [movies,setMovies]=useState([])
  const navigator=useNavigate()
  useEffect(()=>{
    const fetchData=async()=>{
      const response=await axios.get(`http://localhost:3006/${fetchUrl}` );
      setMovies(response.data)
      return response;
    }
    fetchData()
  },[])

  const postCart=async(cart)=>{
    const {data}=await connect.post(`/mycart`,cart)
  }



  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 2000, min: 700 },
      items: 5,
      slidesToSlide:3,
    },
    desktop: {
      breakpoint: { max: 700, min: 500 },
      items: 3,
      slidesToSlide:3,
    },
    tablet: {
      breakpoint: { max: 500, min: 364 },
      items: 2,
      slidesToSlide:3,
    },
    mobile: {
      breakpoint: { max: 364, min: 0 },
      items: 1,
      slidesToSlide:3,
    }
  };
  return (
    <div>
      <li className="list-none ml-[10px] bg-black text-white p-[5px] ">
        {title}
      </li>
      <div className="overflow-x-auto ba text-[11px]  bg-black h-96 relative">
        <Carousel responsive={responsive}>
          {movies.map((Data) => (
            <div
              className="flex-1 hov   relative m-[5px] "
              key={Data.id}
            >
              <img
                src={`${base_url}${Data.poster_path || Data.backdrop_path}`}
                alt=""
                className="h-96 relative"
              />
              <div className="det bg-[#000000a8] text-white absolute top-[205px] w-[100%] pl-[8px] ">
                <div className="flex pt-[30px]">
                  <div className="flex space-x-3">
                    <BsPlayCircleFill
                      className="text-[30px] border p-[5px] rounded-[50%]"
                    />
                    <BsPlusLg className="text-[30px] border p-[5px] rounded-[50%]"
                    onClick={()=>postCart(Data)} />
                    <BiLike className="text-[30px] border p-[5px] rounded-[50%]" 
                    />
                  </div>
                  <div className="flex flex-1 justify-end mr-[20px]  ">
                    <AiOutlineDownCircle className="text-[35px] p-[5px] border rounded-[50%] mx-20"
                    onClick={()=>navigator(`/home/${Data.id}`)}
                    />
                  </div>
                </div>
                <div>
                  <h1> Release-{Data.release_date}</h1>
                  <h1 className="  mr-[0px]">
                    {Data.adult ? "U/A 18+" : "U/A 7+"}
                  </h1>
                  <div className="flex">
                    <h1>
                      {Data.original_language === "en" ? "English" : "Spanish"}
                    </h1>
                    <h1 className="flex ml-[65px]">
                      Rating
                      <HiStar className="text-orange-500" />
                      {Data.vote_average}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  )
}

export default Row