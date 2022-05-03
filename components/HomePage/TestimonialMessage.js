import React from 'react'
import { MdPersonPin } from 'react-icons/md'

const TestimonialMessage = ({ name, position}) => {
  return (
    <article className='flex items-center w-full h-auto slider'>
        <div className='w-full h-[500px] flex justify-center items-center'>
            <div className='w-[700px] h-auto bg-white rounded-xl shadow-md px-3 py-5'>
                <div className='flex items-center justify-center w-full h-20'>
                    <MdPersonPin className='w-16 h-16 text-gray-400'/>
                </div>

                <div className='w-full h-auto text-center'>
                    <p className='text-xl font-semibold text-pal_blue'>{name}</p>
                    <p className='text-base text-gray-400'>{position}</p>
                    <p className='text-base font-semibold text-pal_blue'>Company Name</p>
                </div>

                <div className='w-full h-auto mt-10 text-left'>
                    <p className='text-base text-black'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>
        </div>
    </article>
  )
}

export default TestimonialMessage