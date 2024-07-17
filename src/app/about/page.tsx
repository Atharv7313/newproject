import React from 'react'
import img from '../common/_assets/cover-pic.png'
import CommonHeroSection from '../common/_components/CommonHeroSection'
import GetConnected from '../common/_components/GetConnected'

function page() {
  return (
    <div className='w-full flex flex-col items-center'>
        <CommonHeroSection pic={img} text='About & Contact'/>
        <div className='w-[85%] flex flex-col gap-5 my-10'>
            <h1 className='w-full text-center font-bold text-3xl'>About Us</h1>
            <p className='w-full text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <GetConnected/>
    </div>
  )
}

export default page