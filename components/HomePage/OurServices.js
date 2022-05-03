import React, { useEffect } from 'react'
import { BiBuildings } from 'react-icons/bi'
import { FaMobileAlt } from 'react-icons/fa'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)


const OurServices = () => {

    useEffect(() => {
        gsap.to(".cart", {
            opacity: 1,
            duration: 2,
            scrollTrigger: {
                trigger: ".cart",
                start: "30% bottom"
            }
        })

        gsap.to(".mobile", {
            opacity: 1,
            duration: 2,
            delay: .5,
            scrollTrigger: {
                trigger: ".mobile",
                start: "30% bottom"
            }       
        })

        gsap.to(".building", {
            opacity: 1,
            duration: 2,
            delay: 1,
            scrollTrigger: {
                trigger: ".building",
                start: "30% bottom"
            }                 
        })
    }, [])
    

  return (
    <section className='flex justify-center w-full h-auto mt-48 screen800px:mt-36 screen420px:mt-20'>
        <div className='w-[1100px] h-auto px-5'>
            <article className='flex items-center justify-center w-full h-20 '>
                <div className='w-auto h-auto text-center'>
                    <p className='text-4xl font-bold text-pal_blue'>Our Services</p>
                    <p className='text-lg text-gray-400'>Your partner in creating powerful application</p>
                </div>
            </article>

            <article className='flex items-center w-full h-auto mt-16 screen600px:grid'>
                <div className='flex justify-center w-full h-20'>
                    <p className='flex items-center justify-center w-full px-2 text-2xl font-semibold text-center vertical-right text-pal_green screen800px:text-xl'>Scalable Platforms</p>
                </div>
                <div className='flex justify-center w-full h-20'>
                    <p className='flex items-center justify-center w-full px-2 text-2xl font-semibold text-center vertical-right text-pal_green screen800px:text-xl'>Powerful Data Analytics Solutions</p>
                </div>

                <div className='flex justify-center w-full h-20'>
                    <p className='flex items-center justify-center w-full px-2 text-2xl font-semibold text-center text-pal_green screen800px:text-xl'>Productivity Applications</p>
                </div>
            </article>

            <article className='flex items-center justify-center w-full h-auto mt-16 screen650px:flex-wrap'>
                <div className='building w-full h-[190px] border-2 rounded-xl border-pal_green mx-3 opacity-0 screen650px:mt-7'>
                    <div className='flex items-center justify-center w-full h-20'>
                        <BiBuildings className='w-12 h-12 text-pal_blue'/>
                    </div>

                    <div className='flex items-center justify-center w-full h-auto'>
                        <div className='w-[150px]'>
                            <p className='px-3 text-lg font-semibold text-left text-pal_blue screen650px:text-center'>Enterprise Software Developent</p>
                        </div>
                    </div>
                </div>
                
                <div className='mobile w-full h-[190px] border-2 rounded-xl border-pal_green mx-3 opacity-0 screen650px:mt-7'>
                    <div className='flex items-center justify-center w-full h-20'>
                        <FaMobileAlt className='w-12 h-12 text-pal_blue'/>
                    </div>

                    <div className='flex items-center justify-center w-full h-auto'>
                        <div className='w-[150px]'>
                            <p className='px-3 text-lg font-semibold text-left text-pal_blue screen650px:text-center'>Mobile Application Development</p>
                        </div>
                    </div>
                </div>

                <div className='cart w-full h-[190px] border-2 rounded-xl border-pal_green mx-3 opacity-0 screen650px:mt-7'>
                    <div className='flex items-center justify-center w-full h-20'>
                        <AiOutlineShoppingCart className='w-12 h-12 text-pal_blue'/>
                    </div>

                    <div className='flex items-center justify-center w-full h-auto'>
                        <div className='w-[150px]'>
                            <p className='px-3 text-lg font-semibold text-left text-pal_blue screen650px:text-center'>E-Commerce Platform Development</p>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    </section>
  )
}

export default OurServices