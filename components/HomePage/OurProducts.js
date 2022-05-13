import React, { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const OurProducts = () => {

    useEffect(() => {
        gsap.to(".our-products" ,{
            opacity: 1,
            duration: 2,
            scrollTrigger: {
                trigger: ".our-products",
                start: "30% bottom"
            }
        })

        gsap.to(".span1" ,{
            opacity: 1,
            duration: 2,
            delay: .5,
            scrollTrigger: {
                trigger: ".span1",
                start: "30% bottom"
            }
        }) 
        
        gsap.to(".span2" ,{
            opacity: 1,
            duration: 2,
            delay: 1.5,
            scrollTrigger: {
                trigger: ".span2",
                start: "30% bottom"
            }
        })  

        gsap.to(".span3" ,{
            opacity: 1,
            duration: 2,
            delay: 1,
            scrollTrigger: {
                trigger: ".span3",
                start: "30% bottom"
            }
        })  


        gsap.to(".span4" ,{
            opacity: 1,
            duration: 2,
            scrollTrigger: {
                trigger: ".span4",
                start: "30% bottom"
            }
        })  
    }, [])
    

  return (
    <section className='flex justify-center w-full h-auto mt-48 screen800px:mt-36 screen420px:mt-20'>
        <div className='w-[1100px] h-auto px-5'>
            <article className='flex items-center justify-center w-full h-20 text-center mb-52 screen900px:mt-20'>
                <p className='text-6xl font-bold text-pal_blue screen900px:text-4xl'>
                    <span className='opacity-0 span1'>Building </span> 
                    <span className='opacity-0 span2'>scalable </span> 
                    <span className='opacity-0 span3 text-pal_green'>solutions </span> 
                    that transform 
                    <span className='opacity-0 span4'> business</span>
                </p>
            </article>

            <article className='flex items-center justify-center w-full h-20 '>
                <div className='w-auto h-auto text-center'>
                    <p className='text-4xl font-bold text-pal_blue'>Our Products</p>
                    <p className='text-lg text-gray-400'>Choose what you need</p>
                </div>
            </article>

            <article className='flex items-start w-full h-auto mt-10 opacity-0 our-products screen1020px:grid'>
                <div className='flex justify-center w-full h-full'>
                    <img src="./Product.png" alt="Laptop" className='h-[400px] screen1020px:w-full screen1020px:h-auto p-3 rounded-md shadow-sm screen1020px:p-0'/>
                </div>
                <div className='flex w-full h-full mt-8 screen1020px:mt-16'>
                    <div>
                        <p className='text-3xl font-bold text-pal_green'>
                            Digital Menu
                        </p>
                        <p className='mt-3 text-base text-justify text-black'>
                            Our product helps companies solve complex problems through the creation of highly scalable solutions. We take a holistic approach, using proprietary technology to engage the entire organization and drive change.
                            We offer a comprehensive range of applications and services. Our solutions are built using the best-in-class technologies. We have a strong commitment to quality, continuous improvement and innovation. We collaborate with our customers to align their business and technology goals.
                        </p>
                    </div>
                </div>
            </article>
        </div>
    </section>
  )
}

export default OurProducts