import React from 'react'

function AboutUs() {
  return (
    <div className='flex w-[85%] my-10 justify-between items-center'>
        <div className="bg-gray-500 w-[40%] h-[50vh] rounded-lg md:block hidden">.</div>
        <div className="flex flex-col gap-5 md:w-[55%] w-[100%]">
        <h1 className='text-3xl font-bold'>Who we are & What do we do?</h1>
        <div className="bg-gray-500 w-[100%] h-[50vh] rounded-lg md:hidden block">.</div>
        <div className=" ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint inventore cumque enim sapiente fuga dolores aliquid excepturi quo dolor. Incidunt dolor et minima perferendis eius quasi qui numquam doloremque ut est distinctio, nemo corporis ab, inventore culpa neque? Molestiae nemo fugit nihil provident deserunt dolore aspernatur, adipisci voluptas, corrupti odio quam quaerat.</div>
        <button className="w-[150px] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded-full">
            Button
        </button>
        </div>
    </div>
  )
}

export default AboutUs