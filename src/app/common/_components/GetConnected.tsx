import Image from 'next/image'
import React from 'react'
import email from '../_assets/email.svg'
import call from '../_assets/call.svg'
import address from '../_assets/address.svg'

function GetConnected() {
  return (
    <div className='w-[85%] flex flex-col items-center gap-5 my-10'>
        <p className='w-full text-center font-bold text-3xl'>Get connected</p>
        <p className='text-center w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%]'>{"Have questions, suggestions, or simply want to reach out? We're here to listen. Whether you're curious about our mentorship programs, seeking guidance, or interested in collaboration, we're ready to assist you in navigating your learning journey. Send us a message below, and we'll respond promptly. Let's connect and achieve great things together!"}</p>
        <div className='w-full flex flex-wrap justify-evenly'>
            <div className='min-w-[250px] px-5 py-8 mx-2 my-4 flex flex-col items-center gap-3 shadow-lg shadow-[#005AAB] rounded-xl'>
                <Image src={email.src} alt='email' width={50} height={50}/>
                <p className='font-bold'>Send Email</p>
                <p>info@mentramentors.com</p>
            </div>
            <div className='min-w-[250px] px-5 py-8 mx-2 my-4 flex flex-col items-center gap-3 shadow-lg shadow-[#0F5829] rounded-xl'>
                <Image src={call.src} alt='call' width={50} height={50}/>
                <p className='font-bold'>Contact Us</p>
                <p>+91 72769 49696</p>
                <p>+44 7853 296440</p>
            </div>
            <div className='min-w-[250px] px-5 py-8 mx-2 my-4 flex flex-col items-center gap-3 shadow-lg shadow-[#2E3192] rounded-xl'>
                <Image src={address.src} alt='address' width={50} height={50}/>
                <p className='font-bold'>Address</p>
                <p className='text-center'>Leamington Spa,<br/> Warwick Univeristy</p>
            </div>
        </div>
    </div>
  )
}

export default GetConnected