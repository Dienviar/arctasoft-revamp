import React from 'react'
import { MdPersonPin } from 'react-icons/md'

const TestimonialMessage = ({ name, position, message, company}) => {
  return (
    <article className='flex items-center w-full h-auto slider'>
        <div className='w-full h-[500px] flex justify-center items-center'>
            <div className='w-[700px] h-auto bg-white rounded-xl shadow-md px-3 py-5 screen750px:w-full'>
                <div className='flex items-center justify-center w-full h-20'>
                    <MdPersonPin className='w-16 h-16 text-gray-400'/>
                </div>

                <div className='w-full h-auto text-center'>
                    <p className='text-xl font-semibold text-pal_blue'>{name}</p>
                    <p className='text-base text-gray-400'>{position}</p>
                    <p className='text-base font-semibold text-pal_blue'>{company}</p>
                </div>

                <div className='w-full h-auto mt-10 text-justify'>
                    <p className='text-base text-black'>
                        {message}
                    </p>
                </div>
            </div>
        </div>
    </article>
  )
}

export default TestimonialMessage