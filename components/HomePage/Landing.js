import React, { useRef } from 'react'
import Orbit from '../Orbit/Orbit'

const Landing = () => {

    const home = useRef()
    
  return (
    <section ref={home} className='flex items-center justify-center w-full h-auto screen420px:mt-10 screen450px:-mb-20 screen600px:mb-20'>
        <div className='w-[1100px] h-[500px] flex justify-center px-5 mt-16 screen1020px:grid screen1020px:h-auto screen1020px:mt-0'>
            <article className='flex justify-center items-center w-full h-[500px]'>
                <div className='w-full h-auto'>
                    <div className='flex items-center w-full h-auto'>
                        <p className='text-5xl font-bold text-pal_green'>
                            We Build
                        </p>
                    </div>
                    <div className='flex items-center w-full h-auto mt-2'>
                        <p className='text-5xl font-bold text-pal_green'>
                            <span className='text-pal_blue'>Enterprise</span> Softwares
                        </p>
                    </div>
                    <div className='w-full h-auto mt-2'>
                        <p className='text-lg text-justify text-black screen600px:text-base'>
                            Arctasoft is the leading software provider for enterprise collaboration, enabling an enterprise to make a significant difference in the quality of their working life.
                        </p>
                    </div>
                </div>
            </article>

            <article id="orbit-comp" className='relative flex justify-center w-full h-[500px] items-center screen600px:h-[400px]'>
                <Orbit/>
            </article>
        </div>
    </section>
  )
}

export default Landing
