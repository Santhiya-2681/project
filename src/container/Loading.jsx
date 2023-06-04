import React from 'react'
import './loading.css'
const Loading = () => {
  return (
   <div className="load-body">
    <div className="load-center">
      <div className="load-ring"> </div>
        <span className='load-span'>loading...</span>
    </div>
   </div>
  )
}

export default Loading