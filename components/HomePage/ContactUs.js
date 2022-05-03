import React from 'react'
import Button from '@mui/material/Button';

const ContactUs = () => {
  return (
   <section className='flex justify-center w-full h-auto mt-48 screen800px:mt-36 screen420px:mt-20'>
        <div className='w-[1100px] h-auto px-5'>
            {/* <article className='flex items-center justify-center w-full h-20 '>
                <div className='w-auto h-auto text-center'>
                    <p className='text-4xl font-bold text-pal_blue'>About Us</p>
                    <p className='text-lg text-gray-400'>Who are we</p>
                </div>
            </article> */}

            <article className='flex items-center w-full h-auto mt-10 our-products screen900px:grid'>
                <div className='w-full h-[300px] flex justify-center items-center'>
                    <div className='w-auto h-auto text-left screen900px:text-center'>
                        <p className='text-4xl font-bold text-pal_blue screen500px:text-3xl'>Need a customized app?</p>
                        <p className='text-4xl font-bold text-pal_green screen500px:text-3xl'>Come and talk with us!</p>
                    </div>
                </div>
                
                <div className='w-full h-[300px] flex justify-center items-center screen900px:h-auto screen900px:-mt-20'>
                    <Button variant="contained" style={{ backgroundColor : "#017f7f" }} className='w-[250px] h-[60px] screen500px:w-[200px] screen500px:h-[50px]'><span className='text-2xl screen500px:text-xl'>Contact Us</span></Button>
                </div>
            </article>
        </div>
    </section>
  )
}

export default ContactUs