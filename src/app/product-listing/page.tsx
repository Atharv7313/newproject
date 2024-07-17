import Image from 'next/image'
import React from 'react'
import hero_bg from '../common/_assets/cover-pic.png'
import productList from './_components/productList'
import Product from './_components/Product'
import GetConnected from '../common/_components/GetConnected'
import CommonHeroSection from '../common/_components/CommonHeroSection'

function page() {
  return (
    <div className='w-full flex flex-col items-center'>
        <CommonHeroSection pic={hero_bg} text='Laminates'/>
        <div className='w-[85%] flex flex-wrap justify-evenly my-10'>
            {productList.map((product) => (
                <Product key={product.id} product={product} />
            ))}
        </div>
        <GetConnected/>
    </div>
  )
}

export default page