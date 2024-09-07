import React from 'react';
import Me from "../assets/Me.jpg" ;
import {Link} from "react-scroll"
import {MdOutlineKeyboardArrowRight} from "react-icons/md";
const Home = () => {
  return (
    <div name="Home" className='h-screen w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
        <div className='max-w-screen-xl mx-auto flex flex-col justify-center items-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center md:h-full '>
                <h2 className='text-4xl sm:text-7xl font-bold text-white'>
                    I'm a Engineering Student
                </h2>
                <p className='text-slate-200 py-4 max-w-md '>
                   Currently, I am a pursuing my Bachelor's in Computer Science from Graphic Era Hill University.
                   i love to work on development  using technologies like 
                   Tailwind and React.
                </p>
                <div>
                    <button className='flex text-slate-200 w-fit px-6 py-3 my-5 items-center rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-blue-500 group'>
                        <Link to="Portfolio" smooth duration={800}>Portfolio</Link>
                        <span className='group-hover:rotate-90 duration-200 ml-1 group-hover:scale-150'>
                        <MdOutlineKeyboardArrowRight size={25}/>
                        </span>
                    </button>
                </div>
            </div>
            <div >
                <img className=' rounded-3xl mx-auto w-2/3 md:w-[80%] my-auto' src={Me} alt="My Profile" />
            </div>
        </div>
    </div>
  )
}

export default Home