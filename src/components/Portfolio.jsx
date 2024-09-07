import React from 'react'
import pizza from "../assets/Pizza.jpeg"
import facebook from "../assets/facebook.png"
import microsoft from "../assets/microsoft.jpeg"
import navbar from "../assets/navbar.jpeg"
import polio from "../assets/folio.png"
import heart from "../assets/heart.png"
import note from "../assets/note.png"
import blog from "../assets/blog.png"
import acc from "../assets/acc.png"

const Portfolio = () => {

        const folio=[
            {
                id:1,
                src:blog,
                view:"https://github.com/kritvikjubli/Blog-Website.git"
            },
            {
                id:2,
                src:acc,
                view:"https://github.com/kritvikjubli/Pizza_site_using_bootstrap-.git"
            },
            {
                id:4,
                src:heart,
                view:"https://github.com/kritvikjubli/Health_guard.git"
            },
            {
                id:5,
                src:note,
                view:"https://github.com/kritvikjubli/Taking_Notes.git"
            },
            {
                id:6,
                src:polio,
                view:"https://github.com/kritvikjubli/portfolio-bharat-intern.git"
            },
            {
                id:7,
                src:pizza,
                view:"https://github.com/kritvikjubli/Pizza_site_using_bootstrap-.git"
            },
            {
                id:8,
                src:pizza,
                view:"https://github.com/kritvikjubli/Pizza_site_using_bootstrap-.git"
            },
            {
                id:9,
                src:facebook,
                view:"https://github.com/kritvikjubli/Facebook_clone_tailwind.git"
            },
            {
                id:10,
                src:microsoft,
                view:"https://github.com/kritvikjubli/Microsoft_clone.git"
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
            {folio.map(({id,src,view})=>(

              <div key={id} className='shadow-md shadow-gray-600 rounded-lg '>
                <img src={src} alt="#"  className='w-fit  rounded-md  duration-200 hover:scale-110 ' />
                <div className='flex items-center justify-center'>
                    <a href={view} target='_blank' rel="noreferrer">
                    <button className='w-1/2 px-6 py-2 m-4 duration-200 hover:scale-110'>demo</button></a>
                    <a href={view} target='_blank' rel="noreferrer">
                    <button className='w-1/2 px-6 py-2 m-4 duration-200 hover:scale-110'>code</button></a>
                </div>
              </div>

                ))}
            </div>
        </div>
    </div>
  )
}

export default Portfolio
