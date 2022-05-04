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

            <article className='flex items-center w-full h-auto mt-10 opacity-0 our-products screen1020px:grid'>
                <div className='flex justify-center w-full h-full'>
                    <img src="./Product.png" alt="Laptop" className='h-[400px] screen1020px:w-full screen1020px:h-auto p-3 rounded-md shadow-sm screen1020px:p-0'/>
                </div>
                <div className='flex w-full h-full screen1020px:mt-16'>
                    <div>
                        <p className='text-3xl font-bold text-pal_green'>
                            Digital Menu
                        </p>
                        <p className='mt-3 text-base text-black text-justify'>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                        </p>
                    </div>
                </div>
            </article>
        </div>
    </section>
  )
}

export default OurProducts