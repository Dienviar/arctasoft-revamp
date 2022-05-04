import React from 'react'
import { AiFillFacebook, AiFillLinkedin } from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'

const Footer = () => {
  return (
    <footer className='w-full h-[400px]'>
      <div className='w-full h-[300px] bg-[rgb(0,128,128,0.1)] flex justify-center items-center'>
        <section>
          <div className='flex items-center justify-center w-full h-auto'>
            <img src="./Logo/icon.png" alt="Arctasoft Icon" className='w-auto h-36' />
          </div>

          <div className='flex items-center justify-center w-full h-auto mt-5'>
            <p className='text-base text-pal_blue'>info@arctasoft.com</p>
          </div>

          <div className='flex items-center justify-center w-full h-auto'>
            <AiFillFacebook className='w-10 h-10 text-pal_green'/>
            <AiFillLinkedin className='w-10 h-10 text-pal_green'/>
            <MdEmail className='w-10 h-10 text-pal_green'/>
          </div>
        </section>
      </div>

      <div className='w-full h-[100px] flex justify-center items-center'>
        <section>
          <div className='w-full h-auto mt-5 text-center'>
            <p className='text-base text-pal_blue'>@ 2021 Arctasoft, Inc. All right reserved</p>
            <p className='text-base text-pal_green'>Privacy Policy</p>
          </div>
        </section>
      </div>
    </footer>
  )
}

export default Footer