import React from 'react'
import CommonHeroSection from '../common/_components/CommonHeroSection'
import img from '../common/_assets/cover-pic.png'
import GetConnected from '../common/_components/GetConnected'
import { StickyScrollReveal } from './_components/StickyScrollReveal'

function page() {
  return (
    <div className='w-full flex flex-col items-center'>
        <CommonHeroSection pic={img} text='Infrastructure'/>
        <StickyScrollReveal/>
        <GetConnected/>
    </div>
  )
}

export default page