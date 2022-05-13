import React, { useEffect } from 'react'
import { AiOutlineEye } from 'react-icons/ai'
import { BsFlag } from 'react-icons/bs'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const AboutUs = () => {

    useEffect(() => {
        gsap.to(".vmssion", {
            rotateY: 0,
            duration: 1,
            scrollTrigger: {
                trigger: ".vmssion",
                start: "30% bottom"
            }
        })
    }, [])
    

  return (
    <section className='flex justify-center w-full h-auto mt-48 screen800px:mt-36 screen420px:mt-20'>
        <div className='w-[1100px] h-auto px-5'>
            <article className='flex items-center justify-center w-full h-20 '>
                <div className='w-auto h-auto text-center'>
                    <p className='text-4xl font-bold text-pal_blue'>About Us</p>
                    <p className='text-lg text-gray-400'>Who are we</p>
                </div>
            </article>

            <article className='flex items-center w-full h-auto mt-10 our-products'>
                <div className='w-full h-auto bg-[rgb(0,128,128,0.1)] text-justify rounded-xl'>
                    <p className='p-5 text-lg text-black'>
                        Arctasoft is a software development company that specializes in intuitive, customizable, and easy to use software. We strive to enhance the quality of our clients' business through developed software. We provide a range of web and mobile application development services for companies who need a firm to get their new product idea off the ground and running, and to turn the vision into reality.
                    </p>
                </div>
            </article>

            <article className='flex items-center w-full h-auto mt-10 our-products screen750px:grid'>
                <div className='vmssion w-full h-[300px] flex justify-center items-center px-2 rotateY_150deg screen750px:h-auto'>
                    <div className='w-full h-auto bg-[rgb(0,128,128,0.1)] rounded-xl'>
                        <div className='flex items-center justify-center w-full h-20'>
                            <AiOutlineEye className='w-16 h-16 text-pal_green'/> 
                        </div>

                        <div className='w-full h-[170px] px-5 text-center'>
                            <p className='text-2xl font-bold text-pal_green'>Vision</p>
                            <p className='py-5 text-base text-black'>
                                To solve business challenges and provide software solutions.
                            </p>
                        </div>
                    </div>
                </div>
                
               <div className='vmssion w-full h-[300px] flex justify-center items-center px-2 screen750px:mt-5 rotateY_150deg screen750px:h-auto'>
                    <div className='w-full h-auto bg-[rgb(0,128,128,0.1)] rounded-xl'>
                        <div className='flex items-center justify-center w-full h-20'>
                            <BsFlag className='w-14 h-14 text-pal_green'/> 
                        </div>

                        <div className='w-full h-[170px] px-5 text-center'>
                            <p className='text-2xl font-bold text-pal_green'>Mission</p>
                            <p className='py-5 text-base text-black '>
                                To empower business of all sizes on their journey of digital transformation by creating innovative, high-quality software solutions.
                            </p>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    </section>
  )
}

export default AboutUs