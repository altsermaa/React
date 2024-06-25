import React from 'react'
import Titles from './Titles'
import Experience from './Experience'

function Section4Experience() {
  return (
    <div className=''>
      <div className="bg-[#111827] text-white w-screen h-auto">
        <div className='py-24 px-20'> 
          <Titles sections="Experiences"/>
          <p className='text-center mt-4 mb-12'>Here is a quick summary of my most recent experiences:</p>
          <Experience />

        </div>
      </div>
    </div>
  )
}

export default Section4Experience
