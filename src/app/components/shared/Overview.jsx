import React from 'react'
import Overview_Header from '../ui/Overview_Header'
import Hero_section_overview from '../ui/Hero_section_overview'
import Main_containt_overview from '../ui/Main_containt_overview'

const Overview = () => {
  return (
    <div className='w-full h-screen 
    bg-main-app-bg 
    flex flex-col 
    overflow-hidden'>
        
        {/* Header */}
        <div className="flex-none">
          <Overview_Header/>
        </div>

        {/* Hero section */}
        <div className="flex-none">
          <Hero_section_overview/>
        </div>

        {/* Main */}
        <div className="flex-1 overflow-y-auto mt-6 custom-scrollbar">
          <Main_containt_overview/>
        </div>
    </div>
  )
}

export default Overview