import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '../../common/_assets/logo.png'

function Footer() {
  return (
    <div className='bg-[#0B0C26] text-white flex flex-wrap md:flex-row  md:items-start items-center flex-col gap-8 w-full py-10 px-2 justify-evenly'>
      <div className="lg:w-[300px] w-full min-w-[150px] h-[15vh] relative rounded items-center justify-center">
        <Image src={logo.src} alt='logo' objectFit="contain" layout="fill"/>
      </div>
      <div className=" flex flex-col min-w-[250px] items-center gap-3 justify-evenly">
        <h2 className='text-xl font-bold '>Page Links</h2>
        <Link href={"#"}>Page1</Link>
        <Link href={"#"}>Page2</Link>
        <Link href={"#"}>Page3</Link>
        <Link href={"#"}>Page4</Link>
        <Link href={"#"}>Page5</Link>
      </div>
      <div className=" flex  flex-col items-center gap-3 min-w-[250px]  ">
        <h1 className='text-xl font-bold '>Contact</h1>
        <div className=""></div>
        <p>abc@company.com</p>
        <p>xyz@company.com</p>
        <p>+91 XXXXXXXXXX</p>
        <p>080 XXXXXXXXXX</p>
      </div>
</div>
  )
}

export default Footer