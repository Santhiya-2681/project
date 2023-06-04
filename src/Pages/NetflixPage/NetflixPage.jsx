import React from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import Banner from '../../Components/Banner/Banner'
import Row from '../../Components/Row/Row'
import Footer from '../Footer/Footer'

const NetflixPage = () => {
  return (
    <div className='bg-black'>
          <NavBar/>
          <Banner/>
          <Row title="TRENDING NOW" fetchUrl={"topRated"} />
          <Row title="TOP RATED" fetchUrl={"trendingnow"} />
          <Row title="POPULAR" fetchUrl={"popular"} />
          <Row title="UPCOMING" fetchUrl={"upComing"} />
          <Footer/>
    </div>
  )
}

export default NetflixPage