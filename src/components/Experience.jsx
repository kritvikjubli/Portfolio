import React from 'react'
import html   from "../assets/Experience/html.png"
import css   from "../assets/Experience/css.png"
import  js  from "../assets/Experience/js.png"
import   reactimg from "../assets/Experience/reactimg.png"
import tailwind from "../assets/Experience/tailwind.png"
import  c  from "../assets/Experience/c.png"
import  cpp  from "../assets/Experience/cpp.jpeg"
import java from "../assets/Experience/java.png"
import  leetcode  from "../assets/Experience/leetcode.png"
import  gfg  from "../assets/Experience/gfg.jpeg"
import git from "../assets/Experience/git.jpeg"

const Experience = () => {

    const exp=[
        {
            id:1,
            src:html,
            title:'HTML',
            style:"shadow-orange-500",
            page:"https://www.w3schools.com/html/"
        },
        {
            id:2,
            src:css,
            title:'CSS',
            style:"shadow-blue-500",  
            page:"https://www.javatpoint.com/css-tutorial"
        },
        {
            id:3,
            src:js,
            title:'Java Script',
            style:"shadow-yellow-500",
            page:"https://www.w3schools.com/js/"
        },
        {
            id:4,
            src:reactimg,
            title:'React',
            style:"shadow-blue-600",
            page:"https://react.dev/"
        },
        {
            id:5,
            src:tailwind,
            title:'Tailwind',
            style:"shadow-blue-500",
            page:"https://tailwindcss.com/"
        },
        {
            id:6,
            src:c,
            title:'C Language',
            style:"shadow-blue-500",
            page:"https://www.w3schools.com/c/c_intro.php"
        },
        {
            id:7,
            src:cpp,
            title:'C++ Language',
            style:"shadow-blue-500",
            page:"https://www.programiz.com/cpp-programming"
        },
        {
            id:8,
            src:java,
            title:'Java Language',
            style:"shadow-blue-500",
            page:"https://www.java.com/en/"
        },
        {
            id:9,
            src:leetcode,
            title:'Leetcode',
            style:"shadow-white",
            page:"https://leetcode.com/Kritvik07/"
        },
        {
            id:10,
            src:gfg,
            title:'GeeksForGeeks',
            style:"shadow-green-500",
            page:"https://auth.geeksforgeeks.org/user/kritvik_jubli/?utm_source=geeksforgeeks&utm_medium=my_profile&utm_campaign=auth_user"
        },
        {
            id:11,
            src:git,
            title:'GitHub',
            style:"shadow-black",
            page:"https://github.com/kritvikjubli"
        },
    ]

  return (
    <div name="Experience" className="bg-gradient-to-br from-indigo-500 from-20% via-sky-500 via-40% to-emerald-500  w-full h-screen">
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
            <div>
                <p className='text-4xl font-bold border-b-4 inline  border-gray-500'>Experience</p>
                <p className='py-6'>There are the Technology, Platform and the Languages I've worked on...  </p>
            </div>
            <div className='w-full grid grid-cols-3 sm:grid-cols-4
            gap-8 text-center py-8 sm:py-0'>
                {exp.map(({id,src,title,style,page})=>(
                <div key={id}  className={`shadow-md hover:scale-110 duration-200 py-2 rounded-lg  ${style} cursor-pointer `}>
                   <a href={page} target='_blank' rel="noreferrer" >
                     <img src={src}  alt="" className="w-20 mx-auto " />
                    <p className='mt-4'>{title}</p>
                    </a>
                </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Experience