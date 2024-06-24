import React from 'react'
import Titles from './Titles'
import TechIcon from './TechIcon'

function Section3Skill() {
  return (
    <div className="bg-[#030712] text-white w-screen h-auto">
        <div className='py-24 px-20'> 
          <Titles sections="Skills"/>
          <p className='text-center mt-4'>The skills, tools and technologies I am really good at:</p>
          <TechIcon />

        </div>
    </div>
  )
}

export default Section3Skill

