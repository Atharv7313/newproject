import Image, { StaticImageData } from 'next/image';
import React from 'react'

interface ProductType {
    id: number;
    name: string;
    image: StaticImageData;
    price: number;
    description: string;
}


function Product({product}:{product:ProductType}) {
  return (
    <div className='w-[20%] min-w-[250px] p-2 gap-2 flex flex-col m-5 border border-black rounded-lg'>
        <div className='w-full h-[250px] relative'>
            <Image src={product?.image} alt="alt" objectFit="cover" layout="fill" />
        </div>
        <div className='w-full text-center font-medium'>{product?.name}</div>
        <div className='w-full text-right font-bold'>{">"}</div>
    </div>
  )
}

export default Product