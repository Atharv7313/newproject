import Image from 'next/image'
import React from 'react'
import logo from '../../common/_assets/logo.png'
import Link from 'next/link'
import { SideDrawer } from './SideDrawer'

function Navbar() {
  return (
    <div className='fixed top-4 w-full flex justify-center'>
      <div className='w-[85%] flex bg-[#ffffffA6] rounded-full justify-between items-center py-1 px-5 backdrop-blur-md shadow-xl'>
        <Link href="/" className='cursor-pointer'>
          <Image src={logo.src} alt='logo' width={120} height={120}/>
        </Link>
        <div className='lg:flex hidden w-[85%] justify-evenly gap-2 items-center'>
          <Link href="/" className='cursor-pointer'>Home</Link>
          <Link href="#" className='cursor-pointer'>Categories</Link>
          <Link href="#" className='cursor-pointer'>Infrastructure</Link>
          <Link href="/use-cases" className='cursor-pointer'>Use cases</Link>
          <Link href="/about" className='cursor-pointer'>About & Contact</Link>
          <button className='w-[150px]'>Enquire Now</button>
        </div>
        <SideDrawer/>
      </div>
    </div>
  )
}

export default Navbar