import { StaticImageData } from 'next/image'
import React from 'react'

function RangeCard({pic, title, color}:{pic:StaticImageData,title:string,color:string}) {
  return (
    <div className='w-[320px] h-[320px] flex flex-col items-center m-3'>
      <div className={`w-[80%] h-[80%] ${color} rounded-full relative flex justify-center items-center`}>
        <img src={pic.src} alt="thumbnail" className='w-[250px] h-[250px] object-contain'/>
      </div>
      <div className='w-[50%] h-[20%] flex justify-center items-center'>
        <h1 className='text-center font-bold'>{title}</h1>
      </div>
    </div>
  )
}

export default RangeCard