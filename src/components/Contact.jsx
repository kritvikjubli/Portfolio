import React from 'react'

const Contact = () => {
  return (
    <div name="Contact" className='h-screen w-full bg-gradient-to-br from-indigo-500 from-20% via-sky-500 via-40% to-emerald-500 to-90% text-white'>
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4'>
                    Contact
                </p>
                <p className='py-6'>
                    Submit the form below to get in touch with me.
                </p>
            </div>
            <div className='flex justify-center items-center'>
                <form action="https://getform.io/f/77d60bca-9010-4a14-a66f-8de9554637dd" method='post' className='flex flex-col w-full md:w-1/2'>
                    <input type="text" name="name" placeholder='Your Name' className='p-2 font-bold placeholder:text-gray-200 bg-transparent border-2 rounded-md text-white focus:outline-none' />
                    <input type="text" name="email" placeholder='Your Email' className='my-4 p-2 font-bold placeholder:text-gray-200 bg-transparent border-2 rounded-md text-white focus:outline-none' />
                    <textarea name="message" rows="10" placeholder="Enter the message "className='p-2 placeholder:text-gray-200 font-bold bg-transparent border-2 rounded-md text-white focus:outline-none' ></textarea>
                    <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center justify-center rounded-md hover:scale-110'>Lets talk</button>
                </form>
            </div>
        </div>
    </div>
  )
}


 

export default Contact