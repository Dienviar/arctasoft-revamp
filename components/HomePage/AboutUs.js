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
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.
                    </p>
                </div>
            </article>

            <article className='flex items-center w-full h-auto mt-10 our-products screen750px:grid'>
                <div className='vmssion w-full h-[300px] flex justify-center items-center px-2 rotateY_150deg'>
                    <div className='w-full h-auto bg-[rgb(0,128,128,0.1)] rounded-xl'>
                        <div className='flex items-center justify-center w-full h-20'>
                            <AiOutlineEye className='w-16 h-16 text-pal_green'/> 
                        </div>

                        <div className='w-full h-auto px-5 text-center'>
                            <p className='text-2xl font-bold text-pal_green'>Vision</p>
                            <p className='py-5 text-base text-black'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                            </p>
                        </div>
                    </div>
                </div>
                
               <div className='vmssion w-full h-[300px] flex justify-center items-center px-2 screen750px:-mt-10 rotateY_150deg'>
                    <div className='w-full h-auto bg-[rgb(0,128,128,0.1)] rounded-xl'>
                        <div className='flex items-center justify-center w-full h-20'>
                            <BsFlag className='w-14 h-14 text-pal_green'/> 
                        </div>

                        <div className='w-full h-auto px-5 text-center'>
                            <p className='text-2xl font-bold text-pal_green'>Mission</p>
                            <p className='py-5 text-base text-black '>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
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