import React from 'react'
import img from '../common/_assets/cover-pic.png'
import CommonHeroSection from '../common/_components/CommonHeroSection'
import Product from '../product-listing/_components/Product'
import productList from '../product-listing/_components/productList'
import GetConnected from '../common/_components/GetConnected'

function page() {
  return (
    <div className='w-full flex flex-col items-center'>
        <CommonHeroSection pic={img} text='Use Cases'/>
        <div className='w-[85%] flex flex-col mt-10 gap-5'>
            <h1 className='font-bold text-3xl'>Flours, Rava, Dals, Pulses, Groceries Packaging</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div className='w-[85%] flex flex-col mt-16'>
            <h1 className='font-bold text-2xl'>Packaging you will need for these:</h1>
            <div className='w-full flex flex-wrap justify-evenly my-10'>
                {productList.map((product) => (
                    <Product key={product.id} product={product} />
                ))}
            </div>
        </div>
        <GetConnected/>
    </div>
  )
}

export default page