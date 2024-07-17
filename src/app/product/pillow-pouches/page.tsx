'use client'
import Image from 'next/image'
import React from 'react'
import img from '../../common/_assets/product-pic.png'
import GetConnected from '@/app/common/_components/GetConnected'
import { on } from 'events'

function page() {
    const [selectedImage, setSelectedImage] = React.useState(img.src)
    const handleClick = (src:string) => {
        setSelectedImage(src)
    }
  return (
    <div className='w-full flex flex-col items-center mt-32 mb-10'>
        <div className="w-[85%] flex lg:flex-row flex-col items-center lg:items-start">
            <div className=' lg:w-[50%] p-5 flex flex-col gap-5'>
                <div className='w-full h-[300px] sm:h-[400px] md:h-[500px] relative border rounded-xl border-black'>
                    <Image src={selectedImage} alt='product' objectFit='contain' layout='fill' />
                </div>
                <div className='w-full flex flex-wrap gap-2 justify-evenly'>
                    <div className={`w-[70px] h-[70px] md:w-[100px] md:h-[100px] relative border rounded-xl cursor-pointer ${selectedImage==img.src?'border-blue-500':'border-black'}`} onClick={()=>handleClick(img.src)}>
                        <Image src={img.src} alt='product' objectFit='contain' layout='fill'/>
                    </div>
                    <div className={`w-[70px] h-[70px] md:w-[100px] md:h-[100px] relative border rounded-xl cursor-pointer ${selectedImage==img.src?'border-blue-500':'border-black'}`} onClick={()=>handleClick(img.src)}>
                        <Image src={img.src} alt='product' objectFit='contain' layout='fill'/>
                    </div>
                    <div className={`w-[70px] h-[70px] md:w-[100px] md:h-[100px] relative border rounded-xl cursor-pointer ${selectedImage==img.src?'border-blue-500':'border-black'}`} onClick={()=>handleClick(img.src)} >
                        <Image src={img.src} alt='product' objectFit='contain' layout='fill'/>
                    </div>
                    <div className={`w-[70px] h-[70px] md:w-[100px] md:h-[100px] relative border rounded-xl cursor-pointer ${selectedImage==img.src?'border-blue-500':'border-black'}`} onClick={()=>handleClick(img.src)} >
                        <Image src={img.src} alt='product' objectFit='contain' layout='fill' />
                    </div>
                </div>
            </div>
            <div className='w-full md:w-[85%] lg:w-[50%] flex flex-col gap-5 lg:mt-14 p-5'>
                <h1 className='text-2xl font-bold'>Pillow Pouches & Rolls</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, odio velit dolorum corporis asperiores, aspernatur distinctio minima odit tenetur qui, esse fugit quidem quas adipisci. Omnis quo dignissimos alias repellendus! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore eum nobis accusamus reiciendis eius, sit libero est eveniet aliquam quas dolore dolores in dignissimos, autem minus nostrum repellat cum sunt! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus vel id, eius exercitationem consequatur sit nihil cupiditate impedit officiis, eveniet, quia cumque veniam. Est, praesentium? Quasi ratione repellendus vitae eveniet.</p>
                <button className='w-[100px]'>Get a quote</button>
            </div>
        </div>
        <GetConnected/>
    </div>
  )
}

export default page