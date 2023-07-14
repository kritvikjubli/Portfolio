import React from 'react'
import pizza from "../assets/Pizza.jpeg"
import facebook from "../assets/facebook.png"
import microsoft from "../assets/microsoft.jpeg"
import navbar from "../assets/navbar.jpeg"
const Portfolio = () => {

        const folio=[
            {
                id:1,
                src:pizza
            },
            {
                id:2,
                src:facebook,
                
            },
            {
                id:3,
                src:microsoft
            },
            {
                id:4,
                src:navbar
            },
        ]
    

  return (
    <div name="Portfolio" className='bg-gradient-to-br from-indigo-500 from-20% via-sky-500 via-40% to-emerald-500 to-90% w-full  text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-400'>Portfolio</p>
                <p className='py-6'> Checkout Some work of my here </p>
            </div>

            <div  className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
            {folio.map(({id,src})=>(

              <div key={id} className='shadow-md shadow-gray-600 rounded-lg '>
                <img src={src} alt="#"  className='w-fit  rounded-md  duration-200 hover:scale-110 ' />
                <div className='flex items-center justify-center'>
                    <button className='w-1/2 px-6 py-2 m-4 duration-200 hover:scale-110'>demo</button>
                    <button className='w-1/2 px-6 py-2 m-4 duration-200 hover:scale-110'>code</button>
                </div>
              </div>

                ))}
            </div>
        </div>
    </div>
  )
}

export default Portfolio