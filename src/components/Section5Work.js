import React from 'react'
import Titles from './Titles'
import WorkDetails from './WorkDetails'

function Section5Work() {
  return (
    <div className="bg-[#030712] text-white w-screen h-auto">
        <div className='py-24 px-20'> 
          <div>
            <Titles sections="Work"/>
            <p className='text-center mt-4 mb-12'>Some of the noteworthy projects I have built:</p>
          </div>
          <WorkDetails />
        
        </div>  
    </div>
  )
}

export default Section5Work
