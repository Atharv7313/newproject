import React from 'react'
import { ThreeDCardDemo } from './ThreeDCardDemo'
import pic from '../common/_assets/product-pic.png'

function CardsSection() {

    const data = [
        {
            pic: pic,
            title: "Flours, Rava, Dals, Pulses, Groceries Packaging",
            link: "#"
        },
        {
            pic: pic,
            title: "Flours, Rava, Dals, Pulses, Groceries Packaging",
            link: "#"
        },
        {
            pic: pic,
            title: "Flours, Rava, Dals, Pulses, Groceries Packaging",
            link: "#"
        },
        {
            pic: pic,
            title: "Flours, Rava, Dals, Pulses, Groceries Packaging",
            link: "#"
        },
        {
            pic: pic,
            title: "Flours, Rava, Dals, Pulses, Groceries Packaging",
            link: "#"
        },
        {
            pic: pic,
            title: "Flours, Rava, Dals, Pulses, Groceries Packaging",
            link: "#"
        },
        {
            pic: pic,
            title: "Flours, Rava, Dals, Pulses, Groceries Packaging",
            link: "#"
        },
        {
            pic: pic,
            title: "Flours, Rava, Dals, Pulses, Groceries Packaging",
            link: "#"
        },
        {
            pic: pic,
            title: "Flours, Rava, Dals, Pulses, Groceries Packaging",
            link: "#"
        },
    ]

  return (
    <div className='flex flex-col w-[80%] my-10 gap-5'>
        <h1 className='w-full text-center font-bold text-3xl'>What do you want to pack?</h1>
        <div className='flex flex-wrap w-full justify-center items-center'>
            {data.map((item, index) => (
                <ThreeDCardDemo key={index} pic={item.pic} title={item.title} link={item.link}/>
            ))}
        </div>
    </div>
  )
}

export default CardsSection