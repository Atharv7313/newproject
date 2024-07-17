import React from 'react'
import img from './_assets/HeroSectionImg.jpg'

function Herosection() {
  return (
    <div className={`w-full h-[90vh] flex items-center relative bg-no-repeat bg-cover bg-center`}  style={{ backgroundImage: `url(${img.src})` }}>
        <div className='flex flex-col gap-8 ml-10 mx-28'>
            <h1 className='text-5xl font-bold text-black'>A catchy tagline<br/> to describe the business...</h1>
            <button className='w-[180px] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded-full'>Enquire Now</button>
        </div>
    </div>
  )
}

export default Herosection