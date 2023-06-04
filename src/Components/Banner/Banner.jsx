import React from 'react'
import "./banner.css"
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import YouTube from 'react-youtube'


const Banner = () => {
    const [movie,setMovie]=useState([])
    const [play,setPlay]=useState(true)
    
    useEffect(()=>{
        const fetchData=async ()=>{
          const response=await axios.get(`http://localhost:3006/trendingnow`
          )
          setMovie(
            response.data[
              Math.floor(Math.random() * response.data.length - 1)
            ]
          )
    
        }
        fetchData()
      },[])
      const truncate=(str,n)=>{
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
      }
  return (
    <div>
      {play?(
        <header className="header-container"
        style={{backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`}}>
          <div className='banner'>
          <div className='banner-container1'>
              <h1 className='banner-title'> {movie?.title || movie?.name || movie?.originam_name}</h1>
          </div>
          <h1 className='banner-description'>{truncate(movie?.overview,150)}</h1>
          <div  className='banner-container2'>
              <button className='banner-bt1' onClick={()=>{setPlay(!play);}}>Play</button>
              <button className='banner-bt2'>More info</button>
          </div>
          <div  className='banner-container3'></div>
          </div>
      </header>
      ):(
        <div className='relative'>
          <YouTube
          containerClassName={"youtube"}
          videoId={`/${movie.video_id}`}
          opts={{
            width:'1545',
            height:'600',
            padding:0,
            margin:0,
            playerVars:{autoplay:1,controls:0}
          }}
          />
          <button  onClick={()=>setPlay(!play)} className='bg-white p-2 text-black left-12 top-56 absolute'>back</button>
        </div>
      )}
    </div>
  )
}

export default Banner