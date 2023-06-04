import React, { Suspense } from 'react'
import Loading from './Loading'

const SuspenceWrapper = ({children}) => {
  return (
   <Suspense fallback={<Loading/>}>{children}</Suspense>
  )
}

export default SuspenceWrapper