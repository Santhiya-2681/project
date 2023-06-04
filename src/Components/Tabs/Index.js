import React, { useState } from 'react'
import { tabLabels } from './Constant'
import Tabs from './Tabs'

const TabComponent = () => {
    const [activeTab,setActiveTab]=useState(tabLabels.CANCEL_AT_ANY_TIME)
    const onClickTab=(tab)=>{
        setActiveTab(tab)
    }
  return (
    <div>
         <Tabs activeTabName={activeTab} onClickTab={onClickTab}/>
    </div>
  )
}

export default TabComponent