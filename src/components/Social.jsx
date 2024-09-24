import React from 'react'
import { FaFax, FaGithub,FaLinkedin, } from 'react-icons/fa'
import resume from '../assets/resume.pdf'
import{HiOutlineMail} from "react-icons/hi"

const Social = () => {
  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
        <ul>
         <li className='flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] hover:rounded-xl duration-[400ms] '>
            <a className='flex justify-between items-center w-full text-white' href={resume} download="resume" target="_blank" rel="noreferrer" > 
         <>Resume  <FaFax size={30}/> </>   
         </a>
         </li>
        <li className='flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] hover:rounded-xl duration-[400ms] '>
            <a className='flex justify-between items-center w-full text-white' href="https://www.linkedin.com/in/kritvik-jubli-668118228/" target="_blank" rel="noreferrer" > 
         <>Likedin  <FaLinkedin size={30}/> </>   
         </a>
         </li>
         <li className='flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] hover:rounded-xl duration-[400ms] '>
            <a className='flex justify-between items-center w-full text-white' href="https://github.com/ "target="_blank" rel="noreferrer" > 
         <>Github <FaGithub size={30}/> </>   
         </a></li>
         <li className='flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] hover:rounded-xl duration-[400ms] '>
            <a className='flex justify-between items-center w-full text-white' href="mailto:hsharrykj@gmail.com" target="_blank" rel="noreferrer" > 
         <>Mail<HiOutlineMail size={30}/> </>   
         </a></li>
        </ul>
    </div>
    
  )
}

export default Social