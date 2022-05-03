import React from 'react'
import Orbit from '../Orbit/Orbit'

const Landing = () => {
  return (
    <section className='flex items-center justify-center w-full h-auto screen420px:mt-10'>
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
                        <p className='text-lg text-black screen600px:text-base'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
            </article>

            <article className='relative flex justify-center w-full h-[500px] items-center screen550px:h-[400px] screen500px:h-[300px]'>
                <Orbit/>
            </article>
        </div>
    </section>
  )
}

export default Landing