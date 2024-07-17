import Image, { StaticImageData } from 'next/image'
import React from 'react'

function CommonHeroSection({pic,text}:{pic:StaticImageData,text:string}) {
  return (
    <div className='w-full flex flex-col'>
        <div className="w-full absolute sm:h-[50vh] h-[60vh]">
            <Image src={pic.src} alt="alt" objectFit="cover" layout="fill" />
        </div>
        <div className="w-full sm:h-[50vh] h-[60vh] relative flex flex-col justify-center items-center">
            <div className="flex flex-col sm:gap-5 gap-12 w-[90%] max-w-[800px] items-center justify-center h-full"> 
                <div className="flex flex-col gap-5 mt-20">   
                    <h1 className="text-white text-center font-bold md:text-7xl text-5xl">
                        {text}         
                    </h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CommonHeroSection