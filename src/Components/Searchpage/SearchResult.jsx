

import React, { useEffect, useState } from 'react'
import Row from '../Row/Row'
import Footer from '../../Pages/Footer/Footer'
import { useUserContext } from '../../utils/hooks/userContext'
import { treandingMovies } from '../../lib/api-funtions/movies'
import { BsPlayCircleFill, BsPlusLg } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import connect from '../../lib/Connect'
import { BiLike } from 'react-icons/bi'
import { AiOutlineDownCircle } from 'react-icons/ai'
import './search.css'
import Navbar from '../NavBar/NavBar'

const SearchResult = () => {
  const [searchdata, setSearchdata] = useState()
  console.log(searchdata);
  const { searchmovie } = useUserContext()
  console.log(searchmovie);
  useEffect(() => {
    treandingMovies().then(({ data }) => setSearchdata(data))
  }, [])
  const base_url = "https://image.tmdb.org/t/p/original"

  const navigator = useNavigate()
  const postCart = async (item) => {
    const { data } = await connect.post(`/mycart`, item)
    console.log(data)
  }
  return (

    <div className='bg-black'>
      <Navbar />
      <div className='bg-black text-white'>
        <h1 className='text-[25px] pt-[60px] '>Search Movies</h1>
        <ul className='searchmov-container '>

          {searchdata?.filter((user => user.title?.toLowerCase().includes(searchmovie))).map((item) => (
            <div className='one m-[5px] ' key={item.id}>
              <img className='searchmov-img ' src={`${base_url}${item.poster_path}`} alt="" />
              <div className=' two absolute w-[100%] p-[10px] h-[15vh] text-[11px] bg-black'>
                <div className="flex ">
                  <div className="flex space-x-3">
                    <BsPlayCircleFill className="text-[20px] " />
                    <BsPlusLg className="text-[20px] border p-[5px] rounded-[50%]"
                      onClick={() => postCart(item)} />
                    <BiLike className="text-[20px] border p-[5px] rounded-[50%]" />
                  </div>
                  <div className="flex justify-end flex-1  ">
                    <AiOutlineDownCircle className="text-[33px] p-[5px]  "
                      onClick={() => navigator(`/home/${item.id}`)} />
                  </div>
                </div>
                <div className=''>
                  <h1> Release-{item.release_date}</h1>
                  <h1 className="border mr-[40%]   ml-[40%]">
                    {item.adult ? "U/A 18+" : "U/A 7+"}</h1>
                  <h1>{item.original_language === "en" ? "English" : ""}</h1>
                </div>
              </div>
            </div>
          ))}
        </ul>
        <Footer />
      </div>
    </div>
  )
}

export default SearchResult