import React, { lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SuspenceWrapper from '../container/SuspenceWrapper'
import PageWrapper from '../container/PageWrapper'
import ScrollToTop from '../Components/ScrollToTop/ScrollToTop'
const Root = lazy(() => import('../Pages/Header/Header'))
const Login = lazy(() => import('../Pages/Login/Login'))
const Register=lazy(()=>import('../Pages/Register/Register'))
const NetflixPage = lazy(() => import('../Pages/NetflixPage/NetflixPage'))
const MovieDetails = lazy(() => import('../Components/MovieDetails/MovieDetails'))
const SearchResult = lazy(() => import('../Components/Searchpage/SearchResult'))
const ProfilePage = lazy(() => import('../Pages/ProfilePage/ProfilePage'))
const MyCart = lazy(() => import('../Pages/MyCart/MyCart'))
const ErrorPage = lazy(() => import('../Pages/Error/Error'))
const Parent = () => {
  return (
    <BrowserRouter>
    <ScrollToTop/>
      <Routes>
        <Route path="/" element={
          <SuspenceWrapper>
            <Root />
          </SuspenceWrapper>
        }>
        </Route>
        <Route path='/login' element={
          <SuspenceWrapper>
            <Login />
          </SuspenceWrapper>
        }>

        </Route>
        <Route path='/register' element={
          <SuspenceWrapper>
            <Register/>
          </SuspenceWrapper>
        }>
          
        </Route>

        <Route path='/home' element={
          <SuspenceWrapper>
            <PageWrapper>
              <NetflixPage />
            </PageWrapper>
          </SuspenceWrapper>
        }>

        </Route>

        <Route path='/home/:id' element={
          <SuspenceWrapper>
            <PageWrapper>
              <MovieDetails />
            </PageWrapper>
          </SuspenceWrapper>
        }>
        </Route>

        <Route path='/search' element={
          <SuspenceWrapper>

            <SearchResult />

          </SuspenceWrapper>
        }>

        </Route>

        <Route path='/profile' element={
          <SuspenceWrapper>
            <ProfilePage />
          </SuspenceWrapper>
        }></Route>

        <Route path='/my List' element={
          <SuspenceWrapper>
            <MyCart />
          </SuspenceWrapper>
        }>

        </Route>

        <Route path='/*' element={
          <SuspenceWrapper>
            <ErrorPage />
          </SuspenceWrapper>
        }>

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Parent