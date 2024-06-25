import React from 'react'
import Titles from './Titles'
import Contact from './Contact'
import LogoContact from '@/assets/LogoContact'
import { MdOutlineEmail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import Icons from './Icons';

function Section6Contact() {
  return (
    <div className="bg-[#030712] text-white w-screen h-auto text-center">
        <div className='py-24 px-20'> 
          <div>
            <Titles sections="Get in touch"/>
            <p className='text-center mt-4 mb-12'>What’s next? Feel free to reach out to me if you're looking for <br></br>a developer, have a query, or simply want to connect.</p>
            <Contact icon={<MdOutlineEmail style={{fontSize: '32px'}}/>} text={<span style={{fontSize: '36px' }}>tom@pinecone.mn</span>} picture={<LogoContact />}/>
            <Contact icon={<FiPhoneCall style={{fontSize: '32px'}}/>} text={<span style={{fontSize: '36px' }}>+976 88112233</span>} picture={<LogoContact />}/>
            <p className='text-center mt-4 mb-12'>You may also find me on these platforms!</p>
            <Icons />
        </div> 
        </div>  
    </div>
  )
}

export default Section6Contact
