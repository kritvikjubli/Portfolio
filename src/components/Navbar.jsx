import React, { useState } from 'react'
import {FaBars,FaTimes} from "react-icons/fa"
import {Link} from "react-scroll"

const Navbar = () => {

    const[nav,setnav]=useState(false);

    const links=[
        {
            id:1,
            link : "Home"
        },{
            id:2,
            link : "About"
        },{
            id:3,
            link : "Portfolio"
        },{
            id:4,
            link : "Experience"
        },{
            id:5,
            link : "Contact"
        },
    ]
  return (
    <>
    <div className='flex justify-between items-center w-full h-20 text-white fixed bg-violet-600 px-4'>
      <Link to='Contact' smooth duration={600}>
        <h1 className='font-signature text-5xl ml-2 duration-1000 hover:scale-150 hover:rotate-[720deg]'>Kritvik</h1>
      </Link>
      <ul className='hidden md:flex'>
        {links.map(({id,link})=>(
            <li key={id} className='px-4 cursor-pointer font-medium text-slate-300 hover:scale-[130%] hover:text-white duration-150 '> 
          <Link to={link} smooth duration={400}>
            {link} 
          </Link>
          </li>
        ))}
      </ul>

      <div onClick={()=>setnav(!nav)} className='md:hidden cursor pointer pr-4 z-10  text-gray-700 hover:text-slate-300 ' >
        {nav ? <FaTimes size={30} /> :<FaBars size={30}/>}
      </div>
      {nav &&(

          <ul className='flex flex-col justify-center items-center absolute bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 top-0 left-0 w-full h-screen ' >
            {links.map(({id,link})=>(
                <li key={id} className='px-4 py-6 text-4xl cursor-pointer font-medium text-gray-600 hover:scale-110 hover:text-slate-200 duration-150 '>
                 <Link onClick={()=>setnav(!nav)} to={link} smooth duration={600}>
                    {link} 
                  </Link>
                    </li>
                ))}
            </ul>
                )}
    </div>
    </>
  )
}

export default Navbar