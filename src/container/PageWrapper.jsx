import React from 'react'
import NavBar from '../Components/NavBar/NavBar'

const PageWrapper = ({children}) => {
  return (
    <div>
        <NavBar/>
        {children}
    </div>
  )
}

export default PageWrapper