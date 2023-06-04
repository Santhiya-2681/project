import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'

export const userContext = createContext()

const UserContextProvider = ({ children }) => {
  const [userdetails, setUserdetails] = useState(null)
  const [searchmovie, setSearchmovie] = useState()
  const [emailusers, setEmailusers] = useState(null)
  const [playlink, setPlaylink] = useState('')
  console.log(userdetails)
  const getplay = (video) => {
    setPlaylink(video)
  }
  const userlogin = (user) => {
    setUserdetails(user)
    

  }
  const userlogout = () => {
    setUserdetails(null)
  }
  const emaillogin = (email) => {
    setUserdetails(email)
  }
  return (
    <userContext.Provider value={{
      userdetails, emailusers,
      userlogin, userlogout, emaillogin, playlink, getplay, setSearchmovie, searchmovie
    }} >
      {children}
    </userContext.Provider>
  )
}

export default UserContextProvider

