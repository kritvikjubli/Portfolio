import React from 'react'

const About = () => {
  return (
    <div name="About" className='w-full h-screen bg-gradient-to-br from-indigo-500 from-20% via-sky-500 via-40% to-emerald-500 to-90% text-white' >
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-fuchsia-500 '>About</p>
            </div>
            <p className='text-xl mt-20'>
              
            Welcome to my portfolio! I am a highly motivated and versatile individual with a passion for personal and professional growth. 
            <span className='hidden md:-block'>
            Throughout my journey, I have acquired a diverse skill set and developed a strong foundation in various fields.

Education has played a pivotal role in shaping my knowledge and expertise.</span>
 I am pursuing degree in<b> BTech in Computer Science </b> from <b>Graphic Era Hill University</b>. 
My academic journey has equipped me with a solid understanding of <b>React , Tailwind , JS , HTML, CSS , C , C++ , JAVA </b>, enabling me to approach challenges.

In addition to my academic achievements, I have actively pursued opportunities to expand my practical skills.
These experiences have honed my abilities <b> Web developer, Testing, Coder.</b>
<span className='hidden md:-block'>
Throughout my professional journey, I have demonstrated strong leadership and communication skills.
 I have successfully managed teams and projects, collaborating with diverse stakeholders to achieve desired outcomes.
 My ability to adapt quickly to changing environments and effectively problem-solve has been instrumental in delivering exceptional results.              
              </span>
              </p> 
             <br />
            <p className='text-xl'>
 <span className='hidden md:-block'>
            Creativity and innovation are at the core of my approach. I am passionate about creative pursuits such as <b> writing, design, photography, etc.</b>
In this portfolio, you will find a collection of my best work, showcasing my skills, accomplishments,
 and growth over time. Each project represents a unique challenge I have taken on, demonstrating my ability to adapt, learn, and excel in various settings.
              </span>
Thank you for taking the time to explore my portfolio. I look forward to the opportunity to connect, collaborate, and make a positive contribution in the future.
            </p>
        </div>
    </div>
  )
}

export default About
