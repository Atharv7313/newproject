import React from 'react'
import RangeCard from './RangeCard'
import pic from '../common/_assets/product-pic.png'

function RangeSection() {
    const data = [
        {
            pic: pic,
            title:"Aluminium Foil Containers",
            color: "bg-blue-600"
        },
        {
            pic: pic,
            title:"Paper Containers",
            color: "bg-yellow-600"
        },
        {
            pic: pic,
            title:"Plastic Containers",
            color: "bg-pink-600"
        },
        {
            pic: pic,
            title:"Plastic Cups",
            color: "bg-green-600"
        },
        {
            pic: pic,
            title:"Plastic Glasses",
            color: "bg-red-600"
        },
    ]
  return (
    <div className='flex flex-col w-[80%] my-10 gap-10'>
        <h1 className='w-full text-center font-bold text-3xl'>Choose from a range of categories</h1>
        <div className='flex flex-wrap w-full justify-center items-center'>
            {data.map((item, index) => (
                <RangeCard key={index} pic={item.pic} title={item.title} color={item.color}/>
            ))}
        </div>
    </div>
  )
}

export default RangeSection