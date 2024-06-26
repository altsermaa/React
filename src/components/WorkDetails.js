import React from 'react'
import WorkPic from './WorkPic'
import Software from './Software'


function WorkDetails() {
  return (
    <div className='flex flex-col gap-12'>
        <div className='flex lg:flex-row flex-col'>
            <div className='flex-1 bg-[#374151] lg:p-12 p-8'>
                <WorkPic picture={<img src="/Ubcab.png" alt="UBCab" />}/>
            </div>
            <div className='lg:flex-1 flex-2 p-12 bg-[#1f2937] flex flex-col gap-6'>
                <h3>UBCab</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</p>
                <Software />
            </div>
        </div>
        <div className='flex lg:flex-row-reverse flex-col'>
            <div className='flex-1 bg-[#374151] lg:p-12 p-8'>
                <WorkPic picture={<img src="/Mentorhub.png" alt="Mentorhub" />}/>
            </div>
            <div className='lg:flex-1 flex-2 p-12 bg-[#1f2937] flex flex-col gap-6'>
                <h3>Mentorhub</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</p>
                <Software />
            </div>
        </div>
        <div className='flex lg:flex-row flex-col'>
            <div className='flex-1 bg-[#374151] lg:p-12 p-8'>
                <WorkPic picture={<img src="/Toim.png" alt="Toim" />}/>
            </div>
            <div className='lg:flex-1 flex-2 p-12 bg-[#1f2937] flex flex-col gap-6'>
                <h3>iToim</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</p>
                <Software />
            </div>
        </div>
    </div>
  )
}

export default WorkDetails
